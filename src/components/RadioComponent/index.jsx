import styles from './style.module.scss';

function RadioComponent({name, type, value}) {
    return (
        <div className={styles.form_radio_wrapper}>
            <label className={styles.form_radio_item}>
                <input name={name} type={type} value={value}/>
                <div className={styles.form_radio_inner}>
                  <h3>Join As a Buyer</h3>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
            </label>
        </div>
    );
}

export default RadioComponent;