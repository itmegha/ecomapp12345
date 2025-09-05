import { Link } from "react-router-dom";

function Card(props){
    return(
        <>
            <div className="card card1" style={{width:300}}>
            <img className="card-img-top" src={props.img} alt="Card image" />
            <div className="card-body">
            <h4 className="card-title">{props.id}</h4>
            <p className="card-text">{props.name}</p>
            <p className="card-text">{props.price} Rs.</p>
            <Link to={`/proddet/${props.id}`} className="btn btn-primary">ReadMore</Link>
            </div>
</div>
        </>
    )
}
export default Card;