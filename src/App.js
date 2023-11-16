import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Transactions from './components/Transactions'
import Balance from './components/Balance'
import Information from './components/Information'

function App() {
  return (
    <div className="App">
        <Box sx={{ width: '100%' }}>
            {/*Header*/}
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar sx={{ float: "right" }}>
                        <Balance />
                    </Toolbar>
                </Container>
            </AppBar>

            {/*Information panel*/}
            <Information/>

            {/*List of transactions*/}
            <Transactions/>
        </Box>
    </div>
  );
}

export default App;
