module.exports = {
  core: { builder: 'webpack5', },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@invisionapp/dsm-storybook'
  ],
  typescript: {
     check: false,
     checkOptions: {},
     reactDocgen: false,
     reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
     },
  },
};
