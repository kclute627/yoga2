import * as actionTypes from './actions';



let initialState = {
    menu: 'photos',
}



const reducer = (state= initialState, action) => {

    switch(action.type){
        case actionTypes.SET_PAGE:
            return{
                menu: action.value,
                loading: false
            }
            default: 
            return state;
    }

}

export default reducer