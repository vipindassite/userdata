import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import "./form.scss"

const Input = (props) => {

    const [value, setValue] = useState("")

    return (
        <div className="input-box">
            <input value={value} onChange={e => setValue(e.target.value)} className="input" type={props.type} placeholder={props.placeholder} />
            <span className="icon-box status">
            </span>
            <span className="icon-box close-button">
                <CloseIcon className={`icon-button`} />
            </span>
        </div>
    )
}

export default Input