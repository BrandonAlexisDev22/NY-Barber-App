# NY Barber App 💈

Sistema de gestión de citas para barberías desarrollado con Node.js, Express, MySQL, HTML, CSS y JavaScript.

## 📋 Descripción

NY Barber App permite a clientes reservar citas con barberos de manera rápida y sencilla, y a los barberos gestionar su agenda. Incluye roles de cliente y barbero (admin), servicios disponibles y horarios configurables.

## 🛠️ Tecnologías

- Node.js
- Express
- MySQL
- HTML/CSS/JavaScript (Frontend)
- Dotenv

## 📁 Estructura del proyecto

```
NY-APP/
├── public/                # Frontend estático (HTML, CSS, JS, imágenes)
│   ├── css/
│   ├── img/
│   ├── js/
│   └── index.html
├── src/
│   ├── config/             # Conexión a la base de datos y configuración
│   ├── controllers/        # Lógica de cada recurso
│   ├── middlewares/        # Middlewares de Express
│   ├── models/             # Acceso a datos / queries
│   ├── routes/             # Definición de rutas
│   ├── utils/              # Funciones auxiliares
│   └── app.js              # Configuración de la app de Express
├── server.js               # Punto de entrada, levanta el servidor
├── .env.example             # Variables de entorno de ejemplo
└── package.json
```

## ⚙️ Instalación y ejecución

1. Clona el repositorio:
```bash
git clone https://github.com/BrandonAlexisDev22/NY-Barber-App.git
cd NY-Barber-App
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo de variables de entorno y completa tus datos de conexión a MySQL:
```bash
cp .env.example .env
```

4. Levanta el servidor en modo desarrollo:
```bash
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000`.
