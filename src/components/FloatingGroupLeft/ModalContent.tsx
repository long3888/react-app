import React from "react";
import { Modal, Box, TextareaAutosize, Button } from "@mui/material";

interface ModalContentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Add your save logic here
    // You can access the content of the textarea as needed
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEscapeKeyDown={true}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextareaAutosize
          aria-label="description"
          minRows={3}
          placeholder="Description"
          style={{ width: "100%" }}
        />

        {/* Save and Cancel buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            color="primary"
            style={{ marginRight: "8px" }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalContent;
