import React from "react";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils";

export default function NoteItem(props) {
  return (
    <div className="note-item neumorphic">
      <div className="note-item__content">
        <h3 className="note-item__title">{props.title}</h3>
        <p className="note-item__date">{showFormattedDate(props.createdAt)}</p>
        <div className="note-item__body">{props.body}</div>
      </div>
      <NoteItemAction
        id={props.id}
        onDelete={props.onDelete}
        onArchived={props.onArchived}
        archived={props.archived}
      />
    </div>
  );
}