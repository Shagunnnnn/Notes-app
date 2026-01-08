import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Note from "@/models/Note";

// UPDATE NOTE
export async function PUT(req, context) {
  const { params } = context;        
  const { id } = await params;       

  const body = await req.json();
  const { title, content } = body;

  await connectDB();

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }
  );

  return NextResponse.json(updatedNote);
}

// DELETE NOTE
export async function DELETE(req, context) {
  const { params } = context;        
  const { id } = await params;       

  await connectDB();
  await Note.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
