import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { BarTrust, Separator, BannerAd } from "@/components/Shared";

const platformsId = {
  playstation: 2,
  xbox: 4, //id de platform en strapi no conside con el de la consola, hay sumar +1
  nintendo: 8,
  pc: 6,
}

export default function HomePage() {
  return (
    <>
      <BasicLayout >
      <Separator height={100} /> 

        <Home.BannerLastGamePublished /> 

        <Separator height={100} />
        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames 
          
            title="PlayStation" 
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} />

        <BannerAd 
          title="Regístrate y obten los mejores precios" 
          subtitle="¡Compara y compra los mejores juegos!"
          btnTitle="Regístrate ahora"
          btnLink="/account"
          image="images/img01.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestGames 
          
            title="Xbox" 
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>

        <Separator height={100} />

      </BasicLayout>
    </>
    
  );
}
