# jabed.me

My personal portfolio website. Built with

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Content: [Contentlayer](https://contentlayer.io/)
- Database: [PlanetScale](https://planetscale.com/)
- Authentication: [Authjs](https://authjs.dev/)
- ORM: [Prisma](https://prisma.io/)
- Email: [SendGrid](https://sendgrid.com/)
- Hosting: [Vercel](https://vercel.com/)
- Analytics: [Vercel Analytics](https://vercel.com/analytics)

## TODO

- [ ] `404` page
- [ ] setup redirects 
- [ ] Add blog with `contentlayer`
- [ ] Add toasts for `Input.tsx` in `app/guestbook`
- [ ] OG Image for SEO, also setup `robots.txt` and `sitemap.xml`
- [ ] Add Other metrics

## Running Locally

```bash
$ git clone https://github.com/jabedzaman/jabed.me.git
$ cd jabed.me
$ pnpm install
$ npx prisma generate
$ pnpm dev
```

_*Note: You need to setup environment variables before running dev server.*_

### Environment Variables

copy `.env.example` to `.env.local` and fill up the variables.
