import Certificate from '../models/Certificate.js'

const addCertificate = async (req, res) => {
  await Certificate.create(req.validatedData)
  res.status(201).json({ message: 'Thêm chứng chỉ thành công' })
}

const getCertificates = async (req, res) => {

}

const getCertificate = async (req, res) => {

}

const updateCertificate = async (req, res) => {

}

const deleteCertificate = async (req, res) => {

}

export default {
  addCertificate,
  getCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate
}