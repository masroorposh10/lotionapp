import { useState } from "react";
const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  
  const [isEditingEnabled, setIsEditingEnabled] = useState(true);

  const handleStopEditing = () => {
    setIsEditingEnabled(false);
  };
  const startEditing = () =>{
    setIsEditingEnabled(true);
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
        
        <div className="savebtn">
        <button className="save" onClick={handleStopEditing}>SAVE</button>
        <button className="save" onClick={startEditing}>EDIT</button>
        </div>
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          disabled={!isEditingEnabled}
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <div>
        
    </div>
        <textarea
          id="body"
          placeholder="Write here..."
          disabled={!isEditingEnabled}
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />  
      </div>
    </div>
  );
};

export default Main;