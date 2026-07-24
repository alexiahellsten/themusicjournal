import "dotenv/config";
import { importAlbum } from "../lib/services/album-import";

async function main() {
  const album = await importAlbum(249504);

  console.log(album);
}

main().catch(console.error);
