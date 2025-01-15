import React, { ButtonHTMLAttributes } from "react";

import styles from "./Joke.module.css";

const Joke: React.FC = () => {

    const handlerGenerate: React.MouseEventHandler<HTMLButtonElement> = () => {

    }

    return (
        <div className={styles.joke}>
            <h1>Joke Generator Using React and Joke API</h1>
            <button className="generate" onClick={handlerGenerate}>
                Click to generate
            </button>
            <p className="content"></p>
        </div>
    );
}

export default Joke;