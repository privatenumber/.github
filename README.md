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

A repository with its own `.github/ISSUE_TEMPLATE` folder ignores the default issue templates entirely. These repositories have their own templates, so update them too when changing the defaults:

- [tsx](https://github.com/privatenumber/tsx/tree/master/.github/ISSUE_TEMPLATE)
- [esbuild-loader](https://github.com/privatenumber/esbuild-loader/tree/master/.github/ISSUE_TEMPLATE)
- [cleye](https://github.com/privatenumber/cleye/tree/master/.github/ISSUE_TEMPLATE)

### Labels

The issue templates apply the `bug`, `enhancement`, and `pending triage` labels. A label is only applied if it exists in the repository, so create it in new repositories.
