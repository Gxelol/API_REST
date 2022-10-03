import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Gabriel',
      surname: 'Quintão',
      email: 'gabrielquintag@gmail.com',
      age: 13,
      weight: 13,
      height: 139,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
