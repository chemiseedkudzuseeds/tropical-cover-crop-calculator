# Tropical Cover Crop Calculator

A reference open-source implementation of two field-ready calculators for tropical leguminous cover crop establishment under oil palm, rubber, fruit-tree, and smallholder mixed cropping systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20244236.svg)](https://doi.org/10.5281/zenodo.20244236)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Maintained by Chemiseed](https://img.shields.io/badge/maintained%20by-Chemiseed%20Sdn.%20Bhd.-2e7d32.svg)](https://chemiseed.com)
[![Live Demo](https://img.shields.io/badge/live%20demo-running-brightgreen.svg)](https://chemiseedkudzuseeds.github.io/tropical-cover-crop-calculator/)

---

> **Try it in your browser:** [Live calculator demo](https://chemiseedkudzuseeds.github.io/tropical-cover-crop-calculator/), no setup, both calculators run instantly via jsDelivr CDN.

This repository is the canonical open-source reference implementation of the **Cover Crop Calculator** and the **Climate Suitability Calculator** that are deployed in production on [chemiseed.com](https://chemiseed.com) and [kudzuseeds.com](https://kudzuseeds.com). Built and maintained by [Chemiseed Sdn. Bhd.](https://chemiseed.com) of Malaysia.

**Companion dataset:** [Tropical Cover Crop Performance Meta-Dataset](https://doi.org/10.5281/zenodo.20244236) (50 records, 20 years of published field-trial data), DOI 10.5281/zenodo.20244236, CC-BY 4.0.

See `docs/cover-crop-calculator.md` and `docs/climate-suitability-calculator.md` for algorithm details. See `docs/species-reference.md` for the six supported cover crop species with seed rates, establishment timelines, and N-fixation ranges. See `docs/data-sources.md` for the citation bibliography (MPOB, RRIM, Pertanika JTAS, PORIM, CIAT, FAO).

## Usage

```html
<script type="module">
  import { calculateCoverCropPlan } from 'https://cdn.jsdelivr.net/gh/chemiseedkudzuseeds/tropical-cover-crop-calculator@main/src/cover-crop-calculator.js';
  import { calculateClimateSuitability } from 'https://cdn.jsdelivr.net/gh/chemiseedkudzuseeds/tropical-cover-crop-calculator@main/src/climate-suitability-calculator.js';

  const plan = calculateCoverCropPlan({ hectares: 25, cropSystem: 'oil_palm_immature' });
  const ranking = calculateClimateSuitability({ region: 'peninsular_malaysia', altitude: 'lowland', rainfall: '2500_3500' });
</script>
```

A complete working HTML example is in `examples/web-embed.html`.

## Contributing

Contributions are welcome. Numerical changes to data files (`src/data/*.json`) must come with a citation. Code changes should stay dependency-free (vanilla ES2020+ JavaScript). See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.

## Citation

```bibtex
@software{chemiseed_tropical_cover_crop_calculator_2026,
  author    = {Abdul, Shaharil and {Chemiseed Sdn. Bhd.}},
  title     = {Tropical Cover Crop Calculator: open-source seed-rate, nitrogen-fixation, and climate-suitability tools for tropical cover crops},
  year      = {2026},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.20244236},
  url       = {https://github.com/chemiseedkudzuseeds/tropical-cover-crop-calculator},
  version   = {1.0.1}
}
```

## Background reading and field notes

Long-form companion essays from the maintainers at [Chemiseed Field Notes on Substack](https://chemiseed.substack.com). The full ten-issue series pairs directly with this calculator and the underlying dataset:

- [Why I started Chemiseed](https://chemiseed.substack.com/p/why-i-started-chemiseed): origin story on the gap between certified seed and what actually reaches a plantation block.
- [What Mucuna bracteata actually does in an immature oil palm field](https://chemiseed.substack.com/p/what-mucuna-bracteata-actually-does): six-week seedlings, 320 per hectare, 67 to 84 percent Ndfa, the real MPOB numbers.
- [Pueraria javanica is not invasive kudzu](https://chemiseed.substack.com/p/pueraria-javanica-is-not-invasive-kudzu): species disambiguation between Pueraria phaseoloides and Pueraria montana.
- [A confession about Calopogonium mucunoides](https://chemiseed.substack.com/p/a-confession-about-calopogonium-mucunoides): when CM is the right call and when it is not.
- [What plantation managers ask me first about SoilBoost EA](https://chemiseed.substack.com/p/what-plantation-managers-ask-me-first-about-soilboost-ea): four mechanisms, two soil types where it works, one where it does not.
- [Cover crop costs are not what you think](https://chemiseed.substack.com/p/cover-crop-costs-are-not-what-you-think): RM-per-hectare breakdown on a 50 ha block, three strategies compared.
- [The smallholder problem](https://chemiseed.substack.com/p/the-smallholder-problem): cover crops are technically simple, economically hard at smallholder scale.
- [What we got wrong about seed dormancy in Centrosema pubescens](https://chemiseed.substack.com/p/what-we-got-wrong-about-seed-dormancy-in-centrosema-pubescens): hard-seed dormancy and field versus lab germination.
- [EUDR is coming. Cover crops are not a compliance hack.](https://chemiseed.substack.com/p/eudr-is-coming-cover-crops-are-not-a-compliance-hack): practitioner read on EU Deforestation Regulation and cover crops.
- [A field guide year: how I would plant 100 ha of cover crops if I were starting today](https://chemiseed.substack.com/p/a-field-guide-year-how-i-would-plant-100-ha-of-cover-crops-if-i-were-starting-today): month-by-month plan with species choice, seeding rates, and cost lines.

## Related links

- Hugging Face dataset mirror: https://huggingface.co/datasets/chemiseed/tropical-cover-crop-performance-malaysia
- Canonical Zenodo record (DOI): https://doi.org/10.5281/zenodo.20244236
- Maintainer website: https://chemiseed.com
- Sister brand: https://kudzuseeds.com
- Field Notes (long-form): https://chemiseed.substack.com

## License

Code is released under the MIT License. The companion dataset on Zenodo is CC-BY 4.0. See `LICENSE` for the full text.

## Maintainer

Chemiseed Sdn. Bhd., Kuala Lumpur, Malaysia.
shaharil@chemiseed.com - https://chemiseed.com
# Tropical Cover Crop Calculator

A reference open-source implementation of two field-ready calculators for tropical leguminous cover crop establishment under oil palm, rubber, fruit-tree, and smallholder mixed cropping systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20244236.svg)](https://doi.org/10.5281/zenodo.20244236)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Maintained by Chemiseed](https://img.shields.io/badge/maintained%20by-Chemiseed%20Sdn.%20Bhd.-2e7d32.svg)](https://chemiseed.com)
[![Live Demo](https://img.shields.io/badge/live%20demo-running-brightgreen.svg)](https://chemiseedkudzuseeds.github.io/tropical-cover-crop-calculator/)

---

> **Try it in your browser:** [Live calculator demo](https://chemiseedkudzuseeds.github.io/tropical-cover-crop-calculator/) — no setup, both calculators run instantly via jsDelivr CDN.

This repository is the canonical open-source reference implementation of the **Cover Crop Calculator** and the **Climate Suitability Calculator** that are deployed in production on [chemiseed.com](https://chemiseed.com) and [kudzuseeds.com](https://kudzuseeds.com). Built and maintained by [Chemiseed Sdn. Bhd.](https://chemiseed.com) of Malaysia.

**Companion dataset:** [Tropical Cover Crop Performance Meta-Dataset](https://doi.org/10.5281/zenodo.20244236) (50 records, 20 years of published field-trial data), DOI 10.5281/zenodo.20244236, CC-BY 4.0.

See `docs/cover-crop-calculator.md` and `docs/climate-suitability-calculator.md` for algorithm details. See `docs/species-reference.md` for the six supported cover crop species with seed rates, establishment timelines, and N-fixation ranges. See `docs/data-sources.md` for the citation bibliography (MPOB, RRIM, Pertanika JTAS, PORIM, CIAT, FAO).

## Usage

```html
<script type="module">
  import { calculateCoverCropPlan } from 'https://cdn.jsdelivr.net/gh/chemiseedkudzuseeds/tropical-cover-crop-calculator@main/src/cover-crop-calculator.js';
  import { calculateClimateSuitability } from 'https://cdn.jsdelivr.net/gh/chemiseedkudzuseeds/tropical-cover-crop-calculator@main/src/climate-suitability-calculator.js';

  const plan = calculateCoverCropPlan({ hectares: 25, cropSystem: 'oil_palm_immature' });
  const ranking = calculateClimateSuitability({ region: 'peninsular_malaysia', altitude: 'lowland', rainfall: '2500_3500' });
</script>
```

A complete working HTML example is in `examples/web-embed.html`.

## Contributing

Contributions are welcome. Numerical changes to data files (`src/data/*.json`) must come with a citation. Code changes should stay dependency-free (vanilla ES2020+ JavaScript). See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.

## Citation

```bibtex
@software{chemiseed_tropical_cover_crop_calculator_2026,
  author   = {Abdul, Shaharil and {Chemiseed Sdn. Bhd.}},
  title    = {Tropical Cover Crop Calculator: open-source seed-rate, nitrogen-fixation, and climate-suitability tools for tropical cover crops},
