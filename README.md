# Derby PACT

Website for the Derby PACT, the parent–teacher organization for Derby Elementary.

Built with [TanStack Start](https://tanstack.com/start), React 19, and Tailwind CSS v4.

## Development

```sh
pnpm install
pnpm dev        # http://localhost:3200, also reachable from other devices on the LAN
```

| Script          | What it does                 |
| --------------- | ---------------------------- |
| `pnpm dev`      | Dev server on `0.0.0.0:3200` |
| `pnpm build`    | Production build + typecheck |
| `pnpm start`    | Run the production build     |
| `pnpm lint`     | Biome lint + format check    |
| `pnpm lint:fix` | Apply Biome fixes            |

## Layout

- `src/routes/__root.tsx`: HTML shell, meta tags, fonts, header/footer
- `src/routes/index.tsx`: home page (hero, next event, about, get involved, contact)
- `src/routes/events.tsx`: events page; past events move to the bottom on their own
- `src/data/events.ts`: **add new events here**; the monthly meeting (1st Thursday) is generated
- `src/lib/site.ts`: contact email, Facebook link, meeting details
- `src/styles.css`: theme colors; dark by default, light via `data-theme="light"`
- `public/flyers/`: event flyer images
