import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.status)
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(()=>{
                    //redirect to login page
                    navigate('/login')
                })
                .catch(err => console.log(err))
            }
            return Promise.reject(error)
        })

    }, [])

    return axiosInstance;
};

export default useAxiosSecure;


/**
 * 
 * axios: get, post, put/patch, delete --> easier
 * interceptor: client : ----------- | ------------> server
 * client: <--------------- | ----------------server
 * In the interceptor for response == needs two function
 * 
 */