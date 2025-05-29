<<<<<<< HEAD

# Autenticación con Firebase en React

Aplicación React que implementa autenticación segura con Firebase Authentication, permitiendo registro y login de usuarios mediante email y contraseña. Es un proyecto básico y funcional, ideal para portafolios y práctica de integración backend en una app frontend moderna.

## 🚀 Características

- Registro de usuarios con correo electrónico y contraseña
- Inicio de sesión con Firebase Authentication
- Manejo de errores y estado del usuario autenticado
- Estructura clara y modular con componentes

## 🛠️ Tecnologías utilizadas

- React
- Firebase Authentication
- JavaScript (ES6)
- CSS

## 📂 Estructura de carpetas

src/
├── components/
│ ├── Register.js
│ └── Signup.js
├── firebase.js
└── App.jsx

yaml
Copiar
Editar

---

## ⚙️ Variables de entorno

Crea un archivo llamado `.env` en la raíz del proyecto y agrega lo siguiente:

```env
REACT_APP_FIREBASE_API_KEY=TU_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=TU_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
REACT_APP_FIREBASE_APP_ID=TU_APP_ID
⚠️ Asegúrate de agregar .env al .gitignore para no subir tus claves privadas.

▶️ Cómo ejecutar la app
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia el proyecto:

bash
Copiar
Editar
npm run dev



💡 Objetivo del proyecto
Este proyecto fue realizado con fines educativos y de portfolio. Me permitió:

Practicar autenticación de usuarios

Conectar un frontend con servicios Firebase

Usar formularios controlados y hooks de React (useState)

Aplicar buenas prácticas con componentes separados


Gracias por revisar este proyecto. ¡Estoy abierto a feedback y colaboraciones!


=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> e6113a9 (Primer commit: app React con Firebase)
