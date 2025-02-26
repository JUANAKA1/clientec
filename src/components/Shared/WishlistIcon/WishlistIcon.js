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

    const addWishlist = async() => {
      const response = await wishlistCtrl.add(user.documentId, gameId);
      setHasWishlist(response);
      
    }
    
    const deleteWishlist = async() => {
      try {
        await wishlistCtrl.delete(hasWishlist.documentId);
        setHasWishlist(false);
      } catch (error) {
        console.error(error);
      }
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
