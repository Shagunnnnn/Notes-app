This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# 📝 Notes App

A full-stack Notes application.  
Users can create, view, edit, and delete notes with date & time support.

---

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Next.js API Routes
- **Database:** MongoDB (Mongoose)
- **Styling:** Tailwind CSS
- **Language:** JavaScript

---

## ✨ Features

- ➕ Add new notes  
- 📝 Edit existing notes  
- ❌ Delete notes instantly  
- 📅 Automatic date & time display  
- 📱 Fully responsive (mobile + web friendly UI)  
- 💾 Data stored securely in MongoDB  

---

## 📂 Project Structure

notes-app/
│
├── app/
│ ├── api/
│ │ └── notes/
│ │ ├── route.js
│ │ └── [id]/route.js
│ ├── page.js
│
├── components/
│ ├── NoteForm.jsx
│ └── NoteList.jsx
│
├── lib/
│ └── mongodb.js
│
├── models/
│ └── Note.js
│
├── .env.local
├── .gitignore
└── README.md
