import {useState} from 'react'
import { SignupInput } from '@santhosh_toorpu/blog-common'
import Authheader from './Authheader'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

// interface IAuth {
//     label: string;
//     placeholder: string;
//     onchange: void;
// }
const Auth = ({type}: {type: "signin" | "signup"}) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    email: "",
    password: "",
  }) 
  const navigate = useNavigate()

  const sendrequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}user/${type === "signin" ? "signin" : "signup"}`, postInputs);
      const jwt = response.data.user_token;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs")
    } catch (error) {
      console.log(error)
    }
    }
  return (
    <div className="flex items-center justify-center bg-gray-950 p-8 lg:p-12 xl:p-16">
      <div className="mx-auto w-full max-w-md space-y-4">
        <Authheader type={type} />
        <div className="space-y-4">          
          <Labeledinput type="username" Label="Username" placeholder='Username' onchange={(e : any) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} /> 
          <Labeledinput type="email" Label="Email" placeholder='Email' onchange={(e : any) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }}/>
          <Labeledinput type="password" Label="Password" placeholder='Password' onchange={(e : any) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}/>
        </div>
        <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary 
              border border-input
              text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full text-white my-4"
              type="submit"
              onClick={sendrequest}
            >{type === "signin" ? "Sign in" : "Sign up"}</button>
      </div>
    </div>
  )
}

const Labeledinput = ({type, Label , placeholder , onchange}: {type : string, Label: string, placeholder: string, onchange: any}) => {
  const [type1, setType] = useState(type);
  return(
          <div className="relative space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              htmlFor="password"
            >
              {Label}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 text-white placeholder:text-gray-400"
              id="password"
              onChange={onchange}
              placeholder={placeholder}
              type={type1}
            />
            {type === "password" && (
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7" onClick={() => setType(type1 === "password" ? "text" : "password")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="sr-only">Toggle password visibility</span>
            </button>
          )}

          </div>
  )
}

export default Auth
