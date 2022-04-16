export function reducer(state, action){
    switch (action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
            break;
        case 'numberMult7':
            return {...state, number: state.number * 7}
            break;
        case 'numberDivis25':
            return {...state, number: parseInt(state.number / 25)}
            break;
        case 'numberAddN':
                return {...state, number: action.number}
            break;
        case 'login':
                return {...state, user: {name: action.name}}
            break;
        default:
                return state
            break;
    }
}