import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {
    
    fetchHome() {
        return axios.get(USER_API_BASE_URL);
    }

    loginUser(user) {
        return axios.post(""+USER_API_BASE_URL + '/api/signin', user);
    }

    registerAdmin(admin) {
        return axios.post(""+USER_API_BASE_URL + '/api/signup/admin', admin);
    }
}

export default new ApiService();