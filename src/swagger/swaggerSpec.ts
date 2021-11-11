import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TUI Backend task service',
    version: '1.0.0',
  },
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
