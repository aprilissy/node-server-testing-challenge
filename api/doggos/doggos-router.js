const express = require('express');
const router = express.Router();

const Doggo = require('./doggos-model');
const { realDoggo, validateId } = require('../middleware/middleware');

router.post('/', realDoggo, async (req, res) => {  
  try{
    const doggo = req.body;
    const magic = await Doggo.create(doggo);    
    res.status(201).json(magic);
    console.log('res.status',res.status);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', validateId, async (req, res) => {
  try {
    const { id } = req.params;
    await Doggo.remove(id);
    res.status(200).json({ message:req.doggo });
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
});

module.exports = router;
