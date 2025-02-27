import { useEffect, useState } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./Addresses.module.scss";
import { map } from "lodash";
import classNames from "classnames";

const addressCtrl = new Address();
export function Addresses(props) {
  const { addressSelected, setAddressSelected } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();
  console.log(addressSelected);
  

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className={styles.addresses}>
      <h2>Dirección</h2>
      {map(addresses, (address) => (
        <div
          key={address.id}
          onClick={() => setAddressSelected(address)}
          className={classNames(styles.address, {
            [styles.active]: address.id === addressSelected?.id,
          })}
        >
          <p>
            {address.name} ({address.title})
          </p>
          <p>
            {address.address}, {address.postal_code}, {"  "},{address.city},{" "}
            {address.state}
          </p>
        </div>
      ))}
    </div>
  );
}
