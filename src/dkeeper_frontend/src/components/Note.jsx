import React from "react";
import { Pencil, Trash2, Loader } from "lucide-react";

function Note({ onDelete, content, title, id, isDeleting }) {
  function handleDelete() {
    onDelete(id);
  }

  function handleEdit () {
    // Implement editing functionality here
     alert("Edit note", id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="flex items-center justify-between px-3">
        <button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? (
            <Loader className="animate-spin"  color="red"/>
          ) : (
            <Trash2 color="red" className=" hover:text-red-950" />
          )}
        </button>
        <button onClick={handleEdit}>
          <Pencil />
        </button>
      </div>
    </div>
  );
}

export default Note;
