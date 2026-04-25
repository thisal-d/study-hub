<div align="center">

# SE2020 — Web and Mobile Technologies · Faculty of Computing

</div>

<div align="center">

# Practice Lab Test — Paper 1

</div>

## Duration: 2 Hours &nbsp;|&nbsp; Difficulty: ⭐ Easy

---

## Book Manager MERN Application Enhancement and Deployment

---

## 1. Lab Test Overview

You are provided with a starter MERN **Book Manager** project containing separate frontend and backend applications. Your task is to complete the given project, extend it by adding a new field called **Genre**, test it locally using your own MongoDB connection string, publish the source code to a public GitHub repository, and deploy the frontend and backend separately using free hosting platforms.

---

## 2. Expected Skills Demonstrated

- Understanding and completing an existing MERN project structure.
- Updating both frontend and backend to support a new data field.
- Testing the system locally using MongoDB Atlas or an equivalent MongoDB connection.
- Using Git and GitHub to publish the full project in a public repository.
- Deploying frontend and backend separately and connecting the live frontend to the live backend.

---

## 3. Resources Provided

- Frontend project of the Book Manager application (React + Vite).
- Backend project of the Book Manager application (Node.js + Express + MongoDB).
- Basic CRUD functionality already included in the starter project.
- You are expected to complete, test, and deploy the provided codebase during the lab test.

---

## 4. Tasks to Be Completed

### Task 01 — Project Setup and Local Verification

**Backend Setup**

1. Open the backend project in a terminal or VS Code.
2. Install required dependencies:
   ```
   npm install
   ```
3. Configure the environment variables:
   - Create a `.env` file in the backend root.
   - Add your MongoDB Connection URL:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
4. Start the backend server:
   ```
   npm run dev
   ```
5. Ensure the backend runs without errors.

**Frontend Setup**

1. Open the frontend project in a new terminal or VS Code.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm run dev
   ```

**Verification**

- Open the application in your browser (`http://localhost:5173`).
- Verify the following:
  - Application loads successfully.
  - You can navigate between pages (Home, Add Book).
  - Existing features (Add Book / View Books / Edit Book / Delete Book) are working.
- Capture screenshots of the local running existing system.

---

### Task 02 — Functional Enhancement

Modify the application by adding a new field named **Genre** to the Add Book form.

- Update the relevant frontend component(s) to collect this value from the user.
- Update the backend model, controller logic, and API flow as needed so the value is saved correctly.
- Ensure that the **Genre** value is shown on the Home page together with the other book details (Title, Author, Price, Description).
- Make sure the new field behaves correctly during **add**, **read**, and **update** operations.
- Capture screenshots of the local running updated system.

**Hint:** The Genre field should be a text input (e.g., "Fiction", "Science", "History"). It is a required field.

---

### Task 03 — GitHub Publication

1. Create a new **public** GitHub repository using your own GitHub account.
2. You may choose ONE of the following approaches:
   - **Option A:** Use a single repository containing both frontend and backend (in separate subfolders).
   - **Option B:** Use two separate repositories (one for frontend, one for backend).
3. Push the complete project to GitHub after testing locally.
4. Ensure:
   - The repository structure is clean and well organized.
   - Both frontend and backend codes are clearly separated.
   - The GitHub repository/repositories must be created before starting deployment.

---

### Task 04 — Separate Deployment

1. Deploy the **backend** to a free hosting platform (e.g., Railway, Render, or equivalent).
2. Deploy the **frontend** to a free hosting platform (e.g., Netlify, Vercel, or equivalent).
3. Update the frontend configuration so that it communicates with the deployed backend URL.
   - Update the `VITE_API_URL` environment variable (or equivalent) in the frontend deployment settings.
4. Verify that the live system works successfully after deployment (add a book and confirm it appears on the home page).

---

## 5. Required Contents of the Submission Word Document

Your submitted Word document must include all of the following items, clearly and in order:

- Student Name
- Student ID
- GitHub Repository Link(s)
- Screenshot of the locally running **existing** project — Add Book page
- Screenshot of the locally running **existing** project — Home page
- Screenshot of the locally running **updated** project — Add Book page *(showing the Genre field)*
- Screenshot of the locally running **updated** project — Home page *(showing Genre displayed)*
- Frontend Live URL
- Backend Live URL
- Brief deployment notes including the platforms used

---

<div align="center">

## 6. Marking Scheme (100 Marks)

</div>

| Component | Description | Marks | Notes |
|---|---|---|---|
| Local setup and MongoDB configuration | Correctly configures the connection URL and verifies the project locally. | 10 | System should run without major local errors. |
| New field integration (Genre) | Adds the Genre field to the form and updates frontend and backend correctly. | 20 | This is the main development task. |
| Home page display | Genre is shown properly on the Home page alongside other book details. | 10 | Visible evidence must match the implementation. |
| GitHub repository management | Creates a public repository and pushes the complete project in a clean structure. | 10 | Repository must be accessible to the examiner. |
| Backend deployment | Deploys the backend successfully and provides a valid live backend URL. | 20 | Backend should support the required live requests. |
| Frontend deployment and integration | Deploys the frontend and connects it to the live backend correctly. | 25 | Live application should function end to end. |
| Submission document quality | Includes all requested details, screenshots, and deployment notes clearly. | 5 | Missing evidence will reduce marks. |

---

## 7. Important Rules

- This is an individual lab test.
- Use only your own GitHub account and your own deployment accounts.
- Do not remove existing core functionality from the provided starter project.
- Do not submit broken, inaccessible, or private links.
- Make sure screenshots are readable inside the submission document.
