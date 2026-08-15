export interface CaseStudySection {
  title: string;
  text: string;
  tags?: string[];
  images?: string[];
}

export interface CaseStudyData {
  title: string;
  desc: string;
  sections: CaseStudySection[];
}

export const CASE_STUDIES_DATA: Record<string, CaseStudyData> = {

  // ─────────────────────────────────────────────────────────────
  // AJAVU TECH
  // ─────────────────────────────────────────────────────────────
  ajavu: {
    title: "Ajavu Tech",
    desc: "Building a technology brand that simplifies IT procurement through thoughtful strategy, clear communication and customer-focused digital experiences.",
    sections: [
      {
        title: "About the Business",
        text: "Ajavu Tech was established to simplify IT procurement and infrastructure decisions for businesses. The vision was to create a technology brand that combined technical expertise with transparency, making it easier for organizations to understand solutions, evaluate options and make informed technology investments."
      },
      {
        title: "The Challenge",
        text: "Technology services are often presented using technical language that can overwhelm potential customers. The challenge was to position Ajavu Tech as a trusted technology partner by simplifying communication, creating a professional brand identity and building a consistent digital presence that made complex services easier to understand."
      },
      {
        title: "Work Delivered",
        text: "I worked closely on building the business from the ground up, contributing to its overall strategy, digital presence and communication. My role extended beyond design to creating a cohesive brand experience that aligned business objectives with customer expectations.",
        tags: ["Brand Strategy", "Business Planning", "Product Strategy", "Website Planning", "UX & UI Design", "Content Strategy", "Marketing Strategy", "Creative Direction"]
      },
      {
        title: "Approach",
        text: "Every business touchpoint was designed around one objective: making technology approachable. The focus was on creating a professional identity, establishing a consistent communication system and ensuring that every customer interaction reflected clarity, trust and expertise."
      },
      {
        title: "Business Impact",
        text: "The project established a strong foundation for Ajavu Tech by creating a consistent brand identity, improving how services were communicated and building a professional digital presence that supports long-term business growth."
      },
      {
        title: "Creative Highlights",
        text: "To support the brand's launch and ongoing communication, a comprehensive collection of marketing creatives was designed across multiple campaigns and digital platforms. Each creative followed a consistent visual language while communicating different services, offers and brand messages, helping strengthen recognition and maintain a unified customer experience.",
        images: [
          "/images/Creative_Ajavu_1.webp",
          "/images/Creative_Ajavu_2.webp",
          "/images/Creative_Ajavu_3.webp",
          "/images/Creative_Ajavu_4.webp",
          "/images/Creative_Ajavu_5.webp",
          "/images/Creative_Ajavu_6.webp",
          "/images/Creative_Ajavu_7.webp",
          "/images/Creative_Ajavu_8.webp",
          "/images/Creative_Ajavu_9.webp",
          "/images/Creative_Ajavu_10.webp",
          "/images/Creative_Ajavu_11.webp",
          "/images/Creative_Ajavu_12.webp",
          "/images/Creative_Ajavu_13.webp",
          "/images/Creative_Ajavu_14.webp",
          "/images/Creative_Ajavu_15.webp",
          "/images/Creative_Ajavu_16.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // G1 GOLD
  // ─────────────────────────────────────────────────────────────
  g1gold: {
    title: "G1 Gold",
    desc: "Building a premium jewellery brand through thoughtful strategy, trusted communication and consistent customer experiences.",
    sections: [
      {
        title: "About the Business",
        text: "G1 Gold was established to offer customers a trusted and transparent jewellery buying experience. The objective was to build a premium brand that reflected quality, credibility and long-term relationships while creating a strong presence across digital platforms."
      },
      {
        title: "The Challenge",
        text: "Trust plays a critical role in the jewellery industry. The challenge was to position G1 Gold as a credible and approachable brand through clear communication, consistent visual identity and marketing that reinforced customer confidence across every interaction."
      },
      {
        title: "Work Delivered",
        text: "I contributed to building the brand from the ground up by defining its positioning, communication strategy and customer experience. My role included planning the overall brand direction while creating marketing communication that supported long-term business growth.",
        tags: ["Brand Strategy", "Business Planning", "Brand Positioning", "Content Strategy", "Marketing Strategy", "Creative Direction", "Campaign Planning", "Visual Communication"]
      },
      {
        title: "Approach",
        text: "The focus was on creating a premium yet approachable brand that customers could trust. Every communication was designed to simplify messaging, strengthen credibility and maintain consistency across marketing campaigns and customer touchpoints while reflecting the elegance of the jewellery industry."
      },
      {
        title: "Business Impact",
        text: "The project established a strong foundation for G1 Gold by creating a professional brand identity, a consistent communication system and marketing assets that strengthened brand recognition and supported future business growth."
      },
      {
        title: "Creative Highlights",
        text: "A comprehensive collection of marketing creatives and social media campaigns was designed to promote products, communicate offers and strengthen the brand's presence across digital platforms. Every creative followed a consistent visual language, helping build trust and improve brand recall while supporting ongoing customer engagement.",
        images: [
          "/images/Creative_G1Gold_1.webp",
          "/images/Creative_G1Gold_2.webp",
          "/images/Creative_G1Gold_3.webp",
          "/images/Creative_G1Gold_4.webp",
          "/images/Creative_G1Gold_5.webp",
          "/images/Creative_G1Gold_6.webp",
          "/images/Creative_G1Gold_7.webp",
          "/images/Creative_G1Gold_8.webp",
          "/images/Creative_G1Gold_9.webp",
          "/images/Creative_G1Gold_10.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MOTOTREK
  // ─────────────────────────────────────────────────────────────
  mototrek: {
    title: "MotoTrek",
    desc: "Building a community-driven motorcycle brand through strategy, storytelling and consistent brand communication.",
    sections: [
      {
        title: "About the Business",
        text: "MotoTrek was created to bring together motorcycle enthusiasts through curated riding experiences, premium riding gear and a strong community-driven culture. The objective was to build a brand that inspired adventure, fostered trust and created meaningful connections with riders both online and offline."
      },
      {
        title: "The Challenge",
        text: "MotoTrek served two distinct audiences: riders looking for memorable adventure experiences and customers seeking quality riding gear. The challenge was to communicate both offerings under a single, cohesive brand while maintaining consistency across every customer touchpoint and strengthening community engagement."
      },
      {
        title: "Work Delivered",
        text: "I contributed to shaping MotoTrek's brand identity, communication strategy and digital presence. My role focused on creating a consistent visual language, planning marketing campaigns and developing creative assets that reflected the brand's adventurous spirit while strengthening customer engagement.",
        tags: ["Brand Strategy", "Brand Identity", "Website Design", "Content Strategy", "Marketing Strategy", "Campaign Planning", "Creative Direction", "Community Communication"]
      },
      {
        title: "Approach",
        text: "Every communication was designed to reflect the excitement of motorcycle adventures while maintaining a professional and trustworthy brand presence. The focus was on creating consistent messaging, visually engaging campaigns and memorable experiences that strengthened the relationship between the brand and its riding community."
      },
      {
        title: "Business Impact",
        text: "The project established a consistent brand presence for MotoTrek through unified communication, engaging marketing campaigns and creative storytelling that supported community building and strengthened the brand across digital and offline channels."
      },
      {
        title: "Creative Highlights",
        text: "A wide range of marketing creatives, event promotions, social media campaigns and print communication materials were designed to support brand awareness, community engagement and promotional activities. Every asset followed a consistent visual language while capturing the spirit of adventure and exploration that defines MotoTrek.",
        images: [
          "/images/Creative_Mototrek_1.webp",
          "/images/Creative_Mototrek_2.webp",
          "/images/Creative_Mototrek_3.webp",
          "/images/Creative_Mototrek_4.webp",
          "/images/Creative_Mototrek_5.webp",
          "/images/Creative_Mototrek_6.webp",
          "/images/Creative_Mototrek_7.webp",
          "/images/Creative_Mototrek_8.webp",
          "/images/Creative_Mototrek_9.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SWAATI ENTERPRISES
  // ─────────────────────────────────────────────────────────────
  swaatienterprises: {
    title: "Swaati Enterprises",
    desc: "Strengthening an industrial brand through consistent communication and meaningful customer engagement.",
    sections: [
      {
        title: "About the Business",
        text: "Swaati Enterprises is an industrial manufacturing company serving businesses with engineering and manufacturing solutions. The objective was to strengthen its brand presence through consistent digital communication that reflected the company's professionalism, reliability and long-standing industry expertise."
      },
      {
        title: "The Challenge",
        text: "Industrial businesses often struggle to maintain an active and engaging digital presence while preserving a professional image. The challenge was to create communication that remained relevant throughout the year, strengthened customer relationships and kept the brand visible without relying solely on product promotions."
      },
      {
        title: "Work Delivered",
        text: "I worked on planning and designing a series of social media campaigns that combined festive greetings with consistent brand communication. Every creative was designed to reinforce the company's identity while maintaining a professional and approachable tone.",
        tags: ["Content Planning", "Creative Direction", "Social Media Strategy", "Campaign Design", "Brand Communication", "Visual Design"]
      },
      {
        title: "Approach",
        text: "Instead of treating festival greetings as standalone posts, each creative became an opportunity to strengthen brand recall. A consistent visual style, thoughtful messaging and subtle brand integration ensured every post contributed to long-term brand visibility while celebrating important occasions with customers and partners."
      },
      {
        title: "Business Impact",
        text: "The campaign established a consistent social media presence that strengthened brand recognition, maintained customer engagement throughout the year and reflected the company's professional values across digital platforms."
      },
      {
        title: "Creative Highlights",
        text: "A collection of festival-themed social media creatives was designed to celebrate important occasions while maintaining a consistent brand identity. Each post balanced festive storytelling with professional communication, helping the brand remain active, memorable and relevant across digital platforms.",
        images: [
          "/images/Creative_Swaati_1.webp",
          "/images/Creative_Swaati_2.webp",
          "/images/Creative_Swaati_3.webp",
          "/images/Creative_Swaati_4.webp",
          "/images/Creative_Swaati_5.webp",
          "/images/Creative_Swaati_6.webp",
          "/images/Creative_Swaati_7.webp",
          "/images/Creative_Swaati_8.webp",
          "/images/Creative_Swaati_9.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // FIRSTOCK
  // ─────────────────────────────────────────────────────────────
  firstock: {
    title: "Firstock Broking Pvt. Ltd.",
    desc: "Making financial knowledge more approachable through clear, engaging and visually consistent educational content.",
    sections: [
      {
        title: "About the Business",
        text: "Firstock is a stock broking platform focused on making investing accessible to a wide range of users. As part of its content marketing strategy, the goal was to create visually engaging blog headers that encouraged readers to explore financial topics while maintaining a professional and trustworthy brand image."
      },
      {
        title: "The Challenge",
        text: "Financial content often feels complex and intimidating, especially for new investors. The challenge was to design blog visuals that captured attention, simplified the perception of technical subjects and encouraged users to engage with educational content without compromising credibility."
      },
      {
        title: "Work Delivered",
        text: "I conceptualised and designed a collection of LinkedIn blog headers that translated financial topics into visually engaging content. The focus was on creating a consistent visual identity that supported educational storytelling while strengthening the brand's professional presence.",
        tags: ["Creative Conceptualisation", "Visual Design", "Content Communication", "Brand Communication", "LinkedIn Content Design", "Creative Direction"]
      },
      {
        title: "Approach",
        text: "Every blog header was designed to communicate the essence of the article before readers engaged with the content. Consistent layouts, strong typography and relevant visual elements were used to improve recognition, enhance readability and create a cohesive experience across the brand's educational content."
      },
      {
        title: "Creative Highlights",
        text: "A series of LinkedIn blog headers was designed to support financial education, thought leadership and content marketing initiatives. Each visual balanced clarity, consistency and brand identity while making complex investment topics feel approachable and engaging for readers.",
        images: [
          "/images/Creative_Firstock_1.webp",
          "/images/Creative_Firstock_2.webp",
          "/images/Creative_Firstock_3.webp",
          "/images/Creative_Firstock_4.webp",
          "/images/Creative_Firstock_5.webp",
          "/images/Creative_Firstock_6.webp",
          "/images/Creative_Firstock_7.webp",
          "/images/Creative_Firstock_8.webp",
          "/images/Creative_Firstock_9.webp",
          "/images/Creative_Firstock_10.webp",
          "/images/Creative_Firstock_11.webp",
          "/images/Creative_Firstock_12.webp",
          "/images/Creative_Firstock_13.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BIKER'S CHOICE
  // ─────────────────────────────────────────────────────────────
  bikerschoice: {
    title: "Biker's Choice",
    desc: "Helping a motorcycle dealership build stronger customer relationships through strategic content, creative storytelling and consistent social media communication.",
    sections: [
      {
        title: "About the Business",
        text: "Biker's Choice is a multi-brand motorcycle dealership and service centre offering sales, servicing, accessories and rider support. The objective was to strengthen its digital presence through meaningful content that educated riders, promoted services and maintained consistent engagement with the motorcycling community."
      },
      {
        title: "The Challenge",
        text: "Motorcycle dealerships often rely heavily on promotional posts, making it difficult to sustain audience engagement over time. The challenge was to create a balanced content strategy that combined education, awareness, seasonal campaigns and promotional communication while maintaining a consistent brand identity."
      },
      {
        title: "Work Delivered",
        text: "I was responsible for developing the creative direction of the brand's social media communication. This included researching audience interests, generating campaign ideas, planning content, writing copy, designing creatives and ensuring every post aligned with the brand's voice and marketing objectives.",
        tags: ["Content Strategy", "Campaign Ideation", "Copywriting", "Creative Direction", "Social Media Design", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "Every post was created with a clear purpose, whether educating riders, promoting services, highlighting seasonal opportunities or strengthening customer trust. The content strategy focused on delivering valuable information through engaging visuals and concise messaging while maintaining a consistent brand experience across all campaigns."
      },
      {
        title: "Creative Highlights",
        text: "A diverse collection of social media campaigns was conceptualised, written and designed to support the brand's marketing objectives. The creatives covered rider education, maintenance awareness, seasonal campaigns, promotional offers and customer engagement, helping establish a consistent and recognizable presence across digital platforms.",
        images: [
          "/images/Bikers_Choice_Posts_1.webp",
          "/images/Bikers_Choice_Posts_2.webp",
          "/images/Bikers_Choice_Posts_3.webp",
          "/images/Bikers_Choice_Posts_4.webp",
          "/images/Bikers_Choice_Posts_5.webp",
          "/images/Bikers_Choice_Posts_6.webp",
          "/images/Bikers_Choice_Posts_7.webp",
          "/images/Bikers_Choice_Posts_8.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // KS ENGINEERS
  // ─────────────────────────────────────────────────────────────
  ks: {
    title: "KS Engineers",
    desc: "Helping an engineering brand stay relevant and memorable through thoughtful seasonal communication and consistent social media storytelling.",
    sections: [
      {
        title: "About the Business",
        text: "KS Engineers is an engineering company serving industrial clients with specialized solutions. The objective was to strengthen its digital presence by maintaining consistent communication that reflected the company's professionalism while building stronger relationships with customers, partners and the wider business community."
      },
      {
        title: "The Challenge",
        text: "Engineering businesses often struggle to maintain an active social media presence without relying solely on technical or promotional content. The challenge was to create meaningful communication that kept the brand visible throughout the year while preserving its professional identity and industry credibility."
      },
      {
        title: "Work Delivered",
        text: "I developed the complete creative communication for the campaign, from researching occasions and generating campaign ideas to writing the copy, designing the visuals and maintaining a consistent brand voice across every festive communication.",
        tags: ["Content Strategy", "Campaign Ideation", "Copywriting", "Creative Direction", "Social Media Design", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "Every festive post was designed as more than just a greeting. Each creative became an opportunity to reinforce the brand's identity, strengthen customer relationships and maintain consistent visibility throughout the year. The communication balanced festive storytelling with professional branding to create memorable interactions without compromising the company's engineering image."
      },
      {
        title: "Creative Highlights",
        text: "A collection of festival-themed social media campaigns was conceptualised, written and designed to celebrate important occasions while reinforcing the KS Engineers brand. Each creative followed a consistent visual language and messaging style, helping the company remain active, recognizable and connected with its audience across digital platforms.",
        images: [
          "/images/KS_Engineers_SM_Posts_1.webp",
          "/images/KS_Engineers_SM_Posts_2.webp",
          "/images/KS_Engineers_SM_Posts_3.webp",
          "/images/KS_Engineers_SM_Posts_4.webp",
          "/images/KS_Engineers_SM_Posts_5.webp",
          "/images/KS_Engineers_SM_Posts_6.webp",
          "/images/KS_Engineers_SM_Posts_7.webp",
          "/images/KS_Engineers_SM_Posts_8.webp",
          "/images/KS_Engineers_SM_Posts_9.webp",
          "/images/KS_Engineers_SM_Posts_10.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // KATHAKALI RESTAURANT
  // ─────────────────────────────────────────────────────────────
  kathakali: {
    title: "Kathakali Restaurant",
    desc: "Creating a distinctive brand identity inspired by Indian culture, tradition and authentic dining experiences.",
    sections: [
      {
        title: "About the Business",
        text: "Kathakali Restaurant set out to offer an authentic Indian dining experience that celebrated rich flavours, culture and hospitality. The objective was to create a memorable brand identity that reflected the restaurant's heritage while appealing to modern customers through a refined and visually engaging design language."
      },
      {
        title: "The Challenge",
        text: "In a competitive restaurant industry, a memorable identity is essential for standing out. The challenge was to design a brand that captured the essence of Indian culture without appearing traditional or outdated, creating an identity that felt authentic, premium and instantly recognizable."
      },
      {
        title: "Work Delivered",
        text: "I led the brand design process from concept to execution, exploring visual directions, defining the creative identity and developing a cohesive brand system that reflected the restaurant's personality and values.",
        tags: ["Brand Strategy", "Brand Identity Design", "Creative Concept Development", "Visual Identity System", "Typography & Colour Direction", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "The identity was inspired by Indian art, culture and traditional aesthetics while embracing a contemporary visual style. Every design element was carefully considered to create a cohesive brand experience that felt elegant, culturally rooted and memorable across customer touchpoints."
      },
      {
        title: "Brand Highlights",
        text: "The final identity combined distinctive visual elements, thoughtful typography and a carefully curated colour palette to create a recognizable restaurant brand. The designs established a strong visual foundation that could be consistently extended across future branding, packaging and promotional materials.",
        images: [
          "/images/Kathakali_1.webp",
          "/images/Kathakali_2.webp",
          "/images/Kathakali_3.webp",
          "/images/Kathakali_4.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MYMA
  // ─────────────────────────────────────────────────────────────
  myma: {
    title: "Myma",
    desc: "Building a community-driven food platform by leading product strategy, business planning, operations, user experience, marketing and growth from concept to scale.",
    sections: [
      {
        title: "About the Business",
        text: "Myma was created to empower home chefs by providing a trusted platform where they could build sustainable businesses from their kitchens while helping customers discover fresh, home-cooked meals. The vision was to create a technology-enabled marketplace that balanced customer convenience with meaningful earning opportunities for home entrepreneurs."
      },
      {
        title: "The Challenge",
        text: "Building a successful two-sided marketplace required solving challenges for both customers and home chefs. Home chefs needed a simple way to showcase their food, manage orders and grow their businesses, while customers expected reliable discovery, seamless ordering and confidence in food quality. The platform also needed operational processes that could efficiently support day-to-day business activities as the community expanded."
      },
      {
        title: "Work Delivered",
        text: "I played a cross-functional leadership role throughout the product lifecycle, contributing from the initial business idea to day-to-day execution. My responsibilities extended beyond product management to business planning, user experience, operations, marketing and continuous product improvement, ensuring every part of the platform worked together to create value for both customers and home chefs.",
        tags: ["Business Strategy", "Product Strategy", "Product Management", "Feature Ideation & Prioritisation", "User Research", "UX Planning", "Customer Journey Design", "Operations Planning", "Marketing Strategy", "Campaign Ideation", "Content Strategy", "Copywriting", "Brand Communication", "Creative Direction", "Growth Initiatives", "Cross-functional Collaboration"]
      },
      {
        title: "Approach",
        text: "Every decision was guided by the needs of both sides of the marketplace. Product features, onboarding journeys, communication, operational workflows and marketing initiatives were designed together to reduce friction, increase trust and create a seamless experience from chef onboarding to customer retention. Continuous feedback from users and business stakeholders helped shape product improvements and operational decisions throughout the journey."
      },
      {
        title: "Business Impact",
        text: "Myma evolved into a complete product ecosystem that combined technology, operations and community building. By aligning business objectives with user needs, the platform established scalable processes, strengthened engagement and created meaningful opportunities for home chefs while delivering a reliable customer experience."
      },
      {
        title: "App Experience",
        text: "The application experience was designed to simplify every stage of the customer journey, including discovery, ordering, subscriptions and account management. Every screen focused on reducing friction, improving usability and creating an intuitive experience that encouraged repeat engagement.",
        images: [
          "/images/myma_app_screens_1.webp",
          "/images/myma_app_screens_2.webp",
          "/images/myma_app_screens_3.webp",
          "/images/myma_app_screens_4.webp",
          "/images/myma_app_screens_5.webp"
        ]
      },
      {
        title: "Marketing & Brand Communication",
        text: "Alongside product development, I led the ideation, planning, copywriting and creative direction for marketing initiatives that supported customer acquisition, home chef onboarding, feature awareness, seasonal campaigns and community engagement. Every communication was designed to educate, build trust and strengthen the Myma brand while supporting business growth.",
        images: [
          "/images/Myma_Marketing_Post_1.webp",
          "/images/Myma_Marketing_Post_2.webp",
          "/images/Myma_Marketing_Post_3.webp",
          "/images/Myma_Marketing_Post_4.webp",
          "/images/Myma_Marketing_Post_5.webp",
          "/images/Myma_Marketing_Post_6.webp",
          "/images/Myma_Marketing_Post_7.webp",
          "/images/Myma_Marketing_Post_8.webp",
          "/images/Myma_Marketing_Post_9.webp",
          "/images/Myma_Marketing_Post_10.webp",
          "/images/Myma_Marketing_Post_11.webp",
          "/images/Myma_Marketing_Post_12.webp",
          "/images/Myma_Marketing_Post_13.webp",
          "/images/Myma_Marketing_Post_14.webp",
          "/images/Myma_Marketing_Post_15.webp",
          "/images/Myma_Marketing_Post_16.webp",
          "/images/Myma_Marketing_Post_17.webp",
          "/images/Myma_Marketing_Post_18.webp",
          "/images/Myma_Marketing_Post_19.webp",
          "/images/Myma_Marketing_Post_20.webp",
          "/images/Myma_Marketing_Post_21.webp",
          "/images/Myma_Marketing_Post_22.webp",
          "/images/Myma_Marketing_Post_23.webp",
          "/images/Myma_Marketing_Post_24.webp",
          "/images/Myma_Marketing_Post_25.webp",
          "/images/Myma_Marketing_Post_26.webp",
          "/images/Myma_Marketing_Post_27.webp",
          "/images/Myma_Marketing_Post_28.webp",
          "/images/Myma_Marketing_Post_29.webp",
          "/images/Myma_Marketing_Post_30.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // NAKHARA MAKEUP ARTIST
  // ─────────────────────────────────────────────────────────────
  nakhara: {
    title: "Nakhara Makeup Artist",
    desc: "Creating a premium beauty brand that reflects elegance, confidence and timeless bridal experiences through thoughtful brand design.",
    sections: [
      {
        title: "About the Business",
        text: "Nakhara Makeup Artist is a professional beauty brand offering bridal, fashion and special occasion makeup services. The objective was to create a distinctive visual identity that communicated elegance, professionalism and trust while appealing to clients seeking premium beauty experiences."
      },
      {
        title: "The Challenge",
        text: "The beauty industry is highly competitive, making a memorable first impression essential. The challenge was to develop a sophisticated brand identity that reflected the artist's expertise, conveyed luxury without being excessive and created a consistent visual presence across every customer touchpoint."
      },
      {
        title: "Work Delivered",
        text: "I led the brand design process from concept to execution, exploring visual directions, defining the brand personality and creating a cohesive identity system that reflected the elegance and professionalism of the business.",
        tags: ["Brand Strategy", "Brand Identity Design", "Creative Concept Development", "Logo & Visual Identity", "Typography & Colour Direction", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "The identity was designed around the idea of timeless beauty and refined elegance. Every visual element, from typography and colour choices to layouts and supporting graphics, was carefully crafted to create a premium, feminine and memorable brand experience that could be consistently extended across future touchpoints."
      },
      {
        title: "Brand Highlights",
        text: "The final brand identity established a strong visual foundation through a carefully curated design system that balanced luxury with simplicity. The identity was created to strengthen recognition, build customer trust and provide a cohesive look across future branding and promotional materials.",
        images: [
          "/images/Nakhara_1.webp",
          "/images/Nakhara_2.webp",
          "/images/Nakhara_3.webp",
          "/images/Nakhara_4.webp",
          "/images/Nakhara_5.webp",
          "/images/Nakhara_6.webp",
          "/images/Nakhara_7.webp",
          "/images/Nakhara_8.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SWAYAMPOORNA FOUNDATION
  // ─────────────────────────────────────────────────────────────
  swayampoorna: {
    title: "Swayampoorna Foundation",
    desc: "Building a women-centric community and growth ecosystem by leading strategy, operations, communication and execution from the foundation's inception.",
    sections: [
      {
        title: "About the Foundation",
        text: "Swayampoorna Foundation was established with a vision to empower women by helping them transform their skills into sustainable opportunities. Rather than focusing only on learning, the foundation aimed to create an ecosystem where women could build confidence, access communities, develop entrepreneurial skills and move towards financial independence."
      },
      {
        title: "The Challenge",
        text: "Many talented women possessed valuable skills but lacked access to guidance, supportive communities and structured opportunities to grow. The challenge was not simply creating awareness, but building an ecosystem that encouraged participation, nurtured confidence and connected women with meaningful pathways to learning, entrepreneurship and earning."
      },
      {
        title: "Work Delivered",
        text: "I was involved with Swayampoorna Foundation from its early stages, contributing across strategy, execution and day-to-day operations. My role extended beyond creative work to helping shape the foundation's vision, build communities, streamline operations and create communication that encouraged long-term engagement and trust.",
        tags: ["Business Strategy", "Community Building", "Program Ideation", "Operations Management", "Marketing Strategy", "Campaign Planning", "Content Strategy", "Copywriting", "Social Media Management", "Creative Direction", "Visual Design", "Brand Communication", "Stakeholder Coordination"]
      },
      {
        title: "Approach",
        text: "The focus was on building a sustainable community rather than simply running campaigns. Every initiative was designed to encourage participation, strengthen relationships and create opportunities for women to learn, collaborate and grow. Communication, operations and engagement strategies worked together to create an environment where members felt supported throughout their journey."
      },
      {
        title: "Business Impact",
        text: "The foundation grew into an active ecosystem that connected women through communities, awareness initiatives and collaborative programs. By combining strategic planning, operational support and consistent communication, the initiative strengthened engagement while creating pathways that connected learning with real opportunities for personal and professional growth."
      },
      {
        title: "Community & Brand Highlights",
        text: "The foundation's communication included awareness campaigns, community initiatives, educational programs, event promotions and engagement activities. From ideation and planning to copywriting, creative direction and execution, every campaign was developed to inspire participation, strengthen the community and communicate the foundation's mission in a meaningful and consistent way.",
        images: [
          "/images/swayampoorna_foundation_1.webp",
          "/images/swayampoorna_foundation_2.webp",
          "/images/swayampoorna_foundation_3.webp",
          "/images/swayampoorna_foundation_4.webp",
          "/images/swayampoorna_foundation_5.webp",
          "/images/swayampoorna_foundation_6.webp",
          "/images/swayampoorna_foundation_7.webp",
          "/images/swayampoorna_foundation_8.webp",
          "/images/swayampoorna_foundation_9.webp",
          "/images/swayampoorna_foundation_10.webp",
          "/images/swayampoorna_foundation_11.webp",
          "/images/swayampoorna_foundation_12.webp",
          "/images/swayampoorna_foundation_13.webp",
          "/images/swayampoorna_foundation_14.webp",
          "/images/swayampoorna_foundation_15.webp",
          "/images/swayampoorna_foundation_16.webp",
          "/images/swayampoorna_foundation_17.webp",
          "/images/swayampoorna_foundation_18.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // CHANDRAPUR URBAN CO-OPERATIVE BANK
  // ─────────────────────────────────────────────────────────────
  chandrapur: {
    title: "Chandrapur Urban Co-operative Bank",
    desc: "Strengthening customer engagement through thoughtful campaign ideation, festive communication and consistent digital brand storytelling.",
    sections: [
      {
        title: "About the Business",
        text: "Chandrapur Urban Co-operative Bank is a customer-focused financial institution committed to providing trusted banking services to individuals and businesses. The objective was to strengthen the bank's digital presence through meaningful communication that reinforced trust, celebrated important occasions and maintained continuous engagement with customers."
      },
      {
        title: "The Challenge",
        text: "Banking communication often focuses on products and services, leaving limited opportunities to build emotional connections with customers. The challenge was to create festive campaigns and brand communication that reflected the bank's values while remaining professional, relevant and engaging throughout the year."
      },
      {
        title: "Work Delivered",
        text: "I developed the creative communication for festive and marketing campaigns by researching occasions, generating campaign ideas, writing copy, defining creative concepts and designing the final visuals. Every campaign was planned to strengthen customer relationships while maintaining a consistent and trustworthy brand identity.",
        tags: ["Campaign Ideation", "Content Strategy", "Copywriting", "Marketing Communication", "Creative Direction", "Social Media Design", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "Every campaign was designed to go beyond festive greetings by creating meaningful moments of engagement. Thoughtful messaging, consistent visual storytelling and customer-centric communication helped reinforce the bank's identity while ensuring every creative reflected professionalism, warmth and trust."
      },
      {
        title: "Creative Highlights",
        text: "A collection of festive campaigns and marketing creatives was conceptualised, written and designed to strengthen customer engagement and maintain the bank's digital presence throughout the year. Each creative followed a consistent visual language while balancing festive storytelling with the credibility expected from a trusted financial institution.",
        images: [
          "/images/Chandrapur_Urban_1.webp",
          "/images/Chandrapur_Urban_2.webp",
          "/images/Chandrapur_Urban_3.webp",
          "/images/Chandrapur_Urban_4.webp",
          "/images/Chandrapur_Urban_5.webp",
          "/images/Chandrapur_Urban_6.webp",
          "/images/Chandrapur_Urban_7.webp",
          "/images/Chandrapur_Urban_8.webp",
          "/images/Chandrapur_Urban_9.webp",
          "/images/Chandrapur_Urban_10.webp",
          "/images/Chandrapur_Urban_11.webp",
          "/images/Chandrapur_Urban_12.webp",
          "/images/Chandrapur_Urban_13.webp",
          "/images/Chandrapur_Urban_14.webp",
          "/images/Chandrapur_Urban_15.webp",
          "/images/Chandrapur_Urban_16.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // IDENTITY DESIGN COLLECTION
  // ─────────────────────────────────────────────────────────────
  identity: {
    title: "Identity Design",
    desc: "Crafting meaningful brand identities through research, strategy and thoughtful visual storytelling.",
    sections: [
      {
        title: "About the Project",
        text: "Every successful brand begins with a clear identity. These projects involved creating distinctive logos and visual identities that reflected each business's purpose, personality and long-term vision. Rather than designing symbols in isolation, every identity was developed to communicate what the brand stands for and how it should be perceived by its audience."
      },
      {
        title: "The Challenge",
        text: "Every business has a unique story, audience and market position. The challenge was to translate those differences into identities that were simple, memorable and meaningful while ensuring they could remain relevant across digital platforms, print applications and future brand growth."
      },
      {
        title: "Work Delivered",
        text: "I led the complete identity design process for each brand, beginning with understanding the business, its goals, customers and positioning. Every concept was carefully explored before developing a visual identity that aligned with the brand's personality and long-term direction.",
        tags: ["Brand Discovery", "Business Understanding", "Brand Positioning", "Creative Concept Development", "Logo Design", "Typography Selection", "Colour Strategy", "Visual Identity Design"]
      },
      {
        title: "Approach",
        text: "Every identity was developed through a thoughtful creative process that balanced strategy with design. Research, concept exploration and visual refinement helped ensure each logo represented the brand's values, industry and personality while remaining timeless, versatile and instantly recognizable."
      },
      {
        title: "Identity Highlights",
        text: "This collection showcases identity systems created for businesses across different industries. Each logo was conceptualised with a unique purpose, combining typography, colour, symbolism and visual storytelling to create memorable identities that could grow with the businesses they represent.",
        images: [
          "/images/Identity_Design_1.webp",
          "/images/Identity_Design_2.webp",
          "/images/Identity_Design_3.webp",
          "/images/Identity_Design_4.webp",
          "/images/Identity_Design_5.webp",
          "/images/Identity_Design_6.webp",
          "/images/Identity_Design_7.webp",
          "/images/Identity_Design_8.webp",
          "/images/Identity_Design_9.webp",
          "/images/Identity_Design_10.webp",
          "/images/Identity_Design_11.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // PAVANRAJE BMS
  // ─────────────────────────────────────────────────────────────
  pavanraje: {
    title: "Pavanraje BMS",
    desc: "Building an institutional management platform by driving product strategy, operations, user experience and marketing communication from concept to execution.",
    sections: [
      {
        title: "About the Product",
        text: "Pavanraje BMS is a mobile-first business management platform developed to simplify day-to-day institutional operations. The vision was to replace fragmented manual processes with a unified system that helped administrators, staff and management collaborate more efficiently while reducing operational complexity."
      },
      {
        title: "The Challenge",
        text: "Institutions depended on multiple disconnected processes for attendance, task management, expense tracking, communication and operational reporting. These manual workflows increased administrative effort, slowed decision-making and created inconsistencies across teams. The challenge was to design a solution that felt intuitive enough for everyday users while supporting complex operational requirements behind the scenes."
      },
      {
        title: "Work Delivered",
        text: "I was involved throughout the product journey, from understanding business requirements and researching operational challenges to defining product experiences and supporting implementation. As the product evolved, I also led marketing communication by conceptualising campaigns, writing content and designing creatives that introduced features, educated users and strengthened product adoption.",
        tags: ["Business Research", "Product Strategy", "Product Management", "Feature Ideation", "User Research", "Workflow Design", "UX Planning", "Operations Planning", "Stakeholder Collaboration", "Implementation Support", "Marketing Strategy", "Campaign Ideation", "Content Strategy", "Copywriting", "Creative Direction", "Visual Design"]
      },
      {
        title: "Approach",
        text: "The product was designed around existing operational behaviours rather than forcing users to adapt to complicated software. Every workflow was carefully planned to reduce friction, improve usability and make routine administrative tasks faster and easier to complete. Continuous discussions with stakeholders and operational teams helped refine both product decisions and implementation priorities throughout development."
      },
      {
        title: "Business Impact",
        text: "The platform established a structured digital ecosystem for institutional operations by simplifying routine processes, improving operational visibility and creating a scalable foundation for future enhancements. Combining product thinking with operational understanding helped ensure the solution addressed real business needs rather than simply digitising existing processes."
      },
      {
        title: "Product Experience",
        text: "The application was designed with a mobile-first approach to support everyday operational activities. User flows focused on clarity, speed and accessibility, enabling administrators and staff to complete tasks efficiently while maintaining a consistent experience across the platform.",
        images: [
          "/images/pms_saas_mobile_app_1.webp",
          "/images/pms_saas_mobile_app_2.webp",
          "/images/pms_saas_mobile_app_3.webp",
          "/images/pms_saas_mobile_app_4.webp",
          "/images/pms_saas_mobile_app_5.webp"
        ]
      },
      {
        title: "Marketing & Product Communication",
        text: "Alongside product development, I led the ideation, content planning, copywriting and creative direction for marketing campaigns that introduced new features, explained product capabilities and encouraged user engagement. Every campaign translated operational concepts into simple, relevant communication while maintaining a consistent brand identity across digital channels.",
        images: [
          "/images/Pavanraje_Multistate_Social_Media_Post_1.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_2.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_3.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_4.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_5.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_6.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_7.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_8.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_9.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_10.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_11.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_12.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_13.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_14.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_15.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_16.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_17.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_18.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_19.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_20.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_21.webp",
          "/images/Pavanraje_Multistate_Social_Media_Post_22.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // GODOCS
  // ─────────────────────────────────────────────────────────────
  godocs: {
    title: "GoDocs",
    desc: "Simplifying government documentation services by combining product thinking, operational excellence and customer-focused communication.",
    sections: [
      {
        title: "About the Product",
        text: "GoDocs was created to simplify government documentation, registrations, licences and compliance services for individuals, entrepreneurs and small businesses. The vision was to transform complex administrative processes into guided, transparent and easy-to-follow experiences that reduced confusion while improving customer confidence."
      },
      {
        title: "The Challenge",
        text: "Government documentation often involves multiple departments, changing requirements and lengthy procedures that overwhelm users before they even begin an application. The challenge was to create a service that simplified these journeys while ensuring customers always understood what was required, what would happen next and how long each stage would take."
      },
      {
        title: "Work Delivered",
        text: "I contributed throughout the product and service journey by understanding customer needs, planning operational workflows and improving the overall service experience. Alongside product thinking, I managed day-to-day operations and led the brand's social media communication through campaign ideation, content planning, copywriting and creative execution to build trust and educate customers.",
        tags: ["Business Research", "Product Strategy", "Service Design", "User Journey Planning", "Workflow Design", "Operations Management", "Customer Experience", "Marketing Strategy", "Campaign Ideation", "Content Strategy", "Copywriting", "Social Media Management", "Creative Direction", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "Every stage of the customer journey was designed around clarity and simplicity. Operational workflows were structured to streamline document collection, application processing and customer communication, while marketing initiatives focused on educating users about government procedures in language that was practical, approachable and easy to understand."
      },
      {
        title: "Business Impact",
        text: "The project established a structured service model that combined operational efficiency with customer-centric communication. By simplifying documentation workflows and maintaining consistent engagement across digital channels, GoDocs created a stronger foundation for scalable government service delivery while improving the overall customer experience."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // OZO AESTHETIC CLINIQUE
  // ─────────────────────────────────────────────────────────────
  ozo: {
    title: "Ozo Aesthetic Clinique",
    desc: "Creating a refined brand identity that reflects trust, elegance and modern aesthetic care.",
    sections: [
      {
        title: "About the Business",
        text: "Ozo Aesthetic Clinique is a beauty and aesthetic care brand focused on delivering professional treatments in a comfortable and trustworthy environment. The objective was to create a premium visual identity that communicated expertise, sophistication and care while helping the clinic establish a memorable presence from its very first customer interaction."
      },
      {
        title: "The Challenge",
        text: "In the aesthetic and wellness industry, customers often form their first impression before visiting the clinic. The challenge was to develop a visual identity that conveyed professionalism and credibility while maintaining a clean, modern and approachable aesthetic that reflected the quality of the services offered."
      },
      {
        title: "Work Delivered",
        text: "I led the brand identity design process by understanding the clinic's vision, target audience and desired positioning before developing a cohesive visual identity. Every design decision was made to create a timeless and versatile brand that could be consistently applied across customer touchpoints.",
        tags: ["Brand Discovery", "Brand Positioning", "Creative Concept Development", "Logo Design", "Visual Identity Design", "Typography Selection", "Colour Strategy", "Stationery Design"]
      },
      {
        title: "Approach",
        text: "The identity was built around simplicity, elegance and clarity. Every element, including typography, colours, layouts and stationery, was carefully designed to communicate trust while creating a premium experience that aligned with the clinic's values and long-term brand vision."
      },
      {
        title: "Brand Highlights",
        text: "The final identity established a cohesive visual system that extended beyond the logo to business stationery and supporting brand assets. Together, these elements created a consistent and professional brand experience that strengthened recognition and provided a strong foundation for future communication.",
        images: [
          "/images/Ozo_Aesthetic_Clinique_1.webp",
          "/images/Ozo_Aesthetic_Clinique_2.webp",
          "/images/Ozo_Aesthetic_Clinique_3.webp",
          "/images/Ozo_Aesthetic_Clinique_4.webp",
          "/images/Ozo_Aesthetic_Clinique_5.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BIBA (ACADEMIC PROJECT)
  // ─────────────────────────────────────────────────────────────
  biba: {
    title: "Biba (Academic Project)",
    desc: "An academic branding exercise exploring premium fashion communication through advertising and visual storytelling.",
    sections: [
      {
        title: "Project Brief",
        text: "This project was developed as part of my graduation in Applied Arts (Advertising). The assignment challenged students to create advertising and promotional creatives for an established fashion brand while applying principles of branding, visual hierarchy and fashion communication."
      },
      {
        title: "The Objective",
        text: "The focus was on creating premium visual communication that aligned with Biba's established brand identity. The challenge involved presenting fashion products through compelling layouts, balanced typography and strong visual storytelling while maintaining consistency with the brand's aesthetic."
      },
      {
        title: "Work Delivered",
        text: "I independently conceptualised and designed the campaign creatives by exploring layouts, typography, imagery and colour palettes. The project strengthened my understanding of advertising principles and how design choices influence brand perception within the fashion industry.",
        tags: ["Creative Concept Development", "Advertising Design", "Visual Storytelling", "Layout Design", "Typography", "Image Composition", "Presentation Design"]
      },
      {
        title: "Creative Highlights",
        text: "These concepts showcase my academic exploration of fashion advertising, focusing on premium presentation, clean composition and visual storytelling while respecting the visual language of an established fashion brand.",
        images: [
          "/images/Biba_College_Assignment_1.webp",
          "/images/Biba_College_Assignment_2.webp",
          "/images/Biba_College_Assignment_3.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // REJOYCE
  // ─────────────────────────────────────────────────────────────
  rejoyce: {
    title: "Rejoyce",
    desc: "Designing packaging that balances brand identity, product communication and shelf appeal.",
    sections: [
      {
        title: "About the Product",
        text: "Rejoyce required packaging that could communicate the product clearly while creating a strong first impression on the shelf. The objective was to develop a design that reflected the brand's identity, attracted attention and presented essential product information in a clean and organized manner."
      },
      {
        title: "The Challenge",
        text: "Packaging is often the first interaction customers have with a product. The challenge was to create a design that stood out visually while maintaining clarity, balancing aesthetics with functionality and ensuring the packaging reinforced the brand's positioning."
      },
      {
        title: "Work Delivered",
        text: "I developed the packaging concept by understanding the product, defining the visual direction and creating a layout that balanced branding with product communication. Every design decision, from typography and colour selection to information hierarchy, was made to improve usability while strengthening brand recognition.",
        tags: ["Product Understanding", "Packaging Concept Development", "Visual Design", "Packaging Layout Design", "Typography", "Colour Strategy", "Information Hierarchy", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "The design process focused on creating packaging that was visually distinctive, easy to understand and aligned with the brand's identity. Careful attention was given to composition, readability and product presentation so that the packaging could perform effectively in both retail and promotional environments."
      },
      {
        title: "Packaging Highlights",
        text: "These concepts showcase the complete packaging design, demonstrating how branding, typography, colour and layout work together to create a cohesive product experience while enhancing shelf visibility and customer appeal.",
        images: [
          "/images/Rejoyce_Package_Designing_1.webp",
          "/images/Rejoyce_Package_Designing_2.webp",
          "/images/Rejoyce_Package_Designing_3.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // AAROGYA CLUB
  // ─────────────────────────────────────────────────────────────
  aarogya: {
    title: "Aarogya Club",
    desc: "Building and nurturing a wellness community through engagement strategies, educational marketing and consistent communication.",
    sections: [
      {
        title: "About the Initiative",
        text: "Aarogya Club was created to encourage healthier lifestyles by making yoga and wellness simple, accessible and sustainable. The initiative focused on building an engaged community where members could develop healthy habits through regular interaction, educational content and continuous motivation."
      },
      {
        title: "The Challenge",
        text: "While many people wanted to improve their health, maintaining consistency was often the biggest challenge. The objective was to build a supportive community that encouraged participation through meaningful communication, simplified engagement and informative content rather than relying solely on promotional messaging."
      },
      {
        title: "Work Delivered",
        text: "I managed the community-building and marketing initiatives by planning engagement activities, coordinating communication and developing educational campaigns that encouraged long-term participation. My work included campaign ideation, content strategy, copywriting, creative direction and social media management to strengthen both community engagement and brand presence.",
        tags: ["Community Building", "Community Management", "Engagement Strategy", "Marketing Management", "Campaign Ideation", "Content Strategy", "Copywriting", "Educational Marketing", "Social Media Management", "Creative Direction", "Visual Design", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "The focus was on building trust through valuable and consistent communication. Educational campaigns, wellness tips, daily engagement and community activities helped members stay motivated while creating an environment that encouraged accountability, participation and long-term habit formation."
      },
      {
        title: "Business Impact",
        text: "Aarogya Club developed a structured community engagement model supported by informative marketing and regular interaction. Combining community management with educational communication helped strengthen member participation, improve retention and establish a consistent digital presence for the initiative."
      },
      {
        title: "Community & Campaign Highlights",
        text: "These creatives showcase educational campaigns, wellness communication and community engagement initiatives developed to inform, motivate and encourage consistent participation. Every campaign was thoughtfully planned to provide value while maintaining a cohesive and approachable brand identity.",
        images: [
          "/images/Aarogya_Club_Posts_1.webp",
          "/images/Aarogya_Club_Posts_2.webp",
          "/images/Aarogya_Club_Posts_3.webp",
          "/images/Aarogya_Club_Posts_4.webp",
          "/images/Aarogya_Club_Posts_5.webp",
          "/images/Aarogya_Club_Posts_6.webp",
          "/images/Aarogya_Club_Posts_7.webp",
          "/images/Aarogya_Club_Posts_8.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ONLINE PARAYAN
  // ─────────────────────────────────────────────────────────────
  onlineparayan: {
    title: "Online Parayan",
    desc: "Managing large-scale spiritual learning communities through structured operations, participant engagement and meaningful content.",
    sections: [
      {
        title: "About the Initiative",
        text: "Online Parayan was a community-driven initiative designed to make spiritual learning more accessible through structured digital programs. The goal was to help participants develop consistent spiritual practices by combining guided learning with organized communication and well-managed operations."
      },
      {
        title: "The Challenge",
        text: "Managing large groups of participants while ensuring consistent engagement required more than simply sharing learning material. The challenge was to coordinate daily activities, streamline operational processes and deliver valuable content that encouraged participants to remain committed throughout the program."
      },
      {
        title: "Work Delivered",
        text: "I managed the day-to-day operations of the initiative by coordinating participant activities, streamlining communication and ensuring smooth program execution. Alongside operational management, I planned and created content that educated, guided and encouraged participants throughout their learning journey.",
        tags: ["Operations Management", "Community Coordination", "Participant Engagement", "Content Planning", "Content Creation", "Communication Management", "Process Improvement", "Workflow Coordination"]
      },
      {
        title: "Approach",
        text: "The initiative focused on creating a structured yet approachable experience. Operational workflows were designed to simplify participant management, while thoughtfully planned content kept the community informed, engaged and motivated. Consistent communication and organized execution helped build an environment that encouraged long-term participation."
      },
      {
        title: "Business Impact",
        text: "By combining structured operations with consistent content and community engagement, the initiative established an efficient model for managing large participant groups. The approach improved coordination, strengthened communication and supported sustained participation throughout multiple learning programs."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // UNIQUE ACADEMY
  // ─────────────────────────────────────────────────────────────
  unique: {
    title: "Unique Academy",
    desc: "Designing print advertisements that communicate educational offerings with clarity, structure and visual impact.",
    sections: [
      {
        title: "About the Project",
        text: "Unique Academy required newspaper advertisements and print promotional materials that could present educational programs in a clear, engaging and professional manner. The objective was to simplify large amounts of information while creating visually compelling advertisements that captured attention and built credibility."
      },
      {
        title: "The Challenge",
        text: "Educational advertisements often contain extensive information, making readability and message prioritisation essential. The challenge was to organise course details, announcements and key highlights into layouts that were easy to scan while maintaining a strong visual hierarchy suitable for newspaper and print publications."
      },
      {
        title: "Work Delivered",
        text: "I designed print advertisements by planning layouts, organising content and establishing clear visual hierarchies that improved readability without compromising visual appeal. Every creative was developed to communicate important information effectively while maintaining a professional educational brand image.",
        tags: ["Print Advertisement Design", "Layout Design", "Information Hierarchy", "Typography", "Visual Communication", "Print Production Design", "Creative Direction"]
      },
      {
        title: "Approach",
        text: "Every advertisement was designed around clarity and readability. Careful use of typography, spacing, colour and layout ensured that important messages stood out while allowing readers to quickly understand the academy's offerings in a busy print environment."
      },
      {
        title: "Print Campaign Highlights",
        text: "These newspaper advertisements and promotional materials demonstrate a structured approach to educational communication, combining strong layouts, balanced typography and clear information hierarchy to create impactful print campaigns.",
        images: [
          "/images/Unique_Academy_1.webp",
          "/images/Unique_Academy_2.webp",
          "/images/Unique_Academy_3.webp",
          "/images/Unique_Academy_4.webp",
          "/images/Unique_Academy_5.webp",
          "/images/Unique_Academy_6.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SENSES SPALON
  // ─────────────────────────────────────────────────────────────
  senses: {
    title: "Senses Spalon",
    desc: "Strengthening a premium beauty brand through thoughtful marketing communication and visually refined campaigns.",
    sections: [
      {
        title: "About the Business",
        text: "Senses Spalon is a premium beauty and wellness brand offering salon and spa services in a sophisticated environment. The objective was to strengthen the brand's digital presence through elegant marketing communication that reflected the quality of its services while maintaining a consistent and premium visual identity."
      },
      {
        title: "The Challenge",
        text: "Beauty and wellness brands compete in a visually driven industry where every customer interaction shapes perception. The challenge was to create marketing campaigns that showcased services, promotions and seasonal offerings while maintaining a luxurious, trustworthy and cohesive brand experience across digital platforms."
      },
      {
        title: "Work Delivered",
        text: "I developed marketing communication by planning creative concepts, designing promotional campaigns and creating visually engaging content that aligned with the salon's premium positioning. Every campaign was designed to communicate services effectively while strengthening brand recognition and customer engagement.",
        tags: ["Marketing Communication", "Campaign Ideation", "Content Strategy", "Creative Direction", "Social Media Design", "Promotional Campaign Design", "Visual Communication", "Brand Consistency"]
      },
      {
        title: "Approach",
        text: "Every campaign focused on balancing aesthetics with communication. Clean layouts, refined typography and carefully selected imagery were combined with clear messaging to create marketing assets that reinforced the salon's premium identity while encouraging customer engagement."
      },
      {
        title: "Marketing Campaign Highlights",
        text: "These campaigns showcase promotional communication developed to highlight the salon's services, offers and brand experience. Together, they demonstrate a consistent visual language that reflects elegance, professionalism and the premium nature of the brand.",
        images: [
          "/images/Senses_Spalon_1.webp",
          "/images/Senses_Spalon_2.webp",
          "/images/Senses_Spalon_3.webp",
          "/images/Senses_Spalon_4.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // LEMONTREE MEDIA WORKS
  // ─────────────────────────────────────────────────────────────
  lemontree: {
    title: "LemonTree Media Works",
    desc: "Building brand presence for diverse businesses through strategic communication, branding and creative marketing.",
    sections: [
      {
        title: "About the Project",
        text: "LemonTree Media Works partnered with businesses across multiple industries to strengthen their digital presence through branding and marketing. Every project required understanding the client's business, audience and communication goals before developing campaigns that reflected each brand's unique identity."
      },
      {
        title: "The Challenge",
        text: "Every client had different products, services and target audiences, making consistency and adaptability equally important. The challenge was to create distinct marketing communication for each brand while maintaining professional design standards and ensuring every campaign aligned with the client's positioning and business objectives."
      },
      {
        title: "Work Delivered",
        text: "I contributed to branding and marketing initiatives by developing creative concepts, planning campaigns and designing digital communication for businesses across diverse industries. Every project involved understanding the brand's identity and translating it into visually engaging campaigns that supported business goals while maintaining consistency across digital platforms.",
        tags: ["Brand Communication", "Branding Support", "Marketing Communication", "Campaign Ideation", "Content Planning", "Creative Direction", "Social Media Design", "Visual Storytelling", "Digital Marketing Creatives"]
      },
      {
        title: "Approach",
        text: "Every campaign began with understanding the client's business, audience and communication objectives. Visual language, layouts, typography and messaging were adapted to suit each brand, ensuring that every creative remained authentic while contributing to a cohesive and recognizable brand presence."
      },
      {
        title: "Brand & Campaign Highlights",
        text: "This collection showcases branding and marketing creatives developed for businesses across different industries. Each campaign demonstrates a tailored approach to visual communication, balancing creativity with strategic brand consistency to help businesses connect more effectively with their audiences.",
        images: [
          "/images/LemonTree_Media_ABCD_1.webp",
          "/images/LemonTree_Media_ABCD_2.webp",
          "/images/LemonTree_Media_ABCD_3.webp",
          "/images/LemonTree_Media_ABCD_4.webp",
          "/images/LemonTree_Media_ABCD_5.webp",
          "/images/LemonTree_Media_ABCD_6.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // URTH TROOPER
  // ─────────────────────────────────────────────────────────────
  urth: {
    title: "Urth Trooper",
    desc: "Building an eco-conscious brand identity that communicates sustainability through thoughtful design and consistent visual storytelling.",
    sections: [
      {
        title: "About the Business",
        text: "Urth Trooper is a sustainability-focused brand committed to promoting environmentally responsible products and conscious living. The objective was to develop a brand identity that reflected its values while creating a modern, trustworthy and memorable visual presence across customer touchpoints."
      },
      {
        title: "The Challenge",
        text: "Sustainability brands often need to communicate responsibility without relying on generic visual clichés. The challenge was to create an identity that felt authentic, contemporary and approachable while helping the brand stand out in an increasingly competitive market."
      },
      {
        title: "Work Delivered",
        text: "I developed the brand identity by understanding the brand's vision, target audience and positioning before translating those insights into a cohesive visual system. Every design decision, from colours and typography to supporting brand assets, was made to communicate sustainability while maintaining a clean and premium aesthetic.",
        tags: ["Brand Discovery", "Brand Positioning", "Creative Concept Development", "Visual Identity Design", "Logo Application", "Typography Selection", "Colour Strategy", "Brand Communication"]
      },
      {
        title: "Approach",
        text: "The identity was built around simplicity, clarity and sustainability. Natural colour palettes, balanced typography and minimal visual elements were combined to create a timeless brand system that could communicate environmental responsibility while remaining versatile across digital and print applications."
      },
      {
        title: "Brand Highlights",
        text: "These brand assets demonstrate how the identity was extended across multiple touchpoints while maintaining consistency and reinforcing the brand's eco-conscious positioning. Together, they establish a visual language that is modern, memorable and aligned with the brand's mission.",
        images: [
          "/images/Urth_Trooper_1.webp",
          "/images/Urth_Trooper_2.webp",
          "/images/Urth_Trooper_3.webp",
          "/images/Urth_Trooper_4.webp",
          "/images/Urth_Trooper_5.webp"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // AD WEBSTAR
  // ─────────────────────────────────────────────────────────────
  adwebstar: {
    title: "AD Webstar",
    desc: "Helping businesses strengthen their digital presence through creative marketing communication and impactful design.",
    sections: [
      {
        title: "About the Project",
        text: "AD Webstar partnered with businesses across different industries to improve their digital presence through marketing and creative communication. The objective was to develop campaigns that combined engaging visuals with clear messaging, helping brands communicate effectively and build stronger connections with their audiences."
      },
      {
        title: "The Challenge",
        text: "Every business had unique goals, products and target audiences. The challenge was to create marketing communication that reflected each brand's personality while maintaining consistency, visual appeal and clarity across digital platforms."
      },
      {
        title: "Work Delivered",
        text: "I contributed to marketing initiatives by developing campaign concepts, planning communication and designing social media creatives for multiple brands. Every campaign was tailored to the client's objectives, ensuring that visual storytelling and messaging worked together to strengthen brand visibility and audience engagement.",
        tags: ["Marketing Communication", "Campaign Ideation", "Content Planning", "Creative Direction", "Social Media Design", "Visual Communication", "Campaign Design", "Brand Consistency"]
      },
      {
        title: "Approach",
        text: "Every campaign began with understanding the client's business, audience and communication goals. Layouts, typography, imagery and messaging were carefully combined to create visually engaging marketing assets that remained consistent with each brand's identity while supporting their promotional objectives."
      },
      {
        title: "Marketing Campaign Highlights",
        text: "This collection showcases digital marketing creatives developed for businesses across multiple industries. Each campaign demonstrates a thoughtful balance of branding, communication and design, creating cohesive visual experiences that help brands stand out across digital platforms.",
        images: [
          "/images/AdWebstar_1.webp",
          "/images/AdWebstar_2.webp",
          "/images/AdWebstar_3.webp",
          "/images/AdWebstar_4.webp",
          "/images/AdWebstar_5.webp"
        ]
      }
    ]
  }

};
