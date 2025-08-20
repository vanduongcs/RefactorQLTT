import Box from '@mui/material/Box'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Admin
import TrangChuAdmin from './Pages/Admin/TrangChu.jsx'
import QLChungChi from './Pages/Admin/QLChungChi.jsx'
import QLKhoaHoc from './Pages/Admin/QLKhoaHoc.jsx'
import QLKyThi from './Pages/Admin/QLKyThi.jsx'
import QLKetQua from './Pages/Admin/QLKetQua.jsx'
import QLCCDC from './Pages/Admin/QLCCDC.jsx'


function LayOut() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/admin/TC' element={<TrangChuAdmin />} />
          <Route path='/admin/CC' element={<QLChungChi />} />
          <Route path='/admin/KH' element={<QLKhoaHoc />} />
          <Route path='/admin/KT' element={<QLKyThi />} />
          <Route path='/admin/KQ' element={<QLKetQua />} />
          <Route path='/admin/CCDC' element={<QLCCDC />} />
        </Routes>
      </Router>
    </Box>
  )
}

function App() {
  return (
    <LayOut />
  )
}

export default App
