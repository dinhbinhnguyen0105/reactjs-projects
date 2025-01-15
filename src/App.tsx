import React from "react";

// import SubmissionForm from "./src/components/form/SumissionForm";
// import Joke from "./src/components/jokes/Jokes";
import PasswordValidator from "./src/components/passwordValidator/PasswordValidator";

import styles from "./App.module.css";

const App: React.FC = () => {

    return (
        <div className={styles.container}>
            {/* <SubmissionForm /> */}
            {/* <Joke /> */}
            <PasswordValidator />
        </div>
    );
};

export default App;