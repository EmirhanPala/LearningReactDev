import axios from 'axios';
export const fetchProductsList = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`);

    return data;
}
export const fetchProduct = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);

    return data;
}