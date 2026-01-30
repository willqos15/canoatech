
import Project from '../components/project';


export default function Solutions() {

   
    return (

        <section  id="solucoes" className='scroll-mt-12 sm:mt-40 mt-0'>

            <h2 className='sm:text-4xl text-2xl font-extrabold text-[#367DED] py-4 pt-4'>
                SOLUÇÕES
            </h2>

            
            

            <Project
                titulo="ASSISTENTE VIRTUAL DE FEEDBACKS"
                descricao="Um chat de atendimento exclusivo para registrar a opinião dos seus clientes. As experiências são catalogadas permitindo que você entenda melhor o seu negócio."
                lista={<ul>
                    <li>✅ Chat automatizado com I.A.</li>
                    <li>✅ Acesso ao histórico de conversas </li>
                    <li>✅ Organização com data e hora </li>
                    <li>✅ Calculo do nível de satisfação</li>
                </ul>}
                imagem={["https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png"]}
            />

            <Project
                titulo="ACHADOS E PERDIDOS"
                descricao="Sistema online para organizar, controlar e devolver itens com agilidade, ideal para escolas e pequenas empresas."
                lista={<ul>
                    <li>✅ Plataforma online </li>
                    <li>✅ Cadastro, edição e exclusão de itens </li>
                    <li>✅ Modo Administrador </li>
                    <li>✅ Controle centralizado de objetos </li>
                </ul>}
                imagem={["https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173422_lyyhb2.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173519_lexfba.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1766695023/Captura_de_tela_2025-12-25_173555_nwdhrr.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173534_mhv4to.png"]}
            />

            <Project
                titulo="JOGOS ESCOLARES"
                descricao="Transforme o conteúdo da sua grade curricular em dinâmicas gamificadas em grupo que aumentam o engajamento e a participação em sala de aula."
                lista={<ul>
                    <li>✅ Conteúdo personalizável </li>
                    <li>✅ Pontuação por equipes </li>
                    <li>✅ Treinamento Incluso </li>
                    <li>✅ Relatórios das partidas em Word </li>
                </ul>}
                imagem={["https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_133952_w9xapf.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153930_ju7dmb.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153720_oa9j0k.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153747_hxchmf.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153804_bev9xl.png", "https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153828_wzhvql.png"]}
            />

        </section>

    )
}