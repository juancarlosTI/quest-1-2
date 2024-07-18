import React from "react"


const showText = 'Aqui está o texto digitado!'
const showColor = '#949494'


const ViewText = ({text,color}) => {
    return (
        <>  
            <p>Texto renderizado abaixo: </p>
            <div className="rendered text">
                <p className="paragraph" style={{color}}>{text}</p>
            </div>
        </>
    )
}

ViewText.defaultProps = {
    color: showColor,
    text: showText.toUpperCase()
}


export default ViewText