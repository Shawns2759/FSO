import react from 'react'

const Error = ({msg}) => {
    if (msg) {
        return (
            <div className="errMsg">
                <span>{msg}</span>
            </div>
        )
    } else {
        return (
            null
        )
    }
}

export default Error