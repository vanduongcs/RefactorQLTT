import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function FormButtonCustome({ ButtonFunctionName, colorBg, onClick }) {

  const ButtonContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    my: 2
  }

  return (
    <Box sx={ButtonContainerStyle}>
      <Button
        sx={{ width: '50%', bgcolor: colorBg }}
        onClick={onClick}
        variant="contained"
      >
        {ButtonFunctionName}
      </Button>
    </ Box>
  )
}

export default FormButtonCustome
