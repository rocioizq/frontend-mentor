export default function Tracking(props) {
    return (
        <div className={`card ${props.className} animate__animated animate__zoomIn`}>
            <div className="card-image ">
                <img src={props.cardImage} alt={`${props.title} icon`}/>
            </div>
            <div className="tracking">
                <h1>{props.title}</h1>
                <div className="hours-row">
                    <h2>{props.time}hrs</h2>
                    <p>Last Week - {props.lastWeek}hrs</p>
                </div>
            </div>
        </div>
    )
}