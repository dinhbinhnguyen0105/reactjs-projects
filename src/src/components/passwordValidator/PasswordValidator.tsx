import React from "react";
import { useState } from "react";
import validator from "validator";

import styles from "./PasswordValidator.module.css";

const PasswordValidator: React.FC = () => {
    const [isStrong, setIsStrong] = useState();

    const handlerPassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        setIsStrong(validator.isStrongPassword(currentValue));
    }

    return (
        <div className={styles.passwordValidator}>
            <h1>checking password strength in reactjs</h1>
            <label htmlFor="password">
                Enter password
                <input type="text" onChange={handlerPassWordChange} />
            </label>
            <span className={`${styles.message} ${!isStrong ? styles.error : ""}`}>
                {
                    !isStrong ? (
                        "Is not strong password"
                    ) : (
                        "Is strong password"
                    )
                }
            </span>
        </div>
    );
}

export default PasswordValidator;