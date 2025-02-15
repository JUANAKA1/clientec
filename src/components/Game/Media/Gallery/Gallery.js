import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { ENV } from '@/utils';
import { map } from 'lodash';
import Slider from "react-slick";
import { FullModal } from '@/components/Shared';
import styles from './Gallery.module.scss';


export function Gallery(props) {
    const { screenshots } = props;
    const [show, setShow] = useState(false);
    const onOpenClose = () => setShow((prevState) => !prevState);

    const screenshotsClone = [...screenshots]
    const principalImage = screenshotsClone.shift();
    const urlImg = `${ENV.SERVER_HOST}`;
    
    const settings = {
        dots: true,
        dotsClass: styles.dots,
        infinite: true,
        slidersToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (index) {
            return <Image src={`${urlImg}${screenshots[index].url}`} />;
        },
    };
    
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
        <div className={styles.carouselContainer} >
            <Slider {...settings} >
                {map(screenshots, (screenshot) => (
                    <div key={screenshot.id}>
                        <Image src={`${urlImg}${screenshot.url}`} />
                    </div>
                ))}    
            </Slider>
        </div>
    </FullModal>
    </>
  )
}
