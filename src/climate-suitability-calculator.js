// Climate Suitability Calculator
// (c) 2026 Chemiseed Sdn. Bhd. — MIT License
// Ranks tropical cover crop species by suitability for a given region, altitude, and rainfall band.

import speciesData from './data/species.json' with { type: 'json' };

export function calculateClimateSuitability(input) {
  const region = input.region;
  const altitude = input.altitude;
  const rainfall = input.rainfall;

  const w = speciesData.axisWeights;
  const results = speciesData.species.map(sp => {
    const r = sp.regionScores[region] ?? 50;
    const a = sp.altitudeScores[altitude] ?? 50;
    const f = sp.rainfallScores[rainfall] ?? 50;
    const score = Math.round(r * w.region + a * w.altitude + f * w.rainfall);

    const axisScores = [
      { axis: 'rainfall', score: f, weight: w.rainfall },
      { axis: 'altitude', score: a, weight: w.altitude },
      { axis: 'region', score: r, weight: w.region }
    ];
    const top = axisScores.reduce((best, cur) =>
      cur.score * cur.weight > best.score * best.weight ? cur : best
    );

    return {
      species: sp.id,
      binomial: sp.binomial,
      shortCode: sp.shortCode,
      score,
      rationale: buildRationale(score, top.axis, region, altitude, rainfall)
    };
  });

  results.sort((x, y) => y.score - x.score);
  return results;
}

function buildRationale(score, topAxis, region, altitude, rainfall) {
  if (score >= 85) return 'Strong fit on ' + topAxis + ' for this location.';
  if (score >= 70) return 'Reasonable fit; check ' + topAxis + ' tolerance for local conditions.';
  if (score >= 55) return 'Marginal fit; consider as a secondary species in a mix.';
  return 'Not recommended as a primary species in this climate envelope.';
}
