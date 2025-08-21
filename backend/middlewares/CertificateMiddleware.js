const addValidate = async (req, res, next) => {
  try {
    let { Loai, TenChungChi, LePhiThi, HocPhi, ThoiHan, DiemToiThieu, DiemToiDa, CachTinhDiem } = req.body

    // Kiểm tra loại
    if (!Loai) return res.status(400).json({ message: 'Vui lòng nhập loại chứng chỉ', error: 'THIEU_TRUONG_DL' })
    if (Loai !== 'Ngoại ngữ' & Loai !== 'Tin học') return res.status(400).json({ message: 'Sai miền giá trị loại', error: 'SAI_MIEN_GIA_TRI' })

    // Kiểm tra tên chứng chỉ
    if (!TenChungChi) return res.status(400).json({ message: 'Vui lòng nhập tên chứng chỉ', error: 'THIEU_TRUONG_DL' })

    // Kiểm tra lệ phí thi
    LePhiThi = Number(LePhiThi)
    if (!LePhiThi) return res.status(400).json({ message: 'Vui lòng nhập lệ phí thi', error: 'THIEU_TRUONG_DL' })
    if (LePhiThi < 0) return res.status(400).json({ message: 'Lệ phí thi không được âm', error: 'SAI_MIEN_GIA_TRI' })

    HocPhi = Number(HocPhi)
    // Kiểm tra học phí
    if (!HocPhi) return res.status(400).json({ message: 'Vui lòng nhập học phí', error: 'THIEU_TRUONG_DL' })
    if (HocPhi < 0) return res.status(400).json({ message: 'Học phí không được âm', error: 'SAI_MIEN_GIA_TRI' })

    ThoiHan = Number(ThoiHan)
    // Kiểm tra thời hạn
    if (ThoiHan === '') {
      ThoiHan = 0
    }

    DiemToiThieu = Number(DiemToiThieu)
    // Kiểm tra điểm tối thiểu
    if (!DiemToiThieu) return res.status(400).json({ message: 'Vui lòng nhập điểm tối thiểu để đạt được chứng chỉ', error: 'THIEU_TRUONG_DL' })

    DiemToiDa = Number(DiemToiDa)
    // Kiểm tra điểm tối đa
    if (!DiemToiDa) return res.status(400).json({ message: 'Vui lòng nhập điểm thành phần tối đa', error: 'THIEU_TRUONG_DL' })

    // Kiểm tra cách tính điểm
    if (!CachTinhDiem) return res.status(400).json({ message: 'Vui lòng nhập cách tính điểm', error: 'THIEU_TRUONG_DL' })
    if (CachTinhDiem !== 'Tổng' & CachTinhDiem !== 'Trung bình') return res.status(400).json({ message: 'Vui lòng nhập đúng cách tính điểm (Trung bình/Tổng)', error: 'SAI_MIEN_GIA_TRI' })

    req.validatedData = { Loai, TenChungChi, LePhiThi, HocPhi, ThoiHan, DiemToiThieu, DiemToiDa, CachTinhDiem }
    next()
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server, vui lòng thử lại sau', error: 'LOI_SERVER' })
  }
}

export default {
  addValidate
}