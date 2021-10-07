
    export function handleAmountValidation(value, set){

        set.setAmountError()

        const reg = /^([0-9]+([.|,][0-9]*)?|[.|,][0-9]+)$/;

        if(!reg.test(value)) {
            
            const a = value.slice(0, -1)
            set.setAmount(a)
            set.setAmountError("solo numeros positivos")
        }
        else {
            set.setAmountError()
            set.setAmount(value)
        }



    }

    export function handleConceptValidation(value,set){
        set.setConceptError()

        const regex = /^[a-zA-Z]{1,10}$/

        if(regex.test(value)){
            set.setConceptError()
            set.setConcept(value)
        }
        else {
            const newValue = value.slice(0,-1)
            set.setConcept(newValue)
            set.setConceptError("solo letras, maximo 10, sin espacios")
        }
        
    }



    export function handleTransaction(dataObj){
        

        const {balanceProps,amount,concept,transaction,setHistory, setAmount, setConcept} = dataObj

        const historyInfo={
            amount,
            concept,
            transaction,
            id:Math.random()
        }
        

        if(transaction==="add"){
            const operation = balanceProps.balance + Number(amount)
            balanceProps.setBalance(operation)
            handleHistoryTransaction(historyInfo, setHistory)
            
        }
        else{
            const operation = balanceProps.balance - Number(amount)
            if(operation<0) alert("saldo insuficiente")
            else {
                balanceProps.setBalance(operation)
                handleHistoryTransaction(historyInfo, setHistory)

            }
        }

        setAmount("")
        setConcept("")
        
    }

    export function handleHistoryTransaction(data,{setTransactionHistory}){

        setTransactionHistory(history=>[...history, data])
    }