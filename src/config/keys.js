import clarifaiApiKeyProd from './clarifai.prod';
// import clarifaiApiKeyDev from './clarifai.dev';

let clarifaiApiKey;

console.log('process.env: ', process.env);
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
console.log('process.env.CLARIFAI_KEY: ', process.env.CLARIFAI_KEY);

if (process.env.NODE_ENV === 'production') {
  clarifaiApiKey = clarifaiApiKeyProd;
} else {
  // clarifaiApiKey = clarifaiApiKeyDev;
}

export default clarifaiApiKey;
