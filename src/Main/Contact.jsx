import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { GrContact } from "react-icons/gr";

export default function Contact() {
    return (<section
        id="contact"
        className="text-[#46689f] flex items-center justify-center px-10 py-10 mx-auto my-30 w-fit rounded-b-full">




        
            <GrContact className="text-[200px] p-0 m-0 text-[#367DED]" />

            <div className="w-140">
                <h2 className="text-4xl font-extrabold text-[#367DED] ">AGENDE UMA CONVERSA </h2>
                <p className="my-5 w-96 mx-auto text-left font-bold text-xl">Se você se interessou por algum de nossos serviços ou tem alguma demanda na sua empresa, entre em contato e vamos conversar!</p>


                <ul className="flex justify-center gap-10">

                    <li className="hover:text-[#367DED] transition duration-300">
                        <a href="https://wa.me/5593991878598" target="_blank">
                            <IoLogoWhatsapp className="text-4xl inline " />
                            (93) 99187-8598
                        </a>
                    </li>

                    <li className="hover:text-[#367DED] transition duration-300">
                        <a href="mailto:willqos15@gmail.com" target="_blank">
                            <MdEmail className="text-4xl inline hover:text-[#367DED] " />
                            willqos15@gmail.com
                        </a>
                    </li>
                </ul>

            </div>

       




    </section>)
}