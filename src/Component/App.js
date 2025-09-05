import { useState } from "react";
import CardList from "./CardList";
import useApi from "./useApi";
function App(){
    // const [product,setProduct] = useState([]);

    const [url,setUrl] = useState('http://localhost:3000/products');
    const{product1:product,loading:load} = useApi(url);
    console.log(load);
    // const[cnt,setCnt] = useState(0);
//    const getData = ()=>{
//         fetch('http://localhost:3000/products')
//         .then(data=>data.json())
//         .then(data1=>setProduct(data1));
//     }
//     getData();

    // useEffect(()=>{
    //  fetch(url)
    //     .then(data=>data.json())
    //     .then(data1=>setProduct(data1));
    // },[url]);
    console.log(product);
    return(
        <>
            <h1>E-Book Shop</h1>  
            <div className="btn1">
            <button 
            onClick={()=>setUrl('http://localhost:3000/products')}
            className="btn btn-success"
            >All</button>
            <button
             onClick={()=>setUrl('http://localhost:3000/products?category=mobile')}
               className="btn btn-danger"
             >Mobile</button>
            <button 
            onClick={()=>setUrl('http://localhost:3000/products?category=tv')}
              className="btn btn-primary"
            >TV</button>
            <button 
            onClick={()=>setUrl('http://localhost:3000/products?category=watch')}
              className="btn btn-info"
            >WATCH</button>
            <button 
            onClick={()=>setUrl('http://localhost:3000/products?category=washing_machine')}
              className="btn btn-secondary"
            >WASHING MACHINE</button>
            </div>
            {
                load && <div class="spinner-border text-danger"></div>
            }
            <CardList  product1 = {product}/>
            {/* <button onClick={()=>setCnt(cnt+1)}>Counter</button> */}
            
        </>
    )
}
export default App;