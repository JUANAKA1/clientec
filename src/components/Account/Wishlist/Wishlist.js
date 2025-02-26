import { useEffect, useState } from "react"
import { size } from "lodash";
import { Wishlist as WishlistCtrl } from "@/api"
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { GridGames } from "./GridGames";

const wishlistCtrl = new WishlistCtrl()
export function Wishlist() {
    const [wishlist, setWishlist] = useState(null);
    const {user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                if (user) {
                    const response = await wishlistCtrl.getAll(user.documentId);
                    setWishlist(response);
                }
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

  return size(wishlist) === 0 ? (
    <NoResult text="No tienes ningun juego en la lista de deseos" />
  ) : (
    <GridGames wishlist={wishlist} />
  )
}
