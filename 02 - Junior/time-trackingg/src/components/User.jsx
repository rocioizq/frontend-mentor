export default function User(props) {
    return (
        <>
            <div className="user-card animate__animated animate__backInLeft">
                <div className="user-data">
                    <img src={props.userImage} alt="user image logo" />
                    <div className="user-name">
                        <h1>Report for</h1>
                        <span>{props.name}</span>
                    </div>
                </div>

                <div className="time-tracking">
                    <button onClick={() => props.setTimeframe("daily")} className={props.timeframe === "daily" ? "active" : ""} >Daily</button>
                    <button onClick={() => props.setTimeframe("weekly")} className={props.timeframe === "weekly" ? "active" : ""} >Weekly </button>
                    <button onClick={() => props.setTimeframe("monthly")} className={props.timeframe === "monthly" ? "active" : ""} >Monthly </button>
                </div>
            </div>
        </>
    )
}