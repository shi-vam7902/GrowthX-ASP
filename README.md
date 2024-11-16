
---

# Assignment Submission Portal for GrowthX (Backend Task)

## Overview
This project is a backend application designed to manage assignment submissions for GrowthX. The application includes features like email notifications, password hashing, and dynamic status handling, with a focus on scalability and security.

---

## 🚀 How to Run

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **MongoDB**

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/shi-vam7902/GrowthX-ASP
   cd AssignmentSubmissionPortal
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables (refer to `.env.example` if available).

4. Start the server:
   ```bash
   npm run start
   ```

5. The server will start on `http://localhost:3000` or the port specified in the `.env` file.

---

## 📁 Folder Structure
- **api/**: Contains API-related files.
- **controller/**: Holds controller logic for handling HTTP requests and responses.
- **database/**: Includes database connection and management files.
- **middleware/**: Middleware for request validation, authentication, etc.
- **model/**: Houses schema definitions for MongoDB collections.
- **node_modules/**: Project dependencies managed by npm.
- **routes/**: Defines the application’s routes and their mappings to controllers.
- **utils/**: Helper functions and utility files for reusability.
- **validations/**: Input validation logic for requests.
- **.env**: Environment variables file (not included in the repository).
- **.gitignore**: Excludes sensitive files like `node_modules` and `.env`.
- **package.json**: Lists project dependencies and scripts.
- **package-lock.json**: Records the dependency tree for consistent installations.

---

## 🛠️ Features
- **Email Integration**: Added mailing functionality to send notifications or updates.
- **Password Hashing**: Implemented `bcrypt.js` for secure password storage.
- **One-to-One Mapping**: Established relationships between admins, users, and assignments.
- **Dynamic Status Handling**: Developed a system to handle dynamic assignment statuses.
- **Deployment**: Prepared for deployment of services on platforms like Render.com.

---

## 🌐 Deployment
The application can be deployed on Render.com. Follow these steps:

1. Log in to [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect your GitHub repository and specify the branch for deployment.
4. Add the required environment variables in the Render dashboard.
5. Set the following commands:
   - **Build Command**: `npm install`
   - **Start Command**: `npm run start`
6. Monitor the logs for successful deployment.
7. Access the live application through the Render-provided URL.

---

## 🛠️ Tools and Technologies
- **Node.js**: Runtime for building server-side applications.
- **Express.js**: Web framework for managing routes and middleware.
- **MongoDB**: NoSQL database for managing data.
- **bcrypt.js**: Library for hashing passwords securely.
- **Nodemailer**: Utility for email notifications.

---

## 📝 Notes
- Follow the **MVC (Model-View-Controller)** pattern to maintain clean and modular code.
- Use `.env` to manage sensitive configuration values securely.
- Error handling and validations are performed in middleware and validation files.

---

## 📄 Documentation
- Document all API endpoints and their request/response formats.
- Use tools like **Postman** to test the endpoints and create a collection for easy reference.

