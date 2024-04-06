import storeInfo from "./storeInfo";
import styles from "./page.module.css";
import ListingCard from "./components/ListingCard";

export default function Home() {
  const image1 = "./assets/item6.jpg";
  const name1 = "Not a cannon";
  const price1 = "10 Dabloons";
  const button = "Add to Ship"

  const image2 = "./assets/item3.jpg"
  const name2 = "third leg";
  const price2 = "5 Dabloons";

  const image3 = "./assets/item4.jpg"
  const name3 = "captain hook asmr";
  const price3 = "100 Dabloons";

  const image4 = "./assets/item5.jpg"
  const name4 = "avatar slayer";
  const price4 = "20 Dabloons";

  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace</h1>
      <ListingCard
        image={image1}
        name={name1}
        price={price1}
        button={button}
      />
      <ListingCard
        image={image2}
        name={name2}
        price={price2}
        button={button}
      />
      <ListingCard
        image={image3}
        name={name3}
        price={price3}
        button={button}
      />
      <ListingCard
        image={image4}
        name={name4}
        price={price4}
        button={button}
      />
    </main>
  );
}
