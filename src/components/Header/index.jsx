import styles from './style.module.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [url, changeUrl] = useState('/');
    let path;
    if(url === '/') {
        path = <Link className={styles.login_button} onClick={ ()=> changeUrl('/LogIn') } to ='/LogIn'>LogIn</Link>
    } else {
        path = <Link className={styles.login_button} onClick={ ()=> changeUrl('/') } to = '/'>SignUp</Link>
    }
    return (
        <header className={styles.header} >
            <div className={styles.header_container}>
            <div className={styles.header_logo_wrapper}>
                <img className={styles.header_logo_img} src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
            </div>
            <div>
                {path}
            </div>
            </div>
        </header>
    );
}

export default Header;