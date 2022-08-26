import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import styles from "/styles/Home.module.css";

const data = {
  rows: [
    {
      title: `What is Web3?`,
      content: `The internet in its current inception is considered Web2. Many of the services offered are centralized or owned by large conglomerates. Web3 rethinks how the internet functions and utilizes blockchain technology to decentralize many online services.`
    },
    {
      title: "What is blockchain technology?",
      content: `Think of the blockchain as an enormous digital ledger, one that keeps records of any activity that takes place on it. This record is unfalsifiable, removing the need for gate keepers and third parties.`,
    },
    {
      title: `What is a cryptocurrency wallet and how do I get one?`,
      content: `A cryptocurrency wallet stores your NFTs and cryptocurrency within a password protected application. One of the most common crypto wallets is the Metamask wallet which you can download for free! Some people prefer a hardwallet, which is an external key used to access your assets.`,
    },
    {
      title: `How do I keep my wallet safe?`,
      content: `Like in all walks of life there are those who would rather take than earn. Online is no different. For that reason, it’s important to know how to keep your wallet safe. The most important thing to know is that under no circumstances should you give your “seed-phrase” to anyone. It gives you unilateral control over your wallet.`
    },
    {
      title: 'What is Ethereum (ETH) and how do I get some?',
      content: `Ethereum is a cryptocurrency with its own unique blockchain. Currently it is the most common for Web3 applications and the one that the Bones NFT will be on. Any transactions done on the ETH blockchain require gwei, which is a small transaction fee. You can get ETH through various cryptocurrency exchanges like Binance and Coinbase. If you have a metamask wallet they also give you the option to buy ETH.`
    },
    {
      title: `I can’t see my NFT in my wallet, where do I find it?`,
      content: `Many wallets are still catching up on the rapid growth of Web3. For now, you can see your NFTs on secondary exchanges like OpenSea and LooksRare.`
    },
    {
      title: `Can I sell my NFT?`,
      content: `As much as we’d miss you being part of the familia, absolutely. Marketplaces like OpenSea, LooksRare, X2Y2, and others all exist for that very purpose, and anyone can use them to sell.`
    }

  ],
};

const FAQ = ({ color }) => {
  const stylesc = {
    bgColor: "transparent",
    rowTitleColor: { color },
    rowContentColor: { color },
    arrowColor: { color },
    rowTitleTextSize: "28px",
  };

  return (
    <div name="faq" className={styles.roadmap}>
      <br />
      <h1>FAQ</h1>

      <div className={styles.faqWrapper}>
        <Faq data={data} styles={stylesc} />
      </div>

      <br />
    </div>
  );
};

export default FAQ;
