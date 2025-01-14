import React from "react";

import SubmissionForm from "./src/components/form/SumissionForm";
import styles from "./App.module.css";

const App: React.FC = () => {

    return (
        <div className={styles.container}>
            <SubmissionForm />
        </div>
    );
};

export default App;