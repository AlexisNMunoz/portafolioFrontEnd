import { Link } from "react-router-dom"
import Skills from "../components/Skills"
import tecnologias from "../mocks/skills.json"
import Proyectos from "../components/Proyectos"
import Footer from "../components/Footer"

function Hero() {
    return (
        <>
            <main className="flex flex-col h-screen justify-center ">
                <div>
                    <div className=" mb-10 text-center select-none">
                        <h1 className=" font-bold text-4xl text-[#fa0050] mb-2">¡Front-end Developer!</h1>
                        <p className=" text-md font-semibold text-black/80">Hagamos que tu idea sea realidad.</p>
                    </div>
                </div>

                <div className=" mx-auto">
                    <Link to="/contacto"
                        className=" select-none uppercase text-black/80 hover:text-white hover:bg-[#fa0050] transition-all border-2 border-[#fa0050] shadow-lg hover:shadow-[#fa0050] py-2 px-6 rounded-md text-lg font-semibold w-full"
                    >Contáctame</Link>
                </div>
                <div className=" flex flex-wrap gap-3 justify-center mt-10">
                    {
                        tecnologias && tecnologias.map(skill => <Skills key={skill.id} {...skill} />)
                    }
                </div>
            </main>
            <Proyectos />
            <Footer />
        </>
    )
}

export default Hero
