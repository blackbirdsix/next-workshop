import styles from "./style.module.css";

const ListingCard = ({image, name, price, button}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image}/>
      <h2 className={styles.card_title}>{name}</h2>
      <p className={styles.card_price}>{price}</p>
      <a href="#" className={styles.card_button} >{button}</a>
    </div>
  );
};

export default ListingCard;
