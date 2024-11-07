# Use official Node.js image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application into the container
COPY . .

# Expose the app's port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
