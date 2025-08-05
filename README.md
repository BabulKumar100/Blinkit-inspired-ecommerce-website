# Blinkit-inspired-ecommerce-app:

A full-stack Blinkit-inspired grocery e-commerce app built using the MERN Stack( MongoDB, Express, React, Node.js). It Includes login/register page, cart system, protected routes, and real-time UI updates.

# Features:

## Frontent(React):

(i)  Home,Shop and Cart pages with dynamic item rendering

(ii) Login/ Register/ Forgot password/ Reset Password flows

(iii) Search functionality for product across all categories

(iv) category-wise Product sections(e.g. Diary, Medicines, etc)

(v) Dynamic Cart System:

  (a) Add/Remove items globally

  (b) Cart count and total price auto-updated

(vi) Login-required popup for Protected actions (e.g. Add to Cart)

(vii) Profile Panel with user details after login

(viii) LocalStorage sync for login state and  cart data

## Authentication

(i) Email & Password based authentication

(ii) Passwords hashed with bcrypt

(iii) Nodemailer for password reset via email

(iv) Token-based password reset with secure flow

## Backend (Node.js + Express + MongoDB)

(i) User Registration & Login API

(ii) Forgot and Reset Forgot Password API

(iii) MongoDB for storing users and authentication data

# Folder:

BLINKIT/
├── frontend/
│ ├── public/
│ ├── components/
│ │ ├── Banner.jsx
│ │ ├── ItemsCard.jsx
│ │ ├── LoginRequiredPopup.jsx
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Forgot.jsx
│ │ ├── ResetPassword.jsx
│ │ ├── Cart.jsx
│ │ ├── Shop.jsx
│ │ ├── Blinkit.jsx
│ │ ├── SearchResults.jsx
│ │ └── Profile.jsx
│ └── styles/
│ ├── Login.module.css
│ ├── Register.module.css
│ ├── Cart.module.css
│ ├── Forgot.module.css
│ ├── LoginRequiredPopup.css
│ ├── Navbar.css
│ ├── ProfilePanel.css
│ ├── ResetPassword.module.css
│ ├── Banner.css
│ ├── Footer.css
│ ├── SearchResults.css
│ └── Shop.css
│
├── backend/
  ├── models/
  │ └── User.js
  ├── node_modules/
  ├── routes/
  │ ├── authRoutes.js
  │ └── Profile.js          
  ├── files/
  ├── .env
  ├── db.js
  └── server.js

# Screenshots:

![HomePage Screenshot1](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/HomePage%20screenshot1.png)

![HomePage Screenshot2](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/HomePage%20Screenshot2.png)

![HomePage Screenshot3](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/HomePage%20Screenshot3.png)

![HomePage Screenshot4](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/HomePage%20Screenshot4.png)

![HomePage Screenshot5](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/HomePage%20Screenshot5.png)

![Shop-Page-UI1](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/shop-Page-UI1.png)

![Shop-Page-UI2](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Shop-Page-UI2.png)

![Shop-Page-UI3](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Shop-Page-UI3.png)

![Shop-Page-UI4](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Shop-Page-UI4.png)

![Shop-Page-UI5](https://github.com/BabulKumar100/blinkit-inspired-ecommerce-app/blob/ddf5fbdf21fa225e6391e28018639ef4160174ea/Shop-Page-UI5.png)

![Login-Page-UI](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Shop-Page-UI5.png)

![Register-Page-UI](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Register-Page-UI.png)

![Forgot-Password-Page-UI](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Forgot-Password-Page-UI.png)

![Reset-Password-UI1](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Reset-Password-%20UI1.png)

![Reset-Password-UI2](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Reset-password-UI2.png)

![Reset-Password-email](https://github.com/BabulKumar100/Blinkit-inspired-ecommerce-application/blob/8b1756be6376e78d8df79ca6179a79822633140a/Reset-Password-email.png)


 # How to Use:

 ## Prerequisites

   Make sure You have the following installed on your system:

   (i)   Node.js

   (ii)  npm

   (iii) MongoDB

   (iv) Internet connection for installing dependencies

   STEP 1 : Clone the Repository

   git clone https://github.com/BabulKumar100/Blinkit.git
   cd Blinkit

   STEP 2:  Install Dependencies

   (a) For Frontend:

        cd frontend
        npm install

    (b) For Backend:

         cd backend
         npm install

    STEP 3: Set Up Environment Variables

    Create a .env file inside the /backend folder:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_password
    JWT_SECRET=your_jwt_secret

    STEP 4: Start the Project

     (a) Run Backend

          cd backend
          node server.js

      (b) Run Frontend

            cd frontend
            npm start

  # Technologies used:

  ## Frontend:

   (i) React.js: For building user interfaces

   (ii) React Router DOM: For routing between pages

   (iii) CSS Modules: For component-scoped styling

   (iv) Plain CSS: For global styles and animations

   (v) LocalStorage: To persist cart and login info

   (vi) Axios/ Fetch API: For HTTP requests to the backend

   ## Backend :

   (i)   Node.js:     JavaScript runtime environment

   (ii)  Express.js : Web Framework for building RESTful APIs

   (iii) MongoDB:    NoSQL database for storing user data

   (iv)  Mongoose: ODM(Object Data Modeling) for MongoDB

   (v)   Nodemailer:  For sending password reset emails

   (vi)  bcrypt: For hashing user Passwords

   (vii) dotenv: For managing environment variables

   (viii) JSON Web Token(JWT): For authentication and secure routes

   # Tools & Platforms:

   (i) Visual Studio Code: Code Editor

   (ii) MongoDB Compass: GUI for MongoDB

   (iii) Postman: API testing

   (iv) Git & GitHub: Version control and hosting

   (v) npm: Package manager for installing dependencies

   # License:

   This Project is licensed under the MIT License.

   # Connect with Me:

   GitHub:[BabulKumar100](https://github.com/BabulKumar100)

   Linkedln:[Babul Kumar](https://www.linkedin.com/in/babulkumar100)



   

   

   



    

   

      

      








