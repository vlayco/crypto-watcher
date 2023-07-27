import Image from "next/image";
import background from "../../../public/crypto-watch-banner-background.jpg"

const CryptoBanner = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full max-h-[600px]'>
      <div className="relative w-full lg:container lg:mx-auto">
        <div className="absolute w-full -z-10 h-auto max-h-[600px] overflow-hidden object-fit">
          <Image
            src={background}
            sizes="100vw"
            alt="abstract-background-image"
            className="opacity-60"
          ></Image>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl py-4 md:py-6 lg:py-8 font-normal">Crypto Watch</h1>
        <h2 className="text-md md:text-xl lg:text-2xl font-light">Place to get the insight into top crypto-currencies market prices!</h2>
      </div>
    </section>
  )
}

export default CryptoBanner;