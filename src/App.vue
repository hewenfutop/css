<template>
  <div id="app">
    <div class="left">
      <textarea v-model="output" rows="20"></textarea>
    </div>
    <div class="right">
      <div class="action">
        <span @click="parseValue">解析</span>
        <span @click="toggleOutputType('stylus')">stylus</span>
        <span @click="toggleOutputType('css')">css</span>
        <span @click="clearAll">清空</span>
      </div>
      <div class="box" v-for="box in CssData">
        <div class="title">{{box.title}}</div>
        <div class="content">
          <div class="row" v-for="row in box.rows">
            <div class="row-title" @click="clearRow(row)">
              {{row.name}}
              <span v-if="row.multiple">$</span>
            </div>
            <div class="row-content">
              <div class="btn" @click="toggle(btn,row,box)"
                   :class="{checked:btn.checked}"
                   v-for="btn in row.list">
                <span v-if="btn.color" class="color-box" :style="{backgroundColor:btn.label}"></span>
                {{btn.label}}
              </div>
            </div>
           <div class="row-input" v-if="row.define">
             <input type="text">
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CssData from './data/css.js'

export default {
  name: 'App',
  data () {
    return {
      CssData,
      outputType: 'stylus',
      values: [],
      output: ''
    }
  },
  methods: {
    toggleOutputType (type) {
      this.outputType = type
      this.calValue()
    },
    clearAll () {
      this.CssData.forEach(box => {
        box.rows.forEach(row => {
          row.list.forEach(btn => {
            this.$set(btn, 'checked', false)
          })
        })
      })
      this.calValue()
    },
    clearRow (row) {
      row.list.forEach(e => {
        this.$set(e, 'checked', false)
      })
      this.calValue()
    },
    toggle (btn, row) {
      this.$set(btn, 'checked', !btn.checked)
      if (btn.checked && !row.multiple) {
        row.list.forEach(e => {
          if (e !== btn) {
            this.$set(e, 'checked', false)
          }
        })
      }
      this.calValue()
    },
    calValue () {
      let arr = []
      this.CssData.forEach(box => {
        box.rows.forEach(row => {
          row.list.forEach(btn => {
            if (btn.checked) {
              arr.push(btn)
            }
          })
        })
      })
      this.values = arr
      this.output = this.values.map(e => {
        let temp = e.value.map(p => {
          if (this.outputType === 'css') {
            return `${p.name}:${p.value};`
          } else {
            return `${p.name} ${p.value}`
          }
        })
        return temp.join('\n')
      }).join('\n')
    },
    parseValue () {
      let code = this.output
      if (!code) {
        return
      }
      let lines = []
      if (this.outputType === 'stylus') {
        let arr = code.split('\n')
        arr = arr.map(e => e.trim()).filter(e => e)
        lines = arr.map(e => {
          let t = e.split(/\s+/)
          return {name: t[0], value: t[1]}
        })
      } else if (this.outputType === 'css') {
        let arr = code.split('\n')
        arr = arr.forEach(e => {
          e.replace(';', '')
          e.trim()
        }).filter(e => e)
        lines = arr.map(e => {
          let t = e.split(/\s+/)
          return {name: t[0], value: t[1]}
        })
      }
      console.log(lines)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
