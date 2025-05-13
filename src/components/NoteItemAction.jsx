import React from "react";

export default function NoteItemAction({ id, onDelete, onArchived, archived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchived(id)}
      >
        {archived ? 'Pulihkan' : 'Arsipkan'}
      </button>
    </div>
  );
}