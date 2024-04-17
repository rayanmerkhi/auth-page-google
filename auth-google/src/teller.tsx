import { ReactNode } from "react"
import Logo from "./logo"

function Teller(props:  {bvalue:string ,svalue:ReactNode}){
    return(
    <div className="pb-8 -mt-20 pr-6 grow">
    <Logo />
    <p className="font-sans text-2xl my-5">{props.bvalue}</p>
    <p className="font-sans mt-4">{props.svalue}</p>
  </div>
  )
}

export default Teller