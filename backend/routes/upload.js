const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({storage});

const {uploadFile, uploadWorkRequest} = require('../controllers/uploadController');

const router = express.Router();

//Post File
router.post('/file',  upload.single('file'), uploadFile);

//Post Work Request
router.post('/workRequest', uploadWorkRequest);


module.exports = router;
