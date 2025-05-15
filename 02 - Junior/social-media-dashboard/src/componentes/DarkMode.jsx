export default function DarkMode({changeTheme}) {
    return(
        <div className="dark-mode-container">
            <h3>Dark Mode</h3>
            <div className="container-switch">
                <label className="switch">
                    <input type="checkbox" onClick={changeTheme}/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}