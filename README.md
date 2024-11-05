# Demo basic React-Router-App für ein digitales Kartenspiel "Piratas" 

 In dieser WebApp namens Piratas kann man ein Kartenspiel digital spielen.

![App-vorschau](./src/assets/images/vorschau.png)
![Responsiv-vorschau](./src/assets/images/vorschau-responsive.png)

## Technologien

- **Frontend:**
  - React + Vite [¹]
  - React Router
    


## To do 
- bis jetzt nur die Landing

## Projektstruktur

```
basic-router/
│      
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Anleitung.jsx
│   │   ├── Card.module.css
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Landing.module.css
│   │   ├── PCard.jsx
│   |   └── SCard.jsx
|   ├── App.jsx
|   ├── index.css
|   └── main.jsx
|
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```


## Installation

Installiere die Abhängigkeiten für das Frontend:

- Frontend:

     ```bash
     npm install react-router-dom 
     ```

## Frontend

### Starten der Anwendung

1. Starte die React Entwicklungsumgebung:
   
   ```bash
   npm run dev
   ```
## Verwendung

Nach dem Start des Frontend-Servers kannst du die Piratas App im Browser unter `http://localhost:5173` aufrufen.

<br/>
<br/>
<br/>
-----------------------------------------------------------------------------------

[¹] This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


