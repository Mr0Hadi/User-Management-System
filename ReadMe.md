### **User Management System**

---

#### **About the Project**
This project is a **User Management System** that allows for **managing users**, including adding, editing, deleting, and viewing the user list. It features a **modern user interface** built with tools like **React** and **Tailwind CSS**, while the backend utilizes **Express.js** and **MySQL** for data management.

---

#### **Features**
- **User login and authentication** using JWT tokens.
- **View user list** with key details.
- Ability to **add, edit, and delete users**.
- **Beautiful and user-friendly interface** with Tailwind CSS and DaisyUI.
- **Secure data management** with MySQL.

---

#### **Project Structure**

##### **Frontend** (React)
Handles the user interface and API interaction.

**Tools Used:**
- **React Router Dom:** For managing navigation between pages.
- **Axios:** To handle HTTP requests to the API.
- **Tailwind CSS:** For fast and modern UI design.
- **DaisyUI:** For beautiful and advanced components.

**File Structure:**
```
src/
├── pages/
│   ├── Login.jsx            # Login page
│   ├── UsersList.jsx        # User list page
│   ├── PageNotFound.jsx     # 404 Not Found page
│   ├── AddUser.jsx          # Add new user page
│   └── EditUser.jsx         # Edit user page
├── components/              # Reusable components
│   ├── PageNav.jsx          # Navigation bar component
│   ├── Spinner.jsx          # Loading spinner component
│   └── SpinnerFullPage.jsx  # Full-page loading spinner
├── App.jsx                  # React application entry point
└── index.css                # Project styles
```

---

##### **Backend** (Express.js)
A RESTful API server that handles requests, authentication, and database interaction.

**Tools Used:**
- **Express.js:** Main framework for server-side development.
- **JWT (JSON Web Token):** For user authentication.
- **MySQL2:** For database communication.
- **Nodemon:** For automatic server restarts during development.

**File Structure:**
```
user-management-backend/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   ├── authController.js  # Authentication-related controllers
│   └── userController.js  # User-related controllers
├── middleware/
│   └── authMiddleware.js  # Middleware for JWT validation
├── models/
│   └── userModel.js       # User database model
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   └── userRoutes.js      # User routes
├── server.js              # Server entry point
```

---

#### **Database**
- **Database Used:** MySQL
- **User Table Schema:**

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#### **Installation and Setup**

##### **Prerequisites**
- Ensure **Node.js** and **npm** are installed.
- Ensure **MySQL** is installed and running.

##### **1. Backend Installation**
```bash
cd user-management-backend
npm install
```

##### **2. Frontend Installation**
```bash
cd user-management-frontend
npm install
```

##### **3. Database Configuration**
Update the MySQL connection details in the `config/db.js` file.

##### **4. Run the Backend**
```bash
cd user-management-backend
nodemon server.js
```

##### **5. Run the Frontend**
```bash
cd user-management-frontend
npm run dev
```

---

#### **Screenshots**
- **Login Page**
- **User List Page**
- **Add New User Page**

*(Screenshots will be added soon)*

---