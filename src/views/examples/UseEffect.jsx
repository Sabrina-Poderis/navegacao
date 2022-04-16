import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)

    if(n < 0) return -1
    if(n === 0) return 1

    return calcFatorial(n-1)*n
}

function calcParOuImpar(num){
    const isPar = num % 2 === 0

    if(isPar){
        return 'Par'
    }

    return 'Ímpar'
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parOuImpar, setParOuImpar] = useState('Par')

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        setParOuImpar(calcParOuImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício 01" />
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial === -1 ? '0' : fatorial}</span>
                </div>
                <input type="number" className='input' value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>

            
            <SectionTitle title="Exercício 01" />
            <div className='center'>
                <div>
                    <span className='text'>O número é: </span>
                    <span className='text red'>{parOuImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
