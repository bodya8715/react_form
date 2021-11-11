import styles from './style.module.scss';

function Header({isLoggedIn, changePage}) {
 return (
    <header className={styles.header} >
        <div className={styles.header_container}>
        <div className={styles.header_logo_wrapper}>
            <img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
        </div>
        <div>
            <a className={styles.login_button} onClick={()=>changePage(!isLoggedIn)} type='button'>Login</a>
        </div>
        </div>
    </header>
 );
}

export default Header;