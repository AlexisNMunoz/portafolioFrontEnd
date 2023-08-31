
import ilustracion from "../images/programando.svg"

function Perfil() {
    return (
        <>
            <section className="h-screen w-full flex flex-col items-center">

                <div className="pt-36 w-2/3">
                    <h2 className="text-center text-2xl font-bold uppercase mb-2">¡Hola!</h2>
                    <p className="text-center">Mi nombre es Alexis Muñoz y agradezco tu visita.</p>
                </div>

                <img
                    src={`${ilustracion}`}
                    alt="Ilustracion de persona trabajando"
                    className=" w-56 mt-5"
                />

            </section>

            <aside className=" absolute top-52 bg-white shadow-md flex flex-col gap-2">
                <a
                    href={`www.linkedin.com/in/alexismuñoz`}
                    target="_blanck"
                    className="px-4 py-2 hover:bg-[#0a66c2] hover:text-white cursor-pointer font-semibold hover:scale-110 hover:translate-x-4 hover:shadow-md hover:shadow-[#0a66c2] transition-transform">Linkedin</a>
                <a href="#"
                    className="px-4 py-2 hover:bg-black/80 hover:text-white cursor-pointer font-semibold hover:scale-110 hover:translate-x-4 hover:shadow-md transition-transform">GitHub</a>

            </aside>

        </>
    )
}

export default Perfil
