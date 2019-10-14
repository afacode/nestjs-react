// /**
//  * User
//  */

// id:
// /**登录用户名 */
// login_name:
// /**登录密码 */
// login_password:
// /**用户真实名称 */
// real_name:
// /**职位id列表（1,2,3） */
// position_id: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         defaultValue: 0
// },
// /**职位名称列表（开发,总经理） */
// position_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: ''
// },
// /**部门id（单个） */
// branch_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 0
// },
// /**部门名称 */
// branch_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: ''
// },
// /**手机号码 */
// mobile: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: ''
// },
// /**是否启用：0禁止访问 1正常*/
// is_enabled: {
//     type: DataTypes.TINYINT,
//     allowNull: false,
//     defaultValue: 1
// },

// /**
//  * menu
//  */
// id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   unique: true,
//   autoIncrement: true
// },
// /**菜单名称 */
// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**页面地址 */
// page_url: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**控件地址 */
// control_url: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**上一级菜单id */
// parent_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },
// /**层级 */
// level: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },
// /**排序 */
// sort: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },
// /**图标 */
// icon: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**是否显示：0否 1是*/
// is_show: {
//   type: DataTypes.TINYINT,
//   allowNull: false,
//   defaultValue: 1
// },
// /**是否启用：0禁用 1正常*/
// is_enabled: {
//   type: DataTypes.TINYINT,
//   allowNull: false,
//   defaultValue: 1
// },

// /**
//  * 部门
//  */

// id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   unique: true,
//   autoIncrement: true
// },
// /**部门名称 */
// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**部门编码（第一级01，第二级0101，依次类推） */
// code: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: 0
// },
// /**上一级部门id */
// parent_id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },
// /**层级 */
// level: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },
// /**排序 */
// sort: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: 0
// },

// /**
//  * position
//  */
// id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   unique: true,
//   autoIncrement: true
// },
// /**职位名称 */
// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**部门id（单个） */
// branch_id: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: 0
// },
// /**部门名称 */
// branch_name: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
// /**菜单权限集合（1,2,3,4） */
// menu_id: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   defaultValue: ''
// },
