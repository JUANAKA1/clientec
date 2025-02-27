import { Dropdown, Icon, Image } from "semantic-ui-react";
import { map } from "lodash";
import { ENV, fn } from "@/utils";
import styles from "./Basket.module.scss";
import { useCart } from "@/hooks";

export function Basket(props) {
  const { games } = props;
  const urlImg = `${ENV.SERVER_HOST}`;
  const { changeQuantityItem, deleteItem } = useCart();

  const options = Array.from({ length: 50 }, (_, index) => {
    const number = index + 1;
    return { key: number, text: String(number), value: number };
  });
  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>
      <div className={styles.block}>
        {map(games, (game) => (
          <div key={game.id} className={styles.product}>
            <Image src={`${urlImg}${game.cover.url}`} alt={game.title} />
            <div>
              <div className={styles.info}>
                <div>
                  <h3>{game.title}</h3>
                  <p>{game.platform.title}</p>
                </div>
                <Icon
                  name="trash alternate outline"
                  link
                  onClick={() => deleteItem(game.documentId)}
                />
              </div>
              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={game.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(game.documentId, data.value)
                  }
                />
                <span>
                  ${fn.calcDiscountedPrice(game.price, game.discount)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
