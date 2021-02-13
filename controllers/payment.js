const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.postPayment = (req, res) => {
  const body = {
      source:  req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
          res.status(500).send({ error: stripeErr });
      } else {
          res.status(200).send({ success: stripeRes });
      }
  });
}