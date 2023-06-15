const { contextBridge } =require('electron')

contextBridge.exposeInMainWorld('myApi', { //.向主进程注入node API
  platform: process.platform,
})
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})
