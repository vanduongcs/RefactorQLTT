import Box from '@mui/material/Box'

function TCBoardItem({ ContentTop, ContentBot, icon }) {
  const BoardItemStyle = {
    bgcolor: '#fff',
    height: '100%',
    width: '48%',
    borderRadius: '12px',
    boxShadow: '0 2px 8px 0 rgba(60,72,100,0.07)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2,
    cursor: 'default',
    userSelect: 'none',
  }

  const IconStyle = {
    fontSize: 32,
    mb: 1,
    color: '#5197fb',
    opacity: 0.85,
  }

  const TopContentStyle = {
    fontWeight: 600,
    fontSize: 18,
    color: '#3c4864',
    mb: 0.5,
    textAlign: 'center',
  }

  const BottomContentStyle = {
    fontSize: 14,
    color: '#7b8bb2',
    textAlign: 'center',
  }

  return (
    <Box sx={BoardItemStyle}>
      {icon && <Box sx={IconStyle}>{icon}</Box>}
      <Box sx={TopContentStyle}>{ContentTop}</Box>
      <Box sx={BottomContentStyle}>{ContentBot}</Box>
    </Box>
  )
}

export default TCBoardItem
