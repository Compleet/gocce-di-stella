/**
 * ESSENZA - Product Catalog
 *
 * Each oil tells a story of origin, tradition, and transformation.
 * Placeholder data - client will provide final details.
 */

export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    it: string;
  };
  tagline: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  origin: string;
  botanicalName: string;
  extractionMethod: string;
  volume: string;
  price: number;
  currency: string;
  benefits: {
    en: string[];
    it: string[];
  };
  uses: {
    en: string[];
    it: string[];
  };
  scent: {
    en: string;
    it: string;
  };
  mood: string; // For visual theming
  image: string;
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "lavanda-toscana",
    slug: "lavanda-toscana",
    name: {
      en: "Tuscan Lavender",
      it: "Lavanda Toscana"
    },
    tagline: {
      en: "Serenity from the rolling hills",
      it: "Serenità dalle dolci colline"
    },
    description: {
      en: "Hand-harvested from centuries-old fields in the Tuscan hills, this lavender carries the warmth of Mediterranean sun and the wisdom of generations. Each drop is a journey to stillness.",
      it: "Raccolta a mano da campi secolari sulle colline toscane, questa lavanda porta il calore del sole mediterraneo e la saggezza di generazioni. Ogni goccia è un viaggio verso la quiete."
    },
    origin: "Toscana, Italia",
    botanicalName: "Lavandula angustifolia",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 24.00,
    currency: "EUR",
    benefits: {
      en: ["Calming", "Sleep support", "Skin soothing", "Stress relief"],
      it: ["Calmante", "Supporto al sonno", "Lenitivo per la pelle", "Antistress"]
    },
    uses: {
      en: ["Add to evening bath", "Diffuse before sleep", "Apply diluted to temples"],
      it: ["Aggiungere al bagno serale", "Diffondere prima di dormire", "Applicare diluito sulle tempie"]
    },
    scent: {
      en: "Floral, herbaceous, with subtle woody undertones",
      it: "Floreale, erbaceo, con sottili note legnose"
    },
    mood: "calm",
    image: "/images/lavender.jpg",
    inStock: true,
    featured: true
  },
  {
    id: "bergamotto-calabria",
    slug: "bergamotto-calabria",
    name: {
      en: "Calabrian Bergamot",
      it: "Bergamotto di Calabria"
    },
    tagline: {
      en: "Liquid sunshine from the south",
      it: "Sole liquido dal sud"
    },
    description: {
      en: "From the sun-drenched groves of Calabria comes this precious citrus essence. Bergamot has been treasured for centuries, its bright yet complex character elevating spirits and inspiring clarity.",
      it: "Dagli agrumeti baciati dal sole della Calabria arriva questa preziosa essenza agrumata. Il bergamotto è stato apprezzato per secoli, il suo carattere brillante ma complesso eleva lo spirito e ispira chiarezza."
    },
    origin: "Calabria, Italia",
    botanicalName: "Citrus bergamia",
    extractionMethod: "Cold pressed",
    volume: "10ml",
    price: 28.00,
    currency: "EUR",
    benefits: {
      en: ["Uplifting", "Clarifying", "Balancing", "Refreshing"],
      it: ["Tonificante", "Chiarificante", "Equilibrante", "Rinfrescante"]
    },
    uses: {
      en: ["Morning diffusion", "Add to carrier oil for massage", "Natural perfume base"],
      it: ["Diffusione mattutina", "Aggiungere a olio vettore per massaggio", "Base per profumo naturale"]
    },
    scent: {
      en: "Citrus, floral, slightly spicy with a bittersweet depth",
      it: "Agrumato, floreale, leggermente speziato con profondità agrodolce"
    },
    mood: "bright",
    image: "/images/bergamot.jpg",
    inStock: true,
    featured: true
  },
  {
    id: "rosmarino-ligure",
    slug: "rosmarino-ligure",
    name: {
      en: "Ligurian Rosemary",
      it: "Rosmarino Ligure"
    },
    tagline: {
      en: "Ancient herb of remembrance",
      it: "Antica erba della memoria"
    },
    description: {
      en: "Wild rosemary from the rugged Ligurian coast, where sea winds and mountain air create an essence of remarkable clarity. Known since antiquity for sharpening the mind and honoring memory.",
      it: "Rosmarino selvatico dalla costa ligure, dove i venti marini e l'aria di montagna creano un'essenza di notevole purezza. Conosciuto fin dall'antichità per affinare la mente e onorare la memoria."
    },
    origin: "Liguria, Italia",
    botanicalName: "Rosmarinus officinalis",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 18.00,
    currency: "EUR",
    benefits: {
      en: ["Mental clarity", "Energizing", "Focus enhancement", "Respiratory support"],
      it: ["Chiarezza mentale", "Energizzante", "Migliora la concentrazione", "Supporto respiratorio"]
    },
    uses: {
      en: ["Study or work diffusion", "Scalp massage diluted", "Steam inhalation"],
      it: ["Diffusione durante studio o lavoro", "Massaggio cuoio capelluto diluito", "Inalazione a vapore"]
    },
    scent: {
      en: "Herbaceous, camphoraceous, fresh with woody notes",
      it: "Erbaceo, canforato, fresco con note legnose"
    },
    mood: "energize",
    image: "/images/rosemary.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "limone-amalfi",
    slug: "limone-amalfi",
    name: {
      en: "Amalfi Lemon",
      it: "Limone di Amalfi"
    },
    tagline: {
      en: "Mediterranean sunshine captured",
      it: "Sole mediterraneo catturato"
    },
    description: {
      en: "From the legendary terraced gardens of the Amalfi Coast, where lemons grow impossibly large and fragrant. This essence captures pure joy—the scent of Italian summers and la dolce vita.",
      it: "Dai leggendari giardini terrazzati della Costiera Amalfitana, dove i limoni crescono incredibilmente grandi e profumati. Questa essenza cattura la pura gioia—il profumo delle estati italiane e la dolce vita."
    },
    origin: "Amalfi, Italia",
    botanicalName: "Citrus limon",
    extractionMethod: "Cold pressed",
    volume: "10ml",
    price: 22.00,
    currency: "EUR",
    benefits: {
      en: ["Mood lifting", "Cleansing", "Energizing", "Purifying"],
      it: ["Solleva l'umore", "Purificante", "Energizzante", "Depurativo"]
    },
    uses: {
      en: ["Kitchen diffusion", "Natural cleaning", "Morning shower aromatherapy"],
      it: ["Diffusione in cucina", "Pulizia naturale", "Aromaterapia doccia mattutina"]
    },
    scent: {
      en: "Bright, fresh, zesty with sweet undertones",
      it: "Brillante, fresco, vivace con sottotoni dolci"
    },
    mood: "joy",
    image: "/images/lemon.jpg",
    inStock: true,
    featured: true
  },
  {
    id: "salvia-piemonte",
    slug: "salvia-piemonte",
    name: {
      en: "Piedmont Sage",
      it: "Salvia del Piemonte"
    },
    tagline: {
      en: "Sacred herb of wisdom",
      it: "Erba sacra della saggezza"
    },
    description: {
      en: "From the alpine foothills of Piedmont, clary sage has been revered since ancient times. Its complex, wine-like aroma opens doorways to intuition and deeper understanding.",
      it: "Dalle colline alpine del Piemonte, la salvia sclarea è stata venerata fin dall'antichità. Il suo aroma complesso, simile al vino, apre porte verso l'intuizione e la comprensione profonda."
    },
    origin: "Piemonte, Italia",
    botanicalName: "Salvia sclarea",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 32.00,
    currency: "EUR",
    benefits: {
      en: ["Hormone balancing", "Calming", "Grounding", "Meditative"],
      it: ["Equilibrio ormonale", "Calmante", "Radicante", "Meditativo"]
    },
    uses: {
      en: ["Evening meditation", "Massage for tension", "Bath ritual"],
      it: ["Meditazione serale", "Massaggio per tensione", "Rituale del bagno"]
    },
    scent: {
      en: "Herbaceous, nutty, with wine-like warmth",
      it: "Erbaceo, nocciolato, con calore vinoso"
    },
    mood: "wisdom",
    image: "/images/sage.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "arancia-sicilia",
    slug: "arancia-sicilia",
    name: {
      en: "Sicilian Orange",
      it: "Arancia di Sicilia"
    },
    tagline: {
      en: "Sweet embrace of the island",
      it: "Dolce abbraccio dell'isola"
    },
    description: {
      en: "Blood oranges from volcanic Sicilian soil, where Etna's minerals infuse the fruit with extraordinary depth. This sweet, complex essence brings warmth to the heart and light to dark days.",
      it: "Arance rosse dal suolo vulcanico siciliano, dove i minerali dell'Etna infondono al frutto una profondità straordinaria. Questa essenza dolce e complessa porta calore al cuore e luce ai giorni bui."
    },
    origin: "Sicilia, Italia",
    botanicalName: "Citrus sinensis",
    extractionMethod: "Cold pressed",
    volume: "10ml",
    price: 16.00,
    currency: "EUR",
    benefits: {
      en: ["Warming", "Comforting", "Digestive support", "Child-friendly"],
      it: ["Riscaldante", "Confortante", "Supporto digestivo", "Adatto ai bambini"]
    },
    uses: {
      en: ["Diffuse for family gatherings", "Add to massage oil", "Holiday blending"],
      it: ["Diffondere per riunioni familiari", "Aggiungere a olio da massaggio", "Miscele festive"]
    },
    scent: {
      en: "Sweet, fruity, warm with subtle berry notes",
      it: "Dolce, fruttato, caldo con sottili note di frutti di bosco"
    },
    mood: "warmth",
    image: "/images/orange.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "eucalipto-sardegna",
    slug: "eucalipto-sardegna",
    name: {
      en: "Sardinian Eucalyptus",
      it: "Eucalipto di Sardegna"
    },
    tagline: {
      en: "Breath of the island wilderness",
      it: "Respiro della natura selvaggia"
    },
    description: {
      en: "From the wild landscapes of Sardinia, where eucalyptus trees have naturalized into the Mediterranean macchia. This powerful essence clears the mind and opens the breath.",
      it: "Dai paesaggi selvaggi della Sardegna, dove gli eucalipti si sono naturalizzati nella macchia mediterranea. Questa potente essenza schiarisce la mente e apre il respiro."
    },
    origin: "Sardegna, Italia",
    botanicalName: "Eucalyptus globulus",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 14.00,
    currency: "EUR",
    benefits: {
      en: ["Respiratory clearing", "Cooling", "Purifying", "Invigorating"],
      it: ["Libera le vie respiratorie", "Rinfrescante", "Purificante", "Rinvigorente"]
    },
    uses: {
      en: ["Steam inhalation", "Chest rub diluted", "Household cleansing"],
      it: ["Inalazione a vapore", "Frizione toracica diluita", "Pulizia domestica"]
    },
    scent: {
      en: "Fresh, camphoraceous, penetrating with mint undertones",
      it: "Fresco, canforato, penetrante con sottotoni di menta"
    },
    mood: "clarity",
    image: "/images/eucalyptus.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "menta-veneto",
    slug: "menta-veneto",
    name: {
      en: "Venetian Peppermint",
      it: "Menta del Veneto"
    },
    tagline: {
      en: "Cool awakening of the senses",
      it: "Fresco risveglio dei sensi"
    },
    description: {
      en: "Cultivated in the fertile plains of Veneto, this peppermint offers exceptional menthol content and remarkable purity. A single drop awakens the mind and refreshes the spirit.",
      it: "Coltivata nelle fertili pianure del Veneto, questa menta piperita offre un contenuto eccezionale di mentolo e notevole purezza. Una sola goccia risveglia la mente e rinfresca lo spirito."
    },
    origin: "Veneto, Italia",
    botanicalName: "Mentha piperita",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 15.00,
    currency: "EUR",
    benefits: {
      en: ["Cooling", "Digestive aid", "Headache relief", "Energy boost"],
      it: ["Rinfrescante", "Digestivo", "Sollievo mal di testa", "Energia"]
    },
    uses: {
      en: ["Temple application diluted", "After-meal tea addition", "Afternoon pick-me-up diffusion"],
      it: ["Applicazione tempie diluita", "Aggiunta al tè dopo pasto", "Diffusione pomeridiana energizzante"]
    },
    scent: {
      en: "Intensely minty, cool, fresh with sweet undertones",
      it: "Intensamente mentolato, fresco, con sottotoni dolci"
    },
    mood: "refresh",
    image: "/images/peppermint.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "ginepro-alpi",
    slug: "ginepro-alpi",
    name: {
      en: "Alpine Juniper",
      it: "Ginepro delle Alpi"
    },
    tagline: {
      en: "Spirit of the high mountains",
      it: "Spirito delle alte montagne"
    },
    description: {
      en: "Wildcrafted from the pristine Alpine heights, juniper has been used for purification since time immemorial. Its clean, forest-fresh aroma grounds the spirit while elevating perspective.",
      it: "Raccolto selvatico dalle incontaminate vette alpine, il ginepro è usato per la purificazione da tempo immemorabile. Il suo aroma pulito e fresco di foresta radica lo spirito mentre eleva la prospettiva."
    },
    origin: "Alpi Italiane",
    botanicalName: "Juniperus communis",
    extractionMethod: "Steam distillation",
    volume: "10ml",
    price: 26.00,
    currency: "EUR",
    benefits: {
      en: ["Purifying", "Grounding", "Detoxifying", "Protective"],
      it: ["Purificante", "Radicante", "Disintossicante", "Protettivo"]
    },
    uses: {
      en: ["Space clearing", "Meditation", "Massage for muscles"],
      it: ["Purificazione ambienti", "Meditazione", "Massaggio muscolare"]
    },
    scent: {
      en: "Woody, crisp, clean with subtle pine and pepper notes",
      it: "Legnoso, fresco, pulito con sottili note di pino e pepe"
    },
    mood: "ground",
    image: "/images/juniper.jpg",
    inStock: true,
    featured: false
  },
  {
    id: "neroli-calabria",
    slug: "neroli-calabria",
    name: {
      en: "Calabrian Neroli",
      it: "Neroli di Calabria"
    },
    tagline: {
      en: "Precious essence of orange blossom",
      it: "Preziosa essenza di fiori d'arancio"
    },
    description: {
      en: "The most precious of citrus oils, distilled from bitter orange blossoms in the groves of Calabria. Used by Italian nobility for centuries, neroli embodies refined elegance and profound calm.",
      it: "Il più prezioso degli oli agrumati, distillato dai fiori d'arancio amaro nei frutteti della Calabria. Usato dalla nobiltà italiana per secoli, il neroli incarna l'eleganza raffinata e la calma profonda."
    },
    origin: "Calabria, Italia",
    botanicalName: "Citrus aurantium",
    extractionMethod: "Steam distillation",
    volume: "5ml",
    price: 68.00,
    currency: "EUR",
    benefits: {
      en: ["Deeply calming", "Skin regenerating", "Anti-anxiety", "Heart opening"],
      it: ["Profondamente calmante", "Rigenerante per la pelle", "Antiansia", "Apre il cuore"]
    },
    uses: {
      en: ["Luxury skincare", "Meditation", "Special occasion perfumery"],
      it: ["Skincare di lusso", "Meditazione", "Profumeria per occasioni speciali"]
    },
    scent: {
      en: "Intensely floral, honey-sweet, with green and spicy facets",
      it: "Intensamente floreale, dolce come miele, con sfaccettature verdi e speziate"
    },
    mood: "luxury",
    image: "/images/neroli.jpg",
    inStock: true,
    featured: true
  }
];

export const featuredProducts = products.filter(p => p.featured);

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
