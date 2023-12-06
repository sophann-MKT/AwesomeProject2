const BASE_URL = 'https://fakestoreapi.com';

export const fetchProductsApi = async () => {
  try {
    const response = await fetch(BASE_URL + '/products');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Errors fetching products', error);
    throw Error;
  }
};
