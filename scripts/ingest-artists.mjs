import fs from 'node:fs/promises';
import path from 'node:path';

const realArtists = [
  {
    id: 'mister-cartoon',
    name: 'Mister Cartoon',
    handle: '@misterctoons',
    headline: 'Godfather of Fineline Black & Grey, West Coast Chicano Icon',
    city: 'Los Angeles',
    country: 'United States',
    studio: 'Sanctuary Studios LA',
    styles: ['Fineline', 'Chicano', 'Black & Grey', 'Lettering', 'Street Culture'],
    badge: 'Cultural Icon',
    bio: 'Mark Machado, universally known as Mister Cartoon, is the definitive architect of West Coast street culture and single-needle fineline black and grey. Originating in East LA graffiti culture, his work adorned legends including Eminem, Snoop Dogg, Dr. Dre, and Kobe Bryant, bridging underground street expression with global museum recognition.',
    instagram: 'https://instagram.com/misterctoons',
    bookingUrl: 'https://mistercartoon.com',
    bookingStatus: 'By Referral',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 32,
    awards: ['LA Mayor Cultural Impact Award', 'Smithsonian Exhibition Honoree'],
    featured: true,
    rank: 4,
    signatureWork: [
      {
        title: 'Classic West Coast Clown Girl & Lowrider Canvas',
        image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop',
        tag: 'Backpiece'
      }
    ]
  },
  {
    id: 'paul-booth',
    name: 'Paul Booth',
    handle: '@paulbooth',
    headline: 'Undisputed Sovereign of Dark Surrealism & Macabre Realism',
    city: 'New York',
    country: 'United States',
    studio: 'Last Rites Tattoo Theatre',
    styles: ['Dark Surrealism', 'Black & Grey', 'Biomech', 'Horror Realism'],
    badge: 'Dark Master',
    bio: 'Paul Booth pioneered the dark surrealist tattoo movement from his storied Manhattan sanctuary, Last Rites. Inducted into the National Arts Club as the first tattoo artist in history, Booth is celebrated for biomechanical nightmares and evocative demonological portraits, having tattooed rock royalty including Slayer, Slipknot, and Pantera.',
    instagram: 'https://instagram.com/paulbooth',
    bookingUrl: 'https://paulboothart.com',
    bookingStatus: 'Waitlist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 35,
    awards: ['Rolling Stone King of Rock Tattoos', 'First Tattooist Inducted into National Arts Club'],
    featured: true,
    rank: 5,
    signatureWork: [
      {
        title: 'Demonic Biomechanical Torso Piece',
        image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
        tag: 'Torso'
      }
    ]
  },
  {
    id: 'nikko-hurtado',
    name: 'Nikko Hurtado',
    handle: '@nikkohurtado',
    headline: 'Grandmaster of Full-Color Hyper-Realistic Portraiture',
    city: 'Los Angeles',
    country: 'United States',
    studio: 'Black Anchor Worldwide',
    styles: ['Color Realism', 'Portraiture', 'Photorealism', 'Pop Culture'],
    badge: 'Color King',
    bio: 'Nikko Hurtado broke the color barrier in the early 2000s with his groundbreaking technicolor portraits. His ability to mimic oil paint translucency, reflections in pupils, and exact skin tones changed the possibilities of color tattooing forever.',
    instagram: 'https://instagram.com/nikkohurtado',
    bookingUrl: 'https://blackanchorworldwide.com',
    bookingStatus: 'Open',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 22,
    awards: ['Best in Color (Worldwide Conventions)', 'Inked Magazine Icon Award'],
    featured: true,
    rank: 6,
    signatureWork: [
      {
        title: 'Hyper-Vivid Renaissance Madonna Color Portrait',
        image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop',
        tag: 'Outer Thigh'
      }
    ]
  },
  {
    id: 'shige',
    name: 'Shige (Shigenori Iwasaki)',
    handle: '@shige_yellowblaze',
    headline: 'Virtuoso of Neo-Japanese Irezumi & Dynamic Flow Architecture',
    city: 'Yokohama',
    country: 'Japan',
    studio: 'Yellow Blaze Tattoo Studio',
    styles: ['Neo-Japanese', 'Irezumi', 'Full Bodysuit', 'Dynamic Composition'],
    badge: 'Living Legend',
    bio: 'Trained originally in motorcycle engineering, Shige revolutionized Japanese Irezumi by infusing traditional Ukiyo-e motifs with three-dimensional anatomical kinetics. His full bodysuits feature unprecedented depth, luminous colors, and explosive tidal flow that wrap the human form like living armor.',
    instagram: 'https://instagram.com/shige_yellowblaze',
    bookingUrl: 'https://yellowblaze.net',
    bookingStatus: 'Books Closed',
    avatar: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1565058379802-dd10214815a5?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 28,
    awards: ['Best of Show Milan Tattoo Convention', 'Author of Shige: The Art of Yellow Blaze'],
    featured: true,
    rank: 7,
    signatureWork: [
      {
        title: 'Full Backpiece Dragon Rising from Tempest Waves',
        image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
        tag: 'Full Suit'
      }
    ]
  },
  {
    id: 'gakkin',
    name: 'Gakkin',
    handle: '@gakkinx',
    headline: 'Master of Freehand Organic Blackwork & Seamless Anatomy Wrap',
    city: 'Amsterdam',
    country: 'Netherlands',
    studio: 'Gakkin Private Studio Amsterdam',
    styles: ['Blackwork', 'Freehand', 'Japanese Contemporary', 'Organic Bodysuit'],
    badge: 'Blackwork Sovereign',
    bio: 'Kyoto-born Gakkin works entirely freehand directly on the body without stencils. Blending traditional Japanese botanical motifs (chrysanthemums, bonsai, waves) with pitch-black saturated voids, his monochromatic bodily coverage creates one of the most distinctive visual signatures on Earth.',
    instagram: 'https://instagram.com/gakkinx',
    bookingUrl: 'https://gakkin-tattoo.com',
    bookingStatus: 'Waitlist',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 24,
    awards: ['Amsterdam Tattoo Convention Pioneer Trophy', 'Gods of Ink Masterclass Keynote'],
    featured: true,
    rank: 8,
    signatureWork: [
      {
        title: 'Full Bodysuit Freehand Inverted Chrysanthemum',
        image: 'https://images.unsplash.com/photo-1590246814883-578337851d7e?q=80&w=800&auto=format&fit=crop',
        tag: 'Full Bodysuit'
      }
    ]
  },
  {
    id: 'ryan-ashley',
    name: 'Ryan Ashley',
    handle: '@ryanashleymalarkey',
    headline: 'Pioneer of Intricate Ornamental Filigree & Victorian Lace Black & Grey',
    city: 'New York',
    country: 'United States',
    studio: 'The Elysium Studios & Private Atelier',
    styles: ['Ornamental', 'Filigree', 'Black & Grey', 'Jewelry Realism', 'Lace'],
    badge: 'Ink Master Champion',
    bio: 'The historic first female champion of TV hit Ink Master, Ryan Ashley Malarkey translated high-fashion Victorian jewelry design and antique filigree into stunning dimensional skin adornments. Her work features realistic gemstones, draped pearl strings, and metallic baroque scrollwork.',
    instagram: 'https://instagram.com/ryanashleymalarkey',
    bookingUrl: 'https://ryanashley.com',
    bookingStatus: 'Waitlist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 16,
    awards: ['Ink Master Season 8 Winner', 'Ink Master Angels Host', 'Forbes 30 Under 30 Art & Style'],
    featured: false,
    rank: 9,
    signatureWork: [
      {
        title: 'Victorian Baroque Filigree & Chandelier Pearl Collar',
        image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop',
        tag: 'Chest Plate'
      }
    ]
  },
  {
    id: 'filip-leu',
    name: 'Filip Leu',
    handle: '@filipleu',
    headline: 'Global Titan of Modern Tattoo Heritage & The Leu Family Dynastic Art',
    city: 'Sainte-Croix',
    country: 'Switzerland',
    studio: 'The Leu Family Iron',
    styles: ['Contemporary Japanese', 'Freehand', 'Psychedelic Bio-Organic', 'Bodysuit'],
    badge: 'Living Legend',
    bio: 'Born into legendary tattoo royalty as the son of Felix Leu, Filip Leu is widely regarded as one of the single most influential tattoo artists of the late 20th and early 21st centuries. His innovative blending of classical Japanese composition with Swiss surrealism inspired three generations of working tattooers.',
    instagram: 'https://instagram.com/filipleu',
    bookingUrl: 'https://leufamilyiron.com',
    bookingStatus: 'Books Closed',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 42,
    awards: ['Lifetime Achievement Award Mondial du Tatouage', 'Co-Founder of Art Brut Tattoo Archive'],
    featured: false,
    rank: 10,
    signatureWork: [
      {
        title: 'Biomechanical Dragon Full Bodysuit Concept',
        image: 'https://images.unsplash.com/photo-1565058379802-dd10214815a5?q=80&w=800&auto=format&fit=crop',
        tag: 'Master Bodysuit'
      }
    ]
  },
  {
    id: 'jun-cha',
    name: 'Jun Cha',
    handle: '@juncha',
    headline: 'Classical Renaissance Sculptural Realism in Single-Needle Black & Grey',
    city: 'Los Angeles',
    country: 'United States',
    studio: 'MONARC Studios',
    styles: ['Black & Grey', 'Renaissance Realism', 'Single-Needle', 'Classical Sculpture'],
    badge: 'Master Sculptor',
    bio: 'Apprenticed under Mr. Cartoon and Baby Ray in East Los Angeles, Jun Cha took the Chicano fineline tradition into the world of Italian Renaissance marble sculpture. His depictions of Michelangelo, Bernini, and Greco-Roman gods look as though chiseled directly out of Carrara marble.',
    instagram: 'https://instagram.com/juncha',
    bookingUrl: 'https://monarcstudios.com',
    bookingStatus: 'Waitlist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 18,
    awards: ['MONARC Editions Fine Art Laureate', 'Lucerne Fine Arts Fellow'],
    featured: false,
    rank: 11,
    signatureWork: [
      {
        title: 'Bernini Rape of Proserpina Sculptural Backpiece',
        image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop',
        tag: 'Backpiece'
      }
    ]
  },
  {
    id: 'claudia-de-sabe',
    name: 'Claudia de Sabe',
    handle: '@claudiadesabe',
    headline: 'Western-Eastern Fusion Virtuoso & Creator of the World First Tattooed Car',
    city: 'London',
    country: 'United Kingdom',
    studio: 'Seven Doors Tattoo',
    styles: ['Neo-Traditional', 'Japanese Traditional', 'Western-Eastern Fusion', 'Floral'],
    badge: 'Modern Master',
    bio: 'Based in London at the acclaimed Seven Doors Tattoo, Claudia de Sabe is celebrated for her romantic synthesis of traditional Japanese imagery, Art Nouveau, and bold Western lines. Commissioned by Lexus to create the world’s first tattooed automobile, she is a titan of contemporary British tattoo culture.',
    instagram: 'https://instagram.com/claudiadesabe',
    bookingUrl: 'https://sevendoorstattoo.com',
    bookingStatus: 'Open',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 20,
    awards: ['Lexus Global Brand Artist', 'London International Tattoo Convention Best Color'],
    featured: false,
    rank: 12,
    signatureWork: [
      {
        title: 'Geisha with Peonies & Swallow Sleeve',
        image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop',
        tag: 'Sleeve'
      }
    ]
  },
  {
    id: 'mirko-sata',
    name: 'Mirko Sata',
    handle: '@mirkosata',
    headline: 'Esoteric Snake Virtuoso & Master of Inverted Black & White Yin-Yang Linework',
    city: 'Milan',
    country: 'Italy',
    studio: 'Satatttvision Atelier',
    styles: ['Black & White Linework', 'Esoteric', 'Serpentine Realism', 'Minimalist'],
    badge: 'Esoteric Innovator',
    bio: 'Milanese artist Mirko Sata transformed tattoo linework by intertwining pure white ink with midnight-black contours, depicting sinuous intertwining serpents and mystical roses. His monochromatic reptilian motifs sparked an international trend of negative-space serpent design.',
    instagram: 'https://instagram.com/mirkosata',
    bookingUrl: 'https://satatttvision.com',
    bookingStatus: 'Open',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop',
    experienceYears: 12,
    awards: ['Milan Design Week Special Presentation', 'Vogue Italia Vanguard Featured'],
    featured: false,
    rank: 13,
    signatureWork: [
      {
        title: 'Entangled White & Black Ouroboros Snakes',
        image: 'https://images.unsplash.com/photo-1590246814883-578337851d7e?q=80&w=800&auto=format&fit=crop',
        tag: 'Forearm'
      }
    ]
  }
];

async function run() {
  const artistsDir = path.join(process.cwd(), 'src/content/artists');
  console.log(`Ingesting ${realArtists.length} verified tattoo masters into: ${artistsDir}`);

  for (const artist of realArtists) {
    const filePath = path.join(artistsDir, `${artist.id}.json`);
    const { id, ...data } = artist;
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`✓ Saved: ${artist.id}.json (${artist.name} · ${artist.city}, ${artist.country})`);
  }

  console.log('✅ Ingestion completed successfully.');
}

run();
