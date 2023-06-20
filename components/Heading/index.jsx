import {Poppins} from "next/font/google";
import styles from "@components/Heading/index.module.css"

const poppins = Poppins({
    subsets: ['latin'],
    weight: "700"
})

const Heading = ({ title, tag }) => {

    const Tag = tag || 'h1';
    const classList = [ poppins.className, styles[Tag]];

    return <Tag className={ classList.join(' ') }>{ title }</Tag>;
}

export default Heading;


