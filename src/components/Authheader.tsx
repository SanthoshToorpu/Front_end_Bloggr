import { Link } from "react-router-dom"
const Authheader = ({type} : {type: "signin" | "signup"}) => {
  return (
    <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-white">Join Bloggr</h2>
          <p className="text-gray-400">Sign up to read and write stories that matter.</p>
          {type === "signup" && <p className="text-gray-400">Already have an account? <Link className='underline' to="/signin">Sign in</Link></p>}
          {type === "signin" && <p className="text-gray-400">Don't have an account? <Link className="underline" to="/signup">Sign up</Link></p>}
    </div>
  )
}

export default Authheader
