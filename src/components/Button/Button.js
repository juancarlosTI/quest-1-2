import React from "react";

 const showLabel = ({label}) => {
    alert(`A label desse botão é : ${label}`)
 }

const BotaoLabel = ({label}) => {
     return (
         <>
             <div>
                 <button className="btn" onClick={() => {showLabel({label})}}>Botão + {label}</button>
             </div>
         </>
     )
}


export default BotaoLabel