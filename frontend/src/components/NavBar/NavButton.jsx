import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function NavButton({ style, content, path }) {
  const navigate = useNavigate()

  const goToLink = (path) => {
    navigate(`${path}`)
  }

  return (
    <Button sx={style} onClick={() => goToLink(path)}>{content}</Button>
  )
}

export default NavButton
