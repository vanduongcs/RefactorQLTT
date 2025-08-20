import Box from '@mui/material/Box'

import TCBoardItem from './TCBoardItem.jsx'
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function TCBoard() {
  const BoardStyle = {
    borderRadius: '24px',
    bgcolor: '#f4f6fb',
    boxShadow: '0 8px 32px 0 rgba(60,72,100,0.12)',
    height: '600px',
    minWidth: '480px',
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
    p: 5,
  }

  const BoardRowStyle = {
    height: '48%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
  }

  return (
    <Box sx={BoardStyle}>
      <Box sx={BoardRowStyle}>
        <TCBoardItem ContentTop="Chứng chỉ" ContentBot="12 mục" icon={<WorkspacePremiumIcon fontSize="inherit" />} />
        <TCBoardItem ContentTop="Khóa học" ContentBot="5 mục" icon={<SchoolIcon fontSize="inherit" />} />
      </Box>
      <Box sx={BoardRowStyle}>
        <TCBoardItem ContentTop="Kỳ Thi" ContentBot="3 mục" icon={<AssignmentIcon fontSize="inherit" />} />
        <TCBoardItem ContentTop="Đã cấp" ContentBot="2 chứng chỉ" icon={<CheckCircleIcon fontSize="inherit" />} />
      </Box>
    </Box>
  )
}

export default TCBoard
