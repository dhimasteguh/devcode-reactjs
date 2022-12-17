import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { priorties } from "../../constants/constant";
import BasicSelect from "../../components/Select";
import * as local from "../../data/local/ActivityLocalRepository";
import Cancel from "../../constants/icons/Cancel";
import { Box, CircularProgress } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FormTodoModalDialog({ modalRef, saveAction }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [priority, setPriority] = React.useState(priorties[0].value);
  const [title, setTitle] = React.useState("");
  const [id, setId] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
    const todo = local.getTodo();
    if (todo) {
      setPriority(todo.priority);
      setTitle(todo.title);
      setId(todo.id);
    }
  };

  const handleClose = () => {
    local.setTodo(null);
    setPriority(priorties[0].value);
    setTitle("");
    setOpen(false);
  };
  const handleSave = async () => {
    var reqData = {
      title: title,
      priority: priority,
    };
    if (id) reqData.id = id;
    setIsLoading(true);
    console.log(reqData);
    await saveAction(reqData);
    setIsLoading(false);
    handleClose();
  };
  const isValid = () => {
    return title !== "";
  };
  return (
    <div>
      <Button
        ref={modalRef}
        style={{ display: "none" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Slide in alert dialog
      </Button>
      <Dialog
        className="main-dialog"
        open={open}
        fullWidth
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="modal-title">
          <div>Tambah List Item</div>
          <Cancel
            test={"modal-add-close-button"}
            onClick={() => setOpen(false)}
          />
        </div>
        <DialogContent className="modal-content">
          <label className="new-todo-label">NAMA LIST ITEM</label>
          <div className="new-todo-title">
            <input
              data-cy="modal-add-name-input"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Tambahkan nama list item"
            ></input>
          </div>
          <label className="new-todo-label">PRIORITY</label>
          <div className="new-todo-priority">
            <BasicSelect
              handleChange={(e) => setPriority(e.target.value)}
              value={priority}
              options={priorties}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            data-cy="modal-add-save-button"
            disabled={!isValid()}
            onClick={handleSave}
            className={`add-btn-todo ${isValid() ? "" : "invalid"}`}
          >
            {isLoading ? (
              <Box style={{ padding: "0px 20px" }} sx={{ display: "flex" }}>
                <CircularProgress color="inherit" />
              </Box>
            ) : (
              <span>Simpan</span>
            )}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
