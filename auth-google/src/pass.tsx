
import './App.css'
import Teller from './teller.tsx'
import Password from './pwbutton.tsx'
import React from 'react'
import Icon from './icon.tsx'

function Pass() {
    return (
      <>
        <div className="flex flex-wrap mx-auto justify-center w-screen h-screen my-8">
            <div className="shadow-sm fixed p-10 bg-white rounded-3xl w-10/12">
              <div className="mt-20 flex-wrap justify-between flex">
                <Teller bvalue='Bienvenue' svalue={<a href="../index.html" className='border flex rounded-full hover:bg-slate-300'><Icon></Icon><p className="ml-2 mb-[2px]">recu nom</p></a>} />
                <Password asker="Saisissez votre mot de passe" />
              </div>
              <div className='flex justify-end p-3 mt-3'>
                <button className='p-2 rounded-full hover:bg-slate-100'>Mot de passe oubliée ?</button>
                <button className='p-2 px-5 ml-14 bg-blue-800 text-white rounded-full hover:bg-blue-900'>Suivant</button>
              </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Pass