import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {selectTransactions} from './accountSlice'
import {useSelector} from "react-redux";

/**
 * A UI component to display past transactions on deposit account.
 *
 * @component
 * @example
 * <Transactions/>
 */
const Transactions = () => {
    const transactions = useSelector(selectTransactions)

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((tx) => {
                        return (
                            <TableRow
                                key={tx.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{tx.date}</TableCell>
                                <TableCell>{tx.account}</TableCell>
                                <TableCell align="right">{tx.amount}</TableCell>
                                <TableCell align="right">{tx.balance}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Transactions