import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TUI Backend task service',
    description: 'This app was builded as a backend test task for TUI project. ' +
      'App provides a single endpoint for collecting repositories with their branches by userName.',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://api.github.com',
      description: 'Github API server'
    }
  ],
  tags: [
    {
      name: 'Github User Activity',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./**/swagger/**/*.yaml'],
};

export const swaggerUiOptions = {
  customJs: '../custom.js',
};

export default swaggerJSDoc(options);
