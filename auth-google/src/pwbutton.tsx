import './email.css'
import Button from './Button.tsx'
import React from 'react'

function Password(props:{asker:string}){
            
    return(
    <div className="flex grow justify-center flex-col">
        <div className="border min-w-[327px] max-h-12 rounded-lg px-3 py-4 relative grow bdelem flex-col mb-10" >
            <input id="myInput" type="password" name="passwd" autoComplete="password" className="w-full bg-transparent outline-none email p-2 bottom-3 relative" placeholder=' '/>
            <label className='label'>
                <div className="absolute top-2 pointer-events-none transition content-name">{props.asker}</div>
            </label>
            <div className="bg-transparent mt-2 mb-9" ><input  className='mt-1 mr-2 size-4 border-2 rounded-sm' type='checkbox' onClick={()=>{
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text"; //Ca risque de montrer une erreur sur vsCode mais ca foncionne 
  } else {
    x.type = "password";
  }
}} />Affiche le mot de passe</div>
    </div>
    </div>
    )
}

export default Password