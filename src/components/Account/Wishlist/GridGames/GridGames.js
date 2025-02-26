import Link from "next/link";
import { map } from "lodash";
import { Label } from "@/components/Shared";
import { ENV, fn } from "@/utils";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { wishlist } = props;
  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.game;
        const cover = game.cover;
        const urlImg = `${ENV.SERVER_HOST}`;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.slug}`}>
              <div>
                <img src={`${urlImg}${cover.url}`} />

                {game.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.discount}%`}
                  </Label.Discount>
                )}
              </div>
              <div>
                <span>{game.title}</span>
                <span className={styles.price}>
                  ${fn.calcDiscountedPrice(game.price, game.discount)}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
