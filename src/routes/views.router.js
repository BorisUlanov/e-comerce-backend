import { router } from 'express';

const router = express.Router();

//lista
let products = [];

router.get('/', (req, res) => {
    res.render('index', { products });
});

router.get('/realtimeproducts', (req, res) => {
    res.render('relTimeProducts', { prodcts});
});

export default router;