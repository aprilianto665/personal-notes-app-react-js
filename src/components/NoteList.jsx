import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ note, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {note.map(({ id, title, body, createdAt }) => {
        return (
          <NoteItem
            key={id}
            {...{ id, title, body, createdAt }}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        );
      })}
    </div>
  );
}
