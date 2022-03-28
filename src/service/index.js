import axios from "axios";

//api URL
const url = "http://localhost:8080/scrapper";

export const getProduct = async (category) => {
    try {
        const json = { category_url: category };
        const result = await axios.post(`${url}/product`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return result.data.data;
    } catch (error) {
        console.log("Error")
    }
}

export const getCategory = async () => {
    try {
        const result = await axios.get(`${url}/category`);
        return result.data.data;
    } catch (error) {
        console.log("Error")
    }
}