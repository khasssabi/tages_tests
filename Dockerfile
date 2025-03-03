# Use Playwright’s official image with all browsers installed
FROM mcr.microsoft.com/playwright:v1.50.1-noble

# Install necessary dependencies, including Java and lsof
RUN apt-get update && apt-get install -y default-jdk lsof && apt-get clean

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Set Java environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Ensure required directories exist before running tests
RUN mkdir -p /app/allure-results /app/allure-report

# Set the default command: Cleanup, Run Tests, Open Report
CMD ["sh", "-c", "apt-get install -y lsof && lsof -ti :8080 | xargs kill -9 2>/dev/null; mkdir -p /app/allure-results /app/allure-report && npm run test:allure && npm run allure:open"]