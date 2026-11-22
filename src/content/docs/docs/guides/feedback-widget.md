---
title: Feedback widget
description: How "Was this helpful?" works and how to turn it off.
intro: Votes are emailed through Resend by a Cloudflare Pages Function.
type: how-to
sidebar:
  order: 5
---

Every article ends with **Was this helpful?**. "Yes" sends a vote; "No" opens a box for an optional comment. The page posts to `/api/feedback` (`functions/api/feedback.ts`), which validates the input and sends one email with Resend.

## Set it up

1. Create a Resend API key and verify a sending domain.
2. Set the secrets (see [Environment variables](/docs/deployment/environment-variables/)):

   ```bash
   pnpm exec wrangler pages secret put RESEND_API_KEY --project-name <your-project>
   pnpm exec wrangler pages secret put FEEDBACK_TO --project-name <your-project>
   ```

3. Deploy again; secrets apply to new deployments only.
4. Test: open an article on the live site, click **No** and send a comment.

Until both secrets exist the endpoint answers `503 not_configured` and the widget shows a polite error.

## Limits

- Email only: nothing is stored and there is no rate limit. Move votes to KV or D1 if you want to query them.
- The endpoint accepts only `/docs/...` paths (and `/<locale>/docs/...`), a boolean vote and a comment of up to 1000 characters.

## Turn it off

Remove `<Feedback />` from `src/components/docs/Footer.astro`.
