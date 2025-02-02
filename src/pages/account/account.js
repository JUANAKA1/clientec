import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import { BasicLayout } from "@/layouts";
import { Info, Settings } from "@/components/Account";
import styles from "./account.module.scss";
import { Separator } from "@/components/Shared";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null
  }


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
          <p>Mis direcciones...</p>
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
