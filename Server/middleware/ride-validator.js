const errorMessage = (res, message) => res.status(400).json({
  message,
});

const Ride = {
  ride(req, res, next) {
    req.check('name', 'name must not be empty').notEmpty();
    req.check('source', 'source location must not be empty').notEmpty();
    req.check('destination', 'destination must not be empty').notEmpty();
    req.check('departure_time', 'departure time must not be empty').notEmpty();
    req.check('available_seats', 'available seats must be stated').notEmpty();
    req.check('available_seats', 'available seat must be a positive integer').isInt({ gt: 1 });
    req.check('cost', 'cost is required').notEmpty();
    req.check('cost', 'must be a postitive integer').isInt({ gt: 1 });

    const errors = req.validationErrors();
    console.log(errors);
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },
};

export default Ride;
