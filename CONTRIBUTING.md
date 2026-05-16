# Contributing

Thank you for considering a contribution to the Tropical Cover Crop Calculator. This project is maintained by Chemiseed Sdn. Bhd. and we welcome contributions from agronomists, plantation managers, AgTech developers, soil scientists, students, and anyone else working in tropical agriculture.

## Ground rules

- **Be respectful.** All contributors must follow the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).
- **Numerical changes need citations.** Any change to `src/data/*.json` that alters a seed rate, biomass figure, nitrogen-fixation range, establishment timeline, or suitability score must include a citation to a peer-reviewed paper, an official institute bulletin (MPOB, RRIM, PORIM, FAO, CIAT), or comparable published source. We do not accept "from field experience" without a paper trail.
- **Keep it dependency-free.** The calculators are vanilla ES2020+ JavaScript. No frameworks, no build step, no npm dependencies. This is deliberate so the code embeds anywhere.
- **No tracking, no analytics, no network calls.** The calculator runs entirely client-side and must remain that way.
- **No emojis in code or docs.** Plain text only.

## What kinds of contributions are welcome

- Bug reports and fixes
- Parameter updates with a published citation
- New cover crop species (open an issue first to discuss)
- New crop systems
- Translations of the UI and docs (Bahasa Malaysia, Bahasa Indonesia, Thai, Vietnamese, Spanish, Portuguese, French are all of interest)
- Test cases and worked examples
- Documentation improvements

## What is out of scope

- Replacing the deterministic logic with machine learning models
- Adding paywalled, proprietary, or licensed datasets
- Hardcoding pricing for commercial cover crop suppliers other than the conservative reference values
- UI redesigns that introduce framework dependencies

## Workflow

1. **Fork** the repository on GitHub.
2. **Create a branch** off `main` with a descriptive name, for example `feat/add-arachis-pintoi` or `fix/rounding-on-seed-total`.
3. **Make your change.** Keep the diff focused — one logical change per pull request.
4. **Update the docs** if you change behavior. If you change a number in `src/data/`, add the citation to `docs/data-sources.md` in the same PR.
5. **Open a pull request** against `main`. Fill in the PR template. Reference any related issue.
6. **Discussion.** A maintainer will review, possibly ask for adjustments, and merge when ready.

## Branch model

- `main` is always the current released version. Do not push directly to `main`.
- Feature work goes on short-lived branches and lands via PR.
- Releases are tagged `vMAJOR.MINOR.PATCH` (semantic versioning).

## Commit messages

Conventional commit prefixes are preferred but not required:

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `data:` — change to `src/data/*.json` (must reference a citation)
- `refactor:` — internal change with no behavioral effect
- `test:` — adding or updating tests

## Issues

Use the issue templates in `.github/ISSUE_TEMPLATE/`. For agronomy questions that are not bug reports or feature requests, please open a **Discussion** rather than an issue.

## Contact

For anything that does not fit a PR or issue, email shaharil@chemiseed.com.
