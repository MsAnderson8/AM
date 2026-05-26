const slider = document.querySelector("[data-slider]");
const cards = slider ? Array.from(slider.querySelectorAll(".case-card")) : [];
const dots = Array.from(document.querySelectorAll("[data-dot]"));
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const languageSwitcher = document.querySelector("[data-language-switcher]");
const pageParams = new URLSearchParams(window.location.search);

if (pageParams.get("pdf") === "1") {
  document.body.classList.add("pdf-export");
}

let activeIndex = 0;
let scrollFrame = null;

const copy = {
  en: {
    lang: "en",
    dir: "ltr",
    title: "AM | Invoice-Based International Payments",
    description:
      "AM helps users make invoice-based international payments with a clear route, visible fees, bank-account payouts, and supporting documents.",
    nav: ["How it works", "Use cases", "Comparison", "Questions"],
    languageLabel: "Language",
    cta: {
      startFree: "Start for Free",
      getStarted: "Get Started",
      startNow: "Start Now",
    },
    hero: {
      eyebrow: "Structured international payments",
      title: "Invoice-based international payments with a clear route and less stress",
      lede:
        "Make payments with payout to the recipient's bank account, fully traceable transaction status, and supporting transaction documents.",
      assist:
        "Start using the service now and receive guidance from your personal AI assistant.",
      support:
        "AM helps you make international invoice payments, pay for overseas services, and settle other obligations. Before you confirm, you see the fee, and the payout is sent to the recipient's bank account.",
      status: "Fee visible before confirmation",
      route: ["Invoice details", "Documents", "Bank payout"],
      assistantTitle: "AI guidance inside the interface",
      assistantText: "Prompts for the next step, document checks, and payment-route clarity.",
      confirmation: "Payment confirmation",
      ready: "Ready",
    },
    metrics: [
      "180+ countries",
      "A clear payment route",
      "Support within the interface",
      "Payment confirmation",
    ],
    process: {
      eyebrow: "How the service works",
      title: "A calm route from invoice details to bank-account payout",
      steps: [
        {
          title: "Upload the payment details",
          body:
            "Enter the recipient, amount, currency, and payment purpose. If you have questions, the AI assistant explains what information is needed and what comes next.",
        },
        {
          title: "Attach documents and review the summary",
          body:
            "Add documents related to the transaction or required for verification. Before confirming, you see the service fee and the main transfer details.",
        },
        {
          title: "Confirm the transfer",
          body:
            "After confirmation, the payment moves forward through the selected route. You keep the confirmation and documents confirming the payment execution.",
        },
      ],
      security: "Security is our key to your transfers.",
    },
    casesHeading: {
      eyebrow: "Real payment tasks",
      title: "How your international payment works in everyday business and personal scenarios",
      body:
        "From verification and document upload to payout to the recipient's bank account and payment confirmation, each scenario shows the same clear route through AM.",
    },
    cases: [
      {
        kicker: "UAE · International investment",
        title: "Ahmed, Founder of an International Investment Company",
        objective:
          "Makes payments to employees in other countries through structured international payments.",
        body:
          "Ahmed needs official payments without a long intermediary-bank chain, with a clear route, confirmation, and direct payouts to bank accounts.",
        workTitle: "How the payment works",
        work: [
          "The AI assistant guides him directly inside the AM interface.",
          "The company completes KYB, uploads payment details, and attaches documents.",
          "Before confirmation, Ahmed sees the fee and transfers the equivalent amount in USDT.",
          "Payouts are sent to recipients' bank accounts and Ahmed receives confirmation.",
        ],
        outcomeTitle: "Outcome",
        outcome:
          "Recipients get fiat payouts to bank accounts. Ahmed keeps the payment status, confirmation, and payment-execution documents.",
      },
      {
        kicker: "Nigeria · Trade and supply",
        title: "Musa, Owner of a Trading Company",
        objective: "Pays for a shipment of goods through a structured international payment.",
        body:
          "Musa needs to pay invoices on time, avoid delays from a prolonged banking chain, and keep supplier trust with clear status and payment confirmation.",
        workTitle: "How the payment works",
        work: [
          "The AI assistant guides each step directly in the AM interface.",
          "The company completes KYB, uploads payment information, and attaches shipment documents.",
          "Before confirming, Musa sees the fee and transfers the equivalent amount in USDT.",
          "The supplier receives payout to a bank account, and Musa receives confirmation.",
        ],
        outcomeTitle: "Outcome",
        outcome:
          "The supplier receives a standard bank-account payout while Musa keeps status, confirmation, and payment-execution documents.",
      },
      {
        kicker: "India · Education abroad",
        title: "Sunita, Mother of a Student",
        objective:
          "Pays for her child's education abroad through a clear and verifiable international payment.",
        body:
          "Sunita wants step-by-step guidance, transparent status updates, supporting documents, and minimal banking bureaucracy.",
        workTitle: "How the payment works",
        work: [
          "The AI assistant guides her directly within the AM interface.",
          "Sunita completes KYC, uploads payment details, and attaches verification documents.",
          "Before confirmation, she sees the service fee and transfers the equivalent amount in USDT.",
          "The educational institution receives payout to its bank account.",
        ],
        outcomeTitle: "Outcome",
        outcome:
          "Sunita receives payment status, confirmation, and documents confirming the payment execution.",
      },
      {
        kicker: "Turkey · Logistics operations",
        title: "Mehmet, Operations Director of a Logistics Company",
        objective:
          "Pays operational invoices for logistics and services through structured international payment.",
        body:
          "Mehmet manages expenses that keep the business running: logistics, support services, and service invoices. He needs a clear route and transparent outcome.",
        workTitle: "How the payment works",
        work: [
          "The AI assistant guides him through each step in the AM interface.",
          "The company completes KYB, uploads payment information, and attaches documents.",
          "Before confirmation, Mehmet sees the service fee and transfers the equivalent amount in USDT.",
          "The payout is delivered to the recipient's bank account.",
        ],
        outcomeTitle: "Outcome",
        outcome:
          "Mehmet keeps payment confirmation, status visibility, and documents confirming execution for the team.",
      },
      {
        kicker: "Indonesia · Expat payments",
        title: "Michael, an Australian Expat Living in Indonesia",
        objective:
          "Pays official expenses such as medical bills and rent through clear international payments.",
        body:
          "Michael needs important day-to-day payments to move smoothly and on time, with clear status visibility, minimal risk, and proper documentation.",
        workTitle: "How the payment works",
        work: [
          "The AI assistant guides him inside the AM interface.",
          "Michael completes KYC, uploads payment information, and attaches documents.",
          "Before confirmation, he sees the service fee and transfers the equivalent amount in USDT.",
          "The clinic or landlord receives payout to their bank account.",
        ],
        outcomeTitle: "Outcome",
        outcome:
          "Michael keeps the payment status, confirmation, and documents needed for his records.",
      },
    ],
    ai: {
      eyebrow: "Support built into the route",
      title: "AI guidance is there to reduce friction, not to take over the product story.",
      body:
        "We intentionally built the AI assistant into the platform to simplify operations, guide users through each step, and provide answers throughout the payment process. After registration, users enter the interface immediately and start processing payments with full AI guidance.",
    },
    comparison: {
      eyebrow: "A simpler route",
      title: "Why the payment route through AM is simpler than SWIFT and bank transfers",
      standardTitle: "Standard bank transfer",
      standard: [
        "3-7 business days",
        "Several correspondent banks",
        "Hidden fees along the route",
        "No clear payment status during the transfer",
      ],
      amaniTitle: "Payment route through AM",
      amani: [
        "Most payments are completed within 1 business day",
        "Payout to the recipient's bank account",
        "The fee is visible before confirmation",
        "A clear payment path with confirmation documents",
      ],
    },
    faqHeading: {
      eyebrow: "Questions",
      title: "Answers before you start",
    },
    faq: [
      [
        "Is it really free?",
        "Yes. Access to the platform and the ability to test the service with a personal AI assistant are completely free of charge. We provide access to a tool that solves a real problem for businesses.",
      ],
      [
        "Does my supplier need to do anything differently?",
        "No. Your supplier receives a standard local bank transfer in their own currency: USD, EUR, SGD, GBP, or another supported currency. They do not need a special wallet or any special setup.",
      ],
      [
        "How do compliance checks work?",
        "AM is designed for lawful invoice-based payments and document-backed obligations. Availability depends on the corridor, verification, and review of the specific transaction. This does not constitute legal or financial advice; consult your accountant or legal advisor for your situation.",
      ],
      [
        "How much can we realistically save?",
        "Most banks charge 3-6% for international transfers once fees and FX markups are included. The service fee is only a small fraction of that amount.",
      ],
      [
        "How long does settlement take?",
        "In most corridors, settlement is completed within 1 business day. SWIFT usually takes 3-5 days, and those delays can impact supplier relationships and project timelines.",
      ],
    ],
    finalCta: {
      eyebrow: "Start with clarity",
      title: "Begin with a guided payment route, visible fees, and confirmation documents.",
    },
    footer: [
      "AM · Invoice-based international payment support",
      "Designed for clear routes, careful documentation, and calm financial operations.",
    ],
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    title: "AM | مدفوعات دولية مبنية على الفواتير",
    description:
      "تساعد AM المستخدمين على تنفيذ مدفوعات دولية مبنية على الفواتير عبر مسار واضح، ورسوم ظاهرة، وإيداع في الحساب البنكي للمستلم، ومستندات داعمة.",
    nav: ["آلية العمل", "حالات الاستخدام", "المقارنة", "الأسئلة"],
    languageLabel: "اللغة",
    cta: { startFree: "ابدأ مجاناً", getStarted: "ابدأ الآن", startNow: "جرّب الآن" },
    hero: {
      eyebrow: "مدفوعات دولية منظمة",
      title: "مدفوعات دولية مبنية على الفواتير عبر مسار واضح وبضغط أقل",
      lede:
        "نفّذوا مدفوعات تصل إلى الحساب البنكي للمستلم، مع حالة عملية قابلة للتتبع ومستندات داعمة.",
      assist: "ابدؤوا استخدام الخدمة الآن واحصلوا على إرشاد من مساعدكم الشخصي بالذكاء الاصطناعي.",
      support:
        "تساعدكم AM على تنفيذ مدفوعات الفواتير الدولية، ودفع الخدمات الخارجية، وتسوية الالتزامات الأخرى. قبل التأكيد تظهر الرسوم بوضوح، ثم يتم الإيداع في الحساب البنكي للمستلم.",
      status: "الرسوم واضحة قبل التأكيد",
      route: ["بيانات الفاتورة", "المستندات", "إيداع بنكي"],
      assistantTitle: "إرشاد بالذكاء الاصطناعي داخل الواجهة",
      assistantText: "تنبيهات للخطوة التالية، وفحص للمستندات، ووضوح في مسار الدفع.",
      confirmation: "تأكيد الدفع",
      ready: "جاهز",
    },
    metrics: ["أكثر من 180 دولة", "مسار دفع واضح", "دعم داخل الواجهة", "تأكيد العملية"],
    process: {
      eyebrow: "كيف تعمل الخدمة",
      title: "مسار هادئ من بيانات الفاتورة إلى الإيداع البنكي",
      steps: [
        {
          title: "حمّلوا بيانات الدفع",
          body:
            "أدخلوا المستلم والمبلغ والعملة والغرض من الدفع. عند وجود أسئلة، يوضح المساعد الذكي البيانات المطلوبة والخطوة التالية.",
        },
        {
          title: "أرفقوا المستندات وراجعوا الملخص",
          body:
            "أضيفوا مستندات العملية أو مستندات التحقق. قبل التأكيد تظهر رسوم الخدمة والبيانات الأساسية للتحويل.",
        },
        {
          title: "أكّدوا التحويل",
          body:
            "بعد التأكيد ينتقل الدفع عبر المسار المختار. وتبقى لديكم وثائق التأكيد ومستندات تنفيذ العملية.",
        },
      ],
      security: "الأمان هو مفتاحنا لتحويلاتكم.",
    },
    casesHeading: {
      eyebrow: "مهام دفع واقعية",
      title: "كيف تعمل مدفوعاتكم الدولية في سيناريوهات الأعمال والحياة اليومية",
      body:
        "من التحقق وتحميل المستندات إلى الإيداع في الحساب البنكي للمستلم وتأكيد الدفع، يوضح كل سيناريو المسار نفسه عبر AM.",
    },
    cases: [
      {
        kicker: "الإمارات · استثمار دولي",
        title: "أحمد، مؤسس شركة استثمار دولية",
        objective: "يدفع مستحقات موظفين في دول أخرى عبر مدفوعات دولية منظمة.",
        body:
          "يحتاج أحمد إلى مدفوعات رسمية من دون سلسلة طويلة من البنوك الوسيطة، مع مسار واضح، وتأكيد، وإيداع مباشر في الحسابات البنكية.",
        workTitle: "كيف تتم العملية",
        work: [
          "يرشده المساعد الذكي مباشرة داخل واجهة AM.",
          "تكمل الشركة KYB، وتحمل بيانات الدفع، وترفق المستندات.",
          "قبل التأكيد يرى أحمد الرسوم ويحوّل المبلغ المكافئ بعملة USDT.",
          "تصل المدفوعات إلى الحسابات البنكية للمستلمين ويتلقى أحمد التأكيد.",
        ],
        outcomeTitle: "النتيجة",
        outcome:
          "يحصل المستلمون على إيداع نقدي في حساباتهم البنكية. ويحتفظ أحمد بحالة الدفع والتأكيد ومستندات تنفيذ العملية.",
      },
      {
        kicker: "نيجيريا · تجارة وتوريد",
        title: "موسى، صاحب شركة تجارية",
        objective: "يدفع فاتورة شحنة بضائع عبر دفع دولي منظم.",
        body:
          "يحتاج موسى إلى دفع الفواتير في الوقت المناسب، وتجنب تأخير السلسلة البنكية الطويلة، والحفاظ على ثقة المورد بوضوح الحالة وتأكيد الدفع.",
        workTitle: "كيف تتم العملية",
        work: [
          "يرشد المساعد الذكي كل خطوة داخل واجهة AM.",
          "تكمل الشركة KYB، وتحمل بيانات الدفع، وترفق مستندات الشحنة.",
          "قبل التأكيد يرى موسى الرسوم ويحوّل المبلغ المكافئ بعملة USDT.",
          "يتلقى المورد الإيداع في حسابه البنكي، ويتلقى موسى التأكيد.",
        ],
        outcomeTitle: "النتيجة",
        outcome:
          "يتلقى المورد إيداعاً بنكياً عادياً، بينما يحتفظ موسى بالحالة والتأكيد ومستندات تنفيذ الدفع.",
      },
      {
        kicker: "الهند · تعليم بالخارج",
        title: "سونيتا، والدة طالب",
        objective: "تدفع رسوم تعليم ابنها في الخارج عبر دفع دولي واضح وقابل للتحقق.",
        body:
          "تحتاج سونيتا إلى إرشاد خطوة بخطوة، وتحديثات واضحة للحالة، ومستندات داعمة، وأقل قدر من التعقيد البنكي.",
        workTitle: "كيف تتم العملية",
        work: [
          "يرشدها المساعد الذكي مباشرة داخل واجهة AM.",
          "تكمل سونيتا KYC، وتحمل بيانات الدفع، وترفق مستندات التحقق.",
          "قبل التأكيد ترى رسوم الخدمة وتحوّل المبلغ المكافئ بعملة USDT.",
          "تتلقى المؤسسة التعليمية الإيداع في حسابها البنكي.",
        ],
        outcomeTitle: "النتيجة",
        outcome: "تحصل سونيتا على حالة الدفع، والتأكيد، والمستندات التي تثبت تنفيذ العملية.",
      },
      {
        kicker: "تركيا · عمليات لوجستية",
        title: "محمد، مدير عمليات في شركة لوجستية",
        objective: "يدفع فواتير تشغيلية للخدمات واللوجستيات عبر دفع دولي منظم.",
        body:
          "يدير محمد مصروفات تحافظ على استمرار العمل: اللوجستيات، خدمات الدعم، وفواتير الخدمة. يحتاج إلى مسار واضح ونتيجة شفافة.",
        workTitle: "كيف تتم العملية",
        work: [
          "يرشده المساعد الذكي في كل خطوة داخل واجهة AM.",
          "تكمل الشركة KYB، وتحمل بيانات الدفع، وترفق المستندات.",
          "قبل التأكيد يرى محمد رسوم الخدمة ويحوّل المبلغ المكافئ بعملة USDT.",
          "يصل الإيداع إلى الحساب البنكي للمستلم.",
        ],
        outcomeTitle: "النتيجة",
        outcome: "يحتفظ محمد بتأكيد الدفع، ووضوح الحالة، ومستندات التنفيذ لفريقه.",
      },
      {
        kicker: "إندونيسيا · مدفوعات للمقيمين الأجانب",
        title: "مايكل، أسترالي مقيم في إندونيسيا",
        objective: "يدفع مصروفات رسمية مثل فواتير العيادة والإيجار عبر مدفوعات دولية واضحة.",
        body:
          "يحتاج مايكل إلى أن تتحرك مدفوعاته اليومية المهمة بسلاسة وفي وقتها، مع وضوح الحالة وتقليل المخاطر وتوثيق مناسب.",
        workTitle: "كيف تتم العملية",
        work: [
          "يرشده المساعد الذكي داخل واجهة AM.",
          "يكمل مايكل KYC، ويحمل بيانات الدفع، ويرفق المستندات.",
          "قبل التأكيد يرى رسوم الخدمة ويحوّل المبلغ المكافئ بعملة USDT.",
          "تتلقى العيادة أو مالك العقار الإيداع في الحساب البنكي.",
        ],
        outcomeTitle: "النتيجة",
        outcome: "يحتفظ مايكل بحالة الدفع والتأكيد والمستندات اللازمة لسجلاته.",
      },
    ],
    ai: {
      eyebrow: "دعم داخل المسار",
      title: "إرشاد الذكاء الاصطناعي يقلل الاحتكاك من دون أن يصبح هو محور المنتج.",
      body:
        "أضفنا المساعد الذكي إلى المنصة لتبسيط العمليات، وإرشاد المستخدمين خلال كل خطوة، وتقديم الإجابات أثناء عملية الدفع. بعد التسجيل، يدخل المستخدمون إلى الواجهة مباشرةً ويبدؤون في تنفيذ المدفوعات بإرشاد كامل من الذكاء الاصطناعي.",
    },
    comparison: {
      eyebrow: "مسار أبسط",
      title: "لماذا يكون مسار الدفع عبر AM أبسط من SWIFT والتحويلات البنكية",
      standardTitle: "تحويل بنكي تقليدي",
      standard: ["3-7 أيام عمل", "عدة بنوك وسيطة", "رسوم مخفية على طول المسار", "لا توجد حالة واضحة أثناء التحويل"],
      amaniTitle: "مسار الدفع عبر AM",
      amani: [
        "تكتمل أغلب المدفوعات خلال يوم عمل واحد",
        "إيداع في الحساب البنكي للمستلم",
        "الرسوم واضحة قبل التأكيد",
        "مسار دفع واضح مع مستندات تأكيد",
      ],
    },
    faqHeading: { eyebrow: "الأسئلة", title: "إجابات قبل البدء" },
    faq: [
      [
        "هل الخدمة مجانية فعلاً؟",
        "نعم. الوصول إلى المنصة وتجربة الخدمة مع مساعد شخصي بالذكاء الاصطناعي مجانيان بالكامل. نحن نمنحكم أداة تعالج مشكلة حقيقية للشركات.",
      ],
      [
        "هل يحتاج موردي إلى القيام بأي شيء مختلف؟",
        "لا. يتلقى المورد تحويلاً بنكياً محلياً عادياً بعملته، مثل USD أو EUR أو SGD أو GBP أو أي عملة مدعومة أخرى. لا يحتاج إلى محفظة خاصة أو أي إعداد خاص.",
      ],
      [
        "كيف تتم مراجعات الامتثال؟",
        "صُممت AM للمدفوعات القانونية المبنية على الفواتير والالتزامات المدعومة بالمستندات. يعتمد توفر الخدمة على مسار الدفع، والتحقق، ومراجعة العملية المحددة. هذا لا يُعد نصيحة قانونية أو مالية؛ استشيروا محاسبكم أو مستشاركم القانوني بحسب حالتكم.",
      ],
      [
        "كم يمكننا أن نوفر واقعياً؟",
        "تتقاضى معظم البنوك 3-6% على التحويلات الدولية عند احتساب الرسوم وفروق أسعار الصرف. رسوم الخدمة ليست إلا جزءاً صغيراً من ذلك.",
      ],
      [
        "كم يستغرق وصول المبلغ؟",
        "في معظم المسارات يكتمل الإيداع خلال يوم عمل واحد. عادةً يستغرق SWIFT من 3 إلى 5 أيام، وقد تؤثر هذه التأخيرات في علاقات الموردين ومواعيد المشاريع.",
      ],
    ],
    finalCta: {
      eyebrow: "ابدؤوا بوضوح",
      title: "ابدؤوا بمسار دفع موجه، ورسوم واضحة، ومستندات تأكيد.",
    },
    footer: [
      "AM · دعم المدفوعات الدولية المبنية على الفواتير",
      "مصمم لمسارات واضحة، وتوثيق دقيق، وعمليات مالية هادئة.",
    ],
  },
  hi: {
    lang: "hi",
    dir: "ltr",
    title: "AM | चालान आधारित अंतरराष्ट्रीय भुगतान",
    description:
      "AM उपयोगकर्ताओं को स्पष्ट मार्ग, पहले से दिखाई देने वाले शुल्क, बैंक खाते में राशि और सहायक दस्तावेज़ों के साथ चालान आधारित अंतरराष्ट्रीय भुगतान करने में मदद करता है।",
    nav: ["कैसे काम करता है", "उपयोग के मामले", "तुलना", "प्रश्न"],
    languageLabel: "भाषा",
    cta: { startFree: "निःशुल्क शुरू करें", getStarted: "शुरू करें", startNow: "अभी शुरू करें" },
    hero: {
      eyebrow: "संरचित अंतरराष्ट्रीय भुगतान",
      title: "स्पष्ट मार्ग और कम तनाव के साथ चालान आधारित अंतरराष्ट्रीय भुगतान",
      lede:
        "प्राप्तकर्ता के बैंक खाते में राशि भेजें, पूरी तरह से ट्रैक होने वाली लेन-देन स्थिति और सहायक लेन-देन दस्तावेज़ों के साथ भुगतान करें।",
      assist: "सेवा का उपयोग अभी शुरू करें और अपने व्यक्तिगत AI सहायक से मार्गदर्शन प्राप्त करें।",
      support:
        "AM आपको अंतरराष्ट्रीय चालान भुगतान करने, विदेशी सेवाओं के लिए भुगतान करने और अन्य दायित्व निपटाने में मदद करता है। पुष्टि से पहले आपको शुल्क दिखाई देता है, और राशि प्राप्तकर्ता के बैंक खाते में भेजी जाती है।",
      status: "पुष्टि से पहले शुल्क दिखाई देता है",
      route: ["चालान विवरण", "दस्तावेज़", "बैंक भुगतान"],
      assistantTitle: "इंटरफ़ेस के भीतर AI मार्गदर्शन",
      assistantText: "अगले चरण के लिए सुझाव, दस्तावेज़ जाँच और भुगतान मार्ग की स्पष्टता।",
      confirmation: "भुगतान की पुष्टि",
      ready: "तैयार",
    },
    metrics: ["180+ देश", "स्पष्ट भुगतान मार्ग", "इंटरफ़ेस में सहायता", "भुगतान की पुष्टि"],
    process: {
      eyebrow: "सेवा कैसे काम करती है",
      title: "चालान विवरण से बैंक खाते में राशि तक एक शांत मार्ग",
      steps: [
        {
          title: "भुगतान विवरण अपलोड करें",
          body:
            "प्राप्तकर्ता, राशि, मुद्रा और भुगतान का उद्देश्य दर्ज करें। यदि कोई प्रश्न हो, तो AI सहायक समझाता है कि कौन-सी जानकारी चाहिए और आगे क्या होगा।",
        },
        {
          title: "दस्तावेज़ संलग्न करें और सारांश देखें",
          body:
            "लेन-देन से संबंधित या सत्यापन के लिए आवश्यक दस्तावेज़ जोड़ें। पुष्टि से पहले आप सेवा शुल्क और मुख्य हस्तांतरण विवरण देखते हैं।",
        },
        {
          title: "हस्तांतरण की पुष्टि करें",
          body:
            "पुष्टि के बाद भुगतान चुने गए मार्ग से आगे बढ़ता है। पुष्टि और भुगतान निष्पादन के दस्तावेज़ आपके पास रहते हैं।",
        },
      ],
      security: "आपके हस्तांतरणों की सुरक्षा हमारी कुंजी है।",
    },
    casesHeading: {
      eyebrow: "वास्तविक भुगतान कार्य",
      title: "आपका अंतरराष्ट्रीय भुगतान दैनिक व्यावसायिक और व्यक्तिगत स्थितियों में कैसे काम करता है",
      body:
        "सत्यापन और दस्तावेज़ अपलोड से लेकर प्राप्तकर्ता के बैंक खाते में राशि और भुगतान की पुष्टि तक, हर परिदृश्य AM के माध्यम से वही स्पष्ट मार्ग दिखाता है।",
    },
    cases: [
      {
        kicker: "यूएई · अंतरराष्ट्रीय निवेश",
        title: "अहमद, अंतरराष्ट्रीय निवेश कंपनी के संस्थापक",
        objective:
          "संरचित अंतरराष्ट्रीय भुगतान के माध्यम से अन्य देशों के कर्मचारियों को भुगतान करते हैं।",
        body:
          "अहमद को लंबी मध्यस्थ बैंक श्रृंखला के बिना आधिकारिक भुगतान चाहिए, जिसमें स्पष्ट मार्ग, पुष्टि और बैंक खातों में सीधे राशि शामिल हो।",
        workTitle: "भुगतान कैसे काम करता है",
        work: [
          "AI सहायक उन्हें सीधे AM इंटरफ़ेस के भीतर मार्गदर्शन करता है।",
          "कंपनी KYB पूरा करती है, भुगतान विवरण अपलोड करती है और दस्तावेज़ संलग्न करती है।",
          "पुष्टि से पहले अहमद शुल्क देखते हैं और USDT में समतुल्य राशि हस्तांतरित करते हैं।",
          "राशि प्राप्तकर्ताओं के बैंक खातों में भेजी जाती है और अहमद को पुष्टि मिलती है।",
        ],
        outcomeTitle: "परिणाम",
        outcome:
          "प्राप्तकर्ताओं को बैंक खातों में फ़िएट राशि मिलती है। अहमद भुगतान की स्थिति, पुष्टि और भुगतान निष्पादन के दस्तावेज़ अपने पास रखते हैं।",
      },
      {
        kicker: "नाइजीरिया · व्यापार और आपूर्ति",
        title: "मूसा, एक व्यापारिक कंपनी के मालिक",
        objective: "संरचित अंतरराष्ट्रीय भुगतान के माध्यम से माल की खेप का भुगतान करते हैं।",
        body:
          "मूसा को चालानों का समय पर भुगतान करना है, लंबी बैंकिंग श्रृंखला से होने वाली देरी से बचना है, और स्पष्ट स्थिति तथा भुगतान की पुष्टि के साथ आपूर्तिकर्ता का विश्वास बनाए रखना है।",
        workTitle: "भुगतान कैसे काम करता है",
        work: [
          "AI सहायक AM इंटरफ़ेस में हर चरण का मार्गदर्शन करता है।",
          "कंपनी KYB पूरा करती है, भुगतान जानकारी अपलोड करती है और खेप के दस्तावेज़ संलग्न करती है।",
          "पुष्टि से पहले मूसा शुल्क देखते हैं और USDT में समतुल्य राशि हस्तांतरित करते हैं।",
          "आपूर्तिकर्ता को बैंक खाते में राशि मिलती है और मूसा को पुष्टि मिलती है।",
        ],
        outcomeTitle: "परिणाम",
        outcome:
          "आपूर्तिकर्ता को मानक बैंक-खाता राशि मिलती है, और मूसा स्थिति, पुष्टि तथा भुगतान निष्पादन के दस्तावेज़ अपने पास रखते हैं।",
      },
      {
        kicker: "भारत · विदेश में शिक्षा",
        title: "सुनीता, एक छात्र की माँ",
        objective:
          "अपने बच्चे की विदेशी शिक्षा का भुगतान एक स्पष्ट और सत्यापन योग्य अंतरराष्ट्रीय भुगतान के माध्यम से करती हैं।",
        body:
          "सुनीता को चरण-दर-चरण मार्गदर्शन, पारदर्शी स्थिति अपडेट, सहायक दस्तावेज़ और न्यूनतम बैंकिंग नौकरशाही चाहिए।",
        workTitle: "भुगतान कैसे काम करता है",
        work: [
          "AI सहायक उन्हें सीधे AM इंटरफ़ेस के भीतर मार्गदर्शन करता है।",
          "सुनीता KYC पूरा करती हैं, भुगतान विवरण अपलोड करती हैं और सत्यापन दस्तावेज़ संलग्न करती हैं।",
          "पुष्टि से पहले वे सेवा शुल्क देखती हैं और USDT में समतुल्य राशि हस्तांतरित करती हैं।",
          "शैक्षणिक संस्थान को अपने बैंक खाते में राशि मिलती है।",
        ],
        outcomeTitle: "परिणाम",
        outcome:
          "सुनीता को भुगतान की स्थिति, पुष्टि और भुगतान निष्पादन की पुष्टि करने वाले दस्तावेज़ मिलते हैं।",
      },
      {
        kicker: "तुर्की · लॉजिस्टिक्स संचालन",
        title: "मेहमेत, एक लॉजिस्टिक्स कंपनी के संचालन निदेशक",
        objective:
          "संरचित अंतरराष्ट्रीय भुगतान के माध्यम से लॉजिस्टिक्स और सेवाओं के परिचालन चालानों का भुगतान करते हैं।",
        body:
          "मेहमेत व्यवसाय को चालू रखने वाले खर्चों का प्रबंधन करते हैं: लॉजिस्टिक्स, सहायता सेवाएँ और सेवा चालान। उन्हें स्पष्ट मार्ग और पारदर्शी परिणाम चाहिए।",
        workTitle: "भुगतान कैसे काम करता है",
        work: [
          "AI सहायक उन्हें AM इंटरफ़ेस में हर चरण से गुज़ारता है।",
          "कंपनी KYB पूरा करती है, भुगतान जानकारी अपलोड करती है और दस्तावेज़ संलग्न करती है।",
          "पुष्टि से पहले मेहमेत सेवा शुल्क देखते हैं और USDT में समतुल्य राशि हस्तांतरित करते हैं।",
          "राशि प्राप्तकर्ता के बैंक खाते में पहुँचती है।",
        ],
        outcomeTitle: "परिणाम",
        outcome:
          "मेहमेत टीम के लिए भुगतान की पुष्टि, स्थिति की पारदर्शिता और निष्पादन के दस्तावेज़ अपने पास रखते हैं।",
      },
      {
        kicker: "इंडोनेशिया · प्रवासी भुगतान",
        title: "माइकल, इंडोनेशिया में रहने वाले एक ऑस्ट्रेलियाई प्रवासी",
        objective:
          "स्पष्ट अंतरराष्ट्रीय भुगतान के माध्यम से चिकित्सा बिल और किराये जैसे आधिकारिक खर्चों का भुगतान करते हैं।",
        body:
          "माइकल को महत्वपूर्ण दैनिक भुगतान सुचारू रूप से और समय पर चाहिए, स्पष्ट स्थिति, न्यूनतम जोखिम और उचित दस्तावेज़ीकरण के साथ।",
        workTitle: "भुगतान कैसे काम करता है",
        work: [
          "AI सहायक उन्हें AM इंटरफ़ेस के भीतर मार्गदर्शन करता है।",
          "माइकल KYC पूरा करते हैं, भुगतान जानकारी अपलोड करते हैं और दस्तावेज़ संलग्न करते हैं।",
          "पुष्टि से पहले वे सेवा शुल्क देखते हैं और USDT में समतुल्य राशि हस्तांतरित करते हैं।",
          "क्लिनिक या मकान मालिक को उनके बैंक खाते में राशि मिलती है।",
        ],
        outcomeTitle: "परिणाम",
        outcome:
          "माइकल भुगतान की स्थिति, पुष्टि और अपने रिकॉर्ड के लिए आवश्यक दस्तावेज़ अपने पास रखते हैं।",
      },
    ],
    ai: {
      eyebrow: "मार्ग में अंतर्निहित सहायता",
      title: "AI मार्गदर्शन बाधा कम करने के लिए है, उत्पाद की कहानी पर हावी होने के लिए नहीं।",
      body:
        "हमने AI सहायक को मंच में जान-बूझकर इसलिए जोड़ा है ताकि संचालन सरल हो, उपयोगकर्ता हर चरण में मार्गदर्शित रहें और भुगतान प्रक्रिया के दौरान उन्हें उत्तर मिलते रहें। पंजीकरण के बाद उपयोगकर्ता तुरंत इंटरफ़ेस में प्रवेश करते हैं और पूर्ण AI मार्गदर्शन के साथ भुगतान की प्रक्रिया शुरू कर देते हैं।",
    },
    comparison: {
      eyebrow: "एक सरल मार्ग",
      title: "AM के माध्यम से भुगतान मार्ग SWIFT और बैंक हस्तांतरण से सरल क्यों है",
      standardTitle: "मानक बैंक हस्तांतरण",
      standard: [
        "3-7 कार्य दिवस",
        "कई संवाददाता बैंक",
        "मार्ग में छिपे हुए शुल्क",
        "हस्तांतरण के दौरान कोई स्पष्ट भुगतान स्थिति नहीं",
      ],
      amaniTitle: "AM के माध्यम से भुगतान मार्ग",
      amani: [
        "अधिकांश भुगतान 1 कार्य दिवस के भीतर पूरे हो जाते हैं",
        "प्राप्तकर्ता के बैंक खाते में राशि",
        "पुष्टि से पहले शुल्क दिखाई देता है",
        "पुष्टि दस्तावेज़ों के साथ स्पष्ट भुगतान मार्ग",
      ],
    },
    faqHeading: { eyebrow: "प्रश्न", title: "शुरू करने से पहले उत्तर" },
    faq: [
      [
        "क्या यह वास्तव में निःशुल्क है?",
        "हाँ। मंच तक पहुँच और व्यक्तिगत AI सहायक के साथ सेवा का परीक्षण करने की क्षमता पूरी तरह से निःशुल्क है। हम एक ऐसा उपकरण उपलब्ध कराते हैं जो व्यवसायों की वास्तविक समस्या का समाधान करता है।",
      ],
      [
        "क्या मेरे आपूर्तिकर्ता को कुछ अलग करना होगा?",
        "नहीं। आपके आपूर्तिकर्ता को उनकी अपनी मुद्रा में एक मानक स्थानीय बैंक हस्तांतरण प्राप्त होता है: USD, EUR, SGD, GBP या कोई अन्य समर्थित मुद्रा। उन्हें किसी विशेष वॉलेट या किसी विशेष सेटअप की आवश्यकता नहीं है।",
      ],
      [
        "अनुपालन जाँच कैसे काम करती है?",
        "AM को वैध चालान आधारित भुगतान और दस्तावेज़-समर्थित दायित्वों के लिए डिज़ाइन किया गया है। उपलब्धता गलियारे, सत्यापन और विशिष्ट लेन-देन की समीक्षा पर निर्भर करती है। यह कानूनी या वित्तीय सलाह नहीं है; अपनी स्थिति के लिए अपने लेखाकार या कानूनी सलाहकार से परामर्श करें।",
      ],
      [
        "हम वास्तव में कितनी बचत कर सकते हैं?",
        "अधिकांश बैंक शुल्क और मुद्रा विनिमय अंतर सहित अंतरराष्ट्रीय हस्तांतरणों पर 3-6% लेते हैं। सेवा शुल्क उस राशि का केवल एक छोटा हिस्सा है।",
      ],
      [
        "निपटान में कितना समय लगता है?",
        "अधिकांश गलियारों में निपटान 1 कार्य दिवस के भीतर पूरा हो जाता है। SWIFT आमतौर पर 3-5 दिन लेता है, और ये देरी आपूर्तिकर्ता संबंधों और परियोजना समय-सीमाओं को प्रभावित कर सकती हैं।",
      ],
    ],
    finalCta: {
      eyebrow: "स्पष्टता के साथ शुरू करें",
      title: "एक निर्देशित भुगतान मार्ग, दिखाई देने वाले शुल्क और पुष्टि दस्तावेज़ों के साथ शुरुआत करें।",
    },
    footer: [
      "AM · चालान आधारित अंतरराष्ट्रीय भुगतान सहायता",
      "स्पष्ट मार्गों, सावधानीपूर्ण दस्तावेज़ीकरण और शांत वित्तीय संचालन के लिए डिज़ाइन किया गया।",
    ],
  },
  ha: {
    lang: "ha",
    dir: "ltr",
    title: "AM | Biyan kuɗi na ƙasashen waje bisa takardar biya",
    description:
      "AM yana taimakon masu amfani su yi biyan kuɗi na ƙasashen waje bisa takardar biya tare da hanya bayyananna, kuɗin sabis a fili, biya zuwa asusun banki, da takardun tabbatarwa.",
    nav: ["Yadda yake aiki", "Misalan amfani", "Kwatance", "Tambayoyi"],
    languageLabel: "Harshe",
    cta: { startFree: "Fara kyauta", getStarted: "Fara yanzu", startNow: "Fara yanzu" },
    hero: {
      eyebrow: "Tsararren biyan kuɗi na ƙasashen waje",
      title: "Biyan kuɗi na ƙasashen waje bisa takardar biya tare da hanya bayyananna da rage damuwa",
      lede:
        "Ku yi biyan kuɗi zuwa asusun bankin mai karɓa, tare da matsayin ma'amala da ake iya bibiyarsa cikakke, da takardun da ke goyon bayan ma'amalar.",
      assist: "Ku fara amfani da sabis yanzu kuma ku sami jagoranci daga mataimakinku na AI na kashin kai.",
      support:
        "AM yana taimakon ku ku biya takardun biya na ƙasashen waje, ku biya kuɗin sabis na ƙasashen waje, da sauran wajibai. Kafin tabbatarwa, kuna ganin kuɗin sabis, sannan a aika kuɗin zuwa asusun bankin mai karɓa.",
      status: "Kuɗin sabis na bayyana kafin tabbatarwa",
      route: ["Bayanan takardar biya", "Takardu", "Aika zuwa banki"],
      assistantTitle: "Jagorancin AI cikin shafin aiki",
      assistantText: "Tunatarwa don mataki na gaba, duba takardu, da fitowar hanyar biya.",
      confirmation: "Tabbatar da biya",
      ready: "A shirye",
    },
    metrics: [
      "Kasashe sama da 180",
      "Hanyar biya bayyananna",
      "Tallafi cikin shafin aiki",
      "Tabbatar da biya",
    ],
    process: {
      eyebrow: "Yadda sabis ɗin yake aiki",
      title: "Hanya mai nutsuwa daga bayanan takardar biya zuwa karɓa a asusun banki",
      steps: [
        {
          title: "Loda bayanan biya",
          body:
            "Ku shigar da mai karɓa, adadi, kuɗin ƙasa, da dalilin biya. Idan kuna da tambayoyi, mataimakin AI yana bayyana bayanan da ake bukata da abin da zai biyo baya.",
        },
        {
          title: "Haɗa takardu kuma ku duba taƙaitawa",
          body:
            "Ku ƙara takardun ma'amala ko takardun da ake bukata don tabbatarwa. Kafin tabbatarwa, kuna ganin kuɗin sabis da manyan bayanan canja wuri.",
        },
        {
          title: "Tabbatar da canja wuri",
          body:
            "Bayan tabbatarwa, biyan zai ci gaba ta hanyar da aka zaɓa. Kuna riƙe tabbatarwa da takardun da ke tabbatar da aiwatar da biyan.",
        },
      ],
      security: "Tsaro shi ne mabuɗinmu ga canja wurinku.",
    },
    casesHeading: {
      eyebrow: "Ayyukan biya na zahiri",
      title: "Yadda biyan kuɗin ƙasashen wajenku yake aiki a kasuwanci da rayuwar yau da kullum",
      body:
        "Daga tabbatarwa da loda takardu zuwa karɓa a asusun bankin mai karɓa da tabbatar da biya, kowane yanayi yana nuna hanya ɗaya bayyananna ta AM.",
    },
    cases: [
      {
        kicker: "UAE · Saka jari na ƙasashen waje",
        title: "Ahmed, Mai kafa Kamfanin Saka Jari na Ƙasashen Waje",
        objective:
          "Yana biyan ma'aikata a wasu ƙasashe ta hanyar tsararrun biyan kuɗi na ƙasashen waje.",
        body:
          "Ahmed yana bukatar biyan kuɗi na hukuma ba tare da doguwar sarkar bankunan tsaka-tsaki ba, tare da hanya bayyananna, tabbatarwa, da kuɗi kai tsaye zuwa asusun banki.",
        workTitle: "Yadda biya yake tafiya",
        work: [
          "Mataimakin AI yana jagorantarsa kai tsaye cikin shafin aikin AM.",
          "Kamfanin yana kammala KYB, yana loda bayanan biya, kuma yana haɗa takardu.",
          "Kafin tabbatarwa, Ahmed yana ganin kuɗin sabis kuma yana canja adadi daidai na USDT.",
          "Ana aika kuɗin zuwa asusun bankin masu karɓa, kuma Ahmed yana karɓar tabbatarwa.",
        ],
        outcomeTitle: "Sakamako",
        outcome:
          "Masu karɓa suna samun kuɗi na zahiri a asusun banki. Ahmed yana riƙe matsayin biya, tabbatarwa, da takardun aiwatar da biyan.",
      },
      {
        kicker: "Najeriya · Ciniki da samar da kayayyaki",
        title: "Musa, Mai Kamfanin Ciniki",
        objective: "Yana biyan takardar biyan jigilar kaya ta hanyar tsararren biyan kuɗi na ƙasashen waje.",
        body:
          "Musa yana bukatar biyan takardun biya akan lokaci, da kauce wa jinkirin doguwar sarkar banki, da kiyaye amincewar mai samarwa tare da bayyananne matsayi da tabbatar da biya.",
        workTitle: "Yadda biya yake tafiya",
        work: [
          "Mataimakin AI yana jagorantar kowane mataki kai tsaye cikin shafin aikin AM.",
          "Kamfanin yana kammala KYB, yana loda bayanan biya, kuma yana haɗa takardun jigilar.",
          "Kafin tabbatarwa, Musa yana ganin kuɗin sabis kuma yana canja adadi daidai na USDT.",
          "Mai samarwa yana karɓar kuɗi a asusun banki, kuma Musa yana karɓar tabbatarwa.",
        ],
        outcomeTitle: "Sakamako",
        outcome:
          "Mai samarwa yana samun karɓar banki na yau da kullum, yayin da Musa yake riƙe matsayi, tabbatarwa, da takardun aiwatar da biyan.",
      },
      {
        kicker: "Indiya · Ilimi a ƙasashen waje",
        title: "Sunita, Mahaifiyar Ɗalibi",
        objective:
          "Tana biyan kuɗin karatun ɗanta a ƙasashen waje ta hanyar biyan kuɗi na ƙasashen waje bayyananne kuma mai tabbatarwa.",
        body:
          "Sunita tana bukatar jagoranci mataki-mataki, sabuntawar matsayi mai gaskiya, takardun tallafi, da rage tsangwama na banki.",
        workTitle: "Yadda biya yake tafiya",
        work: [
          "Mataimakin AI yana jagorantarta kai tsaye cikin shafin aikin AM.",
          "Sunita tana kammala KYC, tana loda bayanan biya, kuma tana haɗa takardun tabbatarwa.",
          "Kafin tabbatarwa, tana ganin kuɗin sabis kuma tana canja adadi daidai na USDT.",
          "Cibiyar ilimi tana karɓar kuɗin a asusun bankinta.",
        ],
        outcomeTitle: "Sakamako",
        outcome:
          "Sunita tana samun matsayin biya, tabbatarwa, da takardun da ke tabbatar da aiwatar da biyan.",
      },
      {
        kicker: "Turkiyya · Ayyukan jigilar kaya",
        title: "Mehmet, Daraktan Ayyuka na Kamfanin Jigilar Kaya",
        objective:
          "Yana biyan takardun biya na aiki na jigilar kaya da sabis ta hanyar tsararren biyan kuɗi na ƙasashen waje.",
        body:
          "Mehmet yana sarrafa kashe-kashe da ke kiyaye kasuwanci yana gudana: jigilar kaya, sabis na tallafi, da takardun biyan sabis. Yana bukatar hanya bayyananna da sakamako mai gaskiya.",
        workTitle: "Yadda biya yake tafiya",
        work: [
          "Mataimakin AI yana jagorantarsa a kowane mataki cikin shafin aikin AM.",
          "Kamfanin yana kammala KYB, yana loda bayanan biya, kuma yana haɗa takardu.",
          "Kafin tabbatarwa, Mehmet yana ganin kuɗin sabis kuma yana canja adadi daidai na USDT.",
          "Ana isar da kuɗin zuwa asusun bankin mai karɓa.",
        ],
        outcomeTitle: "Sakamako",
        outcome:
          "Mehmet yana riƙe tabbatar da biya, bayyanawar matsayi, da takardun aiwatarwa don ƙungiyarsa.",
      },
      {
        kicker: "Indonesiya · Biyan baƙi mazauna",
        title: "Michael, Baƙon Ostiraliya Mai Zaune a Indonesiya",
        objective:
          "Yana biyan kashe-kashe na hukuma kamar takardun asibitin lafiya da haya ta hanyar biyan kuɗi na ƙasashen waje bayyananne.",
        body:
          "Michael yana bukatar muhimman biyan kuɗi na yau da kullum su gudana cikin sauƙi da akan lokaci, tare da bayyananne matsayin, ƙarancin haɗari, da takardu masu kyau.",
        workTitle: "Yadda biya yake tafiya",
        work: [
          "Mataimakin AI yana jagorantarsa cikin shafin aikin AM.",
          "Michael yana kammala KYC, yana loda bayanan biya, kuma yana haɗa takardu.",
          "Kafin tabbatarwa, yana ganin kuɗin sabis kuma yana canja adadi daidai na USDT.",
          "Asibiti ko mai gida yana karɓar kuɗin a asusun bankinsu.",
        ],
        outcomeTitle: "Sakamako",
        outcome:
          "Michael yana riƙe matsayin biya, tabbatarwa, da takardun da yake bukata don bayanansa.",
      },
    ],
    ai: {
      eyebrow: "Tallafi a cikin hanya",
      title: "Jagorancin AI yana nan don rage matsalolin, ba don ya ɗauki labarin samfurin ba.",
      body:
        "Mun sa mataimakin AI cikin dandalin da gangan domin sauƙaƙa ayyuka, jagorantar masu amfani a kowane mataki, da bayar da amsoshi yayin tsarin biya. Bayan rajista, masu amfani suna shiga shafin aiki nan da nan kuma suna fara aiwatar da biyan kuɗi tare da cikakken jagorancin AI.",
    },
    comparison: {
      eyebrow: "Hanya mafi sauƙi",
      title: "Dalilin da hanyar biya ta AM ta fi SWIFT da canja wurin banki sauƙi",
      standardTitle: "Canja wurin banki na yau da kullum",
      standard: [
        "Kwanaki 3-7 na aiki",
        "Bankuna da yawa na tsaka-tsaki",
        "Kuɗin sabis ɓoye a kan hanya",
        "Babu bayyananne matsayin biya yayin canja wuri",
      ],
      amaniTitle: "Hanyar biya ta AM",
      amani: [
        "Yawancin biya na kammala cikin kwana 1 na aiki",
        "Kuɗi zuwa asusun bankin mai karɓa",
        "Kuɗin sabis na bayyana kafin tabbatarwa",
        "Hanyar biya bayyananna tare da takardun tabbatarwa",
      ],
    },
    faqHeading: { eyebrow: "Tambayoyi", title: "Amsoshi kafin ku fara" },
    faq: [
      [
        "Da gaske kyauta ne?",
        "Eh. Samun damar shiga dandalin da gwada sabis tare da mataimaki na AI na kashin kai kyauta ne gabaki ɗaya. Muna ba da kayan aiki da ke warware ainihin matsalar kasuwanci.",
      ],
      [
        "Shin mai samar mini kayan yana bukatar yin wani abu daban?",
        "A'a. Mai samar muku yana karɓar canja wurin banki na cikin gida na yau da kullum a kuɗinsa: USD, EUR, SGD, GBP ko wani kuɗi da aka tallafa wa. Ba ya bukatar walat ɗin musamman ko wani saiti na musamman.",
      ],
      [
        "Yaya bincike na bin doka yake aiki?",
        "An tsara AM don biyan kuɗi na halal bisa takardar biya da wajibai da takardu ke tallafawa. Samun sabis ya dogara da hanya, tabbatarwa, da bita na ma'amala ta musamman. Wannan ba shawara ta shari'a ko ta kuɗi ba ce; ku tuntubi akawu ko mai ba ku shawara ta shari'a don yanayinku.",
      ],
      [
        "Nawa za mu iya ajiyewa a zahiri?",
        "Yawancin bankuna suna cajin 3-6% na canja wurin ƙasashen waje idan an haɗa kuɗaɗe da bambancin canjin kuɗi. Kuɗin sabis ƙaramin sashi ne kawai daga wannan.",
      ],
      [
        "Tsawon lokaci nawa ake ɗauka kafin biya ta tabbata?",
        "A mafi yawan hanyoyi, biya na kammala cikin kwana 1 na aiki. SWIFT yawanci yana ɗauka kwanaki 3-5, kuma waɗannan jinkiri na iya shafar dangantakar mai samarwa da lokutan aikin.",
      ],
    ],
    finalCta: {
      eyebrow: "Fara da bayyana",
      title: "Ku fara da hanyar biya mai jagora, kuɗin sabis bayyananne, da takardun tabbatarwa.",
    },
    footer: [
      "AM · Tallafi na biyan kuɗi na ƙasashen waje bisa takardar biya",
      "An tsara don hanyoyi bayyananne, takardu masu kyau, da ayyukan kuɗi masu kwanciyar hankali.",
    ],
  },
  tr: {
    lang: "tr",
    dir: "ltr",
    title: "AM | Fatura Bazlı Uluslararası Ödemeler",
    description:
      "AM; net rota, görünür ücretler, banka hesabına ödeme ve destekleyici belgelerle fatura bazlı uluslararası ödeme yapmanıza yardımcı olur.",
    nav: ["Nasıl çalışır", "Kullanım senaryoları", "Karşılaştırma", "Sorular"],
    languageLabel: "Dil",
    cta: { startFree: "Ücretsiz Başla", getStarted: "Başla", startNow: "Hemen Başla" },
    hero: {
      eyebrow: "Yapılandırılmış uluslararası ödemeler",
      title: "Net rota ve daha az stresle fatura bazlı uluslararası ödemeler",
      lede:
        "Alıcının banka hesabına ödeme, izlenebilir işlem durumu ve destekleyici işlem belgeleriyle ödeme yapın.",
      assist: "Hizmeti şimdi kullanmaya başlayın ve kişisel AI asistanınızdan rehberlik alın.",
      support:
        "AM, uluslararası fatura ödemeleri, yurt dışı hizmet ödemeleri ve diğer yükümlülükler için yardımcı olur. Onaydan önce ücreti görürsünüz; ödeme alıcının banka hesabına gönderilir.",
      status: "Ücret onaydan önce görünür",
      route: ["Fatura bilgileri", "Belgeler", "Banka ödemesi"],
      assistantTitle: "Arayüz içinde AI rehberliği",
      assistantText: "Sonraki adım, belge kontrolü ve ödeme rotası netliği için yönlendirmeler.",
      confirmation: "Ödeme onayı",
      ready: "Hazır",
    },
    metrics: ["180+ ülke", "Net ödeme rotası", "Arayüz içinde destek", "Ödeme onayı"],
    process: {
      eyebrow: "Hizmet nasıl çalışır",
      title: "Fatura bilgilerinden banka hesabına ödemeye sakin bir rota",
      steps: [
        {
          title: "Ödeme bilgilerini yükleyin",
          body:
            "Alıcıyı, tutarı, para birimini ve ödeme amacını girin. Sorunuz olursa AI asistan hangi bilgilerin gerektiğini ve sonraki adımı açıklar.",
        },
        {
          title: "Belgeleri ekleyin ve özeti inceleyin",
          body:
            "İşleme veya doğrulamaya ait belgeleri ekleyin. Onaydan önce hizmet ücretini ve temel transfer bilgilerini görürsünüz.",
        },
        {
          title: "Transferi onaylayın",
          body:
            "Onaydan sonra ödeme seçilen rota üzerinden ilerler. Onay ve ödeme yürütme belgeleri sizde kalır.",
        },
      ],
      security: "Transferleriniz için anahtarımız güvenliktir.",
    },
    casesHeading: {
      eyebrow: "Gerçek ödeme işleri",
      title: "Uluslararası ödemeniz gerçek iş ve kişisel senaryolarda nasıl çalışır",
      body:
        "Doğrulama ve belge yüklemeden alıcının banka hesabına ödemeye ve ödeme onayına kadar her senaryo AM'deki aynı net rotayı gösterir.",
    },
    cases: [
      {
        kicker: "BAE · Uluslararası yatırım",
        title: "Ahmed, Uluslararası Yatırım Şirketi Kurucusu",
        objective: "Farklı ülkelerdeki çalışanlara yapılandırılmış uluslararası ödemeler yapar.",
        body:
          "Ahmed'in uzun aracı banka zinciri olmadan resmi ödeme yapması; net rota, onay ve banka hesaplarına doğrudan ödeme alması gerekir.",
        workTitle: "Ödeme nasıl ilerler",
        work: [
          "AI asistan AM arayüzünde doğrudan rehberlik eder.",
          "Şirket KYB'yi tamamlar, ödeme bilgilerini yükler ve belgeleri ekler.",
          "Onaydan önce Ahmed ücreti görür ve eşdeğer tutarı USDT olarak transfer eder.",
          "Ödemeler alıcıların banka hesaplarına gönderilir ve Ahmed onay alır.",
        ],
        outcomeTitle: "Sonuç",
        outcome:
          "Alıcılar banka hesaplarına fiat ödeme alır. Ahmed ödeme durumunu, onayı ve ödeme yürütme belgelerini saklar.",
      },
      {
        kicker: "Nijerya · Ticaret ve tedarik",
        title: "Musa, Ticaret Şirketi Sahibi",
        objective: "Mal sevkiyatı faturasını yapılandırılmış uluslararası ödeme ile öder.",
        body:
          "Musa'nın faturaları zamanında ödemesi, uzun banka zincirinden kaynaklanan gecikmelerden kaçınması ve net durum takibiyle tedarikçi güvenini koruması gerekir.",
        workTitle: "Ödeme nasıl ilerler",
        work: [
          "AI asistan her adımı AM arayüzünde yönlendirir.",
          "Şirket KYB'yi tamamlar, ödeme bilgilerini yükler ve sevkiyat belgelerini ekler.",
          "Onaydan önce Musa ücreti görür ve eşdeğer tutarı USDT olarak transfer eder.",
          "Tedarikçi banka hesabına ödeme alır ve Musa onay alır.",
        ],
        outcomeTitle: "Sonuç",
        outcome:
          "Tedarikçi standart banka hesabı ödemesi alırken Musa durum, onay ve ödeme yürütme belgelerini saklar.",
      },
      {
        kicker: "Hindistan · Yurt dışı eğitim",
        title: "Sunita, Öğrenci Annesi",
        objective: "Çocuğunun yurt dışı eğitim ödemesini net ve doğrulanabilir bir uluslararası ödeme ile yapar.",
        body:
          "Sunita'nın adım adım rehberliğe, şeffaf durum güncellemelerine, destekleyici belgelere ve az bürokrasiye ihtiyacı vardır.",
        workTitle: "Ödeme nasıl ilerler",
        work: [
          "AI asistan AM arayüzünde doğrudan rehberlik eder.",
          "Sunita KYC'yi tamamlar, ödeme bilgilerini yükler ve doğrulama belgelerini ekler.",
          "Onaydan önce hizmet ücretini görür ve eşdeğer tutarı USDT olarak transfer eder.",
          "Eğitim kurumu ödemeyi banka hesabına alır.",
        ],
        outcomeTitle: "Sonuç",
        outcome: "Sunita ödeme durumunu, onayı ve ödeme yürütmesini doğrulayan belgeleri alır.",
      },
      {
        kicker: "Türkiye · Lojistik operasyonları",
        title: "Mehmet, Lojistik Şirketi Operasyon Direktörü",
        objective: "Lojistik ve hizmet operasyon faturalarını yapılandırılmış uluslararası ödeme ile öder.",
        body:
          "Mehmet işin devamını sağlayan giderleri yönetir: lojistik, destek hizmetleri ve hizmet faturaları. Net rota ve şeffaf sonuç gerekir.",
        workTitle: "Ödeme nasıl ilerler",
        work: [
          "AI asistan her adımda AM arayüzünde rehberlik eder.",
          "Şirket KYB'yi tamamlar, ödeme bilgilerini yükler ve belgeleri ekler.",
          "Onaydan önce Mehmet hizmet ücretini görür ve eşdeğer tutarı USDT olarak transfer eder.",
          "Ödeme alıcının banka hesabına ulaşır.",
        ],
        outcomeTitle: "Sonuç",
        outcome: "Mehmet ekip için ödeme onayını, durum görünürlüğünü ve yürütme belgelerini saklar.",
      },
      {
        kicker: "Endonezya · Expat ödemeleri",
        title: "Michael, Endonezya'da Yaşayan Avustralyalı Expat",
        objective: "Klinik faturaları ve kira gibi resmi giderleri net uluslararası ödemelerle öder.",
        body:
          "Michael'ın önemli günlük ödemelerinin zamanında, net durum görünürlüğü, düşük risk ve doğru belgelerle ilerlemesi gerekir.",
        workTitle: "Ödeme nasıl ilerler",
        work: [
          "AI asistan AM arayüzünde rehberlik eder.",
          "Michael KYC'yi tamamlar, ödeme bilgilerini yükler ve belgeleri ekler.",
          "Onaydan önce hizmet ücretini görür ve eşdeğer tutarı USDT olarak transfer eder.",
          "Klinik veya ev sahibi banka hesabına ödeme alır.",
        ],
        outcomeTitle: "Sonuç",
        outcome: "Michael ödeme durumunu, onayı ve kayıtları için gereken belgeleri saklar.",
      },
    ],
    ai: {
      eyebrow: "Rota içine yerleşik destek",
      title: "AI rehberliği sürtünmeyi azaltmak içindir; ürün hikayesinin yerine geçmez.",
      body:
        "AI asistanı platforma operasyonları sadeleştirmek, kullanıcıları her adımda yönlendirmek ve ödeme süreci boyunca yanıt vermek için ekledik. Kayıttan sonra kullanıcılar arayüze doğrudan girer ve tam AI rehberliği ile hemen ödeme işlemeye başlar.",
    },
    comparison: {
      eyebrow: "Daha basit rota",
      title: "AM üzerinden ödeme rotası neden SWIFT ve banka transferlerinden daha basit",
      standardTitle: "Standart banka transferi",
      standard: ["3-7 iş günü", "Birden fazla muhabir banka", "Rota boyunca gizli ücretler", "Transfer sırasında net ödeme durumu yok"],
      amaniTitle: "AM üzerinden ödeme rotası",
      amani: [
        "Çoğu ödeme 1 iş günü içinde tamamlanır",
        "Alıcının banka hesabına ödeme",
        "Ücret onaydan önce görünür",
        "Onay belgeleriyle net ödeme yolu",
      ],
    },
    faqHeading: { eyebrow: "Sorular", title: "Başlamadan önce yanıtlar" },
    faq: [
      [
        "Gerçekten ücretsiz mi?",
        "Evet. Platforma erişim ve kişisel AI asistanıyla hizmeti test etme tamamen ücretsizdir. İşletmelerin gerçek bir sorununu çözen bir araca erişim sağlıyoruz.",
      ],
      [
        "Tedarikçimin farklı bir şey yapması gerekir mi?",
        "Hayır. Tedarikçiniz kendi para biriminde standart yerel banka transferi alır: USD, EUR, SGD, GBP veya desteklenen başka bir para birimi. Özel bir cüzdan veya herhangi bir özel kurulum gerekmez.",
      ],
      [
        "Uyumluluk kontrolleri nasıl işler?",
        "AM, yasal fatura bazlı ödemeler ve belgeye dayalı yükümlülükler için tasarlanmıştır. Kullanılabilirlik koridora, doğrulamaya ve ilgili işlemin incelemesine bağlıdır. Bu hukuki veya finansal tavsiye değildir; kendi durumunuz için muhasebecinize ya da hukuk danışmanınıza başvurun.",
      ],
      [
        "Gerçekçi olarak ne kadar tasarruf edebiliriz?",
        "Çoğu banka, ücretler ve döviz kuru farkları dahil edildiğinde uluslararası transferler için 3-6% alır. Hizmet ücreti bunun yalnızca küçük bir kısmıdır.",
      ],
      [
        "Tahsilat ne kadar sürer?",
        "Çoğu koridorda ödeme 1 iş günü içinde tamamlanır. SWIFT genellikle 3-5 gün sürer ve bu gecikmeler tedarikçi ilişkilerini ve proje takvimlerini etkileyebilir.",
      ],
    ],
    finalCta: {
      eyebrow: "Netlikle başlayın",
      title: "Yönlendirmeli ödeme rotası, görünür ücretler ve onay belgeleriyle başlayın.",
    },
    footer: [
      "AM · Fatura bazlı uluslararası ödeme desteği",
      "Net rotalar, dikkatli dokümantasyon ve sakin finansal operasyonlar için tasarlandı.",
    ],
  },
  id: {
    lang: "id",
    dir: "ltr",
    title: "AM | Pembayaran Internasional Berbasis Faktur",
    description:
      "AM membantu pengguna melakukan pembayaran internasional berbasis faktur dengan rute yang jelas, biaya yang terlihat, dana yang diterima di rekening bank, dan dokumen pendukung.",
    nav: ["Cara kerja", "Contoh penggunaan", "Perbandingan", "Pertanyaan"],
    languageLabel: "Bahasa",
    cta: { startFree: "Mulai Gratis", getStarted: "Mulai", startNow: "Mulai Sekarang" },
    hero: {
      eyebrow: "Pembayaran internasional yang terstruktur",
      title: "Pembayaran internasional berbasis faktur dengan rute jelas dan lebih tenang",
      lede:
        "Lakukan pembayaran dengan dana yang diterima di rekening bank penerima, status transaksi yang sepenuhnya dapat dilacak, dan dokumen transaksi pendukung.",
      assist: "Mulai gunakan layanan sekarang dan dapatkan panduan dari asisten AI pribadi Anda.",
      support:
        "AM membantu Anda melakukan pembayaran faktur internasional, membayar layanan luar negeri, dan menyelesaikan kewajiban lainnya. Sebelum konfirmasi, Anda melihat biayanya, lalu dana dikirim ke rekening bank penerima.",
      status: "Biaya terlihat sebelum konfirmasi",
      route: ["Detail faktur", "Dokumen", "Diterima di bank"],
      assistantTitle: "Panduan AI di dalam antarmuka",
      assistantText: "Petunjuk untuk langkah berikutnya, pemeriksaan dokumen, dan kejelasan rute pembayaran.",
      confirmation: "Konfirmasi pembayaran",
      ready: "Siap",
    },
    metrics: [
      "180+ negara",
      "Rute pembayaran yang jelas",
      "Dukungan di dalam antarmuka",
      "Konfirmasi pembayaran",
    ],
    process: {
      eyebrow: "Cara layanan bekerja",
      title: "Rute yang tenang dari detail faktur hingga dana diterima di rekening bank",
      steps: [
        {
          title: "Unggah detail pembayaran",
          body:
            "Masukkan penerima, jumlah, mata uang, dan tujuan pembayaran. Jika ada pertanyaan, asisten AI menjelaskan informasi apa yang dibutuhkan dan apa langkah selanjutnya.",
        },
        {
          title: "Lampirkan dokumen dan tinjau ringkasan",
          body:
            "Tambahkan dokumen yang terkait dengan transaksi atau yang diperlukan untuk verifikasi. Sebelum konfirmasi, Anda melihat biaya layanan dan detail utama transfer.",
        },
        {
          title: "Konfirmasi transfer",
          body:
            "Setelah konfirmasi, pembayaran berjalan melalui rute yang dipilih. Anda menyimpan konfirmasi dan dokumen yang membuktikan pelaksanaan pembayaran.",
        },
      ],
      security: "Keamanan adalah kunci kami untuk transfer Anda.",
    },
    casesHeading: {
      eyebrow: "Tugas pembayaran yang nyata",
      title: "Bagaimana pembayaran internasional Anda berjalan dalam skenario bisnis dan pribadi sehari-hari",
      body:
        "Dari verifikasi dan pengunggahan dokumen hingga dana diterima di rekening bank penerima dan konfirmasi pembayaran, setiap skenario menunjukkan rute yang sama dan jelas melalui AM.",
    },
    cases: [
      {
        kicker: "UEA · Investasi internasional",
        title: "Ahmed, Pendiri Perusahaan Investasi Internasional",
        objective:
          "Membayar karyawan di negara lain melalui pembayaran internasional yang terstruktur.",
        body:
          "Ahmed memerlukan pembayaran resmi tanpa rantai bank perantara yang panjang, dengan rute yang jelas, konfirmasi, dan dana langsung ke rekening bank.",
        workTitle: "Cara pembayaran berjalan",
        work: [
          "Asisten AI memandu langsung di dalam antarmuka AM.",
          "Perusahaan menyelesaikan KYB, mengunggah detail pembayaran, dan melampirkan dokumen.",
          "Sebelum konfirmasi, Ahmed melihat biaya dan mentransfer jumlah setara dalam USDT.",
          "Dana dikirim ke rekening bank penerima dan Ahmed menerima konfirmasi.",
        ],
        outcomeTitle: "Hasil",
        outcome:
          "Penerima mendapatkan dana fiat di rekening bank. Ahmed menyimpan status pembayaran, konfirmasi, dan dokumen pelaksanaan pembayaran.",
      },
      {
        kicker: "Nigeria · Perdagangan dan pemasokan",
        title: "Musa, Pemilik Perusahaan Dagang",
        objective:
          "Membayar faktur pengiriman barang melalui pembayaran internasional yang terstruktur.",
        body:
          "Musa perlu membayar faktur tepat waktu, menghindari penundaan dari rantai perbankan yang panjang, dan menjaga kepercayaan pemasok dengan status yang jelas dan konfirmasi pembayaran.",
        workTitle: "Cara pembayaran berjalan",
        work: [
          "Asisten AI memandu setiap langkah langsung di dalam antarmuka AM.",
          "Perusahaan menyelesaikan KYB, mengunggah informasi pembayaran, dan melampirkan dokumen pengiriman.",
          "Sebelum konfirmasi, Musa melihat biaya dan mentransfer jumlah setara dalam USDT.",
          "Pemasok menerima dana di rekening bank, dan Musa menerima konfirmasi.",
        ],
        outcomeTitle: "Hasil",
        outcome:
          "Pemasok menerima dana ke rekening bank seperti biasa, sementara Musa menyimpan status, konfirmasi, dan dokumen pelaksanaan pembayaran.",
      },
      {
        kicker: "India · Pendidikan di luar negeri",
        title: "Sunita, Ibu dari Seorang Mahasiswa",
        objective:
          "Membayar pendidikan anaknya di luar negeri melalui pembayaran internasional yang jelas dan dapat diverifikasi.",
        body:
          "Sunita memerlukan panduan langkah demi langkah, pembaruan status yang transparan, dokumen pendukung, dan birokrasi perbankan yang minimal.",
        workTitle: "Cara pembayaran berjalan",
        work: [
          "Asisten AI memandunya langsung di dalam antarmuka AM.",
          "Sunita menyelesaikan KYC, mengunggah detail pembayaran, dan melampirkan dokumen verifikasi.",
          "Sebelum konfirmasi, ia melihat biaya layanan dan mentransfer jumlah setara dalam USDT.",
          "Lembaga pendidikan menerima dana di rekening banknya.",
        ],
        outcomeTitle: "Hasil",
        outcome:
          "Sunita menerima status pembayaran, konfirmasi, dan dokumen yang membuktikan pelaksanaan pembayaran.",
      },
      {
        kicker: "Turki · Operasi logistik",
        title: "Mehmet, Direktur Operasi Perusahaan Logistik",
        objective:
          "Membayar faktur operasional untuk logistik dan layanan melalui pembayaran internasional yang terstruktur.",
        body:
          "Mehmet mengelola pengeluaran yang menjaga bisnis tetap berjalan: logistik, layanan pendukung, dan faktur layanan. Ia membutuhkan rute yang jelas dan hasil yang transparan.",
        workTitle: "Cara pembayaran berjalan",
        work: [
          "Asisten AI memandunya melalui setiap langkah di dalam antarmuka AM.",
          "Perusahaan menyelesaikan KYB, mengunggah informasi pembayaran, dan melampirkan dokumen.",
          "Sebelum konfirmasi, Mehmet melihat biaya layanan dan mentransfer jumlah setara dalam USDT.",
          "Dana dikirim ke rekening bank penerima.",
        ],
        outcomeTitle: "Hasil",
        outcome:
          "Mehmet menyimpan konfirmasi pembayaran, visibilitas status, dan dokumen pelaksanaan untuk timnya.",
      },
      {
        kicker: "Indonesia · Pembayaran ekspatriat",
        title: "Michael, Ekspatriat Australia yang Tinggal di Indonesia",
        objective:
          "Membayar pengeluaran resmi seperti tagihan medis dan sewa melalui pembayaran internasional yang jelas.",
        body:
          "Michael memerlukan pembayaran harian penting yang berjalan lancar dan tepat waktu, dengan visibilitas status yang jelas, risiko minimal, dan dokumentasi yang rapi.",
        workTitle: "Cara pembayaran berjalan",
        work: [
          "Asisten AI memandunya di dalam antarmuka AM.",
          "Michael menyelesaikan KYC, mengunggah informasi pembayaran, dan melampirkan dokumen.",
          "Sebelum konfirmasi, ia melihat biaya layanan dan mentransfer jumlah setara dalam USDT.",
          "Klinik atau pemilik rumah menerima dana di rekening bank mereka.",
        ],
        outcomeTitle: "Hasil",
        outcome:
          "Michael menyimpan status pembayaran, konfirmasi, dan dokumen yang diperlukan untuk catatannya.",
      },
    ],
    ai: {
      eyebrow: "Dukungan di dalam rute",
      title: "Panduan AI hadir untuk mengurangi hambatan, bukan untuk mengambil alih cerita produk.",
      body:
        "Kami sengaja membangun asisten AI ke dalam platform untuk menyederhanakan operasi, memandu pengguna di setiap langkah, dan memberikan jawaban sepanjang proses pembayaran. Setelah registrasi, pengguna langsung masuk ke antarmuka dan mulai memproses pembayaran dengan panduan AI penuh.",
    },
    comparison: {
      eyebrow: "Rute yang lebih sederhana",
      title: "Mengapa rute pembayaran melalui AM lebih sederhana daripada SWIFT dan transfer bank",
      standardTitle: "Transfer bank standar",
      standard: [
        "3-7 hari kerja",
        "Beberapa bank koresponden",
        "Biaya tersembunyi di sepanjang rute",
        "Tidak ada status pembayaran yang jelas selama transfer",
      ],
      amaniTitle: "Rute pembayaran melalui AM",
      amani: [
        "Sebagian besar pembayaran selesai dalam 1 hari kerja",
        "Dana langsung ke rekening bank penerima",
        "Biaya terlihat sebelum konfirmasi",
        "Jalur pembayaran yang jelas dengan dokumen konfirmasi",
      ],
    },
    faqHeading: { eyebrow: "Pertanyaan", title: "Jawaban sebelum Anda mulai" },
    faq: [
      [
        "Apakah benar-benar gratis?",
        "Ya. Akses ke platform dan kemampuan untuk mencoba layanan dengan asisten AI pribadi sepenuhnya gratis. Kami memberikan akses ke alat yang menyelesaikan masalah nyata bagi bisnis.",
      ],
      [
        "Apakah pemasok saya perlu melakukan sesuatu yang berbeda?",
        "Tidak. Pemasok Anda menerima transfer bank lokal standar dalam mata uang mereka: USD, EUR, SGD, GBP, atau mata uang lain yang didukung. Mereka tidak membutuhkan dompet khusus atau pengaturan khusus apa pun.",
      ],
      [
        "Bagaimana pemeriksaan kepatuhan dilakukan?",
        "AM dirancang untuk pembayaran berbasis faktur yang sah dan kewajiban yang didukung dokumen. Ketersediaan bergantung pada koridor, verifikasi, dan peninjauan atas transaksi tertentu. Ini bukan nasihat hukum atau finansial; konsultasikan situasi Anda dengan akuntan atau penasihat hukum.",
      ],
      [
        "Berapa penghematan yang realistis bisa kami dapatkan?",
        "Sebagian besar bank mengenakan 3-6% untuk transfer internasional setelah biaya dan selisih nilai tukar diperhitungkan. Biaya layanan hanyalah sebagian kecil dari jumlah tersebut.",
      ],
      [
        "Berapa lama waktu penyelesaian pembayaran?",
        "Di sebagian besar koridor, penyelesaian selesai dalam 1 hari kerja. SWIFT biasanya memakan waktu 3-5 hari, dan keterlambatan tersebut dapat memengaruhi hubungan dengan pemasok dan jadwal proyek.",
      ],
    ],
    finalCta: {
      eyebrow: "Mulai dengan kejelasan",
      title: "Mulai dengan rute pembayaran yang terpandu, biaya yang terlihat, dan dokumen konfirmasi.",
    },
    footer: [
      "AM · Dukungan pembayaran internasional berbasis faktur",
      "Dirancang untuk rute yang jelas, dokumentasi yang teliti, dan operasi finansial yang tenang.",
    ],
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
};

const setTexts = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
};

function applyLanguage(languageCode) {
  const selectedCopy = copy[languageCode] ?? copy.en;
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = selectedCopy.lang;
  document.documentElement.dir = selectedCopy.dir;
  document.title = selectedCopy.title;
  if (metaDescription) metaDescription.setAttribute("content", selectedCopy.description);

  setTexts(".nav-links a", selectedCopy.nav);
  setText(".language-picker-label", selectedCopy.languageLabel);
  setText(".nav-cta", selectedCopy.cta.startFree);
  setText(".hero-actions .button-primary", selectedCopy.cta.startFree);
  setText(".center-action .button-secondary", selectedCopy.cta.startNow);
  setText(".ai-confidence .button-primary", selectedCopy.cta.getStarted);
  setText(".final-cta .button-primary", selectedCopy.cta.getStarted);

  setText(".hero-copy .eyebrow", selectedCopy.hero.eyebrow);
  setText(".hero-copy h1", selectedCopy.hero.title);
  setText(".hero-lede", selectedCopy.hero.lede);
  setText(".assist-line", selectedCopy.hero.assist);
  setText(".hero-support", selectedCopy.hero.support);
  setText(".status-pill", selectedCopy.hero.status);
  setTexts(".route-label", selectedCopy.hero.route);
  setText(".assistant-panel strong", selectedCopy.hero.assistantTitle);
  setText(".assistant-panel p", selectedCopy.hero.assistantText);
  setText(".confirmation-row span", selectedCopy.hero.confirmation);
  setText(".confirmation-row strong", selectedCopy.hero.ready);

  setTexts(".metric-chip", selectedCopy.metrics);

  setText("#process .section-heading .eyebrow", selectedCopy.process.eyebrow);
  setText("#process .section-heading h2", selectedCopy.process.title);
  selectedCopy.process.steps.forEach((step, index) => {
    const card = document.querySelectorAll(".step-card")[index];
    card?.querySelector("h3") && (card.querySelector("h3").textContent = step.title);
    card?.querySelector("p") && (card.querySelector("p").textContent = step.body);
  });
  setText(".security-note p", selectedCopy.process.security);

  setText("#cases .section-heading .eyebrow", selectedCopy.casesHeading.eyebrow);
  setText("#cases .section-heading h2", selectedCopy.casesHeading.title);
  setText("#cases .section-heading > p:not(.eyebrow)", selectedCopy.casesHeading.body);
  selectedCopy.cases.forEach((caseCopy, index) => {
    const card = cards[index];
    if (!card) return;
    setTextIn(card, ".case-kicker", caseCopy.kicker);
    setTextIn(card, "h3", caseCopy.title);
    setTextIn(card, ".case-objective", caseCopy.objective);
    const directParagraphs = card.querySelectorAll(".case-content > p");
    if (directParagraphs[2]) directParagraphs[2].textContent = caseCopy.body;
    const details = card.querySelectorAll("details");
    if (details[0]) {
      setTextIn(details[0], "summary", caseCopy.workTitle);
      setTextsIn(details[0], "li", caseCopy.work);
    }
    if (details[1]) {
      setTextIn(details[1], "summary", caseCopy.outcomeTitle);
      setTextIn(details[1], "p", caseCopy.outcome);
    }
  });

  setText(".ai-confidence .eyebrow", selectedCopy.ai.eyebrow);
  setText(".ai-confidence h3", selectedCopy.ai.title);
  setText(".ai-confidence > p", selectedCopy.ai.body);

  setText("#comparison .section-heading .eyebrow", selectedCopy.comparison.eyebrow);
  setText("#comparison .section-heading h2", selectedCopy.comparison.title);
  setText(".comparison-column.standard h3", selectedCopy.comparison.standardTitle);
  setTexts(".comparison-column.standard li", selectedCopy.comparison.standard);
  setText(".comparison-column.amani h3", selectedCopy.comparison.amaniTitle);
  setTexts(".comparison-column.amani li", selectedCopy.comparison.amani);

  setText("#questions .section-heading .eyebrow", selectedCopy.faqHeading.eyebrow);
  setText("#questions .section-heading h2", selectedCopy.faqHeading.title);
  document.querySelectorAll(".faq-list details").forEach((detail, index) => {
    const question = selectedCopy.faq[index];
    if (!question) return;
    setTextIn(detail, "summary", question[0]);
    setTextIn(detail, "p", question[1]);
  });

  setText(".final-cta .eyebrow", selectedCopy.finalCta.eyebrow);
  setText(".final-cta h2", selectedCopy.finalCta.title);
  setTexts(".site-footer p", selectedCopy.footer);

  localStorage.setItem("amani-language", selectedCopy.lang);
}

function setTextIn(root, selector, value) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function setTextsIn(root, selector, values) {
  root.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setActiveCase(index) {
  activeIndex = Math.max(0, Math.min(index, cards.length - 1));

  cards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === activeIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeIndex);
    dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
  });
}

function scrollToCase(index) {
  if (!slider || !cards[index]) return;
  slider.scrollTo({
    left: cards[index].offsetLeft - slider.offsetLeft,
    behavior: "smooth",
  });
  setActiveCase(index);
}

function updateActiveFromScroll() {
  if (!slider || !cards.length) return;

  const sliderLeft = slider.scrollLeft;
  const nearest = cards.reduce(
    (closest, card, index) => {
      const distance = Math.abs(card.offsetLeft - slider.offsetLeft - sliderLeft);
      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY },
  );

  setActiveCase(nearest.index);
}

if (slider) {
  slider.addEventListener("scroll", () => {
    if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    scrollFrame = window.requestAnimationFrame(updateActiveFromScroll);
  });

  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToCase(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToCase(activeIndex - 1);
    }
  });
}

prevButton?.addEventListener("click", () => scrollToCase(activeIndex - 1));
nextButton?.addEventListener("click", () => scrollToCase(activeIndex + 1));

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    scrollToCase(Number(dot.dataset.dot));
  });
});

languageSwitcher?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const urlLanguage = pageParams.get("lang");
const defaultLanguage = document.body.dataset.defaultLanguage;
const savedLanguage = localStorage.getItem("amani-language");
const initialLanguage = copy[urlLanguage]
  ? urlLanguage
  : copy[defaultLanguage]
    ? defaultLanguage
    : copy[savedLanguage]
      ? savedLanguage
      : "en";
if (languageSwitcher) {
  const hasSwitcherOption = Array.from(languageSwitcher.options).some(
    (option) => option.value === initialLanguage,
  );
  languageSwitcher.closest(".language-picker")?.classList.toggle("is-fixed-language", !hasSwitcherOption);
  if (hasSwitcherOption) languageSwitcher.value = initialLanguage;
}
applyLanguage(initialLanguage);
if (initialLanguage === "ru") {
  setText(".language-picker-label", "Русская версия");
}
setActiveCase(0);
