import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";
import { Wishlist } from "@/api";
import styles from "./WishlistIcon.module.scss";
import { useAuth } from "@/hooks";
import { add } from "lodash";

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {
    const { gameId, className } = props;
    const [ hasWishlist, setHasWishlist ] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
      (async () => {
        try {
          const response = await wishlistCtrl.check(user.documentId, gameId);
          setHasWishlist(response);
          
        } catch (error) {
          setHasWishlist(false);
          console.error(error);
        }
      })();
    }, [gameId]);

    const addWishlist = () => {
      console.log("addWishlist" )
    }
    
    const deleteWishlist = () => {
      console.log("deleteWishlist" )
    }

    if (hasWishlist === null) return null;

  return (
    <Icon 
        name={hasWishlist ? 'heart' : 'heart outline'}
        onClick={hasWishlist ? deleteWishlist : addWishlist}
        className={classNames(styles.wishlistIcon, {
            [className]: className,
    })} />
  )
}
