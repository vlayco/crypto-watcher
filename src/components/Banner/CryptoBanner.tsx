import Image from "next/image";
import background from "../../../public/crypto-watch-banner-background.jpg"

const CryptoBanner = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full h-fit'>
      <div className="relative w-full lg:container lg:mx-auto">
        <div className="absolute w-full -z-10">
          <Image
            src={background}
            alt="abstract-background-image"
            className="object-contain object-center"
          >

          </Image>
        </div>
      </div>
      <h1 className="flex flex-col text-center items-center justify-center text-6xl font-semibold h-96">Above the background</h1>
    </section>
  )
}

export default CryptoBanner;