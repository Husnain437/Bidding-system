import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function FullWidthTextField() {
 
  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = event => {
      setTextInput(event.target.value);
      console.log(event.target.value);
      
  };
  function _handleKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }
 

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        
      }}
    >
      <TextField fullWidth label="Search" id="fullWidth"   onChange= {handleTextInputChange} onKeyDown={_handleKeyDown} />
      
    </Box>
   
  );
 ;
}