
function Footer() {
    return (
        <footer className="w-full h-24 bg-[#fa0050] shadow bottom-0">
            <div className="container p-5 flex justify-around">
                <div className=" text-white flex flex-col items-center">
                    <h3 className="font-semibold uppercase">Alexis Muñoz</h3>
                    <p className=" text-xs uppercase">Front-End Developer</p>
                </div>

                <div className=" text-white flex flex-col items-center">
                    <h3 className="font-semibold uppercase">contacto</h3>
                    <div className=" flex gap-4">
                        <a href="#" className=" text-xs hover:text-black/80">Linkedin </a>
                        <a href="#" className=" text-xs hover:text-black/80">Gmail</a>
                        <a href="#" className=" text-xs hover:text-black/80">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
