import { useParams } from "react-router-dom"

const BlogsDetails = () => {
    const {id=""}=useParams();
  return (
    <div>BlogsDetails {id}</div>
  )
}

export default BlogsDetails