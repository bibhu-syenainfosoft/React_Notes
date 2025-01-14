import { useEffect, useState } from "react";

export default function FetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(ex => {
        console.error(ex);
      });
  }, [url]);

  return data;  
}

// here [] means dependencies, here [url] means when the url willchange at that time 
// the useEffect() method will be fires. but the work of useEffect() is when the 
// component will be loaded it will be fired at once.