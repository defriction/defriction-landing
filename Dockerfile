# ==========================================
# ETAPA 1: Construcción (Node)
# ==========================================
FROM node:22-alpine AS build

WORKDIR /app

# Copiamos primero el package para aprovechar la caché de Docker
COPY package*.json ./
RUN npm ci

# Copiamos el resto del código y compilamos
COPY . .
RUN npm run build

# ==========================================
# ETAPA 2: Servidor (Nginx)
# ==========================================
FROM nginx:alpine

# Copiamos la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos estáticos generados por Astro
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
