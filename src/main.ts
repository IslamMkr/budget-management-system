import { ipcMain } from "electron"
import * as Constants from './utils/constants'
import * as database from './database'

const { app, BrowserWindow } = require('electron')
const path = require('path')

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

/**
 * DATABASE CALLS
 */

ipcMain.on(Constants.DB_GET_ALL_AGENTS, (event) => {
    database.getAllAgents(event)
})

ipcMain.on(Constants.DB_ADD_AGENT, (event, agent) => {
    database.addAgent(event, agent)
})

ipcMain.on(Constants.DB_ADD_PARTNER, (event, partner) => {
    database.addPartner(event, partner)
})