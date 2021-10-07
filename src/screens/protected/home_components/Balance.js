import React , {memo} from 'react'

export default memo(function Balance({balance}) {
    return (
        <div className="border p-2">
            <p>Balance: <strong>{balance}</strong></p>
        </div>
    )
})

