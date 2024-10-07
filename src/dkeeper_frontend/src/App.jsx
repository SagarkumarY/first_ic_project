import { useEffect, useState } from "react";
import { dkeeper_backend } from "declarations/dkeeper_backend";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { Loader } from "lucide-react";
function App() {
  const [notes, setNotes] = useState([]);
  const [isAdding, setIsAdding] = useState(false); // State for adding loading
  const [isFetching, setIsFetching] = useState(false); // State for fetching loading
  const [isDeleting, setIsDeleting] = useState(false); // State for deleting loading
  const [deleteId, setDeleteId] = useState(null); // Track which note is being deleted

  // Function to add a new note
  async function addNote(newNote) {
    setIsAdding(true); // Set loading state for adding
    try {
      // Call the backend to create the new note
      await dkeeper_backend.createText(newNote.title, newNote.content);

      // Update the local notes array
      setNotes((prevNotes) => {
        return [newNote, ...prevNotes];
      });
    } catch (error) {
      console.error("Error adding note:", error);
    } finally {
      setIsAdding(false); // Reset loading state after operation
    }
  }

  useEffect(() => {
    console.log("Use EFfect is triggered");
    fetchData();
  }, []);

  async function fetchData() {
    setIsFetching(true); // Set loading state for fetching
    try {
      // Call the backend to fetch all notes
      const notesData = await dkeeper_backend.readNotes(); // Fix: add parentheses to call
      // Ensure the result is an array and set the notes
      if (Array.isArray(notesData)) setNotes(notesData);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setIsFetching(false); // Reset loading state after operation
    }
  }

  async function deleteNote(id) {
    setIsDeleting(true); // Set loading state for deleting
    setDeleteId(id); // Track which note is being deleted
    try {
      // Delete the note from the backend
      await dkeeper_backend.removeNote(id);

      // Remove the note from the local state
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => index !== id);
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      setIsDeleting(false); // Reset loading state after operation
      setDeleteId(null); // Reset delete ID after completion
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className=" flex-grow">
        <CreateArea onAdd={addNote} isAdding={isAdding}  />

        {/* Loading spinner for fetching data */}
        {isFetching ? (
          <div className="flex justify-center items-center p-4">
            <Loader className="animate-spin w-10 h-10" /> {/* Fetching spinner */}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {notes.map((noteItem, index) => (
              <div className="" key={index}>
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                  isDeleting={isDeleting && deleteId === index} // Check if this note is being deleted
                />
              </div>
            ))}
          </div>
        )}


      </div>
      <Footer />
    </div>
  );
}

export default App;
