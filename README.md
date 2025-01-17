﻿# 📄 MERN-Task-Manager

Esta aplicación permite la gestión de tareas donde cada usuario puede registrarse y acceder a su lista de tareas. Los usuarios pueden crear y eliminar tareas, y solo tienen acceso a sus propias tareas. Además, un usuario con rol de administrador puede ver y gestionar las tareas de todos los usuarios. También se implementa un sistema de fotografía de perfil que permite a los usuarios cambiar su imagen en tiempo real utilizando Redux para el manejo del estado.

## 🛠️ Tecnologías Utilizadas

### **Backend**

- **Express**: Framework minimalista para construir el backend.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar tareas y usuarios.
- **Mongoose**: ODM para modelar datos en MongoDB.
- **Cloudinary**: Plataforma de gestión de imágenes en la nube para las fotos de perfil.
- **dotenv**: Para manejar variables de entorno.
- **cors**: Middleware para habilitar el CORS.
- **bcryptjs**: Para la encriptación de contraseñas.
- **jsonwebtoken**: Para la autenticación basada en tokens.
- **morgan**: Middleware para registrar las solicitudes HTTP.
- **express-fileupload**: Manejo de archivos enviados desde formularios.
- **fs-extra**: Módulo para operaciones del sistema de archivos.

### **Frontend**

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta rápida de desarrollo frontend.
- **Redux**: Para manejar el estado de la aplicación.
- **axios**: Cliente HTTP para hacer peticiones al backend.
- **react-router-dom**: Para gestionar rutas en la aplicación.
- **react-icons**: Biblioteca de iconos.
- **react-hot-toast**: Notificaciones y alertas interactivas.
- **tailwindcss**: Framework de estilos CSS.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## 🖼️ Capturas de Pantalla

![User](https://github.com/hectorc2907/MERN-Task-Manager/blob/dev/frontend/public/muestraUser.PNG)  
![Admin](https://github.com/hectorc2907/MERN-Task-Manager/blob/dev/frontend/public/muestraAdmin.PNG)

## 🔧 Instalación

Si deseas clonar este repositorio y ejecutarlo en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/hectorc2907/mern-task-manager.git

   ```

2. Ve al directorio del proyecto:

   ```bash
   cd mern-task-manager

   ```

3. Instala las dependencias Frontend:

   ```bash
   cd ../frontend
   npm install
   npm run dev

   ```

4. Instala las dependencias Backend:

   ```bash
   cd ../backend
   npm install

   ```

5. Configura tus Variables de Entorno
   ```bash
   # Backend:
   PORT=<tu_puerto_deseado>
   MONGO_URI=<tu_mongo_uri>
   JWT_SECRET=<tu_clave_de_token_secreto>
   FRONTEND_URL=<la_direccion_frontend>
   CLOUD_NAME=<el_cloud_name_cloudinary>
   API_KEY=<api_key_cloudinary>
   API_SECRET=<api_secret_cloudinay>
   # Frontend:
   VITE_BACKEND_URL=<la_direccion_backend>
   ```

## 🎨 Personalización

Puedes modificar el estilo o agregar nuevas funcionalidades ajustando los siguientes archivos:

- **Tailwind CSS**: Cambia colores o fuentes en el archivo `tailwind.config.js`.
- **Componentes React**: Personaliza los componentes según tus necesidades.
- **Redux**: Modifica la lógica de gestión de estados en los slices de Redux.
- **Validaciones**: Añade validaciones más complejas en los formularios si es necesario.

## ✨ Características

- Registro y autenticación de usuarios con roles.
- Cada usuario puede ver y gestionar solo sus tareas.
- Los administradores pueden acceder a las tareas de todos los usuarios para un mejor control.
- Sistema de foto de perfil que permite cambios en tiempo real utilizando Redux.
- Gestión de rutas utilizando React Router DOM.
- Manejo de peticiones HTTP con Axios.
- Notificaciones interactivas con React Hot Toast.
- Estilización utilizando Tailwind CSS para un diseño atractivo.
- Registro detallado de solicitudes con Morgan para debugging.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o deseas mejorar la aplicación, haz un fork del proyecto, realiza tus cambios y envía un pull request.
