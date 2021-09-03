import { ipcMain } from "electron"
import * as Constants from './utils/constants'
import knex from 'knex'

const { app, BrowserWindow } = require('electron')
const path = require('path')

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: 'database.sqlite3'
    },
    useNullAsDefault: true
}

const database = knex(knexConfig)

/**
 * Window creation
 */

function createWindow () {
    const win = new BrowserWindow({
        width: 1080,
        height: 780,
        minWidth: 1080,
        minHeight: 780,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on(Constants.DB_GET_ALL_AGENTS, (event) => {
    getAllAgents(event)
})

ipcMain.on(Constants.DB_ADD_AGENT, (event, agent) => {
    addAgent(event, agent)
})

/**
 * Database operations
 */

const getAllAgents = (event) => {
    database.select()
        .from('agents')
        .then(data => {
            event.reply(Constants.DB_GET_ALL_AGENTS, data)
        }).catch((err) => {
            console.error(err)
        })
}

const addAgent = (event, agent) => {
    return database(Constants.DB_TABLE_AGENTS)
        .insert(agent)
        .then(_ =>{
            event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_SUCCESS)
        })
        .catch((err) => {
            event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_FAILURE)
            console.error(err)
        })
}