import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/')
      .then(result => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject);
  });

const load = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const product = result.data;
        resolve(product);
      })
      .catch(reject);
  });

const random = () =>
  new Promise((resolve, reject) => {
    instance
      .get(`/random`)
      .then(result => {
        const product = result.data;
        resolve(product);
      })
      .catch(reject);
  });

const add = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/new', data)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(error => {
        reject(error);
      });
  });

const filter = query =>
  new Promise((resolve, reject) => {
    instance
      .get(`/search?q=${query}`)
      .then(result => {
        const filteredBeers = result.data;
        resolve(filteredBeers);
      })
      .catch(error => {
        reject(error);
      });
  });

export { list, load, random, add, filter };
