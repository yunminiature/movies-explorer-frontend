export const BASE_URL = 'https://api.bitfilms.nomoredomains.rocks';

export const signup = (email, name, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res)
  });  
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res)
  })
  .then((data) => {
    if (data.token){
      localStorage.setItem('token', data.token);
      return data.token;
    } else {
      return;
    }
   });   
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res)
    });
}

export const updateUserData = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res)
    });
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res)
    });
}

export const saveMovie = (movieData) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieData)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res)
  })
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res)
    })
}