import Image from "next/image";
import background from "../../../public/crypto-watch-banner-background.jpg"

const CryptoBanner = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full h-auto'>
      <div className="relative w-full lg:container lg:mx-auto">
        <div className="absolute w-full -z-10 h-auto overflow-hidden object-fit">
          <Image
            src={background}
            sizes="100vw"
            alt="abstract-background-image"
            className="opacity-60"
          >

          </Image>
        </div>
      </div>
      <h1 className="flex flex-col text-center items-center justify-center text-6xl font-semibold h-96">Above the background</h1>
    </section>
  )
}

export default CryptoBanner;