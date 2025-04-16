import React from "react";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.characterCountEventHandler =
      this.characterCountEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  characterCountEventHandler(event) {
    this.setState(() => {
      return {
        count: 50 - event.target.value.length,
      };
    });
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.addNote({ title, body });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <div className="note-input__body">
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.count}
          </p>
          <form onSubmit={this.onSubmitEventHandler}>
            <input
              type="text"
              placeholder="Ini adalah judul ..."
              maxLength="50"
              onInput={this.characterCountEventHandler}
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <textarea
              name=""
              id=""
              placeholder="Tuliskan catatanmu di sini ..."
              rows="10"
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>
      </div>
    );
  }
}
