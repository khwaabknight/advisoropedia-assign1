# Advisoropedia Assignment - Full Stack

## Assignment Overview
Welcome to the Advisoropedia assignment! This application is designed to showcase a simple blog posts experience with features such as user authentication and posts web page.
The deployed link can be found at : 

## Technology Stack:
- Node.js and npm
- Express.js framework for api endpoints
- MongoDB as the database
- jsonwebtoken library for JWT generation and validation
- React.js for component structure and functionality.
- TailwindCSS for styling purposes

## Project Structure
The project follows a structured organization for better clarity:

- src/: Contains the main source code of the project.
  - components/: Reusable React components.
    - Auth/: auth comoponents
    - Common/: all common components like inputs and buttons
    - Error/: error page
    - Posts/ \: posts page components
- public/: Static assets.
- server/: it contains the express server integrated with mongoodb and cloudinary
  - api/:contains all the api endpoints' code
    - config/: contains configuration files for mongodb and cloudinary
    - controllers/: contains controllers for each api end-point
    - middleware/: contains all the middlewares
    - models/: contains the mongoose schema models
    - routes/: api routes for different types of services
    - utils/: miscellaneous utilities for supporting the other operations


### Installing locally :

1. Clone the Repository:
```bash
  git clone https://github.com/khwaabknight/advisoropedia-assign1.git
```
2. Navigate to the project directory:
```bash
  cd advisoropedia-assign1
```
3. Install Dependencies:
```bash
  npm install
```
### Usage
Once you have completed the installation, you can run the app using the following command:
```bash
  npm run dev
```
This will start the development server, and you can access the app at http://localhost:3000 in your browser.

## ScreenShots
![image](https://github.com/khwaabknight/advisoropedia-assign1/assets/89650360/f08a9a90-c3e3-4e35-a54b-143df5efb292)
