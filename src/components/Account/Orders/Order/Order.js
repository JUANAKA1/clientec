import { DateTime } from "luxon";
import styles from "./Order.module.scss";
import { forEach, map } from "lodash";
import { useState } from "react";
import { Image } from "semantic-ui-react";
import { ENV, fn } from "@/utils";
import { BasicModal } from "@/components/Shared";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);

  const createdAt = new Date(order.createdAt).toISOString();
  const products = order.products;
  const address = order.addressShipping;
  const urlImg = `${ENV.SERVER_HOST}`;

  const openCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalProducts = () => {
    let total = 0;
    forEach(products, (product) => {
      total += product.quantity;
    });
    return total;
  };

  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>
          <p>{getTotalProducts()} productos</p>
        </div>
        <p>${order.totalPayment.toFixed(2)}</p>
      </div>
      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Informacion del pedido"
      >
        {map(products, (product) => (
          <div className={styles.product}>
            {/* <Image src={`${urlImg}${product.cover.url}`} /> */}
            <div>
              <div className={styles.info}>
                <div>
                  <p>Titulo</p>
                  <p>{product.title}</p>
                  {/* <p>{product.platform.title}</p> */}
                  <p>platform</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>$4223</span>
                {/* <span>$ {fn.calcDiscountedPrice(product.price, product.discount)}</span> */}
              </div>
            </div>
          </div>
        ))}
        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.title} </p>
            <p className={styles.addressInfo}>
              {address.name}, {address.address}, {address.state}, {address.city}
              , {address.postal_code}
            </p>
          </div>
        </div>
        <div className={styles.total} >
            <p>TOTAL :  ${order.totalPayment.toFixed(2)}</p>

        </div>
      </BasicModal>
    </>
  );
}
