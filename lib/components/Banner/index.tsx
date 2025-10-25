import { motion } from "motion/react";
import closeButton from "../../assets/banner/close-button.svg";
import scottyDog from "../../assets/banner/scotty-dog.svg";
import "./style.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Banner = ({ projectName }: { projectName: string }) => {
    const [closed, setIsClosed] = useLocalStorage("welcome-banner-closed");

    const closeBanner = () => {
        setIsClosed("true");
    };

    return (
        <motion.div
            className="welcome-banner-container"
            animate={{ height: closed === null ? "auto" : 0 }}
            initial={{ height: closed === null ? "auto" : 0 }}
        >
            <div className="welcome-banner">
                <div className="welcome-banner__spacer" />
                <div className="welcome-banner__text welcome-banner-padding">
                    <span className="welcome-banner__text--long">
                        <img src={scottyDog} alt="" />
                        <span>
                            Interested in Tech/Design or want to help build the
                            future of {projectName}? Join{" "}
                            <a
                                href="https://tartanconnect.cmu.edu/scottylabs/club_signup"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 underline"
                            >
                                Scottylabs
                            </a>
                            !
                        </span>
                    </span>
                    <span className="welcome-banner__text--short">
                        Interested in Tech/Design? Join{" "}
                        <a
                            href="https://tartanconnect.cmu.edu/scottylabs/club_signup"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 underline"
                        >
                            ScottyLabs
                        </a>
                        !{" "}
                    </span>
                </div>
                <div className="welcome-banner__close welcome-banner-padding welcome-banner-padding--button">
                    <button
                        type="button"
                        aria-label="close-banner"
                        onClick={closeBanner}
                    >
                        <img src={closeButton} alt="" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
