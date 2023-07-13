import Lavalamp from '../../components/Lavalamp'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Featureddyes from '../../components/Featureddyes'
export default function Home() {
  return (
    <div>
          <div className='lavalampcontainer'>
               <Lavalamp/>
               <div className="bigcontainer">
      <Navbar/>
         <div className="container">
        <Image 
          alt="logo"
          src="/logo.jpg"
          width={250}
          height={250}
      />
</div>
               </div>
   

   
      
      <h1>Featured Dyes</h1>
<Featureddyes/>

      </div>
      </div>
  )
}
