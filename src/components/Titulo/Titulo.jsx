function Titulo({ texto, variant }) {

    const variant = {
        primary: "text-slate-800",
        secondary: "text-white"
    }


    return (
        <h1 className={`${variant} font-black text-2xl md:text-4xl transition-all ease-in-out duration-300`} >
            {texto}
        </h1>
    )
}

export default Titulo