import { useState, useEffect } from 'react';
// import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

import { firebaseConfig } from './Constants';

// fetching the JSON data
export const useFetch = url => {
    const [data, setData] = useState(null);
    let checkStorage, result, loadData;
    url = url.startsWith('http') ? url : `/data/JSON/${url}.json`;
    useEffect(() => {
      const fetchData = async () => {
        checkStorage = loadSession(url);
        // console.log(checkStorage);
        if(!checkStorage || 'error' in checkStorage){
          result = await fetch(url);
          loadData = await result.json();
          if(loadData){
            console.log('1. youtube data loaded LIVE', loadData)
            saveSession(url,loadData);
          }
        } else {
          console.log('1. youtube data loaded from session', checkStorage)
          loadData = checkStorage;
        }
        setData(loadData);
      };
      fetchData();
    }, [url]); // 
    return data;
  };


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const useFetchDoc = (url, col="records") => {
  const [data, setData] = useState(null);
  // url = url.startsWith('http') ? url : `/data/JSON/${url}.json`;

  useEffect(() => {
    let docRef = firestore.collection(col).doc(url);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Fetched Doc!!!",doc.id);
            setData(doc.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        setData({error: true});
    });
  }, [url]); // 
  return data;
};


export const useFetchMeta = (col="records") => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let allDocs = firestore.collection(col);
    // console.log("Fetched Meta.>");
    allDocs.get()
    .then(snapshot => {
      let res = {};
      // console.log("Fetched Meta!!",snapshot.docs);
      // if(!snapshot.docs.length){
      //   setData({error: true})
      // } else {
        snapshot.forEach(doc=>{
          res[doc.id] = doc.data();
        })
        setData(res);
      })
    .catch(err => {
      setData({error: true});
      console.log('Error getting documents', err);
    });
  }, [col]); // 
  return data;
};


  // let allDocs = citiesRef.get()
  // .then(snapshot => {
  //   snapshot.forEach(doc => {
  //     console.log(doc.id, '=>', doc.data());
  //   });
  // })
  // .catch(err => {
  //   console.log('Error getting documents', err);
  // });



export const saveLocal = (key, value) => localStorage.setItem(btoa(key), JSON.stringify(value));
export const saveSession = (key, value) => sessionStorage.setItem(btoa(key), JSON.stringify(value));

export const loadSession = key => {
  let value;
  try {
    value = JSON.parse(sessionStorage.getItem(btoa(key)));
  } catch (e){
    console.log(e)
  }
  return value;
}

export const loadLocal = key => {
  const value = localStorage.getItem(btoa(key));
  try {
    return value && JSON.parse(value);
  } catch (e) {
    console.warn(
      `⚠️ The ${key} value that is stored in localStorage is incorrect. Try to remove the value ${key} from localStorage and reload the page`
    );
    return undefined;
  }
};