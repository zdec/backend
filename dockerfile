# Usar la imagen oficial de Node.js 18 como base
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install --production

# Copiar el resto de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que corre la API
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node","server.js","app.js"]
