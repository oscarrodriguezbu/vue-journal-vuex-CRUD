
// export const myAction = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ] //Arreglo con los valores anteriores y agrega los nuevos
    state.isLoading = false
}

export const updateEntry = ( state, entry  ) => { 

    const idx = state.entries.map( e => e.id ).indexOf( entry.id ) //buscar y crear un nuevo arreglo con ids en el store
    state.entries[idx] = entry
    
}

export const addEntry = (state, entry ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [ entry, ...state.entries  ]
}


export const deleteEntry = ( state, id ) => {
    
    state.entries = state.entries.filter( entry => entry.id !== id ) //se excluye el id borrado y se crea un nuevo arreglo
}