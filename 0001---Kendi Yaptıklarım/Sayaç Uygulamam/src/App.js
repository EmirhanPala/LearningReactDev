import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import ProTip from './ProTip';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [timerCount, setTimerCount] = useState(30);

  const [showFinBool, setShowFinBool] = useState(false);
  const [showFinCount, setShowFinCount] = useState(10);

  if (start === true) {
    setTimeout(() => {
      if (timerCount > 0) {
        setTimerCount(timerCount - 1);
        console.log(timerCount);
      }
      if (timerCount === 0) {
        setStart(false);
        setShowFinCount(count);
        setShowFinBool(true);
        setTimerCount(30);
      }
    }, 1000);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Counter Game
        </Typography>
        <ProTip />

        <Box sx={{ my: 4 }}>
          <Box textAlign="center">
            Counter: {count}
          </Box>
          <Box m={4} textAlign="center">
            {
              !showFinBool && !start ? (
                <>
                  <Button onClick={() => { setStart(true) }} variant="contained">Start</Button>
                </>
              ) : (
                <>
                  <Box >
                    <IconButton color="secondary" aria-label="add an alarm">
                      <AlarmIcon />
                    </IconButton>
                    Timer : {timerCount}
                  </Box>
                  <Box>
                    <Fab onClick={() => setCount(count + 1)} disabled={showFinBool} color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
                  </Box>
                </>
              )
            }
            {
              showFinBool && !start ? (
                <Box m={2}>
                  <Button onClick={() => { setCount(0); setShowFinBool(false); }} variant="contained">Reset</Button>
                  <Box m={2}>
                    <DialogContentText>Congratulations, you pressed the button {showFinCount} times in {timerCount} seconds.</DialogContentText>
                  </Box>
                </Box>
              ) : ""
            }


          </Box>
        </Box>

        <Copyright />
      </Box>


    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Sayaç Programı{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default App