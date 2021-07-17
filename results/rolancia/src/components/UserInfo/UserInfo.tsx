import React, { MouseEvent, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { UserEntity } from "../../model/entity";
import { HttpClientProps } from "../../model/interfaces";
import styles from "./UserInfo.module.css";

const UserInfo: React.FC<HttpClientProps> = ({ httpClient }: HttpClientProps) => {
  const [user, setUser] = useState<UserEntity | null>();
  const history = useHistory();

  useEffect(() => {
    httpClient.getUserInfo().then((res) => {
      const { account, id, level, name } = res.data;
      setUser(new UserEntity(id, account, name, level));
    });
  }, [httpClient]);

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    httpClient.logout();
    history.push('/')
    alert('로그아웃이 성공적이네요~!😋')
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.form__row}>
        <label className={styles.userInfo__label}>ID</label>
        <input
          className={styles.input__id}
          type="text"
          readOnly
          value={user?.id}
        />
      </div>
      <div className={styles.form__row}>
        <label className={styles.userInfo__label}>Name</label>
        <input
          className={styles.input__id}
          type="text"
          readOnly
          value={user?.name}
        />
      </div>
      <div className={styles.form__row}>
        <label className={styles.userInfo__label}>Account</label>
        <input
          className={styles.input__id}
          type="text"
          readOnly
          value={user?.account}
        />
      </div>
      <div className={styles.form__row}>
        <label className={styles.userInfo__label}>Level</label>
        <input
          className={styles.input__id}
          type="text"
          readOnly
          value={user?.level}
        />
      </div>
      <div className={`${styles.form__row} ${styles.two}`}>
        <div className={styles.form__row}>
          <button className={styles.logout__btn} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
