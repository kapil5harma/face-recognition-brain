import clarifaiApiKeyProd from './clarifai.prod';
// import clarifaiApiKeyDev from './clarifai.dev';

console.log('clarifaiApiKeyProd: ', clarifaiApiKeyProd);
// console.log('clarifaiApiKeyDev: ', clarifaiApiKeyDev);

let clarifaiApiKey;

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  clarifaiApiKey = clarifaiApiKeyProd;
  console.log('clarifaiApiKeyProd: ', clarifaiApiKey);
}
// else {
//   clarifaiApiKey = clarifaiApiKeyDev;
//   console.log('clarifaiApiKeyDev: ', clarifaiApiKey);
// }

export default clarifaiApiKey;
