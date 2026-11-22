import { describe, expect, it } from 'vitest';
import { docsHref, docsLocaleOf, groupIdOfPath, isUntranslated, stripLocale, tabHref, tabOfPath } from '../../lib/docs';
import { docsConfig } from '../../config/docs.config';

describe('docs helpers', () => {
  it('uses the default locale for unprefixed paths', () => {
    expect(docsLocaleOf('/docs/guides/write-content/')).toBe('en');
    expect(stripLocale('/docs/guides/')).toBe('/docs/guides/');
  });

  it('leaves default-locale links and external links untouched', () => {
    expect(docsHref('en', '/docs/guides/')).toBe('/docs/guides/');
    expect(docsHref('en', 'https://example.com/docs/')).toBe('https://example.com/docs/');
    expect(isUntranslated('/docs/guides/')).toBe(false);
  });

  it('finds the group and tab of a path', () => {
    expect(groupIdOfPath('/docs/deployment/cloudflare-pages/')).toBe('deployment');
    expect(tabOfPath('/docs/deployment/cloudflare-pages/').id).toBe('guide');
    expect(tabOfPath('/docs/reference/frontmatter/').id).toBe('reference');
    expect(tabOfPath('/docs/').id).toBe('guide');
  });

  it('builds tab links from the landing path', () => {
    const [guide, reference] = docsConfig.tabs;
    expect(tabHref('en', guide)).toBe('/docs/');
    expect(tabHref('en', reference)).toBe('/docs/reference/');
  });

  it('keeps every tab pointing at configured groups', () => {
    const ids = docsConfig.groups.map((g) => g.id);
    for (const tab of docsConfig.tabs) for (const g of tab.groups) expect(ids).toContain(g);
  });
});
