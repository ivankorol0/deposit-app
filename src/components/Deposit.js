import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useDispatch} from 'react-redux';

import {doDeposit} from './accountSlice'

/**
 * A UI component containing a Deposit dialog and a Button to initiate a dialog
 *
 * @component
 * @example
 * <Deposit/>
 */
const Deposit = () => {
    const [open, setOpen] = React.useState(false);
    const [paymentAccount, setPaymentAccount] = React.useState('PayPal koro***ail.com');
    const [depositAmount, setDepositAmount] = React.useState(20);

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeposit = () => {
        dispatch(doDeposit({paymentAccount, depositAmount}))
        setOpen(false);
    };

    const handleChangeAccount = (event) => {
        setPaymentAccount(event.target.value);
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                Make Deposit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New deposit</DialogTitle>
                <DialogContent>
                    <DialogContentText>From account</DialogContentText>
                    <FormControl>
                        <RadioGroup
                            defaultValue="PayPal korol***ail.com"
                            name="radio-buttons-group"
                            onChange={handleChangeAccount}
                        >
                            <FormControlLabel value="PayPal korol***ail.com" control={<Radio size="small"/>}
                                              label="PayPal korol***ail.com"/>
                            <FormControlLabel value="SEB 8511-2052" control={<Radio size="small"/>}
                                              label="SEB 8511-2052"/>
                        </RadioGroup>
                    </FormControl>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="amount"
                        label="Amount in USD"
                        type="number"
                        fullWidth
                        variant="outlined"
                        size="small"
                        defaultValue="20.00"
                        onChange={(e) => setDepositAmount(Number(e.target.value))}
                    >20</TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant={"contained"} onClick={handleDeposit}>Deposit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Deposit