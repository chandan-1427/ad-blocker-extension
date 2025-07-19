# 🛡️ Simple Ad Blocker Chrome Extension

A lightweight and privacy-friendly Chrome extension that blocks ads from known domains using Chrome's `declarativeNetRequest` API.

---

## 🚀 Features

- Blocks ads from known ad domains (e.g., `doubleclick.net`, `googlesyndication.com`)
- Uses Chrome Manifest V3
- No performance overhead (uses built-in declarative rules)
- Minimal UI, modern and clean
- No user data collection

---

## 📁 Project Structure

ad_blocker_extension/
├── icons/ # Extension icons (16px, 48px, 128px)
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── popup.html # Simple popup UI
├── popup.js
├── background.js # Background service worker
├── rules.json # List of ad-blocking rules
├── manifest.json # Chrome extension manifest (v3)
├── package.json # Dev tooling config (eslint, prettier)
└── README.md # You're here!

---

## 🧠 How It Works

This extension uses the `declarativeNetRequest` API to block requests from ad domains. The rules are defined in `rules.json` and applied by Chrome at the network level, making it efficient and secure.

Example rule:
```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "doubleclick.net",
    "resourceTypes": ["script"]
  }
}

📦 Installation (For Development)
Clone or download the repository:

git clone https://github.com/chandan-1427/ad-blocker-extension.git
cd ad_blocker_extension
Open Chrome and go to:

chrome://extensions/
Enable Developer mode (top-right).

Click "Load unpacked" and select the project folder.

✅ Done! The ad blocker should now be running.

⚙️ Developer Tools
This project includes development dependencies:

ESLint – for linting JS files

Prettier – for consistent code formatting

To lint or format your code:

npm install
npx eslint .
npx prettier --write .

📜 License
This project is licensed under the ISC License.

🙌 Contributing
Feel free to open issues or PRs if you'd like to contribute improvements or new rules.

👨‍💻 Author
Your Name – @https://github.com/chandan-1427

🔗 Related
Chrome Extension Docs (Manifest V3)

Chrome DeclarativeNetRequest API

---
