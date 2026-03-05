export interface TreatmentData {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  benefits: string[];
  procedure: {
    title: string;
    steps: string[];
  };
  suitable: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const treatmentsData: Record<string, TreatmentData> = {
  'dental-implants': {
    slug: 'dental-implants',
    title: 'Dental Implants',
    subtitle: 'Permanent Tooth Replacement',
    overview:
      'Dental implants are the most reliable and permanent solution for missing teeth. They look, feel, and function like natural teeth, restoring your ability to eat, speak, and smile with confidence. At Dr. Gandhi Dental Clinic, we specialize in advanced implantology, using state-of-the-art technology and international-quality materials to ensure lasting results.',
    benefits: [
      'Expert Implant Specialists in Anand',
      'Digital Planning & Guided Surgery',
      'In-House Crowns & Bridges Lab',
      'Affordable Packages',
    ],
    procedure: {
      title: 'About Dental Implants',
      steps: [
        'We use digital X-rays, 3D CBCT scans, and intraoral imaging for precise implant placement. This ensures painless procedures, faster recovery, and long-term success rates above 95%.',
        'Our clinic focuses on painless dentistry with sedation options for anxious patients. With an in-house lab, flexible scheduling, and experienced implantologists, your treatment is stress-free and efficient.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'How Long Do Dental Implants Last?',
        answer:
          'With proper care, implants can last 15-20 years or more, making them a long-term solution.',
      },
      {
        question: 'Is Implant Surgery Painful?',
        answer:
          '',
      },
      {
        question: 'Who Is Eligible For Implants?',
        answer:
          '',
      },
      {
        question: 'What Is The Recovery Time?',
        answer:
          '',
      },
    ],
  },
  'invisalign': {
    slug: 'invisalign',
    title: 'Invisalign®',
    subtitle: 'Clear Aligners',
    overview:
      'Looking for the best Invisalign treatment in Anand? As a certified Gold Invisalign Provider, Dr. Gandhi Dental Clinic offers clear, comfortable, and removable aligners designed to transform teeth without the hassle of traditional braces.',
    benefits: [
      'Certified Gold Invisalign Provider',
      'Virtually Invisible Aligners',
      'Custom-made Treatment Planning',
      'Comfortable, Removable & Easy To Clean',
    ],
    procedure: {
      title: 'Invisalign Clear Aligners in Anand',
      steps: [
        'Recognized as a certified Gold Invisalign Provider, Dr. Gandhi Dental Clinic delivers advanced clear aligner treatments with precision, comfort, and proven results.',
      ],
    },
    suitable: [],
    faqs: [],
  },
  'root-canal-treatments': {
    slug: 'root-canal-treatments',
    title: 'Root Canal Treatments',
    subtitle: 'Pain-Free Care',
    overview:
      'A root canal treatment (RCT) is a dental procedure used to save a tooth that is infected or badly decayed. Instead of extracting the tooth, our dentists carefully clean and seal the inside of the tooth to restore its function. At Dr. Gandhi Dental Clinic, we use digital X-rays, rotary instruments, and advanced anesthesia techniques to make the procedure comfortable and effective. Patients often compare it to getting a simple filling — fast, safe, and stress-free.',
    benefits: [
      'Relieves Pain & Infection',
      'Prevents Tooth Extraction',
      'Saves Your Natural Tooth',
      'Long-Lasting And Cost-Effective Solution',
    ],
    procedure: {
      title: 'About Root Canal Treatment',
      steps: [
        'Our clinic is equipped with rotary endodontics, apex locators, and digital imaging to ensure accuracy and faster recovery. Sedation options are available for anxious patients, ensuring a stress-free experience.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'Is Root Canal Treatment Painful?',
        answer:
          'No, with modern anesthesia and rotary tools, RCT is virtually painless.',
      },
      {
        question: 'How Many Sittings Does It Take?',
        answer:
          '',
      },
      {
        question: 'How Long Does A Root Canal Last?',
        answer:
          '',
      },
      {
        question: 'Do I Always Need A Crown After RCT?',
        answer:
          '',
      },
    ],
  },
  'ceramic-crowns-bridges': {
    slug: 'ceramic-crowns-bridges',
    title: 'Ceramic Crowns & Bridges',
    subtitle: 'Natural Restorations',
    overview:
      'Ceramic crowns and bridges are fixed dental restorations that replace or cover damaged teeth and fill gaps left by missing teeth. Crowns are caps placed on weakened or treated teeth, while bridges are used to replace one or more missing teeth by anchoring to nearby teeth or implants. At Dr. Gandhi Dental Clinic, we use high-quality ceramic and zirconia materials to ensure your restorations look natural, last long, and blend seamlessly with your smile.',
    benefits: [
      'Restore Broken, Worn, Or Treated Teeth',
      'Natural, Tooth-Colored Appearance',
      'Replace Missing Teeth Permanently',
      'Improves Chewing And Speech',
      'Protects Treated Teeth After RCT',
    ],
    procedure: {
      title: 'About Ceramic Crowns & Bridges',
      steps: [
        'We use digital scanners, CAD/CAM technology, and an in-house lab to design crowns and bridges with maximum precision. This eliminates messy impressions and reduces waiting time, making the entire process smooth and stress-free.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'How Long Do Ceramic Crowns Last?',
        answer:
          'With proper care, crowns and bridges can last 10-15 years or more.',
      },
      {
        question: 'Is The Procedure Painful?',
        answer:
          '',
      },
      {
        question: 'Which Is Better — Ceramic Or Metal Crowns?',
        answer:
          '',
      },
      {
        question: 'Do I Need A Crown After Root Canal Treatment?',
        answer:
          '',
      },
    ],
  },
  'wisdom-tooth-surgery': {
    slug: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    subtitle: 'Safe & Modern Extraction',
    overview:
      'Wisdom teeth, or third molars, often erupt between ages 17-25 and can cause pain, infection, or crowding. If untreated, they may damage nearby teeth or gums. At Dr. Gandhi Dental Clinic, we perform safe and precise wisdom tooth extractions using digital imaging and advanced surgical techniques for faster healing and minimal discomfort.',
    benefits: [
      'Painless Procedure With Local Anesthesia',
      'Digital X-Ray & 3D Imaging For Accuracy',
      'Faster Recovery With Advanced Techniques',
      'Prevents Infection & Damage To Nearby Teeth',
      'Expert Oral Surgeons For Safe Extractions',
    ],
    procedure: {
      title: 'About Wisdom Tooth Surgery',
      steps: [
        'With modern tools and sedation options, our patients experience stress-free extractions and quicker recovery. Post-surgery care ensures long-term oral health.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'When Should Wisdom Teeth Be Removed?',
        answer:
          'Wisdom teeth should be removed if they cause pain, infection, swelling, or crowding of other teeth.',
      },
      {
        question: 'Is Wisdom Tooth Surgery Painful?',
        answer:
          '',
      },
      {
        question: 'How Long Is The Recovery Period?',
        answer:
          '',
      },
      {
        question: 'What Should I Eat After Surgery?',
        answer:
          '',
      },
    ],
  },
  'gum-surgeries': {
    slug: 'gum-surgeries',
    title: 'Gum Surgeries',
    subtitle: 'Advanced Periodontal Care',
    overview:
      'Gum surgery treats advanced gum disease and other periodontal conditions. These procedures restore gum health, reduce pocket depths, and regenerate lost bone and tissue. Modern minimally invasive techniques promote faster healing and improved outcomes.',
    benefits: [
      'Stops progression of gum disease',
      'Reduces pocket depths',
      'Regenerates lost tissue and bone',
      'Improves long-term tooth stability',
      'Enhances smile aesthetics',
      'Prevents tooth loss',
    ],
    procedure: {
      title: 'Periodontal Surgery Process',
      steps: [
        'Comprehensive periodontal evaluation',
        'Local anesthesia and sedation if needed',
        'Gentle tissue manipulation and cleaning',
        'Removal of diseased tissue',
        'Bone grafting or regeneration if needed',
        'Suturing and healing instructions',
      ],
    },
    suitable: [
      'Advanced gum disease (periodontitis)',
      'Deep periodontal pockets',
      'Receding gums',
      'Bone loss around teeth',
      'Gum tissue overgrowth',
    ],
    faqs: [
      {
        question: 'Is gum surgery painful?',
        answer:
          'The procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Post-operative discomfort is manageable with prescribed pain medication.',
      },
      {
        question: 'How long does recovery take?',
        answer:
          'Initial healing takes 1-2 weeks, with full tissue maturation occurring over several months. Most patients return to normal activities within a few days.',
      },
      {
        question: 'Can gum disease be cured?',
        answer:
          'While gum disease can be controlled and its progression stopped, maintaining results requires excellent oral hygiene and regular professional cleanings.',
      },
    ],
  },
  'veneers-smile-designing': {
    slug: 'veneers-smile-designing',
    title: 'Veneers & Smile Designing',
    subtitle: 'Transform Your Smile',
    overview:
      'Porcelain veneers are thin shells custom-made to cover the front surface of teeth, creating a beautiful, natural-looking smile. Smile design combines multiple cosmetic procedures to achieve your dream smile. Veneers can correct chips, gaps, discoloration, and misalignment.',
    benefits: [
      'Dramatic smile transformation',
      'Natural-looking results',
      'Stain-resistant material',
      'Minimally invasive procedure',
      'Long-lasting durability',
      'Customized to your preferences',
    ],
    procedure: {
      title: 'Veneer Process',
      steps: [
        'Smile design consultation and preview',
        'Digital mock-up of your new smile',
        'Minimal tooth preparation',
        'Precise impressions taken',
        'Temporary veneers placed',
        'Custom porcelain veneers bonded permanently',
      ],
    },
    suitable: [
      'Discolored or stained teeth',
      'Chipped or worn teeth',
      'Slightly misaligned teeth',
      'Gaps between teeth',
      'Uneven or irregularly shaped teeth',
    ],
    faqs: [
      {
        question: 'How long do veneers last?',
        answer:
          'Porcelain veneers typically last 10-15 years or longer with proper care. They are highly durable and resistant to staining.',
      },
      {
        question: 'Do veneers damage my natural teeth?',
        answer:
          'Minimal tooth preparation is required, removing only a thin layer of enamel. The procedure preserves most of your natural tooth structure.',
      },
      {
        question: 'Can veneers be whitened?',
        answer:
          'Veneers don\'t respond to whitening treatments, but they\'re highly stain-resistant. Choose your desired shade during the design phase.',
      },
    ],
  },
  'teeth-cleaning-polishing': {
    slug: 'teeth-cleaning-polishing',
    title: 'Teeth Cleaning & Polishing',
    subtitle: 'Maintain Optimal Oral Health',
    overview:
      'Professional teeth cleaning removes plaque, tartar, and stains that regular brushing can\'t eliminate. Regular cleanings are essential for preventing cavities, gum disease, and maintaining a bright smile. We recommend cleanings every six months for most patients.',
    benefits: [
      'Prevents cavities and gum disease',
      'Removes stubborn stains',
      'Freshens breath',
      'Early detection of dental problems',
      'Maintains overall health',
      'Bright, polished smile',
    ],
    procedure: {
      title: 'Cleaning Appointment',
      steps: [
        'Comprehensive oral examination',
        'Scaling to remove tartar and plaque',
        'Deep cleaning between teeth',
        'Polishing with specialized paste',
        'Fluoride treatment application',
        'Oral hygiene recommendations',
      ],
    },
    suitable: [
      'Everyone as preventive care',
      'Patients with good oral health',
      'Those with early gum disease',
      'Maintenance after periodontal treatment',
      'Patients seeking fresh, clean feeling',
    ],
    faqs: [
      {
        question: 'How often should I get my teeth cleaned?',
        answer:
          'Most people should have professional cleanings every six months. Your dentist may recommend more frequent visits if you have gum disease or other concerns.',
      },
      {
        question: 'Does teeth cleaning hurt?',
        answer:
          'Professional cleaning is generally comfortable. If you have sensitive teeth or gum concerns, let us know and we can use additional numbing options.',
      },
      {
        question: 'Can cleaning remove all stains?',
        answer:
          'Professional cleaning removes surface stains from food, drinks, and tobacco. Deep stains may require additional whitening treatments.',
      },
    ],
  },
  'dental-fillings': {
    slug: 'dental-fillings',
    title: 'Dental Fillings',
    subtitle: 'Restore Damaged Teeth',
    overview:
      'Dental fillings repair teeth damaged by decay, restoring their function and appearance. We use tooth-colored composite materials that blend naturally with your teeth. Modern fillings are durable, safe, and virtually invisible.',
    benefits: [
      'Natural tooth-colored appearance',
      'Stops decay progression',
      'Restores tooth function',
      'Mercury-free materials',
      'Preserves tooth structure',
      'Strengthens weakened teeth',
    ],
    procedure: {
      title: 'Filling Procedure',
      steps: [
        'Local anesthesia for comfort',
        'Removal of decay',
        'Cleaning and preparation of cavity',
        'Composite resin application in layers',
        'Curing with special light',
        'Shaping and polishing',
      ],
    },
    suitable: [
      'Cavities and tooth decay',
      'Cracked or chipped teeth',
      'Worn tooth surfaces',
      'Replacement of old fillings',
      'Small cosmetic improvements',
    ],
    faqs: [
      {
        question: 'How long do fillings last?',
        answer:
          'Composite fillings typically last 5-10 years or longer with proper care. Lifespan depends on size, location, and oral hygiene habits.',
      },
      {
        question: 'Are white fillings as strong as silver fillings?',
        answer:
          'Modern composite materials are very strong and suitable for most cavities. They also bond directly to tooth structure for added strength.',
      },
      {
        question: 'Will the filling be noticeable?',
        answer:
          'No, tooth-colored fillings are carefully matched to your natural tooth shade and blend seamlessly with your smile.',
      },
    ],
  },
  'dentures': {
    slug: 'dentures',
    title: 'Dentures',
    subtitle: 'Replace Multiple Missing Teeth',
    overview:
      'Dentures are removable appliances that replace missing teeth and restore your smile. We offer both complete dentures for patients missing all teeth and partial dentures for those with some remaining natural teeth. Modern dentures are comfortable, natural-looking, and improve quality of life.',
    benefits: [
      'Restore eating and speaking ability',
      'Natural appearance',
      'Support facial structure',
      'Affordable tooth replacement',
      'Removable for easy cleaning',
      'Custom-fitted for comfort',
    ],
    procedure: {
      title: 'Denture Process',
      steps: [
        'Comprehensive oral examination',
        'Impressions and measurements',
        'Bite registration and shade selection',
        'Try-in appointment for fit and appearance',
        'Final denture fabrication',
        'Delivery and adjustment appointments',
      ],
    },
    suitable: [
      'Multiple missing teeth',
      'Complete tooth loss',
      'Patients seeking removable option',
      'Not candidates for implants',
      'Budget-conscious patients',
    ],
    faqs: [
      {
        question: 'How long does it take to get used to dentures?',
        answer:
          'Most people adjust within a few weeks. Eating and speaking may feel different initially, but becomes natural with practice.',
      },
      {
        question: 'Do I need to take my dentures out at night?',
        answer:
          'Yes, it\'s recommended to remove dentures at night to allow your gums to rest and to clean your dentures thoroughly.',
      },
      {
        question: 'How long do dentures last?',
        answer:
          'Dentures typically last 5-7 years before needing replacement. Regular check-ups ensure proper fit as your mouth changes over time.',
      },
    ],
  },
  'night-guard': {
    slug: 'night-guard',
    title: 'Night Guard',
    subtitle: 'Protect Your Teeth from Grinding',
    overview:
      'A custom night guard is a protective appliance worn during sleep to prevent damage from teeth grinding (bruxism) or clenching. Unlike store-bought guards, our custom-fitted guards are comfortable, durable, and provide optimal protection for your teeth and jaw.',
    benefits: [
      'Prevents tooth wear and damage',
      'Reduces jaw pain and headaches',
      'Custom-fitted for comfort',
      'Protects dental work',
      'Improves sleep quality',
      'Durable and long-lasting',
    ],
    procedure: {
      title: 'Night Guard Process',
      steps: [
        'Evaluation of grinding or clenching habits',
        'Precise impressions of your teeth',
        'Custom guard fabrication',
        'Fitting appointment and adjustments',
        'Instructions for care and use',
        'Follow-up to ensure comfort',
      ],
    },
    suitable: [
      'Teeth grinding or clenching',
      'Morning jaw pain or headaches',
      'Worn or chipped teeth',
      'TMJ disorder symptoms',
      'Protection of crowns or veneers',
    ],
    faqs: [
      {
        question: 'How is a custom night guard different from store-bought?',
        answer:
          'Custom guards are made from precise impressions of your teeth, ensuring perfect fit, comfort, and protection. They\'re also more durable and effective.',
      },
      {
        question: 'How long does a night guard last?',
        answer:
          'With proper care, a custom night guard typically lasts 5+ years. Severe grinders may need replacement sooner.',
      },
      {
        question: 'Will I be able to sleep comfortably with it?',
        answer:
          'Yes! Custom guards are thin, comfortable, and most patients adjust within a few nights. They shouldn\'t interfere with sleep.',
      },
    ],
  },
};
