# Use official Node.js image  
FROM node:14

# Set a non-root user ID and group ID
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application into the container
COPY . .

# Set permissions for the non-root user
RUN chown -R appuser:appuser /app

# Switch to the non-root user
USER appuser

# Expose the app's port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
