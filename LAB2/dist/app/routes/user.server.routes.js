"use strict";
// 在routes目录下创建一个文件user.server.routes.ts并添加清单10中的代码。
// 这个文件将导入一个用户控制器，然后按照规范的要求定义每个相关的路由。
// 路由上的每个HTTP方法都引用了我们控制器中的一个函数，该函数将在端点被击中时运行。
// 注意：我们在定义url路径参数时，在前缀中加上:，这里是/:id，但是这些参数将与任何值相匹配（包括其他有效的路由），所以在某些情况下，我们需要注意路由的排序。
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const users = __importStar(require("../controllers/user.server.controller"));
module.exports = (app) => {
    app.route('/api/users')
        .get(users.list)
        .post(users.create);
    app.route('/api/users/:id')
        .get(users.read)
        .put(users.update)
        .delete(users.remove);
};
//# sourceMappingURL=user.server.routes.js.map