'use client';

import ExpandableDetails from '@/components/ui/expandable-details';

const FeaturesList = () => {
  const featureCategories = [
    {
      title: 'Creator Hacks',
      color: 'text-red-400',
      features: [
        'GDShare',
        'Image References',
        'Pinch to Zoom',
        'Lasso Select',
        'Rotation Snapping',
        'Show Degrees',
        'Rotate in place',
        'Verify Hack',
        'HSV Preview',
        'Convenient Move Buttons',
        'Copy Hack',
      ],
    },
    {
      title: 'Icon Customization',
      color: 'text-orange-400',
      features: [
        'Unlock All Icons',
        'Icon Presets',
        'Custom Icon Colors',
        'Icon Opacity',
        'Rainbow Icons',
        'Custom Rainbow Saturation',
        'Icon Randomizer',
        'No Trail',
        'Solid Trail',
        'No Wave Trail',
        'Solid Wave Trail',
        'No Wave Pulse',
        'Custom Wave Trail Size',
        'Custom Wave Trail Color',
        'No Death Effect',
        'Icon Copier',
      ],
    },
    {
      title: 'Pro Player Hacks',
      color: 'text-yellow-400',
      features: [
        'Click Between Frames',
        'Startpos Switcher',
        'Speedhack (with audio)',
        'Show Hitboxes',
        'Show Hitboxes on Death',
        'Hitbox Multiplier',
        '120hz on supported devices',
        'Frame Advance',
        'Hide Pause Menu',
      ],
    },
    {
      title: 'Cosmetics',
      color: 'text-lime',
      features: [
        'Texture Packs',
        'Custom Music',
        'Custom Menu Background',
        'Custom List Colors',
        'Custom Scene Transition Time',
      ],
    },
    {
      title: 'Noclip Hacks',
      color: 'text-cyan',
      features: [
        'Noclip',
        'Noclip Accuracy',
        'Noclip Deaths',
        'Noclip Time',
        'Noclip Tint (customizable)',
        'Safe Mode',
      ],
    },
    {
      title: 'Small Fixes',
      color: 'text-blue-400',
      features: [
        'Fix Copy to Clipboard',
        'Respawn lag fix',
      ],
    },
    {
      title: 'Misc.',
      color: 'text-violet-400',
      features: [
        'Practice music sync',
        'Layout Mode',
        'Consistent Random Triggers',
        'Show Taps',
        'Absolute Attempt Counter',
        'NONG support',
        'SongFileHub integration',
        'Macro Bot',
        'Macro Database',
      ],
    },
  ];

  return (
    <div className="items-start text-start">
      <p className="text-base">(Click each to expand)</p>

      {featureCategories.map((category, index) => (
        <ExpandableDetails
          key={index}
          summary={category.title}
          color={category.color}
        >
          <ul className="list-disc list-inside">
            {category.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </ExpandableDetails>
      ))}
    </div>
  );
};

export default FeaturesList;
