import './Featureddyes.css'
import data from './productdata.json'
import ProductCard from './Productcard'
export default function featureddyes () {
    return (
        <div className='wrapcontain'>
                            <h1 className='featured'>Featured Dyes</h1>

            <div className="dyecontainer">
                {data.map((item,index)=> {
                return (
                        
                <ProductCard 
                 title={item.title}
                 price={item.price}
                 image={item.image}
               />
                )
                })}
</div>
            </div>
    )
}