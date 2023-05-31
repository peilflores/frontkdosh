export function FiltrarContenedor({children}){

    return (
        <div className="flex items-center justify-between p-4 bg-state-100 border-b border-solid border-state-100">
            {children}
        </div>
    )
}

export function ItemLeft ({total=0}){
    return (
        <p className="text-state-50 text-sm">
            {total} items left
        </p>
    )

}

export function FilterButtonContainer({children}){

    return (
        <div className="flex items-center space-x-2" >
            {children}

        </div>
    )
}

export function FilterButton({action, active, filter}){
    return (

        <button className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out`
        
        + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400' )}>
            {filter}

        </button>
    )
}