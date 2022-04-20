## @ioa/validator

ioa/koa 中间件数据验证器。基于 typea 封装，支持中间件和直接调用两种用法。

### Install

```
npm install ioa/validator
```

```js
// 声明组件
export default {
  component: ["@ioa/config", "@ioa/koa", "@ioa/validator"],
};
```

## 使用示例

### 定义模型，在 validator 目录中创建验证类型声明文件

```js
// validator/home.js
export default {
  query: {
    limit: Number,
    page: Number
  },
};

// validator/login.js
export default {
   body: {
      id: Number,
      kk: String
   }
};

// validator/query.js
export default {
  query: {
    limit: Number,
    page: Number
  },
};
```

### 以中间件的方式使用验证器

```js
import ioa from "ioa";

const { router, middleware } = ioa.app();

const { validator } = middleware;

router.get("/", validator("home"), "home");

router.post("/login", validator("login"), "login");

router.get("/user", validator("query"), async (ctx) => {
  ctx.body = {};
});
```

### 在 controller 中直接调用

```js
import ioa from "ioa";

const { validator } = ioa.app();

export default async function (ctx) {

  const { query } = ctx;

  const { data } = validator.query.verify({ query });

  ctx.body = data;

}
```
