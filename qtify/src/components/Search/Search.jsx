import styles from "./Search.module.css";
//import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
//import { ReactComponent as TestIcon } from "../../assets/test.svg";
import { useAutocomplete } from "@mui/base";
import { styled } from "@mui/system";
//import { truncate } from "../../helpers/helpers";
//import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
//import { Tooltip } from "@mui/material";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    // getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    navigate(`/album/${value.slug}`);
    //Process form data, call API, set state etc.
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            {/* <SearchIcon /> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3257 12.8987L19.7057 18.2787C19.8948 18.468 20.001 18.7246 20.0009 18.9921C20.0008 19.2596 19.8945 19.5161 19.7052 19.7052C19.516 19.8943 19.2594 20.0005 18.9919 20.0004C18.7244 20.0003 18.4678 19.894 18.2787 19.7047L12.8987 14.3247C11.2905 15.5704 9.26802 16.1566 7.24287 15.9641C5.21772 15.7716 3.34198 14.8148 1.99723 13.2884C0.652477 11.7619 -0.0602651 9.78056 0.00399633 7.74729C0.0682577 5.71402 0.904695 3.7816 2.34315 2.34315C3.7816 0.904695 5.71402 0.0682577 7.74729 0.00399633C9.78056 -0.0602651 11.7619 0.652477 13.2884 1.99723C14.8148 3.34198 15.7716 5.21772 15.9641 7.24287C16.1566 9.26802 15.5704 11.2905 14.3247 12.8987H14.3257ZM8.00074 13.9997C9.59204 13.9997 11.1182 13.3676 12.2434 12.2424C13.3686 11.1172 14.0007 9.59104 14.0007 7.99974C14.0007 6.40845 13.3686 4.88232 12.2434 3.7571C11.1182 2.63189 9.59204 1.99974 8.00074 1.99974C6.40944 1.99974 4.88332 2.63189 3.7581 3.7571C2.63289 4.88232 2.00074 6.40845 2.00074 7.99974C2.00074 9.59104 2.63289 11.1172 3.7581 12.2424C4.88332 13.3676 6.40944 13.9997 8.00074 13.9997Z"
                fill="#121212"
              />
            </svg>
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            // console.log(option);
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
                key={index}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>

                  <p className={styles.albumArtists}>{artists.join(", ")}</p>
                </div>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}

// Search.propTypes = {
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
//   placeholder: PropTypes.string,
// };

// Search.defaultProps = {
//   searchData: [],
//   placeholder: "Search...",
// };

export default Search;
