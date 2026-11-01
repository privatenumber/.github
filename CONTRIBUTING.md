# Contributing

## The best bug report is a failing test

If you can, open a pull request that adds a failing test proving the bug, instead of an issue. It doesn't need a fix or an issue first. A failing test is the fastest way to get a bug confirmed and fixed.

## Reporting a bug

If you can't write a test, use the bug report form when you open an issue. If you file an issue another way (for example with `gh issue create` or an AI agent), include the same information:

1. **Reproduction:** the smallest code that shows the bug, with every file it needs (such as `package.json` and `tsconfig.json`) and the exact command to run it. A code snippet, a GitHub repository, or a [StackBlitz](https://node.new) link all work.
2. **Expected and actual behavior:** paste errors as text, not screenshots.
3. **Versions:** exact versions of the package, Node.js, OS, package manager, and any related tools such as TypeScript or Vite. "latest" isn't a version.
4. **Last working version**, if this is a regression.

Before you submit:

- Search existing issues for duplicates.
- Run the reproduction yourself on the latest version and confirm it shows the bug.
- Keep root-cause theories and suggested fixes separate from the observed behavior, and say whether you verified them.

## Pull requests

- **Bug fixes:** welcome without an issue, as long as the pull request includes a test that fails without the fix.
- **Features and behavior changes:** open an issue first to agree on the approach.
