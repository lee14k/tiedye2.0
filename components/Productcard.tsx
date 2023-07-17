import "./Productcard.css"

export default function productCard ({title, price, image}) {
    return (
        <div className="cardcontainer">
            <h4>{title}</h4>
            <div> 
<img className="productpic" src={image}/>
<p>{price}</p>
<div className="buttons">
<button className="buynow">Buy now</button>
<button className="fulldesc">Full description</button>
            </div>
            </div>
        </div>
    )
}