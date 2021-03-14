import NavBar from "./NavBar";

const Header = (props) => {
  const { appName } = props;
  return (
    <header className="header">
      <section className="logo-section">
        <a href="./">{appName}</a>
      </section>

      <section className="nav-header-section">
        <NavBar appName={appName} navUrl={"#"} />
      </section>
    </header>
  );
};

export default Header;
