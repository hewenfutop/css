function Stack () {
  this.data = []
}

Stack.prototype.push = function (data) {
  // console.log('入栈', data && data.selector)
  this.data.push(data)
}

Stack.prototype.pop = function () {
  // console.log('出栈', this.data.length ? this.data[this.data.length - 1].selector : null)
  this.data.pop()
}

Stack.prototype.peek = function () {
  let size = this.data.length
  return size ? this.data[size - 1] : null
}


function load (code, tabSize = 2) {
  let lines = parseSource(code, tabSize)
  return parseLevel(lines)
}

function parseSource (code = '', tabSize = 2) {
  let lines = code.split('\n')
  for (let i = 0, p = lines.length; i < p; i++) {
    let m = lines[i].match(/^(?<emptyStr>\s*)/)
    let emptyStr = m.groups && m.groups.emptyStr || ''
    let tab = emptyStr.split('').length
    lines[i] = {
      source: lines[i],
      tab: tab,
      level: ~~(tab / tabSize)
    }
  }
  // console.log(lines)
  return lines
}

function parseLevel (lines) {
  let p = lines.length
  for (let i = 0; i < p - 1; i++) {
    let current = lines[i]
    let next = lines[i + 1]
    if (current.level !== next.level) {
      if (current.level < next.level) {
        current.type = 'selector'
        current.name = current.source.replace(/\s*/g, '')
      } else {
        current.type = 'style'
      }
    } else if (/^\s*\$/.test(current.source)) {
      current.type = 'variable'
    } else {
      current.type = 'style'
      let arr = current.source.trim().split(/\s+/)
      current.name = arr[0]
      current.value = arr.slice(1).join(' ')

    }
  }

  let stylus = []
  let currentStyle = null
  for (let i = 0, p = lines.length; i < p; i++) {
    let current = lines[i]
    if (current.type === 'selector') {
      currentStyle && stylus.push(currentStyle)
      currentStyle = {
        selector: current,
        styles: [],
        level: current.level
      }
    } else if (current.type === 'style') {
      currentStyle && currentStyle.styles && currentStyle.styles.push(current)
    }
  }
  // console.log(stylus)

  let stack = new Stack()
  let styleRoot = null
  for (let i = 0, p = stylus.length; i < p - 1; i++) {
    // console.log('========================')
    // console.log(stack.data.map(e => `[${e.level}]${e.selector}`).join('\n'))
    let current = stylus[i]
    let next = stylus[i + 1]
    let peek = stack.peek()
    // console.log(current.selector, current.level, peek ? peek.level : 'peek null')
    if (peek) {
      if (current.level > peek.level) { // 缩进： current 是 peek的子集，current入栈
        // console.log('缩进')
        stack.push(current)
        peek.children = peek.children || []
        peek.children.push(current)
      } else if (current.level === peek.level) { // 同级： peek 结束，peek出栈，current入栈
        // console.log('同级')
        stack.pop()
        let parent = stack.peek()
        stack.push(current)
        if (parent) {
          parent.children = parent.children || []
          parent.children.push(current)
        }
      } else if (current.level < peek.level) { // 缩退： current结束，current 不需要入栈，peek 一直出栈
        // console.log('缩退')
        while (1) {
          let peek = stack.peek()
          if (!peek) {
            break
          } else if (peek.level > current.level) {
            stack.pop()
          } else if (peek.level === current.level) {
            // console.log('退到同级')
            stack.pop()
            let parent = stack.peek()
            stack.push(current)
            if (parent) {
              parent.children = parent.children || []
              parent.children.push(current)
            }
            break
          } else {
            break
          }
        }
      }
    } else {
      stack.push(current)
      styleRoot = current
    }
    // console.log(stack.data.map(e => `[${e.level}]${e.selector}`).join('\n'))
  }
  // console.log(styleRoot)
  return styleRoot
}

export default {
  load
}