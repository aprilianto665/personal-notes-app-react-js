import React from "react";

export default class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(event) {
    const search = event.target.value;
    this.props.onSearch(search);
  }

  render() {
    return (
      <div className="note-app__header neumorphic">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            onChange={this.onChangeSearch}
          />
        </div>
      </div>
    );
  }
}