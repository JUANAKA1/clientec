import { useRouter } from "next/router";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";
import { useEffect, useState } from "react";
import { Game } from "@/api";
import { Cart } from "@/components/Cart";

const gameCtrl = new Game();

export default function CartPage() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);
  const [games, setGames] = useState(null);
  const { cart } = useCart();
  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }

        setGames(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);
  return (
    <>
      <CartLayout>
        {currentStep === 1 && <Cart.StepOne games={games} />}
        {currentStep === 2 && <p>2</p>}
        {currentStep === 3 && <p>3</p>}
      </CartLayout>
    </>
  );
}
