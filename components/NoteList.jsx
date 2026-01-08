"use client";
import { useState } from "react";

export default function NoteList({ notes, refreshNotes }) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const startEdit = (note) => {
    setEditingId(note._id);
    setTitle(note.title || "");
    setContent(note.content || "");
  };

  const saveEdit = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setEditingId(null);
    refreshNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    refreshNotes();
  };

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white rounded-xl shadow p-4"
        >
          <div className="text-xs text-gray-400 mb-1">
            {note.createdAt
              ? new Date(note.createdAt).toLocaleString()
              : ""}
          </div>

          {editingId === note._id ? (
            <>
              <input
                className="w-full font-medium mb-1 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="w-full text-sm outline-none"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div className="flex gap-4 text-sm mt-2">
                <button
                  onClick={() => saveEdit(note._id)}
                  className="text-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-medium">{note.title}</h2>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {note.content}
              </p>

              <div className="flex gap-4 text-sm mt-2">
                <button
                  onClick={() => startEdit(note)}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
