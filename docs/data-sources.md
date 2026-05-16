# Data Sources

All numerical parameters in this calculator are taken from published tropical agronomy literature. Every kg/ha and kg N/ha/yr value in `src/data/*.json` traces back to one of the sources below.

## Primary sources (Malaysia)

- **MPOB Oil Palm Bulletin** — Malaysian Palm Oil Board, multiple issues. Authoritative for oil palm cover crop establishment, biomass production, and nitrogen contribution under Malaysian conditions.
- **MPOB Oil Palm Industry Economic Journal (OPIEJ)** — biannual, open access.
- **MPOB Journal of Oil Palm Research (JOPR)** — peer-reviewed; covers agronomy, soils, and pest management.
- **RRIM (Rubber Research Institute of Malaysia) handbooks** — legume cover crop establishment in young rubber.
- **Pertanika Journal of Tropical Agricultural Science (JTAS)** — UPM publication; papers on *Mucuna bracteata*, *Pueraria phaseoloides*, *Centrosema pubescens* under Malaysian conditions.
- **PORIM (Palm Oil Research Institute of Malaysia) bulletins** — historical, on the standard four-species cover crop mix.
- **The Planter** — Incorporated Society of Planters journal.

## International sources

- **CIAT (International Center for Tropical Agriculture) Tropical Forages datasheets** — species pages for the same legumes under Latin American conditions. https://www.tropicalforages.info
- **FAO Grassland Index** species pages.
- **Industrial Crops and Products** journal.
- **Agriculture, Ecosystems & Environment** journal.
- **Field Crops Research** journal.

## Methodology notes

- Where multiple sources report different ranges, the calculator uses a **conservative midpoint** (closer to the lower bound).
- N-fixation estimates vary by measurement method (15N isotope dilution, ureide assay, natural abundance). Where methods differ across sources, the calculator favours values from 15N isotope dilution studies.
- Establishment timelines assume good seedbed preparation, adequate rainfall in the first 8 weeks, and basic weed management.

## How to cite a source for a new parameter

Pull requests proposing parameter changes must include a citation in this file in the form:

```
- Author, Year. Title. Journal, Vol(Issue): pages. DOI/URL.
```

Numerical changes without a citation will not be merged.
