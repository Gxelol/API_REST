import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('picture');

class PictureController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        res.status(400).json({
          errors: ['Something went wrong'],
        });
      }

      return res.json(error.code);
    });
  }
}

export default new PictureController();
