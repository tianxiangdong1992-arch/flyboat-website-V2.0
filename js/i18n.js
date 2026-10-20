// Internationalization (i18n) System
const TRANSLATIONS = {
  // === COMMON (Header, Footer, Nav) ===
  "nav.home": { en: "Home", zh: "首页" },
  "nav.products": { en: "Products", zh: "产品中心" },
  "nav.about": { en: "About Us", zh: "关于我们" },
  "nav.news": { en: "News", zh: "新闻动态" },
  "nav.blog": { en: "Blog", zh: "博客" },
  "nav.contact": { en: "Contact", zh: "联系我们" },
  "nav.mov": { en: "Metal Oxide Varistors", zh: "金属氧化物压敏电阻" },
  "nav.spd-oem": { en: "Surge Protective Device OEM", zh: "浪涌保护器OEM" },
  "nav.dc-spd": { en: "DC SPD OEM", zh: "直流SPD OEM" },
  "nav.ac-spd": { en: "AC SPD OEM", zh: "交流SPD OEM" },
  "nav.tmov": { en: "Protection Modules", zh: "浪涌保护模块" },
  "nav.accessories": { en: "Accessories for SPDs", zh: "SPD配件" },
  "nav.certifications": { en: "Certifications", zh: "认证证书" },
  "nav.34s": { en: "34S Series", zh: "34S 系列" },
  "logo.name": { en: "FLYBOAT", zh: "益舸" },
  "logo.sub": { en: "Surge Protection Solutions", zh: "浪涌保护解决方案" },

  // Footer
  "footer.quicklinks": { en: "Quick Links", zh: "快速链接" },
  "footer.products": { en: "Products", zh: "产品中心" },
  "footer.contact": { en: "Contact", zh: "联系方式" },
  "footer.contactus": { en: "Contact Us", zh: "联系我们" },
  "footer.aboutus": { en: "About Us", zh: "关于我们" },
  "footer.desc": { en: "Guiyang High-Tech Yige Electronic Co., Ltd. We strive to meet and exceed our clients' expectation. We survive and thrive with our clients' trust and satisfaction.", zh: "贵阳高新益舸电子有限公司。我们致力于满足并超越客户期望，以客户的信任和满意为根基，不断发展壮大。" },
  "footer.mov": { en: "Metal Oxide Varistor", zh: "金属氧化物压敏电阻" },
  "footer.dcspd": { en: "DC SPD OEM", zh: "直流SPD OEM" },
  "footer.acspd": { en: "AC SPD OEM", zh: "交流SPD OEM" },
  "footer.tmov": { en: "Protection Modules", zh: "浪涌保护模块" },
  "footer.spdacc": { en: "SPD Accessories", zh: "SPD配件" },
  "footer.address": { en: "No. 577 Chuangji Street, Baiyun District, Guiyang, Guizhou 550014, China", zh: "中国贵州省贵阳市白云区创基街577号（邮编 550014）" },
  "footer.china": { en: "China", zh: "中国" },
  "footer.northamerica": { en: "North America", zh: "北美" },
  "footer.address.na": { en: "1076 124th CT NE, Bellevue, WA 98005, USA", zh: "美国华盛顿州贝尔维尤市 124th CT NE 1076 号（邮编 98005）" },
    "title.faq": { en: "FAQ | Flyboat MOV", zh: "常见问题 | Flyboat MOV" },

  "title.certifications": { en: "Certifications | Flyboat MOV", zh: "认证证书 | Flyboat MOV" },
  "title.34s": { en: "34S Series Metal Oxide Varistors | Flyboat MOV", zh: "34S 系列金属氧化物压敏电阻 | Flyboat MOV" },

  "faq.breadcrumb": { en: "FAQ", zh: "常见问题" },

  "faq.pagetitle": { en: "Frequently Asked Questions", zh: "常见问题" },

  "faq.pagedesc": { en: "Answers to the questions buyers ask us most — certifications, manufacturing, testing, capacity, OEM programs and SPDs.", zh: "买家最常问的问题解答——认证、制造、测试、产能、OEM 项目与 SPD。" },

  "cert.breadcrumb": { en: "Certifications", zh: "认证证书" },
  "s34.breadcrumb": { en: "34S Series", zh: "34S 系列" },
  "s34.pagetitle": { en: "34S Series Metal Oxide Varistors", zh: "34S 系列金属氧化物压敏电阻" },
  "s34.pagedesc": { en: "34 mm square MOVs by Guiyang High-Tech Yige Electronic — UL 1449 Recognized, File E335803, 31 recognized model grades from 82 V to 1,800 V varistor voltage.", zh: "贵阳高新益舸电子生产的 34mm 方形压敏电阻，UL 1449 认可（档案号 E335803），31 个认可型号等级，压敏电压 82V 至 1800V。" },

  "cert.pagetitle": { en: "Certifications & UL Verification", zh: "认证与 UL 核验" },

  "cert.pagedesc": { en: "UL 1449 Recognized, File E335803 — how to verify our certification and exactly which series and voltages it covers.", zh: "UL 1449 认可，档案号 E335803——如何核验我们的认证，以及具体覆盖哪些系列与电压。" },

  "footer.faq": { en: "FAQ", zh: "常见问题" },

  "footer.certifications": { en: "Certifications", zh: "认证证书" },
  "footer.34s": { en: "34S Series", zh: "34S 系列" },

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
  "home.about.desc1": { en: 'Guiyang High-Tech Yige Electronic Co., Ltd has been a designated "special manufacturer of MOVs for SPD and onboard SPD" for over two decades. We serve as a drafting committee member for China\'s national varistor standard.', zh: "贵阳高新益舸电子有限公司二十多年来一直被指定为\"SPD用及板载SPD用压敏电阻专业制造商\"，是中国国家压敏电阻标准起草委员会成员。" },
  "home.about.desc2": { en: "Our facility spans 10,000+ m² with modern production lines. Annual capacity is approximately 30 million standard MOV units, with downstream lines producing 20 million board-mounted SPDs and 10 million finished SPDs built on our own MOVs.", zh: "我们拥有10,000多平方米的现代化生产设施，年产约3000万只标准压敏电阻，并以自产压敏电阻为核心元件，年产2000万只板载SPD和1000万只成品SPD。" },
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
  "home.cert.ul": { en: "UL Recognized", zh: "UL认证" },
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
  "about.whoweare.desc": { en: '<strong>Guiyang High-Tech Yige Electronic Co., Ltd.</strong>, founded in October 2010, traces its roots back to Guizhou Flyboat Electronic Co., Ltd., established in 2000. With over two decades of deep expertise in MOV and SPD manufacturing, our company successfully completed the intelligent and digital transformation of our production system in 2025. As a recognized National High-Tech Enterprise and a Provincial "Specialized and Innovative" SME, we possess robust R&D capabilities, with our products and services reaching 80 countries and regions worldwide.', zh: '<strong>贵阳高新益舸电子有限公司</strong>成立于2010年10月，其前身是创立于2000年的贵州飞舸电子有限公司。公司在MOV和SPD制造领域具备超过20年的深厚积累，并于2025年完成了生产体系的智能化与数字化转型。作为国家高新技术企业、省级专精特新中小企业，公司拥有扎实的研发实力，产品与服务已覆盖全球80个国家和地区。' },
  "about.leadership.title": { en: "Industry Leadership & Standards", zh: "行业领导力与标准" },
  "about.leadership.desc": { en: "For more than 20 years, we have been deeply dedicated to the R&D and production of Surge Protective Devices (SPDs) and Metal Oxide Varistors (MOVs) for board-mounted SPDs. As a member of the drafting committee for China's national varistor standards, we actively participate in the development of industry benchmarks. Our Legal Representative, Mr. Zihao Fei, serves as a Chinese Expert on the IEC SC37B Sub-Committee and Deputy Director of the Varistor Professional Committee of the Chinese Institute of Electronics. He was deeply involved in the revision of the international standard IEC 61643-331 (2017): Components for low-voltage surge protective devices - Part 331: Performance requirements and test methods for metal oxide varistors (MOV).", zh: "贵阳高新益舸电子有限公司二十余年来专注深耕SPD（电涌保护器）及板载SPD用MOV（金属氧化物压敏电阻）的研发与生产。公司作为中国国家压敏电阻标准的起草委员会成员单位，积极参与行业标准建设。其法人代表费自豪同时担任国际电工委员会（IEC）SC37B分委员会中国专家及中国电子学会电压敏专业学部副主任委员，并深度参与了国际标准IEC61643-331:Components for low-voltage surge protective devices - Part 331: Performance requirements and test methods for metal oxide varistors (MOV) 2017的修订工作。" },
  "about.manufacturing.title": { en: "Manufacturing Excellence", zh: "卓越制造" },
  "about.manufacturing.desc": { en: "Our facility features a modern plant exceeding 10,000 square meters and is equipped with advanced production lines. We possess robust large-scale manufacturing capabilities, delivering an impressive annual capacity of approximately 30 million standard MOVs, plus downstream production of 20 million onboard SPDs and 10 million finished SPDs built on our own MOVs.", zh: "公司拥有10000余平方米的现代化厂房及先进生产线，具备强大的规模化生产能力，年产能可达标准MOV约3000万只，并以自产MOV为核心元件，年产板载SPD约2000万只、成品SPD约1000万只。" },

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
  "about.leader.name": { en: "Mr. Zihao Fei", zh: "费自豪 先生" },
  "about.leader.role": { en: "Legal Representative & Chief Expert", zh: "法定代表人 & 首席专家" },
  "about.leader.desc": { en: "A well-known Chinese expert in varistor technology who served 5 years with the International Electrotechnical Commission (IEC) SC37B and 15 years with the Chinese Institute of Electronics (CIE). He served as the main drafter of GB18802.331.2020 and participated in developing IEC61643-331.2017. His expertise drives the company's commitment to world-class surge protection solutions.", zh: "中国知名压敏电阻技术专家，在国际电工委员会（IEC）SC37B任职5年，在中国电子学会任职15年。他是GB18802.331.2020的主要起草人，并参与了IEC61643-331.2017的制定。他的专业知识推动着公司致力于提供世界一流的浪涌保护解决方案。" },

  // Manufacturing Capabilities
  "about.mfg.overline": { en: "Manufacturing", zh: "制造实力" },
  "about.mfg.title": { en: "Our Capabilities", zh: "我们的能力" },
  "about.mfg.desc": { en: "Comprehensive manufacturing facilities equipped with modern production lines and advanced testing equipment.", zh: "配备现代化生产线和先进检测设备的综合制造设施。" },
  "about.mfg.facility": { en: "10,000+ m² Facility", zh: "10,000+ m² 厂房" },
  "about.mfg.facility.desc": { en: "Modern manufacturing facility with six production lines, capable of producing approximately 30 million standard MOV units annually.", zh: "现代化制造设施，拥有六条生产线，年产约3000万只标准压敏电阻。" },
  "about.mfg.spd": { en: "20M+ Onboard SPDs", zh: "2000万+板载SPD" },
  "about.mfg.spd.desc": { en: "Annual production capacity of over 20 million onboard SPDs with comprehensive quality control at every stage.", zh: "年产超过2000万只板载SPD，每个环节均有全面的质量控制。" },
  "about.mfg.testing": { en: "Advanced Testing", zh: "先进检测" },
  "about.mfg.testing.desc": { en: "Equipped with 120kA 8/20\u00b5s lightning tester, 15kA 10/350\u00b5s lightning tester, 2ms rectangular surge tester, power frequency temporary overvoltage (TOV) tester, high temperature aging test chamber, and constant temperature and humidity chamber.", zh: "配备120kA 8/20\u00b5s雷电测试仪、15kA 10/350\u00b5s雷电测试仪、2ms方波浪涌测试仪、工频暂态过电压（TOV）测试仪、高温老化试验箱和恒温恒湿试验箱。" },
  "about.mfg.employees": { en: "200+ Employees", zh: "200+员工" },
  "about.mfg.employees.desc": { en: "Experienced workforce of over 200 skilled professionals dedicated to quality manufacturing and customer service.", zh: "拥有200多名经验丰富的专业人员，致力于高品质制造和客户服务。" },
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
  "contact.address.val": { en: "No. 577 Chuangji Street,<br>Baiyun District, Guiyang,<br>Guizhou 550014, China", zh: "中国贵州省贵阳市<br>白云区创基街577号<br>邮编 550014" },
  "contact.china": { en: "China — Headquarters & Factory", zh: "中国 — 总部与工厂" },
  "contact.na": { en: "North America — Sales & Engineering", zh: "北美 — 销售与工程中心" },
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
  "contact.form.tmov": { en: "Protection Modules", zh: "浪涌保护模块" },
  "contact.form.modules": { en: "Surge Protective Modules", zh: "浪涌保护模块" },
  "contact.form.accessories": { en: "SPD Accessories", zh: "SPD配件" },
  "contact.form.other": { en: "Other / Custom Solution", zh: "其他 / 定制方案" },
  "contact.form.message": { en: "Your Message *", zh: "您的留言 *" },
  "contact.form.submit": { en: "Submit Inquiry", zh: "提交询盘" },
  "contact.form.sendto": { en: "Send Inquiry To", zh: "询盘发送至" },
  "contact.form.sendto.na": { en: "North America — Sales & Engineering", zh: "北美 — 销售与工程中心" },
  "contact.form.sendto.china": { en: "China — Headquarters & Factory", zh: "中国 — 总部与工厂" },
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
  "sp.s20.code": { en: "Models are designated <strong>20SK</strong> followed by a three-digit code. The code gives the <strong>varistor voltage</strong>: the first two digits, followed by as many zeros as the third digit says — 431 = 430 V, 122 = 1,200 V. (The maximum continuous working voltage of each grade is a separate, lower datasheet value.)", zh: "型号以 <strong>20SK</strong> 开头，后接三位数字代码。代码表示<strong>压敏电压</strong>：前两位为有效数字，第三位表示其后跟几个 0——431 = 430 V，122 = 1,200 V。（每个型号的最大持续工作电压是另一个更低的数据手册数值。）" },
  "sp.s20.coverage.l": { en: "<strong>20S coverage</strong>", zh: "<strong>20S 覆盖范围</strong>" },
  "sp.s20.coverage.v": { en: "22 recognized grades, varistor voltages 100–820 V", zh: "22 个认证型号，压敏电压 100–820 V" },
  "sp.s20.crumb": { en: "20S Series", zh: "20S 系列" },
  "sp.s20.grades.h2": { en: "Recognized 20S model grades", zh: "已认证的 20S 型号" },
  "sp.s20.intro": { en: "The 20S series is a line of <strong>20 mm square, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 7 kA / Imax 15 kA (8/20 &micro;s), the range covers varistor voltages from 100 V to 820 V in 22 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "20S 系列是贵阳高新益舸电子有限公司生产的<strong>20 mm 方形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 7 kA / Imax 15 kA（8/20 &micro;s），全系列压敏电压 100 V 至 820 V，共 22 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s20.intro.h2": { en: "The 20S series", zh: "20S 系列" },
  "sp.s20.low.h2": { en: "20S low-residual-voltage ratings", zh: "20S 低残压参数" },
  "sp.s20.note.std": { en: "Notes: the last two rows of this table are misprinted in the catalog with a 22SK prefix (&ldquo;22SK781&rdquo; / &ldquo;22SK821&rdquo;); by position and values they are the 20S rows &mdash; shown as printed.", zh: "注：本表最后两行在产品手册中误印为 22SK 前缀（&ldquo;22SK781&rdquo; / &ldquo;22SK821&rdquo;）；按位置与数值，它们是 20S 的行——照手册原样转录。" },
  "sp.s20.pagedesc": { en: "20 mm square MOVs by Guiyang High-Tech Yige Electronic — UL 1449 Recognized, File E335803, with 22 recognized model grades from 100 V to 820 V varistor voltage.", zh: "贵阳高新益舸电子的 20 mm 方形 MOV——UL 1449 Recognized，档案号 E335803，共 22 个认证型号，压敏电压 100 V 至 820 V。" },
  "sp.s20.pagetitle": { en: "20S Series Metal Oxide Varistors", zh: "20S 系列金属氧化物压敏电阻" },
  "sp.s20.std.h2": { en: "20S standard ratings &mdash; full table", zh: "20S 常规参数 — 完整表" },
  "sp.s22.code": { en: "Models are designated <strong>22SK</strong> followed by a three-digit code. The code gives the <strong>varistor voltage</strong>: the first two digits, followed by as many zeros as the third digit says — 431 = 430 V, 122 = 1,200 V. (The maximum continuous working voltage of each grade is a separate, lower datasheet value.)", zh: "型号以 <strong>22SK</strong> 开头，后接三位数字代码。代码表示<strong>压敏电压</strong>：前两位为有效数字，第三位表示其后跟几个 0——431 = 430 V，122 = 1,200 V。（每个型号的最大持续工作电压是另一个更低的数据手册数值。）" },
  "sp.s22.coverage.l": { en: "<strong>22S coverage</strong>", zh: "<strong>22S 覆盖范围</strong>" },
  "sp.s22.coverage.v": { en: "22 recognized grades, varistor voltages 100–820 V", zh: "22 个认证型号，压敏电压 100–820 V" },
  "sp.s22.crumb": { en: "22S Series", zh: "22S 系列" },
  "sp.s22.grades.h2": { en: "Recognized 22S model grades", zh: "已认证的 22S 型号" },
  "sp.s22.intro": { en: "The 22S series is a line of <strong>22 mm square, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 10 kA / Imax 20 kA (8/20 &micro;s), the range covers varistor voltages from 100 V to 820 V in 22 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "22S 系列是贵阳高新益舸电子有限公司生产的<strong>22 mm 方形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 10 kA / Imax 20 kA（8/20 &micro;s），全系列压敏电压 100 V 至 820 V，共 22 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s22.intro.h2": { en: "The 22S series", zh: "22S 系列" },
  "sp.s22.low.h2": { en: "22S low-residual-voltage ratings", zh: "22S 低残压参数" },
  "sp.s22.pagedesc": { en: "22 mm square MOVs by Guiyang High-Tech Yige Electronic — UL 1449 Recognized, File E335803, with 22 recognized model grades from 100 V to 820 V varistor voltage.", zh: "贵阳高新益舸电子的 22 mm 方形 MOV——UL 1449 Recognized，档案号 E335803，共 22 个认证型号，压敏电压 100 V 至 820 V。" },
  "sp.s22.pagetitle": { en: "22S Series Metal Oxide Varistors", zh: "22S 系列金属氧化物压敏电阻" },
  "sp.s22.std.h2": { en: "22S standard ratings &mdash; full table", zh: "22S 常规参数 — 完整表" },
  "sp.s25.crumb": { en: "25D Series", zh: "25D 系列" },
  "sp.s25.intro": { en: "The 25D series is a line of <strong>25 mm round, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 10 kA / Imax 20 kA (8/20 &micro;s), the range covers varistor voltages from 100 V to 820 V in 22 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "25D 系列是贵阳高新益舸电子有限公司生产的<strong>25 mm 圆形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 10 kA / Imax 20 kA（8/20 &micro;s），全系列压敏电压 100 V 至 820 V，共 22 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s25.intro.h2": { en: "The 25D series", zh: "25D 系列" },
  "sp.s25.low.h2": { en: "25D low-residual-voltage ratings", zh: "25D 低残压参数" },
  "sp.s25.note.std": { en: "Notes: 25DK181&rsquo;s ETM prints as 140 J in the catalog &mdash; below the 160 J printed for 25DK151 &mdash; shown as printed.", zh: "注：25DK181 的 ETM 在产品手册中印为 140 J——低于 25DK151 的 160 J——照原样转录。" },
  "sp.s25.notrec": { en: "The 25D series is <strong>not UL recognized</strong>: the catalog ratings tables for this series print the UL / C-UL / TÜV columns but leave every cell blank.", zh: "25D 系列<strong>未获得 UL 认证</strong>：产品手册中该系列的参数表印有 UL / C-UL / TÜV 列，但所有单元格均为空。" },
  "sp.s25.pagedesc": { en: "25 mm round MOVs by Guiyang High-Tech Yige Electronic — In 10 kA / Imax 20 kA, with varistor voltages from 100 V to 820 V in 22 model grades.", zh: "贵阳高新益舸电子的 25 mm 圆形 MOV——In 10 kA / Imax 20 kA，共 22 个型号，压敏电压 100 V 至 820 V。" },
  "sp.s25.pagetitle": { en: "25D Series Metal Oxide Varistors", zh: "25D 系列金属氧化物压敏电阻" },
  "sp.s25.std.h2": { en: "25D standard ratings &mdash; full table", zh: "25D 常规参数 — 完整表" },
  "sp.s27.code": { en: "Models are designated <strong>27LK</strong> followed by a three-digit code. The code gives the <strong>varistor voltage</strong>: the first two digits, followed by as many zeros as the third digit says — 431 = 430 V, 122 = 1,200 V. (The maximum continuous working voltage of each grade is a separate, lower datasheet value.)", zh: "型号以 <strong>27LK</strong> 开头，后接三位数字代码。代码表示<strong>压敏电压</strong>：前两位为有效数字，第三位表示其后跟几个 0——431 = 430 V，122 = 1,200 V。（每个型号的最大持续工作电压是另一个更低的数据手册数值。）" },
  "sp.s27.coverage.l": { en: "<strong>27L coverage</strong>", zh: "<strong>27L 覆盖范围</strong>" },
  "sp.s27.coverage.v": { en: "22 recognized grades, varistor voltages 100–820 V", zh: "22 个认证型号，压敏电压 100–820 V" },
  "sp.s27.crumb": { en: "27L Series", zh: "27L 系列" },
  "sp.s27.grades.h2": { en: "Recognized 27L model grades", zh: "已认证的 27L 型号" },
  "sp.s27.intro": { en: "The 27L series is a line of <strong>27 mm rectangular, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 10 kA / Imax 20 kA (8/20 &micro;s), the range covers varistor voltages from 100 V to 820 V in 22 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "27L 系列是贵阳高新益舸电子有限公司生产的<strong>27 mm 矩形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 10 kA / Imax 20 kA（8/20 &micro;s），全系列压敏电压 100 V 至 820 V，共 22 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s27.intro.h2": { en: "The 27L series", zh: "27L 系列" },
  "sp.s27.low.h2": { en: "27L low-residual-voltage ratings", zh: "27L 低残压参数" },
  "sp.s27.pagedesc": { en: "27 mm rectangular MOVs by Guiyang High-Tech Yige Electronic — UL 1449 Recognized, File E335803, with 22 recognized model grades from 100 V to 820 V varistor voltage.", zh: "贵阳高新益舸电子的 27 mm 矩形 MOV——UL 1449 Recognized，档案号 E335803，共 22 个认证型号，压敏电压 100 V 至 820 V。" },
  "sp.s27.pagetitle": { en: "27L Series Metal Oxide Varistors", zh: "27L 系列金属氧化物压敏电阻" },
  "sp.s27.std.h2": { en: "27L standard ratings &mdash; full table", zh: "27L 常规参数 — 完整表" },
  "sp.s30.crumb": { en: "30S Series", zh: "30S 系列" },
  "sp.s30.five": { en: "Five grades are UL 1449 Recognized under File E335803 per the UL Product iQ record: 621 / 681 / 821 / 112 / 122 (varistor voltage 620V–1200V) &mdash; models 30SK621, 30SK681, 30SK821, 30SK112 and 30SK122. The catalog ratings tables below print no certification marks for the 30S series; the recognition stated here follows the UL Product iQ record for file E335803. <strong>How to verify:</strong> go to UL Product iQ (productiq.ulprospector.com) and search file number <strong>E335803</strong>. Full coverage for all series is on the <a href=\"certifications.html\">Certifications page</a>.", zh: "以下五个型号依据 UL Product iQ 记录获 UL 1449 Recognized，档案号 E335803：621 / 681 / 821 / 112 / 122（压敏电压 620V&ndash;1200V）&mdash;即型号 30SK621、30SK681、30SK821、30SK112 与 30SK122。下方的产品手册参数表未给 30S 系列标注任何认证标记；此处所述认证以 UL Product iQ 中 E335803 号档案记录为准。<strong>如何核查：</strong>打开 UL Product iQ（productiq.ulprospector.com），搜索档案号 <strong>E335803</strong>。全部系列的认证覆盖见<a href=\"certifications.html\">认证页</a>。" },
  "sp.s30.intro": { en: "The 30S series is a line of <strong>30 mm square, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 20 kA / Imax 40 kA (8/20 &micro;s), the standard range covers varistor voltages from 100 V to 1,800 V in 31 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "30S 系列是贵阳高新益舸电子有限公司生产的<strong>30 mm 方形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 20 kA / Imax 40 kA（8/20 &micro;s），标准系列压敏电压 100 V 至 1,800 V，共 31 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s30.intro.h2": { en: "The 30S series", zh: "30S 系列" },
  "sp.s30.low.h2": { en: "30S low-residual-voltage ratings", zh: "30S 低残压参数" },
  "sp.s30.note.std": { en: "Notes: 30SK122&rsquo;s UDC prints as 1060 V in the catalog &mdash; shown as printed.", zh: "注：30SK122 的 UDC 在产品手册中印为 1060 V——照原样转录。" },
  "sp.s30.pagedesc": { en: "30 mm square MOVs by Guiyang High-Tech Yige Electronic — In 20 kA / Imax 40 kA, varistor voltages from 100 V to 1,800 V; five grades UL 1449 Recognized under File E335803.", zh: "贵阳高新益舸电子的 30 mm 方形 MOV——In 20 kA / Imax 40 kA，压敏电压 100 V 至 1,800 V；其中五个型号获 UL 1449 Recognized，档案号 E335803。" },
  "sp.s30.pagetitle": { en: "30S Series Metal Oxide Varistors", zh: "30S 系列金属氧化物压敏电阻" },
  "sp.s30.std.h2": { en: "30S standard ratings &mdash; full table", zh: "30S 常规参数 — 完整表" },
  "sp.s30.ul.h2": { en: "UL recognition — File E335803 (five grades)", zh: "UL 认证 — 档案号 E335803（五个型号）" },
  "sp.s32.crumb": { en: "32D Series", zh: "32D 系列" },
  "sp.s32.datasheetp": { en: "Every grade has a full datasheet (electrical parameters, surge ratings, dimensions), available on request. The 32D also appears on the <a href=\"product.html?id=32d-metal-oxide-varistor\">32D product page</a>. For samples and design-in support: North America — Thomas Dong, Flyboat Electronic LLC; China — Colin Fei. See the <a href=\"contact.html\">Contact page</a> or the <a href=\"faq.html\">buyer FAQ</a>.", zh: "每个型号都有完整数据手册（电气参数、浪涌额定值、尺寸），可索取。32D 另见<a href=\"product.html?id=32d-metal-oxide-varistor\">32D 产品页</a>。样品与设计导入支持：北美——Thomas Dong，Flyboat Electronic LLC；中国——Colin Fei。详见<a href=\"contact.html\">联系页</a>或<a href=\"faq.html\">买家常见问题</a>。" },
  "sp.s32.intro": { en: "The 32D series is a line of <strong>32 mm round, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. Rated In 20 kA / Imax 40 kA (8/20 &micro;s), the standard range covers varistor voltages from 100 V to 1,200 V in 27 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "32D 系列是贵阳高新益舸电子有限公司生产的<strong>32 mm 圆形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM。额定 In 20 kA / Imax 40 kA（8/20 &micro;s），标准系列压敏电压 100 V 至 1,200 V，共 27 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s32.intro.h2": { en: "The 32D series", zh: "32D 系列" },
  "sp.s32.low.h2": { en: "32D low-residual-voltage ratings", zh: "32D 低残压参数" },
  "sp.s32.notrec": { en: "The 32D series is <strong>not UL recognized</strong>: the catalog ratings tables for this series print the UL / C-UL / TÜV columns but leave every cell blank.", zh: "32D 系列<strong>未获得 UL 认证</strong>：产品手册中该系列的参数表印有 UL / C-UL / TÜV 列，但所有单元格均为空。" },
  "sp.s32.pagedesc": { en: "32 mm round MOVs by Guiyang High-Tech Yige Electronic — In 20 kA / Imax 40 kA, with varistor voltages from 100 V to 1,200 V in 27 model grades.", zh: "贵阳高新益舸电子的 32 mm 圆形 MOV——In 20 kA / Imax 40 kA，共 27 个型号，压敏电压 100 V 至 1,200 V。" },
  "sp.s32.pagetitle": { en: "32D Series Metal Oxide Varistors", zh: "32D 系列金属氧化物压敏电阻" },
  "sp.s32.std.h2": { en: "32D standard ratings &mdash; full table", zh: "32D 常规参数 — 完整表" },
  "sp.s34.boundary": { en: "One boundary worth stating plainly: the 34S is a <strong>bare MOV component with no integrated thermal protection</strong>, and it is not a drop-in replacement for thermally protected TMOV devices. Disconnection belongs to the SPD design; where a design calls for it at the device level, we supply protection modules with built-in disconnectors — see <a href=\"products.html\">Products</a>.", zh: "有一条边界需要讲明：34S 是<strong>不带集成热保护的裸 MOV 元件</strong>，不能直接替代带热保护的 TMOV 器件。脱离功能属于 SPD 整机设计；当设计需要在器件层面实现脱离时，我们可提供内置脱离器的保护模块——见<a href=\"products.html\">产品页</a>。" },
  "sp.s34.code": { en: "Models are designated <strong>34SK</strong> followed by a three-digit code. The code gives the <strong>varistor voltage</strong>: the first two digits, followed by as many zeros as the third digit says — 431 = 430 V, 122 = 1,200 V. (The maximum continuous working voltage of each grade is a separate, lower datasheet value.)", zh: "型号以 <strong>34SK</strong> 开头，后接三位数字代码。代码表示<strong>压敏电压</strong>：前两位为有效数字，第三位表示其后跟几个 0——431 = 430 V，122 = 1,200 V。（每个型号的最大持续工作电压是另一个更低的数据手册数值。）" },
  "sp.s34.coverage.l": { en: "<strong>34S coverage</strong>", zh: "<strong>34S 覆盖范围</strong>" },
  "sp.s34.coverage.v": { en: "31 model grades, varistor voltages 82–1,800 V; the 430–680 V grades are rated Imax up to 50 kA in the UL file", zh: "31 个型号，压敏电压 82–1,800 V；其中 430–680 V 型号在 UL 档案中 Imax 最高 50 kA" },
  "sp.s34.datasheetp": { en: "Every grade has a full datasheet (electrical parameters, surge ratings, dimensions), available on the <a href=\"product.html?id=34s-metal-oxide-varistor\">34S product page</a> or on request. For samples and design-in support: North America — Thomas Dong, Flyboat Electronic LLC; China — Colin Fei. See the <a href=\"contact.html\">Contact page</a> or the <a href=\"faq.html\">buyer FAQ</a>.", zh: "每个型号都有完整数据手册（电气参数、浪涌额定值、尺寸），见<a href=\"product.html?id=34s-metal-oxide-varistor\">34S 产品页</a>或可索取。样品与设计导入支持：北美——Thomas Dong，Flyboat Electronic LLC；中国——Colin Fei。详见<a href=\"contact.html\">联系页</a>或<a href=\"faq.html\">买家常见问题</a>。" },
  "sp.s34.download": { en: "<strong>Download:</strong> <a href=\"datasheets/34s-datasheet.pdf\">34S datasheet (PDF)</a> &mdash; complete ratings tables for the standard, low-residual-voltage and high-energy (10/350 &micro;s) ranges, with dimensions.", zh: "<strong>下载：</strong><a href=\"datasheets/34s-datasheet.pdf\">34S 数据手册（PDF）</a>&mdash;常规、低残压与高能量（10/350 &micro;s）三个系列的完整参数表，含尺寸。" },
  "sp.s34.grades.h2": { en: "Recognized 34S model grades", zh: "已认证的 34S 型号" },
  "sp.s34.he.h2": { en: "34S high-energy ratings (10/350 &micro;s)", zh: "34S 高能量参数（10/350 &micro;s）" },
  "sp.s34.he.intro": { en: "High-energy range for 10/350 &micro;s impulse duty. All grades: U1mA tolerance &plusmn;10 %. The catalog prints no UL / C-UL / TÜV marks for this table.", zh: "高能量系列，适用于 10/350 &micro;s 冲击工况。所有型号：U1mA 公差 &plusmn;10%。产品手册未为本表标注 UL / C-UL / TÜV 标记。" },
  "sp.s34.intro": { en: "The 34S series is the flagship line of <strong>34 × 34 mm square, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "34S 系列是旗舰产品线：<strong>34 × 34 mm 方形、环氧封装的氧化锌压敏电阻</strong>，由贵阳高新益舸电子有限公司生产，面向浪涌保护器（SPD）制造商与 OEM。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s34.intro.h2": { en: "The 34S series", zh: "34S 系列" },
  "sp.s34.low.h2": { en: "34S low-residual-voltage ratings", zh: "34S 低残压参数" },
  "sp.s34.note.std": { en: "Notes: 34SK781's UP prints as 1750-2.3 in the catalog (identical to 34SK711) &mdash; shown as printed. The &ldquo;H&rdquo; variants (34SK621H / 34SK681H) are the high-throughput versions (In 25 kA, Imax 60 kA) and carry no certification marks in the catalog table.", zh: "注：34SK781 的 UP 在产品手册中印为 1750-2.3（与 34SK711 相同）——照原样转录。&ldquo;H&rdquo; 后缀型号（34SK621H / 34SK681H）为高通流版本（In 25 kA，Imax 60 kA），手册表中无认证标记。" },
  "sp.s34.second.h2": { en: "Second-sourcing 34 mm varistors", zh: "34 mm 压敏电阻第二来源" },
  "sp.s34.second.p": { en: "The 34S square format is a standard footprint across the SPD industry, and the 34S series is widely used as a <strong>second source</strong> in existing designs. For qualification we provide full datasheets, type-test and routine-test reports for qualified OEM programs, and evaluation samples, with every shipment traceable to its production batch and delivered with a Certificate of Conformance.", zh: "34S 方形尺寸是 SPD 行业的标准封装，34S 系列被广泛用作现有设计中的<strong>第二来源</strong>。在认证支持方面，我们为合格的 OEM 项目提供完整数据手册、型式试验与例行试验报告以及评估样品；每批出货均可追溯至生产批次，并随附合格证书（CoC）。" },
  "sp.s34.std.h2": { en: "34S standard ratings &mdash; full table", zh: "34S 常规参数 — 完整表" },
  "sp.s46.crumb": { en: "46L Series", zh: "46L 系列" },
  "sp.s46.he.h2": { en: "46L high-energy ratings (10/350 &micro;s)", zh: "46L 高能量参数（10/350 &micro;s）" },
  "sp.s46.he.intro": { en: "High-energy range for 10/350 &micro;s impulse duty. All grades: U1mA tolerance &plusmn;10 %. The catalog prints no UL / C-UL / TÜV marks for this table, and prints UP as a plain value, without the ratio used in the tables above. Iimp = impulse discharge current (10/350 &micro;s); other columns as defined above.", zh: "高能量系列，适用于 10/350 &micro;s 冲击工况。所有型号：U1mA 公差 &plusmn;10%。产品手册未为本表标注 UL / C-UL / TÜV 标记，且 UP 以纯数值给出，不带上表所用的比值。Iimp = 冲击放电电流（10/350 &micro;s）；其余列定义同上。" },
  "sp.s46.intro": { en: "The 46L series is a line of <strong>46 mm rectangular, epoxy-encapsulated zinc oxide varistors</strong> made by Guiyang High-Tech Yige Electronic Co., Ltd. for surge protective device (SPD) manufacturers and OEMs &mdash; the largest disc format in the range. Rated In 30 kA, with Imax 60 kA on the 100&ndash;390 V grades and 70 kA on the 430&ndash;1,200 V grades (8/20 &micro;s), the standard range covers varistor voltages from 100 V to 1,200 V in 27 model grades. The varistor discs are pressed, sintered, metallized, coated and tested in our own Guiyang plant — not bought in — which is how tolerances and surge ratings stay consistent from batch to batch. In North America, the series is supported by Flyboat Electronic LLC, the factory's sales and engineering center in Bellevue, WA.", zh: "46L 系列是贵阳高新益舸电子有限公司生产的<strong>46 mm 矩形、环氧封装的氧化锌压敏电阻</strong>，面向浪涌保护器（SPD）制造商与 OEM——是全系列中尺寸最大的芯片。额定 In 30 kA；100&ndash;390 V 型号 Imax 60 kA，430&ndash;1,200 V 型号 Imax 70 kA（8/20 &micro;s）；标准系列压敏电压 100 V 至 1,200 V，共 27 个型号。压敏芯片在我们贵阳工厂自产——压片、烧结、金属化、涂覆、测试全程自有，不外购——公差与浪涌额定值因此保持批次间一致。在北美，该系列由 Flyboat Electronic LLC 提供支持，它是工厂在 Bellevue, WA 的销售与工程中心。" },
  "sp.s46.intro.h2": { en: "The 46L series", zh: "46L 系列" },
  "sp.s46.low.h2": { en: "46L low-residual-voltage ratings", zh: "46L 低残压参数" },
  "sp.s46.note.low": { en: "Notes: this table is mis-titled &ldquo;standard&rdquo; in the catalog; it sits in the low-residual section and its values follow the low-clamping pattern, so it is presented here as the low-residual table. The 950 V row&rsquo;s model is printed &ldquo;46LK950&rdquo; in this table (the standard table prints 46LK951) &mdash; shown as printed. 46LK911&rsquo;s ETM prints as 2060 J in this table.", zh: "注：本表在产品手册中误标为 &ldquo;常规&rdquo;；它位于低残压章节，数值也符合低残压规律，故此处作为低残压表呈现。950 V 行的型号在本表中印为 &ldquo;46LK950&rdquo;（常规表中印为 46LK951）——照原样转录。46LK911 的 ETM 在本表中印为 2060 J。" },
  "sp.s46.note.std": { en: "Notes: 46LK911&rsquo;s ETM prints as &ldquo;21220&rdquo; in the catalog (an apparent misprint) &mdash; shown as printed. 46LK781&rsquo;s UP prints as 1750-2.3, identical to 46LK711 &mdash; shown as printed.", zh: "注：46LK911 的 ETM 在产品手册中印为 &ldquo;21220&rdquo;（明显误印）——照原样转录。46LK781 的 UP 印为 1750-2.3，与 46LK711 相同——照原样转录。" },
  "sp.s46.notrec": { en: "The 46L series is <strong>not UL recognized</strong>: the catalog ratings tables for this series print the UL / C-UL / TÜV columns but leave every cell blank.", zh: "46L 系列<strong>未获得 UL 认证</strong>：产品手册中该系列的参数表印有 UL / C-UL / TÜV 列，但所有单元格均为空。" },
  "sp.s46.pagedesc": { en: "46 mm rectangular MOVs by Guiyang High-Tech Yige Electronic — In 30 kA / Imax up to 70 kA, with varistor voltages from 100 V to 1,200 V in 27 model grades.", zh: "贵阳高新益舸电子的 46 mm 矩形 MOV——In 30 kA / Imax 最高 70 kA，共 27 个型号，压敏电压 100 V 至 1,200 V。" },
  "sp.s46.pagetitle": { en: "46L Series Metal Oxide Varistors", zh: "46L 系列金属氧化物压敏电阻" },
  "sp.s46.std.h2": { en: "46L standard ratings &mdash; full table", zh: "46L 常规参数 — 完整表" },
  "spec.boundary": { en: "One boundary worth stating plainly: these are <strong>bare MOV components with no integrated thermal protection</strong>, and they are not drop-in replacements for thermally protected TMOV devices. Disconnection belongs to the SPD design; where a design calls for it at the device level, we supply protection modules with built-in disconnectors — see <a href=\"products.html\">Products</a>.", zh: "有一条边界需要讲明：这些是<strong>不带集成热保护的裸 MOV 元件</strong>，不能直接替代带热保护的 TMOV 器件。脱离功能属于 SPD 整机设计；当设计需要在器件层面实现脱离时，我们可提供内置脱离器的保护模块——见<a href=\"products.html\">产品页</a>。" },
  "spec.certstatus": { en: "Certification status", zh: "认证状态" },
  "spec.col.model": { en: "Model", zh: "型号" },
  "spec.col.vv": { en: "Varistor voltage", zh: "压敏电压" },
  "spec.coldef": { en: "Column definitions: U1mA = varistor voltage at DC 1 mA; &Delta;U1mA = varistor-voltage tolerance; UAC / UDC = maximum continuous operating voltage; In = nominal discharge current (8/20 &micro;s); Imax = maximum discharge current (8/20 &micro;s); UP = clamping voltage at In, shown as reference value&ndash;ratio; ETM = maximum energy absorption (2 ms). Certification marks reproduce the catalog ratings tables.", zh: "列定义：U1mA = 直流 1 mA 时的压敏电压；&Delta;U1mA = 压敏电压公差；UAC / UDC = 最大持续工作电压；In = 标称放电电流（8/20 &micro;s）；Imax = 最大放电电流（8/20 &micro;s）；UP = In 时的钳位电压，以参考值&ndash;比值表示；ETM = 最大能量吸收（2 ms）。认证标记按产品手册参数表转录。" },
  "spec.coldef.noul": { en: "Column definitions: U1mA = varistor voltage at DC 1 mA; &Delta;U1mA = varistor-voltage tolerance; UAC / UDC = maximum continuous operating voltage; In = nominal discharge current (8/20 &micro;s); Imax = maximum discharge current (8/20 &micro;s); UP = clamping voltage at In, shown as reference value&ndash;ratio; ETM = maximum energy absorption (2 ms). The catalog prints UL / C-UL / TÜV columns for this table but leaves them blank for every model in this series, so they are omitted here.", zh: "列定义：U1mA = 直流 1 mA 时的压敏电压；&Delta;U1mA = 压敏电压公差；UAC / UDC = 最大持续工作电压；In = 标称放电电流（8/20 &micro;s）；Imax = 最大放电电流（8/20 &micro;s）；UP = In 时的钳位电压，以参考值&ndash;比值表示；ETM = 最大能量吸收（2 ms）。手册为本表印有 UL / C-UL / TÜV 列，但该系列所有型号均为空，故此处省略。" },
  "spec.datasheet.h2": { en: "Datasheets and samples", zh: "数据手册与样品" },
  "spec.datasheetp": { en: "Every grade has a full datasheet (electrical parameters, surge ratings, dimensions), available on request. For samples and design-in support: North America — Thomas Dong, Flyboat Electronic LLC; China — Colin Fei. See the <a href=\"contact.html\">Contact page</a> or the <a href=\"faq.html\">buyer FAQ</a>.", zh: "每个型号都有完整数据手册（电气参数、浪涌额定值、尺寸），可索取。样品与设计导入支持：北美——Thomas Dong，Flyboat Electronic LLC；中国——Colin Fei。详见<a href=\"contact.html\">联系页</a>或<a href=\"faq.html\">买家常见问题</a>。" },
  "spec.f.category": { en: "<strong>UL Product iQ category</strong>", zh: "<strong>UL Product iQ 类别</strong>" },
  "spec.f.holder": { en: "<strong>Certificate holder</strong>", zh: "<strong>持证人</strong>" },
  "spec.f.standards": { en: "<strong>Standards</strong>", zh: "<strong>标准</strong>" },
  "spec.f.standards.v": { en: "UL 1449; CSA C22.2 No. 269.5-17 (Type 5 component recognition)", zh: "UL 1449；CSA C22.2 No. 269.5-17（Type 5 元件认可）" },
  "spec.f.wording": { en: "<strong>Certification wording</strong>", zh: "<strong>认证表述</strong>" },
  "spec.f.wording.v": { en: "UL 1449 Recognized, File E335803", zh: "UL 1449 Recognized，档案号 E335803" },
  "spec.lowclamp": { en: "Low-clamping range, optimised for lower clamping voltage at In. Same column definitions as the standard table above.", zh: "低残压系列，针对 In 下更低的钳位电压优化。列定义同上方常规表。" },
  "spec.parallel": { en: "Ratings are per single chip; paralleling 2&ndash;3 chips reaches Iimp 12.5 / 15 / 25 kA.", zh: "额定值为单只芯片数值；2&ndash;3 只并联时 Iimp 可达 12.5 / 15 / 25 kA。" },
  "spec.pursue": { en: "For series not yet UL recognized, we can pursue UL certification for your program.", zh: "对于尚未取得 UL 认证的系列，我们可以为您的项目申请 UL 认证。" },
  "spec.ul.h2": { en: "UL recognition — File E335803", zh: "UL 认证 — 档案号 E335803" },
  "spec.verify": { en: "<strong>How to verify:</strong> go to UL Product iQ (productiq.ulprospector.com) and search file number <strong>E335803</strong> — the public record lists every covered model. Our MOVs are UL <strong>Recognized components</strong> for building into end products such as SPDs; they are not \"UL Listed\" end products. Full coverage for all series is on the <a href=\"certifications.html\">Certifications page</a>.", zh: "<strong>如何核查：</strong>打开 UL Product iQ（productiq.ulprospector.com），搜索档案号 <strong>E335803</strong>——公开记录中列有全部覆盖型号。我们的 MOV 是 UL <strong>认可元件（Recognized components）</strong>，用于装入 SPD 等终端产品，并非 &ldquo;UL Listed&rdquo; 终端产品。全部系列的认证覆盖见<a href=\"certifications.html\">认证页</a>。" },
  "title.s20": { en: "20S Series Metal Oxide Varistors | Flyboat MOV", zh: "20S 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s22": { en: "22S Series Metal Oxide Varistors | Flyboat MOV", zh: "22S 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s25": { en: "25D Series Metal Oxide Varistors | Flyboat MOV", zh: "25D 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s27": { en: "27L Series Metal Oxide Varistors | Flyboat MOV", zh: "27L 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s30": { en: "30S Series Metal Oxide Varistors | Flyboat MOV", zh: "30S 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s32": { en: "32D Series Metal Oxide Varistors | Flyboat MOV", zh: "32D 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "title.s46": { en: "46L Series Metal Oxide Varistors | Flyboat MOV", zh: "46L 系列金属氧化物压敏电阻 | Flyboat MOV" },
  "sp.s30.coverage.l": { en: "<strong>30S coverage</strong>", zh: "<strong>30S 覆盖范围</strong>" },
  "sp.s30.coverage.v": { en: "Five grades are UL 1449 Recognized under File E335803 per the UL Product iQ record: 621 / 681 / 821 / 112 / 122 (varistor voltage 620V–1200V)", zh: "五个型号依据 UL Product iQ 记录获 UL 1449 Recognized，档案号 E335803：621 / 681 / 821 / 112 / 122（压敏电压 620V–1200V）" },
  "cert.coderead": { en: "Voltages are varistor voltages. The three-digit model code reads as the first two digits plus the number of zeros in the third digit (431 = 430 V; 122 = 1,200 V).", zh: "此处电压均为压敏电压。三位型号码的读法：前两位数字加上第三位数字所表示的 0 的个数（431 = 430 V；122 = 1,200 V）。" },
  "cert.cov.22": { en: "22 model grades, varistor voltages 100–820 V (codes 101–821)", zh: "22 个型号，压敏电压 100–820 V（代码 101–821）" },
  "cert.cov.30s": { en: "620 V, 680 V, 820 V, 1,100 V, 1,200 V only (codes 621, 681, 821, 112, 122)", zh: "仅 620 V、680 V、820 V、1,100 V、1,200 V（代码 621、681、821、112、122）" },
  "cert.cov.34s": { en: "31 model grades, varistor voltages 82–1,800 V (codes 820 and 101–182); 430–680 V grades rated Imax up to 50 kA", zh: "31 个型号，压敏电压 82–1,800 V（代码 820 与 101–182）；430–680 V 型号 Imax 最高 50 kA" },
  "cert.cov.none": { en: "Not UL covered", zh: "未取得 UL 认证" },
  "cert.coverage.h2": { en: "UL coverage by series", zh: "各系列 UL 覆盖" },
  "cert.f.category": { en: "<strong>UL Product iQ category</strong>", zh: "UL Product iQ 类别" },
  "cert.f.holder": { en: "<strong>Certificate holder</strong>", zh: "持证人" },
  "cert.f.standards": { en: "<strong>Standards</strong>", zh: "标准" },
  "cert.f.wording": { en: "<strong>Certification wording</strong>", zh: "认证表述" },
  "cert.footnote": { en: "* 34S standard table: models 34SK101&ndash;34SK122 carry UL, C-UL and TÜV marks; 34SK142, 34SK152, 34SK162 and 34SK182 carry UL only; the high-throughput variants 34SK621H and 34SK681H carry no certification marks. The 34S high-energy (10/350 &micro;s) ratings table carries no certification marks.", zh: "* 34S 常规表：型号 34SK101&ndash;34SK122 带 UL、C-UL 与 TÜV 标记；34SK142、34SK152、34SK162 与 34SK182 仅带 UL；高通流型号 34SK621H 与 34SK681H 无认证标记。34S 高能量（10/350 &micro;s）参数表无认证标记。" },
  "cert.matrix.h2": { en: "UL recognition coverage by series (File E335803)", zh: "各系列 UL 认证覆盖（档案号 E335803）" },
  "cert.matrix.intro": { en: "The table below summarizes the certification marks printed in our product catalog's ratings tables; the marks apply per model, exactly as listed in each series table.", zh: "下表汇总了我们产品手册参数表中印制的认证标记；标记按型号适用，与各系列表中所列完全一致。" },
  "cert.mgmt.h2": { en: "Management system certifications", zh: "管理体系认证" },
  "cert.mgmt.p": { en: "ISO 9001 (quality), ISO 14001 (environment), ISO 45001 (occupational health &amp; safety). Certificates available on request.", zh: "ISO 9001（质量）、ISO 14001（环境）、ISO 45001（职业健康与安全）。证书可索取。" },
  "cert.note": { en: "Note: our MOVs are UL <strong>Recognized components</strong>, intended to be built into end products such as SPDs — they are not \"UL Listed\" end products, and we do not describe them that way.", zh: "注：我们的 MOV 是 UL <strong>认可元件（Recognized components）</strong>，用于装入 SPD 等终端产品；它们不是 &ldquo;UL Listed&rdquo; 终端产品，我们也不会这样描述。" },
  "cert.notyet": { en: "<strong>Not covered yet?</strong> For series without UL recognition today, we can pursue UL certification for your program.", zh: "<strong>尚未覆盖？</strong>对于目前未取得 UL 认证的系列，我们可以为您的项目申请 UL 认证。" },
  "cert.range.20s": { en: "20SK101&ndash;20SK821 (standard); 20SK431&ndash;20SK821 (low-residual-voltage)", zh: "20SK101–20SK821（常规）；20SK431–20SK821（低残压）" },
  "cert.range.22s": { en: "22SK101&ndash;22SK821 (standard); 22SK431&ndash;22SK821 (low-residual-voltage)", zh: "22SK101–22SK821（常规）；22SK431–22SK821（低残压）" },
  "cert.range.27l": { en: "27LK101&ndash;27LK821 (standard); 27LK431&ndash;27LK781 (low-residual-voltage)", zh: "27LK101–27LK821（常规）；27LK431–27LK781（低残压）" },
  "cert.range.34s": { en: "34SK101&ndash;34SK182 (standard)*; 34SK431&ndash;34SK122 (low-residual-voltage)", zh: "34SK101–34SK182（常规）*；34SK431–34SK122（低残压）" },
  "cert.rt.multi": { en: "Multi-chip parallel tables", zh: "多芯片并联表" },
  "cert.rt.std": { en: "Standard, low-residual-voltage", zh: "常规、低残压" },
  "cert.rt.stdhe": { en: "Standard, low-residual-voltage, high-energy (10/350 &micro;s)", zh: "常规、低残压、高能量（10/350 &micro;s）" },
  "cert.sources": { en: "Note on sources: the marks in this table are transcribed from the factory catalog ratings tables. The UL Product iQ record for File E335803 (VZCA2) additionally lists five 30S grades — 30SK621, 30SK681, 30SK821, 30SK112 and 30SK122 — as summarized in the recognition coverage above.", zh: "来源说明：本表标记转录自工厂产品手册的参数表。UL Product iQ 中 E335803 号档案（VZCA2）还列有五个 30S 型号——30SK621、30SK681、30SK821、30SK112 与 30SK122——已汇总于上方的认证覆盖表。" },
  "cert.spd.p": { en: "Flyboat also supplies finished SPDs on an OEM basis — see the <a href=\"faq.html\">FAQ page</a>.", zh: "Flyboat 也以 OEM 方式供应成品 SPD——见<a href=\"faq.html\">常见问题页</a>。" },
  "cert.th.coverage": { en: "UL 1449 coverage (File E335803)", zh: "UL 1449 覆盖（档案号 E335803）" },
  "cert.th.range": { en: "Recognized model range", zh: "认证型号范围" },
  "cert.th.series": { en: "Series", zh: "系列" },
  "cert.th.tables": { en: "Ratings tables", zh: "参数表" },
  "cert.tuv.p": { en: "Selected products carry TÜV certification.", zh: "部分产品带有 TÜV 认证。" },
  "cert.ul.h2": { en: "UL Recognition — File E335803", zh: "UL 认证 — 档案号 E335803" },
  "cert.verify": { en: "<strong>How to verify:</strong> go to UL Product iQ (productiq.ulprospector.com) and search file number <strong>E335803</strong>. The record is public and lists every covered model.", zh: "<strong>如何核查：</strong>打开 UL Product iQ（productiq.ulprospector.com），搜索档案号 <strong>E335803</strong>。该记录公开可查，列出了每一个覆盖的型号。" },
  "faq.closing": { en: "Still have a question? <a href=\"contact.html\">Contact our team</a> — North America: Thomas Dong, thomasd@flyboatmov.com, +1 267-809-2765.", zh: "还有问题？<a href=\"contact.html\">联系我们的团队</a>——北美：Thomas Dong，thomasd@flyboatmov.com，+1 267-809-2765。" },
  "faq.q1.h": { en: "What certifications do your MOVs carry, and which models are covered?", zh: "你们的 MOV 有哪些认证？覆盖哪些型号？" },
  "faq.q1.li22": { en: "<strong>22S / 20S / 27L series</strong>: 22 model grades covered, varistor voltages from 100 V to 820 V (codes 101–821)", zh: "<strong>22S / 20S / 27L 系列</strong>：覆盖 22 个型号，压敏电压 100 V 至 820 V（代码 101–821）" },
  "faq.q1.li30": { en: "<strong>30S series</strong>: five grades covered — 620 V, 680 V, 820 V, 1,100 V and 1,200 V (codes 621, 681, 821, 112, 122)", zh: "<strong>30S 系列</strong>：覆盖五个型号——620 V、680 V、820 V、1,100 V 与 1,200 V（代码 621、681、821、112、122）" },
  "faq.q1.li34": { en: "<strong>34S series</strong>: 31 model grades covered, varistor voltages from 82 V to 1,800 V (codes 820 and 101–182); the 430–680 V grades (codes 431–681) are rated Imax 50 kA", zh: "<strong>34S 系列</strong>：覆盖 31 个型号，压敏电压 82 V 至 1,800 V（代码 820 与 101–182）；430–680 V 型号（代码 431–681）Imax 额定 50 kA" },
  "faq.q1.lineg": { en: "Series 25D, 30D, 32D, 40D, 44L, 48L, 54L are <strong>not</strong> UL covered — we state this openly so your compliance team does not have to guess.", zh: "25D、30D、32D、40D、44L、48L、54L 系列<strong>未被</strong> UL 覆盖——我们如实说明，免得您的合规团队去猜。" },
  "faq.q1.p1": { en: "Our metal oxide varistors are <strong>UL 1449 Recognized under File E335803</strong> (UL 1449 and CSA C22.2 No. 269.5-17, Type 5 component recognition), held by Guiyang High-Tech Yige Electronic Co., Ltd. You can verify the file yourself in UL Product iQ (category VZCA2 / VZCA8, file E335803).", zh: "我们的金属氧化物压敏电阻已获 <strong>UL 1449 Recognized，档案号 E335803</strong>（UL 1449 与 CSA C22.2 No. 269.5-17，Type 5 元件认可），持证人为贵阳高新益舸电子有限公司。您可以自行在 UL Product iQ 核查（类别 VZCA2 / VZCA8，档案号 E335803）。" },
  "faq.q1.p2": { en: "How to read our model codes: the three digits give the <strong>varistor voltage</strong> — the first two digits, followed by as many zeros as the third digit says. For example, code 431 = 430 V varistor voltage, and code 122 = 1,200 V. (The maximum continuous working voltage is a separate, lower datasheet value — for the 431K it is 275 V AC / 350 V DC.)", zh: "型号码的读法：三位数字给出<strong>压敏电压</strong>——前两位为有效数字，第三位表示其后跟几个 0。例如代码 431 = 压敏电压 430 V，代码 122 = 1,200 V。（最大持续工作电压是另一个更低的数据手册数值——431K 为交流 275 V / 直流 350 V。）" },
  "faq.q1.p3": { en: "Coverage by series (voltages below are varistor voltages):", zh: "各系列覆盖（以下电压均为压敏电压）：" },
  "faq.q1.p4": { en: "For series not yet UL covered, <strong>we can pursue UL certification for your program</strong> — talk to us early in the design-in process so certification is planned into the program from the start.", zh: "对于尚未被 UL 覆盖的系列，<strong>我们可以为您的项目申请 UL 认证</strong>——请在设计导入早期就与我们沟通，以便把认证从一开始就规划进项目。" },
  "faq.q1.p5": { en: "We also hold ISO 9001, ISO 14001 and ISO 45001 certification, and selected products carry TÜV certification. See our <a href=\"certifications.html\">Certifications page</a> for the full coverage table.", zh: "我们还持有 ISO 9001、ISO 14001 与 ISO 45001 认证，部分产品带有 TÜV 认证。完整覆盖表见我们的<a href=\"certifications.html\">认证页</a>。" },
  "faq.q2.h": { en: "Do you manufacture your own varistor discs?", zh: "压敏芯片是你们自己生产的吗？" },
  "faq.q2.p": { en: "Yes. The discs are made in our own plant in Guiyang — pressing, sintering, metallization, coating and electrical testing are all done in-house, not outsourced or bought in as finished discs. This is why we can hold tolerances and surge ratings consistent from batch to batch, and why we can offer custom voltage grades and sizes.", zh: "是的。芯片在我们贵阳自有工厂生产——压片、烧结、金属化、涂覆与电性能测试全部自有完成，不外包，也不外购成品芯片。这就是我们能保持批次间公差与浪涌额定值一致、并能提供定制电压等级与尺寸的原因。" },
  "faq.q3.h": { en: "Can you provide datasheets and test reports?", zh: "能提供数据手册和测试报告吗？" },
  "faq.q3.p": { en: "Yes. Every series has a full datasheet (electrical parameters, surge ratings, dimensions). Type-test and routine-test reports are available for qualified OEM programs, and our in-house laboratory is equipped with 120 kA 8/20 µs and 15 kA 10/350 µs lightning surge testers, a 2 ms rectangular surge tester and a power-frequency temporary overvoltage (TOV) tester, so verification testing can be done on the same equipment class used in production release.", zh: "可以。每个系列都有完整数据手册（电气参数、浪涌额定值、尺寸）。型式试验与例行试验报告可为合格的 OEM 项目提供；我们自有实验室配备 120 kA 8/20 &micro;s 与 15 kA 10/350 &micro;s 雷电浪涌测试仪、2 ms 方波浪涌测试仪以及工频暂时过电压（TOV）测试仪，验证测试可以在与生产放行同等级的设备上完成。" },
  "faq.q4.h": { en: "What is your production capacity, and can shipments be traced to batches?", zh: "你们的产能是多少？出货能追溯到批次吗？" },
  "faq.q4.p": { en: "Annual capacity is approximately <strong>30 million standard MOVs</strong>, with downstream lines producing <strong>20 million onboard (board-mounted) SPDs and 10 million finished SPDs</strong> built on our own MOVs, across 6 production lines in a 10,000+ m² facility with 200+ employees. Every shipment is delivered with a Certificate of Conformance, and each lot is traceable to its production batch and test records — if a field issue ever arises, we can identify exactly which batch a unit came from.", zh: "年产能约 <strong>3,000 万只标准 MOV</strong>，下游产线另有 <strong>2,000 万只板载 SPD 与 1,000 万只成品 SPD</strong>（均基于自产 MOV），分布在 6 条产线、10,000+ m&sup2; 的工厂内，员工 200+ 人。每批出货随附合格证书（CoC），每个批次均可追溯至生产批次与测试记录——现场若出现问题，我们能确切定位该产品来自哪个批次。" },
  "faq.q5.h": { en: "Do you support OEM customization, and how are quality issues handled?", zh: "支持 OEM 定制吗？质量问题怎么处理？" },
  "faq.q5.p": { en: "Yes. We support OEM/ODM programs: custom varistor voltage grades, disc sizes, lead styles and forming, and SPD assembly to customer designs. On the quality side, batch traceability lets us connect any reported issue to the exact production lot, run failure analysis on retained samples from the same batch, and issue a corrective-action report.", zh: "支持。我们承接 OEM/ODM 项目：定制压敏电压等级、芯片尺寸、引脚形式与成型，以及按客户设计组装 SPD。质量方面，批次追溯让我们能把任何反馈的问题关联到确切的生产批次，对同批留样做失效分析，并出具纠正措施报告。" },
  "faq.q6.h": { en: "Do you also supply finished SPDs?", zh: "你们也供应成品 SPD 吗？" },
  "faq.q6.p": { en: "Yes. In addition to MOV components, Flyboat also supplies finished surge protective devices on an OEM basis — assembled to your design and specifications, including protection modules with built-in disconnectors. Finished SPDs are supplied for OEM programs, with end-product certification arranged under the customer's program.", zh: "是的。除 MOV 元件外，Flyboat 还以 OEM 方式供应成品浪涌保护器——按您的设计与规格组装，包括带内置脱离器的保护模块。成品 SPD 面向 OEM 项目供应，终端产品认证在客户的项目下安排。" },
  "nav.20s": { en: "20S Series", zh: "20S 系列" },
  "nav.22s": { en: "22S Series", zh: "22S 系列" },
  "nav.25d": { en: "25D Series", zh: "25D 系列" },
  "nav.27l": { en: "27L Series", zh: "27L 系列" },
  "nav.30s": { en: "30S Series", zh: "30S 系列" },
  "nav.32d": { en: "32D Series", zh: "32D 系列" },
  "nav.46l": { en: "46L Series", zh: "46L 系列" },
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
