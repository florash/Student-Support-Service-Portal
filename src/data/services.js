export const serviceCategories = [
  "Academic Support",
  "Mental Health and Wellbeing",
  "Financial Assistance",
  "Accommodation Support",
  "International Student Support",
  "Accessibility and Inclusion",
];

export const services = [
  {
    slug: "academic-skills-advising",
    name: "Academic Skills Advising",
    category: "Academic Support",
    summary:
      "One-to-one guidance on study planning, academic writing, note-taking, and assessment preparation.",
    eligibility:
      "Available to currently enrolled domestic and international students studying undergraduate, postgraduate, vocational, or pathway courses.",
    howToApply: [
      "Check appointment times and choose online or on-campus delivery.",
      "Submit a short request form with your student number and study area.",
      "Upload a draft assessment or study plan if you want tailored feedback.",
      "Attend your appointment and agree on practical next steps.",
    ],
    requiredDocuments: [
      "Student number",
      "Course or unit details",
      "Draft assignment, feedback sheet, or study plan if relevant",
    ],
    contact: {
      phone: "(02) 6125 4100",
      email: "academicsupport@studentsupport.act.edu.au",
      hours: "Monday to Friday, 9:00 am to 5:00 pm",
      location: "Student Services Centre, Building 2, Canberra City campus",
    },
    responseTime: "Usually within 2 business days",
    whatHappensNext: [
      "We review your request and confirm whether an appointment or referral is the best next step.",
      "You may be asked to send a draft assessment or course details before the meeting.",
      "After the appointment, you will receive practical next steps or a referral if another service is more suitable.",
    ],
    relatedServices: [
      "accessibility-advisory-service",
      "international-student-advice",
      "financial-wellbeing-check-in",
    ],
  },
  {
    slug: "counselling-and-wellbeing",
    name: "Counselling and Wellbeing",
    category: "Mental Health and Wellbeing",
    summary:
      "Confidential short-term counselling, wellbeing planning, and referrals for students experiencing stress, anxiety, grief, or crisis.",
    eligibility:
      "Available to enrolled students. Priority appointments are available for urgent wellbeing concerns.",
    howToApply: [
      "Call the wellbeing team or complete the support request form.",
      "Choose whether you want a phone, video, or in-person appointment.",
      "Tell us if you need urgent support or an interpreter.",
      "A staff member will contact you within one business day.",
    ],
    requiredDocuments: [
      "Student number",
      "Preferred contact details",
      "Safety concerns or support needs summary if you are seeking urgent assistance",
    ],
    contact: {
      phone: "(02) 6207 3344",
      email: "wellbeing@studentsupport.act.edu.au",
      hours: "Monday to Friday, 8:30 am to 5:30 pm",
      location: "Wellbeing Hub, Level 1, Northbourne campus",
    },
    responseTime: "Urgent enquiries are prioritised. Standard enquiries are usually answered within 1 business day",
    whatHappensNext: [
      "A staff member will review the urgency of your request.",
      "You may be offered a phone, video, or in-person appointment depending on your needs.",
      "If another service is needed, the team can help coordinate a referral.",
    ],
    relatedServices: [
      "financial-wellbeing-check-in",
      "crisis-accommodation-assistance",
      "accessibility-advisory-service",
    ],
  },
  {
    slug: "financial-wellbeing-check-in",
    name: "Financial Wellbeing Check-in",
    category: "Financial Assistance",
    summary:
      "Practical support with emergency grants, budgeting, fees, and referrals to government assistance.",
    eligibility:
      "Students facing financial hardship, unexpected costs, changes to employment, or barriers to continuing study.",
    howToApply: [
      "Review the hardship support criteria before applying.",
      "Complete the online request form and select financial assistance.",
      "Provide evidence of your current situation and recent expenses.",
      "A case officer will contact you within three business days.",
    ],
    requiredDocuments: [
      "Student number",
      "Bank statement or income evidence",
      "Recent bills, rent statement, or invoice",
      "Brief written explanation of hardship",
    ],
    contact: {
      phone: "(02) 6205 8830",
      email: "financialsupport@studentsupport.act.edu.au",
      hours: "Monday to Friday, 9:00 am to 4:30 pm",
      location: "Support and Inclusion Desk, Canberra Civic",
    },
    responseTime: "Usually within 3 business days",
    whatHappensNext: [
      "A case officer will review the information you provided and check whether more documents are needed.",
      "You may be offered a short appointment to discuss your situation and support options.",
      "If eligible, the team will explain the next step for grants, budgeting support, or referrals.",
    ],
    relatedServices: [
      "crisis-accommodation-assistance",
      "international-student-advice",
      "counselling-and-wellbeing",
    ],
  },
  {
    slug: "crisis-accommodation-assistance",
    name: "Crisis Accommodation Assistance",
    category: "Accommodation Support",
    summary:
      "Help for students at risk of homelessness, unsafe housing, or sudden disruption to accommodation.",
    eligibility:
      "Students in urgent or unstable housing circumstances, including international students and students with dependants.",
    howToApply: [
      "Contact the service as soon as possible if your housing is unsafe or ending.",
      "Speak with a case officer to discuss immediate risk and short-term options.",
      "Provide any tenancy, notice, or accommodation documentation you have.",
      "We will coordinate urgent referrals and next-step planning.",
    ],
    requiredDocuments: [
      "Student number",
      "Current address or temporary accommodation details",
      "Notice to vacate, tenancy communication, or relevant supporting evidence",
    ],
    contact: {
      phone: "(02) 6207 4401",
      email: "housinghelp@studentsupport.act.edu.au",
      hours: "Monday to Friday, 8:30 am to 5:00 pm",
      location: "Student Services Centre, Ground Floor, Belconnen campus",
    },
    responseTime: "Urgent housing concerns are reviewed as soon as possible during business hours",
    whatHappensNext: [
      "A case officer will assess urgency and immediate safety concerns.",
      "You may be asked for tenancy or accommodation documents if available.",
      "The team will explain short-term options and any referrals that can be arranged.",
    ],
    relatedServices: [
      "financial-wellbeing-check-in",
      "counselling-and-wellbeing",
      "international-student-advice",
    ],
  },
  {
    slug: "international-student-advice",
    name: "International Student Advice",
    category: "International Student Support",
    summary:
      "Advice on settling in, study expectations, referrals, safety, and connecting with local services in Canberra.",
    eligibility:
      "Available to international students at any stage of their study journey, including arrivals, continuing students, and students nearing completion.",
    howToApply: [
      "Book an appointment online or request a call-back.",
      "Tell us whether your enquiry relates to settling in, wellbeing, work, or course participation.",
      "Let us know if you need language support.",
      "Meet with an adviser and receive a written summary of referrals where needed.",
    ],
    requiredDocuments: [
      "Student number",
      "Contact details in Australia",
      "Relevant course or enrolment information",
    ],
    contact: {
      phone: "(02) 6125 6620",
      email: "internationalsupport@studentsupport.act.edu.au",
      hours: "Monday to Friday, 9:00 am to 5:00 pm",
      location: "Global Student Hub, Acton campus",
    },
    responseTime: "Usually within 2 business days",
    whatHappensNext: [
      "An adviser will review your enquiry and confirm whether a phone, video, or in-person meeting is suitable.",
      "You may receive links to local services or practical information before the appointment.",
      "After contact, the adviser can provide referrals or a written summary if needed.",
    ],
    relatedServices: [
      "academic-skills-advising",
      "financial-wellbeing-check-in",
      "counselling-and-wellbeing",
    ],
  },
  {
    slug: "accessibility-advisory-service",
    name: "Accessibility Advisory Service",
    category: "Accessibility and Inclusion",
    summary:
      "Support to arrange study adjustments, accessible materials, assistive technology, and inclusive learning access plans.",
    eligibility:
      "Students with disability, chronic health conditions, mental health conditions, carer responsibilities, or temporary injuries affecting study participation.",
    howToApply: [
      "Complete the request form and select accessibility and inclusion.",
      "Upload supporting documentation from a health practitioner where available.",
      "Meet with an adviser to discuss barriers and reasonable adjustments.",
      "Review and confirm your learning access plan with your faculty or teaching team.",
    ],
    requiredDocuments: [
      "Student number",
      "Medical or allied health documentation where relevant",
      "Summary of study barriers or adjustment needs",
    ],
    contact: {
      phone: "(02) 6207 2288",
      email: "accessibility@studentsupport.act.edu.au",
      hours: "Monday to Friday, 9:00 am to 5:00 pm",
      location: "Inclusion Services, Building C, Bruce campus",
    },
    responseTime: "Usually within 5 business days",
    whatHappensNext: [
      "An adviser will review your request and any supporting documentation.",
      "You may be invited to discuss barriers, adjustments, and timing with the team.",
      "If adjustments are approved, the service will explain how your learning access plan is shared and reviewed.",
    ],
    relatedServices: [
      "academic-skills-advising",
      "counselling-and-wellbeing",
      "international-student-advice",
    ],
  },
];
