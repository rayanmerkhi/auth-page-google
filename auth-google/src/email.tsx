import './email.css'

function Email(){
            
    return(
    <div className="flex grow justify-center flex-col">
        <div className="border min-w-[327px] max-h-12 rounded-lg px-3 py-4 relative grow bdelem flex-col" >
            <input type="email" autoComplete="username" className="w-full h-full outline-none email p-2"/>
            <label className='label'>
                <div className="absolute top-2 pointer-events-none transition content-name">Adresse e-mail ou numéro de téléphone</div>
            </label>
            <div className="bg-transparent mt-2" ><a href="forget.html" className="text-sm text-blue-700 rounded-2xl hover:bg-blue-500 hover:bg-opacity-20 p-[2px]"><b>Adresse e-mail oubliée ?</b></a></div>
        </div>
        <div className="mt-6 pt-3 text-balance"><p>S'il ne s'agit pas de votre ordinateur, utilisez une fenêtre de navigation<br /> privée pour vous connecter.</p><a href="forget.html" className="text-blue-700 text-sm rounded-2xl hover:bg-blue-500 hover:bg-opacity-20 p-[2px]"><b>En savoir plus sur l'utilisation du mode Invité</b></a></div>
    </div>
    )
}

export default Email