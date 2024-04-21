import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

type TPartner = {
    imageUrl: string;
    color: string;
}

const partnersArr:TPartner[] = [
    {imageUrl:'/images/amazon.png', color: '#0E0E0E'},
    {imageUrl:'/images/hadrian.png', color: '#ffff'},
    {imageUrl:'/images/sens.png', color: '#0E0E0E'},
    {imageUrl:'/images/magic.png', color: '#ffff'},
    {imageUrl:'/images/fd.png', color: '#0E0E0E'},
];



export const Partners = () => {
  return (
    <section className="p-4 py-12 lg:pl-24">
      <div className="flex flex-col lg:gap-y-24 gap-y-16">
        <div className="text-center">
          <h2 className="capitalize relative inline-block text-3xl before:absolute before:inline-block before:left-0 before:top-full before:w-full before:h-1 before:bg-blue-500">
            our partners
          </h2>
        </div>
        <div>
          <Swiper
          slidesPerView={"auto"}
            spaceBetween={80}
            loop={true}
            freeMode={true}
            breakpoints={{640:{slidesPerView:2}, 1200:{slidesPerView:4}}}
            
          >{
            partnersArr.map((partner) => <SwiperSlide>
                <div className={`p-6 py-12 flex items-center justify-center h-40`} style={{backgroundColor:partner.color}}>
                    <img src={partner.imageUrl} alt="partner" className="w-24" />
                </div>
            </SwiperSlide>)
          }
          
          </Swiper>
        </div>
      </div>
    </section>
  );
};