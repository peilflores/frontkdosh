import { FilterButton, FilterButtonContainer, FiltrarContenedor, ItemLeft } from "./TareaFiltrarComponente";

export function FiltrarTodo ({tarea}){
    return (
        <FiltrarContenedor>
            <ItemLeft></ItemLeft>
            <FilterButtonContainer>
                <FilterButton action={()=> {}} active="All" filter="All" />
                <FilterButton action={()=> {}}  active="All" filter="Active" />
                <FilterButton action={()=> {}} active="All" filter="Completed" />
            </FilterButtonContainer>
            
        </FiltrarContenedor>
    )

}