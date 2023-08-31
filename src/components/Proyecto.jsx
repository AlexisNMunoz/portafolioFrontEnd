/* eslint-disable react/prop-types */

function Proyecto({ nombre, descripcion, deploy, github }) {

    return (
        <article
            className={`shadow-lg shadow-black/10 border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform w-60 h-80 bg-white`}
        >
            <div className="h-full bg-gray-500">
                <div className="h-full p-5 flex flex-col justify-between select-none">
                    <h2 className="uppercase text-white font-bold text-center">{nombre}</h2>
                    <p className="text-white text-center">{descripcion}</p>

                    <div className=" flex w-full justify-between">
                        <a
                            className="bg-[#fa0050] transition-colors hover:bg-white hover:text-[#fa0050] px-2 rounded-sm text-white uppercase"
                            href={`${deploy}`}
                            target="_blanck"
                        >Deploy</a>
                        <a
                            className="px-2 rounded-sm text-white uppercase transition-colors bg-gray-900 hover:bg-white hover:text-black"
                            href={`${github}`}
                            target="_blanck"
                        >GitHub</a>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default Proyecto
