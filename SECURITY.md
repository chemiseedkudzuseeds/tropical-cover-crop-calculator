# Security Policy

We take security issues seriously even on a small open-source agronomy calculator.

## Reporting a Vulnerability

Email **shaharil@chemiseed.com** with the subject line **"Security: tropical-cover-crop-calculator"** and we will respond within 5 business days.

Do not file public issues for security concerns. Use email only.

## In Scope

- Input validation on calculator parameters in \`src/cover-crop-calculator.js\` and \`src/climate-suitability-calculator.js\`
- Integrity of agronomic data in \`src/data/*.json\` (numerical changes must come with citations per \`CONTRIBUTING.md\`)
- Cross-site scripting in the docs/index.html demo page
- Supply-chain integrity of any future dependencies (currently zero runtime dependencies)

## Out of Scope

- Disagreements over agronomic parameter values without supporting field data
- Browser-specific rendering quirks in the demo page

## Disclosure

We practice coordinated disclosure. Once a fix is shipped, we will credit the reporter in the release notes unless they prefer to remain anonymous.

Maintained by Chemiseed Sdn. Bhd., Malaysia. https://chemiseed.com
