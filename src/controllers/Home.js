class HomeController {
  index(req, res) {
    res.json({
      everythingFine: true,
    });
  }
}

export default new HomeController();
