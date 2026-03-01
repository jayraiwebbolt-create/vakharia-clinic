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
    subtitle: 'Permanent Solution for Missing Teeth',
    overview:
      'Dental implants are the gold standard for replacing missing teeth. These titanium posts are surgically placed in your jawbone, providing a strong foundation for artificial teeth that look, feel, and function like natural teeth. Unlike dentures or bridges, implants preserve bone structure and provide long-lasting results.',
    benefits: [
      'Natural appearance and feel',
      'Permanent solution that can last a lifetime',
      'Preserves jawbone and facial structure',
      'No damage to adjacent teeth',
      'Eat and speak with confidence',
      'High success rate over 95%',
    ],
    procedure: {
      title: 'The Implant Process',
      steps: [
        'Initial consultation and 3D imaging to assess bone structure',
        'Surgical placement of titanium implant into jawbone',
        'Healing period (3-6 months) for osseointegration',
        'Attachment of abutment connector piece',
        'Custom crown fabrication and placement',
      ],
    },
    suitable: [
      'Adults with one or more missing teeth',
      'Patients with sufficient jawbone density',
      'Good oral health and hygiene habits',
      'Non-smokers or willing to quit',
      'Looking for a permanent tooth replacement solution',
    ],
    faqs: [
      {
        question: 'How long do dental implants last?',
        answer:
          'With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear, but the implant itself is designed to be permanent.',
      },
      {
        question: 'Is the procedure painful?',
        answer:
          'The procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Post-operative discomfort is typically mild and can be managed with over-the-counter pain medication.',
      },
      {
        question: 'What is the success rate of dental implants?',
        answer:
          'Dental implants have a success rate of over 95%. Factors like oral hygiene, overall health, and lifestyle habits affect long-term success.',
      },
    ],
  },
  'invisalign': {
    slug: 'invisalign',
    title: 'Invisalign®',
    subtitle: 'Clear Aligner Orthodontic Treatment',
    overview:
      'Invisalign uses a series of custom-made, clear plastic aligners to gradually straighten your teeth. Unlike traditional braces, these aligners are virtually invisible, removable, and comfortable. Perfect for adults and teens who want to improve their smile without the appearance and inconvenience of metal braces.',
    benefits: [
      'Virtually invisible appearance',
      'Removable for eating and cleaning',
      'More comfortable than traditional braces',
      'Fewer office visits required',
      'No food restrictions',
      'Easy to maintain oral hygiene',
    ],
    procedure: {
      title: 'Your Invisalign Journey',
      steps: [
        'Comprehensive consultation and digital smile preview',
        '3D scanning and custom treatment plan creation',
        'Receive your series of custom aligners',
        'Wear each set for 1-2 weeks, 20-22 hours daily',
        'Progress check-ins every 6-8 weeks',
        'Final retainers to maintain your new smile',
      ],
    },
    suitable: [
      'Mild to moderate crowding or spacing issues',
      'Bite alignment problems',
      'Adults and teens seeking discreet treatment',
      'Committed to wearing aligners 20-22 hours daily',
      'Good oral health and hygiene',
    ],
    faqs: [
      {
        question: 'How long does Invisalign treatment take?',
        answer:
          'Treatment typically takes 12-18 months, but simpler cases may be completed in 6 months. Your dentist will provide a personalized timeline.',
      },
      {
        question: 'Can I eat with Invisalign aligners?',
        answer:
          'You should remove your aligners when eating or drinking anything other than water. This prevents staining and damage to the aligners.',
      },
      {
        question: 'Will Invisalign affect my speech?',
        answer:
          'Most people adapt within a few days. Any initial lisp typically disappears quickly as you get used to wearing the aligners.',
      },
    ],
  },
  'root-canal-treatments': {
    slug: 'root-canal-treatments',
    title: 'Root Canal Treatments',
    subtitle: 'Save Your Natural Teeth',
    overview:
      'Root canal therapy is a procedure to treat infection or damage inside a tooth. When the soft tissue (pulp) inside your tooth becomes infected or inflamed, a root canal can save the tooth and prevent the need for extraction. Modern techniques make root canals comfortable and highly successful.',
    benefits: [
      'Saves your natural tooth',
      'Eliminates pain and infection',
      'Prevents spread of infection',
      'Restores normal chewing function',
      'Natural appearance maintained',
      'Cost-effective compared to extraction and replacement',
    ],
    procedure: {
      title: 'Root Canal Procedure',
      steps: [
        'Local anesthesia for complete comfort',
        'Access opening created in the tooth',
        'Infected or damaged pulp removed',
        'Root canals cleaned and disinfected',
        'Canals filled and sealed',
        'Crown placed to protect and restore the tooth',
      ],
    },
    suitable: [
      'Deep tooth decay reaching the pulp',
      'Cracked or damaged tooth',
      'Severe tooth sensitivity to hot or cold',
      'Swelling or abscess near a tooth',
      'Persistent tooth pain',
    ],
    faqs: [
      {
        question: 'Are root canals painful?',
        answer:
          'Modern root canal treatments are no more uncomfortable than getting a filling. Local anesthesia ensures you feel no pain during the procedure.',
      },
      {
        question: 'How long does a root canal take?',
        answer:
          'Most root canals can be completed in one or two appointments, each lasting 60-90 minutes depending on the tooth location and complexity.',
      },
      {
        question: 'What happens after a root canal?',
        answer:
          'You may experience mild sensitivity for a few days. A permanent crown is typically placed 2-3 weeks after the procedure to protect the tooth.',
      },
    ],
  },
  'ceramic-crowns-bridges': {
    slug: 'ceramic-crowns-bridges',
    title: 'Ceramic Crowns & Bridges',
    subtitle: 'Restore Strength and Beauty',
    overview:
      'Ceramic crowns and bridges are custom-made restorations that restore damaged or missing teeth. Crowns cover a damaged tooth to restore its shape, strength, and appearance. Bridges replace missing teeth by anchoring to adjacent teeth. Modern ceramics provide exceptional strength and natural aesthetics.',
    benefits: [
      'Natural-looking results that match your teeth',
      'Durable and long-lasting',
      'Restores full chewing function',
      'Protects weakened teeth',
      'Improves smile appearance',
      'Biocompatible materials',
    ],
    procedure: {
      title: 'Crown and Bridge Process',
      steps: [
        'Tooth preparation and shaping',
        'Digital impressions or traditional molds',
        'Temporary restoration placed',
        'Custom ceramic restoration fabricated',
        'Final restoration fitted and bonded',
        'Bite adjustment and polishing',
      ],
    },
    suitable: [
      'Severely decayed or damaged teeth',
      'Teeth requiring root canal treatment',
      'Missing teeth with healthy adjacent teeth',
      'Cosmetic improvement needs',
      'Fractured or worn teeth',
    ],
    faqs: [
      {
        question: 'How long do ceramic crowns last?',
        answer:
          'With proper care, ceramic crowns typically last 10-15 years or longer. Good oral hygiene and regular dental visits help maximize their lifespan.',
      },
      {
        question: 'Will my crown look natural?',
        answer:
          'Yes! Modern ceramic materials are carefully matched to your natural tooth color and translucency, making them virtually indistinguishable from your real teeth.',
      },
      {
        question: 'Can I eat normally with crowns and bridges?',
        answer:
          'Yes, crowns and bridges restore full chewing function. Avoid extremely hard foods initially, but you can return to normal eating habits once adjusted.',
      },
    ],
  },
  'wisdom-tooth-surgery': {
    slug: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    subtitle: 'Safe and Comfortable Extraction',
    overview:
      'Wisdom tooth extraction is often necessary when these third molars don\'t have enough room to emerge properly. Impacted wisdom teeth can cause pain, infection, and damage to adjacent teeth. Our experienced surgeons use modern techniques and sedation options to ensure a comfortable experience.',
    benefits: [
      'Prevents future dental problems',
      'Relieves pain and discomfort',
      'Reduces infection risk',
      'Protects adjacent teeth',
      'Prevents crowding',
      'Sedation options available',
    ],
    procedure: {
      title: 'Extraction Process',
      steps: [
        'Comprehensive examination with 3D imaging',
        'Sedation or anesthesia administration',
        'Careful extraction of wisdom teeth',
        'Cleaning and preparation of the site',
        'Stitches placed if necessary',
        'Post-operative care instructions provided',
      ],
    },
    suitable: [
      'Impacted wisdom teeth',
      'Partially erupted wisdom teeth',
      'Crowded wisdom teeth',
      'Recurrent infections around wisdom teeth',
      'Preventive removal before problems occur',
    ],
    faqs: [
      {
        question: 'When should wisdom teeth be removed?',
        answer:
          'Ideally, wisdom teeth are removed in late teens or early twenties before roots fully develop. Your dentist will recommend timing based on your specific situation.',
      },
      {
        question: 'What is recovery like after wisdom tooth extraction?',
        answer:
          'Most people recover in 3-7 days. Expect some swelling and discomfort for the first few days. Follow post-operative instructions carefully for optimal healing.',
      },
      {
        question: 'Will I be awake during the procedure?',
        answer:
          'We offer various sedation options including local anesthesia, nitrous oxide, and IV sedation. You can choose the option that makes you most comfortable.',
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
  'teeth-whitening': {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    subtitle: 'Brighten Your Smile',
    overview:
      'Professional teeth whitening is the fastest way to enhance your smile. Our advanced whitening systems can lighten teeth several shades in just one visit. We offer both in-office treatments for immediate results and take-home kits for gradual whitening.',
    benefits: [
      'Noticeable results in one session',
      'Safe and effective treatment',
      'Customized to your needs',
      'Boost confidence instantly',
      'Long-lasting with proper care',
      'Professional-grade products',
    ],
    procedure: {
      title: 'Whitening Process',
      steps: [
        'Shade assessment and goal setting',
        'Professional cleaning',
        'Gum protection application',
        'Whitening gel application',
        'LED light activation (in-office)',
        'Post-treatment care instructions',
      ],
    },
    suitable: [
      'Yellow or brown tooth discoloration',
      'Healthy teeth and gums',
      'Realistic expectations',
      'Special occasions or events',
      'Overall smile enhancement',
    ],
    faqs: [
      {
        question: 'How white will my teeth get?',
        answer:
          'Results vary by individual, but most patients achieve 2-8 shades lighter. Your dentist will discuss realistic expectations during consultation.',
      },
      {
        question: 'Is teeth whitening safe?',
        answer:
          'Yes, professional whitening is safe when performed by a dental professional. Some patients may experience temporary sensitivity.',
      },
      {
        question: 'How long do whitening results last?',
        answer:
          'Results typically last 1-3 years, depending on your diet and habits. Touch-up treatments can maintain your bright smile.',
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
