const LOADING = 'LOADING'; const MENUOPEN = 'MENUOPEN'; const TIMELINEPOSTS ='TIMELINEPOSTS'; const ALERT='ALERT';

const reducer = (state, action)=>{
    switch(action.type){
        case LOADING: 
            return {...state, loading: true }
        // case TIMELINEPOSTS:
        //     return {...state, timelineposts : action.payload}

        default:
            return {...state}
    }
    return state
}

export default reducer
