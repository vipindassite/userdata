import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ModeIcon from '@mui/icons-material/Mode';
import { useState } from "react";

const Sidebar = () => {

    const [activeClass, setActiveClass] = useState(false)

    return (
        <div className="sidebar">
            <ul>
                <li className="logo">
                    <AutoGraphIcon />
                    <span>SITE</span>
                </li>
                <li className={`list ${activeClass ? "active" : null}`}>
                    <ModeIcon />
                    <span>Daily Form</span>
                </li>
                <li className="list">
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <li className="list">
                    <CreateIcon />
                    <span>Forms</span>
                </li>
                <li className="list">
                    <ListAltIcon />
                    <span>Lists</span>
                </li>
                <li className="list">
                    <SummarizeIcon />
                    <span>Reports</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar