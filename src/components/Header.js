
import './Header.css';
import styles from './Header.module.css';

function Header() {

    const myStyle = {
        color: "red",
        background: 'lightblue',
        padding: '10px',
        FontFamily: 'Sans-serif',

    }
    return <>
        {/* <h1 style={myStyle}>Hello styling</h1> */}
        <h1 className={styles.bigblue}>Hello This is Blue!</h1>
        <p>Add a little style</p>
    </>

}

export default Header;