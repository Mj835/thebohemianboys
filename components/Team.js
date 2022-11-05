import Image from "next/image";
import styles from "../styles/Home.module.css";
import SampleImg117 from "../assets/images/117.png";
import SampleImg119 from "../assets/images/119.png";
import SampleImg128 from "../assets/images/128.png";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div name="team" className={styles.roadmap}>
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
          <h3>Excursionist</h3>
          <p>Founder</p>
          {/* <a href="#">
            <FaTwitter size={26} />
          </a> */}
        </div>
        <div className={styles.membersWrapper}>
          <Image
            src={SampleImg119}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 10 }}
          />
          <h3>Rhapsody</h3>
          <p>Tech</p>
          {/* <a href="#">
            <FaTwitter size={26} />
          </a> */}
        </div>
        <div className={styles.membersWrapper}>
          <Image
            src={SampleImg128}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: 10 }}
          />
          <h3>MoonClub</h3>
          <p>Marketing</p>
          {/* <a href="#">
            <FaTwitter size={26} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
