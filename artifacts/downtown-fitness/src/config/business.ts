export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
  tiktok?: string;
}

export interface Location {
  name: string;
  address: string;
  mapEmbedUrl: string;
  googleMapsLink: string;
  hours: { day: string; hours: string }[];
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  city: string;
  country: string;
  website: string;
  rating: number;
  reviewCount: number;
  whatsappNumber: string;
  primaryColor: string;
  secondaryColor: string;
  category: string;
  locations: Location[];
  socialLinks: SocialLinks;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  features: { icon: string; title: string; desc: string }[];
  stats: { value: number; label: string; suffix: string; decimal?: boolean }[];
  plans: {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted: boolean;
    badge?: string;
  }[];
  trainers: {
    name: string;
    role: string;
    exp: string;
    specialty: string;
    img: string;
  }[];
  reviews: {
    name: string;
    badge: string;
    time: string;
    text: string;
    rating: number;
  }[];
  faqs: { q: string; a: string }[];
  ogImage: string;
}

const business: BusinessConfig = {
  name: 'KASRAT',
  shortName: 'KASRAT',
  tagline: 'Health & Fitness Club',
  description: 'KASRAT is a premium health and fitness club in Lake City, Lahore. We offer world-class equipment, expert trainers, and affordable memberships. Join now and transform your life.',
  phone: '03211111128',
  phoneDisplay: '0321-1111128',
  email: 'kasratbyfazeel@gmail.com',
  city: 'Lahore',
  country: 'Pakistan',
  website: 'https://sites.google.com/view/kasratbyfazeel',
  rating: 4.3,
  reviewCount: 116,
  whatsappNumber: '923211111128',
  primaryColor: '#FF6B00',
  secondaryColor: '#FF3D3D',
  category: 'Health & Fitness Club',
  locations: [
    {
      name: 'Valencia Town',
      address: 'D Block, Valencia Town, Lahore, Pakistan',
      mapEmbedUrl: 'https://www.google.com/maps?q=D+Block+Valencia+Town+Lahore+Pakistan&output=embed',
      googleMapsLink: 'https://maps.app.goo.gl/rViBnYH7kpoZ35aF7',
      hours: [
        { day: 'Mon - Sat', hours: '6 AM - 11 PM' },
        { day: 'Sunday', hours: '8 AM - 8 PM' },
      ],
    },
    {
      name: 'Lake City',
      address: 'Block M 1 Lake City, Lahore, Pakistan',
      mapEmbedUrl: 'https://www.google.com/maps?q=Block+M+1+Lake+City+Lahore+Pakistan&output=embed',
      googleMapsLink: 'https://maps.app.goo.gl/xpFCMUse9pc13bh89',
      hours: [
        { day: 'Mon - Sat', hours: '6 AM - 12 AM' },
        { day: 'Sunday', hours: '8 AM - 8 PM' },
      ],
    },
  ],
  socialLinks: {
    instagram: 'https://www.instagram.com/kasrat.pk/',
    facebook: 'https://www.facebook.com/kasrat.pk',
    youtube: 'https://www.youtube.com/@kasrat',
  },
  heroTitle: 'Train Hard.',
  heroSubtitle: 'Transform Your Life.',
  heroTagline: 'Fat loss. Muscle gain. Real results. Backed by expert coaching, personalised nutrition, and a community that keeps you going.',
  features: [
    { icon: 'UserCheck', title: 'Expert Coaching', desc: 'Certified coaches dedicated to fat loss, muscle gain, and real results.' },
    { icon: 'Dumbbell', title: 'Modern Equipment', desc: 'Top-tier machines and free weights for every muscle group.' },
    { icon: 'Tag', title: 'Affordable Memberships', desc: 'Premium fitness without the premium price tag.' },
    { icon: 'Maximize2', title: 'Spacious Environment', desc: 'Never wait for a machine in our massive, well-equipped facility.' },
    { icon: 'Heart', title: 'Cardio Zone', desc: 'State-of-the-art treadmills, bikes, and cardio equipment.' },
    { icon: 'Zap', title: 'Strength Training', desc: 'Extensive free weights, barbells, and resistance machines.' },
    { icon: 'Activity', title: 'Nutrition Coaching', desc: 'Personalised nutrition plans to fuel fat loss and muscle gain.' },
    { icon: 'Users', title: 'Supportive Community', desc: 'Train alongside motivated people with real coaches backing you.' },
  ],
  stats: [
    { value: 500, label: 'Members', suffix: '+' },
    { value: 15, label: 'Expert Trainers', suffix: '+' },
    { value: 50, label: 'Equipment Pieces', suffix: '+' },
    { value: 4.3, label: 'Rating', suffix: '★', decimal: true },
  ],
  plans: [
    {
      name: 'Starter',
      price: '3,500',
      period: '/mo',
      features: ['Basic gym access', 'Cardio zone', 'Locker room access', 'Free WiFi'],
      highlighted: false,
    },
    {
      name: 'Standard',
      price: '6,000',
      period: '/mo',
      features: ['Full gym access', 'Cardio & Strength zones', 'Group fitness classes', '1 PT session/month', 'Locker room & Sauna'],
      highlighted: true,
      badge: 'MOST POPULAR',
    },
    {
      name: 'Premium',
      price: '10,000',
      period: '/mo',
      features: ['Unlimited 24/7 access', 'All zones & classes', 'Weekly PT sessions', 'Custom nutrition plan & coaching', 'VIP locker & Laundry'],
      highlighted: false,
    },
  ],
  trainers: [
    {
      name: 'Fazeel Ahmed',
      role: 'Head Coach',
      exp: 'Certified Expert',
      specialty: 'Strength & Conditioning',
      img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Usman Khan',
      role: 'Personal Trainer',
      exp: 'Certified Expert',
      specialty: 'Muscle Gain & Fat Loss',
      img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Ayesha Malik',
      role: 'Lead Trainer',
      exp: 'Certified Expert',
      specialty: 'Fat Loss & Nutrition',
      img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Zain Ali',
      role: 'Cardio Specialist',
      exp: 'Certified Expert',
      specialty: 'Cardio & Functional Training',
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
    }
  ],
  reviews: [
    {
      name: 'Ahmed Raza',
      badge: 'Google Review',
      time: '1 month ago',
      text: 'Best fitness club in Lake City! The atmosphere is amazing and the trainers really care about your progress.',
      rating: 5,
    },
    {
      name: 'Sara Khan',
      badge: 'Local Guide',
      time: '2 weeks ago',
      text: 'Joined KASRAT a month ago and already seeing amazing results. The nutrition coaching has been a game changer for me.',
      rating: 5,
    },
    {
      name: 'Bilal Hassan',
      badge: 'Google Review',
      time: '3 weeks ago',
      text: 'Great facility with top-notch equipment. The coaches are professional and very supportive. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Hira Tariq',
      badge: 'Google Review',
      time: '1 month ago',
      text: 'The best decision I made for my health. Clean environment, friendly staff, and results-driven training programs.',
      rating: 4,
    },
    {
      name: 'Omar Farooq',
      badge: 'Google Review',
      time: '2 months ago',
      text: 'Excellent gym with a great vibe. All machines are well-maintained and the cardio section is huge.',
      rating: 5,
    },
    {
      name: 'Fatima Zafar',
      badge: 'Local Guide',
      time: '3 weeks ago',
      text: 'Love the community here! Everyone is so motivating. Fazeel is an amazing coach who pushes you to your limits.',
      rating: 5,
    },
    {
      name: 'Ali Rizvi',
      badge: 'Google Review',
      time: '1 month ago',
      text: 'Top-notch fitness club. The personal training sessions are worth every penny. Seeing great results!',
      rating: 4,
    },
    {
      name: 'Zara Malik',
      badge: 'Google Review',
      time: '2 weeks ago',
      text: 'Joined the women\'s section and it\'s fantastic! Clean, private, and the female trainers are excellent.',
      rating: 5,
    },
  ],
  faqs: [
    {
      q: "Do you offer personal training?",
      a: "Yes, we offer 1-on-1 personal training sessions with certified experts tailored to your specific fitness goals."
    },
    {
      q: "What are your operating hours?",
      a: "Valencia: Mon–Sat 6AM–11PM, Sun 8AM–8PM. Lake City: Mon–Sat 6AM–12AM, Sun 8AM–8PM. Premium members get extended access."
    },
    {
      q: "Do you have monthly memberships?",
      a: "Yes, we offer flexible monthly, quarterly, and annual plans. No hidden fees or complicated contracts."
    },
    {
      q: "Can beginners join?",
      a: "Absolutely! We welcome all fitness levels. Our staff is always available to help you get started with the equipment."
    },
    {
      q: "Is the gym air-conditioned?",
      a: "Yes, the entire facility is fully air-conditioned and climate-controlled for your comfort during intense workouts."
    },
    {
      q: "Do you have parking?",
      a: "Yes, we provide free dedicated parking for all our members right outside the facility."
    }
  ],

  ogImage: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2070&auto=format&fit=crop',
};

export default business;
export { business };
