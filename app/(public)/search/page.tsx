import { searchReleases } from "@/lib/api/discogs";
import { importAlbumAction } from "@/app/actions/discogs";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
  albums: {
    id: number;
    title: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  const results = q ? await searchReleases(q) : [];

  return (
    <main className='container mx-auto max-w-5xl py-10 font-sans'>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold font-heading'>Album Search</h1>

          <p className='text-muted-foreground'>
            Search for albums to import into your collection.
          </p>
        </div>

        <form className='flex gap-2'>
          <Input
            name='q'
            defaultValue={q}
            placeholder='Pink Floyd...'
            className='flex-1 bg-input'
          />

          <Button type='submit'>Search</Button>
        </form>

        <div className='space-y-4'>
          {results.map(
            (album: {
              id: number;
              title: string;
              thumb: string;
              year: number | null;
              genre: string[] | null;
            }) => (
              <Card key={album.id}>
                <CardContent className='flex items-center gap-4 p-4'>
                  <img
                    src={album.thumb}
                    alt={album.title}
                    className='h-20 w-20 rounded-md object-cover border'
                  />

                  <div className='flex-1'>
                    <h2 className='font-semibold'>{album.title}</h2>

                    <p className='text-sm text-muted-foreground'>
                      {album.year ?? "Unknown year"}
                    </p>

                    {album.genre && (
                      <p className='mt-1 text-xs text-muted-foreground'>
                        {album.genre.join(" • ")}
                      </p>
                    )}
                  </div>

                  <form action={importAlbumAction}>
                    <input type='hidden' name='discogsId' value={album.id} />

                    <Button variant='outline'>Import</Button>
                  </form>
                </CardContent>
              </Card>
            ),
          )}

          {q && results.length === 0 && (
            <Card>
              <CardContent className='p-8 text-center text-muted-foreground'>
                No albums found.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
