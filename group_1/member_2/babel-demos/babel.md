- npm install babel-cli -g
- npm install babel-cli babel-plugin-add-module-exports babel-preset-es2015 --save-dev
- .babelrc
    ```
    {
       "presets": ["es2015"],
       "plugins": ["add-module-exports"]
    }
    ```
- package.json
  ```
   "build": "babel src -d dist -w"
   ```
   
- npm run build