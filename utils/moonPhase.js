export default function moonPhaseImage(astroData) {
  switch (astroData.moon_phase) {
    case 'Waxing Crescent':
      return '/images/moonPhases/1.png';
    case 'First Quarter':
      return '/images/moonPhases/2.png';
    case 'Waxing Gibbous':
      return '/images/moonPhases/3.png';
    case 'Full Moon':
      return '/images/moonPhases/4.png';
    case 'Waning Gibbous':
      return '/images/moonPhases/5.png';
    case 'Last Quarter':
      return '/images/moonPhases/6.png';
    case 'Waning Crescent':
      return '/images/moonPhases/7.png';
    default:
      return '';
  }
}
