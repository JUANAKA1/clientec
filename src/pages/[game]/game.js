import { BasicLayout } from '@/layouts'
import { Game } from '@/components/Game';
import { ENV } from '@/utils';

export default function GamePage(props) {
    const { game } = props;
    console.log(props);
    const wallpaper = `${ENV.SERVER_HOST}${game.wallpaper.url}`
    console.log(wallpaper);
    
  return (
    <>
    <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper} />
    </BasicLayout>
    </>
  )
}
