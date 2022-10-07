class PictureController {
  async store(req, res) {
    try {
      res.json(req.file);
    } catch (e) {
      res.status(400).json({
        errors: ['Something went wrong'],
      });
    }
  }
}

export default new PictureController();
