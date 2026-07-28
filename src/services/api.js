const URL = "https://fakestoreapi.com/products";

export async function getProducts() {

    const response = await fetch(URL);

    const data = await response.json();

    return data;

}