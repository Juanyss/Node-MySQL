import mysql = require('mysql');

export default class MySql{
  private static _instance:MySql;

  cnn: mysql.Connection;
  conectado:boolean = false;

  constructor(){
    console.log('Class initialized');

    this.cnn = mysql.createConnection({
      host:'localhost',
      user     : 'juany',
      password : '12345',
      database : 'node_db'
    })

    this.connect();
  }

  public static get Instance(){
    return this._instance || (this._instance = new this());
  }

  private connect(){
    this.cnn.connect((err:mysql.MysqlError) => {
      if(err){
        console.log(err.message);
        return;
      }

      this.conectado = true;
      console.log('DB connected');

    })
  }

}
