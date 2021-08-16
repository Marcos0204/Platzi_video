/* eslint-disable no-unused-vars */
import React from 'react';

const useFetch = (API) => (
  fetch('http://localhost:3000/initalState')
    .then((response) => response.json())
    .then((data) => (data))
);
export default useFetch;
