import './email.css'
import Button from './Button.tsx'

function Email(props:{asker:string}){
            
    return(
    <div className="flex grow justify-center flex-col">
        <div className="border min-w-[327px] max-h-12 rounded-lg px-3 py-4 relative grow bdelem flex-col mb-10" >
            <input type="email" name="identifier" autoComplete="username" className="w-full bg-transparent outline-none email p-2 bottom-3 relative" placeholder=' '/>
            <label className='label'>
                <div className="absolute top-2 pointer-events-none transition content-name">{props.asker}</div>
            </label>
            <div className="bg-transparent mt-2" ><Button linker='Adresse e-mail oubliée ?' url="#"/></div>
        </div>
            <div className="mt-6 pt-3 text-balance"><p>S'il ne s'agit pas de votre ordinateur, utilisez une fenêtre de navigation<br /> privée pour vous connecter.</p>
            <Button linker="En savoir plus sur l'utilisation du mode Invité" url='#' />
        </div>
    </div>
    )
}

export default Email