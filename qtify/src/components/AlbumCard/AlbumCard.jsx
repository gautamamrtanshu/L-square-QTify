import Chip from "@mui/material/Chip";
import styles from "./Album.module.css";

function AlbumCard({ img, follower, name }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgChipWrapper}>
        <img src={img && img} className={styles.img} />
        <Chip
          className={styles.chip}
          label={`${follower && follower} Follows`}
          variant="outlined"
        />
      </div>
      <div className={styles.text}>{name && name}</div>
    </div>
  );
}

export default AlbumCard;
