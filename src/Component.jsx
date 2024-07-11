
import React, {useState} from 'react'

export default function Component() {
    const [text, setText] = useState()
    const [update, setUdape] = useState()
    
    const textOnChaneg = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        setUdape(text)
    }

  return (
    <div>
        <input type="text" value={text} onChange={textOnChaneg}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado:{update}</p>

    </div>
  )
}
