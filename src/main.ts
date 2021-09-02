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
    const allAgents = getAllAgents()
    event.reply(Constants.DB_GET_ALL_AGENTS, allAgents)
})

ipcMain.on(Constants.DB_ADD_AGENT, (event, agent) => {
    const res = addAgent(agent)
    res.then(() => {
        event.reply(Constants.DB_ADD_AGENT, "success")
    })
})

/**
 * Database operations
 */

const getAllAgents = async () => {
    let allAgents
    database.select()
        .from('agents')
        .then(data => {
            allAgents = data
        })
    return allAgents
}

const addAgent = async (agent) => {
    return database(Constants.DB_TABLE_AGENTS)
        .insert(agent)
        .catch((err) => {
            console.log(err)
        })
}