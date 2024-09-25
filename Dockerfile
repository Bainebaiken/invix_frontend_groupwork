# # Frontend Dockerfile

# # Step 1: Use a base Node.js image
# FROM node:18-alpine

# # Step 2: Set working directory inside the container
# WORKDIR /app

# # Step 3: Copy package.json and package-lock.json files
# COPY package*.json ./

# # Step 4: Install dependencies
# RUN npm install

# # Step 5: Copy the rest of the frontend source code
# COPY . .

# # Step 6: Build the frontend app for production
# RUN npm run build

# # Step 7: Use a production-ready Nginx server to serve the frontend
# FROM nginx:alpine
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose the port Nginx is running on
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


FROM node:14 AS build 
WORKDIR /app 
COPY package.json ./ 
RUN npm install 
COPY . ./ 
RUN npm run build 
 
FROM nginx:alpine 
COPY --from=build /app/build /usr/share/nginx/html 
EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]  