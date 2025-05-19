export default function DarkMode({ theme, changeTheme }) {
  return (
    <div className="dark-mode-container">
      <h3>THEME</h3>
      <div className="container-switch">
        <div className="theme-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <label className="switch">
            <span className="slider-multi"></span>
            <input
                type="range"
                min="1"
                max="3"
                value={theme}
                onChange={(e) => changeTheme(Number(e.target.value))}
            />
        </label>
      </div>
    </div>
  );
}
