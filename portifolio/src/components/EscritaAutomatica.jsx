import { useEffect, useState } from "react";

export function EscritaAutomatica(props){
    //Esta função precisa receber o texto a ser escrito e o tempo desejado para que ocorra a escrita
    const [text, setText] = useState("")
    const tempo = props.props.tempo

    const Escrever = (text, i = 0) => {
        if(i<text.length){
            setText(text.slice(0, i + 1)+"|")
            setTimeout(() => Escrever(text, i + 1), tempo)
        }else{
            setText(text.slice(0, i + 1))
            setTimeout(() => Escrever(text, i + 1), tempo)
        }
    }

    useEffect(() => {
        setTimeout(() => Escrever(props.props.text))
    }, [])
    return(
        <>
            {text}
        </>
    )
        
}