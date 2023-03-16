import { getPool } from '../../config/db';
import Logger from '../../config/logger';
import { ResultSetHeader } from 'mysql2'
import {promises} from "dns";
import logger from "../../config/logger";

// 这个文件导入了数据库配置文件，这样它就可以连接到数据库，并包含了与数据库互动的基本功能，与控制器需要的功能一致。



// Listing all users
// o get a database connection and run an
// asynchronous query to select all users from the users table
const getAll = async() : Promise<User[]> => {
    Logger.info(`Getting all users from the database`);
    const conn = await getPool().getConnection();
    const query = 'select * from lab2_users';
    const [ rows ] = await conn.query( query );
    await conn.release();
    return rows;
};



// Getting a Single User
const getOne = async (id: number) : Promise<User[]> => {
    Logger.info(`Getting user ${id} from the database`);
    const conn = await getPool().getConnection();
    const query = 'select * from lab2_users where user_id = ?';
    const [ rows ] = await conn.query( query, [ id ] );
    await conn.release();
    Logger.info("in model>>>>>" + rows);
    return rows;  // return a user object
};

const insert = async (username: string): Promise<ResultSetHeader> => {
    Logger.info(`Adding user ${username} to the database`);
    const conn = await getPool().getConnection();
    const query = 'insert into lab2_users (username) values (?)';
    const [result] = await conn.query(query, [username]);
    await conn.release();
    return result;
}

const alter = async (id: number, username:string): Promise<any> => {
    Logger.info(`altering user ${username} to the database`);
    const conn = await getPool().getConnection();
    const query1 = `update lab2_users set username = ? where user_id = ${id}`;
    const [result] = await conn.query(query1, [username]);
    Logger.info(result);
    const query2 = 'select * from lab2_users where user_id = ?';
    const [ rows ] = await conn.query( query2, [ id ] );
    await conn.release();
    return rows;
}

const remove = async (id: number): Promise<any> => {
    Logger.info(`delete user ${id} to the database`);
    const conn = await getPool().getConnection();
    const query = 'delete from lab2_users where user_id = ?';
    const [result] = await conn.query(query, [id]);
    await conn.release();
    return result;
}

export { getAll, getOne, insert, alter, remove }