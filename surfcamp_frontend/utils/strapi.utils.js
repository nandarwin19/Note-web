import axios from "axios";

const BASE_URL = process.env.STRAPI__URL || "http://127.0.0.1:1337/api";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/${route}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processInfoBlocks(data) {
  const infoBlockRaw = data.data.data.attributes.info_blocks.data;
  return infoBlockRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: infoBlock.attributes.image.data.attributes.url,
    id: infoBlock.id,
  }));
}
