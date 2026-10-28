const express = require('express');

const router = express.Router();

router.get('/:userId', (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching cart for user with ID: ${id}`)
});

router.post('/:userId', (req,res)=>{

    const id = req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`)
})


module.exports = router;