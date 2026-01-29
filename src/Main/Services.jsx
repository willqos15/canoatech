import { RiRobot2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { SiN8N } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiHeadCircuit } from "react-icons/pi";
import IcoServices from '../components/icoServices';

export default function Services() {
    return(<>

       <section id="servicos" className='bg-[#f0eefc] mt-40 py-20 text-[#46689f]'>
    
                <h2 className='text-4xl font-extrabold text-[#367DED]'>SERVIÇOS</h2>
    
                <div className='grid grid-cols-3 w-fit mx-auto gap-8 whitespace-nowrap py-8 text-xl font-bold'>
    
    
                        <IcoServices ico={<TbWorld />}
                        titulo="Criação de sites"
                        />
    
                        <IcoServices ico={<RiRobot2Fill />}
                        titulo="Assistentes virtuais"
                        />
    
                        <IcoServices ico={<FaGear />}
                        titulo="Sistemas personalizados"
                        />
    
                        <IcoServices ico={<PiHeadCircuit />}
                        titulo="Soluções com I.A."
                        />
    
                        <IcoServices ico={<MdOutlineMenuBook />}
                        titulo="Aplicações Educacionais"
                        />
    
                        <IcoServices ico={<SiN8N />}
                        titulo="Automação de tarefas"
                        />
    
                    
                </div>
            </section>
    
    </>)
}