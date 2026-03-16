// Internationalization (i18n) System
const TRANSLATIONS = {
  // === COMMON (Header, Footer, Nav) ===
  "nav.home": { en: "Home", zh: "首页" },
  "nav.products": { en: "Products", zh: "产品中心" },
  "nav.about": { en: "About Us", zh: "关于我们" },
  "nav.news": { en: "News", zh: "新闻动态" },
  "nav.blog": { en: "Blog", zh: "博客" },
  "nav.contact": { en: "Contact", zh: "联系我们" },
  "nav.mov": { en: "Metal Oxide Varistor", zh: "金属氧化物压敏电阻" },
  "nav.spd-oem": { en: "Surge Protective Device OEM", zh: "浪涌保护器OEM" },
  "nav.dc-spd": { en: "DC SPD OEM", zh: "直流SPD OEM" },
  "nav.ac-spd": { en: "AC SPD OEM", zh: "交流SPD OEM" },
  "nav.tmov": { en: "TMOV", zh: "TMOV热保护压敏电阻" },
  "nav.accessories": { en: "Accessories for SPDs", zh: "SPD配件" },
  "logo.name": { en: "FLYBOAT", zh: "益舸" },
  "logo.sub": { en: "Surge Protection Solutions", zh: "浪涌保护解决方案" },

  // Footer
  "footer.quicklinks": { en: "Quick Links", zh: "快速链接" },
  "footer.products": { en: "Products", zh: "产品中心" },
  "footer.contact": { en: "Contact", zh: "联系方式" },
  "footer.contactus": { en: "Contact Us", zh: "联系我们" },
  "footer.aboutus": { en: "About Us", zh: "关于我们" },
  "footer.desc": { en: "Guiyang High-Tech YiGe Electronic Co., Ltd. We strive to meet and exceed our clients' expectation. We survive and thrive with our clients' trust and satisfaction.", zh: "贵阳高新益舸电子有限公司。我们致力于满足并超越客户期望，以客户的信任和满意为根基，不断发展壮大。" },
  "footer.mov": { en: "Metal Oxide Varistor", zh: "金属氧化物压敏电阻" },
  "footer.dcspd": { en: "DC SPD OEM", zh: "直流SPD OEM" },
  "footer.acspd": { en: "AC SPD OEM", zh: "交流SPD OEM" },
  "footer.tmov": { en: "TMOV", zh: "TMOV" },
  "footer.spdacc": { en: "SPD Accessories", zh: "SPD配件" },
  "footer.address": { en: "Shawen High-Tech Zone, Chuangji Street, Baiyun District, Guiyang City, Guizhou Province, China", zh: "中国贵州省贵阳市白云区创基街沙文高新区" },
  "footer.copyright": { en: "&copy; 2025 Guiyang High-Tech Yige Electronic Co., Ltd. All Rights Reserved.", zh: "&copy; 2025 贵阳高新益舸电子有限公司 版权所有。" },

  // === HOME PAGE ===
  "home.badge1": { en: "ISO 9001 Certified", zh: "ISO 9001 认证" },
  "home.badge2": { en: "UL & TUV Approved", zh: "UL & TUV 认证" },
  "home.hero.title": { en: 'Leading Manufacturer of <span class="highlight">Metal Oxide Varistors</span> &amp; Surge Protection', zh: '领先的<span class="highlight">金属氧化物压敏电阻</span>及浪涌保护制造商' },
  "home.hero.desc": { en: "Founded in October 2010. Over 20 years of expertise in MOV and SPD manufacturing. National high-tech enterprise with strong R&D capabilities, serving clients across 80 countries worldwide.", zh: "成立于2010年10月，拥有超过20年的压敏电阻和浪涌保护器制造经验。国家高新技术企业，具有强大的研发能力，产品远销全球80个国家和地区。" },
  "home.hero.viewproducts": { en: "View Products", zh: "查看产品" },
  "home.hero.getquote": { en: "Get a Quote", zh: "获取报价" },

  // Stats bar
  "home.stat.years": { en: "Years", zh: "年" },
  "home.stat.lines": { en: "Production Lines", zh: "生产线" },
  "home.stat.facility": { en: "m² Facility", zh: "m² 厂房" },
  "home.stat.units": { en: "Units/Year", zh: "年产量" },
  "home.stat.staff": { en: "Staff", zh: "员工" },
  "home.stat.service": { en: "Service", zh: "服务" },
  "home.stat.countries": { en: "Countries", zh: "出口国家" },

  // Products section
  "home.products.overline": { en: "Our Products", zh: "我们的产品" },
  "home.products.title": { en: "Comprehensive Surge Protection Solutions", zh: "全面的浪涌保护解决方案" },
  "home.products.desc": { en: "Lead-free, high-quality metal oxide varistors and surge protective devices with OEM/ODM customization support.", zh: "无铅、高品质金属氧化物压敏电阻和浪涌保护器，支持OEM/ODM定制。" },
  "home.products.hot": { en: "Hot", zh: "热销" },
  "home.products.ac": { en: "AC Varistor", zh: "交流压敏电阻" },
  "home.products.ac.desc": { en: "Voltage power surge protector metal oxide varistor for AC applications with superior clamping performance.", zh: "适用于交流应用的电压浪涌保护金属氧化物压敏电阻，具有卓越的箝位性能。" },
  "home.products.spd": { en: "Power Line SPD", zh: "电源线浪涌保护器" },
  "home.products.spd.desc": { en: "Protect electric systems and on-loading electrical apparatus from thunder and lightning surges.", zh: "保护电力系统和在线电气设备免受雷电浪涌的侵害。" },
  "home.products.modules": { en: "Surge Protective Modules", zh: "浪涌保护模块" },
  "home.products.modules.desc": { en: "Applicable for all common electrical power systems. Modular design for easy installation and replacement.", zh: "适用于所有常见电力系统，模块化设计，便于安装和更换。" },
  "home.products.viewdetails": { en: "View Details →", zh: "查看详情 →" },
  "home.products.viewall": { en: "View All Products →", zh: "查看所有产品 →" },

  // About preview
  "home.about.overline": { en: "About Flyboat", zh: "关于益舸" },
  "home.about.title": { en: "National High-Tech Enterprise with Strong R&D Capability", zh: "具有强大研发能力的国家高新技术企业" },
  "home.about.desc1": { en: 'Guiyang High-Tech YiGe Electronic Co., Ltd has been a designated "special manufacturer of MOVs for SPD and onboard SPD" for over two decades. We serve as a drafting committee member for China\'s national varistor standard.', zh: "贵阳高新益舸电子有限公司二十多年来一直被指定为\"SPD用及车载SPD用压敏电阻专业制造商\"，是中国国家压敏电阻标准起草委员会成员。" },
  "home.about.desc2": { en: "Our facility spans 9,000+ m² with modern production lines capable of producing approximately 20 million standard MOV units and 5 million onboard SPDs annually.", zh: "我们拥有9,000多平方米的现代化生产设施，年产约2000万只标准压敏电阻和500万只车载SPD。" },
  "home.about.rd": { en: "R&D Driven", zh: "研发驱动" },
  "home.about.rd.desc": { en: "Participated in developing IEC & national standards", zh: "参与制定IEC及国家标准" },
  "home.about.quality": { en: "Certified Quality", zh: "品质认证" },
  "home.about.quality.desc": { en: "ISO 9001, UL, TUV certified", zh: "ISO 9001、UL、TUV认证" },
  "home.about.global": { en: "Global Reach", zh: "全球覆盖" },
  "home.about.global.desc": { en: "Products in 80 countries", zh: "产品远销80个国家" },
  "home.about.oem": { en: "OEM/ODM Support", zh: "OEM/ODM支持" },
  "home.about.oem.desc": { en: "Full customization capabilities", zh: "全面定制化能力" },

  // Certifications
  "home.cert.overline": { en: "Quality Assurance", zh: "品质保证" },
  "home.cert.title": { en: "Internationally Certified", zh: "国际认证" },
  "home.cert.desc": { en: "Our products and processes meet the highest international quality and safety standards.", zh: "我们的产品和流程符合最高的国际质量和安全标准。" },
  "home.cert.ul": { en: "UL Certified", zh: "UL认证" },
  "home.cert.tuv": { en: "TUV Certified", zh: "TUV认证" },

  // News section
  "home.news.overline": { en: "Latest News", zh: "最新动态" },
  "home.news.title": { en: "Stay Updated", zh: "保持关注" },
  "home.news.desc": { en: "Industry insights, company news, and technical knowledge from our experts.", zh: "来自我们专家的行业洞察、公司新闻和技术知识。" },
  "home.news.tag.news": { en: "News", zh: "新闻" },
  "home.news.tag.event": { en: "Event", zh: "活动" },
  "home.news.tag.rd": { en: "R&D", zh: "研发" },
  "home.news.mov.title": { en: "What Is MOV?", zh: "什么是MOV？" },
  "home.news.mov.desc": { en: "Metal Oxide Varistors (MOVs) are a type of nonlinear resistor component primarily composed of zinc oxide (ZnO).", zh: "金属氧化物压敏电阻（MOV）是一种主要由氧化锌（ZnO）组成的非线性电阻元件。" },
  "home.news.hannover.title": { en: "Hannover Messe 2025", zh: "2025年汉诺威工业博览会" },
  "home.news.hannover.desc": { en: "Flyboat participated in the prestigious Hannover Messe 2025 industrial trade fair, showcasing our latest surge protection innovations.", zh: "益舸参加了久负盛名的2025年汉诺威工业博览会，展示了我们最新的浪涌保护创新产品。" },
  "home.news.cost.title": { en: "MOV's R&D Cost Reductions", zh: "MOV研发降本" },
  "home.news.cost.desc": { en: "Our research and development efforts continue to drive cost reductions in metal oxide varistor manufacturing processes.", zh: "我们的研发工作持续推动金属氧化物压敏电阻制造工艺的成本降低。" },
  "home.news.readmore": { en: "Read More →", zh: "阅读更多 →" },

  // CTA
  "home.cta.title": { en: "Ready to Discuss Your Project?", zh: "准备好讨论您的项目了吗？" },
  "home.cta.desc": { en: "Contact our team for custom MOV and SPD solutions tailored to your specific requirements.", zh: "联系我们的团队，获取根据您的特定需求定制的MOV和SPD解决方案。" },
  "home.cta.btn": { en: "Send an Inquiry", zh: "发送询盘" },

  // === ABOUT PAGE ===
  "about.breadcrumb": { en: "About Us", zh: "关于我们" },
  "about.pagetitle": { en: "About Flyboat", zh: "关于益舸" },
  "about.pagedesc": { en: "National high-tech enterprise with over 20 years of expertise in surge protection manufacturing.", zh: "拥有超过20年浪涌保护制造经验的国家高新技术企业。" },
  "about.whoweare": { en: "Who We Are", zh: "公司简介" },
  "about.whoweare.desc": { en: '<strong>GuiYang Hi-Tec YiGe Electronic Co., Ltd.</strong>, founded in October 2010, traces its roots back to Guizhou Flyboat Electronic Co., Ltd., established in 2000. With over two decades of deep expertise in MOV and SPD manufacturing, our company successfully completed the intelligent and digital transformation of our production system in 2025. As a recognized National High-Tech Enterprise and a Provincial "Specialized and Innovative" SME, we possess robust R&D capabilities, with our products and services reaching 80 countries and regions worldwide.', zh: '<strong>贵阳高新益舸电子有限公司</strong>成立于2010年10月，其前身是创立于2000年的贵州飞舸电子有限公司。公司在MOV和SPD制造领域具备超过20年的深厚积累，并于2025年完成了生产体系的智能化与数字化转型。作为国家高新技术企业、省级专精特新中小企业，公司拥有扎实的研发实力，产品与服务已覆盖全球80个国家和地区。' },
  "about.leadership.title": { en: "Industry Leadership & Standards", zh: "行业领导力与标准" },
  "about.leadership.desc": { en: "For more than 20 years, we have been deeply dedicated to the R&D and production of Surge Protective Devices (SPDs) and Metal Oxide Varistors (MOVs) for automotive SPDs. As a member of the drafting committee for China's national varistor standards, we actively participate in the development of industry benchmarks. Our Legal Representative, Mr. Zihao Fei, serves as a Chinese Expert on the IEC SC37B Sub-Committee and Deputy Director of the Varistor Professional Committee of the Chinese Institute of Electronics. He was deeply involved in the revision of the international standard IEC 61643-331 (2017): Components for low-voltage surge protective devices - Part 331: Performance requirements and test methods for metal oxide varistors (MOV).", zh: "贵阳高新益舸电子有限公司二十余年来专注深耕SPD（电涌保护器）及车载SPD用MOV（金属氧化物压敏电阻）的研发与生产。公司作为中国国家压敏电阻标准的起草委员会成员单位，积极参与行业标准建设。其法人代表费自豪同时担任国际电工委员会（IEC）SC37B分委员会中国专家及中国电子学会电压敏专业学部副主任委员，并深度参与了国际标准IEC61643-331:Components for low-voltage surge protective devices - Part 331: Performance requirements and test methods for metal oxide varistors (MOV) 2017的修订工作。" },
  "about.manufacturing.title": { en: "Manufacturing Excellence", zh: "卓越制造" },
  "about.manufacturing.desc": { en: "Covering an area of over 6,600 square meters, our facility features a modern plant exceeding 9,000 square meters and is equipped with advanced production lines. We possess robust large-scale manufacturing capabilities, delivering an impressive annual capacity of approximately 20 million standard MOVs and 5 million onboard SPDs.", zh: "公司占地10亩，拥有9000余平方米的现代化厂房及先进生产线，具备强大的规模化生产能力，年产能可达标准MOV约2000万只、板载SPD约500万只。" },

  // Corporate Values
  "about.values.overline": { en: "Our Values", zh: "我们的价值观" },
  "about.values.title": { en: "Corporate Philosophy", zh: "企业理念" },
  "about.values.belief": { en: "Value Belief", zh: "价值信念" },
  "about.values.belief.desc": { en: "Do our utmost to protect the achievements of human civilization from lightning damage.", zh: "竭尽全力保护人类文明成果免受雷电侵害。" },
  "about.values.team": { en: "Team Spirit", zh: "团队精神" },
  "about.values.team.desc": { en: "LOYALTY | SYNERGY | DEVOTION", zh: "忠诚 | 协同 | 奉献" },
  "about.values.operation": { en: "Operation Advancement", zh: "运营进取" },
  "about.values.operation.desc": { en: "Strong attention to details. Transcendence through innovation. Strive to be the best one.", zh: "注重细节，创新超越，力争做到最好。" },
  "about.values.quality": { en: "Quality Policy", zh: "质量方针" },
  "about.values.quality.desc": { en: "We strive to meet and exceed our clients' expectation. We survive and thrive with our clients' trust and satisfaction.", zh: "我们致力于满足并超越客户期望，以客户的信任和满意为根基，不断发展壮大。" },
  "about.values.strategy": { en: "Development Strategy", zh: "发展战略" },
  "about.values.strategy.desc": { en: "Win client loyalty with excellent product performance and technical service. Create a brilliant future with professional competencies and a strong concentration.", zh: "以卓越的产品性能和技术服务赢得客户忠诚，以专业能力和专注精神创造辉煌未来。" },
  "about.values.goals": { en: "Goals", zh: "企业目标" },
  "about.values.goals.desc": { en: "Keep exploring, improving product performance, and striving to be the best supplier of lightning protection components in the world.", zh: "不断探索，持续提升产品性能，力争成为全球最优秀的防雷元器件供应商。" },

  // Leadership
  "about.leader.overline": { en: "Leadership", zh: "领导团队" },
  "about.leader.title": { en: "Expert Guidance", zh: "专家引领" },
  "about.leader.name": { en: "Mr. Zihao Fei", zh: "费子豪 先生" },
  "about.leader.role": { en: "Legal Representative & Chief Expert", zh: "法定代表人 & 首席专家" },
  "about.leader.desc": { en: "A well-known Chinese expert in varistor technology who served 5 years with the International Electrotechnical Commission (IEC) SC37B and 15 years with the Chinese Institute of Electronics (CIE). He served as the main drafter of GB18802.331.2020 and participated in developing IEC61643-331.2017. His expertise drives the company's commitment to world-class surge protection solutions.", zh: "中国知名压敏电阻技术专家，在国际电工委员会（IEC）SC37B任职5年，在中国电子学会任职15年。他是GB18802.331.2020的主要起草人，并参与了IEC61643-331.2017的制定。他的专业知识推动着公司致力于提供世界一流的浪涌保护解决方案。" },

  // Manufacturing Capabilities
  "about.mfg.overline": { en: "Manufacturing", zh: "制造实力" },
  "about.mfg.title": { en: "Our Capabilities", zh: "我们的能力" },
  "about.mfg.desc": { en: "Comprehensive manufacturing facilities equipped with modern production lines and advanced testing equipment.", zh: "配备现代化生产线和先进检测设备的综合制造设施。" },
  "about.mfg.facility": { en: "9,000+ m² Facility", zh: "9,000+ m² 厂房" },
  "about.mfg.facility.desc": { en: "Modern manufacturing facility with six production lines, capable of producing approximately 30 million standard MOV units annually.", zh: "现代化制造设施，拥有六条生产线，年产约3000万只标准压敏电阻。" },
  "about.mfg.spd": { en: "3M+ Onboard SPDs", zh: "300万+车载SPD" },
  "about.mfg.spd.desc": { en: "Annual production capacity of over 3 million onboard SPDs with comprehensive quality control at every stage.", zh: "年产超过300万只车载SPD，每个环节均有全面的质量控制。" },
  "about.mfg.testing": { en: "Advanced Testing", zh: "先进检测" },
  "about.mfg.testing.desc": { en: "Equipped with 120kA 8/20\u00b5s lightning tester, 15kA 10/350\u00b5s lightning tester, 2ms rectangular surge tester, power frequency temporary overvoltage (TOV) tester, high temperature aging test chamber, and constant temperature and humidity chamber.", zh: "配备120kA 8/20\u00b5s雷电测试仪、15kA 10/350\u00b5s雷电测试仪、2ms方波浪涌测试仪、工频暂态过电压（TOV）测试仪、高温老化试验箱和恒温恒湿试验箱。" },
  "about.mfg.employees": { en: "100+ Employees", zh: "100+员工" },
  "about.mfg.employees.desc": { en: "Experienced workforce of over 100 skilled professionals dedicated to quality manufacturing and customer service.", zh: "拥有100多名经验丰富的专业人员，致力于高品质制造和客户服务。" },
  "about.mfg.distribution": { en: "Global Distribution", zh: "全球分销" },
  "about.mfg.distribution.desc": { en: "Products distributed across North America, Europe, Asia, the Middle East, and Southeast Asia through reliable supply chains.", zh: "通过可靠的供应链将产品分销至北美、欧洲、亚洲、中东和东南亚。" },
  "about.mfg.oemodm": { en: "OEM/ODM Services", zh: "OEM/ODM服务" },
  "about.mfg.oemodm.desc": { en: "Full customization capabilities for wholesale clients needing tailored surge protection solutions for their specific applications.", zh: "为批发客户提供全面的定制化能力，满足其特定应用的浪涌保护需求。" },

  // Certifications
  "about.cert.overline": { en: "Certifications", zh: "资质认证" },
  "about.cert.title": { en: "Quality You Can Trust", zh: "值得信赖的品质" },
  "about.cert.desc": { en: "Our products and processes are certified by leading international standards bodies.", zh: "我们的产品和流程获得了国际领先标准机构的认证。" },

  // CTA
  "about.cta.title": { en: "Partner With Us", zh: "与我们合作" },
  "about.cta.desc": { en: "Discover how Flyboat's surge protection expertise can serve your business needs.", zh: "了解益舸的浪涌保护专业技术如何服务于您的业务需求。" },
  "about.cta.btn": { en: "Contact Our Team", zh: "联系我们的团队" },

  // === PRODUCT DETAIL PAGE ===
  "product.brand": { en: "FLYBOAT", zh: "益舸" },
  "product.description": { en: "Product Description", zh: "产品描述" },
  "product.features": { en: "Features &amp; Characteristics", zh: "产品特点" },
  "product.specifications": { en: "Technical Specifications", zh: "技术参数" },
  "product.applications": { en: "Applications", zh: "应用领域" },
  "product.standards": { en: "Standards &amp; Certifications", zh: "标准与认证" },
  "product.shipping": { en: "Shipping &amp; Payment", zh: "运输与付款" },
  "product.shipping.packing": { en: "Packing", zh: "包装" },
  "product.shipping.packingDesc": { en: "We pack our goods in neutral boxes and brown cartons. If you have a legally registered patent, we can pack the goods in your branded boxes after getting your authorization letters.", zh: "我们将货物装入中性包装盒和棕色纸箱中。如果您有合法注册的专利，在获得您的授权书后，我们可以将货物装入您的品牌包装盒中。" },
  "product.shipping.paymentTerms": { en: "Payment Terms", zh: "付款条件" },
  "product.shipping.paymentTermsDesc": { en: "T/T 50% as deposit, and 50% before delivery. We'll show you photos of the products and packages before you pay the balance.", zh: "电汇50%作为定金，发货前支付余款50%。在您支付余款之前，我们会向您展示产品和包装的照片。" },
  "product.shipping.delivery": { en: "Delivery", zh: "交付" },
  "product.shipping.deliveryDesc": { en: "EXW, FOB, CFR, CIF, DDU. Generally 7-15 days after receiving your advance payment. The specific delivery time depends on the items and the quantity of your order.", zh: "EXW、FOB、CFR、CIF、DDU。一般在收到预付款后7-15天发货。具体交货时间取决于产品和订单数量。" },
  "product.shipping.shippingPolicy": { en: "Shipping Policy", zh: "运输政策" },
  "product.shipping.shippingPolicyDesc": { en: "All items will be shipped within 60 business days after received cleared payment. International shipping may delay due to strict customs and bad weather. Please contact us if you have NOT received item after 35 days.", zh: "所有物品将在收到清算付款后60个工作日内发货。国际运输可能因严格的海关和恶劣天气而延迟。如果您在35天后仍未收到物品，请联系我们。" },
  "product.whychoose": { en: "Why Choose FLYBOAT", zh: "为什么选择益舸" },
  "product.whychoose.quality": { en: "Quality Assurance", zh: "品质保证" },
  "product.whychoose.qualityDesc": { en: "All the products will go through lots of tests carefully before dispatch", zh: "所有产品在发货前都会经过严格的多项测试" },
  "product.whychoose.shipping": { en: "Fast Shipping", zh: "快速运输" },
  "product.whychoose.shippingDesc": { en: "Competitive production capacity and fast shipping worldwide", zh: "具有竞争力的产能，快速全球发货" },
  "product.whychoose.price": { en: "Factory Direct Price", zh: "工厂直销价" },
  "product.whychoose.priceDesc": { en: "Factory direct sale, most competitive manufacturer's price", zh: "工厂直销，最具竞争力的制造商价格" },
  "product.whychoose.smallOrder": { en: "Small Order Acceptable", zh: "接受小批量订单" },
  "product.whychoose.smallOrderDesc": { en: "Small orders are acceptable for testing and sample evaluation", zh: "接受小批量订单，用于测试和样品评估" },
  "product.faq": { en: "Frequently Asked Questions", zh: "常见问题" },
  "product.faq.packingQ": { en: "What is your terms of packing?", zh: "你们的包装条款是什么？" },
  "product.faq.packingA": { en: "Generally, we pack our goods in neutral boxes and brown cartons. If you have a legally registered patent, we can pack the goods in your branded boxes after getting your authorization letters.", zh: "一般来说，我们将货物装入中性包装盒和棕色纸箱中。如果您有合法注册的专利，在获得您的授权书后，我们可以将货物装入您的品牌包装盒中。" },
  "product.faq.paymentQ": { en: "What is your terms of payment?", zh: "你们的付款条件是什么？" },
  "product.faq.paymentA": { en: "T/T 50% as deposit, and 50% before delivery. We'll show you the photos of the products and packages before you pay the balance.", zh: "电汇50%作为定金，发货前支付余款50%。在您支付余款之前，我们会向您展示产品和包装的照片。" },
  "product.faq.deliveryQ": { en: "What is your terms of delivery?", zh: "你们的交货条件是什么？" },
  "product.faq.deliveryA": { en: "EXW, FOB, CFR, CIF, DDU.", zh: "EXW、FOB、CFR、CIF、DDU。" },
  "product.faq.deliveryTimeQ": { en: "How about your delivery time?", zh: "你们的交货时间是多久？" },
  "product.faq.deliveryTimeA": { en: "Generally, it will take 7-15 days after receiving your advance payment. The specific delivery time depends on the items and the quantity of your order.", zh: "一般在收到预付款后7-15天发货。具体交货时间取决于产品和订单数量。" },
  "product.feedback": { en: "Customer Feedback &amp; Service", zh: "客户反馈与服务" },
  "product.feedback.satisfaction": { en: "Your Satisfaction Matters", zh: "您的满意度至关重要" },
  "product.feedback.satisfactionDesc": { en: "Your satisfaction is most important for us. If you have a problem or question regarding your transaction, please contact us before leaving any type of feedback. We are always willing to work things out.", zh: "您的满意是我们最重视的。如果您对交易有任何问题，请在留下反馈之前联系我们。我们始终愿意与您协商解决。" },
  "product.feedback.support": { en: "24/7 Customer Support", zh: "全天候客户支持" },
  "product.feedback.supportDesc": { en: "Our engineering team provides expert guidance on product selection, technical specifications, and application support. Contact us anytime.", zh: "我们的工程团队提供产品选型、技术参数和应用支持方面的专业指导。随时联系我们。" },
  "product.feedback.experience": { en: "Share Your Experience", zh: "分享您的体验" },
  "product.feedback.experienceDesc": { en: "Once you have received your item, please leave feedback for us as this will inform us that you have received your items. We really appreciate your positive feedback and 5 Star ratings.", zh: "收到物品后，请给我们留下反馈，这将让我们知道您已经收到了产品。我们非常感谢您的好评和五星评价。" },
  "product.related": { en: "Related Products", zh: "相关产品" },
  "product.sendInquiry": { en: "Send Inquiry", zh: "发送询盘" },
  "product.contactSales": { en: "Contact Sales", zh: "联系销售" },
  "product.inquiry": { en: "Product Inquiry", zh: "产品询盘" },
  "product.meta.brand": { en: "Brand:", zh: "品牌：" },
  "product.meta.manufacturer": { en: "Manufacturer:", zh: "制造商：" },
  "product.meta.manufacturerVal": { en: "Guiyang High-Tech Yige Electronic Co., Ltd", zh: "贵阳高新益舸电子有限公司" },
  "product.meta.payment": { en: "Payment:", zh: "付款方式：" },
  "product.meta.paymentVal": { en: "T/T 50% deposit, 50% before delivery", zh: "电汇50%定金，发货前付余款50%" },
  "product.meta.delivery": { en: "Delivery:", zh: "交付方式：" },
  "product.meta.deliveryVal": { en: "EXW, FOB, CFR, CIF, DDU", zh: "EXW、FOB、CFR、CIF、DDU" },
  "product.service.fastDelivery": { en: "Fast Delivery", zh: "快速交付" },
  "product.service.fastDeliveryDesc": { en: "7-15 days after payment", zh: "付款后7-15天发货" },
  "product.service.qualityAssurance": { en: "Quality Assurance", zh: "品质保证" },
  "product.service.qualityAssuranceDesc": { en: "ISO 9001 &amp; UL certified", zh: "ISO 9001和UL认证" },
  "product.service.customerService": { en: "24/7 Customer Service", zh: "全天候客服" },
  "product.service.customerServiceDesc": { en: "Expert support anytime", zh: "随时提供专业支持" },
  "product.cta.title": { en: "Need a Custom Solution?", zh: "需要定制方案？" },
  "product.cta.desc": { en: "We offer OEM/ODM customization for all products. Contact us for tailored surge protection solutions.", zh: "我们为所有产品提供OEM/ODM定制服务，联系我们获取量身定制的浪涌保护解决方案。" },
  "product.cta.btn": { en: "Request a Quote", zh: "获取报价" },

  // === CONTACT PAGE ===
  "contact.breadcrumb": { en: "Contact Us", zh: "联系我们" },
  "contact.pagetitle": { en: "Contact Us", zh: "联系我们" },
  "contact.pagedesc": { en: "Get in touch with our team for inquiries, quotes, or technical support.", zh: "联系我们的团队，获取询价、报价或技术支持。" },
  "contact.email": { en: "Email", zh: "电子邮件" },
  "contact.phone": { en: "Phone", zh: "电话" },
  "contact.sales": { en: "Sales Contact: Colin Fei", zh: "销售联系人：费先生" },
  "contact.address": { en: "Address", zh: "地址" },
  "contact.address.val": { en: "Shawen High-Tech Zone, Chuangji Street,<br>Baiyun District, Guiyang City,<br>Guizhou Province, China", zh: "中国贵州省贵阳市<br>白云区创基街<br>沙文高新区" },
  "contact.hours": { en: "Business Hours", zh: "营业时间" },
  "contact.hours.val": { en: "24-hour customer service available", zh: "提供24小时客户服务" },
  "contact.markets": { en: "Markets Served", zh: "服务市场" },
  "contact.markets.val": { en: "North America, Europe, Asia, Middle East, and Southeast Asia", zh: "北美、欧洲、亚洲、中东和东南亚" },
  "contact.form.title": { en: "Send Us an Inquiry", zh: "发送询盘" },
  "contact.form.name": { en: "Your Name *", zh: "您的姓名 *" },
  "contact.form.company": { en: "Company", zh: "公司名称" },
  "contact.form.email": { en: "Email Address *", zh: "电子邮箱 *" },
  "contact.form.phone": { en: "Phone Number", zh: "电话号码" },
  "contact.form.product": { en: "Product Interest", zh: "感兴趣的产品" },
  "contact.form.select": { en: "Select a product category", zh: "选择产品类别" },
  "contact.form.mov": { en: "Metal Oxide Varistor", zh: "金属氧化物压敏电阻" },
  "contact.form.dcspd": { en: "DC SPD OEM", zh: "直流SPD OEM" },
  "contact.form.acspd": { en: "AC SPD OEM", zh: "交流SPD OEM" },
  "contact.form.tmov": { en: "TMOV", zh: "TMOV" },
  "contact.form.modules": { en: "Surge Protective Modules", zh: "浪涌保护模块" },
  "contact.form.accessories": { en: "SPD Accessories", zh: "SPD配件" },
  "contact.form.other": { en: "Other / Custom Solution", zh: "其他 / 定制方案" },
  "contact.form.message": { en: "Your Message *", zh: "您的留言 *" },
  "contact.form.submit": { en: "Submit Inquiry", zh: "提交询盘" },
  "contact.cta.title": { en: "We Respond Within 24 Hours", zh: "我们将在24小时内回复" },
  "contact.cta.desc": { en: "Our team is ready to help you find the right surge protection solution for your needs.", zh: "我们的团队随时准备帮助您找到合适的浪涌保护解决方案。" },
  "contact.cta.btn": { en: "Email Us Directly", zh: "直接发送邮件" },

  // === NEWS PAGE ===
  "news.breadcrumb": { en: "News", zh: "新闻动态" },
  "news.pagetitle": { en: "News & Updates", zh: "新闻与动态" },
  "news.pagedesc": { en: "Stay updated with the latest from Flyboat - company news, industry insights, and event highlights.", zh: "了解益舸最新动态——公司新闻、行业洞察和活动亮点。" },

  // === NEWS ARTICLE PAGE ===
  "news.cta.title": { en: "Need Surge Protection Solutions?", zh: "需要浪涌保护解决方案？" },
  "news.cta.desc": { en: "Contact us today to discuss your requirements and get expert guidance on selecting the right MOV products.", zh: "立即联系我们，讨论您的需求并获取选择合适MOV产品的专业指导。" },
  "news.cta.btn": { en: "Contact Us", zh: "联系我们" },
  "news.readmore": { en: "Read More →", zh: "阅读更多 →" },
  "news.recentarticles": { en: "Recent Articles", zh: "最新文章" },
  "news.backtoall": { en: "Back to All News", zh: "返回所有新闻" },
  "news.previous": { en: "Previous Article", zh: "上一篇" },
  "news.next": { en: "Next Article", zh: "下一篇" },
  "news.notfound": { en: "Article Not Found", zh: "文章未找到" },
  "news.notfound.desc": { en: "The requested article could not be found.", zh: "未找到所请求的文章。" },
  "news.viewall": { en: "View All News", zh: "查看所有新闻" },
  "news.pagination.previous": { en: "Previous", zh: "上一页" },
  "news.pagination.next": { en: "Next", zh: "下一页" },

  // === BLOG PAGE ===
  "blog.breadcrumb": { en: "Blog", zh: "博客" },
  "blog.pagetitle": { en: "Technical Blog", zh: "技术博客" },
  "blog.pagedesc": { en: "Technical articles and knowledge about metal oxide varistors and surge protection.", zh: "关于金属氧化物压敏电阻和浪涌保护的技术文章与知识。" },
  "blog.cta.title": { en: "Need Surge Protection Solutions?", zh: "需要浪涌保护解决方案？" },
  "blog.cta.desc": { en: "Contact us today to discuss your requirements and get expert guidance on selecting the right MOV products.", zh: "立即联系我们，讨论您的需求并获取选择合适MOV产品的专业指导。" },
  "blog.cta.btn": { en: "Contact Us", zh: "联系我们" },
  "blog.readmore": { en: "Read More →", zh: "阅读更多 →" },
  "blog.recentarticles": { en: "Recent Articles", zh: "最新文章" },
  "blog.backtoall": { en: "Back to All Articles", zh: "返回所有文章" },
  "blog.previous": { en: "Previous Article", zh: "上一篇" },
  "blog.next": { en: "Next Article", zh: "下一篇" },
  "blog.notfound": { en: "Article Not Found", zh: "文章未找到" },
  "blog.notfound.desc": { en: "The requested article could not be found.", zh: "未找到所请求的文章。" },
  "blog.viewall": { en: "View All Articles", zh: "查看所有文章" },
  "blog.pagination.previous": { en: "Previous", zh: "上一页" },
  "blog.pagination.next": { en: "Next", zh: "下一页" },

  // === PRODUCTS PAGE ===
  "products.breadcrumb": { en: "Products", zh: "产品中心" },
  "products.pagetitle": { en: "Our Products", zh: "我们的产品" },
  "products.pagedesc": { en: "Comprehensive range of metal oxide varistors and surge protective devices.", zh: "全系列金属氧化物压敏电阻和浪涌保护器产品。" },
  "products.sidebar.categories": { en: "Categories", zh: "产品分类" },
  "products.sidebar.all": { en: "All Products", zh: "所有产品" },
  "products.sidebar.recommended": { en: "Products Recommended", zh: "推荐产品" },
  "products.sidebar.needHelp": { en: "Need Help?", zh: "需要帮助？" },
  "products.sidebar.needHelpDesc": { en: "Contact us for custom OEM/ODM solutions.", zh: "联系我们获取定制OEM/ODM解决方案。" },
  "products.sidebar.getQuote": { en: "Get a Quote", zh: "获取报价" },
  "products.countLabel": { en: "products", zh: "个产品" },
  "products.cta.desc": { en: "We offer OEM/ODM customization for all our products. Contact us to discuss your requirements.", zh: "我们为所有产品提供OEM/ODM定制服务，联系我们讨论您的需求。" },

  // Page titles
  "title.home": { en: "Flyboat MOV | Metal Oxide Varistors & Surge Protective Devices", zh: "益舸MOV | 金属氧化物压敏电阻与浪涌保护器" },
  "title.about": { en: "About Us | Flyboat MOV", zh: "关于我们 | 益舸MOV" },
  "title.contact": { en: "Contact Us | Flyboat MOV", zh: "联系我们 | 益舸MOV" },

  // News dates (homepage)
  "home.news.mov.date": { en: "August 5, 2025", zh: "2025年8月5日" },
  "home.news.hannover.date": { en: "March 31, 2025", zh: "2025年3月31日" },
  "home.news.cost.date": { en: "March 1, 2024", zh: "2024年3月1日" },

  // Form alert
  "contact.form.thankyou": { en: "Thank you for your inquiry. We will get back to you shortly.", zh: "感谢您的询盘，我们将尽快与您联系。" },

  // Inquiry Form (shared across product.html and products.html)
  "inquiry.form.name": { en: "Your Name *", zh: "您的姓名 *" },
  "inquiry.form.email": { en: "Email *", zh: "电子邮箱 *" },
  "inquiry.form.company": { en: "Company", zh: "公司名称" },
  "inquiry.form.phone": { en: "Phone", zh: "电话" },
  "inquiry.form.quantity": { en: "Quantity", zh: "数量" },
  "inquiry.form.message": { en: "Message *", zh: "留言 *" },
  "inquiry.form.submit": { en: "Submit Inquiry", zh: "提交询盘" },
  "inquiry.cart.title": { en: "Inquiry Basket", zh: "询盘篮" },
  "inquiry.cart.clearAll": { en: "Clear All", zh: "清空" },
  "inquiry.cart.send": { en: "Send Inquiry", zh: "发送询盘" },
  "inquiry.placeholder.name": { en: "Full name", zh: "请输入姓名" },
  "inquiry.placeholder.email": { en: "your@email.com", zh: "your@email.com" },
  "inquiry.placeholder.company": { en: "Company name", zh: "公司名称" },
  "inquiry.placeholder.phone": { en: "+1 234 567 890", zh: "+86 xxx xxxx xxxx" },
  "inquiry.placeholder.quantity": { en: "e.g. 10,000 pieces", zh: "例如：10,000件" },
  "inquiry.placeholder.message": { en: "Please describe your requirements, specifications needed, and any questions...", zh: "请描述您的需求、所需规格及任何问题..." },

  // Sidebar recommended products
  "sidebar.rec.acvaristor.name": { en: "AC Varistor", zh: "交流压敏电阻" },
  "sidebar.rec.acvaristor.desc": { en: "Voltage power surge protector metal oxide varistor for AC applications", zh: "适用于交流应用的电压浪涌保护金属氧化物压敏电阻" },
  "sidebar.rec.movdc.name": { en: "34S Metal Oxide Varistor", zh: "34S金属氧化物压敏电阻" },
  "sidebar.rec.movdc.desc": { en: "MOV mainly used for surge protection in DC power systems", zh: "主要用于直流电源系统浪涌保护的MOV" },
  "sidebar.rec.signal.name": { en: "Surge Protectors Signal Systems", zh: "信号系统浪涌保护器" },
  "sidebar.rec.signal.desc": { en: "Protect signal &amp; data lines from lightning surges", zh: "保护信号和数据线路免受雷电浪涌影响" },
  "sidebar.rec.acspd.name": { en: "AC Surge Protective Device SPD", zh: "交流浪涌保护器SPD" },
  "sidebar.rec.acspd.desc": { en: "AC power supply surge protection with modular design", zh: "模块化设计的交流电源浪涌保护" },

  // Placeholders
  "placeholder.name": { en: "Enter your full name", zh: "请输入您的姓名" },
  "placeholder.company": { en: "Your company name", zh: "您的公司名称" },
  "placeholder.email": { en: "your@email.com", zh: "your@email.com" },
  "placeholder.phone": { en: "+1 234 567 890", zh: "+86 xxx xxxx xxxx" },
  "placeholder.message": { en: "Please describe your requirements, quantities, and any specific specifications needed...", zh: "请描述您的需求、数量及所需的具体规格参数..." },
};

// i18n Engine
(function() {
  const STORAGE_KEY = 'flyboat-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyTranslations(lang) {
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const t = TRANSLATIONS[key];
      if (t && t[lang] !== undefined) {
        el.innerHTML = t[lang];
      }
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const t = TRANSLATIONS[key];
      if (t && t[lang] !== undefined) {
        el.placeholder = t[lang];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update toggle button text
    const toggleBtn = document.querySelector('.lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'en' ? '中文' : 'EN';
      toggleBtn.setAttribute('title', lang === 'en' ? 'Switch to Chinese' : 'Switch to English');
    }
  }

  function toggleLang() {
    const current = getLang();
    const next = current === 'en' ? 'zh' : 'en';
    setLang(next);
    location.reload();
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    const lang = getLang();
    applyTranslations(lang);

    // Bind toggle button
    const toggleBtn = document.querySelector('.lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleLang);
    }
  });
})();
