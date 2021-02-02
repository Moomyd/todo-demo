module.exports = {
    parser: '@typescript-eslint/parser', // 定义ESLint的解析器
    parserOptions: {
        // 指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'airbnb', // 会打开eslint-plugin-react/jsx-ally/import等插件
        'plugin:@typescript-eslint/recommended', // eslint集成typescript
        'prettier', // 打开prettier防冲突扩展
        'prettier/react', // 防prettier与react冲突
        'prettier/@typescript-eslint' // 防prettier与typescript冲突
    ], // 定义文件继承的子规范
    plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'prettier'], // 定义了该eslint文件所依赖的插件
    env: {
        // 指定代码的运行环境
        browser: true,
        node: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.jsx', '.js', '.ts', '.tsx']
            }
        },
        // 自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'prettier/prettier': 'error',
        'jsx-a11y/label-has-associated-control': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        // prettier插件配置
        'no-use-before-define': 'off', // 关闭import React出错
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // tsx里能够写jsx代码
        'react/prop-types': ['off', {}], // 用了ts不需要react的type检测
        'import/no-unresolved': ['off', {}] // 关闭airbnb的import检测，因为我们用绝对路径有冲突
    }
    // 常用于关闭一些不需要配置，暂不需要特别开启配置
}
