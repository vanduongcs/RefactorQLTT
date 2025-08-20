import Box from '@mui/material/Box'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Admin
import TrangChuAdmin from './Pages/Admin/TrangChu/TrangChu.jsx'
import QLNguoiDung from './Pages/Admin/NguoiDung/QLNguoiDung.jsx'
import QLChungChi from './Pages/Admin/ChungChi/QLChungChi.jsx'
import QLKhoaHoc from './Pages/Admin/KhoaHoc/QLKhoaHoc.jsx'
import QLKyThi from './Pages/Admin/KyThi/QLKyThi.jsx'
import QLKetQua from './Pages/Admin/KetQua/QLKetQua.jsx'
import QLCCDC from './Pages/Admin/ChungChiDaCap/QLCCDC.jsx'


function LayOut() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/admin/TC' element={<TrangChuAdmin />} />
          <Route path='/admin/ND' element={<QLNguoiDung />} />
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
