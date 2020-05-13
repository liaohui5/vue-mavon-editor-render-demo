<template>
  <div id="app">
    <p class="tips">1. ctrl + s 保存查看渲染效果</p>
    <div class="container">
      <mavon-editor
        v-model="markdown"
        codeStyle="monokai"
        :ishljs="true"
        :boxShadow="false"
        @save="renderMakdown"
        defaultOpen="preview"
      />
    </div>

    <p class="tips">2. v-html 渲染编译后的html</p>
    <!-- 注意: 直接渲染 v-html 需要全局导入组件的样式, 否则渲染的 html 没有样式 -->
    <!-- 直接渲染 html 有些样式是没有的, 比如 > 这个样式, 但是好处就是可以自己根据标签结构自定义样式 -->
    <div class="container">
      <div class="render-container" v-html="html"></div>
    </div>

    <p class="tips">3. 直接用 mavon-editor组件 渲染 markdown</p>
    <div class="container">
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
      "\n```js\nvar user={id: 1001, name: 'jerry'};\nalert(user);\n```\n> hello markdown\n - todo list",
    html: ""
  }),
  methods: {
    renderMakdown(makdown, html) {
      this.html = html;
    }
  }
};
</script>

<style lang="scss" scope>
html,
body {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.tips {
  background: #272822;
  color: skyblue;
  margin: 0;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;

  .container {
    border: 1px solid #f00;
    margin-bottom: 100px;
    width: 100%;
    min-height: 500px;
  }
}
</style>
