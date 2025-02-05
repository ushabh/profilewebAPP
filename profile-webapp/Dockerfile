FROM node:20 AS build
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
 
# Install Angular dependencies
RUN npm install
 
# Copy the rest of the application code into the container
COPY . .
 
# Build the Angular application for production
RUN npm run build --prod
 
# Stage 2: Serve the application using a lightweight web server
FROM nginx:alpine
 
# Copy the built Angular files from the previous stage
COPY --from=build /app/dist/profile-webapp/* /usr/share/nginx/html
 
# Expose the port that the app will run on
EXPOSE 80
 
# Start nginx to serve the Angular app
