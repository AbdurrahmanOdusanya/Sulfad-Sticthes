import { ServiceItem, GalleryItem, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: 'Sulfad Stitches',
  phones: ['08133613642', '09058857717'],
  whatsapps: ['08133613642', '09058857717'],
  primaryWhatsAppLink: 'https://wa.me/2348133613642',
  email: 'fadlullahisulaimon@gmail.com',
  location: {
    address: 'Opposite Ace Supermarket, Olusegun Osoba Road, Oke-Ilewo, Abeokuta, Ogun State, Nigeria',
    landmark: 'Opposite Ace Supermarket',
    city: 'Abeokuta',
    state: 'Ogun State',
  },
};

// Formats a custom whatsapp link with prerecorded text
export function getWhatsAppUrl(text: string, phone: string = '2348133613642'): string {
  const formattedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${formattedText}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    name: 'Custom Kaftans',
    description: 'Immaculately tailored lightweight Kaftans featuring elegant contemporary necklines, custom single/double cuffs, and pristine hand-finishing.',
    iconName: 'Scissors',
    badge: 'Signature',
  },
  {
    id: 's2',
    name: 'Senator Wears',
    description: 'Sleek, sharp, and structured designs with custom chest embroidery and clean lines, perfect for everyday sophistication and executive presence.',
    iconName: 'Sparkles',
    badge: 'Popular',
  },
  {
    id: 's3',
    name: 'Agbada Designs',
    description: 'Majestic three-piece traditional garments with heavy ornate embroidery, precise flowing drapes, and premium lightweight yet structured fabrics.',
    iconName: 'Crown',
    badge: 'Royal',
  },
  {
    id: 's4',
    name: 'Traditional Attires',
    description: 'Bespoke cultural ensembles celebrating legacy. Tailored with meticulous alignment of patterns, custom fabrics, and heritage-inspired drapes.',
    iconName: 'Heart',
  },
  {
    id: 's5',
    name: 'Wedding Outfits',
    description: 'Exquisite, highly customized groom and groomsmen collections. Perfectly coordinated, matching themes with state-of-the-art detailing and fitting.',
    iconName: 'Gem',
    badge: 'Exclusive',
  },
  {
    id: 's6',
    name: 'Corporate Native Wears',
    description: 'Modern business-native outfits bridging traditional styling and professional corporate environments with subtle geometric cuts.',
    iconName: 'Briefcase',
  },
  {
    id: 's7',
    name: 'Bespoke Tailoring',
    description: 'Individually crafted block patterns adjusted precisely to your unique physiology, ensuring a perfect ergonomic silhouette.',
    iconName: 'UserCheck',
  },
  {
    id: 's8',
    name: 'Measurement & Fitting',
    description: 'Comprehensive personal consultation, posture analysis, and 24-point professional measuring to guarantee absolute perfection.',
    iconName: 'Ruler',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    name: 'The Sovereign Agbada',
    category: 'agbada',
    description: 'Royal emerald three-piece Agbada featuring hand-stitched premium gold filigree motifs and crisp structural shoulders.',
    image: 'https://images.unsplash.com/photo-1620932934088-fbdb2920e484?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Royal Selection',
  },
  {
    id: 'g2',
    name: 'Imperial Black Senator',
    category: 'senator-wears',
    description: 'High-contrast midnight back Senator with geometrical accent lines along the placket, reflecting power and quiet luxury.',
    image: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Bestseller',
  },
  {
    id: 'g3',
    name: 'Ivory Royale Kaftan',
    category: 'kaftans',
    description: 'Minimalist sand-white kaftan tailored with custom hidden-button placket and textured linen structure, embodying pure refinement.',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Presidential',
  },
  {
    id: 'g4',
    name: 'Groom’s Heirloom Velvet Ensemble',
    category: 'wedding',
    description: 'Unparralled custom bridal native outfit with rich velvet overlays, gold thread embroidery, and matching structural cap.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Exclusive Wedding',
  },
  {
    id: 'g5',
    name: 'Executive Charcoal Set',
    category: 'corporate',
    description: 'Slate grey wool-blend corporate native wear featuring a tapered cut, flat-front trousers, and ergonomic stretch tailoring.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Executive',
  },
  {
    id: 'g6',
    name: 'Sunset Gold Agbada',
    category: 'agbada',
    description: 'A masterpiece of classic mustard-gold silk damask with concentric hand-guided patterns, curated for timeless celebration.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Heirloom',
  },
  {
    id: 'g7',
    name: 'Classic Off-White Senator',
    category: 'senator-wears',
    description: 'Perfect daily-elegance cream senator suit with subtle wood-grain buttons and geometric collar piping.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Modernist',
  },
  {
    id: 'g8',
    name: 'Bespoke Ceremony Kaftan',
    category: 'wedding',
    description: 'Exquisite champagne gold wedding reception kaftan with symmetrical side embroidery and luxurious drape.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    priceTag: 'Signature Groom',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hon. Babatunde Alao',
    role: 'Corporate Executive',
    location: 'Abeokuta, Nigeria',
    quote: "Sulfad Stitches delivered exactly what I wanted. The fitting was exceptionally sharp, and the attention to detail on the embroidery is truly world-class. Absolute value for money.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 't2',
    name: 'Dr. Femi Adeyemi',
    role: 'Medical Director / Groom',
    location: 'Lagos/Ogun States',
    quote: "My wedding agbada and reception kaftan exceeded all expectations. Everyone kept asking where I got them. The fabric quality, custom drape, and matching cap were absolutely magnificent.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 't3',
    name: 'Engr. Sulaimon Yusuf',
    role: 'Tech Lead',
    location: 'Abeokuta, Nigeria',
    quote: "Excellent tailoring and highly professional customer service. From the precise measurements to the early delivery, Sulfad Stitches represents pure luxury and premium reliability.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
  }
];

export const BRAND_VALUES = [
  {
    title: 'Premium Finishing',
    description: 'Every stitch, seam, and embroidery is crafted using top-tier sewing technology and meticulous handwork, ensuring zero loose threads and absolute clean edges.',
    icon: 'Sparkles',
  },
  {
    title: 'Perfect Fit',
    description: 'We analyze your posture, shoulder slope, and natural stance to build a custom-adjusted block, guaranteeing an ergonomic silhouette that moves with you.',
    icon: 'Ruler',
  },
  {
    title: 'Quality Fabrics',
    description: 'We source only premium Italian wools, soft cashmeres, luxurious polished brocades, and fine linen to guarantee comfort, longevity, and elegant luster.',
    icon: 'Tissue',
  },
  {
    title: 'Experienced Craftsmanship',
    description: 'Our master tailors bring decades of combined experience in cutting and constructing intricate Nigerian native attire, maintaining the rich culture.',
    icon: 'Scissors',
  },
  {
    title: 'Affordable Luxury',
    description: 'Experience the prestige and fit of high-end custom couture without the exorbitant markup. Transparent pricing tailored to premium materials.',
    icon: 'Gem',
  },
  {
    title: 'Fast Delivery',
    description: 'We respect your schedule. Enjoy rapid construction times alongside real-time fitting updates, strictly meeting our agreed-upon launch deadlines.',
    icon: 'Zap',
  },
  {
    title: 'Personalized Service',
    description: 'Every client is a valued partner. We offer bespoke advice on shade selections, fabric weights, collar designs, and styling to match your event.',
    icon: 'Heart',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Our work is not complete until you look and feel perfect. We conduct comprehensive inspection fitting sessions to ensure absolute satisfaction.',
    icon: 'Smile',
  },
];
