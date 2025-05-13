import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
      keyword: "",
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.addNoteEventHandler = this.addNoteEventHandler.bind(this);
    this.searchEventHandler = this.searchEventHandler.bind(this);
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
  }

  searchEventHandler(keyword) {
    this.setState({ keyword });
  }

  onDeleteEventHandler(id) {
    const data = this.state.data.filter((data) => data.id !== id);
    this.setState({ data });
  }

  addNoteEventHandler(note) {
    const newNote = {
      ...note,
      id: +new Date(),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((prevState) => ({
      data: [...prevState.data, newNote],
    }));
  }

  onArchivedEventHandler(id) {
    this.setState((prevState) => {
      return {
        data: prevState.data.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  render() {
    const filteredNotes = this.state.data.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <>
        <NoteHeader onSearch={this.searchEventHandler} />
        <NoteBody
          note={filteredNotes}
          onDelete={this.onDeleteEventHandler}
          addNote={this.addNoteEventHandler}
          onArchived={this.onArchivedEventHandler}
        />
      </>
    );
  }
}
