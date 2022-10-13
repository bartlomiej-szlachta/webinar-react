const baseUrl = 'https://portfolio-training-api.herokuapp.com';

export const getProjects = () => {
  return fetch(baseUrl + '/projects')
    .then(response => response.json());
};
