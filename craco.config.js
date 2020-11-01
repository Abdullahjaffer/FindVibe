const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#17AAF9",
              "@layout-header-background": "#f0f2f5",
              "@btn-border-radius-base": "16px",
              "@border-radius-base": "16px",
              "@layout-body-background": "#ffffff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
