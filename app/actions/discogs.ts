"use server";

import { redirect } from "next/navigation";
import { importAlbum } from "@/lib/services/discogs/import-album";

export async function importAlbumAction(formData: FormData) {
  const discogsId = Number(formData.get("discogsId"));

  const album = await importAlbum(discogsId);

  redirect(`/albums/${album.id}`);
}
