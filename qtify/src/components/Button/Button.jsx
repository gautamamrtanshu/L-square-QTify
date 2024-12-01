//import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
// Button.propTypes = {
//   text: PropTypes.string.isRequired, // 'text' must be a string and is required
// };

export default Button;
