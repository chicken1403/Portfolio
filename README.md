- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [Logrocket](https://logrocket.com/)
- **Content**: [MDX](https://mdxjs.com/)

## Running Locally

### Installation

1. Clone this repo

```bash
git clone
```

2. Change directory

```sh
cd 
```

3. Install dependencies

```bash
bun install
```

4. Create a `.env.local` file following the `.env.example`

```bash
cp .env.example .env.local
```

5. Add your environment variables to `.env.local`

```txt
SPOTIFY_REFRESH_TOKEN=<Your env>
SPOTIFY_CLIENT_SECRET=<Your env>
SPOTIFY_CLIENT_ID=<Your env>
// ...
```

5. Run the development server

```bash
bun run dev
```


