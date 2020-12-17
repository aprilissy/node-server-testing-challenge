const Doggo = require('../doggos/doggos-model');

const realDoggo = async (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: `Wher is my doggo?` });
  } else if (!req.body.name || req.body.is_good_doggo) {
    res.status(400).json({ message: `missing doggo name or status` });
  } else {
    next();
  }
};

const validateId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const doggo = await Doggo.getByID(id);
    if (!doggo) {
      res.status(404).json({ message: `doggo with id ${id} not found`});
    } else {
      req.doggo = doggo;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

module.exports = {
  realDoggo,
  validateId
};
