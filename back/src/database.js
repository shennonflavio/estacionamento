import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDatabase = async () => {
    return await open({
        filename: 'C:/Users/55159/OneDrive/Área de Trabalho/newDev()/estacionamento/back/src/database.db',
        driver: sqlite3.Database
    })
}