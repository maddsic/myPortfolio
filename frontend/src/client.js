// import sanityClient from "@sanity/client";
// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  //   projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  projectId: "zhh2l85y",
  dataset: "production",
  apiVersion: "2023-08-02",
  useCdn: "false",
  token: process.env.SANITY_STUDIO_TOKEN,
});

// Now we call the builder function and pass it our client
const builder = imageUrlBuilder(client);

// We always have to do this when working with images using sanity
export const urlFor = (source) => builder.image(source);
