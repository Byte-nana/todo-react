<div align="center">

<img src="./public/favicon/favicon-96x96.png" alt="You can TO DO App Icon" width="100" style="border-radius: 20px" />

# 💪 You Can TO DO — React To-Do App

![Status](https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-lightpurple?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue?style=for-the-badge)

</div>

A clean, minimalistic **React-based to-do list application** originally built in Vanilla JavaScript and then fully refactored into React to deepen my understanding of component architecture, state management, and re-rendering behaviour.

> 🧩 Version 1.0.0 — Initial React version featuring add/edit/delete tasks, dark mode, filtering, and persistent local storage.

---

## 🎮 Live Demo

🔗 [**Try the App on Netlify**](https://youcantodo.netlify.app/)

---

## 📚 Why I Rebuilt This in React

I initially built this to-do app using **HTML, CSS, and Vanilla JavaScript**, but after learning React, I wanted to practise:

- How React handles UI rendering differently
- How to break a project into **reusable components**
- How to manage **state** without DOM queries
- How to sync user interactions with UI updates in real-time
- How to structure a React project and manage local storage elegantly

Moving from DOM manipulation to React’s declarative model helped me understand how modern UI frameworks work and why they scale better for complex interactions.

---

## 💡 Thoughts While Learning React

- I realised React requires writing **layout and functionality together** in components, unlike the traditional split of HTML + CSS + JS.
- I didn’t need to manually query the DOM anymore — instead, I managed everything with **state hooks**, which felt strange at first.
- Connecting components was easier: in Vanilla JS I used `dataset` or DOM traversal, but React simply passes data via **props**.
- Understanding **re-rendering** was eye-opening — React automatically updates specific components when their state changes.
- Structuring the project was initially confusing, especially deciding which component should “own” which piece of state.

React felt unfamiliar at first, but soon I understood why it’s so powerful for building interactive interfaces.

---

## 🧩 What I Found Difficult

- Deciding how to **divide the UI into components** (e.g., `Todo`, `TodoList`, `TodoEdit`, `AddTodo`)
- Understanding **where state should live** — parent vs child
- Managing the edit mode inside the `Todo` component
- Handling controlled inputs with React state
- Learning how React’s **one-way data flow** changes the way events are passed upward
- Implementing dark mode using **React Context** instead of pure CSS/JS

These challenges helped me gain confidence in thinking like a React developer.

---

## 🧩 Key Features

| Feature                         | Description                                               |
| :------------------------------ | :-------------------------------------------------------- |
| 📝 Add Tasks                    | Add new todos instantly with controlled input.            |
| ✏️ Edit Tasks                   | Inline editing using the dedicated `TodoEdit` component.  |
| ❌ Delete Tasks                 | Remove any task with one click.                           |
| 🔄 Update Status                | Mark tasks as active or completed.                        |
| 🎚️ Filter by Status             | View All / Active / Completed tasks via `Header` filters. |
| 🌙 Dark Mode                    | Theme toggle using React Context + CSS variables.         |
| 💾 Local Storage                | Filter and todos persist through refresh.                 |
| ⚛️ Component-Based Architecture | Clean separation of UI and logic using React components.  |

---

## 🧠 Tech Stack

| Layer            | Technology                    |
| ---------------- | ----------------------------- |
| Framework        | React 18 (Vite)               |
| Styling          | CSS Modules (`*.module.css`)  |
| Theme            | React Context + CSS variables |
| Data Persistence | Browser `localStorage`        |
| Icons            | React Icons                   |
| Build Tool       | Vite                          |

---

## 📁 Folder Structure

```
.
├── public
│ ├── favicon/
│ └── og-image.png
├── src
│ ├── components
│ │ ├── AddTodo/
│ │ ├── Header/
│ │ ├── Todo/
│ │ ├── TodoEdit/
│ │ └── TodoList/
│ ├── context/
│ │ └── DarkModeContext.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ ├── main.jsx
│ └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧭 How It Works

### 🔦 State Management

- `App.jsx` manages the **filter** state
- `TodoList` manages the **todos array**
- Each `Todo` handles its own edit mode
- `DarkModeContext` handles theme state globally

### 🔁 Re-render Cycle

React automatically updates:

- the todo list when a task is added, edited, or deleted
- the UI when the filter changes
- the page theme when dark mode is toggled

---

## 🎞️ Preview GIF Template

<div>
    <a href="https://www.loom.com/share/e452adf1f3bd413eadc7e6d98e19c786">
      <p>You can TO DO</p>
    </a>
    <a href="https://www.loom.com/share/e452adf1f3bd413eadc7e6d98e19c786">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e452adf1f3bd413eadc7e6d98e19c786-ad68820a0aa2ca33-full-play.gif#t=0.1">
    </a>
  </div>

---

## 🪄 UI Design

|                  Light Mode                   |                  Dark Mode                  |
| :-------------------------------------------: | :-----------------------------------------: |
| ![Light mode](./public/screenshots/light.png) | ![Dark mode](./public/screenshots/dark.png) |

---

## 👩‍💻 About the Developer

**Developed by [Byte-nana](https://github.com/byte-nana)**  
Aspiring front-end developer passionate about building **playful, accessible, and visually polished web apps**.

---

## 🧾 Licence

Released under the [MIT Licence](LICENSE).

---

<div align="center">
  <sub>Made with 🐾 and curiosity in London • 2025</sub>
</div>
