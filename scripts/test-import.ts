import { importAlbum } from "../lib/services/discogs/import-album";

async function main() {
  const album = await importAlbum(249504);

  console.log(album);
}

main();
