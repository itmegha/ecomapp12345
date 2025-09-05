import { useNavigate, useParams } from "react-router-dom";
import useApi from "./useApi";
import { Link } from "react-router-dom";

function Productdet(){

   const navigate = useNavigate(); 
   const data =  useParams();
   console.log(data.pid);
    const {product1:p} = useApi(`http://localhost:3000/products/${data.pid}`);
    console.log(p);

    return(
        <>
            <div className="card card1" style={{width:400}}>
            <img className="card-img-top" src={p.img} alt="Card image" />
            <div className="card-body">
            <h4 className="card-title">{p.id}</h4>
            <p className="card-text">{p.name}</p>
            <p className="card-text">{p.price} Rs.</p>
            <Link to="#" className="btn btn-primary">AddToCart</Link>
            <button className="btn btn-primary" onClick={()=>{
                setTimeout(()=>{
                   navigate('/product');
                },3000);  
            }}>GoBack</button>
            </div>
</div>
        </>
    );
}
export default Productdet;