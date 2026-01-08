"use client";

import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F7] p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">
          Notes
        </h1>

        <NoteForm refreshNotes={fetchNotes} />
        <NoteList notes={notes} refreshNotes={fetchNotes} />
      </div>
    </main>
  );
}
