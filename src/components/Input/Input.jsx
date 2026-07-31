function Input({type, placeholder, value, disabled }) {
  return(
    <input 
    type={type} 
    value={value} 
    placeholder={placeholder} 
    disabled={disabled}/>
  )
}

export default Input