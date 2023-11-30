import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://72-cyber-hub-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;