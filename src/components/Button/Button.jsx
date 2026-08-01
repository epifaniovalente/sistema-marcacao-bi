import { motion } from "framer-motion";


 function Button({text, type, variant, onClick, disabled=false}) {

  const variants = {
    primary:
      "bg-amber-500 hover:bg-amber-600 text-white",

    secondary:
      "bg-slate-200 hover:bg-slate-300 text-slate-800",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return(
    <motion.button
    whileTap={{scale:.8}}
     type={type} onClick={onClick} disabled={disabled}  className={`px-4 py-2 rounded-lg font-medium transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]}`}>
      {text}
    </motion.button>
  )
 } 

 export default Button