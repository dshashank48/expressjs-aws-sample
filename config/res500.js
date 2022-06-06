const res500 = (res, error) => {
   return res.status(500).json(error);
};

module.exports = res500;
