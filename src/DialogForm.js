import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddTask from './AddTask';

export default function DialogForm({pushTask}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Create a Task
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <div className="form">

            <h3>Create a Task</h3>
            <AddTask pushTask={pushTask} handleClose={handleClose} />
            </div>
        </Dialog>
    </div>
  );
}
