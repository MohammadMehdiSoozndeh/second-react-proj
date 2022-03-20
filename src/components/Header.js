import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Indecision App",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in Js
// const headingStyle = {
//   color: "royalblue",
//   backgroundColor: "lightblue",
// };

export default Header;
