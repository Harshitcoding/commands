'use client'
import { signIn } from "next-auth/react"

const Signin = () => {
  return (
    <div className="flex items-center justify-center mt-20">
        <button onClick={() => signIn('google',{callbackUrl:'/'})} className="border p-4 bg-blue-300 text-white rounded">
        Signin with google
        </button>
        </div>
  )
}
export default Signin