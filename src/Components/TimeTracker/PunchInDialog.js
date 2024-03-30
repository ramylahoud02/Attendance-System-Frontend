import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import QrScanner from '../QrCode/QrScanner';


export default function PunchInDialog({ open, onClose }) {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                keepMounted
                onClose={onClose}
            >
                <DialogTitle
                    color={"primary"}
                    fontSize="20px"
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={'bold'}
                >
                    {"Scan to Punch In"}
                </DialogTitle>
                <DialogContent>
                    <QrScanner open={open} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}