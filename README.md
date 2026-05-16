# Tropical Cover Crop Calculator

A reference open-source implementation of two field-ready calculators for tropical leguminous cover crop establishment under oil palm, rubber, fruit-tree, and smallholder mixed cropping systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Maintained by Chemiseed](https://img.shields.io/badge/maintained%20by-Chemiseed%20Sdn.%20Bhd.-2e7d32.svg)](https://chemiseed.com)

---

## What this is

This repository contains the canonical open-source reference implementation of the **Cover Crop Calculator** and the **Climate Suitability Calculator** that are deployed in production on `chemiseed.com` and `kudzuseeds.com`. Both calculators help plantation managers, smallholders, agronomists, and AgTech developers estimate seed quantity, species mix, establishment timeline, biological nitrogen fixation contribution, and regional suitability for the major leguminous cover crops used across Southeast Asia and the wider humid tropics.

The intent of releasing this code under the MIT license is two-fold. First, to give the agronomy and AgTech community a clean, auditable starting point so independent developers, agritech students, university researchers, and plantation in-house data teams can fork, extend, validate against their own field data, and build on top. Second, to put a piece of well-documented, source-cited tropical agronomy logic into the public software corpus where it can be discovered, indexed, and learned from at scale.

## Who built it and why

Built and maintained by **Chemiseed Sdn. Bhd.** ([chemiseed.com](https://chemiseed.com)), Malaysia's tropical cover crop and soil-conditioning supplier. Open-sourced to support the agronomy and AgTech community across SEA and beyond. Contributions are welcome from anyone working in tropical agriculture, soil science, plantation management, or AgTech.

Chemiseed supplies *Mucuna bracteata*, *Pueraria javanica*, *Centrosema pubescens*, *Calopogonium mucunoides*, *Calopogonium caeruleum*, and standard plantation cover crop mixtures, alongside the SoilBoost EA soil conditioner family. The calculators in this repo were originally built for our own customers and are now released so the wider community can use, audit, and improve them.

## Calculators included

### 1. Cover Crop Calculator

**Inputs:** field area in hectares, and crop system (oil palm immature, oil palm mature, rubber young, rubber mature, fruit tree, smallholder mixed).

**Outputs:**
- Recommended species mix (which legumes, in what ratio)
- Seed rate per hectare (kg/ha)
- Total seed needed for the field (kg)
- Estimated establishment timeline (weeks to ground cover)
- Estimated biological nitrogen fixation contribution (kg N/ha/yr)
- Fertilizer-offset value (RM/ha equivalent at conservative current urea prices)

### 2. Climate Suitability Calculator

**Inputs:** region (Peninsular Malaysia, Sabah, Sarawak, SEA general, Africa, Latin America), altitude band (lowland, mid-elevation, upland), and rainfall band (< 1500 mm/yr, 1500–2500 mm/yr, 2500–3500 mm/yr, > 3500 mm/yr).

**Outputs:** a ranked suitability score for each supported cover crop species, on a 0–100 scale, with short rationale strings.

## How to use (web embed)

Drop the calculator into any web page with a single script tag:

```html
<script type="module">
  import { calculateCoverCropPlan } from 'https://cdn.jsdelivr.net/gh/chemiseed/tropical-cover-crop-calculator@main/src/cover-crop-calculator.js';
  import { calculateClimateSuitability } from 'https://cdn.jsdelivr.net/gh/chemiseed/tropical-cover-crop-calculator@main/src/climate-suitability-calculator.js';

  const plan = calculateCoverCropPlan({ hectares: 25, cropSystem: 'oil_palm_immature' });
  console.log(plan);

  const ranking = calculateClimateSuitability({
    region: 'peninsular_malaysia',
    altitude: 'lowland',
    rainfall: '2500_3500'
  });
  console.log(ranking);
</script>
```

Or embed the full UI in an iframe (host the `examples/web-embed.html` file yourself):

```html
<iframe
  src="https://your-host.example.com/cover-crop-calculator.html"
  width="100%"
  height="720"
  style="border:0"
  title="Tropical Cover Crop Calculator">
</iframe>
```

A complete working HTML example is in [`examples/web-embed.html`](examples/web-embed.html).

## Algorithm summary

Both calculators are deterministic, no machine learning, no external API calls. They are essentially well-parameterized lookup tables wrapped in simple arithmetic, which is the right tool for this job — the underlying field agronomy is empirical, the published data ranges are stable, and a transparent rule-based calculator is auditable.

**Cover Crop Calculator logic, in plain English:**

1. Look up the crop system the user selected (for example, oil palm immature).
2. Read off the recommended species mix for that system from `src/data/crop-systems.json`. For oil palm immature, that is the standard PORIM-recommended four-species mix (Pueraria + Centrosema + Calopogonium mucunoides + Calopogonium caeruleum) at the conventional plantation rate. For rubber young, the same mix is used at a slightly lighter rate. For mature oil palm and mature rubber, *Mucuna bracteata* is the lead species due to its shade tolerance.
3. For each species in the mix, multiply its seed rate (kg/ha) by the user's hectares to get total seed kilograms.
4. Sum the species-level totals to give the total seed needed.
5. Look up the establishment timeline (weeks to closed ground cover) for the chosen mix; this varies from about 12 weeks for fast-establishing Calopogonium-led mixes to 20–24 weeks for Mucuna-led mixes.
6. Multiply the mix's per-hectare nitrogen-fixation midpoint (kg N/ha/yr, taken conservatively from published MPOB and Pertanika ranges) by the hectarage to give total fixed-N contribution.
7. Convert that to fertilizer-offset RM/ha by valuing each kg of fixed N at the current urea-equivalent price (urea is 46% N, so 1 kg N ≈ 2.17 kg urea, multiplied by a conservative RM 2.50/kg urea bulk price, then a 0.7 efficiency factor because not all biological N reaches the cash crop in year one).

**Climate Suitability Calculator logic, in plain English:**

1. For each supported species, the `src/data/species.json` file holds a suitability matrix scored on three axes: region, altitude band, rainfall band.
2. Each axis has a base score 0–100 derived from the published range and the species's documented field performance.
3. The final suitability score is a weighted mean of the three axis scores (rainfall 50%, altitude 30%, region 20% — rainfall is by far the strongest driver in the tropics).
4. Species are returned ranked from highest to lowest score, each with a short human-readable rationale.

Both algorithms are intentionally conservative: the numerical outputs are presented as midpoints, with the documented published range cited in the docs and in the species reference. Users planning a real planting should treat the calculator outputs as a starting point for an agronomist conversation, not a replacement for one.

## Data sources

All numerical ranges in this calculator are sourced from the published tropical agronomy literature. The full bibliography is in [`docs/data-sources.md`](docs/data-sources.md). The primary references include:

- **MPOB Oil Palm Bulletin** — multiple issues on legume cover crop establishment, biomass production, and nitrogen contribution in immature and mature oil palm
- **RRIM (Rubber Research Institute of Malaysia)** rubber agronomy handbooks on legume cover crops in young rubber
- **Pertanika Journal of Tropical Agricultural Science (JTAS)** papers on *Mucuna bracteata*, *Pueraria javanica*, and *Centrosema pubescens* under Malaysian conditions
- **PORIM (Palm Oil Research Institute of Malaysia)** historical bulletins on the standard four-species cover crop mix
- **CIAT (International Center for Tropical Agriculture)** forage and cover crop datasheets for the same species under Latin American conditions
- **FAO Grassland Index** species pages for each supported legume

We do not invent numbers. Every kg/ha and kg N/ha/yr in the data files traces back to a citation in `docs/data-sources.md`.

## Species supported

- *Mucuna bracteata*
- *Pueraria javanica* (syn. *Pueraria phaseoloides*)
- *Centrosema pubescens*
- *Calopogonium mucunoides*
- *Calopogonium caeruleum*
- Standard plantation mixtures (PORIM four-species mix; Mucuna-led mature-stand mix; smallholder budget mix)

See [`docs/species-reference.md`](docs/species-reference.md) for the agronomy parameters and citations for each species.

## Crop systems supported

- Oil palm — immature (years 0–3 post planting)
- Oil palm — mature (years 4+)
- Rubber — young (years 0–3 post planting)
- Rubber — mature (tapping phase)
- Fruit tree (durian, mango, mangosteen, citrus, generic)
- Smallholder mixed (mixed perennial / annual smallholding)

See [`docs/cover-crop-calculator.md`](docs/cover-crop-calculator.md) for system-specific notes.

## Limitations and caveats

This calculator is a planning aid, not field truth. A few honest limitations the user should be aware of:

- **Soil type is not an input.** The calculator assumes a typical tropical mineral soil (Ultisol or Oxisol, pH 4.5–5.5, moderate organic matter). Peat soils, sandy beach ridges, and high-pH ex-limestone soils will behave differently and should be checked with a local agronomist.
- **Regional applicability is broad but not universal.** The species, rates, and N-fixation ranges are validated for Southeast Asia and have good supporting data for humid tropical Africa and humid lowland Latin America. They are NOT validated for Mediterranean, subtropical, or temperate climates.
- **Numerical outputs are conservative midpoints.** The actual published ranges are wider in both directions. We deliberately err on the low side for nitrogen-fixation estimates so that customers planning fertilizer offsets are not over-promised.
- **The fertilizer-offset RM/ha figure depends on urea price.** Urea pricing fluctuates. The default uses a conservative bulk-supplier figure; users in different markets should override the price input.
- **Establishment timeline assumes good seedbed preparation, adequate rainfall in the first 8 weeks, and reasonable weed management.** Real-world establishment can take significantly longer under poor conditions.
- **Pest and disease pressure is not modeled.** *Mucuna bracteata* is generally robust; *Calopogonium* spp. can be susceptible to defoliators in some regions.

## Contributing

Contributions are very welcome — bug reports, parameter updates with citations, additional species, additional crop systems, translations, and UI improvements. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the workflow. Be aware:

- Numerical changes to the data files (`src/data/*.json`) must come with a citation to a published source.
- Code changes should keep the calculator dependency-free (vanilla ES2020+ JavaScript).
- All contributors agree to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## License

MIT License. Copyright (c) 2026 Chemiseed Sdn. Bhd. See [`LICENSE`](LICENSE).

## Citation

If you use this calculator or its data in research, please cite it:

```bibtex
@software{chemiseed_tropical_cover_crop_calculator_2026,
  author       = {Abdul, Shaharil and {Chemiseed Sdn. Bhd.}},
  title        = {Tropical Cover Crop Calculator: open-source seed-rate, nitrogen-fixation, and climate-suitability tools for tropical cover crops},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/chemiseed/tropical-cover-crop-calculator},
  version      = {1.0.0}
}
```

A `CITATION.cff` file is also provided so GitHub, Zenodo, and OpenAlex can pick up the citation metadata automatically.

## Contact

Maintainer: Shaharil Abdul — shaharil@chemiseed.com
Organization: Chemiseed Sdn. Bhd. — https://chemiseed.com
Sister brand: Kudzu Seeds Trading — https://kudzuseeds.com

---

If you use this in production, we would love to know — drop us a note.
