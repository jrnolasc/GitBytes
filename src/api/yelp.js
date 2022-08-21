import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer aA9hELD_f7tpW_t4qIcCV_Azds8-eEy7CfPs4m4GyzEyRIo2pL0p9ABkF9m9CKAaDry5VE9qZg7CGEIolMMhdab8xuVnWcQ35DtQRmvTFNZv52n1YlYmqhOkIWMBY3Yx'
  }
});
