import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { User } from '../../Types/User';
import { TextField } from '@mui/material';


type UserEditProps = {
  user?: User;
  open: boolean;
  onClose: () => void;
};

function UserEdit({ user, open, onClose }: UserEditProps) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{padding: '0px 20px'}}>
          <DialogTitle id="alert-dialog-title">
            {"User edition tool"}
          </DialogTitle>
          <div> 
            <TextField
              label="ID"
              variant="outlined"
              type="text"
              id="id"
              value={user?.id}
              disabled={true}
            />
            <TextField
              label="First name"
              variant="outlined"
              type="text"
              id="id"
              value={user?.name.first}
            />
          </div>
          <DialogActions>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}

export default UserEdit
