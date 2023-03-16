import * as users from '../models/user.server.model';
import * as schemas from '../../schemas.json';
import Logger from '../../config/logger';
import {Request, Response} from 'express';
import {validate} from '../../validate';
import {alter} from "../models/user.server.model";
// 这个文件将导入用户模型并包含从我们的路由中调用的五个函数。
// 用于在model（数据库）中进行查询，并发送消息给user


// Now in the user.server.controller.ts file, update the list() function to call the models getAll() function. This
// function simply waits for and returns the result from the model function and handles the basic error flow
const list = async (req: Request, res: Response): Promise<void> => {
    Logger.http(`GET all users`)
    // const validation = await validate(
    //     schemas.user_register,
    //     req.body);
    // if (validation !== true) {
    //     res.statusMessage = `Bad Request: ${validation.toString()}`;
    //     res.status(400).send();
    //     return;
    // }
    const username = req.body.username;
    try {
        const result = await users.getAll();
        Logger.info("in controller"+result);
        res.status(200).send(result);
    } catch (err) {
        res.status(500)
            .send(`ERROR getting users ${err}`);
    }
};
const create = async (req: Request, res: Response) : Promise<void> => {
    Logger.http(`POST create a user with username: ${req.body.username}`)
    const validation = await validate(
        schemas.user_register,
        req.body);
    if (validation !== true) {
        res.statusMessage = `Bad Request: ${validation.toString()}`;
        res.status(400).send();
        return;
    }
    if (! req.body.hasOwnProperty("username")){
        res.status(400).send("Please provide username field");
        return
    }
    const username = req.body.username;
    try {
        const result = await users.insert( username );
        res.status( 201 ).send({"user_id": result.insertId} );

    } catch( err ) {
        res.status( 500 ).send( `ERROR creating user ${username}: ${ err }` );
    }
};


const read = async (req: Request, res: Response) : Promise<void> => {
    Logger.http(`GET single user id: ${req.params.id}`)
    const id = req.params.id;
    Logger.info(id);
    try {
        const result = await users.getOne( parseInt(id, 10) );
        Logger.info("in controller"+result);
        if( result.length === 0 ){
            res.status( 404 ).send('User not found');
        } else {
            res.status( 200 ).send( result[0] );
        }
    } catch( err ) {
        res.status( 500 ).send( `ERROR reading user ${id}: ${ err }` );
    }
};
const update = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const username = req.body.username;
    Logger.http(`PUT update user id: ${id}. username change to ${username}`);
    // Logger.info(id);

    try {
        if (username.length === 0){
            res.status( 400 ).send( 'username empty!' );
        };
        const result = await users.alter( parseInt(id,10), username);
        Logger.info("in controller"+result);
        if( result.length === 0 ){
            res.status( 404 ).send('User not found');
        } else {
            res.status( 200 ).send( result[0] );
        }
    } catch( err ) {
        res.status( 500 ).send( `ERROR reading user ${id}: ${ err }` );
    }
}

const remove = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    Logger.http(`Delete update user id: ${id}. username change to ${id}`);
    try {
        const result = await users.remove( parseInt(id,10));
        Logger.info("in controller"+result);
        if( result.affectedRows === 0 ){
            res.status( 404 ).send('User not found');
        } else {
            res.status( 200 ).send( result );
        }
    } catch( err ) {
        res.status( 500 ).send( `ERROR reading user ${id}: ${ err }` );
    }
}

export { list, create, read, update, remove }




