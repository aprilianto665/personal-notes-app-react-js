import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ note, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {note.map(({ id, title, body, createdAt, archived }) => {
        return (
          <NoteItem
            key={id}
            {...{ id, title, body, createdAt, archived }}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        );
      })}
    </div>
  );
}