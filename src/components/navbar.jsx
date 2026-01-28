export default function Navbar() {

    return (<>
        <header className="fixed top-0 flex items-center w-full h-12 px-10 bg-[#367DED] z-50">

            <nav aria-label="Navegação principal"
                className=" flex w-full justify-between  font-light text-white text-xl ">

                <a href="#hero">CT</a>

                <ul className="flex gap-4 ">
                    <li> <a href="#hero">Início</a> </li>
                    <li> <a href="#services">Serviços</a> </li>
                    <li> <a href="#solutions">Soluções</a> </li>
                    <li> <a href="#contact">Contato</a> </li>
                </ul>
            </nav>
        </header>
    </>)
}