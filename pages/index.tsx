import type { NextPage } from 'next'
import Image from 'next/image'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"

const Home: NextPage = () => {
  return (
    <div className='h-full w-full '>
      <div className="mt-20 absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-40 absolute [background:#616362]">
        <div className="sm:ml-0 ml-5 mr-0 mt-3 md:pl-80 md:pr-80">
          <Image src="https://selectnetworx.com/wp-content/uploads/2023/06/selectnetworx.png" height={200} className="w-100 h-20" alt="SnapX Systems Status" />
        </div>
      </div>
      <div className='mt-20 w-full absolute overflow-scroll	'>
        <ServicesSection />
      </div >
    </div>
  )
}

export default Home;
