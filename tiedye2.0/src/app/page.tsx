import Lavalamp from '../../components/Lavalamp'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="bigcontainer">
         <Lavalamp/>

        <div className="container">
        <Image 
          alt="logo"
          src="/logo.jpg"
          width={250}
          height={250}
      />
      </div>
      <h1>Featured Dyes</h1>

      </div>
  )
}
