import stripe from "stripe";

export const stripePayment = async (req, res) => {
  const stripe = stripe(process.env.STRIPE_SECRET_KEY);

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).json({ message: stripeError.message });
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
