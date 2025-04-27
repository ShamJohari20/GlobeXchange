import { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {
    const [ip, setIp] = useState()
    const [op, setOp] = useState('')
    const [temp, setTemp] = useState(false)
    const [currency, setCurrency] = useState([])
    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    const calculate = () => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        .then(Response=>Response.json())
        .then(Data=>{
            // console.log(Data)
            setOp(ip * Data[from][to])})

    }

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
            .then(Response => Response.json())
            .then(data => setCurrency(data))
        setTemp(true)
        // console.log(currency)



    }, [])

    return (
        <>
            {temp && <>

                <div id="parent">

                    <div id='child1'>
                        <h1 id='hed'>GlobeXchange</h1>

                        <div id='child2'>
                            <div id='from'>
                                <h1>From</h1>
                                <div className='cal'>
                                    <select className='sel'
                                        onChange={(event) => { setFrom(event.target.value) }}>
                                        <option className='sel' value="">Choose Here</option>
                                        {Object.entries(currency).map(([key, value]) =>

                                            <option key={key} value={key}
                                            >{value}</option>

                                        )}
                                    </select>

                                    <input onChange={(event) => { setIp(event.target.value) }} className='inp' type="number" />
                                </div>

                            </div>

                            <button onClick={() => calculate()} id='c-btn'>Calculate</button>

                            <div id='to'>
                                <h1>To</h1>
                                <div className='cal'>
                                    <select className='sel'
                                        onChange={(event) => { setTo(event.target.value) }}>
                                        <option className='sel' value="">Choose Here</option>

                                        {Object.entries(currency).map(([key, value]) =>

                                            <option key={key} value={key}
                                            >{value}</option>

                                        )}
                                    </select>

                                    <input className='inp' type="text" disabled
                                     value={op} />

                                </div>
                            </div>

                        </div>


                    </div>

                    <input type="color" />

                </div>

            </>}

        </>
    )
}

export default App