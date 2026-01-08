"use client";
import { useState } from "react";

export default function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    if (!content.trim()) return;

    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    refreshNotes();
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <input
        className="w-full text-lg font-medium outline-none mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full text-sm outline-none resize-none"
        rows={3}
        placeholder="Note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={addNote}
        className="mt-2 text-blue-600 text-sm font-medium"
      >
        Add Note
      </button>
    </div>
  );
}
