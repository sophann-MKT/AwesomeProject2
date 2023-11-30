const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL + '/products');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw Error;
  }
};
