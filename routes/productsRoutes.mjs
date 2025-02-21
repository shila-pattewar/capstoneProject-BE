import express from 'express';
import products from '../models/products.mjs';

const router = express.Router()

// create

router.post('/', async (req, res) => {
    try {
        // let newProducts = new products.create(req.body)
        // req.json(newProducts)
        let tempProducts = req.body
        console.log(tempProducts);

        const newProducts = new products() // creating new instace for modals schema(products)
        newProducts.name = tempProducts.name;
        newProducts.image = tempProducts.image;
        newProducts.price = tempProducts.price;

        newProducts.save(); // It will saved the newly created schema
        res.status(201).json('sucessfully Post')

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'server error' })
    }
})

// Read
router.get('/', (req, res) => {
    res.send('GET is working')
})

// Update
// Delete

export default router;