import User from '../models/User';

class HomeController {
  async store(req, res) {
    const newUser = await User.create({
      name: 'Gabriel',
      email: 'gabrielquintag@gmail.com',
      password: '123456',
    });
    res.json(newUser);
  }
}

export default new HomeController();
