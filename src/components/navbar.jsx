export default function Navbar() {

    return (<>
        <header className="fixed top-0 flex items-center w-full h-12 px-10 bg-[#367DED] z-50">

            <nav aria-label="Navegação principal"
                className=" flex w-full justify-between  font-light text-white text-xl ">

                <a href="">CT</a>

                <ul className="flex gap-4 ">
                    <li> <a href="">Início</a> </li>
                    <li> <a href="">Serviços</a> </li>
                    <li> <a href="">Contato</a> </li>
                </ul>
            </nav>
        </header>
    </>)
}