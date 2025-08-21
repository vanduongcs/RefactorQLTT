import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Custome
import InputCustome from '../InputCustome/InputCustome.jsx'
import FormButtonCustome from '../FormButtonCustome/FormButtonCustome.jsx'
import API from '../../api/API.jsx'
import showError from '../ShowError/ShowError.jsx'

function CertificateForm({ Content }) {
  const [Loai, setLoai] = useState('')
  const [TenChungChi, setTenChungChi] = useState('')
  const [LePhiThi, setLePhiThi] = useState('')
  const [HocPhi, setHocPhi] = useState('')
  const [ThoiHan, setThoiHan] = useState('')
  const [DiemToiThieu, setDiemToiThieu] = useState('')
  const [DiemToiDa, setDiemToiDa] = useState('')
  const [CachTinhDiem, setCachTinhDiem] = useState('')

  const setData = (key) => (e) => {
    if (key === 'Loai') setLoai(e.target.value)
    if (key === 'TenChungChi') setTenChungChi(e.target.value)
    if (key === 'LePhiThi') setLePhiThi(e.target.value)
    if (key === 'HocPhi') setHocPhi(e.target.value)
    if (key === 'ThoiHan') setThoiHan(e.target.value)
    if (key === 'DiemToiThieu') setDiemToiThieu(e.target.value)
    if (key === 'DiemToiDa') setDiemToiDa(e.target.value)
    if (key === 'CachTinhDiem') setCachTinhDiem(e.target.value)
  }

  const dataInput = [
    { label: 'Loại', key: 'Loai', value: Loai },
    { label: 'Tên chứng chỉ', key: 'TenChungChi', value: TenChungChi },
    { label: 'Lệ phí thi', key: 'LePhiThi', value: LePhiThi },
    { label: 'Học phí', key: 'HocPhi', value: HocPhi },
    { label: 'Thời hạn', key: 'ThoiHan', value: ThoiHan },
    { label: 'Điểm tối thiểu', key: 'DiemToiThieu', value: DiemToiThieu },
    { label: 'Điểm tối đa', key: 'DiemToiDa', value: DiemToiDa },
    { label: 'Cách tính điểm', key: 'CachTinhDiem', value: CachTinhDiem }
  ]

  const formContainerStyle = {
    minHeight: '80vh',
    border: '1px solid',
    borderColor: (theme) => theme.custome.borderColor,
    boxShadow: '0 8px 8px 0 rgba(31, 38, 135, 0.10), 0 1.5px 3px 0 rgba(60,60,60,0.06)',
    borderRadius: '8px'
  }

  const textStyle = { textAlign: 'center', margin: '2rem 0 1rem 0', fontWeight: 'bold', cursor: 'default' }

  const AddData = async () => {
    try {
      const data = {
        Loai,
        TenChungChi,
        LePhiThi,
        HocPhi,
        ThoiHan,
        DiemToiThieu,
        DiemToiDa,
        CachTinhDiem
      }
      await API.post('certificate/them-chung-chi', data)
    } catch (error) {
      showError(error.response?.data?.message || 'Lỗi không xác định')
    }
  }

  return (
    <Box sx={formContainerStyle}>
      <Typography sx={textStyle} variant="h5">Quản lý {Content}</Typography>
      {dataInput.map((item) => (
        <InputCustome
          key={item.key}
          element={item.label}
          value={item.value}
          handleInput={setData(item.key)}
        />
      ))}
      <FormButtonCustome ButtonFunctionName='Thêm' onClick={AddData} colorBg={(theme) => theme.palette.success.main} />
      <FormButtonCustome ButtonFunctionName='Thêm qua Excel' colorBg={(theme) => theme.palette.success.main} />
      <FormButtonCustome ButtonFunctionName='Cập nhật' />
      <FormButtonCustome ButtonFunctionName='Xóa' colorBg={(theme) => theme.palette.error.main} />
    </Box>
  )
}

export default CertificateForm
