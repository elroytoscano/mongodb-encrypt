const { StatusCodes } = require('http-status-codes');

const homeGetController = async (req, res) => {
  res.status(StatusCodes.ACCEPTED).json({ message: 'Get request' });
};

const homePostController = async (req, res) => {
  console.log('request data:', req.body);

  res.status(StatusCodes.CREATED).json({ message: 'Post Request' });
};

module.exports = { homeGetController, homePostController };
