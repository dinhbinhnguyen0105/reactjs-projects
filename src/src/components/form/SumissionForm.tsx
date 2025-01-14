import React from "react";
import { useState, useEffect } from "react";

import styles from "./SubmissionForm.module.css";

const SubmissionForm: React.FC = () => {
    const [formValues, setFormValue] = useState({
        email: "",
        fullname: "",
        password: "",
        get_notif: false,
    });

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    const handlerInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const currentID = e.target.id;

        setFormValue(prev => ({ ...prev, [currentID]: currentValue }));
        if (currentID === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValidEmail = emailRegex.test(currentValue);
            if (isValidEmail) { e.target.classList.remove(styles.error); }
            else { e.target.classList.add(styles.error); };
        } else if (currentID === "password") {
            if (currentValue.length < 6) { e.target.classList.add(styles.error); }
            else { e.target.classList.remove(styles.error); };
        };
    };

    return (
        <div className={styles.submissionForm}>
            <div className={styles.intro}>
                <ul>
                    <li>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="rgb(186,155,231)"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="rgb(186,155,231)" fillRule="evenodd">
                                <g id="Icon-Set" transform="translate(-100 -1139)" fill="rgb(255,255,255)">
                                    <path d="M122.027 1148.07C121.548 1147.79 120.937 1147.96 120.661 1148.43L114.266 1159.51L110.688 1156.21C110.31 1155.81 109.677 1155.79 109.274 1156.17C108.871 1156.54 108.85 1157.18 109.228 1157.58L113.8 1161.8C114.177 1162.2 114.81 1162.22 115.213 1161.84C115.335 1161.73 122.393 1149.43 122.393 1149.43C122.669 1148.96 122.505 1148.34 122.027 1148.07Z M116 1169C108.268 1169 102 1162.73 102 1155C102 1147.27 108.268 1141 116 1141C123.732 1141 130 1147.27 130 1155C130 1162.73 123.732 1169 116 1169Z M116 1139C107.164 1139 100 1146.16 100 1155C100 1163.84 107.164 1171 116 1171C124.836 1171 132 1163.84 132 1155C132 1146.16 124.836 1139 116 1139Z" id="checkmark-circle" />
                                </g>
                            </g>
                        </svg>
                        <h3>Quick and free sign-up</h3>
                        <p>Enter your email address to create an account.</p>
                    </li>
                    <li>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="rgb(186,155,231)"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="rgb(186,155,231)" fillRule="evenodd">
                                <g id="Icon-Set" transform="translate(-100 -1139)" fill="rgb(255,255,255)">
                                    <path d="M122.027 1148.07C121.548 1147.79 120.937 1147.96 120.661 1148.43L114.266 1159.51L110.688 1156.21C110.31 1155.81 109.677 1155.79 109.274 1156.17C108.871 1156.54 108.85 1157.18 109.228 1157.58L113.8 1161.8C114.177 1162.2 114.81 1162.22 115.213 1161.84C115.335 1161.73 122.393 1149.43 122.393 1149.43C122.669 1148.96 122.505 1148.34 122.027 1148.07Z M116 1169C108.268 1169 102 1162.73 102 1155C102 1147.27 108.268 1141 116 1141C123.732 1141 130 1147.27 130 1155C130 1162.73 123.732 1169 116 1169Z M116 1139C107.164 1139 100 1146.16 100 1155C100 1163.84 107.164 1171 116 1171C124.836 1171 132 1163.84 132 1155C132 1146.16 124.836 1139 116 1139Z" id="checkmark-circle" />
                                </g>
                            </g>
                        </svg>
                        <h3>Cross-platform solution</h3>
                        <p>Preview your newsletters on any device befor sending them out.</p>
                    </li>
                    <li>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="rgb(186,155,231)"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="rgb(186,155,231)" fillRule="evenodd">
                                <g id="Icon-Set" transform="translate(-100 -1139)" fill="rgb(255,255,255)">
                                    <path d="M122.027 1148.07C121.548 1147.79 120.937 1147.96 120.661 1148.43L114.266 1159.51L110.688 1156.21C110.31 1155.81 109.677 1155.79 109.274 1156.17C108.871 1156.54 108.85 1157.18 109.228 1157.58L113.8 1161.8C114.177 1162.2 114.81 1162.22 115.213 1161.84C115.335 1161.73 122.393 1149.43 122.393 1149.43C122.669 1148.96 122.505 1148.34 122.027 1148.07Z M116 1169C108.268 1169 102 1162.73 102 1155C102 1147.27 108.268 1141 116 1141C123.732 1141 130 1147.27 130 1155C130 1162.73 123.732 1169 116 1169Z M116 1139C107.164 1139 100 1146.16 100 1155C100 1163.84 107.164 1171 116 1171C124.836 1171 132 1163.84 132 1155C132 1146.16 124.836 1139 116 1139Z" id="checkmark-circle" />
                                </g>
                            </g>
                        </svg>
                        <h3>Start sending emails</h3>
                        <p>Use our API or pick our pre-built templates.</p>
                    </li>
                </ul>
            </div>
            <div className={styles.signinForm}>
                <h2>Create your account</h2>
                <form action="POST">
                    <label htmlFor="email" className={styles.signinItem}>Email
                        <input
                            className={styles.signinItemInput}
                            type="text"
                            id="email"
                            placeholder="Enter your email address"
                            onChange={handlerInputChanged}
                            value={formValues.email}
                        />
                    </label>
                    <label htmlFor="fullname" className={styles.signinItem}>Full name
                        <input
                            className={styles.signinItemInput}
                            type="text"
                            id="fullname"
                            placeholder="Enter your full name"
                            onChange={handlerInputChanged}
                            value={formValues.fullname}
                        />
                    </label>
                    <label htmlFor="password" className={styles.signinItem}>Password
                        <input
                            className={styles.signinItemInput}
                            type="password"
                            id="password"
                            placeholder="Type to create a password"
                            onChange={handlerInputChanged}
                            value={formValues.password}
                        />
                    </label>
                    <div className={`${styles.signinItem} ${styles.getNotif}`}>
                        <input
                            className={styles.signinItemInput}
                            type="checkbox"
                            id="notification"
                            onChange={e => setFormValue(prev => ({ ...prev, get_notif: e.target.checked }))}
                            checked={formValues.get_notif}
                        />
                        <label htmlFor="notification" className={styles.signinItem}>
                            Get updates and notifications about our product.
                        </label>
                    </div>
                    <button type="submit" className={styles.submitBtn} onClick={handlerSubmit}>Type to create a password</button>
                </form>
            </div>
        </div>
    );
}

export default SubmissionForm;