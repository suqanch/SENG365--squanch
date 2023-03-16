// 在routes目录下创建一个文件user.server.routes.ts并添加清单10中的代码。
// 这个文件将导入一个用户控制器，然后按照规范的要求定义每个相关的路由。
// 路由上的每个HTTP方法都引用了我们控制器中的一个函数，该函数将在端点被击中时运行。
// 注意：我们在定义url路径参数时，在前缀中加上:，这里是/:id，但是这些参数将与任何值相匹配（包括其他有效的路由），所以在某些情况下，我们需要注意路由的排序。

import {Express} from "express";
import * as users from '../controllers/user.server.controller';

module.exports = ( app: Express ) => {

    app.route( '/api/users' )
        .get( users.list )
        .post( users.create );

    app.route( '/api/users/:id' )
        .get( users.read )
        .put( users.update )
        .delete( users.remove );
};