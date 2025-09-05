import Card from "./Card";

function CardList(props){
    const product2 = props.product1;
    // console.log(product2);
    return(
        <>
            <p>Products</p>
             {
                product2 && product2.map((p,ind)=>{
                    return (
                        <Card {...p} key={ind}/>
                    )
                })
             }
        </>
    );
}
export default CardList;