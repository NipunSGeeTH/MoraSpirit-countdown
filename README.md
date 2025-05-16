# 🕒 MoraSpirit 2026 Countdown Timer

A simple web countdown timer for the upcoming **MoraSpirit SpiritX 2026** event.

This project uses only:
- `index.html`
- `config.html`
- `index.css`
- `index.js`

---

## 🔧 How to Use

### 1. Configure the Event Date & Time
Open the [`config.html`](./config.html) page in your browser.

- Enter the **date and time** when the MoraSpirit 2026 event will begin.
- This will save the target time to your browser's local storage.

> ⏰ Time is fetched live based on **Colombo Time** using WorldTimeAPI.

---

### 2. View the Countdown
Now open the [`index.html`](./index.html) page.

- The countdown timer will show **Days : Hours : Minutes : Seconds** until the event starts.
- If the event date has passed, it will display an appropriate message.

---

## 📁 File Overview

| File         | Purpose                                 |
|--------------|------------------------------------------|
| `index.html` | Public countdown timer display           |
| `config.html`| Set the target date/time for the event   |
| `index.js`   | Timer logic + Colombo time fetch         |
| `index.css`  | Styling for both pages                   |

---

## 🚀 Demo (if hosted)
[Live Demo Link](https://your-username.github.io/spiritx-countdown)

---

## 📅 Example Event Date

```txt
March 1, 2026 — 9:00 AM Colombo Time (GMT+5:30)
