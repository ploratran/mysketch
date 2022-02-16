# Authentication Microservice Frontend

## How to run client locally:

- To run frontend on port **4000**:

```
1. npm install
2. npm run build
3. npm run serve
```

### Dependencies or Dev Dependencies:

```
1. npm install --save-dev webpack webpack-cli webpack-dev-server
2. npm i --save-dev babel-core babel-loader babel-preset-env
3. npm install --save-dev css-loader style-loader
4. npm install --save-dev mini-css-extract-plugin html-webpack-plugin
5. npm install --save-dev @babel/preset-react @babel/preset-env @babel/preset-typescript @babel/runtime @babel/core @babel/plugin-transform-runtime
6. npm install --save-dev ts-loader ts-node
7. npm install --save-dev @types/react @types/react-dom @types/webpack @types/node @types/react-router-dom
8. npm install --save-dev nodemon rimraf
9. npm install axios babel-cli babel-preset-react-app source-map-loader
10.npm install semantic-ui-react semantic-ui-css
11. npm install babel-cli babel-preset-react-app
12. npm install react react-dom typescript
13. npm install formik yup
```

### Webpack Loaders:

1. **_babel-loader:_** instructs how babel work with webpack
2. **_babel-core:_** take in code, parse it, and generate some output files
3. **_babel-preset-env:_** ruleset for telling babel exactly what ES2015/6/7 syntax to look for and turn it into ES5 code
4. **_css-loader:_** knows how to deal with CSS imports
5. **_style-loader:_** takes CSS imports and adds them to HTML document
6. **ts-loader:** to use Typescript in the project

### Refernece:

#### react-router-dom v6: https://reactrouter.com/docs/en/v6/upgrading/v5

#### webpack configuration: https://www.udemy.com/course/webpack-2-the-complete-developers-guide/

#### Formik and Yup password validation:

1. https://stackoverflow.com/questions/62078851/yup-validate-password-contains-at-least-one-special-character
2. https://codesandbox.io/s/login-form-ftqwx?file=/src/LoginForm.tsx
3. https://codesandbox.io/s/l2r832l8x7?file=/src/index.js
