const registerRedis = (client) => async (req, res, next) => {
  try {
    await client.connect();
  } catch (e) {}
  req.redis = client;
  next();
};

module.exports = {
  registerRedis,
};
