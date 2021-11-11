import styles from './style.module.scss';

function Form_row(props) {
    return (
        <div className={styles.form_row}>
            {props.children}
        </div>
    );
}

export default Form_row;