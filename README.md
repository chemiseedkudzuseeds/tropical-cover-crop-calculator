# Tropical Cover Crop Calculator

A reference open-source implementation of two field-ready calculators for tropical leguminous cover crop establishment under oil palm, rubber, fruit-tree, and smallholder mixed cropping systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zenodo DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20244236.svg)](https://doi.org/10.5281/zenodo.20244236)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Maintained by Chemiseed](https://img.shields.io/badge/maintained%20by-Chemiseed%20Sdn.%20Bhd.-2e7d32.svg)](https://chemiseed.com)

---

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
  year     = {2026},
  publisher= {GitHub},
  url      = {https://github.com/chemiseedkudzuseeds/tropical-cover-crop-calculator},
  doi      = {10.5281/zenodo.20244236},
  version  = {1.0.0}
}
```

A `CITATION.cff` file is also provided.

## License

MIT License. Copyright (c) 2026 Chemiseed Sdn. Bhd. See [`LICENSE`](LICENSE).

## Contact

Maintainer: Shaharil Abdul, shaharil@chemiseed.com
Organization: Chemiseed Sdn. Bhd., https://chemiseed.com
Sister brand: Kudzu Seeds Trading, https://kudzuseeds.com
