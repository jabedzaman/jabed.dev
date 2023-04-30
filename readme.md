# jabed.me

My personal portfolio website. Built with

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Content: [Contentlayer](https://contentlayer.io/)
- Database: [PlanetScale](https://planetscale.com/)
- Authentication: [Authjs](https://authjs.dev/)
- ORM: [Prisma](https://prisma.io/)
- Hosting: [Vercel](https://vercel.com/)
- Analytics: [Vercel Analytics](https://vercel.com/analytics)

## TODO

- [ ] `404` page
- [ ] Add toasts for `Input.tsx` in `app/guestbook`
- [ ] Add Other metrics

## Running Locally

```bash
$ git clone https://github.com/jabedzaman/jabed.me.git
$ cd jabed.me
$ pnpm install
$ npx prisma generate
$ pnpm dev
```

> *Note:* You need to setup environment variables before running dev server.

### Environment Variables

copy `.env.example` to `.env.local` and fill up the variables.
