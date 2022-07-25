const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/global-styles/colors.scss";
          @import "@/global-styles/tipography.scss";
        `,
      },
    },
  },
};
