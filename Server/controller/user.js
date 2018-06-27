import db from './../model/index';

const User = {
  createUser(req, res, next) {
    db.none(
      'insert into user(firstname, lastname, email, phone)' + 'values(${firstname}, ${lastname}, ${email}, ${phone})',
      req.body,
    )
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Created new entry',
          });
      })
      .catch(err => next(err));
  },
};

export default User;
