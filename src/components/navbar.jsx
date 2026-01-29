export default function Navbar() {

    return (<>
        <header className="sticky top-0 flex items-center w-full h-12 px-10 bg-[#367DED] z-50">

            <nav aria-label="Navegação principal"
                className=" flex w-full justify-between  font-light text-white text-xl ">

                <a href="#inicio">CT</a>

                <ul className="flex gap-4 ">
                    <li> <a className="navlink" href="#inicio">Inicio</a> </li>
                    <li> <a className="navlink" href="#servicos">Serviços</a> </li>
                    <li> <a className="navlink" href="#solucoes">Soluções</a> </li>
                    <li> <a className="navlink" href="#contato">Contato</a> </li>
               
                </ul>
            </nav>
        </header>
    </>)
}