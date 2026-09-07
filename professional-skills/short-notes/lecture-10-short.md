# 📘 Lecture 10 – Legal Responsibility, Data Privacy & Compliance
### Professional Skills | Short Notes

---

## 🎯 Introduction

> **"Accountability underpins the other six principles. It's about taking responsibility, having appropriate measures in place, and keeping records to demonstrate how you achieve data protection compliance."**

- Modern technologies — **social media, AI, cloud computing, mobile apps** — shape how billions of people live
- Computing creates **unexpected consequences (හදිසි ප්‍රතිඵල — results that were not planned or predicted when a technology was designed)** because technology evolves **faster than laws and ethics**
- **Organizational culture (සංවිධාන සංස්කෘතිය)** determines whether technology is used responsibly or misused

---

## 🧭 What Are Ethics in IT?

- **Ethics (ආචාර ධර්ම — a set of principles about right and wrong behaviour that guide how IT professionals design, build, and manage systems)** = guidelines to decide what is right and wrong
- In IT, ethics applies to: **designing software, handling data, creating algorithms (ඇල්ගොරිතම — step-by-step instructions a computer follows to perform a task or make a decision), and managing systems**
- Small decisions can have **huge impacts** because technology affects millions at once

### Key Ideas:
- Technology creates **new moral questions** (e.g., AI surveillance, data profiling)
- People can **lose privacy (රහස්‍යතාව — the right of individuals to control who can see or use their personal information)** without noticing
- A strong ethical culture encourages **responsible decisions (වගකීමෙන් යුතු තීරණ)**

---

## 👥 Professional Responsibilities

| **Responsibility To** | **What You Must Do** |
|---|---|
| **Clients** | Deliver accurate, reliable systems; communicate honestly; protect client data |
| **Employers** | Follow internal security policies; report threats; do not misuse company resources |
| **Colleagues** | Respect ideas; avoid **discrimination (වෙනස්කොට සැලකීම — treating someone unfairly based on their gender, race, religion, etc.)**; support an inclusive culture |
| **Society** | Avoid harmful systems (biased AI, spyware); ensure human rights are respected; support **sustainability (තිරසාරභාවය)** |

> 💡 **Example:** A developer discovers the app is silently collecting location data without user consent. Their **responsibility to society** requires them to report this and fix it immediately.

---

## ⚖️ Ethical Decision-Making Models (ආචාර ධර්ම-ගත තීරණ ගැනීම)

### 1. Stakeholder Analysis (කොටස්කරු විශ්ලේෂණය — a process of identifying everyone who is affected by a decision and considering their interests before acting)

> *"Consider everyone affected by the decision."*

- **Stakeholders (කොටස්කරු — anyone who is affected by or has an interest in the decision or outcome)** include users, non-users, employees, vulnerable groups

| **Example** | **Stakeholders** | **Issue** |
|---|---|---|
| AI Hiring System | Job applicants, HR team, women, minorities | Algorithm may unfairly exclude qualified candidates |
| University Mobile App | Students, lecturers, IT staff, disabled students | If not accessible to visually impaired students, they are excluded |

**Conclusion:** Test for **bias (පක்ஷபாதிත்வம் — a tendency to favour one group or outcome over another, often unfairly)**, use diverse datasets, maintain human oversight, ensure **transparency (විනිවිදභාවය — being open and honest about how decisions are made and how data is used)**

---

### 2. Utilitarianism (ප්‍රතිඵල-ගත ආචාර ධර්ම — an ethical theory that says you should choose the action that produces the greatest benefit for the greatest number of people)

> *"Choose the option that benefits the most people."*

| **Example** | **Benefit (Most)** | **Harm (Few)** | **Decision** |
|---|---|---|---|
| COVID-19 tracking app | Saves lives, reduces spread | Some users lose privacy | Deploy WITH safeguards (encryption, consent) |
| AI traffic cameras | Shorter travel times for all | Some wrongly fined by AI | Implement WITH an appeals process |

---

### 3. Deontology (රාජකාරි-ගත ආචාර ධර්ම — an ethical theory that says some actions are always right or wrong, regardless of the outcome; rules and rights must not be violated)

> *"Some actions are always right or wrong — rules matter."*

| **Example** | **Utilitarian View** | **Deontological View** |
|---|---|---|
| Secretly monitoring employee messages | "Better productivity benefits the company" | Secret monitoring violates rights and trust — **always wrong** |
| **Dark patterns (අඳුරු ෝ-රටාව — deceptive website designs that trick users into doing something they did not intend, like subscribing to a service)** (confusing buttons) | "Company profits increase" | Trickery violates honesty — **always unethical** |

---

## 🌐 IT Laws & Data Protection

### 🇪🇺 GDPR — General Data Protection Regulation (2018)

> The **strongest data privacy law** in the world, introduced by the European Union.

- **GDPR (General Data Protection Regulation — EU නීතිය: 2018 දී හඳුන්වා දුන් ලොව ප්‍රබලතම පෞද්ගලික දත්ත ආරක්ෂක නීතිය, EU රටවල සහ EU දත්ත හසුරුවන ඕනෑම රටක ව්‍යවසායකයන්ට ද අදාළ වේ)**

| **Key Feature** | **What It Means** |
|---|---|
| Covers all EU countries | Protects 447+ million people with one regulation |
| Applies outside the EU | Sri Lankan companies must follow GDPR if they handle EU citizen data |
| Strict rules & heavy enforcement | Companies must prove they handle data responsibly and securely |

**The Data Lifecycle Under GDPR:**

| **Stage** | **Requirement** |
|---|---|
| Data Collection | **Consent (ත්‍යාගාගත — permission given by the user before their data can be collected or used; must be freely given, specific, and informed)** must be obtained |
| Data Storage | Must be **encrypted (සංකේතනය — converting data into a secret code so unauthorized people cannot read it)** and secure |
| Data Use | Only for the stated purpose |
| Data Sharing | Must be transparent |
| Data Deletion | Users have the **right to be forgotten** |

**GDPR User Rights:**

| **Right** | **What You Can Do** |
|---|---|
| **Right to Access** | Ask "What data do you have about me?" — must receive a free copy |
| **Right to Correction / Rectification (නිවැරදි කිරීම — the right to fix wrong or outdated personal information)** | Fix wrong or outdated information |
| **Right to Deletion (ඉවත් කිරීමේ අයිතිය — the right to have your personal data permanently deleted when no longer needed)** | Delete data when no longer needed (e.g., closing a social media account) |
| **Right to Data Portability (දත්ත ගෙනයාමේ අයිතිය — the right to download your personal data and transfer it to a different service)** | Download your data and move it to another platform |

**GDPR Fines (why companies take it seriously):**
- Up to **€20 million** OR **4% of global annual revenue** (whichever is higher)
- Google fined €50 million; Amazon fined €746 million

---

### 🇺🇸 CCPA — California Consumer Privacy Act
- Customers can **opt out of data selling (දත්ත විකුණීමෙන් ඉවත් වීම — the right to refuse to allow a company to sell your personal data to third parties)**
- Companies must disclose what data they collect

---

### 🇱🇰 Sri Lankan Laws

**Personal Data Protection Act (PDPA) No.9 of 2022:**

| **Key Point** | **What It Means** |
|---|---|
| **Consent required** | Must ask permission before collecting data |
| **Users can request changes** | Can ask for correction or deletion of their data |
| **Organizations must secure data** | Proper cybersecurity measures are mandatory |
| **Data Protection Authority (දත්ත ආරක්ෂණ අධිකාරිය — an official government body that enforces data protection rules and investigates violations)** | A regulator will enforce these rules |

**Other Important Sri Lankan Acts:**

| **Act** | **Purpose** |
|---|---|
| **Computer Crimes Act (2007)** | Criminal offenses related to **hacking (හැකිං — unauthorized access to a computer system or network)** |
| **Electronic Transactions Act (2006)** | Legitimizes **digital signatures (ඩිජිටල් අත්සන — an electronic way of signing a document that proves identity and authenticity)** |
| **Right to Information Act (2016)** | Citizens can request public data from government |

---

## 🛡️ Your Legal Responsibilities as an IT Professional

- **Do not expose personal data**
- **Follow data protection laws** (GDPR, PDPA)
- **Use encryption** and **access controls (ප්‍රවේශ පාලන — systems that restrict who can view or use data; only authorized people get access)**
- **Keep documentation (ලේඛකරණය — keeping clear written records of decisions, processes, and data handling for auditing purposes)** for audits

### Privacy Principles (රහස්‍යතා මූලධර්ම):
- Collect **only what is necessary** (data minimization)
- Use data **only for the stated purpose**
- **Delete data** when no longer needed
- Keep **users informed**

---

## 📚 Case Studies

### Case Study 1: Cambridge Analytica — Global Data Abuse

**What Happened:**
- Facebook allowed a third-party app to harvest data of **87 million users** without proper **consent (ත්‍යාගාගත)**
- Data was used to **influence political campaigns** (US elections, Brexit)

**Ethical Issues:** Privacy violation, **voter manipulation (ඡන්դդායකයන් හසුරුවීම — using personal data to unfairly influence people's political choices)**, misleading users

**Solution:**
- Strict data-access limits, audits of third-party apps, stronger consent procedures

| **Ethical Model** | **Analysis** |
|---|---|
| **Utilitarianism** | Harm to society outweighs any benefit |
| **Deontology** | Violation of privacy = inherently wrong |
| **Stakeholder Analysis** | Users, voters, governments, and democracy all harmed |

---

### Case Study 2: AI Hiring System Bias

**What Happened:** AI trained on past hiring data **down-ranked women's CVs** because most past hires were men.

**Ethical Issues:** Gender **discrimination (ස්ත්‍රී-පුරුෂ වෙනස්කොට සැලකීම)**, biased **training data (පුහුණු දත්ත — the historical data used to teach an AI system; if this data is biased, the AI will also be biased)**

**Solution:** Use diverse datasets, regular bias testing, human oversight

---

### Case Study 3: NDB Bank Ledger Fraud (Sri Lanka)

**What Happened:** Rs.13 billion fraud via **ledger manipulation (ගිණුම් හසුරුවීම — illegally altering financial records to hide unauthorized transactions)**, weak internal controls

**Fraud Process:** Access → Ledger Manipulation → Hidden Transactions → Financial Loss

**Prevention:** Access control, **audit trails (විශ්ලේෂණ-ලොග — records that track who accessed what data, and when, to detect suspicious activity)**, monitoring systems

---

## 🏢 Corporate Accountability (ආයතනික වගකීම — a company's responsibility to be transparent about its actions and to answer for any harm caused by its technology or decisions)

**Tools for Ensuring Accountability:**
- Regular audits
- **Data Protection Officers (දත්ත ආරක්ෂණ නිලධාරීන් — company employees responsible for ensuring the organization follows data protection laws)**
- Clear documentation
- **Whistleblowing channels (දූෂණ හෙළිදරව් නාළිකා — safe, protected ways for employees to report illegal or unethical behaviour inside the organization)**

---

## 📊 Quick Revision Summary Table

| **Topic** | **Key Point** |
|---|---|
| **Ethics in IT** | Guidelines for right/wrong decisions in technology |
| **Utilitarianism** | Choose the action that benefits the most people |
| **Deontology** | Some rules must never be broken regardless of outcome |
| **Stakeholder Analysis** | Consider everyone affected by the decision |
| **GDPR** | EU's strongest data protection law; fines up to €20M or 4% of revenue |
| **GDPR User Rights** | Access, Correction, Deletion, Portability |
| **PDPA (Sri Lanka)** | Consent, correction, deletion, security; enforced by Data Protection Authority |
| **Computer Crimes Act 2007** | Handles hacking and cybercrime in Sri Lanka |
| **Cambridge Analytica** | Harvested 87M Facebook users' data without consent |
| **AI Hiring Bias** | AI trained on biased data discriminates against women |
| **Corporate Accountability** | Audits, Data Protection Officers, documentation, whistleblowing |
| **Privacy Principles** | Collect only what's needed; use for stated purpose; delete when done |
