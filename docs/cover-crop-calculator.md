# Cover Crop Calculator, Algorithm

A planning aid for estimating seed quantity, mix composition, establishment timeline, and biological nitrogen contribution for tropical leguminous cover crops.

## Inputs

- **Hectares**: field area in hectares (positive number).
- **Crop system**: one of: \`oil_palm_immature\`, \`oil_palm_mature\`, \`rubber_young\`, \`rubber_mature\`, \`fruit_tree\`, \`smallholder_mixed\`.

## Outputs

- Recommended species mix for the selected crop system.
- Per-species seed rate (kg/ha) and total seed needed (kg).
- Estimated time to closed ground cover (weeks).
- Estimated biological N contribution (kg N/ha/year).
- Fertilizer-offset value, expressed as kg urea-equivalent and RM/ha at a conservative urea price.

## Algorithm (plain language)

1. Look up the crop system in \`src/data/crop-systems.json\`.
2. Read the recommended species mix and per-species seed rate from that entry.
3. For each species, multiply its rate by the user's hectares to get total seed.
4. Sum to get total seed needed.
5. Look up the establishment timeline range for the chosen mix.
6. Multiply the mix's per-hectare N-fixation midpoint by the hectarage for total fixed N.
7. Convert fixed N to urea equivalent using 1 kg N approx 2.17 kg urea, then apply a conservative 0.7 efficiency factor (since not all biological N reaches the cash crop in year one).

## Conservative defaults

- N-fixation midpoints are taken from the lower half of the published Malaysian range.
- Urea price defaults to RM 2.50 per kg bulk. Override for your local market.
- Establishment timelines assume good seedbed preparation and adequate first-8-week rainfall.

## What the calculator does not do

- Soil-type adjustments (assumes typical tropical mineral soil, Ultisol or Oxisol, pH 4.5 to 5.5).
- Pest pressure modeling.
- Year-on-year carryover or reseeding requirements.
- Economic analysis beyond fertilizer offset.

For a real planting, use this as a starting point for an agronomist conversation, not a replacement for one.
