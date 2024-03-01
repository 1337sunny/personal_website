export default async function sitemap() {
  const routes = ["", "/projects"].map((route) => ({
    url: `https://sunnymore1337.com/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
