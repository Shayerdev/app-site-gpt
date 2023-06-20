import {Open_Sans} from "next/font/google";
import styles from "@components/Paragraph/index.module.css";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: "400"
})


const Paragraph = ({ text , type}) => {

    const typeSize = type || 'sml'
    const classes = [openSans.className, styles[typeSize]];

    return <p className={ classes.join(' ') }>{ text }</p>
}

export default Paragraph;