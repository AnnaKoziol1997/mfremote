//import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@mui/material';
import { Stack } from '@mui/system';

function App() {
  return (
      <Box textAlign='center'>
        <Stack display='block' spacing={2} direction='column'>
          <Button variant='contained' color='primary' size='small'>
            REMOTE Button
          </Button>
        </Stack>
      </Box>
  );
}

export default App;
