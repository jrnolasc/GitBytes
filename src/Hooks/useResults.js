import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';


export default  () =>{
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {

    try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york city'
        }
      });
      setResults(response.data.businesses);
    } catch(err){
      setErrorMessage('Something Went Wrong');
    }
    };

  useEffect(() => {
    searchApi('sushi');
  }, []);

  return[searchApi, results, errorMessage];
};


