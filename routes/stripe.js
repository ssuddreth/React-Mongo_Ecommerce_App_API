const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51M46JDCjei6RB6k13Q9w8dUJ52FhwjLoh5tDirINju0XxY3j1YPXrQPDZFPPhxo4MuPHMere6MOOewm4WVIl1TRh00tCgKTgvY');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;