# 🎨 gitmoji-raycast

>  Built with **React**, **TypeScript**, and managed with **Flox**.

A native Raycast extension to quickly find and paste [gitmojis](https://gitmoji.dev/).


## 🚀 Features

* **Direct Paste**: Press `Enter` to paste the `:code:` directly to your cursor.
* **Emoji Paste**: Press `Cmd + Enter` to paste the actual emoji glyph (e.g., 🐛).
* **Smart Search**: Search by name, description, or semver (e.g., "bug", "feature", "patch").
* **Live Preview**: Detailed view showing the large emoji, its full description, and metadata.
* **Hermetic Environment**: Fully managed dev environment using **Flox**.

## 📚 References

* **Official Website**: [gitmoji.dev](https://gitmoji.dev/)
* **Source Data**: [carloscuesta/gitmoji](https://github.com/carloscuesta/gitmoji) — The project that defines the gitmoji standard.

---

## 🛠️ Development & Environment

This project uses **Flox** to ensure a consistent Node.js environment without polluting your global system.

### 1. Enter the environment
```bash
flox activate
```

### 2. Install dependencies
```bash
npm install
```

### 3. Development Mode
Run this to see changes in Raycast in real-time. This links the local folder to your Raycast app.
```bash
npm run dev
```

### 4. Build for Production
To "install" the extension permanently on your machine so it works without the terminal running:
```bash
npm run build
```

---

## 🔄 Syncing Data

Since the extension uses a local `gitmojis.json` for 100% reliability and speed, you can sync it manually to get new emojis from the official source.

```bash
# Runs the python sync script to fetch latest from GitHub
npm run sync
```

---

## ⌨️ Shortcuts

| Action | Shortcut |
| :--- | :--- |
| **Paste Code** (e.g., `:art:`) | `Enter` |
| **Paste Emoji** (e.g., `🎨`) | `Cmd + Enter` |
| **Copy Code to Clipboard** | `Cmd + C` |
| **Open Search** (If Alias set) | `gj` |

---

## 📂 Project Structure

* `src/index.tsx`: The main React component for the Raycast UI.
* `src/gitmojis.json`: Local cache of the Gitmoji library.
* `sync.py`: Python script to update the local JSON from the official source.
* `assets/app-icon.png`: The extension icon (visible in Raycast).
* `package.json`: Metadata and dependencies.

---

## ⚙️ Recommended Raycast Settings

To make this extension even faster, set a **manual alias**:
1. Open Raycast and go to **Settings > Extensions**.
2. Find **Gitmoji**.
3. Set the **Alias** to `gj`.
4. Now you can launch it instantly by typing `gj` in Raycast.
