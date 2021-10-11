import NextImage from "next/image";
import styles from "./Image.module.css";

const Image = ({ width, maxWidth, ...rest }) => {
  let widths = {};
  width ? (widths["width"] = width) : "100%";
  maxWidth ? (widths["maxWidth"] = maxWidth) : "100%";

  return (
    <div className={styles.imageContainer} style={widths}>
      <NextImage className={styles.image} {...rest} />
    </div>
  );
};

export default Image;
