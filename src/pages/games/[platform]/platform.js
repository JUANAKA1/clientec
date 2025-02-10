import { GridGames, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

export default function PlatformPage(props) {
    const { games, platform, pagination } = props;
    const hasProducts = size(games) > 0;
    
  return (
    <>
      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2>{platform.title}</h2>

          {hasProducts ? (
            <>
              <GridGames games={games} />
            </>
          ):(
            <p>No results</p>
          )}
          
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}

