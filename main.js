const path = require('path')
const {app,BrowserWindow}  = require('electron')
const { default: WinState } = require('electron-win-state')

const VITE_BASE_PATH = 'http://localhost:5173/'
const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800
  })
  const win = new BrowserWindow({
    ...winState.winOptions,
    webPreferences:{
      preload: path.resolve(__dirname, './preload')
    }
    
  })
  win.loadURL(VITE_BASE_PATH)

  win.webContents.openDevTools(true)

  winState.manage(win)

}

app.whenReady().then(() => {
  createWindow()
})