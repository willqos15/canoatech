import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PoupZoom({imagem, functionx, titulo}){
    return(
    <div className="fixed inset-0 w-full bg-black/60  z-50 mx-auto flex flex-col items-center justify-center">
        <span className="flex w-9/12 h-12 justify-between items-center
         bg-[#367DED]  text-xl font-bold text-white px-5">
            <h2 className="sm:text-xl text-sm">{titulo}</h2>
            <button
            onClick={functionx}
            className="flex justify-center items-center h-6 w-6 bg-red-500 hover:bg-red-700 transition duration-300 cursor-pointer text-base text-white p-2 m-1 rounded-full ">X</button>
            </span>

            <Swiper className="w-full flex justify-center items-center "
                            modules={[Navigation, Pagination]}
                            spaceBetween={1}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}>
            
                            {imagem.map((x, index) => (
                                <SwiperSlide key={index} >
                                    <img 
                                    onClick={()=>{setImg(x)
                                        console.log('imagem:',img, 'imagem.length', img.length)}}
                                    src={x} className='w-9/12 mx-auto' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
    </div>)
}