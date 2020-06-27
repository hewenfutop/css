import CheerIO from 'cheerio'


function parseHtml (code) {
  function walk (arr) {
    let res = arr.filter(e => e.type === 'tag').map(e => ({
      attrs: e.attribs || {},
      name: e.name,
      children: e.children
    }))

    for (let i = 0, p = res.length; i < p; i++) {
      if (res[i] && res[i].children && res[i].children.length) {
        res[i].children = walk(res[i].children)
      }
    }
    return res
  }

  code = `<div id="html-code-wrapper">${code}</div>`
  let $ = CheerIO.load(code)
  let data = $('#html-code-wrapper')
  if (data && data.length) {
    let root = data[0]
    let arr = []
    arr = walk(root.children)
    console.log(arr)
    return arr
  }
  return []
}

function parseLevel (arr) {
  console.log('进入', arr.length)

  function walk (arr, level) {
    for (let i = 0, p = arr.length; i < p; i++) {
      if (arr[i].attrs && arr[i].attrs.class) {
        arr[i].p = new Array(level + 1).join('  ') + '.' + arr[i].attrs.class
      }
      walk(arr[i].children || [], level + 1)
    }
  }

  walk(arr, 0)
}


function load (code) {
  let arr = parseHtml(code)
  console.log(arr)
  parseLevel(arr)
  console.log(arr)
  return null
}

export default {
  load
}