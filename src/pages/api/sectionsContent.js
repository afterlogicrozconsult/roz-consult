// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '../../../lib/client';

export async function loadSectionPromo() {
  const query = `{
    "sectionPromo": *[_type == "sectionPromo" && !(_id match "drafts*")] | order(publishedAt desc)
  }`;
  const { sectionPromo } = await client.fetch(query);

  return {
    sectionPromo,
  };
}

export async function loadSlider() {
  const query = `{
    "sectionSlider": *[_type == "slider" && !(_id match "drafts*")] | order(publishedAt desc)
  }`;
  const { sectionSlider } = await client.fetch(query);

  return {
    sectionSlider,
  };
}

export async function loadSectionFooter() {
  const query = `{
    "footer": *[_type == "footer" && !(_id match "drafts*")] | order(publishedAt desc)
  }`;
  const { footer } = await client.fetch(query);

  return {
    footer,
  };
}

export async function loadSectionInfo() {
  const query = `{
    "sectionInfo": *[_type == "sectionInfo" && !(_id match "drafts*")] | order(publishedAt desc)
  }`;
  const { sectionInfo } = await client.fetch(query);

  return {
    sectionInfo,
  };
}
