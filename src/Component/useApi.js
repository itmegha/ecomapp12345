import { useState } from "react";
import { useEffect } from "react";

const useApi = (url)=>{
     const [product1,setProduct] = useState([]);
     const [loading,setLoading]  = useState(false);
      useEffect(()=>{
      setLoading(true);  
     fetch(url)
        .then(data=>data.json())
        .then(data1=>setProduct(data1))
        .finally(()=>setLoading(false));
    },[url]);
    return {product1,loading};
}

export default useApi;