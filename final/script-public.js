/* =========================================================
   AM Landing — interaction + i18n (en, ar, hi, ha, tr, id)
   ========================================================= */

(() => {
  "use strict";

  /* ---------------- Translations ---------------- */

  const COPY = {
    en: {
      meta: { title: "AM | Invoice-Based International Payments" },
      nav: { howItWorks: "How it works", cases: "Use cases", comparison: "Comparison", questions: "Questions" },
      cta: { startFree: "Start for Free", getStarted: "Get Started", startNow: "Start Now" },
      hero: {
        badge: "Structured international payments",
        title1: "Invoice-based international payments",
        title2: "with a clear route and less stress.",
        lede: "Make payments with payout to the recipient's bank account, fully traceable transaction status, and supporting transaction documents.",
        assist: "Start using the service now and receive guidance from your personal AI assistant.",
        support: "AM helps you make international invoice payments, pay for overseas services, and settle other obligations. Before you confirm, you see the fee, and the payout is sent to the recipient's bank account."
      },
      preview: {
        statusPill: "Fee visible before confirmation",
        route0: "Invoice details", route1: "Documents", route2: "Bank payout",
        assistantTitle: "AI guidance inside the interface",
        assistantText: "Prompts for the next step, document checks, and payment-route clarity.",
        paymentConfirmation: "Payment confirmation", ready: "Ready"
      },
      metrics: [
        { strong: "180+", span: "countries" },
        { strong: "Clear route", span: "for every payment" },
        { strong: "In-app support", span: "inside the interface" },
        { strong: "Confirmation", span: "documents kept" }
      ],
      process: {
        eyebrow: "How the service works",
        title: "A calm route from invoice details to bank-account payout.",
        s0: { title: "Upload the payment details", body: "Enter the recipient, amount, currency, and payment purpose. If you have questions, the AI assistant explains what information is needed and what comes next." },
        s1: { title: "Attach documents and review the summary", body: "Add documents related to the transaction or required for verification. Before confirming, you see the service fee and the main transfer details." },
        s2: { title: "Confirm the transfer", body: "After confirmation, the payment moves forward through the selected route. You keep the confirmation and documents confirming the payment execution." },
        security: "Security is our key to your transfers."
      },
      cases: {
        eyebrow: "Real payment tasks",
        title: "How your international payment works in everyday business and personal scenarios.",
        sub: "From verification and document upload to payout to the recipient's bank account and payment confirmation, each scenario shows the same clear route through AM."
      },
      case: {
        howSummary: "How the payment works",
        outcomeSummary: "Outcome",
        0: {
          flag: "UAE · International investment",
          name: "Ahmed, Founder of an International Investment Company",
          objective: "Makes payments to employees in other countries through structured international payments.",
          body: "Ahmed needs official payments without a long intermediary-bank chain, with a clear route, confirmation, and direct payouts to bank accounts.",
          how: [
            "The AI assistant guides him directly inside the AM interface.",
            "The company completes KYB, uploads payment details, and attaches documents.",
            "Before confirmation, Ahmed sees the fee and transfers the equivalent amount in USDT.",
            "Payouts are sent to recipients' bank accounts and Ahmed receives confirmation."
          ],
          outcome: "Recipients get fiat payouts to bank accounts. Ahmed keeps the payment status, confirmation, and payment-execution documents."
        },
        1: {
          flag: "Nigeria · Trade and supply",
          name: "Musa, Owner of a Trading Company",
          objective: "Pays for a shipment of goods through a structured international payment.",
          body: "Musa needs to pay invoices on time, avoid delays from a prolonged banking chain, and keep supplier trust with clear status and payment confirmation.",
          how: [
            "The AI assistant guides each step directly in the AM interface.",
            "The company completes KYB, uploads payment information, and attaches shipment documents.",
            "Before confirming, Musa sees the fee and transfers the equivalent amount in USDT.",
            "The supplier receives payout to a bank account, and Musa receives confirmation."
          ],
          outcome: "The supplier receives a standard bank-account payout while Musa keeps status, confirmation, and payment-execution documents."
        },
        2: {
          flag: "India · Education abroad",
          name: "Sunita, Mother of a Student",
          objective: "Pays for her child's education abroad through a clear and verifiable international payment.",
          body: "Sunita wants step-by-step guidance, transparent status updates, supporting documents, and minimal banking bureaucracy.",
          how: [
            "The AI assistant guides her directly within the AM interface.",
            "Sunita completes KYC, uploads payment details, and attaches verification documents.",
            "Before confirmation, she sees the service fee and transfers the equivalent amount in USDT.",
            "The educational institution receives payout to its bank account."
          ],
          outcome: "Sunita receives payment status, confirmation, and documents confirming the payment execution."
        },
        3: {
          flag: "Turkey · Logistics operations",
          name: "Mehmet, Operations Director of a Logistics Company",
          objective: "Pays operational invoices for logistics and services through structured international payment.",
          body: "Mehmet manages expenses that keep the business running: logistics, support services, and service invoices. He needs a clear route and transparent outcome.",
          how: [
            "The AI assistant guides him through each step in the AM interface.",
            "The company completes KYB, uploads payment information, and attaches documents.",
            "Before confirmation, Mehmet sees the service fee and transfers the equivalent amount in USDT.",
            "The payout is delivered to the recipient's bank account."
          ],
          outcome: "Mehmet keeps payment confirmation, status visibility, and documents confirming execution for the team."
        },
        4: {
          flag: "Indonesia · Expat payments",
          name: "Michael, an Australian Expat Living in Indonesia",
          objective: "Pays official expenses such as medical bills and rent through clear international payments.",
          body: "Michael needs important day-to-day payments to move smoothly and on time, with clear status visibility, minimal risk, and proper documentation.",
          how: [
            "The AI assistant guides him inside the AM interface.",
            "Michael completes KYC, uploads payment information, and attaches documents.",
            "Before confirmation, he sees the service fee and transfers the equivalent amount in USDT.",
            "The clinic or landlord receives payout to their bank account."
          ],
          outcome: "Michael keeps the payment status, confirmation, and documents needed for his records."
        }
      },
      ai: {
        eyebrow: "Support built into the route",
        title: "AI guidance is there to reduce friction, not to take over the product story.",
        body: "We intentionally built the AI assistant into the platform to simplify operations, guide users through each step, and provide answers throughout the payment process. After registration, users enter the interface immediately and start processing payments with full AI guidance."
      },
      compare: {
        eyebrow: "A simpler route",
        title: "Why the payment route through AM is simpler than SWIFT and bank transfers.",
        bad: { title: "Standard bank transfer", items: ["3–7 business days", "Several correspondent banks", "Hidden fees along the route", "No clear payment status during the transfer"] },
        good: { title: "Payment route through AM", items: ["Most payments are completed within 1 business day", "Payout to the recipient's bank account", "The fee is visible before confirmation", "A clear payment path with confirmation documents"] }
      },
      faq: {
        eyebrow: "Questions",
        title: "Answers before you start.",
        0: { q: "Is it really free?", a: "Yes. Access to the platform and the ability to test the service with a personal AI assistant are completely free of charge. We provide access to a tool that solves a real problem for businesses." },
        1: { q: "Does my supplier need to do anything differently?", a: "No. Your supplier receives a standard local bank transfer in their own currency: USD, EUR, SGD, GBP, or another supported currency. They do not need a special wallet or any special setup." },
        2: { q: "How do compliance checks work?", a: "AM is designed for lawful invoice-based payments and document-backed obligations. Availability depends on the corridor, verification, and review of the specific transaction. This does not constitute legal or financial advice; consult your accountant or legal advisor for your situation." },
        3: { q: "How much can we realistically save?", a: "Most banks charge 3–6% for international transfers once fees and FX markups are included. The service fee is only a small fraction of that amount." },
        4: { q: "How long does settlement take?", a: "In most corridors, settlement is completed within 1 business day. SWIFT usually takes 3–5 days, and those delays can impact supplier relationships and project timelines." }
      },
      final: { eyebrow: "Start with clarity", title: "Begin with a guided payment route, visible fees, and confirmation documents." },
      footer: { line1: "AM · Invoice-based international payment support", line2: "Designed for clear routes, careful documentation, and calm financial operations." }
    },

    ar: {
      meta: { title: "AM | المدفوعات الدولية القائمة على الفواتير" },
      nav: { howItWorks: "كيف يعمل", cases: "حالات الاستخدام", comparison: "المقارنة", questions: "الأسئلة" },
      cta: { startFree: "ابدأ مجانًا", getStarted: "ابدأ الآن", startNow: "ابدأ الآن" },
      hero: {
        badge: "مدفوعات دولية منظمة",
        title1: "مدفوعات دولية قائمة على الفواتير",
        title2: "بمسار واضح وأقل توترًا.",
        lede: "نفّذ مدفوعاتك مع تحويلها إلى الحساب البنكي للمستلم، مع تتبّع كامل لحالة المعاملة ووثائق داعمة لكل عملية.",
        assist: "ابدأ باستخدام الخدمة الآن واحصل على إرشادات من مساعدك الشخصي بالذكاء الاصطناعي.",
        support: "تساعدك AM على دفع الفواتير الدولية، وتسديد قيمة الخدمات في الخارج، والوفاء بالتزامات أخرى. قبل التأكيد، ترى الرسوم بوضوح، ويُحوَّل المبلغ إلى الحساب البنكي للمستلم."
      },
      preview: {
        statusPill: "الرسوم ظاهرة قبل التأكيد",
        route0: "بيانات الفاتورة", route1: "المستندات", route2: "التحويل البنكي",
        assistantTitle: "إرشاد ذكي داخل الواجهة",
        assistantText: "توجيه للخطوة التالية، فحص المستندات، ووضوح مسار الدفع.",
        paymentConfirmation: "تأكيد الدفع", ready: "جاهز"
      },
      metrics: [
        { strong: "+180", span: "دولة" },
        { strong: "مسار واضح", span: "لكل عملية دفع" },
        { strong: "دعم داخل التطبيق", span: "ضمن الواجهة" },
        { strong: "وثائق تأكيد", span: "محفوظة لك" }
      ],
      process: {
        eyebrow: "كيف تعمل الخدمة",
        title: "مسار هادئ من بيانات الفاتورة إلى الحساب البنكي للمستلم.",
        s0: { title: "أدخل بيانات الدفع", body: "أدخل المستلم، المبلغ، العملة، والغرض من الدفع. وإذا كانت لديك أسئلة، يشرح لك المساعد الذكي ما هو مطلوب وما الخطوة التالية." },
        s1: { title: "أرفق المستندات وراجع الملخص", body: "أضف المستندات المتعلقة بالمعاملة أو المطلوبة للتحقق. قبل التأكيد، تطّلع على رسوم الخدمة وتفاصيل التحويل الرئيسية." },
        s2: { title: "أكّد التحويل", body: "بعد التأكيد، يسير الدفع عبر المسار المختار. وتحتفظ بالتأكيد والمستندات التي تثبت تنفيذ العملية." },
        security: "الأمان هو ركيزة كل تحويل ننفّذه لك."
      },
      cases: {
        eyebrow: "مهام دفع حقيقية",
        title: "كيف يعمل تحويلك الدولي في سيناريوهات الأعمال والحياة اليومية.",
        sub: "من التحقق ورفع المستندات وصولًا إلى التحويل إلى الحساب البنكي للمستلم وتأكيد الدفع، يعرض كل سيناريو المسار الواضح ذاته عبر AM."
      },
      case: {
        howSummary: "كيف يجري الدفع",
        outcomeSummary: "النتيجة",
        0: {
          flag: "الإمارات · استثمار دولي",
          name: "أحمد، مؤسس شركة استثمار دولي",
          objective: "يدفع رواتب موظفيه في دول أخرى عبر مدفوعات دولية منظمة.",
          body: "يحتاج أحمد إلى مدفوعات رسمية دون سلسلة طويلة من البنوك الوسيطة، بمسار واضح وتأكيد وتحويلات مباشرة إلى الحسابات البنكية.",
          how: [
            "يرافقه المساعد الذكي خطوة بخطوة داخل واجهة AM.",
            "تستكمل الشركة إجراءات KYB، وترفع بيانات الدفع، وترفق المستندات.",
            "قبل التأكيد، يرى أحمد الرسوم ثم يحوّل ما يعادل المبلغ بـ USDT.",
            "تُرسل التحويلات إلى الحسابات البنكية للمستلمين، ويتلقى أحمد تأكيد التنفيذ."
          ],
          outcome: "يستلم الموظفون أموالهم بالعملة المحلية على حساباتهم البنكية، ويحتفظ أحمد بحالة الدفع والتأكيد ومستندات التنفيذ."
        },
        1: {
          flag: "نيجيريا · تجارة وتوريد",
          name: "موسى، صاحب شركة تجارية",
          objective: "يدفع قيمة شحنة بضائع عبر تحويل دولي منظم.",
          body: "يحتاج موسى إلى تسديد الفواتير في موعدها، وتجنّب التأخير الناتج عن سلسلة البنوك المراسلة، والحفاظ على ثقة المورّدين بحالة دفع واضحة وتأكيد فوري.",
          how: [
            "يرشد المساعد الذكي كل خطوة داخل واجهة AM.",
            "تستكمل الشركة إجراءات KYB، وترفع بيانات الدفع، وترفق مستندات الشحنة.",
            "قبل التأكيد، يرى موسى الرسوم ثم يحوّل المبلغ المعادل بـ USDT.",
            "يستلم المورّد التحويل على حسابه البنكي، ويتلقى موسى تأكيد التنفيذ."
          ],
          outcome: "يحصل المورّد على تحويل بنكي عادي، ويحتفظ موسى بحالة العملية وتأكيدها ومستندات التنفيذ."
        },
        2: {
          flag: "الهند · تعليم في الخارج",
          name: "سونيتا، أم لطالب يدرس في الخارج",
          objective: "تسدد مصاريف تعليم ابنها في الخارج عبر تحويل دولي واضح وقابل للتحقق.",
          body: "تريد سونيتا إرشادًا خطوة بخطوة، وحالة شفافة، ومستندات داعمة، مع أقل قدر من البيروقراطية البنكية.",
          how: [
            "يرافقها المساعد الذكي مباشرة داخل واجهة AM.",
            "تستكمل سونيتا إجراءات KYC، وترفع بيانات الدفع، وترفق مستندات التحقق.",
            "قبل التأكيد، ترى رسوم الخدمة وتحوّل المبلغ المعادل بـ USDT.",
            "تستلم الجامعة التحويل على حسابها البنكي."
          ],
          outcome: "تحصل سونيتا على حالة الدفع، والتأكيد، والمستندات التي تثبت تنفيذ العملية."
        },
        3: {
          flag: "تركيا · عمليات لوجستية",
          name: "محمد، مدير عمليات في شركة لوجستية",
          objective: "يدفع فواتير التشغيل في اللوجستيات والخدمات عبر تحويل دولي منظم.",
          body: "يدير محمد مصاريف تُبقي العمل سائرًا: لوجستيات، خدمات داعمة، فواتير خدمات. وهو يحتاج إلى مسار واضح ونتيجة شفافة.",
          how: [
            "يرشده المساعد الذكي عبر كل خطوة في واجهة AM.",
            "تستكمل الشركة إجراءات KYB، وترفع بيانات الدفع، وترفق المستندات.",
            "قبل التأكيد، يرى محمد رسوم الخدمة ويحوّل المبلغ المعادل بـ USDT.",
            "يصل التحويل إلى الحساب البنكي للمستلم."
          ],
          outcome: "يحتفظ محمد بتأكيد الدفع وحالة العملية ومستندات التنفيذ لأرشيف الفريق."
        },
        4: {
          flag: "إندونيسيا · مدفوعات المغترب",
          name: "مايكل، مغترب أسترالي يقيم في إندونيسيا",
          objective: "يدفع مصاريفه الرسمية كالفواتير الطبية والإيجار عبر مدفوعات دولية واضحة.",
          body: "يحتاج مايكل إلى تنفيذ مدفوعاته اليومية المهمة بسلاسة وفي الوقت المناسب، مع حالة واضحة، ومخاطر أقل، ووثائق نظامية.",
          how: [
            "يرافقه المساعد الذكي داخل واجهة AM.",
            "يستكمل مايكل إجراءات KYC، ويرفع بيانات الدفع، ويرفق المستندات.",
            "قبل التأكيد، يرى رسوم الخدمة ويحوّل المبلغ المعادل بـ USDT.",
            "تستلم العيادة أو صاحب العقار التحويل على حسابهم البنكي."
          ],
          outcome: "يحتفظ مايكل بحالة الدفع والتأكيد والمستندات اللازمة لسجلاته."
        }
      },
      ai: {
        eyebrow: "دعم مدمج في المسار",
        title: "الذكاء الاصطناعي هنا ليقلل الاحتكاك، لا ليصبح هو القصة.",
        body: "بنينا المساعد الذكي داخل المنصة عمدًا لتبسيط العمليات، وإرشاد المستخدمين خطوة بخطوة، وتقديم الإجابات طوال رحلة الدفع. بعد التسجيل، يدخل المستخدم الواجهة فورًا ويبدأ في تنفيذ المدفوعات بإرشاد كامل من الذكاء الاصطناعي."
      },
      compare: {
        eyebrow: "مسار أبسط",
        title: "لماذا مسار الدفع عبر AM أبسط من SWIFT والتحويلات البنكية.",
        bad: { title: "التحويل البنكي التقليدي", items: ["من 3 إلى 7 أيام عمل", "عدة بنوك مراسلة في الطريق", "رسوم خفية على طول المسار", "غياب حالة دفع واضحة أثناء التحويل"] },
        good: { title: "مسار الدفع عبر AM", items: ["معظم المدفوعات تُنجَز خلال يوم عمل واحد", "تحويل إلى الحساب البنكي للمستلم", "الرسوم ظاهرة قبل التأكيد", "مسار دفع واضح مع مستندات تأكيد"] }
      },
      faq: {
        eyebrow: "أسئلة",
        title: "إجابات قبل أن تبدأ.",
        0: { q: "هل الخدمة مجانية فعلًا؟", a: "نعم. الوصول إلى المنصة وتجربة الخدمة مع مساعد ذكي شخصي مجانيان تمامًا. نحن نمنحك أداة تحلّ مشكلة حقيقية في الأعمال." },
        1: { q: "هل على المورّد القيام بشيء مختلف؟", a: "لا. يتلقى المورّد تحويلًا بنكيًا محليًا عاديًا بعملته الخاصة: دولار أمريكي، يورو، دولار سنغافوري، جنيه إسترليني، أو أي عملة أخرى مدعومة. لا حاجة إلى محفظة خاصة أو إعدادات إضافية." },
        2: { q: "كيف تعمل عمليات الامتثال؟", a: "AM مصمَّمة للمدفوعات المشروعة القائمة على الفواتير والالتزامات الموثّقة. يعتمد توفّر الخدمة على الممر والتحقق وفحص المعاملة بعينها. هذا ليس استشارة قانونية أو مالية؛ يُرجى استشارة محاسبك أو مستشارك القانوني وفق حالتك." },
        3: { q: "كم يمكن أن نوفّر فعلًا؟", a: "تفرض معظم البنوك من 3% إلى 6% على التحويلات الدولية بعد إضافة الرسوم وفروق الصرف. أما رسوم الخدمة لدينا فهي جزء صغير من ذلك." },
        4: { q: "كم تستغرق التسوية؟", a: "في معظم الممرات، تكتمل التسوية خلال يوم عمل واحد. أما SWIFT فعادةً تأخذ من 3 إلى 5 أيام، وقد تؤثّر هذه الفترات على علاقاتك مع المورّدين وجداول مشاريعك." }
      },
      final: { eyebrow: "ابدأ بوضوح", title: "ابدأ بمسار دفع مُرشَد، ورسوم ظاهرة، ومستندات تأكيد." },
      footer: { line1: "AM · دعم المدفوعات الدولية القائمة على الفواتير", line2: "صُمِّمت من أجل مسارات واضحة، وتوثيق دقيق، وعمليات مالية هادئة." }
    },

    hi: {
      meta: { title: "AM | इनवॉइस आधारित अंतरराष्ट्रीय भुगतान" },
      nav: { howItWorks: "यह कैसे काम करता है", cases: "उपयोग के मामले", comparison: "तुलना", questions: "प्रश्न" },
      cta: { startFree: "मुफ्त में शुरू करें", getStarted: "शुरू करें", startNow: "अभी शुरू करें" },
      hero: {
        badge: "सुव्यवस्थित अंतरराष्ट्रीय भुगतान",
        title1: "इनवॉइस आधारित अंतरराष्ट्रीय भुगतान",
        title2: "स्पष्ट मार्ग के साथ, बिना तनाव।",
        lede: "भुगतान सीधे प्राप्तकर्ता के बैंक खाते में भेजें, हर लेन-देन की स्थिति देखें और सहायक दस्तावेज़ रखें।",
        assist: "अभी सेवा शुरू करें और अपने व्यक्तिगत AI सहायक से मार्गदर्शन प्राप्त करें।",
        support: "AM आपकी अंतरराष्ट्रीय इनवॉइस भुगतान, विदेशी सेवाओं का भुगतान, और अन्य दायित्वों के निपटान में मदद करता है। पुष्टि से पहले आप शुल्क देखते हैं, और भुगतान सीधे प्राप्तकर्ता के बैंक खाते में जाता है।"
      },
      preview: {
        statusPill: "पुष्टि से पहले शुल्क दिखता है",
        route0: "इनवॉइस विवरण", route1: "दस्तावेज़", route2: "बैंक भुगतान",
        assistantTitle: "इंटरफ़ेस के भीतर AI मार्गदर्शन",
        assistantText: "अगले कदम के संकेत, दस्तावेज़ जाँच, और भुगतान मार्ग की स्पष्टता।",
        paymentConfirmation: "भुगतान की पुष्टि", ready: "तैयार"
      },
      metrics: [
        { strong: "180+", span: "देश" },
        { strong: "स्पष्ट मार्ग", span: "हर भुगतान के लिए" },
        { strong: "इन-ऐप सहायता", span: "इंटरफ़ेस के भीतर" },
        { strong: "पुष्टि", span: "दस्तावेज़ सुरक्षित" }
      ],
      process: {
        eyebrow: "सेवा कैसे काम करती है",
        title: "इनवॉइस विवरण से बैंक खाते में भुगतान तक — एक शांत मार्ग।",
        s0: { title: "भुगतान विवरण अपलोड करें", body: "प्राप्तकर्ता, राशि, मुद्रा, और भुगतान का उद्देश्य दर्ज करें। यदि कोई प्रश्न हो, AI सहायक समझाएगा कि क्या जानकारी चाहिए और आगे क्या होगा।" },
        s1: { title: "दस्तावेज़ संलग्न करें और सारांश देखें", body: "लेन-देन से संबंधित या सत्यापन के लिए आवश्यक दस्तावेज़ जोड़ें। पुष्टि से पहले, आप सेवा शुल्क और मुख्य ट्रांसफ़र विवरण देखेंगे।" },
        s2: { title: "ट्रांसफ़र की पुष्टि करें", body: "पुष्टि के बाद भुगतान चुने हुए मार्ग से आगे बढ़ता है। आप पुष्टि और निष्पादन के दस्तावेज़ अपने पास रखते हैं।" },
        security: "सुरक्षा हमारे हर ट्रांसफ़र का आधार है।"
      },
      cases: {
        eyebrow: "वास्तविक भुगतान कार्य",
        title: "रोज़मर्रा के व्यावसायिक और व्यक्तिगत मामलों में आपका अंतरराष्ट्रीय भुगतान कैसे काम करता है।",
        sub: "सत्यापन और दस्तावेज़ अपलोड से लेकर प्राप्तकर्ता के बैंक खाते में भुगतान और पुष्टि तक — हर परिदृश्य AM के माध्यम से वही स्पष्ट मार्ग दिखाता है।"
      },
      case: {
        howSummary: "भुगतान कैसे होता है",
        outcomeSummary: "परिणाम",
        0: {
          flag: "UAE · अंतरराष्ट्रीय निवेश",
          name: "अहमद, अंतरराष्ट्रीय निवेश कंपनी के संस्थापक",
          objective: "सुव्यवस्थित अंतरराष्ट्रीय भुगतान के माध्यम से अन्य देशों में कर्मचारियों को भुगतान करते हैं।",
          body: "अहमद को लंबी मध्यस्थ-बैंक श्रृंखला के बिना आधिकारिक भुगतान चाहिए — स्पष्ट मार्ग, पुष्टि, और सीधे बैंक खातों में ट्रांसफ़र के साथ।",
          how: [
            "AI सहायक उन्हें AM इंटरफ़ेस में सीधे मार्गदर्शन करता है।",
            "कंपनी KYB पूरा करती है, भुगतान विवरण अपलोड करती है, और दस्तावेज़ संलग्न करती है।",
            "पुष्टि से पहले, अहमद शुल्क देखते हैं और USDT में समकक्ष राशि ट्रांसफ़र करते हैं।",
            "भुगतान प्राप्तकर्ताओं के बैंक खातों में पहुँचता है और अहमद को पुष्टि मिलती है।"
          ],
          outcome: "प्राप्तकर्ता अपने बैंक खातों में फ़ियाट भुगतान पाते हैं। अहमद के पास भुगतान की स्थिति, पुष्टि और निष्पादन दस्तावेज़ रहते हैं।"
        },
        1: {
          flag: "नाइजीरिया · व्यापार और आपूर्ति",
          name: "मूसा, ट्रेडिंग कंपनी के मालिक",
          objective: "सुव्यवस्थित अंतरराष्ट्रीय भुगतान के माध्यम से माल की खेप का भुगतान करते हैं।",
          body: "मूसा को इनवॉइस समय पर भरने हैं, लंबी बैंकिंग श्रृंखला के कारण होने वाली देरी से बचना है, और स्पष्ट स्थिति व पुष्टि के साथ आपूर्तिकर्ता का विश्वास बनाए रखना है।",
          how: [
            "AI सहायक AM इंटरफ़ेस में हर कदम का मार्गदर्शन करता है।",
            "कंपनी KYB पूरा करती है, भुगतान जानकारी अपलोड करती है, और शिपमेंट दस्तावेज़ संलग्न करती है।",
            "पुष्टि से पहले, मूसा शुल्क देखते हैं और USDT में समकक्ष राशि ट्रांसफ़र करते हैं।",
            "आपूर्तिकर्ता को बैंक खाते में भुगतान मिलता है, और मूसा को पुष्टि मिलती है।"
          ],
          outcome: "आपूर्तिकर्ता को सामान्य बैंक ट्रांसफ़र मिलता है, जबकि मूसा के पास स्थिति, पुष्टि और निष्पादन दस्तावेज़ रहते हैं।"
        },
        2: {
          flag: "भारत · विदेश में शिक्षा",
          name: "सुनीता, एक छात्र की माँ",
          objective: "एक स्पष्ट और सत्यापन-योग्य अंतरराष्ट्रीय भुगतान के माध्यम से अपने बच्चे की विदेशी शिक्षा का भुगतान करती हैं।",
          body: "सुनीता को चरण-दर-चरण मार्गदर्शन, पारदर्शी स्थिति, सहायक दस्तावेज़ और न्यूनतम बैंकिंग औपचारिकताएँ चाहिए।",
          how: [
            "AI सहायक AM इंटरफ़ेस में उनका सीधे मार्गदर्शन करता है।",
            "सुनीता KYC पूरा करती हैं, भुगतान विवरण अपलोड करती हैं, और सत्यापन दस्तावेज़ संलग्न करती हैं।",
            "पुष्टि से पहले, वह सेवा शुल्क देखती हैं और USDT में समकक्ष राशि ट्रांसफ़र करती हैं।",
            "शैक्षणिक संस्थान को उसके बैंक खाते में भुगतान मिलता है।"
          ],
          outcome: "सुनीता को भुगतान की स्थिति, पुष्टि और निष्पादन की पुष्टि करने वाले दस्तावेज़ मिलते हैं।"
        },
        3: {
          flag: "तुर्की · लॉजिस्टिक्स संचालन",
          name: "मेहमेत, एक लॉजिस्टिक्स कंपनी के संचालन निदेशक",
          objective: "सुव्यवस्थित अंतरराष्ट्रीय भुगतान के माध्यम से लॉजिस्टिक्स और सेवाओं के परिचालन इनवॉइस का भुगतान करते हैं।",
          body: "मेहमेत व्यापार को चलाने वाले खर्चों का प्रबंधन करते हैं: लॉजिस्टिक्स, सहायक सेवाएँ, और सेवा इनवॉइस। उन्हें स्पष्ट मार्ग और पारदर्शी परिणाम चाहिए।",
          how: [
            "AI सहायक AM इंटरफ़ेस में हर कदम पर उनका मार्गदर्शन करता है।",
            "कंपनी KYB पूरा करती है, भुगतान जानकारी अपलोड करती है, और दस्तावेज़ संलग्न करती है।",
            "पुष्टि से पहले, मेहमेत सेवा शुल्क देखते हैं और USDT में समकक्ष राशि ट्रांसफ़र करते हैं।",
            "भुगतान प्राप्तकर्ता के बैंक खाते में पहुँचता है।"
          ],
          outcome: "मेहमेत के पास टीम के लिए भुगतान की पुष्टि, स्थिति दृश्यता और निष्पादन के दस्तावेज़ रहते हैं।"
        },
        4: {
          flag: "इंडोनेशिया · प्रवासी भुगतान",
          name: "माइकल, इंडोनेशिया में रहने वाला ऑस्ट्रेलियाई प्रवासी",
          objective: "स्पष्ट अंतरराष्ट्रीय भुगतान के माध्यम से चिकित्सा बिल और किराए जैसे आधिकारिक खर्चों का भुगतान करते हैं।",
          body: "माइकल को रोज़मर्रा के महत्वपूर्ण भुगतान सहजता से और समय पर करने हैं — स्पष्ट स्थिति, न्यूनतम जोखिम और उचित दस्तावेज़ों के साथ।",
          how: [
            "AI सहायक उन्हें AM इंटरफ़ेस में मार्गदर्शन करता है।",
            "माइकल KYC पूरा करते हैं, भुगतान जानकारी अपलोड करते हैं, और दस्तावेज़ संलग्न करते हैं।",
            "पुष्टि से पहले, वह सेवा शुल्क देखते हैं और USDT में समकक्ष राशि ट्रांसफ़र करते हैं।",
            "क्लिनिक या मकान-मालिक को उसके बैंक खाते में भुगतान मिलता है।"
          ],
          outcome: "माइकल के पास भुगतान की स्थिति, पुष्टि और रिकॉर्ड के लिए ज़रूरी दस्तावेज़ रहते हैं।"
        }
      },
      ai: {
        eyebrow: "मार्ग में बनी हुई सहायता",
        title: "AI मार्गदर्शन घर्षण कम करने के लिए है, उत्पाद की कहानी अपने हाथ में लेने के लिए नहीं।",
        body: "हमने AI सहायक को जानबूझकर प्लेटफ़ॉर्म में बनाया है ताकि संचालन सरल हो, उपयोगकर्ताओं को हर कदम पर मार्गदर्शन मिले, और पूरी भुगतान प्रक्रिया में उत्तर मिलें। पंजीकरण के बाद उपयोगकर्ता तुरंत इंटरफ़ेस में प्रवेश करते हैं और पूरी AI सहायता के साथ भुगतान शुरू कर देते हैं।"
      },
      compare: {
        eyebrow: "सरल मार्ग",
        title: "क्यों AM के माध्यम से भुगतान मार्ग SWIFT और बैंक ट्रांसफ़र से सरल है।",
        bad: { title: "मानक बैंक ट्रांसफ़र", items: ["3–7 कार्य दिवस", "कई संवादी बैंक", "मार्ग में छिपे शुल्क", "ट्रांसफ़र के दौरान स्पष्ट स्थिति नहीं"] },
        good: { title: "AM के माध्यम से भुगतान मार्ग", items: ["अधिकांश भुगतान 1 कार्य दिवस में पूर्ण", "प्राप्तकर्ता के बैंक खाते में सीधा भुगतान", "पुष्टि से पहले शुल्क दिखता है", "पुष्टि दस्तावेज़ों के साथ स्पष्ट भुगतान मार्ग"] }
      },
      faq: {
        eyebrow: "प्रश्न",
        title: "शुरू करने से पहले के उत्तर।",
        0: { q: "क्या यह वास्तव में मुफ्त है?", a: "हाँ। प्लेटफ़ॉर्म तक पहुँच और व्यक्तिगत AI सहायक के साथ सेवा का परीक्षण पूरी तरह से मुफ्त है। हम ऐसा उपकरण प्रदान करते हैं जो व्यवसायों की वास्तविक समस्या हल करता है।" },
        1: { q: "क्या मेरे आपूर्तिकर्ता को कुछ अलग करना होगा?", a: "नहीं। आपके आपूर्तिकर्ता को उसकी अपनी मुद्रा में एक मानक स्थानीय बैंक ट्रांसफ़र मिलता है: USD, EUR, SGD, GBP, या कोई अन्य समर्थित मुद्रा। उन्हें किसी विशेष वॉलेट या सेटअप की आवश्यकता नहीं है।" },
        2: { q: "अनुपालन जाँच कैसे काम करती है?", a: "AM को इनवॉइस आधारित वैध भुगतान और दस्तावेज़-समर्थित दायित्वों के लिए डिज़ाइन किया गया है। उपलब्धता कॉरिडोर, सत्यापन और विशिष्ट लेन-देन की समीक्षा पर निर्भर करती है। यह क़ानूनी या वित्तीय सलाह नहीं है; अपनी स्थिति के अनुसार अपने अकाउंटेंट या क़ानूनी सलाहकार से परामर्श करें।" },
        3: { q: "हम वास्तव में कितनी बचत कर सकते हैं?", a: "अधिकांश बैंक शुल्क और FX मार्कअप मिलाकर अंतरराष्ट्रीय ट्रांसफ़र पर 3–6% लेते हैं। हमारी सेवा शुल्क उस राशि का एक छोटा सा हिस्सा है।" },
        4: { q: "सेटलमेंट में कितना समय लगता है?", a: "अधिकांश कॉरिडोर में सेटलमेंट 1 कार्य दिवस में पूरा हो जाता है। SWIFT आमतौर पर 3–5 दिन लेता है, और ये देरी आपूर्तिकर्ता संबंधों और परियोजना समय-सीमा को प्रभावित कर सकती है।" }
      },
      final: { eyebrow: "स्पष्टता से शुरू करें", title: "मार्गदर्शित भुगतान मार्ग, दिखने वाले शुल्क और पुष्टि दस्तावेज़ों के साथ शुरू करें।" },
      footer: { line1: "AM · इनवॉइस आधारित अंतरराष्ट्रीय भुगतान सहायता", line2: "स्पष्ट मार्गों, सावधान दस्तावेज़ीकरण और शांत वित्तीय संचालन के लिए डिज़ाइन किया गया।" }
    },

    ha: {
      meta: { title: "AM | Biyan Kuɗi na Ƙasa da Ƙasa bisa Takardun Biyan Kuɗi" },
      nav: { howItWorks: "Yadda yake aiki", cases: "Misalan amfani", comparison: "Kwatanci", questions: "Tambayoyi" },
      cta: { startFree: "Fara Kyauta", getStarted: "Fara", startNow: "Fara Yanzu" },
      hero: {
        badge: "Biyan kuɗi na ƙasa da ƙasa cikin tsari",
        title1: "Biyan kuɗi na ƙasa da ƙasa bisa takardun biyan kuɗi",
        title2: "tare da hanya bayyananna da ƙasa da damuwa.",
        lede: "Yi biyan kuɗi tare da turawa zuwa asusun banki na mai karɓa, bayyananniyar matsayin kowace ma'amala, da takardun tabbatarwa.",
        assist: "Fara amfani da sabis ɗin yanzu ka sami jagora daga mataimakinka na sirri na AI.",
        support: "AM yana taimaka maka biyan takardun biyan kuɗi na ƙasa da ƙasa, biyan sabis na ƙasashen waje, da cika sauran wajibai. Kafin ka tabbatar, kana ganin kuɗin sabis, kuma ana turawa zuwa asusun banki na mai karɓa."
      },
      preview: {
        statusPill: "Kuɗin sabis na bayyana kafin tabbatarwa",
        route0: "Bayanin takardar biyan kuɗi", route1: "Takardu", route2: "Biya zuwa banki",
        assistantTitle: "Jagoran AI a cikin tsarin",
        assistantText: "Shawara don mataki na gaba, duba takardu, da bayyana hanyar biyan kuɗi.",
        paymentConfirmation: "Tabbatar da biyan kuɗi", ready: "Shirye"
      },
      metrics: [
        { strong: "180+", span: "ƙasashe" },
        { strong: "Hanya bayyananna", span: "ga kowane biyan kuɗi" },
        { strong: "Tallafi a app", span: "a cikin tsarin" },
        { strong: "Tabbatarwa", span: "takardu ana ajiye" }
      ],
      process: {
        eyebrow: "Yadda sabis ɗin yake aiki",
        title: "Hanya cikin nutsuwa daga bayanin takardar biyan kuɗi zuwa asusun banki na mai karɓa.",
        s0: { title: "Loda bayanin biyan kuɗi", body: "Shigar da mai karɓa, adadi, kuɗin ƙasa, da dalilin biyan kuɗi. Idan kana da tambaya, mataimakin AI zai bayyana abin da ake buƙata da abin da ke gaba." },
        s1: { title: "Haɗa takardu kuma duba taƙaitaccen bayani", body: "Ƙara takardu masu alaƙa da ma'amala ko waɗanda ake buƙata don tabbatarwa. Kafin tabbatarwa, za ka ga kuɗin sabis da manyan bayanin canja wuri." },
        s2: { title: "Tabbatar da canja wuri", body: "Bayan tabbatarwa, biyan kuɗi yana ci gaba ta hanyar da aka zaɓa. Kana ajiye tabbatarwar da takardun aiwatarwa." },
        security: "Tsaro shi ne mabuɗin canjin wurinka."
      },
      cases: {
        eyebrow: "Ayyukan biyan kuɗi na ainihi",
        title: "Yadda biyan kuɗinka na ƙasa da ƙasa ke aiki a yanayin kasuwanci da na sirri na yau da kullum.",
        sub: "Daga tabbatarwa da loda takardu zuwa biya cikin asusun banki na mai karɓa da tabbatar da biyan kuɗi, kowane yanayi yana nuna hanya ɗaya bayyananna ta AM."
      },
      case: {
        howSummary: "Yadda biyan kuɗin yake faruwa",
        outcomeSummary: "Sakamako",
        0: {
          flag: "UAE · Saka hannun jari na ƙasa da ƙasa",
          name: "Ahmed, Wanda ya kafa kamfanin saka hannun jari na ƙasa da ƙasa",
          objective: "Yana biyan ma'aikatan da ke wasu ƙasashe ta hanyar biyan kuɗi na ƙasa da ƙasa cikin tsari.",
          body: "Ahmed yana buƙatar biyan kuɗi na hukuma ba tare da sarƙar bankuna masu shiga tsakani ba, tare da bayyananniyar hanya, tabbatarwa, da turawa kai tsaye zuwa asusun banki.",
          how: [
            "Mataimakin AI yana jagorantar sa kai tsaye a cikin tsarin AM.",
            "Kamfanin yana kammala KYB, loda bayanin biyan kuɗi, da haɗa takardu.",
            "Kafin tabbatarwa, Ahmed yana ganin kuɗin sabis kuma yana turawa adadin a cikin USDT.",
            "Ana tura kuɗin zuwa asusun banki na masu karɓa kuma Ahmed yana samun tabbatarwa."
          ],
          outcome: "Masu karɓa suna samun kuɗi cikin asusun bankinsu. Ahmed yana ajiye matsayin biyan kuɗi, tabbatarwa, da takardun aiwatarwa."
        },
        1: {
          flag: "Najeriya · Cinikayya da Samar da Kayayyaki",
          name: "Musa, Mai kamfanin cinikayya",
          objective: "Yana biyan kuɗin jigilar kayayyaki ta hanyar biyan kuɗi na ƙasa da ƙasa cikin tsari.",
          body: "Musa yana buƙatar biyan takardun biyan kuɗi a kan lokaci, ya guji jinkirin sarƙar banki, kuma ya kiyaye amincewar mai kawo masa kaya tare da matsayi mai bayyana da tabbatarwa.",
          how: [
            "Mataimakin AI yana jagorantar kowane mataki kai tsaye a cikin tsarin AM.",
            "Kamfanin yana kammala KYB, loda bayanin biyan kuɗi, da haɗa takardun jigilar kayayyaki.",
            "Kafin tabbatarwa, Musa yana ganin kuɗin sabis kuma yana turawa adadin a cikin USDT.",
            "Mai kawo kaya yana samun biya cikin asusun banki, kuma Musa yana samun tabbatarwa."
          ],
          outcome: "Mai kawo kaya yana karɓar canja wuri na yau da kullum na banki, yayin da Musa ke ajiye matsayi, tabbatarwa da takardun aiwatarwa."
        },
        2: {
          flag: "Indiya · Karatu a ƙasashen waje",
          name: "Sunita, Mahaifiyar ɗalibi",
          objective: "Tana biyan karatun ɗanta a ƙasashen waje ta hanyar biyan kuɗi na ƙasa da ƙasa mai bayyana da tabbatarwa.",
          body: "Sunita tana son jagora mataki-mataki, matsayi a fili, takardu masu tallafi, da ƙarancin bukatun banki.",
          how: [
            "Mataimakin AI yana jagorantar ta kai tsaye a cikin tsarin AM.",
            "Sunita tana kammala KYC, loda bayanin biyan kuɗi, da haɗa takardun tabbatarwa.",
            "Kafin tabbatarwa, tana ganin kuɗin sabis kuma tana turawa adadin a cikin USDT.",
            "Cibiyar ilimi tana samun biya cikin asusun bankinta."
          ],
          outcome: "Sunita tana samun matsayin biyan kuɗi, tabbatarwa, da takardun da ke tabbatar da aiwatarwa."
        },
        3: {
          flag: "Turkiyya · Ayyukan jigilar kaya",
          name: "Mehmet, Daraktan ayyuka na kamfanin jigilar kaya",
          objective: "Yana biyan takardun biyan kuɗi na aiki na jigilar kaya da sabis ta hanyar biyan kuɗi na ƙasa da ƙasa cikin tsari.",
          body: "Mehmet yana sarrafa kashe-kashe da ke ci gaba da kasuwanci: jigilar kayayyaki, sabis na tallafi, da takardun biyan kuɗi na sabis. Yana buƙatar bayyananniyar hanya da sakamako mai bayyana.",
          how: [
            "Mataimakin AI yana jagorantar sa ta kowane mataki a cikin tsarin AM.",
            "Kamfanin yana kammala KYB, loda bayanin biyan kuɗi, da haɗa takardu.",
            "Kafin tabbatarwa, Mehmet yana ganin kuɗin sabis kuma yana turawa adadin a cikin USDT.",
            "Ana tura kuɗin zuwa asusun banki na mai karɓa."
          ],
          outcome: "Mehmet yana ajiye tabbatar da biyan kuɗi, ganin matsayi, da takardun aiwatarwa don ƙungiyar."
        },
        4: {
          flag: "Indonesiya · Biyan kuɗi na baƙo",
          name: "Michael, Baƙo daga Australia da ke zaune a Indonesiya",
          objective: "Yana biyan kashe-kashe na hukuma kamar takardun likita da haya ta hanyar biyan kuɗi na ƙasa da ƙasa mai bayyana.",
          body: "Michael yana buƙatar biyan kuɗin yau da kullum ya tafi cikin sauƙi kuma a kan lokaci, tare da bayyana matsayi, ƙarancin haɗari, da takardu masu kyau.",
          how: [
            "Mataimakin AI yana jagorantar sa cikin tsarin AM.",
            "Michael yana kammala KYC, loda bayanin biyan kuɗi, da haɗa takardu.",
            "Kafin tabbatarwa, yana ganin kuɗin sabis kuma yana turawa adadin a cikin USDT.",
            "Asibitin ko mai gida yana samun biya cikin asusun bankinsu."
          ],
          outcome: "Michael yana ajiye matsayin biyan kuɗi, tabbatarwa, da takardun da yake buƙata don bayanansa."
        }
      },
      ai: {
        eyebrow: "Tallafi a cikin hanya",
        title: "Jagoran AI yana nan don rage matsala, ba don ɗaukar labarin samfurin ba.",
        body: "Mun gina mataimakin AI cikin dandalin da gangan don sauƙaƙa ayyuka, jagorantar masu amfani a kowane mataki, da bayar da amsoshi a duk lokacin biyan kuɗi. Bayan rajista, masu amfani suna shiga tsarin nan da nan kuma suna fara aiwatar da biyan kuɗi tare da cikakken jagoran AI."
      },
      compare: {
        eyebrow: "Hanya mai sauƙi",
        title: "Me ya sa hanyar biyan kuɗi ta AM ta fi SWIFT da canja wuri na banki sauƙi.",
        bad: { title: "Canja wuri na banki na yau da kullum", items: ["Kwanaki 3–7 na aiki", "Bankuna masu shiga tsakani da yawa", "Kuɗaɗen ɓoye a hanya", "Babu matsayin biyan kuɗi a fili yayin canja wuri"] },
        good: { title: "Hanyar biyan kuɗi ta AM", items: ["Mafi yawan biyan kuɗi suna kammala cikin rana 1 ta aiki", "Biya kai tsaye zuwa asusun banki na mai karɓa", "Kuɗin sabis na bayyana kafin tabbatarwa", "Hanyar biyan kuɗi mai bayyana tare da takardun tabbatarwa"] }
      },
      faq: {
        eyebrow: "Tambayoyi",
        title: "Amsoshi kafin ka fara.",
        0: { q: "Shin a zahiri kyauta ne?", a: "Eh. Samun damar shiga dandali da gwada sabis tare da mataimaki na sirri na AI suna kyauta gaba ɗaya. Muna ba da kayan aikin da ke warware matsala ta gaske ga kasuwanci." },
        1: { q: "Shin mai kawo mini kayayyaki ya kamata ya yi wani abu daban?", a: "A'a. Mai kawo kayayyakinka yana samun canja wuri na banki na yau da kullum a cikin kuɗin ƙasarsa: USD, EUR, SGD, GBP, ko wani kuɗi da aka tallafa. Ba ya buƙatar wani walat ko saitin musamman." },
        2: { q: "Yaya bincike na bin doka yake aiki?", a: "An tsara AM don biyan kuɗi na halal bisa takardun biyan kuɗi da wajibcin da takardu ke tallafa. Samun yana dogara da hanyar, tabbatarwa, da nazarin ma'amala ta musamman. Wannan ba shawara ta doka ko ta kuɗi ba ne; tuntuɓi mai lissafinka ko lauya don yanayinka." },
        3: { q: "Nawa za mu iya tara a zahiri?", a: "Yawancin bankuna suna cajin kashi 3–6% don canja wuri na ƙasa da ƙasa bayan kuɗaɗen da kuma na musayar kuɗi sun haɗu. Kuɗin sabis namu ƙaramin yanki ne kawai daga adadin." },
        4: { q: "Tsawon lokacin sasantawa nawa ne?", a: "A mafi yawan hanyoyi, sasantawa ana kammalawa cikin rana 1 ta aiki. SWIFT yawanci yana ɗaukar kwanaki 3–5, kuma waɗannan jinkirin na iya shafar dangantakar mai kawo kaya da jadawalin aiki." }
      },
      final: { eyebrow: "Fara da bayyana", title: "Fara da hanyar biyan kuɗi mai jagora, kuɗaɗen da ake gani, da takardun tabbatarwa." },
      footer: { line1: "AM · Tallafin biyan kuɗi na ƙasa da ƙasa bisa takardun biyan kuɗi", line2: "An tsara shi don hanyoyi bayyananne, takardu masu kulawa, da ayyuka na kuɗi cikin nutsuwa." }
    },

    tr: {
      meta: { title: "AM | Faturaya Dayalı Uluslararası Ödemeler" },
      nav: { howItWorks: "Nasıl çalışır", cases: "Kullanım örnekleri", comparison: "Karşılaştırma", questions: "Sorular" },
      cta: { startFree: "Ücretsiz Başla", getStarted: "Başla", startNow: "Hemen Başla" },
      hero: {
        badge: "Yapılandırılmış uluslararası ödemeler",
        title1: "Faturaya dayalı uluslararası ödemeler,",
        title2: "net bir rota ve daha az stres ile.",
        lede: "Ödemeleri alıcının banka hesabına gönderin, işlem durumunu uçtan uca izleyin ve destekleyici belgeleri saklayın.",
        assist: "Hizmeti hemen kullanmaya başlayın ve kişisel AI asistanınızdan rehberlik alın.",
        support: "AM; uluslararası fatura ödemelerinizi, yurtdışı hizmet ödemelerinizi ve diğer yükümlülüklerinizi kolayca yönetmenize yardımcı olur. Onaylamadan önce hizmet bedelini görür, ödeme doğrudan alıcının banka hesabına gönderilir."
      },
      preview: {
        statusPill: "Onaydan önce ücret görünür",
        route0: "Fatura bilgileri", route1: "Belgeler", route2: "Banka ödemesi",
        assistantTitle: "Arayüz içinde AI rehberliği",
        assistantText: "Sonraki adım önerileri, belge kontrolü ve net ödeme rotası.",
        paymentConfirmation: "Ödeme onayı", ready: "Hazır"
      },
      metrics: [
        { strong: "180+", span: "ülke" },
        { strong: "Net rota", span: "her ödeme için" },
        { strong: "Uygulama içi destek", span: "arayüz içinde" },
        { strong: "Onay", span: "belgeler saklanır" }
      ],
      process: {
        eyebrow: "Hizmet nasıl çalışır",
        title: "Fatura bilgisinden alıcının banka hesabına uzanan sade bir rota.",
        s0: { title: "Ödeme bilgilerini yükleyin", body: "Alıcıyı, tutarı, para birimini ve ödeme amacını girin. Sorularınız varsa AI asistan hangi bilginin gerekli olduğunu ve sonraki adımı açıklar." },
        s1: { title: "Belgeleri ekleyin ve özeti gözden geçirin", body: "İşlemle ilgili veya doğrulama için gerekli belgeleri ekleyin. Onay öncesinde hizmet bedelini ve temel transfer detaylarını görürsünüz." },
        s2: { title: "Transferi onaylayın", body: "Onaydan sonra ödeme seçilen rota üzerinden ilerler. Onay ve işlemin tamamlandığını gösteren belgeler sizde kalır." },
        security: "Güvenlik, her transferinizin temel taşıdır."
      },
      cases: {
        eyebrow: "Gerçek ödeme görevleri",
        title: "Uluslararası ödemeniz iş ve özel hayatta nasıl çalışır.",
        sub: "Doğrulama ve belge yüklemeden alıcının banka hesabına ödemeye ve ödeme onayına kadar her senaryo, AM üzerinden aynı net rotayı gösterir."
      },
      case: {
        howSummary: "Ödeme nasıl yapılır",
        outcomeSummary: "Sonuç",
        0: {
          flag: "BAE · Uluslararası yatırım",
          name: "Ahmed, uluslararası yatırım şirketinin kurucusu",
          objective: "Yapılandırılmış uluslararası ödemelerle farklı ülkelerdeki çalışanlarına ödeme yapıyor.",
          body: "Ahmed; uzun muhabir banka zincirine takılmadan, net bir rota, onay ve doğrudan banka hesaplarına ödeme ile resmi ödemeler yapmak istiyor.",
          how: [
            "AI asistan, AM arayüzünde adım adım rehberlik ediyor.",
            "Şirket KYB'yi tamamlıyor, ödeme bilgilerini yüklüyor ve belgeleri ekliyor.",
            "Onay öncesinde Ahmed ücreti görüyor ve eşdeğer tutarı USDT olarak gönderiyor.",
            "Ödemeler alıcıların banka hesaplarına ulaşıyor ve Ahmed onayı alıyor."
          ],
          outcome: "Alıcılar banka hesaplarına fiat ödeme alıyor. Ahmed; ödeme durumunu, onayı ve işlem belgelerini saklıyor."
        },
        1: {
          flag: "Nijerya · Ticaret ve tedarik",
          name: "Musa, Bir Ticaret Şirketinin Sahibi",
          objective: "Yapılandırılmış uluslararası ödemeyle mal sevkiyatı için ödeme yapıyor.",
          body: "Musa, faturaları zamanında ödemek, uzun banka zincirinden kaynaklı gecikmelerden kaçınmak ve net durum ve onay ile tedarikçi güvenini korumak istiyor.",
          how: [
            "AI asistan, AM arayüzünde her adımda rehberlik ediyor.",
            "Şirket KYB'yi tamamlıyor, ödeme bilgilerini yüklüyor ve sevkiyat belgelerini ekliyor.",
            "Onay öncesinde Musa ücreti görüyor ve eşdeğer tutarı USDT olarak gönderiyor.",
            "Tedarikçi banka hesabına ödemeyi alıyor, Musa ise onayı alıyor."
          ],
          outcome: "Tedarikçi standart bir banka transferi alırken Musa durumu, onayı ve işlem belgelerini saklıyor."
        },
        2: {
          flag: "Hindistan · Yurt dışı eğitim",
          name: "Sunita, Yurt Dışında Okuyan Bir Öğrencinin Annesi",
          objective: "Net ve doğrulanabilir bir uluslararası ödemeyle çocuğunun yurt dışındaki eğitim masraflarını ödüyor.",
          body: "Sunita; adım adım rehberlik, şeffaf durum güncellemeleri, destekleyici belgeler ve en az banka bürokrasisi istiyor.",
          how: [
            "AI asistan AM arayüzünde ona doğrudan rehberlik ediyor.",
            "Sunita KYC'yi tamamlıyor, ödeme bilgilerini yüklüyor ve doğrulama belgelerini ekliyor.",
            "Onay öncesinde hizmet bedelini görüyor ve eşdeğer tutarı USDT olarak gönderiyor.",
            "Eğitim kurumu banka hesabına ödemeyi alıyor."
          ],
          outcome: "Sunita ödeme durumunu, onayı ve işlemin tamamlandığını gösteren belgeleri alıyor."
        },
        3: {
          flag: "Türkiye · Lojistik operasyonları",
          name: "Mehmet, Bir Lojistik Şirketinin Operasyon Müdürü",
          objective: "Yapılandırılmış uluslararası ödemeyle lojistik ve hizmetlerin operasyonel faturalarını ödüyor.",
          body: "Mehmet işi ayakta tutan giderleri yönetiyor: lojistik, destek hizmetleri ve hizmet faturaları. Net bir rota ve şeffaf sonuç bekliyor.",
          how: [
            "AI asistan AM arayüzünde her adımda kendisine rehberlik ediyor.",
            "Şirket KYB'yi tamamlıyor, ödeme bilgilerini yüklüyor ve belgeleri ekliyor.",
            "Onay öncesinde Mehmet hizmet bedelini görüyor ve eşdeğer tutarı USDT olarak gönderiyor.",
            "Ödeme alıcının banka hesabına ulaşıyor."
          ],
          outcome: "Mehmet ekip için ödeme onayını, durum görünürlüğünü ve işlem belgelerini saklıyor."
        },
        4: {
          flag: "Endonezya · Yabancı yerleşik ödemeleri",
          name: "Michael, Endonezya'da Yaşayan Avustralyalı Bir Yabancı",
          objective: "Net uluslararası ödemelerle sağlık faturası ve kira gibi resmi giderleri ödüyor.",
          body: "Michael; gündelik önemli ödemelerinin pürüzsüz ve zamanında yapılmasını, durumun net görünmesini, riskin düşük olmasını ve uygun belgelerin sağlanmasını istiyor.",
          how: [
            "AI asistan ona AM arayüzünde rehberlik ediyor.",
            "Michael KYC'yi tamamlıyor, ödeme bilgilerini yüklüyor ve belgeleri ekliyor.",
            "Onay öncesinde hizmet bedelini görüyor ve eşdeğer tutarı USDT olarak gönderiyor.",
            "Klinik veya ev sahibi banka hesabına ödemeyi alıyor."
          ],
          outcome: "Michael ödeme durumunu, onayı ve kayıtları için gerekli belgeleri saklıyor."
        }
      },
      ai: {
        eyebrow: "Rotaya entegre destek",
        title: "AI rehberliği, sürtünmeyi azaltmak için var; ürünün hikayesini ele geçirmek için değil.",
        body: "AI asistanı; operasyonları sadeleştirmek, kullanıcıları her adımda yönlendirmek ve ödeme yolculuğu boyunca yanıt sunmak için platforma bilinçli olarak entegre ettik. Kayıt sonrası kullanıcılar arayüze hemen giriyor ve tam AI rehberliğiyle ödemeleri işlemeye başlıyor."
      },
      compare: {
        eyebrow: "Daha basit bir rota",
        title: "AM üzerinden ödeme rotası, SWIFT ve banka transferlerinden neden daha basit.",
        bad: { title: "Standart banka transferi", items: ["3–7 iş günü", "Birden fazla muhabir banka", "Rota boyunca gizli ücretler", "Transfer sırasında net ödeme durumu yok"] },
        good: { title: "AM üzerinden ödeme rotası", items: ["Çoğu ödeme 1 iş gününde tamamlanır", "Alıcının banka hesabına doğrudan ödeme", "Ücret onaydan önce görünür", "Onay belgeleriyle net ödeme yolu"] }
      },
      faq: {
        eyebrow: "Sorular",
        title: "Başlamadan önce yanıtlar.",
        0: { q: "Gerçekten ücretsiz mi?", a: "Evet. Platforma erişim ve kişisel AI asistanı ile hizmeti deneme tamamen ücretsiz. Size, işletmelerin gerçek bir sorununu çözen bir araca erişim sunuyoruz." },
        1: { q: "Tedarikçimin farklı bir şey yapması gerekiyor mu?", a: "Hayır. Tedarikçiniz kendi para biriminde standart bir yerel banka transferi alır: USD, EUR, SGD, GBP veya desteklenen başka bir para birimi. Özel bir cüzdana veya kuruluma ihtiyaçları yoktur." },
        2: { q: "Uyumluluk kontrolleri nasıl işliyor?", a: "AM; faturaya dayalı yasal ödemeler ve belgelenmiş yükümlülükler için tasarlandı. Erişilebilirlik koridora, doğrulamaya ve ilgili işlemin incelenmesine bağlıdır. Bu bir hukuki veya mali tavsiye değildir; durumunuza göre muhasebecinize veya hukuk danışmanınıza başvurun." },
        3: { q: "Gerçekçi olarak ne kadar tasarruf edebiliriz?", a: "Çoğu banka, ücretler ve döviz kuru farkları dahil uluslararası transferler için %3–6 alır. Hizmet bedelimiz bu tutarın yalnızca küçük bir kısmıdır." },
        4: { q: "Mutabakat ne kadar sürer?", a: "Çoğu koridorda mutabakat 1 iş gününde tamamlanır. SWIFT genellikle 3–5 gün sürer ve bu gecikmeler tedarikçi ilişkilerini ve proje takvimlerini etkileyebilir." }
      },
      final: { eyebrow: "Netlikle başlayın", title: "Yönlendirilmiş bir ödeme rotası, görünür ücretler ve onay belgeleriyle başlayın." },
      footer: { line1: "AM · Faturaya dayalı uluslararası ödeme desteği", line2: "Net rotalar, özenli belgeler ve sakin finansal operasyonlar için tasarlandı." }
    },

    id: {
      meta: { title: "AM | Pembayaran Internasional Berbasis Faktur" },
      nav: { howItWorks: "Cara kerja", cases: "Kasus penggunaan", comparison: "Perbandingan", questions: "Pertanyaan" },
      cta: { startFree: "Mulai Gratis", getStarted: "Mulai", startNow: "Mulai Sekarang" },
      hero: {
        badge: "Pembayaran internasional yang terstruktur",
        title1: "Pembayaran internasional berbasis faktur",
        title2: "dengan rute jelas dan minim stres.",
        lede: "Kirim pembayaran ke rekening bank penerima dengan status transaksi yang sepenuhnya terlacak dan dokumen pendukung di setiap langkah.",
        assist: "Mulai gunakan layanannya sekarang dan dapatkan panduan dari asisten AI pribadi Anda.",
        support: "AM membantu Anda melakukan pembayaran faktur internasional, membayar layanan luar negeri, dan menyelesaikan kewajiban lainnya. Sebelum konfirmasi, Anda melihat biayanya, dan pembayaran dikirim ke rekening bank penerima."
      },
      preview: {
        statusPill: "Biaya terlihat sebelum konfirmasi",
        route0: "Detail faktur", route1: "Dokumen", route2: "Pembayaran ke bank",
        assistantTitle: "Panduan AI di dalam antarmuka",
        assistantText: "Panduan langkah berikutnya, pemeriksaan dokumen, dan rute pembayaran yang jelas.",
        paymentConfirmation: "Konfirmasi pembayaran", ready: "Siap"
      },
      metrics: [
        { strong: "180+", span: "negara" },
        { strong: "Rute jelas", span: "untuk setiap pembayaran" },
        { strong: "Dukungan dalam aplikasi", span: "di dalam antarmuka" },
        { strong: "Konfirmasi", span: "dokumen disimpan" }
      ],
      process: {
        eyebrow: "Cara kerja layanan",
        title: "Rute yang tenang dari detail faktur hingga pembayaran ke rekening bank.",
        s0: { title: "Unggah detail pembayaran", body: "Masukkan penerima, jumlah, mata uang, dan tujuan pembayaran. Jika ada pertanyaan, asisten AI menjelaskan informasi yang dibutuhkan dan langkah berikutnya." },
        s1: { title: "Lampirkan dokumen dan tinjau ringkasan", body: "Tambahkan dokumen terkait transaksi atau yang dibutuhkan untuk verifikasi. Sebelum konfirmasi, Anda melihat biaya layanan dan detail transfer utama." },
        s2: { title: "Konfirmasi transfer", body: "Setelah konfirmasi, pembayaran berjalan melalui rute yang dipilih. Anda menyimpan konfirmasi dan dokumen yang membuktikan pelaksanaan pembayaran." },
        security: "Keamanan adalah dasar setiap transfer Anda."
      },
      cases: {
        eyebrow: "Tugas pembayaran nyata",
        title: "Bagaimana pembayaran internasional Anda bekerja dalam skenario bisnis dan pribadi sehari-hari.",
        sub: "Dari verifikasi dan unggah dokumen hingga pembayaran ke rekening bank penerima dan konfirmasi pembayaran, setiap skenario menunjukkan rute yang jelas dan sama melalui AM."
      },
      case: {
        howSummary: "Bagaimana pembayaran berjalan",
        outcomeSummary: "Hasil",
        0: {
          flag: "UEA · Investasi internasional",
          name: "Ahmed, Pendiri Perusahaan Investasi Internasional",
          objective: "Melakukan pembayaran kepada karyawan di negara lain melalui pembayaran internasional yang terstruktur.",
          body: "Ahmed butuh pembayaran resmi tanpa rantai bank perantara yang panjang, dengan rute yang jelas, konfirmasi, dan pembayaran langsung ke rekening bank.",
          how: [
            "Asisten AI memandunya langsung di dalam antarmuka AM.",
            "Perusahaan menyelesaikan KYB, mengunggah detail pembayaran, dan melampirkan dokumen.",
            "Sebelum konfirmasi, Ahmed melihat biayanya lalu mentransfer jumlah setara dalam USDT.",
            "Pembayaran dikirim ke rekening bank penerima dan Ahmed menerima konfirmasi."
          ],
          outcome: "Penerima mendapat pembayaran fiat di rekening bank. Ahmed menyimpan status pembayaran, konfirmasi, dan dokumen pelaksanaan."
        },
        1: {
          flag: "Nigeria · Perdagangan dan pasokan",
          name: "Musa, Pemilik Perusahaan Dagang",
          objective: "Membayar pengiriman barang melalui pembayaran internasional yang terstruktur.",
          body: "Musa perlu membayar faktur tepat waktu, menghindari keterlambatan dari rantai perbankan yang panjang, dan menjaga kepercayaan pemasok dengan status pembayaran yang jelas dan konfirmasi.",
          how: [
            "Asisten AI memandu setiap langkah langsung di antarmuka AM.",
            "Perusahaan menyelesaikan KYB, mengunggah informasi pembayaran, dan melampirkan dokumen pengiriman.",
            "Sebelum konfirmasi, Musa melihat biayanya lalu mentransfer jumlah setara dalam USDT.",
            "Pemasok menerima pembayaran ke rekening bank, dan Musa menerima konfirmasi."
          ],
          outcome: "Pemasok menerima transfer bank standar sementara Musa menyimpan status, konfirmasi, dan dokumen pelaksanaan."
        },
        2: {
          flag: "India · Pendidikan di luar negeri",
          name: "Sunita, Ibu Seorang Pelajar",
          objective: "Membayar pendidikan anaknya di luar negeri melalui pembayaran internasional yang jelas dan dapat diverifikasi.",
          body: "Sunita menginginkan panduan langkah demi langkah, status yang transparan, dokumen pendukung, dan birokrasi perbankan yang minimal.",
          how: [
            "Asisten AI memandunya langsung di antarmuka AM.",
            "Sunita menyelesaikan KYC, mengunggah detail pembayaran, dan melampirkan dokumen verifikasi.",
            "Sebelum konfirmasi, ia melihat biaya layanan lalu mentransfer jumlah setara dalam USDT.",
            "Institusi pendidikan menerima pembayaran ke rekening banknya."
          ],
          outcome: "Sunita menerima status pembayaran, konfirmasi, dan dokumen yang memastikan pelaksanaan pembayaran."
        },
        3: {
          flag: "Turki · Operasi logistik",
          name: "Mehmet, Direktur Operasi Perusahaan Logistik",
          objective: "Membayar faktur operasional logistik dan jasa melalui pembayaran internasional yang terstruktur.",
          body: "Mehmet mengelola pengeluaran yang menjaga bisnis tetap berjalan: logistik, layanan pendukung, dan faktur jasa. Ia membutuhkan rute jelas dan hasil yang transparan.",
          how: [
            "Asisten AI memandunya di setiap langkah di antarmuka AM.",
            "Perusahaan menyelesaikan KYB, mengunggah informasi pembayaran, dan melampirkan dokumen.",
            "Sebelum konfirmasi, Mehmet melihat biaya layanan lalu mentransfer jumlah setara dalam USDT.",
            "Pembayaran sampai ke rekening bank penerima."
          ],
          outcome: "Mehmet menyimpan konfirmasi pembayaran, visibilitas status, dan dokumen pelaksanaan untuk tim."
        },
        4: {
          flag: "Indonesia · Pembayaran ekspatriat",
          name: "Michael, Ekspatriat Australia yang Tinggal di Indonesia",
          objective: "Membayar pengeluaran resmi seperti tagihan medis dan sewa melalui pembayaran internasional yang jelas.",
          body: "Michael butuh pembayaran sehari-hari berjalan lancar dan tepat waktu, dengan status yang jelas, risiko minimal, dan dokumentasi yang sesuai.",
          how: [
            "Asisten AI memandunya di antarmuka AM.",
            "Michael menyelesaikan KYC, mengunggah informasi pembayaran, dan melampirkan dokumen.",
            "Sebelum konfirmasi, ia melihat biaya layanan lalu mentransfer jumlah setara dalam USDT.",
            "Klinik atau pemilik rumah menerima pembayaran ke rekening bank mereka."
          ],
          outcome: "Michael menyimpan status pembayaran, konfirmasi, dan dokumen yang dibutuhkan untuk catatannya."
        }
      },
      ai: {
        eyebrow: "Dukungan terbangun di dalam rute",
        title: "Panduan AI hadir untuk mengurangi gesekan, bukan untuk mengambil alih cerita produk.",
        body: "Kami sengaja membangun asisten AI di dalam platform untuk menyederhanakan operasi, memandu pengguna di setiap langkah, dan memberikan jawaban sepanjang perjalanan pembayaran. Setelah pendaftaran, pengguna langsung masuk ke antarmuka dan mulai memproses pembayaran dengan panduan AI yang lengkap."
      },
      compare: {
        eyebrow: "Rute yang lebih sederhana",
        title: "Mengapa rute pembayaran melalui AM lebih sederhana daripada SWIFT dan transfer bank.",
        bad: { title: "Transfer bank standar", items: ["3–7 hari kerja", "Beberapa bank koresponden", "Biaya tersembunyi sepanjang rute", "Tidak ada status pembayaran yang jelas selama transfer"] },
        good: { title: "Rute pembayaran melalui AM", items: ["Sebagian besar pembayaran selesai dalam 1 hari kerja", "Pembayaran langsung ke rekening bank penerima", "Biaya terlihat sebelum konfirmasi", "Jalur pembayaran jelas dengan dokumen konfirmasi"] }
      },
      faq: {
        eyebrow: "Pertanyaan",
        title: "Jawaban sebelum Anda mulai.",
        0: { q: "Apakah benar-benar gratis?", a: "Ya. Akses ke platform dan kemampuan untuk menguji layanan dengan asisten AI pribadi sepenuhnya gratis. Kami memberikan akses ke alat yang menyelesaikan masalah nyata bagi bisnis." },
        1: { q: "Apakah pemasok saya perlu melakukan sesuatu yang berbeda?", a: "Tidak. Pemasok Anda menerima transfer bank lokal standar dalam mata uang mereka: USD, EUR, SGD, GBP, atau mata uang lain yang didukung. Mereka tidak perlu dompet atau pengaturan khusus." },
        2: { q: "Bagaimana pemeriksaan kepatuhan bekerja?", a: "AM dirancang untuk pembayaran berbasis faktur yang sah dan kewajiban yang didukung dokumen. Ketersediaan tergantung pada koridor, verifikasi, dan tinjauan transaksi tertentu. Ini bukan nasihat hukum atau finansial; konsultasikan dengan akuntan atau penasihat hukum Anda sesuai situasi Anda." },
        3: { q: "Berapa banyak yang realistis dapat dihemat?", a: "Sebagian besar bank menagih 3–6% untuk transfer internasional setelah biaya dan markup FX dimasukkan. Biaya layanan kami hanya sebagian kecil dari jumlah itu." },
        4: { q: "Berapa lama penyelesaian?", a: "Di sebagian besar koridor, penyelesaian selesai dalam 1 hari kerja. SWIFT biasanya memakan waktu 3–5 hari, dan keterlambatan tersebut dapat memengaruhi hubungan pemasok dan jadwal proyek." }
      },
      final: { eyebrow: "Mulai dengan kejelasan", title: "Mulailah dengan rute pembayaran terpandu, biaya yang terlihat, dan dokumen konfirmasi." },
      footer: { line1: "AM · Dukungan pembayaran internasional berbasis faktur", line2: "Dirancang untuk rute jelas, dokumentasi cermat, dan operasi finansial yang tenang." }
    }
  };

  const DIRS = { en: "ltr", ar: "rtl", hi: "ltr", ha: "ltr", tr: "ltr", id: "ltr" };
  const LANGS_AVAILABLE = Object.keys(COPY);

  /* ---------------- i18n helpers ---------------- */

  const resolvePath = (obj, path) => {
    if (!obj) return undefined;
    const parts = path.split(".");
    let cur = obj;
    for (const p of parts) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  };

  const applyLanguage = (lang) => {
    if (!COPY[lang]) lang = "en";
    const dict = COPY[lang];
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", DIRS[lang] || "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = resolvePath(dict, key);
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    // Title is a special node
    const titleVal = resolvePath(dict, "meta.title");
    if (typeof titleVal === "string") document.title = titleVal;

    try { localStorage.setItem("am_lang", lang); } catch (e) { /* ignore */ }
  };

  /* ---------------- Header shadow on scroll ---------------- */
  const header = document.querySelector("[data-header]");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Reveal on scroll ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- Case slider ---------------- */
  const slider = document.querySelector("[data-slider]");
  const cards = slider ? Array.from(slider.querySelectorAll(".case-card")) : [];
  const dots = Array.from(document.querySelectorAll("[data-dot]"));
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");

  if (slider && cards.length) {
    let activeIndex = 0;

    const setActive = (index) => {
      activeIndex = Math.max(0, Math.min(cards.length - 1, index));
      cards.forEach((card, i) => card.classList.toggle("is-active", i === activeIndex));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeIndex));
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === cards.length - 1;
    };

    const scrollToCard = (index) => {
      const target = cards[index];
      if (!target) return;
      const sliderRect = slider.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const offset = targetRect.left - sliderRect.left + slider.scrollLeft
                   - (slider.clientWidth - target.clientWidth) / 2;
      slider.scrollTo({ left: offset, behavior: "smooth" });
    };

    if ("IntersectionObserver" in window) {
      const sliderIo = new IntersectionObserver(
        (entries) => {
          let best = null;
          entries.forEach((entry) => {
            if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
              best = entry;
            }
          });
          if (best) {
            const i = cards.indexOf(best.target);
            if (i !== -1 && i !== activeIndex) setActive(i);
          }
        },
        { root: slider, threshold: [0.55, 0.75, 0.95] }
      );
      cards.forEach((card) => sliderIo.observe(card));
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => { setActive(i); scrollToCard(i); });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const i = Math.max(0, activeIndex - 1);
        setActive(i); scrollToCard(i);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const i = Math.min(cards.length - 1, activeIndex + 1);
        setActive(i); scrollToCard(i);
      });
    }

    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const i = Math.min(cards.length - 1, activeIndex + 1);
        setActive(i); scrollToCard(i);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const i = Math.max(0, activeIndex - 1);
        setActive(i); scrollToCard(i);
      }
    });

    setActive(0);
  }

  /* ---------------- Sticky mobile CTA ---------------- */
  const stickyCta = document.querySelector("[data-sticky-cta]");
  const hero = document.querySelector(".hero");
  const finalCta = document.getElementById("start");

  if (stickyCta && hero) {
    const isMobile = () => window.matchMedia("(max-width: 639px)").matches;
    const updateSticky = () => {
      if (!isMobile()) { stickyCta.classList.remove("is-visible"); return; }
      const heroBottom = hero.getBoundingClientRect().bottom;
      const finalTop = finalCta ? finalCta.getBoundingClientRect().top : Infinity;
      const viewportH = window.innerHeight;
      const show = heroBottom < viewportH * 0.4 && finalTop > viewportH * 0.85;
      stickyCta.classList.toggle("is-visible", show);
    };
    updateSticky();
    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);
  }

  /* ---------------- Language switcher ---------------- */
  const langSelect = document.querySelector("[data-language-switcher]");

  const detectInitialLang = () => {
    try {
      const stored = localStorage.getItem("am_lang");
      if (stored && LANGS_AVAILABLE.includes(stored)) return stored;
    } catch (e) { /* ignore */ }
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS_AVAILABLE.includes(browser) ? browser : "en";
  };

  const initialLang = detectInitialLang();
  applyLanguage(initialLang);
  if (langSelect) {
    langSelect.value = initialLang;
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }
})();
