import proyectos from "../mocks/proyectos.json"

import Proyecto from "./Proyecto"

function Proyectos() {
    return (
        <section className="flex flex-col mx-auto items-center container mb-10 min-h-[80vh] ">
            <h2 className="text-2xl font-bold text-[#fa0050] uppercase mb-5">Experiencia</h2>
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    proyectos && proyectos?.map(proyecto => <Proyecto key={proyecto.id} {...proyecto} />)
                }
            </div>
        </section>
    )
}

export default Proyectos
