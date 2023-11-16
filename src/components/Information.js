import React from 'react'

import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Balance from "./Balance";

import Deposit from './Deposit'

/**
 * A UI component with account info and basic user's actions.
 * It's main purpose is arranging the layout
 *
 * @component
 * @example
 * <Information/>
 */
const Information = () => {
    return (
        <Box sx={{margin: "15px"}}>
            <Grid
                xs={12}
                container
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{xs: 'column', sm: 'row'}}
                sx={{fontSize: '12px'}}
            >
                <Grid sx={{order: {xs: 2, sm: 1}}}>
                    <Stack direction="row" spacing={2}>
                        {/*<Typography>Account #: 1235-12345</Typography>*/}
                        <Balance/>
                    </Stack>
                </Grid>
                <Grid container columnSpacing={1} sx={{order: {xs: 1, sm: 2}}}>
                    <Deposit/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Information