import express from 'express';
import products from '../models/products.mjs';

const router = express.Router()

// create
router.post('/', async (req, res) => {
    try {
        // Declare a variable then perform action on collection
        console.log("new data created");
        let newProducts = await products.create(req.body)
        res.json(newProducts)  // Return Variables

        // let tempProducts = req.body;
        // console.log(tempProducts);

        // const newProducts = new products() // creating new instace for modals schema(products)
        // newProducts.name = tempProducts.name;
        // newProducts.image = tempProducts.image;
        // newProducts.price = tempProducts.price;

        // newProducts.save(); // It will saved the newly created schema
        // res.status(201).json('sucessfully Post')

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'post server error' })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        let allProducts = await products.find()
        res.json(allProducts)
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'get server error' })
    }
})

// Update
router.put('/:id', async (req, res) => {
    try {
        let updateProducts = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateProducts)
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'put server error' })
    }
})
// Delete
router.delete('/:id', async (req, res) => {
    try {
        let deleteProducts = await products.findByIdAndDelete(req.params.id, req.body, { new: true });
        res.json(deleteProducts);

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'delete server error' })
    }
})

export default router;