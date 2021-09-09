import react from 'react'

const Error = ({ msg, style }) => {
    if (!msg) {
        return null
    }
    return (
        <div className="errMsg">
            <span className={style}>{msg}</span>
        </div>
    )
}

export default Error