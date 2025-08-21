import TextField from '@mui/material/TextField'

import Box from '@mui/material/Box';

function InputCustome({ element, value, handleInput }) {
  const inputContainerStyle = { display: 'flex', justifyContent: 'center', width: '100%' }
  const inputStyle = { width: '80%', py: 1 }
  return (
    <Box sx={inputContainerStyle}>
      <Box sx={inputStyle}>
        <TextField
          sx={{ width: '100%' }}
          onChange={handleInput}
          value={value}
          label={element}
          variant="outlined"
        />
      </Box>
    </Box>
  );
}

export default InputCustome
