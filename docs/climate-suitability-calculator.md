# Climate Suitability Calculator — Algorithm

A ranking tool for matching tropical cover crop species to a given location's climate envelope.

## Inputs

- **Region** — one of: `peninsular_malaysia`, `sabah`, `sarawak`, `sea_general`, `africa_humid`, `latam_humid`.
- **Altitude band** — one of: `lowland` (under 300 m), `mid_elevation` (300 to 800 m), `upland` (over 800 m).
- **Rainfall band** — one of: `under_1500`, `1500_2500`, `2500_3500`, `over_3500` (all in mm/year).

## Outputs

For each supported species, a suitability score on a 0 to 100 scale plus a short rationale string.

## Algorithm (plain language)

1. For each species, look up its region, altitude, and rainfall axis scores in `src/data/species.json`.
2. Each axis score is calibrated from published field performance for that species in the specified band.
3. Combine the three axis scores using a weighted mean:
   - Rainfall: 50 percent weight.
   - Altitude: 30 percent weight.
   - Region: 20 percent weight.
4. Rainfall is weighted highest because it is the strongest driver of tropical legume cover crop establishment.
5. Rank species highest score to lowest.
6. Attach a short rationale derived from which axis contributed most to the final score.

## Calibration notes

- Scores are anchored to two reference data points per species per axis (best-fit band and worst-fit band).
- Intermediate bands are linearly interpolated.
- A species missing a published source for a given band is assigned the regional default rather than fabricated.

## Limitations

- Soil chemistry is not in the model. A species ranked highly for a region with low soil pH (under 4.5) may still need lime.
- Slope and drainage are not in the model.
- Pest and disease pressure is not in the model.
