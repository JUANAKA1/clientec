import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { forEach, map } from "lodash";
import { Cart } from "@/api";
import { useAuth, useCart } from "@/hooks";
import { fn } from "@/utils";
import styles from "./Resume.module.scss";
import { useRouter } from "next/router";

const cartCtrl = new Cart();

export function Resume(props) {
  const { games, addressSelected } = props;
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let totalTemp = 0;
    forEach(games, (game) => {
      const price = fn.calcDiscountedPrice(game.price, game.discount);
      totalTemp += price * game.quantity;
    });
    setTotal(totalTemp.toFixed(2));
  }, [games]);

  const onPay = async () => {
    setLoading(true);
    goToStepEnd();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const goToStepEnd = () => {
    router.replace({ query:{...router.query, step:3}})
  }
  if (!total) return null;
  return (
    <div className={styles.resume}>
      <h2>ResumeN</h2>
      <div className={styles.block}>
        <div className={styles.products}>
          {map(games, (game) => (
            <div key={game.id} className={styles.product}>
              <div>
                <p>{game.title}</p>
                <span>{game.platform.title}</span>
              </div>
              <span>
                {game.quantity > 0 && `${game.quantity} x `}$
                {fn.calcDiscountedPrice(game.price, game.discount)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>$ {total}</span>
        </div>
        <Button primary fluid disabled={!addressSelected} onClick={onPay} loading={loading} >
          Pagar
        </Button>
      </div>
    </div>
  );
}
