function Button(props: { linker: string, url : string}){
    return(
        <a href={props.url} className="text-sm text-blue-700 rounded-2xl hover:bg-blue-500 hover:bg-opacity-20 p-[2px]"><b>{props.linker}</b></a>
    )
}

export default Button