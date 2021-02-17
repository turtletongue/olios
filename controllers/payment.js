const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.postPayment = (req, res) => {
  const body = {
    source:  req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      const error = new Error();
      error.statusCode = 500;
      next(error);
    } else {
      res.status(200).send({ data: stripeRes });
    }
  });
}