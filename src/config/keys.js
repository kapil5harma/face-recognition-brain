import clarifaiApiKeyProd from './clarifai.prod';
import clarifaiApiKeyDev from './clarifai.dev';

let clarifaiApiKey;
if (process.env.NODE_ENV === 'production') {
  clarifaiApiKey = clarifaiApiKeyProd;
} else {
  clarifaiApiKey = clarifaiApiKeyDev;
}

export default clarifaiApiKey;
