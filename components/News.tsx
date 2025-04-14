import { news } from "@/constants";
import MyButton from "./ui/button";
import Image from "next/image";

const News = () => {
  return (
    
      <section id="news" className="py-12 px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
                Latest News
            </h2>
            <MyButton variant="outline" size="md">
                See More
            </MyButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, index) => (
                <div key={index}>
                    <div className="relative w-full h-[300px]">
                        <Image 
                           src={item.img}
                           alt={item.title}
                           loading="lazy"
                           fill
                           className="object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="mt-4 text-md text-xl font-bold text-gray-900">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-md font-semibold text-[#5f4632] truncate">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
      </section>
    
  )
}

export default News;
