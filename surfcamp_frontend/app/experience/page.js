import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";
import HeroSection from "./../_components/HeroSection";
import InfoBlock from "./../_components/InfoBlock";

export default async function Experience() {
  const data = await fetchDataFromStrapi("infoblocks-experience?populate=deep");
  const infoBlockData = processInfoBlocks(data);
  // console.log(infoBlockData);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}

export const revalidate = 300;
