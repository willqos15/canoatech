import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react'
import PoupZoom from "../components/poupzoom"


export default function Project({ titulo, descricao, lista, imagem }) {

    const [datapoup, setDataPoup] = useState({ img: "", title: "" })

    return (<>

        <article className=' relative max-w-full overflow-visible bg-[#367DED] flex flex-col  justify-center items-center text-white py-5 mb-2'>

            <h3 className='sm:text-4xl text-xl px-5 pb-5 font-extrabold '>
                {titulo}
            </h3>

            <div className='flex sm:flex-row flex-col items-center gap-4 text-left mb-3'>
                <p className='w-80 bg-white text-[#46689f]  p-3 sm:rounded-md rounded-0'>
                    {descricao}
                </p>
                <ul aria-label={`Funcionalidades do projeto ${titulo}`}>
                {lista}
                </ul>
            </div>


            <Swiper className="relative md:w-180 w-full flex justify-center items-center "
                modules={[Navigation, Pagination]}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>

                {imagem.map((x, index) => (
                    <SwiperSlide key={index} >
                        <img  alt={`${titulo} - screenshot ${index + 1}`}
                            onClick={() => {
                                setDataPoup({ img: x, title: titulo })
                            }}
                            src={x} className='md:w-150 w-8/12 mx-auto' />
                    </SwiperSlide>
                ))}
            </Swiper>

            {datapoup.img.length > 0 && datapoup.title.length > 0 ?
                <PoupZoom imagem={imagem} titulo={datapoup.title} functionx={() => setDataPoup({ img: "", title: "" })} />
                : null
            }

        </article>

    </>)
}