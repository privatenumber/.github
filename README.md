## Default community health files

These files apply to every [@privatenumber](https://github.com/privatenumber) repository that doesn't define its own. See the [GitHub documentation](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) for how defaults are resolved.

| File | Purpose |
| - | - |
| [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE) | Bug report and feature request forms |
| [`.github/DISCUSSION_TEMPLATE/q-a.yml`](.github/DISCUSSION_TEMPLATE/q-a.yml) | Form for the Q&A discussion category |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Bug report checklist for issues filed without the form |
| [`FUNDING.yml`](FUNDING.yml) | Sponsor button |
| [`SECURITY.md`](SECURITY.md) | How to report vulnerabilities |
| [`SUPPORT.md`](SUPPORT.md) | Where to get help |

### Overrides

A repository with its own `.github/ISSUE_TEMPLATE` folder ignores the default issue templates entirely. These public repositories have their own templates, so update them too when changing the defaults.

Refresh the list with `pnpm readme`, or print it as JSON with `node scripts/find-template-overrides.js`. Both require an authenticated [`gh`](https://cli.github.com).

<!--mdeval
import { findTemplateOverrides } from './scripts/find-template-overrides.js';

const overridesTable = [
	'| Repository | Templates |',
	'| - | - |',
	...(await findTemplateOverrides()).map(repo => `| [${repo.name}](${repo.url}) | ${repo.templates.map(name => `\`${name}\``).join(', ')} |`),
].join('\n');
-->

<!--mdeval block(overridesTable)-->
| Repository | Templates |
| - | - |
| [cleye](https://github.com/privatenumber/cleye/tree/master/.github/ISSUE_TEMPLATE) | `BUG_REPORT.yml`, `FEATURE_REQUEST.yml`, `config.yml` |
| [esbuild-loader](https://github.com/privatenumber/esbuild-loader/tree/master/.github/ISSUE_TEMPLATE) | `bug-report.yml`, `config.yml`, `feature-request.yml` |
| [fs-require](https://github.com/privatenumber/fs-require/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
| [git-detect-case-change](https://github.com/privatenumber/git-detect-case-change/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
| [ink-task-list](https://github.com/privatenumber/ink-task-list/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
| [instant-mocha](https://github.com/privatenumber/instant-mocha/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.yml`, `FEATURE_REQUEST.yml`, `config.yml` |
| [snap-tweet](https://github.com/privatenumber/snap-tweet/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
| [tasuku](https://github.com/privatenumber/tasuku/tree/master/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
| [tsx](https://github.com/privatenumber/tsx/tree/master/.github/ISSUE_TEMPLATE) | `bug-report.yml`, `config.yml` |
| [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin/tree/develop/.github/ISSUE_TEMPLATE) | `BUG_REPORT.md`, `FEATURE_REQUEST.md` |
<!--/mdeval-->

### Labels

The issue templates apply the `bug`, `enhancement`, and `pending triage` labels. A label is only applied if it exists in the repository, so create it in new repositories.
