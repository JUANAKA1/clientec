import { useState } from "react";
import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import { BasicLayout } from "@/layouts";
import { Info, Settings, Address } from "@/components/Account";
import { Separator } from "@/components/Shared";
import styles from "./account.module.scss";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [ reload, setReload ] = useState(false);

  if (!user) {
    router.push("/");
    return null
  }

  const onReload = () => setReload((prevState) => !prevState);


  const panes = [
    {
      menuItem: 'Mis pedidos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mi lista de deseos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Direcciones',
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {icon:"settings", content: 'Ajustes'},
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameFrom />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        icon: "log out",
        content: "",
        onClick: logout,
      }
    }
  ];

  return (
    <>
      <BasicLayout isContainer relative>
        <Info />

        <Tab 
          menu={{secondary: true, pointing: true }} 
          panes={panes} 
          className={styles.tabs}
        />

      </BasicLayout>
    </>
  );
}
