# MegaBlog
MegaBlog is a full-stack modern blogging platform built using React, Vite, Tailwind CSS, and Appwrite. It allows users to create, view, and manage blog posts in a beautifully styled and responsive interface.

# 🚀 Features
⚛️ React + Vite: Fast and modern frontend stack

🎨 Tailwind CSS: Utility-first CSS for rapid UI development

☁️ Appwrite Backend: Handles authentication, database, and file storage

🧪 ESLint: For code quality and style consistency

🔐 User Auth: Register/Login with secure session management

📝 Blog CRUD: Create, read, update, and delete blog posts

# 🖼️ Screenshots
Add screenshots here if available for UI preview

# 📦 Tech Stack

Frontend	Backend
React	Appwrite
Vite	Appwrite DB
Tailwind	Appwrite Auth
ESLint	Appwrite Storage (optional)
# 📁 Project Structure
arduino
Copy
Edit
MegaBlog/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/             # Appwrite config & helper functions
│   ├── App.jsx
│   └── main.jsx
├── .env.sample
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
# ⚙️ Setup Instructions
Prerequisites
Node.js

Appwrite Instance

npm or yarn

1. Clone the repo
bash
Copy
Edit
git clone https://github.com/dpbd-2004/MegaBlog.git
cd MegaBlog
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Configure Appwrite
Create a project in your Appwrite console and enable:

Authentication (Email/Password)

Database (Create a collection for blogs)

Storage (optional: for image uploads)

4. Setup .env file
Rename .env.sample to .env and fill in your Appwrite credentials:

env
Copy
Edit
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/v1
VITE_APPWRITE_PROJECT=your_project_id
VITE_APPWRITE_DATABASE=your_database_id
VITE_APPWRITE_COLLECTION=your_collection_id
VITE_APPWRITE_BUCKET=your_bucket_id (if used)
5. Run the app
bash
Copy
Edit
npm run dev
App runs on http://localhost:5173

# 🧑‍💻 Contributing
Fork the project

Create your branch: git checkout -b feature/xyz

Commit your changes

Push to the branch: git push origin feature/xyz

Open a pull request

📄 License
This project is licensed under the MIT License.
