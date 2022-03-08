import styles from "./styles.module.css";

/*
styles.css leri module olarak kullandığımızda classNamelerimiz çakışmadan hayatına devam edebiliyor.
css dosyalarımızın adını ilk başta styles.module.css olarak değiştirip sonrada yukarda kullanılan import gibi projemize dahil ediyoruz.
*/

console.log("A", styles);

function A() {
  return (
    <div className={styles.title}>A</div>
  )
}

export default A