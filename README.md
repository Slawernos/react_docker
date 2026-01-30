# React Docker Dashboard App

A simple React dashboard application containerized with Docker. This project demonstrates how to build and deploy a React app using Docker with a multi-stage build process.

## Features

- 🎨 Modern dashboard interface
- 📊 Stats cards and sidebar navigation
- 🐳 Dockerized for easy deployment
- 🚀 Multi-stage build for optimized production images
- 📱 Responsive design

## Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Docker Desktop installed and running

## 🚀 Quick Start

### Running Locally (Development)

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 🐳 Running with Docker

#### Build the Docker Image

```bash
docker build -t react-docker-app .
```

This command builds a production-optimized Docker image using the multi-stage Dockerfile.

#### Run the Container

```bash
docker run -p 80:80 react-docker-app
```

Now visit [http://localhost](http://localhost) in your browser!

#### Run in Detached Mode

```bash
docker run -d -p 80:80 --name my-react-app react-docker-app
```

#### Stop the Container

```bash
docker stop my-react-app
docker rm my-react-app
```

## 📦 Docker Build Explained

The Dockerfile uses a **multi-stage build**:

1. **Build Stage**: Uses Node.js to install dependencies and build the React app
2. **Production Stage**: Uses lightweight Nginx to serve the static files

This results in a small, efficient production image (~50MB vs ~1GB).

## 🛠️ Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 📚 Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Docker documentation](https://docs.docker.com/)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the MIT License.
