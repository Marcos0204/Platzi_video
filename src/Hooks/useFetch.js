/* eslint-disable no-unused-vars */
import React from 'react';

const useFetch = (API) => (
  fetch(API)
    .then((response) => response.json())
    .then((data) => setVideos(data))
);
export default useFetch;
