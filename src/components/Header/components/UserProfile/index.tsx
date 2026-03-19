import styles from "./styles.module.css"

import TransmissionIcon from "./../../../../assets/icons/transmissionIcon.svg"
import User from "./../../../../assets/global/user.jpg"

export function UserProfile() {
    return (
        <div className={styles.container}>
            <button>
                <img src={TransmissionIcon} alt="Logo da Transmissão" />
            </button>
            <figure>
                <img src={User} alt="User Profile" />
                <figcaption>User</figcaption>
            </figure>
        </div>
    )
}