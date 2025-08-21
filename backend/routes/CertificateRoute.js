import express from 'express'
import CertificateMiddleware from '../middlewares/CertificateMiddleware.js'
import CertificateController from '../controllers/CertificateController.js'

const router = express.Router()

router.post('/them-chung-chi', CertificateMiddleware.addValidate, CertificateController.addCertificate)

export default router