import styles from "@components/Button/index.module.css"

const Button = ({ label, action, type = 'default'}) => {

    const classLists = [
        'button',
        styles[type]
    ];

    return (
        <button onClick={ () => action() } className={ classLists.join(' ')}>{ label }</button>
    );
}

export default Button;