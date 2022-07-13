import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import AutoPlay from "../components/Slider";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Badboyz-nft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar}>
        <h1>Badboyz-nft</h1>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Roadmap</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>

          <div className={styles.socialIcons}>
            <a href="#">
              <FaDiscord size={26} />
            </a>
            <a href="#">
              <FaTwitter size={26} />
            </a>
            <a href="#">
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.pagePadding}>
          <div className={styles.containerLarge}>
            <div className={styles.paddingXhuge}>
              <div className={styles.homeHeader_component}>
                <div className={styles.textAlignCenter}>
                  <div className={styles.maxWidthLarge}>
                    <div className={styles.marginSmall}>
                      <h1>The project that inspired the modern Badboyz</h1>
                    </div>
                    <div className={styles.marginMedium}>
                      <div className={styles.maxWidthSmall}>
                        <p>
                          10,000 unique collectible characters with proof of
                          ownership stored on the Ethereum blockchain.
                        </p>
                      </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <a id="mint-button" href="#" className={styles.button}>
                        Mint now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div style={{ marginBottom: 50 }}>
        <AutoPlay />
      </div>

      <footer className={styles.footer}>
        <h1>Badboyz-nft</h1>

        <div>
          <a href="#">
            <FaDiscord size={26} />
          </a>
          <a href="#">
            <FaTwitter size={26} />
          </a>
          <a href="#">
            <FaInstagram size={26} />
          </a>
        </div>
      </footer>
    </div>
  );
}
