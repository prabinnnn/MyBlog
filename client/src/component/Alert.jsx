import Alert from "react-bootstrap"
<<<<<<< HEAD
const Notify = ( {variant = "danger" , msg}) => {
  return (
    <><Alert key={variant} variant={variant} style={{textAlign:"center" , color:"white"}} >
=======
const Notify = ({variant= "danger" , msg}) => {
  return (
    <><Alert key={variant} variant={variant}>
>>>>>>> 3f4e58760486af43c0fbb12cc03ff6a4544402d3
   {msg}
  </Alert></>
  )
}

export default Notify