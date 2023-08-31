import { Outlet, Link } from "react-router-dom"
import "../styles/animateHeader.css"
function Layout() {
    return (
        <>
            <header
                className=" bg-white shadow-lg px-10 py-3 fixed z-20 right-0 left-0 animatedHeader ">
                <div className="flex justify-between items-center container w-[90%] mx-auto">
                    <Link to="/" className=" font-black text-3xl text-[#fa0050] hover:drop-shadow-md ">AM</Link>

                    <div className=" flex gap-5 items-center">
                        <a href="public/CV2023.pdf" download="CV-Alexis-Muñoz-Front-End-Developer.pdf" className=" border border-black/80 p-2 rounded-md font-bold text-sm text-black/80 hover:bg-gray-100 transition-colors"
                        >Descargar CV</a>

                        <Link
                            to="/perfil"
                            className=" text-black/90 text-lg flex gap-4">
                            Mi Perfil
                        </Link>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Layout
