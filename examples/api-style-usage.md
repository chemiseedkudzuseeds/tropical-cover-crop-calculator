# Usage examples

## Cover Crop Calculator

```js
import { calculateCoverCropPlan } from '../src/cover-crop-calculator.js';

const plan = calculateCoverCropPlan({
  hectares: 25,
  cropSystem: 'oil_palm_immature'
});

// plan.mix         => [{species, ratePerHaKg, totalKg}, ...]
// plan.totalSeedKg
// plan.weeksToCoverLow, plan.weeksToCoverHigh
// plan.fixedNitrogenKgTotal
// plan.ureaEquivalentKgTotal
// plan.fertilizerOffsetRmTotal
```

## Climate Suitability Calculator

```js
import { calculateClimateSuitability } from '../src/climate-suitability-calculator.js';

const ranking = calculateClimateSuitability({
  region: 'peninsular_malaysia',
  altitude: 'lowland',
  rainfall: '2500_3500'
});

// ranking => [{ species, score, rationale }, ...]
// sorted highest score first
```

## Override the urea price for local markets

```js
const plan = calculateCoverCropPlan({
  hectares: 25,
  cropSystem: 'oil_palm_immature',
  ureaPriceRmPerKg: 2.20
});
```
