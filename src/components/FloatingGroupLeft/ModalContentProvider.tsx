import React, { createContext, useState, ReactNode } from "react";
import ModalContent from "./ModalContent";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

interface ContextProps {
  elements: JSX.Element[];
  addElement: () => void;
}

export const NewModalContent = createContext<ContextProps | undefined>(
  undefined
);

interface ProviderProps {
  children: ReactNode;
}

export const ModalContentProvider: React.FC<ProviderProps> = ({ children }) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [open, setOpen] = useState(false);

  const addElement = () => {
    const id = uuidv4();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    setElements((prevElements) => [
      ...prevElements,
      <div key={id} id="modal-content">
        <span id="current-time">{currentTime}</span>
        <IconButton
          onClick={() => setOpen(true)}
          aria-label="Rename"
          size="small"
        >
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </div>,
    ]);
  };

  return (
    <NewModalContent.Provider value={{ elements, addElement }}>
      {children}
      <ModalContent open={open} setOpen={setOpen} />
    </NewModalContent.Provider>
  );
};
