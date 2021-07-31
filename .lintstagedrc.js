/*
 * @Author: Rico
 * @Date: 2021-06-12 10:11:29
 * @LastEditors: Rico
 * @LastEditTime: 2021-07-31 17:16:41
 * @Description:
 */
const micromatch = require('micromatch')
const eslintrc = require('./.eslintrc.js')
module.exports = {
  'src/**/*.{vue,js,jsx}': allFiles => {
    //除开eslintrc配置中的排除项目
    const needEsLint = micromatch.not(
      allFiles,
      (eslintrc.ignorePatterns || []).map(pattern => '**/' + pattern)
    )
    return [
      `eslint --fix ${needEsLint.join(' ')}`,
    ]
  },
  '**/*.{json,css,less,scss,html,js,jsx}': ['prettier --write']
}
