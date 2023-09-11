const response = (res, status, data) => {
  /* I really wish I can customize this API response
        But I must follow HNG rules
     */
  res.status(status || 500).send(data || {});
};


module.exports = response;
