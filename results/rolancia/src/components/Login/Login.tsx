import React, { FormEvent, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { LoginEntity } from "../../model/entity";
import { HttpClientProps } from "../../model/interfaces";
import styles from "./Login.module.css";

const Login: React.FC<HttpClientProps> = ({ httpClient }: HttpClientProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputIdRef = useRef<HTMLInputElement>(null);
  const inputPwdRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await httpClient.login(new LoginEntity(inputIdRef.current!.value, inputPwdRef.current!.value));
      history.push('/user')
    } catch (error) {
      alert("로그인에 실패했습니다~! 메롱😋");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin} ref={formRef}>
      <div className={styles.form__row}>
        <input
          className={styles.input__id}
          type="text"
          placeholder="아이디"
          ref={inputIdRef}
          required
        />
      </div>
      <div className={styles.form__row}>
        <input
          className={styles.input__pwd}
          type="password"
          placeholder="비밀번호"
          ref={inputPwdRef}
          required
        />
      </div>
      <div className={`${styles.form__row} ${styles.two}`}>
        <div className={styles.save__id}>
          <input id="save__id__check" type="checkbox" />
          <label className={styles.save__id__label} htmlFor="savdId">
            아이디 저장
          </label>
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
