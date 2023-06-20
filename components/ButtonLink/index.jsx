import Link from "next/link";
import Image from "next/image";
import styles from "@components/ButtonLink/index.module.css"
import {data} from "autoprefixer";

const ButtonLink = ({ label, url, type, dataUser }) => {
    const classes = [
        'button',
        styles[type]
    ]
    return (
        <Link className={classes.join(' ')} href={ url }>
            {
                dataUser?.image && (
                    <Image
                        width={40}
                        height={40}
                        src={ dataUser.image }
                        alt={ label }
                    />
                )
            }
            { label }
        </Link>
    );
}

export default ButtonLink;