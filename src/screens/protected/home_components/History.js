import React from 'react'

export default function History({transactionHistory}) {

    const historyList = transactionHistory.map(transaction=>{
        return(
            <div className="transactionData border m-2" key={transaction.id}>
                <ul >{transaction.concept}</ul>
                {transaction.transaction ==="add"? <ul>+</ul>:<ul>-</ul>}
                <ul>{transaction.amount}</ul>
            </div>
        )
    })
    
    return (
        <div className="border transactionHistory overflow-auto p-2">
            <h5>History transactions</h5>
            {historyList}
        </div>
    )
}
