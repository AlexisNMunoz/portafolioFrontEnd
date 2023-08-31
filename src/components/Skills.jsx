/* eslint-disable react/prop-types */

function Skills({ nombre }) {
    return (
        <article className=" text-center flex gap-2 justify-center ">
            <h4
                className={`p-2 shadow-lg font-semibold text-black/80 hover:transition-transform hover:scale-110 select-none `}
            >{nombre}</h4>
        </article>
    )
}

export default Skills
