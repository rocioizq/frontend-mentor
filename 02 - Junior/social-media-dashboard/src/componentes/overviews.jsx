export default function Overview(props) {
    return(
        <div className={`card-overview ${props.className}`}>
            <div className="views">
                <p>{props.metric}</p>
                <span>{props.value}</span>
            </div>
            <div className="social-media">
                <img src={props.image}/>
                <div className="percent">
                    <img id="percent-img" src={props.arrow} alt="arrow icon" />
                    <p>{props.changePercent}%</p>
                </div>
            </div>

            
        </div>
    )
}