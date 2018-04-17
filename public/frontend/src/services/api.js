import { call, put, select } from 'redux-saga/effects';

export const base =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL; // eslint-disable-line

// const getToken = state => state.getIn(['auth', 'token']);//state.auth.token;

// const base = `${base}`;

export const GET = (url) => {
  if (url.valueOf('plan')){
    return fetch(base + url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => res)
  };
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(res => res.json())
  .then(res => res)
};


export const GETFILE = (url) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;
  return fetch(base + url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(res => res)
};

export const POST = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(res => res)
};

export const PUT = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(res => res)
};

export const DELETE = (url) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => res)
};

// TODO refactor
export const POSTFILE = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;
  
  return fetch(base + url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  })
  .then(res => res.json())
  .then(res => res)
};
