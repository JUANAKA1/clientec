import styles from './Payment.module.scss'

export function Payment() {
  return (
    <div className={styles.payment} >
      <h2>Metodos de pago</h2>

      <div className={styles.block} >
        <h3>Tarjeta de crédito</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}
