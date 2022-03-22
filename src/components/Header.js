import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTaskForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTaskForm ? "grey" : "green"}
        text={showAddTaskForm ? "Close" : "Add Task"}
        onClick={onAdd}
      />
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
