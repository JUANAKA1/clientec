import { Order as OrderCtrl } from "@/api"
import { NoResult } from "@/components/Shared";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Order } from "./Order";


const orderCtrl = new OrderCtrl();
export function Orders() {
    const [ orders, setOrders ] = useState(null);
    const { user } = useAuth();
    console.log(orders);
    
    useEffect(() => {
        (async () => {
            try {
                const response = await orderCtrl.getAll(user.id);
                setOrders(response.data);
                
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    if(!orders) return <NoResult text="No tienes ningun producto comprado" />;
  return (
    <div>
      {map(orders, (order) =>(
        <Order key={order.id} order={order}
        />
      ))}
    </div>
  )
}
