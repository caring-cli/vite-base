/*
 * @Author: Wanko
 * @Date: 2024-04-15 22:52:29
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 22:57:10
 * @Description:
 */
// 导入 unplugin-auto-import 和自动导入的配置
// import AutoImport from 'unplugin-auto-import/vite'

// 定义一个函数，用于动态组合模块并导出
// function combineModules(modules) {
//   return Object.assign(
//     {},
//     ...Object.entries(modules).map(([moduleName, module]) => ({ [moduleName]: module.default }))
//   )
// }

export default {}
// export default {
//   // 导入自动导入的模块，并在动态组合后导出
//   ...combineModules(
//     AutoImport({
//       // 指定要自动导入的文件夹路径和匹配规则
//       imports: [
//         {
//           // 从 modules 文件夹中导入以 .api.js 结尾的文件
//           find: /^\.\/modules\/(.+)\.js$/,
//           // 将模块名添加到组合对象中
//           replacement: './$1.api'
//         }
//       ]
//     })
//   )
// }
