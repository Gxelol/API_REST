import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      res.json(newStudent);
    } catch (e) {
      res.status(400).json({
        errors: ['Someething went wrong'],
      });
    }
  }
}

export default new HomeController();
