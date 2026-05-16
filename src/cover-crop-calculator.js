// Cover Crop Calculator
// (c) 2026 Chemiseed Sdn. Bhd. — MIT License
// Estimates seed quantity, mix, establishment timeline, and biological N contribution
// for tropical leguminous cover crops. Parameters in src/data/.

import cropSystems from './data/crop-systems.json' with { type: 'json' };
import speciesData from './data/species.json' with { type: 'json' };

export function calculateCoverCropPlan(input) {
  const hectares = Number(input.hectares);
  if (!(hectares > 0)) {
    throw new Error('hectares must be a positive number');
  }
  const sys = cropSystems.cropSystems.find(s => s.id === input.cropSystem);
  if (!sys) {
    throw new Error('Unknown cropSystem: ' + input.cropSystem);
  }

  const mix = sys.mix.map(entry => {
    const sp = speciesData.species.find(x => x.id === entry.species);
    return {
      species: entry.species,
      binomial: sp ? sp.binomial : entry.species,
      shortCode: sp ? sp.shortCode : null,
      ratePerHaKg: entry.ratePerHaKg,
      totalKg: round1(entry.ratePerHaKg * hectares)
    };
  });

  const totalSeedKg = round1(mix.reduce((sum, m) => sum + m.totalKg, 0));
  const fixedNTotal = Math.round(sys.nFixKgHaYrMidpoint * hectares);

  const fo = cropSystems.fertilizerOffset;
  const ureaPrice = Number(input.ureaPriceRmPerKg ?? fo.ureaPriceRmPerKgDefault);
  const ureaKgPerKgN = 100 / fo.ureaNContentPercent;
  const ureaEquivalentKgTotal = Math.round(fixedNTotal * ureaKgPerKgN);
  const fertilizerOffsetRmTotal = Math.round(
    fixedNTotal * ureaKgPerKgN * ureaPrice * fo.biologicalNEfficiencyFactor
  );

  return {
    inputs: { hectares, cropSystem: sys.id, ureaPriceRmPerKg: ureaPrice },
    mix,
    totalSeedKg,
    weeksToCoverLow: sys.establishmentWeeksLow,
    weeksToCoverHigh: sys.establishmentWeeksHigh,
    fixedNitrogenKgTotal: fixedNTotal,
    ureaEquivalentKgTotal,
    fertilizerOffsetRmTotal,
    notes: sys.notes
  };
}

function round1(n) {
  return Math.round(n * 10) / 10;
}
