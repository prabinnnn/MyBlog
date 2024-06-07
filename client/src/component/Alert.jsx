import Alert from "react-bootstrap"
const Notify = ( {variant = "danger" , msg}) => {
  return (
    <><Alert key={variant} variant={variant} style={{textAlign:"center" , color:"white"}} >
   {msg}
  </Alert></>
  )
}

export default Notify