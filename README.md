# todo-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2

aws s3 sync dist/ s3://vueui --acl public-read --delete 


http://vueui.s3-website-us-east-1.amazonaws.com/

aws cloudfront create-invalidation --distribution-id E3PQHOWSFH2X2D --paths /index.html
