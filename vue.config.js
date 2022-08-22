const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
      loaderOptions: {
          sass: {
              data: `
                  @import "@/assets/scss/custom.scss";
                  @import "@/assets/scss/setting.scss";
              `
          }
      }
  }
}