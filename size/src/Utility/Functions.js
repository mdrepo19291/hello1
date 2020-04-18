import { useState, useEffect } from 'react';

// fetching the JSON data
export const useFetch = url => {
    const [data, setData] = useState(null);
    url = url.startsWith('http') ? url : `/data/JSON/${url}.json`;
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
      };
      fetchData();
    }, [url]); // 
    return data;
  };