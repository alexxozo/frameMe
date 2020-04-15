import Axios from 'axios';

let authInstance = null;
let token = null;

const apiURL =
  'https://firestore.googleapis.com/v1/projects/frame-me-48c58/databases/(default)/documents';

const Api = {
  getList: () => {
    return Axios.get(apiURL + '/glasses');
  },
};

export default Api;
