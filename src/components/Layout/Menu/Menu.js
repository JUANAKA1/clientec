import { useEffect, useState } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import { map } from "lodash";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { ENV } from "@/utils";
import classNames from "classnames";

const platformCtrl = new Platform();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [platforms, setPlatforms] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const openCloseSearch = () => setShowSearch(prevState => !prevState);


    useEffect(() => {
        (async () => {
            try {
                const response = await platformCtrl.getAll();
                setPlatforms(response.data);
            } catch (error) {
                console.error(error);
            }
        } )();

    }, []);

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.slug}`}>
                    <Image src={`${ENV.SERVER_HOST}${platform.icon.url}`}/>
                    {platform.title}
                </Link>
            ))}

            <button 
            className={styles.search} 
            onClick={ openCloseSearch }>
                <Icon name="search"/>
            </button>

            <div className={classNames(styles.inputContainer, {
                [styles.active]: showSearch,
            })}>
                <Input 
                    id="search-games" 
                    placeholder="Buscardor" 
                    className={styles.input}
                    focus={true}
                />
                <Icon 
                    name="close" 
                    className={styles.closeInput}
                    onClick={ openCloseSearch }
                />
            </div>
        </div>
    );
}