import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Services from "@/app/_components/home/serviceMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS + Java",
  description: "A Next and Java Spring Project",
};

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
