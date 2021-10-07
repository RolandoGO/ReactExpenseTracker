import React, { useState } from 'react'
import Balance from "./home_components/Balance"
import History from "./home_components/History"
import Transaction from "./home_components/Transactions"
import "./home.css"



export default function Home() {

    const [balance, setBalance] = useState(0)
    const [transactionHistory, setTransactionHistory] = useState([])

    const transactionObj = {
        balance,
        setBalance,
        setTransactionHistory
    }

    return (
        <div className="expenseTracker">
            <div className="border-bottom text-center">
                <h2>Expense Tracker</h2>
                
            </div>
            <Balance balance ={balance}></Balance>
            

            <History transactionHistory={transactionHistory}></History>
            

            <Transaction transactionObj ={transactionObj}></Transaction>
            
        </div>
    )
}
