# Step 1: Build the Angular application
FROM node:20 AS build
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install Angular CLI globally
RUN npm install -g @angular/cli
RUN npm install
# Copy all files
COPY . .
# Build the Angular application
RUN npm run build --configuration=production

# Step 2: We use the nginx image to serve the application
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/ecommerce-audiophile-frontend/browser /usr/share/nginx/html
# Expose port 80
EXPOSE 80
