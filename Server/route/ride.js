import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('get /ride response successful');
});

router.get('/:id', (req, res) => {
  res.json(`get /ride/${req.params.id} successful`);
});

router.post('/', (req, res) => {
  res.json('post /ride successful');
});

router.post('/:id/request', (req, res) => {
  res.json(`post /ride/${req.params.id}/request successful`);
});

export default router;
