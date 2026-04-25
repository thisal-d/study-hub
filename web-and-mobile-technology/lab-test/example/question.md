<div align="center">

# SE2020-Web and Mobile Technologies Faculty of Computing

</div>

<div align="center">

# Lab Test

</div>

## 2 Hours

## Item Manager MERN Application Enhancement and Deployment

## 1. Lab Test Overview

You are provided with a starter MERN Item Manager project containing separate frontend and backend applications. Your task is to complete the given project, extend it by adding a new field called Serial Number, test it locally using your own MongoDB connection string, publish the source code to a public GitHub repository, and deploy the frontend and backend separately using free hosting platforms.

## 2. Expected Skills Demonstrated

- Understanding and completing an existing MERN project structure.

- Updating both frontend and backend to support a new data field.

- Testing the system locally using MongoDB Atlas or an equivalent MongoDB connection.

- Using Git and GitHub to publish the full project in a public repository.

- Deploying frontend and backend separately and connecting the live frontend to the live backend.

## 3. Resources Provided

- Frontend project of the Item Manager application.

- Backend project of the Item Manager application.

- Basic CRUD functionality already included in the starter project.

- You are expected to complete, test, and deploy the provided codebase during the lab test.

## 4. Tasks to Be Completed

Task 01 - Project setup and local verification

- Extract the provided Item Manager project (Frontend & Backend).

- Backend Setup

- Open the backend project in a terminal or VS Code.

- Install required dependencies:

npm install

- Configure the environment variables:

- Add your MongoDB Connection URL in the .env file

- Example:

MONGO_URI=your_mongodb_connection_string

PORT=5000

- Start the backend server:

npm run dev

- Ensure the backend runs without errors.

## Frontend Setup

- Open the frontend project in a new terminal or VS Code.

- Install dependencies:

npm install

- Start the frontend application:

npm run dev

## Verification

- Open the application in your browser (http://localhost:5173).

- Verify the following:

- Application loads successfully

- You can navigate between pages

- Existing features (Add Item / View Items) are working

- Capture screenshots of the local running existing system.

## Task 02 - Functional enhancement

- Modify the application by adding a new field named Serial Number to the Add Item form.

- Update the relevant frontend component(s) to collect this value from the user.

- Update the backend model, controller logic, and API flow as needed so the value is saved correctly.

- Ensure that the Serial Number value is shown on the Home page together with the other item details.

- Make sure the new field behaves correctly during add, read, and any related update operations.

- Capture screenshots of the local running updated system as instructed in the submission section.

## Task 03 - GitHub publication

- Create a new public GitHub repository using your own GitHub account (Use your SLIIT GitHub account. If there are any issues, you may use your personal GitHub account.)

- You may choose ONE of the following approaches:

- Option 01: Use a single repository containing both frontend and backend

- Option 02: Use two separate repositories (one for frontend and one for backend)

- Push the complete project to GitHub after testing locally

- Ensure:

- The repository structure is clean and well organized

- Both frontend and backend codes are clearly separated (if using a single repository)

- The GitHub repository/repositories must be created before starting deployment

## Task 04 - Separate deployment

- Deploy the backend to a free hosting platform such as Railway, Render or another equivalent service. Item Manager Lab Test-2 Hour Practical

- Deploy the frontend to a free hosting platform such as Netlify, Vercel or another equivalent service.

- Update the frontend configuration so that it communicates with the deployed backend URL.

- Verify that the live system works successfully after deployment.

## 5. Required Contents of the Submission Word Document

Your submitted Word document must include all of the following items clearly and in order:

- Student Name

- Student ID

- GitHub Repository Links

- Screenshot of the locally running existing project Add Item page

- Screenshot of the locally running existing project Home page

- Screenshot of the locally running updated project Add Item page

- Screenshot of the locally running updated project Home page

- Frontend Live URL

- Backend Live URL

- Brief deployment notes including the platforms used

<div align="center">

6. Marking Scheme (100 Marks)

</div>

<table border="1"><tr><td>Component</td><td>Description</td><td>Marks</td><td>Comments for Students</td></tr><tr><td>Local setup and MongoDB configuration</td><td>Correctly configures the connection URL and verifies the project locally before deployment.</td><td>10</td><td>System should run without major local errors.</td></tr><tr><td>New field integration</td><td>Adds the new field to the form and updates the relevant frontend and backend logic correctly.</td><td>20</td><td>This is the main development task in the lab test.</td></tr><tr><td>Home page display and application behavior</td><td>New field is shown properly on the Home page and the overall flow works correctly.</td><td>10</td><td>Visible evidence must match the implementation.</td></tr></table>

<table border="1"><tr><td>Component</td><td>Description</td><td>Marks</td><td>Comments for Students</td></tr><tr><td>GitHub repository management</td><td>Creates a public repository and pushes the complete project in a clear structure.</td><td>10</td><td>Repository must be accessible to the examiner.</td></tr><tr><td>Backend deployment</td><td>Deploys the backend successfully and provides a valid live backend URL.</td><td>20</td><td>Backend should support the required live requests.</td></tr><tr><td>Frontend deployment and integration</td><td>Deploys the frontend successfully and connects it to the live backend correctly.</td><td>25</td><td>Live application should function end to end.</td></tr><tr><td>Submission document quality</td><td>Includes all requested details, screenshots, and deployment notes clearly.</td><td>5</td><td>Missing evidence will reduce marks.</td></tr></table>

## 7. Important Rules

- This is an individual lab test.

- Use only your own GitHub account and your own deployment accounts.

- Do not remove existing core functionality from the provided starter project.

- Do not submit broken, inaccessible, or private links.

- Make sure screenshots are readable inside the submission document.