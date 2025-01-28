# Use official Node.js image  
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only the required files
COPY src/ ./src/
COPY public/ ./public/
COPY app.js ./

# Expose the app's port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
