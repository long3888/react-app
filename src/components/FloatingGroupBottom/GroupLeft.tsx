import "./styles.css";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useState, useContext } from "react";
import { NewModalContent } from "../FloatingGroupLeft/ModalContentProvider";

const GroupLeft = () => {
  const context = useContext(NewModalContent);
  if (!context) {
    throw new Error("Must be used within a ModalContentProvider");
  }
  const { addElement } = context;

  const [selected, setSelected] = useState(false);
  const handleToggle = () => {
    setSelected(!selected);
  };

  return (
    <div id="group-left">
      <IconButton id="custom-icon-button" onClick={addElement} aria-label="add">
        <NoteAddOutlinedIcon />
      </IconButton>
      <ToggleButton
        id="custom-toggle-button"
        className={selected ? "active" : ""}
        value="check"
        selected={selected}
        onChange={handleToggle}
        aria-label="record"
      >
        <MicIcon />
      </ToggleButton>
      <IconButton id="custom-icon-button" aria-label="send">
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default GroupLeft;
