import styles from './style.module.scss';

function Header({isLoggedIn, changePage}) {
 return (
    <header className={styles.header} >
        <div className={styles.header_container}>
        <div className={styles.header_logo_wrapper}>
            <img className={styles.header_logo_img} src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
        </div>
        <div>
            <a className={styles.login_button} onClick={()=>changePage(!isLoggedIn)} type='button'>{isLoggedIn?'SignUp':'Login'}</a>
        </div>
        </div>
    </header>
 );
}

export default Header;