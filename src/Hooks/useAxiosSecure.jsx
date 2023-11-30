import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://72-cyber-hub-server.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;