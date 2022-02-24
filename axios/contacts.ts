import request from './index';

const getContacts = () => {
  return request.get('/users');
};

export { getContacts };
