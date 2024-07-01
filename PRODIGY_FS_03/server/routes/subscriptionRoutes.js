// const express = require('express');
// const router = express.Router();
// const { subscribe } = require('../controllers/subscriptionController');

// router.post('/', subscribe);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { subscribe, unsubscribe, editSubscription } = require('../controllers/subscriptionController');

router.post('/', subscribe);
router.get('/unsubscribe', unsubscribe);
router.put('/', editSubscription);

module.exports = router;
