const NavBar = (props) => {
  const { navUrl } = props;
  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <a href={navUrl}>News</a>
          </li>
          <li>
            <a href={navUrl}>Business</a>
          </li>
          <li>
            <a href={navUrl}>Technology</a>
          </li>

          <li>
            <a href={navUrl}>Entertainment</a>
          </li>

          <li>
            <a href={navUrl}>Sports</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
