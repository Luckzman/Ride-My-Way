const Ride = {
  ride(req, res, next) {
    req.check('name', 'name must not be empty').notEmpty();
    req.check('source', 'source location must not be empty').notEmpty();
    req.check('destination', 'destination must not be empty').notEmpty();
    req.check('departure_time', 'departure time must not be empty').notEmpty();
    req.check('available_seats', 'available seats must be stated').notEmpty().isInt({ gt: 1 });
    req.check('cost', 'cost is required').notEmpty().isInt({ gt: 1 });

    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    next();
  },
};

export default Ride;
