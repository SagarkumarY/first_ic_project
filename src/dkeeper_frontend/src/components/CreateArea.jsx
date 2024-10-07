import React, { useState } from "react";
import { Loader, Plus } from "lucide-react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
     // Validate input
     if (!note.title.trim() || !note.content.trim()) {
       alert("Title and content cannot be empty.");
      return; // Prevent submission
    }

    if (note.title.length < 5 || note.content.length < 5) {
      alert("Title and content must be at least 5 characters long.");
      return; // Prevent submission
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
   
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
          <button
            onClick={submitNote}
            disabled={props.isAdding}
            className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 mt-2"
          >
            {props.isAdding ? (
              <Loader className="animate-spin w-6  h-6" />
            ) : (
              <Plus className="w-6 h-6 text-white" />
            )}
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
