

export default function productCard ({title, price, image, description}) {
    return (
        <div>
            <h1>{title}</h1>
            <div> 
<img className="productpic" src={image}/>
<p>{description}</p>
<p>{price}</p>

            </div>
        </div>
    )
}