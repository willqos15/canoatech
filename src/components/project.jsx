import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Project({ titulo, descricao, lista, imagem }) {

    return (<>

        <article className=' relative max-w-full overflow-visible bg-[#367DED] flex flex-col  justify-center items-center text-white pt-10 py-5 mb-20'>

            <h3 className='text-4xl font-extrabold '>
                {titulo}
            </h3>

            <div className='flex flex-row items-center gap-2 text-left'>
                <p className='w-80 bg-white text-[#46689f]  p-3 rounded-md m-5'>
                    {descricao}
                </p>
                {lista}
            </div>


            <Swiper className="w-180 flex justify-center items-center"
                modules={[Navigation, Pagination]}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>

                {imagem.map((x, index) => (
                    <SwiperSlide>
                        <img src={x} key={index} className='w-150 mx-auto' />
                    </SwiperSlide>
                ))}
            </Swiper>

        </article>

    </>)
}