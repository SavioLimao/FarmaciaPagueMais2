import React from "react"
const Footer = () => {
    return (
        <footer className="h-screen flex items-end justify-center mt-12">
            <div className="bg-blue-800 w-screen p-5">
                <p className="text-zinc-100 flex items-center justify-center">
                    © Copyright 2000-2024 Pague Mais farmácias e laboratórios S.A.
                </p>
                <p className="text-zinc-100 flex items-center justify-center">Powerd by&nbsp;<a href="#" className="hover:font-bold">Jefferson Leite&nbsp;</a>&&nbsp;<a href="#" className="hover:font-bold"> Sávio Limão</a></p>
            </div>
        </footer>
    )
}
export default Footer