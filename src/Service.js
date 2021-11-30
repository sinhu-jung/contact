import axios from 'axios';

const baseURL = 'https://sinhu-contacts-server.herokuapp.com/contacts'

class service {
  getAll(){
    return axios.get(baseURL);
  }
  create(data){
    return axios.post(baseURL, data);
  }
  delete(id){
    return axios.delete(baseURL + '/' + id);
  }
}

export default new service();