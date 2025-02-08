# AuditSafe

AuditSafe is a web application that simplifies **security audit management** by allowing users to upload, analyze, and visualize audit reports.
It generates **summarized insights**, provides **security suggestions**, and offers various **data visualizations** to help organizations make informed decisions.
Designed with a clean and intuitive UI, AuditSafe aims to enhance compliance management for businesses .

---

## Features

- **User Authentication**

  - Secure login and signup using **JWT-based authentication**.
  - Passwords are securely **hashed** to protect user credentials.

- **User Profiles**

  - Each user has a personal profile to **view past uploaded audit reports** and manage their data.

- **Dashboard**

  - A centralized dashboard showing:
    - **Summarized analysis** of uploaded audit reports.
    - **Security recommendations** to improve system defenses.
    - Key **insights** from audit data.

- **Report Visualization**

  - Interactive charts to interpret audit data effectively using **Recharts**:
    - **Bar, line, and pie charts** to represent audit results.

- **Clean User Interface**

  - Built with **React + TypeScript** for scalability and **Tailwind CSS** for a modern look.
  - **Material-UI** components used to enhance the visual design.

- **Security Recommendations**
  - Actionable suggestions to address gaps identified in the audit report.

---

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI, Tailwind CSS
- **Backend**: Node.js, Express, JWT Authentication
- **Database**: MongoDB with **Mongoose ORM**
- **Charts**: Recharts (for data visualizations)

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+): [Download Node.js](https://nodejs.org)
- **MongoDB**: [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)
- **Git**: [Download Git](https://git-scm.com/downloads)

---

## Installation

1. **Clone the repository**  
   Open your terminal and run:

   ```bash
   git clone https://github.com/Ujjawal-Kantt/Audit-Safe.git
   cd AuditSafe
   ```

2. **Install dependencies**  
   Navigate to the project directory and install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

4. **Configure the .env file**  
   Add the following environment variables to your `.env` file:

   ```bash
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=mongodb://localhost:27017/auditsafe
   PORT=5000
   ```

5. **Start MongoDB server**  
   If you are running MongoDB locally, open a new terminal and run:

   ```bash
   mongod
   ```

6. **Run the development server**  
   Start the backend and frontend simultaneously:

   ```bash
   npm run dev
   ```

7. **Open the application**  
   Visit `http://localhost:3000` in your browser to use AuditSafe.

---

## Usage

1. **Sign up or Log in**

   - Create an account or log in using your credentials to access the dashboard.

2. **Upload a Security Audit Report**

   - Use the **Upload Report** feature to add a new audit report to the system.

3. **View Suggestions and Summaries**

   - After uploading, the dashboard displays a **summary** of the report and **security suggestions**.

4. **Explore Visualizations**

   - View the report data in various formats such as **bar, line, and pie charts**.

5. **Manage Your Profile**
   - Visit your **profile** to access all previously uploaded reports.

---

## Scripts

- **Start the development server**:

  ```bash
  npm run dev
  ```

- **Start only the backend**:

  ```bash
  npm run server
  ```

- **Build the frontend for production**:
  ```bash
  npm run build
  ```

---

## Folder Structure

```
AuditSafe/
│
├── backend/                # Backend code (Node.js, Express)
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware
│   └── utils/              # Utility functions
│
├── frontend/               # Frontend code (React + TypeScript)
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   ├── ui/             # The components of UI which we have used in React Components
|
└── .env                    # Environment variables
```

---

## Contributing

Contributions are welcome! If you would like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact

For any queries or issues, feel free to contact me.
