if (process.env.NODE_ENV === 'production') {
  module.exports = require('./clarifai.prod');
} else {
  module.exports = require('./clarifai.dev');
}
