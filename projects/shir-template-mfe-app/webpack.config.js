const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shir-template-mfe-app',

  exposes: {
    './ExposedModule': './projects/shir-template-mfe-app/src/app/modules/exposed/exposed.module.ts',
    './ExposedComponent': './projects/shir-template-mfe-app/src/app/components/exposed/exposed.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
