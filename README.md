# BufferLine Web

Public web frontend for BufferLine.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- next-intl

## Repository Notes

- This repo includes `vendor/brand-system` as a git submodule.
- See `ROADMAP.md` for planned follow-ups.
- Clone with submodules enabled:

```bash
git clone --recurse-submodules git@github.com:BufferLine/web.git
```

If already cloned:

```bash
git submodule update --init --recursive
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - serve production build
- `npm run lint` - run eslint

## License

MIT. See `LICENSE`.
