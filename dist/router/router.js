"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/hi', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Welcome to the jungle"
    });
});
router.get('/hi/:user', (req, res) => {
    let user = req.params.user;
    res.status(200).json({
        ok: true,
        msg: `Welcome to the jungle ${user}`
    });
});
exports.default = router;
