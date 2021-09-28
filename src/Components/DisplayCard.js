import React from 'react'

function DisplayCard(props) {
    const cardDetails=props.cardValue
    
    return (
        <div className="cardDetails">
             <img src={cardDetails?.picture?.large} alt="Photo" />
            <h2>{cardDetails?.name?.title}. {cardDetails?.name?.first} {cardDetails?.name?.last}</h2>
           
        </div>
    )
}

export default DisplayCard
