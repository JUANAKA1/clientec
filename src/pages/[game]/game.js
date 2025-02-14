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
        <Game.Panel gameId={game.id} game={game} />
        <Separator height={50} />

        <Game.Info game={game} />
    </BasicLayout>
    </>
  )
}
