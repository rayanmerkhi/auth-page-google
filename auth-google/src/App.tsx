
import './App.css'
import Teller from './teller.tsx'
import Email from './email.tsx'

function App() {
  return (
    <>
      <div className="flex flex-wrap mx-auto justify-center w-screen h-screen my-8">
          <div className="shadow-sm fixed p-10 bg-white rounded-3xl w-10/12">
            <div className="mt-20 flex-wrap justify-between flex">
              <Teller />
              <Email />
            </div>
            <div className='flex justify-end p-3 mt-3'>
              <button className='p-2 rounded-full hover:bg-slate-100'>Créer un compte</button>
              <button className='p-2 px-5 ml-14 bg-blue-800 text-white rounded-full hover:bg-blue-900'>Suivant</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
