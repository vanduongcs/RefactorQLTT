import Box from '@mui/material/Box'

// Custome
import NavBar from '../../../components/NavBar/NavBar.jsx'
import AdminPage from '../../../components/AdminPage/AdminPage.jsx'
import CertificateForm from '../../../components/Form/CertificateForm.jsx'

function QLChungChi() {
  const Content = 'chứng chỉ'
  return (
    <Box>
      <NavBar />
      <AdminPage FormComponent={CertificateForm} Content={Content} />
    </Box>
  )
}

export default QLChungChi
