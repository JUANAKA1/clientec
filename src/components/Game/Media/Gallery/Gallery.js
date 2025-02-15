import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { ENV } from '@/utils';
import { map } from 'lodash';
import { FullModal } from '@/components/Shared';
import styles from './Gallery.module.scss';


export function Gallery(props) {
    const { screenshots } = props;
    const [show, setShow] = useState(false);
    const onOpenClose = () => setShow((prevState) => !prevState);

    const screenshotsClone = [...screenshots]
    const principalImage = screenshotsClone.shift();
    const urlImg = `${ENV.SERVER_HOST}`;
    
    
  return (
    <>
    <div className={styles.gallery} >
        <div className={styles.principal} >
            <Image src={`${urlImg}${principalImage.url}`} onClick={onOpenClose} />
        </div>

        <div className={styles.grid} >
            {map(screenshotsClone, (screenshots) => (
                <div key={screenshots.id}>
                    <Image src={`${urlImg}${screenshots.url}`} onClick={onOpenClose} />
                </div>
            ) )}
        </div>
    </div>
    <FullModal show={show} onClose={onOpenClose}>
        <h2>Slider de imagenes</h2>
    </FullModal>
    </>
  )
}
