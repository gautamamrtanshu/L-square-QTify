import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
//import PropTypes from "prop-types";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text={"Give Feedback"} />
    </nav>
  );
}
// Navbar.propTypes = {
//   searchData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       title: PropTypes.string.isRequired,
//       slug: PropTypes.string.isRequired,
//       songs: PropTypes.arrayOf(
//         PropTypes.shape({
//           artists: PropTypes.arrayOf(PropTypes.string).isRequired,
//         })
//       ).isRequired,
//     })
//   ),
// };

// Navbar.defaultProps = {
//   searchData: [],
// };
export default Navbar;
