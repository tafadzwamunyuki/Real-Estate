import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
                    'x-rapidapi-host': 'bayut.p.rapidapi.com',
                    'x-rapidapi-key': 'a97b53981emshea07f4d56d96191p110a17jsn1a932d1ecf64'
    }
});

return data;
}
