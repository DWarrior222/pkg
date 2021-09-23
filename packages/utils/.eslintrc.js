module.exports = {
  /**
   * 环境提供预定义的全局变量
   * 可以同时指定多个环境，不矛盾
   * browser、es6、es2021、node...
   */
  env: {
    browser: true,
    es2021: true,
  },
  /**
   * extends 用来集成最佳实践的配置方案。配置的内容实际就是别人配置好的.eslintrc.js
   * 允许 extends 配置多个模块，如果规则冲突，位置靠后的包将覆盖前面的。
   * rules 中的规则相同，并且优先级恒定高于 extends，类似class的extends，支持多继承。
   */
  extends: [
    /**
     * eslint:recommended，将会开启 https://eslint.org/docs/rules/ 页面上标记为“ ✓ ”的规则
     * ESLint 团队为所有项目推荐的规则集
     */
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // if your code is in ECMAScript modules
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  /**
   * 管理具体规则
   * "off" or 0 - turn the rule off
   * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
   * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
   */
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
