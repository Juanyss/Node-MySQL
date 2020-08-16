"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySql {
    constructor() {
        this.conectado = false;
        console.log('Class initialized');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'juany',
            password: '12345',
            database: 'node_db'
        });
        this.connect();
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    connect() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('DB connected');
        });
    }
}
exports.default = MySql;
