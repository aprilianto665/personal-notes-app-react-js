import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteListEmptyMessage() {
  return <div className="notes-list__empty-message">Tidak ada catatan</div>;
}

export default function NoteBody({ addNote, note, onDelete, onArchived }) {
  const activeNotes = note.filter((n) => !n.archived);
  const archivedNotes = note.filter((n) => n.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />

      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? (
        <NoteList
          note={activeNotes}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      ) : (
        <NoteListEmptyMessage />
      )}

      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NoteList
          note={archivedNotes}
          onDelete={onDelete}
          onArchived={onArchived}
        />
      ) : (
        <NoteListEmptyMessage />
      )}
    </div>
  );
}
