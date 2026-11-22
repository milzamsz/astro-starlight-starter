---
title: Environment variables
description: Secrets and variables the project reads.
intro: Only the feedback widget needs any.
type: reference
sidebar:
  order: 2
---

| Name | Kind | Required | Used for |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Pages secret | For feedback | Sends the feedback email |
| `FEEDBACK_TO` | Pages secret | For feedback | Recipient address |
| `FEEDBACK_FROM` | Variable | No | Sender, on a Resend-verified domain. Default: `noreply@<your host>` |
| `PNPM_VERSION` | Variable | For Pages builds | Selects pnpm in the build image |

## Set a secret

```bash
pnpm exec wrangler pages secret put RESEND_API_KEY --project-name <your-project>
pnpm exec wrangler pages secret list --project-name <your-project>
```

Secrets apply to new deployments, so deploy again after changing one.

## Local development

Copy `.dev.vars.example` to `.dev.vars` (gitignored) and run `pnpm build && pnpm cf:dev` to try the endpoint locally. The plain `pnpm dev` server does not run Pages Functions.

Variables other than `PNPM_VERSION` go in `wrangler.jsonc` under `vars`: with a Wrangler config, Pages manages variables from that file.
