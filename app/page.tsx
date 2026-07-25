import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='font-heading text-6xl font-bold'>The Music Journal</h1>
        </div>
        <div className='my-8 flex flex-col items-center justify-center gap-4'>
          <Button className='bg-primary text-l text-primary-foreground hover:bg-primary/90'>
            Sign in to your account
          </Button>
        </div>
      </main>
    </div>
  );
}
