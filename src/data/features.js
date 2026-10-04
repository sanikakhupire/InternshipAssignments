export const FEATURES_DATA = [
  {
    number: '01',
    title: 'Smooth Interaction',
    subtitle: 'KINETIC PHYSICS & MOMENTUM',
    description: 'Hardware-accelerated transforms eliminate input lag. Motion curves tuned for responsive, tactile feedback matching natural human scrolling inertia.',
    metrics: [
      { label: 'Latency', val: '< 2.4ms' },
      { label: 'Frame Budget', val: '16.6ms' }
    ],
    accent: 'from-cyan-500/20 to-transparent',
    borderGlow: 'group-hover:border-cyan-500/40',
    iconColor: 'text-cyber-cyan'
  },
  {
    number: '02',
    title: 'Scroll-Controlled Motion',
    subtitle: 'GSAP SCROLLTRIGGER PRECISION',
    description: 'Deterministic timeline scrub binding scroll progress directly to multi-axis translations, rotation matrices, and trail velocity markers.',
    metrics: [
      { label: 'Scrub Sync', val: '1:1 Lock' },
      { label: 'Pin Distance', val: '220vh' }
    ],
    accent: 'from-emerald-500/20 to-transparent',
    borderGlow: 'group-hover:border-emerald-500/40',
    iconColor: 'text-cyber-emerald'
  },
  {
    number: '03',
    title: 'Performance First',
    subtitle: 'COMPOSITOR-ONLY TRANSFORMS',
    description: 'Zero layout thrashing or reflow penalties. Every animation operates exclusively on GPU compositor layers (transform3d and opacity).',
    metrics: [
      { label: 'GPU Memory', val: 'Low Footprint' },
      { label: 'Layout Shifts', val: '0 CLS' }
    ],
    accent: 'from-amber-500/20 to-transparent',
    borderGlow: 'group-hover:border-amber-500/40',
    iconColor: 'text-cyber-amber'
  }
];
