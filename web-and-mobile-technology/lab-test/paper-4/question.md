<div align="center">

# SE2020 — Web and Mobile Technologies · Faculty of Computing

</div>

<div align="center">

# Practice Lab Test — Paper 4

</div>

## Duration: 2 Hours &nbsp;|&nbsp; Difficulty: ⭐⭐⭐ Medium

---

## Movie Watchlist Manager MERN Application Enhancement and Deployment

---

## 1. Lab Test Overview

You are provided with a starter MERN **Movie Watchlist Manager** project. Your task is to complete the given project, extend it by adding **two** new fields: **Release Year** (number) and **Age Rating** (dropdown), test it locally using your own MongoDB connection string, publish the source code to a public GitHub repository, and deploy the frontend and backend separately using free hosting platforms.

---

## 2. Expected Skills Demonstrated

- Modifying the full MERN stack to support multiple new data fields.
- Validating integer fields for dates (e.g., reasonable year bounds) and dropdown menus.
- Organizing UI layouts to display extra meta-information compactly.
- Full Git workflow and separate deployment.

---

## 3. Resources Provided

- Frontend project of the Movie Watchlist Manager application (React + Vite).
- Backend project of the Movie Watchlist Manager application (Node.js + Express + MongoDB).
- Basic CRUD functionality already included in the starter project (Add / View / Edit / Delete Movies).
- You are expected to complete, test, and deploy the provided codebase during the lab test.

---

## 4. Tasks to Be Completed

### Task 01 — Project Setup and Local Verification

**Backend Setup**

1. Open the backend project in a terminal or VS Code.
2. Install required dependencies: `npm install`
3. Configure the environment variables:
   - Create a `.env` file in the backend root.
   - Add your MongoDB Connection URL:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
4. Start the backend server: `npm run dev`

**Frontend Setup**

1. Open the frontend project in a new terminal or VS Code.
2. Install dependencies: `npm install`
3. Start the frontend application: `npm run dev`

**Verification**

- Open the application in your browser (`http://localhost:5173`).
- Verify the following:
  - Application loads successfully.
  - You can navigate between pages.
  - Existing features (Add / View / Edit / Delete Movie) are working.

---

### Task 02 — Functional Enhancement

Modify the application by adding **two** new fields to the Add Movie form:
1. **Release Year**: A numeric input field.
2. **Age Rating**: A dropdown (`<select>`) field.

**Requirements:**
- Update the frontend form to collect both values from the user.
- Update the backend model, controller logic, and API flow to save them correctly.
  - **Release Year validation**: Must be a 4-digit number between `1888` and the current year plus 5 (e.g., `2030`).
  - **Age Rating options**: 'G', 'PG', 'PG-13', 'R', 'NC-17'. (Must be enforced using a Mongoose `enum`).
- Display both fields on the Home page inside each movie card alongside existing details (Title, Director, Genre).
- Format the Release Year and Age Rating gracefully on the frontend (e.g., displaying the Rating in a small bordered badge).
- Make sure the new fields behave correctly during **add**, **read**, and **update** operations.

---

### Task 03 — GitHub Publication

1. Create a new **public** GitHub repository using your own GitHub account.
2. Push the complete project to GitHub after testing locally.
3. Ensure both frontend and backend codes are clearly separated.

---

### Task 04 — Separate Deployment

1. Deploy the **backend** to a free hosting platform (e.g., Railway, Render).
2. Deploy the **frontend** to a free hosting platform (e.g., Netlify, Vercel).
3. Update the frontend configuration (`VITE_API_URL`) to communicate with the deployed backend URL.
4. Verify that the live system works successfully after deployment.

---

## 5. Required Contents of the Submission Word Document

Your submitted Word document must include all of the following items, clearly and in order:

- Student Name
- Student ID
- GitHub Repository Link(s)
- Screenshot of the locally running **existing** project — Add Movie page
- Screenshot of the locally running **existing** project — Home page
- Screenshot of the locally running **updated** project — Add Movie page *(showing Release Year and Rating fields)*
- Screenshot of the locally running **updated** project — Home page *(showing the Release Year and Rating badge)*
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
| Multiple field integration (Year, Rating) | Adds both fields and updates frontend and backend correctly. | 20 | Handled Mongoose enums and year number bounds. |
| Formatting and Display | Rating badge formatted correctly and Release Year shown clearly. | 10 | Visible evidence must match the implementation. |
| GitHub repository management | Creates a public repository and pushes the complete project. | 10 | Repository must be accessible. |
| Backend deployment | Deploys the backend successfully and provides a valid live URL. | 20 | Backend should support live requests. |
| Frontend deployment and integration | Deploys the frontend and connects it to the live backend correctly. | 25 | Live application should function end to end. |
| Submission document quality | Includes all requested details, screenshots, and deployment notes clearly. | 5 | Missing evidence will reduce marks. |

---

## 7. Important Rules

- This is an individual lab test.
- Use only your own GitHub account and your own deployment accounts.
- Do not remove existing core functionality from the provided starter project.
- Do not submit broken, inaccessible, or private links.
