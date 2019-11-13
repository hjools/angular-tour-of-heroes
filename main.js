const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800, height: 600
  });

  // loading dist folder from Angular instead of index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools
  win.webContents.openDevTools();

  // Emitted when window closed, so dereference the window object.
  win.on("closed", () => {
    win = null;
  })
}

// called after Electron has finished initialization
app.on("ready", createWindow);

// quit when all windows are closed
app.on("window-all-closed", () => {
  // quit for macOS
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window if dock icon clicked
app.on("activate", () => {
  if (win == null) {
    createWindow();
  }
})
