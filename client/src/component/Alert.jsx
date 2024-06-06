import Alert from "react-bootstrap"
const Notify = ({variant,msg}) => {
  return (
    <><Alert key={variant} variant={variant}>
   {msg}
  </Alert></>
  )
}

export default Notify