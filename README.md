
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
Abre tu navegador en http://localhost:5173 (o el puerto que indique Vite).

👀 Vista previa
Aquí puedes subir capturas de pantalla del registro y login funcionando (opcional pero recomendable).

💡 Objetivo del proyecto
Este proyecto fue realizado con fines educativos y de portfolio. Me permitió:

Practicar autenticación de usuarios

Conectar un frontend con servicios Firebase

Usar formularios controlados y hooks de React (useState)

Aplicar buenas prácticas con componentes separados


Gracias por revisar este proyecto. ¡Estoy abierto a feedback y colaboraciones!


