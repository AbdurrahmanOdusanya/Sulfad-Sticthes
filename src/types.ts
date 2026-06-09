export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: string; // Dynamic rendering of Lucide icons
  badge?: string;
}

export interface GalleryItem {
  id: string;
  name: string;
  category: 'kaftans' | 'senator-wears' | 'agbada' | 'wedding' | 'corporate';
  description: string;
  image: string;
  priceTag?: string; // Optional price range or Luxury notation
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
  image: string;
}

export interface DesignRequestForm {
  styleCategory: string;
  fabricPreference: string;
  timeline: string;
  notes: string;
}

export interface AppointmentForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  serviceType: string;
  notes: string;
}
