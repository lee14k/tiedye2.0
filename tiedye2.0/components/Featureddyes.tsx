import './Featureddyes.css'
import data from './productdata.json'
import ProductCard from './Productcard'
export default function featureddyes () {
    return (
            <div className="dyecontainer">
                <h1>Featured Dyes</h1>
                {data.map((item,index)=> {
                return (
                        
                <ProductCard 
                 title={item.title}
                 price={item.price}
                 image={item.image}
                description={item.description}/>
                )
                })}

            </div>
    )
}