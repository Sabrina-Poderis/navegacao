import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store'

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
                    <button className='btn' onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberMult7'})}>*7</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberDivis25'})}>/25</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberAddN', number: 10})}>+ num</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
