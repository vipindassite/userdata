import "./form.scss"

const Button = ({ func, value }) => {
    return (
        <div className="input-box">
            <input className="button" onClick={func} type="submit" value={value} />
        </div>
    )
}

export default Button