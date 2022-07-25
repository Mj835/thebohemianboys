import Image from "next/image";
import styles from "../styles/Home.module.css";
import SampleImg117 from "../assets/images/117.png";
import SampleImg119 from "../assets/images/119.png";
import SampleImg128 from "../assets/images/128.png";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className={styles.roadmap}>
      <h1>Team</h1>

      <div className={styles.teamWrapper}>
        <div className={styles.membersWrapper}>
          <Image
            src={SampleImg117}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 10 }}
          />
          <h3>Abcd</h3>
          <p>Designation</p>
          <a href="#">
            <FaTwitter size={26} />
          </a>
        </div>
        <div className={styles.membersWrapper}>
          <Image
            src={SampleImg119}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 10 }}
          />
          <h3>Abcd</h3>
          <p>Designation</p>
          <a href="#">
            <FaTwitter size={26} />
          </a>
        </div>
        <div className={styles.membersWrapper}>
          <Image
            src={SampleImg128}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 10 }}
          />
          <h3>Abcd</h3>
          <p>Designation</p>
          <a href="#">
            <FaTwitter size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
