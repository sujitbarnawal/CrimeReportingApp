import express from 'express'
import { addReport, deleteReport, editReport, listReports, trackReport, updateStatus, userReports } from '../controllers/reportController.js'
import authMiddleware from "../middlewares/auth.js"
import multer from 'multer'

const reportRouter=express.Router()

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

const upload = multer({
    storage:storage,
})

reportRouter.post('/add',authMiddleware,upload.single("image"),addReport)
reportRouter.post('/list',listReports)
reportRouter.post('/my-reports',authMiddleware,userReports)
reportRouter.post('/edit',authMiddleware,upload.single("image"), editReport)
reportRouter.post('/delete',authMiddleware,deleteReport)
reportRouter.get('/list-all',listReports)
reportRouter.post('/update-status',updateStatus)
reportRouter.post('/track',authMiddleware,trackReport)

export default reportRouter