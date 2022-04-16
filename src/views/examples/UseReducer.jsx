import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action){
    switch (action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}
            break;
        case 'number_mult7':
            return {...state, number: state.number * 7}
            break;
        case 'number_divis25':
            return {...state, number: parseInt(state.number / 25)}
            break;
        case 'number_addN':
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className='center'>
                {state.user ?
                    <span className='text'>{state.user.name}</span> :
                    <span className='text'>Sem usuário</span>
                }
                <span className='text'>{state.number}</span>
                <div>
                    <button className='btn' onClick={() => dispatch({type: 'login', name: 'Sabrina'})}>Login</button>
                </div>
                <div>
                    <button className='btn' onClick={() => dispatch({type: 'number_add2'})}>+2</button>
                    <button className='btn' onClick={() => dispatch({type: 'number_mult7'})}>*7</button>
                    <button className='btn' onClick={() => dispatch({type: 'number_divis25'})}>/25</button>
                    <button className='btn' onClick={() => dispatch({type: 'number_addN', number: 10})}>+ num</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
