import Sidebar from "../../componant/sidebar/Sidebar"
import "./home.scss"

const Home = () => {
    return (
        <div className="page">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <section className="thought">
                    <div className="text">
                        Sant Rampal Ji mhaaraj ji jfhd chjednnb c jchehd chdnc
                    </div>
                    <div className="img"></div>
                </section>
                <section className="daily-form">
                    <div className="form-icon">
                        <div>+</div>
                    </div>
                    <div className="countdown">
                        <div className="hour-min">01:09</div>
                        <div className="sec">90</div>
                    </div>
                </section>
                <section className="box-wrapper">
                    <div className="box">
                        <div className="detail">
                            <div className="name">Total Sevadar</div>
                            <div className="number">989</div>
                        </div>
                        <div className="icon">+</div>
                    </div>
                    <div className="box">
                        <div className="detail">
                            <div className="name">Absent Sevadar</div>
                            <div className="number">989</div>
                        </div>
                        <div className="icon">V</div>
                    </div>
                </section>
                <section className="vani">
                    Kabir Saheb Vani
                </section>
            </div>
        </div>
    )
}

export default Home