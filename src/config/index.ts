export default () => ({
  //JWT
  JWTExpiresIn: process.env.JWT_EXPIRESIN,
  JWTSecret: process.env.JWT_TOKEN,
});
