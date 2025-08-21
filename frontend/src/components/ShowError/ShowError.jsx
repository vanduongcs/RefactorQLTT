import Swal from 'sweetalert2'

const fireTopSwal = (opts) =>
  Swal.fire({
    ...opts,
    didOpen: (el) => {
      if (el?.parentElement) el.parentElement.style.zIndex = 20000
    }
  })

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
