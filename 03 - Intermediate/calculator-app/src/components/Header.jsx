import DarkMode from "./DarkMode";

const Header = ({ changeTheme }) => {
  return (
    <div className="header-calculator">
      <h1>calc</h1>
      <DarkMode changeTheme={changeTheme} />
    </div>
  );
};

export default Header;
