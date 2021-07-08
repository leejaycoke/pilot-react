import React from "react";
import { HttpClientProps } from '../../model/interfaces';
import styles from "./Login.module.css";

const Login: React.FC<HttpClientProps> = ({ httpClient }: HttpClientProps)=> {
  return (
    <form className={styles.form}>
      <div className={styles.form__row}>
        <input className={styles.input__id} type="text" placeholder="아이디" />
      </div>
      <div className={styles.form__row}>
        <input className={styles.input__pwd} type="password" placeholder="비밀번호" />
      </div>
      <div className={`${styles.form__row} ${styles.two}`}>
        <div className={styles.save__id}>
          <input id="save__id__check" type="checkbox" />
          <label className={styles.save__id__label}htmlFor="savdId">아이디 저장</label>
        </div>
        <ul className={styles.menus}>
          <li className={styles.menu}>
            <button className={styles.menu__btn}>아이디</button>
          </li>
          <li className={styles.menu}>
            <button className={styles.menu__btn}>비밀번호 찾기</button>
          </li>
          <li className={styles.menu}>
            <button className={styles.menu__btn}>회원가입</button>
          </li>
        </ul>
      </div>
      <div className={styles.form__row}>
        <button className={styles.login__btn}>로그인</button>
      </div>
    </form>
  );
};

export default Login;
