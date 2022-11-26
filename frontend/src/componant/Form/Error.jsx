import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "./form.scss"

const Error = ({ text }) => {
    return (
        <div className="input-box">

            <p className="error">
                <ErrorOutlineIcon />
                <span>{text}</span>
            </p>
        </div>
    )
}

export default Error