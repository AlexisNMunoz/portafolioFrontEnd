import { Link } from "react-router-dom"
import ilustracion from "../images/programando.svg"

function Perfil() {
    return (
        <>
            <section className="w-full">

                <div className=" shadow-md flex flex-col items-center md:mt-5 md:rounded-tr-[8rem] md:h-[80vh] h-screen bg-gradient-to-t from-[#fa0050] to-[#fb3d79] rounded-bl-[8rem] relative overflow-hidden">

                    <img
                        src="/public/bg-pattern-intro-mobile.svg" alt="imagen"
                        className=" absolute scale-[4.3] top-[15rem] left-20 opacity-50 z-[1]"
                    />

                    <div className="mt-10 w-2/3 z-[3]">
                        <h2 className="text-center text-white text-2xl font-bold uppercase mb-2">¡Hola!</h2>
                        <p className="text-center text-white">Mi nombre es Alexis Muñoz y agradezco tu visita.</p>
                    </div>

                    <img
                        src={`${ilustracion}`}
                        alt="Ilustracion de persona trabajando"
                        className=" w-56 mt-5 z-[3]"
                    />

                    <div className=" flex gap-5 mt-10 z-[3]">
                        <Link to="/contacto"
                            className=" select-none uppercase text-white hover:text-white hover:bg-[#fa0050] transition-all border-2 border-white shadow-lg hover:shadow-[#fa0050] py-2 px-6 rounded-md text-lg font-semibold"
                        >Contáctame</Link>

                        <button className=" border-2 uppercase border-white hover:shadow-[#fa0050] hover:bg-[#fa0050] p-2 rounded-md font-bold text-sm text-white transition-colors">
                            <a href="/CV-Alexis-Muñoz-FrontEnd-Developer.pdf" target="_blank" rel="noopener noreferrer" download="CV-Alexis-Muñoz-FrontEnd-Developer.pdf"
                            >Descargar CV</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Perfil
