# The Music Journal

A personal music journal and vinyl collection app where users can track their records, discover album details, and document their listening experiences.

The goal of The Music Journal is to combine a record collection, album database, and listening diary into one place, helping music lovers keep track of what they own, what they want, and how each album made them feel.

The app combines data from Discogs and Last.fm:

- Discogs provides accurate music metadata, releases, labels, credits, and collection data.
- Last.fm provides listening insights, similar artists, tags, trends, and user statistics.

## Features

### Collection

Manage your personal record collection with detailed information about each release.

- Add albums from Discogs
- Collection status:
  - Owned
  - Want to buy
  - Ordered
  - Sold

- Personal rating
- Personal notes
- Purchase price
- Market value (when available through Discogs)
- Wishlist management

### Album Information

Explore detailed album information.

- Album information
- Tracklist
- Credits
- Artists
- Genres
- Labels
- Release date
- Favorite albums
- Similar artists
- Last.fm tags and trends

### Journal

Keep a personal listening diary.

- Log listening sessions
- Write short reviews
- Add mood
- Give ratings
- Comment on albums
- Like reviews

### Social Features

Build connections around music.

Users can:

- Follow other users
- View collections
- Like reviews
- Comment on journal entries
- Share discoveries

### Search & Discovery

Music discovery feature where users can search for their next favourite songs and artists.

Features:

- Debounced search
- URL-based search parameters
- Pagination
- Infinite scrolling
- Artist recommendations
- Similar albums

### Database Model

Core entities:

- User
- Collection
- Album
- Artist
- Review
- Comment
- Like
- Wishlist
- Following

## Vision

Music is more than just sound. Albums are connected to memories, places, emotions, and moments.

The Music Journal aims to make those connections easier to capture by combining collection management with personal reflection.

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend & Data

- Prisma
- PostgreSQL
- Supabase
- Server Actions
- Server Components

### Forms & Validation

- React Hook Form
- Zod

### Client Data Management

- TanStack Query

### Authentication

- Auth.js

### Development & Deployment

- Docker
- Vercel

## Getting Started

Clone the repository:

```bash
git clone https://github.com/alexiahellsten/themusicjournal
cd themusicjournal
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Future Ideas

Possible future improvements:

- User profiles
- Social sharing
- Listening statistics
- Collection analytics
- Recommendations based on listening history
- Import/export collections
- Mobile app support

## License

This project is currently for personal use and development.
