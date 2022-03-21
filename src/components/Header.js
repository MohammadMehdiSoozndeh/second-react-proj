import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header class="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
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
