import { BasicLayout } from '@/layouts'
import { Game } from '@/components/Game';
import { ENV } from '@/utils';
import { Separator } from '@/components/Shared';

export default function GamePage(props) {
    const { game } = props;
    const wallpaper = `${ENV.SERVER_HOST}${game.wallpaper.url}`;
    
  return (
    <>
    <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper} />
        <Game.Panel 
          gameId={game.documentId} // game.id se cambia por game.documentId
          game={game} 
        />
        <Separator height={50} />

        <Game.Info game={game} />

        <Separator height={30} />

        <Game.Media 
          video={game.video} 
          screenshots={game.screenshots}
        />

        <Separator height={50} />

    </BasicLayout>
    </>
  )
}
