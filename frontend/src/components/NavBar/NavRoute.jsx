import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


// Custome
import NavButton from './NavButton.jsx'


function NavRoute({ ButtonListStyle, ButtonNavStyle }) {
  const navItems = [
    { content: 'Trang chủ', path: '/admin/TC' },
    { content: 'Người dùng', path: '/admin/ND' },
    { content: 'Chứng chỉ', path: '/admin/CC' },
    { content: 'Khóa học', path: '/admin/KH' },
    { content: 'Kỳ thi', path: '/admin/KT' },
    { content: 'Kết quả', path: '/admin/KQ' },
    { content: 'Chứng chỉ đã cấp', path: '/admin/CCDC' },
  ];

  return (
    <Box sx={ButtonListStyle}>
      {navItems.map((item, idx) => (
        <NavButton key={idx} style={ButtonNavStyle} content={item.content} path={item.path} />
      )
      )}
    </Box>
  );
}

export default NavRoute
