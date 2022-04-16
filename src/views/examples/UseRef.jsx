import React, { useRef, useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)
    count.current++

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{value1} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}></input>
            </div>
        </div>
    )
}

export default UseRef
