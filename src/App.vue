<template>
  <div id="app">
    <div class="container">
      <p class="tips">1. ctrl + s 保存查看渲染效果</p>
      <mavon-editor
        v-model="markdown"
        codeStyle="monokai"
        :ishljs="true"
        :boxShadow="false"
        @save="renderMakdown"
        defaultOpen="preview"
      />
    </div>

    <div class="container">
      <p class="tips">2. v-html 渲染编译后的html</p>
      <div class="render-container" v-html="html"></div>
    </div>


    <div class="container">
      <p class="tips">3. 直接用 mavon-editor 渲染 markdown</p>
      <mavon-editor
        v-model="markdown"
        codeStyle="monokai"
        :ishljs="true"
        :toolbarsFlag="false"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    markdown:
      "## how to use javascript \n ```js\nvar user={id: 1001, name: 'tom'};\nalert(user); \n```",
    html: ""
  }),
  methods: {
    renderMakdown(makdown, html) {
      this.html = html;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
.hr {
  line-height: 1px;
  background: red;
  color: red;
}
.v-note-wrapper.markdown-body {
  width: 100%;
  height: 100%;
}
.tips {
  background: #272822;
  color: skyblue;
}
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  .hr-line {
    line-height: 2;
    color: red;
    background: black;
    text-align: center;
  }
  .container {
    border: 1px solid #f00;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
    min-height: 500px;
  }
}
</style>
