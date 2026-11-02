<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Store app-displayed images as Lovable Assets `.asset.json` pointers and import the pointer's `url`; do not keep binary image files in the repo. (Keeps the checkout light and serves images from the CDN.)
- Case study content comes from Christina only. Keep each case's copy in the `CASES` array in `src/routes/index.tsx` so real and placeholder entries are easy to tell apart.

