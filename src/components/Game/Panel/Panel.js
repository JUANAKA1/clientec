import { Button, Container, Icon, Image } from "semantic-ui-react";
import styles from "./Panel.module.scss";
import { ENV, fn } from "@/utils";
import { WishlistIcon } from "@/components/Shared";

export function Panel(props) {
    const { gameId, game } = props;

    const img = `${ENV.SERVER_HOST}${game.cover.url}`;
    const platform = game.platform;
    const imgPlatform = `${ENV.SERVER_HOST}${platform.icon.url}`;

    const buyPrice = fn.calcDiscountedPrice(game.price, game.discount);

    return (
      <Container className={styles.panel}>
        <div className={styles.imgContainer}>
            <Image src={img} />
        </div>
        <div className={styles.actionsContainer} >
            <div>
                <h2>{game.title}</h2>

                <div className={styles.moreInfo}>
                    <span >
                        <Image src={imgPlatform} />
                        {platform.title}
                    </span>
                    <span>
                        <Icon name="check" />
                        En stock
                    </span>
                </div>
                <div className={styles.price}>
                    {game.discount > 0 && (
                        <>
                            <span className={styles.originalPrice} >
                                <Icon name="tag" />
                                ${game.price}
                            </span>
                            <span className={styles.discount} >
                                -{game.discount}%
                            </span>
                        </>
                    )}
                    <span className={styles.price} >
                        ${buyPrice}
                    </span>
                </div>
                <Button primary fluid >
                    Comprar
                </Button>
                
                <WishlistIcon gameId={gameId} className={styles.heart} />
            </div>
        </div>
      </Container>
    );

}
