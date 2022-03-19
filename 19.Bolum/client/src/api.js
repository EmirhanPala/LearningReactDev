import axios from 'axios';
export const fetchProductsList = async () => {
    const { data } = await axios.get("http://localhost:4000/product")

    return data;
}