// Importing necessary modules from the base library
import Text "mo:base/Text"; // For handling text (string) operations
import List "mo:base/List"; // For working with lists
import Debug "mo:base/Debug"; // For debugging and printing
import Nat "mo:base/Nat";
// import Array "mo:base/Array";

// Define the actor, DKeeper, which will manage the list of notes
actor DKeeper {

    // Define a custom type called "Note" to represent a note with a title and content
    public type Note = {
        title : Text; // Title of the note
        content : Text; // Content of the note
    };

    // A variable to store the list of notes, initially an empty list
    stable var _notes : List.List<Note> = List.nil<Note>();

    // Public function to create and add a new note
    public func createText(titleTest : Text, contentText : Text) {

        // Create a new note with the provided title and content
        let _newNote : Note = {
            title = titleTest;
            content = contentText;
        };

        // Add the new note to the _notes list
        // List.push adds the new note to the front of the list
        _notes := List.push(_newNote, _notes);

        // Print the current state of the _notes list for debugging purposes
        Debug.print(debug_show (_notes));
    };



    // Read (retrieve) all notes
    public query func readNotes() : async [Note] {
        return List.toArray(_notes); // Convert the list to an array and return
    };



    // Delete a note by its index (id)
    public func removeNote(id : Nat) {
        // Get the list up to (but not including) the index 'id'
        let listFront = List.take(_notes, id);

        // Get the list after index 'id' (i.e., drop the first 'id + 1' elements)
        let listBack = List.drop(_notes, id + 1);

        // Combine the two lists to form the updated _notes list without the element at 'id'
        _notes := List.append(listFront, listBack);

        // Print the current state of the _notes list for debugging purposes
        Debug.print(debug_show (_notes));
    };


    // Function to edit a note by its index (id)
    // public func editNote(id : Nat, newTitle : Text, newContent : Text) {
    //     // Convert list to array for easier index-based access
    //     let notesArray = List.toArray(_notes);

    //     // Check if the provided id is within bounds
    //     if (id < Array.size(notesArray)) {
    //         // Update the note at the given index with new title and content
    //         Array.set(notesArray, id, {
    //             title = newTitle;
    //             content = newContent;
    //         });

    //         // Convert the updated array back to a list and update _notes
    //         _notes := List.fromArray(notesArray);

    //         // Print the updated _notes list for debugging
    //         Debug.print(debug_show(_notes));
    //     } else {
    //         Debug.print("Invalid index, cannot edit note.");
    //     }
    // };

};
