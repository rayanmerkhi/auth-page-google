
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
          </div>
      </div>
    </>
  )
}

export default App
