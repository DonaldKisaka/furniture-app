import MyButton from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl">
                Crafting Excellence in Your Dream Home Renovation Unleashed
            </h1>

            <div className="flex justify-center">
                <MyButton>
                    Book Now
                </MyButton>
            </div>

            <div className="py-10 md:py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <Image src="/kitchen8.jpg" loading="lazy" alt="kitchen" width={500} height={500} className="rounded-lg object-cover w-full h-auto"/>
                        <Image src="/kitchen5.jpg" loading="lazy" alt="kitchen" width={500} height={500} className="rounded-lg object-cover w-full h-auto"/>
                        <Image src="/kitchen6.jpg" loading="lazy" alt="kitchen" width={500} height={500} className="rounded-lg object-cover w-full h-auto"/>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-32 justify-center items-center max-sm:grid max-sm:grid-cols-1 max-sm:w-1/2 max-sm:mx-auto">
                        <Image src="/airbnb.png" loading="lazy" alt="airbnb" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                        <Image src="/booking.png" loading="lazy" alt="booking" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                        <Image src="/traveloka_logo.png" loading="lazy" alt="traveloka" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                        <Image src="/opendoor.png" loading="lazy" alt="opendoor" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                        <Image src="/tiket.png" loading="lazy" alt="tiket" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                        <Image src="/tripadvisor.png" loading="lazy" alt="tripadvisor" width={200} height={100} className="object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                    </div>

                </div>


            </div>
        </div>
      </div>
    
  )
}

export default Hero;
