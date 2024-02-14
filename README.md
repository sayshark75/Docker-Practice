## 🐳 Docker Experience Summary 🚀

During recent Docker practice sessions, I successfully completed the following tasks:

- 🛠️ Installation and configuration of Docker.

- 📝 Development of Dockerfiles for various projects.

- 🖼️ Creation of Docker images for a Simple Vite App Boilerplate using the command:

  ```
  docker build -f custom-docker-file-name -t image-name .
  ```

- ⚙️ Execution of Vite Boilerplate within a customized Docker image based on `node:18-alpine` with the command:

  ```
  docker run -p 8013:8080 image-name
                ^
  the left port is custom port we define to run the application
  the right port is the actual port which is configured in the web app and exposed in Dockerfile
  ```

- 🔄 Replication of the above procedures for NextJS and a simple Express Backend built with TypeScript.

- 🐙 Utilization of Docker Compose to orchestrate a single container with multiple instances with the command:

  ```
  docker-compose up --build
  ```

These experiences have enhanced my proficiency in Docker and containerization practices. 🌟
