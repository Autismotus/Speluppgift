import { useNavigate } from "react-router-dom"

const Choice1 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice1">
        <div className="choice-btn">
            <button className="choice-btn" onClick={() => { navigate("/choice2") }}>Arrow</button>
            <button className="choice-btn" onClick={() => { navigate("/Death1") }}>Arrow</button>
            <button className="exit-btn1" onClick={() => { navigate("/menu") }}>Exit</button>
            </div>
            </div>

    
    )
}
export default Choice1;
