import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Hero from "../pages/Hero";
import Perfil from "../pages/Perfil";
import Contacto from "../pages/Contacto";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Hero />
            },
            {
                path: "/perfil",
                element: <Perfil />
            },
            {
                path: "/contacto",
                element: <Contacto />
            }
        ]
    }
])