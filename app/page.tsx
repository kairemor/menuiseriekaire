'use server'

import Image from "next/image";
import Header from "./components/header";
import Services from "./components/services";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import { data } from "../data";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Contact from "./components/contact";


export default async function Home() {

  const homeInfo = groq`
  *[_type == "home"][0]
`;
  const aboutInfo = groq`
    *[_type == "about"][0]
  `;
  const servicesInfo = groq`
  *[_type == "service"]
`;


  const homeData: Home = await client.fetch(homeInfo);
  const aboutData: About = await client.fetch(aboutInfo, undefined, { cache: 'no-store' });
  const services: [Service] = await client.fetch(servicesInfo);

  return (
    <main>
      <Header header={data.header} home={homeData}/>
      <Services services={services}/>
      <About about={aboutData}/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </main>
  );
}

// export const dynamic = "force-dynamic";