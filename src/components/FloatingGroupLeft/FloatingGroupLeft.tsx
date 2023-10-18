import "./styles.css";
import { useContext } from "react";
import { NewModalContent } from "./ModalContentProvider";

const FloatingGroupLeft = () => {
  const context = useContext(NewModalContent);
  if (!context) {
    throw new Error("Must be used within a ModalContentProvider");
  }
  const { elements } = context;

  return (
    <div id="floating-group-left">
      <div id="header">Consultation Transcription</div>
      <div id="modal-container">
        {elements.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
    </div>
  );
};

export default FloatingGroupLeft;
