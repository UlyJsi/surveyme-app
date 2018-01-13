module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID, // can be shown
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET, // NOT can be shown
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI, // "mlab.com" (mongoDB)
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
