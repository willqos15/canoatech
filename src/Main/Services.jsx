import { RiRobot2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { SiN8N } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiHeadCircuit } from "react-icons/pi";
import IcoServices from '../components/icoServices';

export default function Services() {
    return (<>

        <section id="servicos" className='bg-[#f0eefc] sm:mt-40 mt-40 py-10 text-[#46689f] scroll-mt-8'>

            <h2 className='sm:text-4xl text-2xl font-extrabold text-[#367DED]'>SERVIÇOS</h2>

            <ul className='grid sm:grid-cols-3 grid-cols-2 w-fit mx-auto lg:gap-x-8 gap-x-2 gap-y-8 whitespace-nowrap py-8 text-xl font-bold'>
                <li>
                    <IcoServices ico={<TbWorld />}
                        titulo="Criação de sites"
                    />
                </li>
                <li>
                    <IcoServices ico={<RiRobot2Fill />}
                        titulo="Assistentes virtuais"
                    />
                </li>
                <li>
                    <IcoServices ico={<FaGear />}
                        titulo="Sistemas digitais"
                    />
                </li>
                <li>
                    <IcoServices ico={<PiHeadCircuit />}
                        titulo="Soluções com I.A."
                    />
                </li>
                <li>
                    <IcoServices ico={<MdOutlineMenuBook />}
                        titulo="Aplicações Educacionais"
                    />
                </li>
                <li>
                    <IcoServices ico={<SiN8N />}
                        titulo="Automação de tarefas"
                    />
                </li>

            </ul>
        </section>

    </>)
}