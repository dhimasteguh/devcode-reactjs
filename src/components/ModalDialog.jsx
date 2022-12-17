import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const ModalDialog = ({
  title,
  content,
  modalRef,
  onClose,
  onCancel,
  onOke,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  return (
    <>
      <Button
        ref={modalRef}
        style={{ display: "none" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Slide in alert dialog
      </Button>
      <Dialog
        className="delete-dialog"
        open={open}
        fullWidth
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {title}
        <DialogContent className="modal-content">{content}</DialogContent>
        <div
          className="flex-center"
          style={{
            gap: 20,
            paddingTop: 42,
            paddingBottom: 42,
          }}
        >
          <button
            data-cy="modal-delete-cancel-button"
            onClick={() => {
              handleClose();
              onCancel();
            }}
            className="btn-cancel"
          >
            Batal
          </button>
          <button
            data-cy="modal-delete-confirm-button"
            onClick={() => {
              handleClose();
              onOke();
            }}
            className="btn-oke"
          >
            Hapus
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default ModalDialog;
