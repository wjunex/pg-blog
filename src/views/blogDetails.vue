<script setup>
import { ref } from 'vue'
import { marked } from 'marked'; // 将markdown格式转换为html格式
import hljs from 'highlight.js' // 为转换好的html代码块部分添加样式名，方便修改

/* 获取本地文件内容 */
import { loadFile } from '@/utils/loadFile.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    if (lang !== 'vue') {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    } else {
      /* vue代码使用html渲染（因为highlight.js无法处理vue） */
      const language = 'html'
      return hljs.highlight(code, { language }).value
    }

  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})


/* 博客内容 */
const details = ref({
  title: '博客',
  time: '2022-12-12',
  content: marked.parse(loadFile('./src/assets/blog.md') || '')
})


</script>

<template>
  <myHeader :title="details.title" :subheading="details.time"></myHeader>
  <myLayout>
   <div class="markdown-theme-light" v-html="details.content"></div>
  </myLayout>
</template>

<style scoped lang="scss">

</style>

<!-- markdown自定义样式 -->
<style  lang="scss">
@import 'highlight.js/styles/vs.css';
@import '@/assets/css/markdown.scss';
</style>