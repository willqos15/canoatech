import foto from '../assets/bg.jpg'
import arte from '../assets/art.png'

// https://cruip.com/demos/fintech/
// https://saaslandingpage.com/mobbin/
// https://mobbin.com/?via=slp
// https://saaslandingpage.com/templates/fintech/

export default function Hero() {
    return (<>


        <div className='h-12 bg-[#367DED]'></div>
        <div className="bg-[#367DED] h-screen flex justify-center rounded-b-full"
        // style = {{backgroundImage: `url(${foto})`}}  
        >

            <div className='h-full w-fit flex flex-row items-center justify-center'>

                <div className='text-white'>

                    <p className='font-extrabold text-8xl'>CANOA TECH</p>
                    <p className='text-5xl font-extralight'>Navegando em soluções</p>

                    <div className='flex flex-row justify-center pt-1 '>

                      




                    </div>


                    <button className='bg-[#3170D4] text-white h-fit px-5 py-1 mt-3 rounded-2xl text-2xl font-bold backdrop-blur-lg'>
                        Conheça-nos</button>


                </div>




            </div>


        </div>


        <section  className='flex mx-auto justify-center items-center flex-row my-30 w-8/12'>

            <img
            className='h-100'
            src={arte}></img>

            <div>
                <h2 className="font-bold pt-5 text-4xl text-[#18386B]"> O QUE É A CANOA TECH? </h2>
            <p className='text-2xl pt-10 font-extralight text-left'> É uma inciativa focada em desenvolvimento tecnológico, criando soluções sob medida para negócios que precisam resolver problemas reais do dia a dia. </p>
            </div>


        </section>

        




        <section className='bg-[#EFEFEF]'>
            
        

        <h2 className="font-bold pt-5"> O QUE FAZEMOS? </h2>
        <p> Criação de sites</p>
        <p> Automação de processos</p>
        <p> Criação de sistemas</p>

        <h2 className="font-bold pt-5"> PRODUTOS </h2>
        <p> Achados e Perdidos</p>
        <p> Doações de Animais</p>
        <p> Aplicação Web Educacional</p>

        <h2 className="font-bold pt-5">CONTATO</h2>
        <p>
            55 (DDD) XXXXX-XXXX
        </p>

        </section>


    </>)
}