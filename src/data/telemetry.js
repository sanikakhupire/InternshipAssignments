export const TELEMETRY_SPECS = [
  {
    label: 'Powertrain Output',
    value: '1,450 HP',
    detail: 'Quad-Motor Torque Vectoring',
    category: 'PROPULSION'
  },
  {
    label: '0–100 km/h (0–62 mph)',
    value: '1.74s',
    detail: 'Sub-2-second benchmark launch',
    category: 'ACCELERATION'
  },
  {
    label: 'Aerodynamic Downforce',
    value: '980 kg',
    detail: '@ 250 km/h with active aero wing',
    category: 'AERODYNAMICS'
  },
  {
    label: 'Scroll Sampling Rate',
    value: '1,000 Hz',
    detail: 'Sub-pixel ScrollTrigger interpolation',
    category: 'TELEMETRY'
  }
];

export const DRIVE_MODES = [
  { id: 'track', name: 'TRACK MODE', color: '#00F0FF', topSpeed: '380 km/h', downforce: '980 kg', aeroAngle: '14°' },
  { id: 'stealth', name: 'STEALTH AERO', color: '#10B981', topSpeed: '412 km/h', downforce: '620 kg', aeroAngle: '4°' },
  { id: 'kinetic', name: 'KINETIC OVERBOOST', color: '#F59E0B', topSpeed: '435 km/h', downforce: '1,100 kg', aeroAngle: '22°' }
];
