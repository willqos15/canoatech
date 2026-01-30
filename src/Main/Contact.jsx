import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GrContact } from "react-icons/gr";

export default function Contact() {
    return (<section
        id="contato"
        className="text-[#46689f] flex sm:flex-row flex-col items-center justify-center px-10 sm:py-10 mx-auto sm:my-25 py-5 mb-0 scroll-mt-12 ">




        
            <GrContact  className="lg:text-[200px] sm:text-[150px] text-8xl pb-5 text-[#367DED]" />

            <div className="sm:w-140 w-full">
                <h2 className="sm:text-4xl text-2xl font-extrabold text-[#367DED] ">AGENDE UMA CONVERSA </h2>
                <p className="my-5 sm:w-96 w-full mx-auto text-left font-bold sm:text-xl text-md">Se você se interessou por algum de nossos serviços ou tem alguma demanda na sua empresa, entre em contato e vamos conversar!</p>


                <ul className="flex sm:flex-row flex-col w-fit justify-center items-start gap-x-10 mx-auto gap-y-2">

                    <li className="hover:text-[#367DED] transition duration-300 flex  items-start justify-start">
                        <a href="https://wa.me/5593991878598" target="_blank">
                            <IoLogoWhatsapp className="text-4xl inline mr-1" />
                            (93) 99187-8598
                        </a>
                    </li>

                    <li className="hover:text-[#367DED] transition duration-300">
                        <a href="mailto:willqos15@gmail.com" target="_blank">
                            <MdEmail className="text-4xl inline hover:text-[#367DED] mr-1" />
                            willqos15@gmail.com
                        </a>
                    </li>
                </ul>

            </div>

       




    </section>)
}