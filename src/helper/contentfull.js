import * as SDK from "contentful";
const contentful = SDK.createClient({
  space: "lks3q6k8qln0",
  accessToken: "OSynRVuFAOUYbFJAHaWjQb35o9BDeKAHC-RNHgLpNOo",
});
export async function fetchEntries(content) {
  const entries = await contentful.getEntries({
    content_type: `${content}`,
  });
  return entries;
}
export async function fetchEntry(id) {
  const post = await contentful.getEntry(id);
  return post;
}
