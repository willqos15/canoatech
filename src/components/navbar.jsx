import logo from '../../public/logo.svg'

import IcoLogo from "../components/icons/icologo";


export default function Navbar() {

    return (<>
        <header className="sticky top-0 flex items-center w-full h-12 sm:px-10 bg-[#367DED] z-50">
            

            <nav aria-label="Navegação principal"
                className=" flex w-full sm:justify-between justify-center
                items-center font-light text-white text-xl">

                <a href="#inicio" className="sm:flex hidden">
                    <IcoLogo className="h-8 w-8"/>
                    {/* <img src={logo} alt="Canoa Tech" className='h-10 w-10' /> */}
                </a>

                <ul className="flex gap-5 ">
                    <li> <a className="navlink" href="#inicio">Inicio</a> </li>
                    <li> <a className="navlink" href="#servicos">Serviços</a> </li>
                    <li> <a className="navlink" href="#solucoes">Soluções</a> </li>
                    <li> <a className="navlink" href="#contato">Contato</a> </li>
               
                </ul>
            </nav>
        </header>
    </>)
}