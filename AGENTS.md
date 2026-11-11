This project deploys to Vercel from the `main` branch (it no longer uses Lovable).
Keep `main` in a working state: every push triggers a production deploy.

## Rules

- Store app-displayed images and videos in `public/media` as optimized WebP / H.264 MP4 and reference them by path (e.g. `/media/packd/packd-mockups.webp`). Small title images may be inlined in `src/lib/title-images.ts`.
- Case study content comes from Christina only. Keep each case's copy in the `CASES` array in `src/routes/index.tsx` so real and placeholder entries are easy to tell apart.
- Home case cards link to `/case-studies/$slug`; detail pages read the same CASES entries and use a separate asset gallery module so summaries and full stories stay consistent.
- Case galleries explicitly indicate whether their first image is an overview; process-only galleries render all images under their section headings to preserve navigation and ordering.

