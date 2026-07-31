// function Spinner() {
//   return(
//     <div>
//       Spinner
//     </div>
//   )
// }

// export default Spinner


const Spinner = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-28 h-28 border-8 text-amber-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-amber-400 rounded-full">
        
      </div>
      Aguadre...
    </div>
  );
}

export default Spinner;