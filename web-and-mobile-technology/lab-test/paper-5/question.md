<div align="center">

# SE2020 — Web and Mobile Technologies · Faculty of Computing

</div>

<div align="center">

# Practice Lab Test — Paper 5

</div>

## Duration: 2 Hours &nbsp;|&nbsp; Difficulty: ⭐⭐⭐⭐ Medium–Hard

---

## Event Manager MERN Application Enhancement and Deployment

---

## 1. Lab Test Overview

You are provided with a starter MERN **Event Manager** project. Your task is to complete the given project, extend it by adding **two** new fields: **Event Date** (date picker) and **Location Type** (dropdown), test it locally using your own MongoDB connection string, publish the source code to a public GitHub repository, and deploy the frontend and backend separately using free hosting platforms.

---

## 2. Expected Skills Demonstrated

- Modifying the full MERN stack to support Date objects and Enums.
- Working with HTML5 `<input type="date">` and properly formatting dates in React.
- Mongoose validation for dates (e.g., ensuring an event date is not in the past if required).
- Full Git workflow and separate deployment.

---

## 3. Resources Provided

- Frontend project of the Event Manager application (React + Vite).
- Backend project of the Event Manager application (Node.js + Express + MongoDB).
- Basic CRUD functionality already included in the starter project (Add / View / Edit / Delete Events).
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
  - Existing features (Add / View / Edit / Delete Event) are working.

---

### Task 02 — Functional Enhancement

Modify the application by adding **two** new fields to the Add Event form:
1. **Event Date**: A Date input field (`<input type="date">`).
2. **Location Type**: A dropdown (`<select>`) field.

**Requirements:**
- Update the frontend form to collect both values from the user.
- Update the backend model, controller logic, and API flow to save them correctly.
  - **Event Date type**: Must be a `Date` type in Mongoose.
  - **Location Type options**: 'In-Person', 'Online', 'Hybrid'. (Must be enforced using a Mongoose `enum`).
- Display both fields on the Home page inside each event card alongside existing details (Event Name, Organizer, Description).
- **Date Formatting**: Format the Date correctly on the frontend so it is readable (e.g., "October 15, 2024" or "YYYY-MM-DD"). Avoid displaying raw ISO strings like `2024-10-15T00:00:00.000Z`.
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
- Screenshot of the locally running **existing** project — Add Event page
- Screenshot of the locally running **existing** project — Home page
- Screenshot of the locally running **updated** project — Add Event page *(showing Event Date and Location Type fields)*
- Screenshot of the locally running **updated** project — Home page *(showing the formatted Event Date and Location Type)*
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
| Multiple field integration (Date, Location Type) | Adds both fields and updates frontend and backend correctly. | 20 | Handled Mongoose Date types and Enums. |
| Formatting and Display | Date is formatted in a readable way and Location Type shown clearly. | 10 | Visible evidence must match the implementation. |
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
