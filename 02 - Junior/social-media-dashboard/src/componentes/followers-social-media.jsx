export default function Followers(props) {
    return (
        <div className={`card-followers ${props.className}`}>
            <div className="card-social-media">
                <img src={props.image} alt={`${props.platform} image logo`} />
                <p>{props.username}</p>
            </div>
            <div className="card-data">
                <h1>{props.followers}</h1>
                <h2>followers</h2>

                <div className="charge">
                    <img src={props.arrow} alt="arrow icon" />
                    <p>{props.todayChange} Today</p>
                </div>
                
            </div>
        </div>
    )
}