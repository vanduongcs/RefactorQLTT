// src/components/Notification/ShowError.js
import fireTopSwal from 'src/utils/fireTopSwal'

const showError = (message) => {
  fireTopSwal({
    icon: 'warning',
    title: 'Thông báo',
    text: message,
    confirmButtonText: 'Đóng',
    confirmButtonColor: '#1976d2'
  })
}

export default showError
