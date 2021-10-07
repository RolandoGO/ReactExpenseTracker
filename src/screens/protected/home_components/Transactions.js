import React, { useState } from 'react'
import {Button, FormControl, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {handleAmountValidation,handleConceptValidation, handleTransaction } from "./transactionUtils/utils"


export default function Transactions({transactionObj}) {

    const {balance, setBalance, setTransactionHistory}= transactionObj
    const [amount, setAmount] = useState("")
    const [concept, setConcept] = useState("")
    const [radioBtn, setRadio]= useState("")
    

    const[amountError, setAmountError] = useState()
    const[conceptError, setConceptError] = useState()

    //object to pass the data to the handleTransaction and the handleHistoryTransaction

    const dataObj ={
        balanceProps:{balance,setBalance} ,
        setHistory: {setTransactionHistory},
        amount,
        concept,
        transaction:radioBtn,
        setConcept,
        setAmount
    }



    let btnFlag = (!amountError && !conceptError && concept.length>0 && amount>0 && radioBtn.length>0)? false:true


    return (
        <div className="border">
            
            <form className="transactionForm">
                <FormControl>
                    <TextField id="amount"  value={amount} onChange={(e)=>handleAmountValidation(e.target.value,{setAmount,setAmountError})} aria-describedby="my-helper-text" helperText={amountError?amountError:null} />
                    
                </FormControl>
                <FormControl>
                    <TextField id="concept" type="text" value={concept} onChange={(e)=>handleConceptValidation(e.currentTarget.value,{setConcept, setConceptError})}  aria-describedby="my-helper-text" helperText={conceptError?conceptError:null}/>
                </FormControl>

                <FormControl>
                <RadioGroup>
                    <FormControlLabel value="subtract" onClick={(e)=>setRadio(e.target.value)} control={<Radio />} label="Subtract" />
                    <FormControlLabel value="add" onClick={(e)=>setRadio(e.target.value)} control={<Radio />} label="Add" />
                </RadioGroup>
                </FormControl>
               
               <div style={{marginTop:"10px", display:"flex", justifyContent:"space-around"}}>
                <Button disabled={btnFlag} variant="outlined" onClick={()=>handleTransaction(dataObj)}>Add transaction</Button>
               </div>
               

            </form>

        </div>
    )
}
