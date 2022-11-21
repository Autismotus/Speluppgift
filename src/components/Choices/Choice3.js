import { useNavigate } from "react-router-dom"

const Choice3 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice-btn">
            <button className="choice-btn" onClick={() => { navigate("/Goal") }}>Arrow</button>
            <button className="choice-btn" onClick={() => { navigate("/death3") }}>Arrow</button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
        </div>
    )
}
export default Choice3;