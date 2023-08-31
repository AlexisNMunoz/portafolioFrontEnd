import { useForm } from "react-hook-form"
import ErrorMessage from "../components/ErrorMessage"
import { Toaster, toast } from 'sonner'


function Contacto() {

    const { register, handleSubmit,
        formState: {
            errors
        }, reset } = useForm()

    const onSubmit = handleSubmit((data) => {

        const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
            loading: 'Enviando...',
            success: () => {
                return `Correo enviado correctamente`;
            },
            error: 'Error al enviar...',
        });

        setTimeout(() => {
            reset()
        }, 2000);
        console.log(data)

    })

    return (
        <>
            <h1 className=" pt-24 text-center mb-5 font-bold text-2xl uppercase text-[#fa0050]">¡Gracias por tu visita!</h1>
            <Toaster richColors />
            <form
                onSubmit={onSubmit}
                className=" flex flex-col gap-2 justify-center items-center container mx-auto"
            >


                <div className=" bg-white shadow-md flex flex-col gap-2 p-5 border border-gray-100">
                    <label className=" font-bold text-gray-800/70 uppercase" htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "El nombre es requerido."
                            },
                            minLength: {
                                value: 3,
                                message: "Debe contener al menos 3 caracteres."
                            },
                            maxLength: {
                                value: 25,
                                message: "Debe ser menor a 20 caracteres."
                            }
                        })}
                        id="name"
                        className=" p-2 border w-full rounded-sm"
                        placeholder="Alexis"
                    />
                    {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}

                    <label className=" font-bold text-gray-800/70 uppercase" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email requerido."
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@([a-z0-9.-]+\.)+[a-z]{2,4}$/,
                                message: "Correo no valido."
                            }
                        })}
                        id="email"
                        className=" p-2 border w-full rounded-sm"
                        placeholder="hola@hola.com"
                    />
                    {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}

                    <label className=" font-bold text-gray-800/70 uppercase" htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        {...register("mensaje", {
                            required: {
                                value: true,
                                message: "Mensaje requerido",
                            },
                            minLength: {
                                value: 4,
                                message: "Debe contener al menos 4 caracteres."
                            }
                        })}
                        id="mensaje"
                        cols="50"
                        rows="5"
                        placeholder="Hola Alexis..."
                        className=" p-2 border w-full resize-none rounded-sm"
                    ></textarea>
                    {errors.mensaje && <ErrorMessage>{errors.mensaje?.message}</ErrorMessage>}
                </div>
                <button
                    className=" transition-all hover:bg-[#fa0050] border-2 border-[#fa0050] px-10 py-3 rounded-md shadow-md hover:text-white text-[#fa0050] uppercase font-bold"
                >Enviar</button>
            </form>
        </>
    )
}

export default Contacto
