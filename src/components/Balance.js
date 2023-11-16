import { useSelector } from 'react-redux';
import { selectBalance } from './accountSlice'

import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

/**
 * A UI component to display account balance.
 *
 * @component
 * @example
 * <Balance/>
 */
const Balance = () => {
    const balance = useSelector(selectBalance)
    return(
        <Stack direction="row" spacing={2}>
            <Typography>BALANCE: ${balance}</Typography>
        </Stack>
    )
}

export default Balance