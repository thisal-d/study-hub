# Lecture 07: Legal and Ethical Issues in IT Businesses

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** Intellectual Property, Software Licensing, Cybersecurity Laws, Professional Ethics, and the CSSL Code of Ethics  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

As software engineers, cybersecurity specialists, and IT managers, we design and administer systems that hold the most intimate details of human lives: banking credentials, medical histories, biometric scans, and confidential corporate algorithms. With such extraordinary technical capability comes profound legal accountability and ethical responsibility.

A single poor technical decision—such as harvesting user location data without informed consent, copying proprietary source code from a former employer, or concealing a database breach—can trigger devastating multi-million-dollar lawsuits, criminal prosecution, and total corporate destruction. For an IT professional, understanding legal statutes and professional ethical standards is just as critical as writing secure code.

### Why This Topic Matters
- In modern software engineering, developers frequently interact with open-source libraries, digital contracts, cloud data protection acts, and intellectual property laws.
- Ignorance of the law is no legal defense: distributing pirated software or failing to secure consumer records can result in personal criminal liability under computer crime acts.
- Emerging technologies like **Artificial Intelligence (කෘත්‍රිම බුද්ධිය)** introduce complex ethical dilemmas around algorithmic discrimination, privacy invasion, and human displacement.

### Learning Objectives
After studying these notes, you will be able to:
1. Define legal issues in IT and recognize legal risks in realistic computing scenarios.
2. Differentiate the four primary forms of **Intellectual Property Rights (IPR)** in tech: **Patents, Copyrights, Trademarks, and Trade Secrets**.
3. Classify software licenses into **Proprietary, Open-Source (GPL, MIT, Apache), Freeware, and Shareware**.
4. Explain the legal validity and security requirements of **Electronic Contracts (E-Contracts)** and **Electronic Signatures (E-Signatures)** under Sri Lankan law.
5. Contrast industry-specific regulatory standards: **PCI-DSS, HIPAA, TRCSL, and GDPR**.
6. Analyze the five foundational ethical pillars governing IT professionals.
7. Dissect landmark real-world legal and ethical scandals: **Cambridge Analytica, Uber Data Breach (2016), Amazon AI Recruitment Bias, and Pratibha Syntex Software Piracy**.
8. Apply the six core professional values of the **Computer Society of Sri Lanka (CSSL) Code of Ethics**.
9. Navigate Sri Lanka’s statutory cyber legal framework: **Electronic Transactions Act No. 19 of 2006** and **Computer Crime Act No. 24 of 2007**.

---

## 2. Main Concepts

- **2.1 Understanding Legal Issues in the IT Industry**
- **2.2 Intellectual Property Rights (IPR) in Software**
- **2.3 Software Licensing Models (Open-Source vs. Proprietary)**
- **2.4 Data Privacy Principles & Data Protection Laws**
- **2.5 Cybersecurity Laws & Breach Disclosure Mandates**
- **2.6 Electronic Contracts & E-Signatures in Sri Lanka**
- **2.7 Industry Regulatory Compliance Frameworks**
- **2.8 Five Core Ethical Dilemmas for IT Professionals**
- **2.9 Landmark Real-World Legal & Ethical Case Studies**
- **2.10 The Computer Society of Sri Lanka (CSSL) Code of Ethics**
- **2.11 Sri Lankan Cyber Legislation & SLCERT**

---

## 3. Detailed Explanations

### 3.1 What Are Legal Issues in IT Businesses?

**Legal Issues in Information Technology (තොරතුරු තාක්ෂණයේ නීතිමය ගැටලු)** refer to the statutory regulations, legal liabilities, civil duties, and compliance challenges that arise during the architecture, programming, distribution, and operational utilization of computing systems and digital data.

```
                         ┌── Intellectual Property Protection (Patents, Copyrights, Trade Secrets)
                         ├── Software Licensing & Contract Compliance
Key IT Legal Domains ────┼── Data Privacy & Protection (GDPR, PDPA)
                         ├── Cybersecurity Laws & Computer Crime Legislation
                         ├── Electronic Commercial Contracts & Digital Signatures
                         └── Industry-Specific Regulatory Governance (PCI-DSS, HIPAA)
```

---

### 3.2 Intellectual Property Rights (IPR) in Information Technology

**Intellectual Property (බුද්ධිමය දේපළ - IP)** refers to creations of the human mind—original software code, unique algorithms, distinctive brand logos, and hardware inventions—that are legally protected from unauthorized theft, duplication, and commercial exploitation.

```
                    ┌── 1. COPYRIGHT (ප්‍රකාශන හිමිකම) ── Protects written Source Code & Docs.
                    ├── 2. PATENT (පේටන්ට් බලපත්‍රය)    ── Protects novel technical Inventions & Methods.
Forms of IPR in IT ─┼── 3. TRADEMARK (වෙළඳ ලකුණ)       ── Protects Brand Names, Logos, & Visual Identity.
                    └── 4. TRADE SECRET (ව්‍යාපාරික රහස්) ── Protects confidential Source Code & Formulas.
```

#### The Four Forms of Intellectual Property

| IP Protection Form | What It Specifically Protects | Protection Duration / Nature | Practical IT Example |
|---|---|---|---|
| **Copyright (ප්‍රකාශන හිමිකම)** | Original literary and artistic expressions of ideas. In computing, **Software Source Code, Compiled Binaries, Database Schemas, and Documentation** are legally classified as literary works. | Automatic upon creation; lasts for the life of the author plus 50–70 years. | Protects the exact Java code written for a mobile banking app from being copied into a competitor's app. |
| **Patent (පේටන්ට් බලපත්‍රය)** | Protects **new, non-obvious, and practically useful inventions, technical processes, and hardware architectures**. | Typically **20 years** from filing date; requires public registration. | A novel hardware encryption chip architecture or a unique compression algorithm that drastically reduces video file size. |
| **Trademark (වෙළඳ ලකුණ)** | Protects distinctive **brand names, logos, symbols, slogans, and trade dress** that uniquely identify the commercial origin of goods. | Renewable indefinitely (usually every 10 years). | The Apple "bitten apple" logo, Google's rainbow "G" symbol, Microsoft Windows logo. |
| **Trade Secret (ව්‍යාපාරික රහස්)** | Highly confidential commercial information, internal business methods, formulas, and unreleased source code that provide a massive competitive advantage. | Indefinite, as long as the information remains strictly secret. | Google’s PageRank search ranking algorithm; Coca-Cola’s secret chemical formula; internal source code of OpenAI's GPT models. |

---

### 3.3 Software Licensing Models

A **Software License (මෘදුකාංග බලපත්‍රය)** is a legally binding contract that establishes clear terms governing **who can use the software, how it can be utilized, whether it can be modified, and under what conditions it may be redistributed**.

```
                           ┌── Proprietary (Closed-source, commercial, strict limits: Windows, macOS)
Software Licensing Models ─┼── Open-Source (Source code accessible; GPL, MIT, Apache)
                           ├── Freeware (Free of charge, but source code is CLOSED: Adobe Reader)
                           └── Shareware (Free evaluation trial; payment required to unlock full features)
```

#### Detailed Breakdown of Licensing Categories

1. **Proprietary / Closed-Source Software (හිමිකාරී මෘදුකාංග):**
   - The compiled machine code is sold or licensed; the underlying human-readable source code is strictly withheld as a trade secret.
   - Users are prohibited from reverse-engineering, modifying, decompiling, or redistributing the software.
   - *Examples:* Microsoft Windows, Adobe Photoshop, macOS, Oracle Database.
2. **Open-Source Software - OSS (විවෘත කේත මෘදුකාංග):**
   - The human-readable source code is made publicly available for inspection, modification, and enhancement.
   - Users must strictly comply with the specific open-source license:
     - **Permissive Licenses (MIT, Apache 2.0, BSD):** Highly flexible; developers can take the open-source code, modify it, and include it inside proprietary, closed-source commercial software with minimal attribution requirements.
     - **Copyleft / Viral Licenses (GNU General Public License - GPL):** Strict reciprocity; if you modify or link GPL code into your software and distribute it, **your entire project must also be made 100% open-source under the GPL**.
3. **Freeware (නොමිලේ ලබාදෙන මෘදුකාංග):**
   - Available to download and use free of monetary charge, but the underlying source code is **closed and proprietary**. Users cannot modify or sell the code.
   - *Examples:* Adobe Acrobat Reader, Google Chrome, Skype.
4. **Shareware (නියමු මෘදුකාංග):**
   - Proprietary software distributed free of charge on a trial or evaluation basis.
   - After a grace period (e.g., 30 days) or to unlock advanced features, the user is legally obligated to purchase a commercial license.
   - *Examples:* WinRAR, trial versions of commercial antivirus tools.

---

### 3.4 Data Privacy & Protection Principles

Data privacy concerns the rights of human individuals to determine **how, when, and to what extent their personal identifiable information (PII) is collected, stored, processed, and transmitted**.

```
                  ┌── 1. Lawful Consent (Obtaining explicit permission before collecting data)
                  ├── 2. Purpose Limitation (Using data ONLY for the stated, agreed purpose)
Core Principles   ├── 3. Data Minimization (Collecting ONLY the bare minimum data necessary)
of Data Privacy   ├── 4. Data Accuracy & Integrity (Keeping information correct and protected)
                  ├── 5. Storage Limitation (Deleting data once the transaction completes)
                  └── 6. Security Safeguards (Encrypting data in transit and at rest)
```

- **Personal Identifiable Information - PII (පුද්ගලිකව හඳුනාගත හැකි තොරතුරු):** Any data that can identify an individual (National Identity Card - NIC numbers, biometric fingerprints, home addresses, phone numbers, GPS location traces).
- **Personal Data Protection Act No. 9 of 2022 (Sri Lanka):** Sri Lanka's landmark privacy legislation modeled on the EU GDPR. Grants citizens the legal right to access, rectify, and demand the deletion of their personal data held by banks, telecom providers, and software apps.

---

### 3.5 Cybersecurity Laws & Breach Disclosure

**Cybersecurity Laws (සයිබර් ආරක්ෂණ නීති)** are statutory frameworks designed to protect computer networks, servers, and data repositories from unauthorized intrusion, malicious tampering, sabotage, and cyber warfare.

- **Mandatory Breach Notification (දත්ත කඩවීම් පිළිබඳ දැනුම්දීමේ නීතිය):** Modern cybersecurity laws mandate that if an organization suffers a data leak or unauthorized breach, it **must legally report the incident to national regulatory authorities (e.g., SLCERT) and notify affected consumers within a strict window (e.g., 72 hours under GDPR)**.
- Concealing a security breach or paying off ransomware extortionists in secret is an explicit violation of the law.

---

### 3.6 Electronic Contracts & E-Signatures in Sri Lanka

In the modern digital economy, commercial agreements are rarely executed on physical paper with fountain pens.

- **E-Contracts (විද්‍යුත් ගිවිසුම්):** Legally binding agreements formed, negotiated, accepted, and stored entirely in electronic formats (e.g., clicking "I Agree" on an online terms-of-service webpage, exchanging signed PDF agreements via email).
- **E-Signatures (විද්‍යුත් අත්සන්):** Electronic data logically attached to an electronic record used by a signatory to signify formal legal assent (e.g., cryptographic digital signatures, DocuSign verified signatures).

#### The Statutory Basis: Electronic Transactions Act No. 19 of 2006 (Sri Lanka)
> Under the **Electronic Transactions Act No. 19 of 2006**, contracts, commercial transactions, and formal agreements executed electronically are **fully recognized as legally valid, enforceable, and admissible in a court of law** in Sri Lanka, having the identical legal standing of physical paper contracts!

---

### 3.7 Industry Regulatory Compliance Frameworks

Compliance means systematically following industry-specific statutes, security benchmarks, and government standards:

```
                            ┌── PCI-DSS (Payment Card Industry Data Security Standard) ── Financial Cards
Regulatory Frameworks in IT ┼── HIPAA (Health Insurance Portability & Accountability Act) ── Health Records
                            ├── TRCSL (Telecommunications Regulatory Commission of Sri Lanka) ── Telecom
                            └── GDPR (General Data Protection Regulation - EU) ── Global Data Privacy
```

1. **PCI-DSS (ගෙවීම් කාඩ්පත් දත්ත ආරක්ෂණ ප්‍රමිතිය):** Mandatory global security standard for any enterprise that accepts, processes, or stores credit/debit card data (Visa, Mastercard). Mandates end-to-end tokenization, encrypted transmission, and isolated payment gateways.
2. **HIPAA (සෞඛ්‍ය රක්ෂණ සහ වගවීමේ පනත):** Strict US health data privacy standard (replicated globally) safeguarding electronic protected health information (ePHI). Software handling patient records must enforce strict role-based access and encryption.
3. **TRCSL (ශ්‍රී ලංකා විදුලි සංදේශ නියාමන කොමිෂන් සභාව):** Regulates telecommunications infrastructure, spectrum frequency allocation, and internet service provider licenses in Sri Lanka.
4. **GDPR (යුරෝපා සංගමයේ දත්ත ආරක්ෂණ රෙගුලාසිය):** The world's strictest privacy law. Applies to any Sri Lankan software consultancy building software that processes the personal data of European citizens. Carries fines up to €20 million or 4% of annual global turnover.

---

### 3.8 Five Core Ethical Dilemmas for IT Professionals

Ethics concerns the moral principles that govern human behavior—distinguishing what is **right, fair, and honorable** from what is technically possible:

```
                   ┌── 1. Personal Privacy (Respecting user data confidentiality)
                   ├── 2. Access Rights (Enforcing Least Privilege; preventing snooping)
Ethical Pillars for ┼── 3. Avoiding Harmful Actions (Zero malicious malware or DDoS attacks)
  IT Professionals ├── 4. Safeguarding Trade Secrets (Honoring Non-Disclosure Agreements)
                   └── 5. AI & Automation Ethics (Preventing bias, ensuring transparency)
```

1. **Personal Privacy (පුද්ගලිකත්වය රැකීම):** IT professionals should never inspect, disclose, or sell confidential customer database records, even if they possess root database access.
2. **Access Rights & Least Privilege (ප්‍රවේශ අයිතිවාසිකම්):** Granting employees only the minimum access rights required to perform their daily duties (**Principle of Least Privilege**). Snooping into colleague emails or ex-partner records is grossly unethical and illegal.
3. **Harmful Actions (හානිකර ක්‍රියාවලින් වැළකීම):** Intentionally creating backdoors, injecting logic bombs, deploying malware, or sabotaging infrastructure upon resignation.
4. **Trade Secrets & NDAs (ව්‍යාපාරික රහස් රැකීම):** When moving to a competing software firm, developers are legally and ethically forbidden from copying proprietary source code, algorithms, or client contact lists.
5. **AI & Automation Ethics (කෘත්‍රිම බුද්ධිය සහ ආචාරධර්ම):**
   - *Algorithmic Bias (ඇල්ගොරිතම පක්ෂපාතීත්වය):* Training machine learning models on biased historical data results in discrimination against minority demographics.
   - *Human Oversight:* Ensuring life-critical decisions (medical diagnosis, automated drone strikes, loan rejections) retain human responsibility.
   - *Transparency / Explainability:* Users deserve to know why an AI system rejected their mortgage or job application.

---

### 3.9 Landmark Real-World Case Studies

#### 1. Cambridge Analytica / Facebook Data Scandal (2018)
- **The Incident:** Cambridge Analytica, a political data analytics firm, harvested personal demographic and psychological profile data from over **87 million Facebook users** without their explicit knowledge or consent via a third-party personality quiz app ("This Is Your Digital Life"). The data was used to build psychographic profiles to manipulate voters during major political elections.
- **Legal Dimension:** Violation of data privacy laws and consent protocols; resulted in a record **$5 Billion FTC fine** against Facebook and massive GDPR regulatory investigations.
- **Ethical Dimension:** Gross betrayal of user trust, total lack of transparency, manipulation of democratic processes, and exploitation of personal digital footprints.

#### 2. Uber’s Catastrophic 2016 Data Breach & Concealment
- **The Incident:** Hackers breached Uber’s third-party Amazon AWS datacenters, accessing the sensitive personal records (names, email addresses, and driver's license numbers) of **57 million passengers and drivers**.
- **The Unethical Cover-Up:** Instead of notifying regulatory authorities and the affected public as legally required, Uber’s executive team paid the hackers **$100,000 in Bitcoin disguised as a "Bug Bounty"** and forced the hackers to sign Non-Disclosure Agreements (NDAs) to keep the breach a secret!
- **Legal Dimension:** Violation of mandatory breach notification statutes; Uber settled with all 50 US States for $148 million, and the Chief Security Officer (CSO) was criminally prosecuted for obstruction of justice.
- **Ethical Dimension:** Deceptive concealment, endangering user cybersecurity to preserve corporate stock reputation.

#### 3. Amazon’s AI Recruitment System Gender Bias (2018)
- **The Incident:** Amazon built an experimental automated machine learning recruitment engine to evaluate and score job applicant CVs, aiming to automate early-stage hiring.
- **The Flaw:** The AI model was trained on historical resumes submitted to Amazon over a 10-year period. Because the tech industry had historically been male-dominated, the training dataset contained mostly male resumes.
- **The Outcome:** The AI self-learned that male candidates were preferred. It actively penalized resumes containing the word *"women's"* (e.g., "captain of women's chess club") and downgraded graduates from all-women colleges! Amazon scrapped the project.
- **Legal & Ethical Dimension:** Algorithmic gender discrimination; demonstrated that AI models inherit, amplify, and automate human societal prejudices if training data is not rigorously audited.

#### 4. Pratibha Syntex Ltd: Corporate Software Piracy Settlement
- **The Incident:** Pratibha Syntex, a major Indian textile manufacturing exporter, used pirated, unlicensed copies of Microsoft software (Windows, Office) and Adobe products inside its business operations to cut operational costs.
- **The Legal Action:** Sued under unfair competition and software copyright laws in the United States (where its textile exports were sold).
- **The Outcome:** The firm settled the lawsuit by paying a **$100,000 fine**, was forced to spend massive capital purchasing genuine commercial software licenses, and was subjected to mandatory third-party software audits.
- **Ethical Dimension:** Stealing intellectual property to achieve an unfair cost advantage over law-abiding competitors.

---

### 3.10 The Computer Society of Sri Lanka (CSSL) Code of Ethics

The **Computer Society of Sri Lanka (CSSL - ශ්‍රී ලංකා පරිගණක සංගමය)** is the premier professional body representing ICT practitioners in Sri Lanka. All professional software engineers are expected to uphold its **Six Core Ethical Values**:

```
                       ┌── 1. Professionalism (උසස් වෘත්තීය ප්‍රමිතීන් සහ ගෞරවය රැකීම)
                       ├── 2. Honesty (සත්‍යවාදී බව, මංකොල්ලකෑමෙන් වැළකීම, ගෞරවය දීම)
                       ├── 3. Competence (සුදුසුකම් ඇති කාර්යයන් පමණක් භාරගැනීම)
CSSL Core Values ──────┼── 4. Professional Development (අඛණ්ඩ ඉගෙනුම සහ දැනුම බෙදාගැනීම)
                       ├── 5. Adding Value to Sri Lanka (ජාතික ඩිජිටල් සංවර්ධනයට දායක වීම)
                       └── 6. Responsibility & Integrity (රහස්‍යභාවය රැකීම, ගැටුම්වලින් වැළකීම)
```

1. **Professionalism (වෘත්තීයභාවය):** Upholding high professional standards, behaving with dignity, and safeguarding the honor, reputation, and public trust of the ICT profession.
2. **Honesty (අවංකභාවය):** Being truthful in all technical disclosures, avoiding deception, rejecting plagiarism (never claiming other developers' code as your own), and giving proper intellectual credit.
3. **Competence (නිපුණතාව):** Accepting only technical projects you are genuinely qualified to deliver; continuously refining technical skills and ensuring deliverables are robust, secure, and defect-free.
4. **Professional Development (වෘත්තීය සංවර්ධනය):** Engaging in lifelong technical education, staying updated with emerging frameworks, and mentoring younger engineers.
5. **Adding Value to Sri Lanka (ශ්‍රී ලංකාවට වටිනාකමක් එක්කිරීම):** Utilizing ICT capabilities to uplift national society, driving digital transformation, and building innovative solutions that advance the nation's socioeconomic development.
6. **Responsibility and Integrity (වගකීම සහ අවංකභාවය):** Strictly safeguarding client confidentiality, avoiding conflicts of interest, and acting with moral integrity in the best interests of employers, clients, and society.

---

### 3.11 Sri Lankan Cyber Legislation & SLCERT

Sri Lanka maintains a robust legal framework governing digital activities:

#### 1. Electronic Transactions Act No. 19 of 2006
- Eliminates legal barriers to electronic commerce.
- Formally validates electronic contracts, notices, receipts, and electronic signatures.
- Confirms that electronic evidence and database logs are fully admissible in Sri Lankan judicial courts.

#### 2. Computer Crime Act No. 24 of 2007 (පරිගණක අපරාධ පනත)
Criminalizes and establishes severe fines and prison sentences for malicious computing offenses:
- **Unauthorized Access (අනවසරයෙන් ප්‍රවේශ වීම):** Hacking into servers or accessing accounts without permission.
- **Unauthorized Access with Intent to Commit Offenses:** Hacking into banks to siphon funds.
- **Damage or Denial of Service (පද්ධති අඩපණ කිරීම):** Injecting viruses, launching DDoS attacks, or deliberately wiping production databases.
- **Trafficking in Passwords:** Selling compromised database passwords or administrative tokens.

#### 3. SLCERT (Sri Lanka Computer Emergency Readiness Team)
The national focal point for cybersecurity in Sri Lanka. SLCERT coordinates incident response, investigates major national cyberattacks, issues public threat advisories, and assists law enforcement in digital forensics.

---

## 4. Comparison Tables

### 4.1 Comparison of Intellectual Property Protections in IT

| IP Dimension | What It Protects | Registration Required? | Typical Duration | IT Practical Example |
|---|---|---|---|---|
| **Copyright** | Written source code, binaries, documentation, UI layouts. | **No** (Automatic upon creation). | Author's Life + 50–70 years. | Protecting the exact lines of Python code of an application. |
| **Patent** | Novel technical inventions, physical systems, unique algorithmic methods. | **Yes** (Strict formal examination). | **20 years** from filing. | Protecting a novel biometric fingerprint scanning hardware mechanism. |
| **Trademark** | Brand names, product logos, visual identity, slogans. | **Yes** (Registered with Trademark Office). | **10 years** (Renewable indefinitely). | The name "PickMe" and its distinctive green vehicle icon. |
| **Trade Secret** | Undisclosed business secrets, internal algorithms, customer formulas. | **No** (Secret by nature; protected via NDAs). | **Indefinite** (Until leaked or discovered). | The proprietary algorithmic weighting formula of Google Search. |

### 4.2 Permissive vs. Copyleft Open-Source Licenses

| Attribute | Permissive License (e.g., MIT, Apache 2.0) | Copyleft / Viral License (e.g., GNU GPL) |
|---|---|---|
| **Commercial Use** | Allowed freely in closed-source proprietary software. | Allowed, but with extreme architectural conditions. |
| **Source Disclosure** | You do **not** have to release your modified source code. | **Mandatory:** You MUST publish your complete source code to the public. |
| **Attribution Requirement** | Must include original copyright notice. | Must include copyright, warranty disclaimer, and full GPL text. |
| **Business Risk** | Extremely safe for commercial software firms. | High risk: can accidentally force a private firm to open-source its proprietary IP! |

---

## 5. Processes and Workflows

### 5.1 Ethical Decision-Making Framework for IT Incidents

```
1. Identify the Ethical & Legal Dilemma
   └─► Example: A developer discovers a critical SQL injection vulnerability in an unreleased banking app.
         │
         ▼
2. Evaluate Legal Obligations
   └─► Personal Data Protection Act & Computer Crime Act mandate user security and breach prevention.
         │
         ▼
3. Consult Professional Code of Ethics (CSSL)
   └─► Pillar 1 (Professionalism) & Pillar 6 (Responsibility & Integrity) mandate prioritizing user safety.
         │
         ▼
4. Assess Affected Stakeholders
   └─► End users (financial loss), the bank (reputational collapse), the employer (lawsuits).
         │
         ▼
5. Formulate Action Options
   └─► Option A: Keep quiet to hit launch deadline (UNETHICAL & ILLEGAL).
   └─► Option B: Immediately report to Tech Lead with reproducible proof and patch recommendation (ETHICAL).
         │
         ▼
6. Execute and Document Resolution
   └─► Present technical vulnerability report; patch code before production deployment.
```

---

## 6. Practical Real-World Scenarios

### Scenario: The Temptation of Pirated Software in a Cash-Strapped Startup
- **Context:** An early-stage graphics design and web development agency in Colombo runs short of funds. The agency needs 10 licenses of Adobe Creative Cloud (costing $800/month). A senior designer suggests: *"Let's just download cracked, pirated versions from a torrent site. Everyone in Sri Lanka does it, and nobody will ever find out."*
- **Multidimensional Analysis:**
  1. *Legal Violation:* Clear infringement of software copyright. Under international intellectual property treaties and the US Lanham Act, foreign clients can sue the agency. (Remember the **Pratibha Syntex case**, where a company paid $100,000 for using pirated software!).
  2. *Cybersecurity Threat:* Torrented, cracked software almost universally contains embedded trojans, cryptominers, and ransomware backdoors. Installing cracked software on company machines jeopardizes client data and exposes internal networks.
  3. *Ethical Violation:* Direct violation of CSSL Core Value 2 (Honesty) and Core Value 3 (Competence).
- **Managerial Decision:** Strictly reject the proposal. If commercial software is unaffordable, use viable **Open-Source alternatives** (e.g., Figma for UI design, GIMP/Inkscape for graphics) or negotiate flexible monthly startup tiers.

---

## 7. Advantages and Limitations of Legal Frameworks in Tech

| Legal Mechanism | Strategic Protection (වාසි) | Practical Limitations (සීමාවන්) |
|---|---|---|
| **Software Patents** | • Grants a powerful 20-year legal monopoly.<br>• Prevents competitors from building identical systems. | • Extremely expensive ($10,000–$50,000 to file).<br>• Requires total public disclosure of technical inner workings.<br>• Software patent laws vary widely between the US, Europe, and Asia. |
| **Strict Data Privacy Laws (GDPR / PDPA)** | • Protects innocent citizens from predatory surveillance and data harvesting.<br>• Enhances global consumer trust. | • High compliance costs for small startups (hiring Data Protection Officers, conducting security audits). |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Focus on these frequently examined distinctions:
> 1. **Software Code Protection:** Software source code is protected primarily by **Copyright** (as an original literary work), NOT by patent.
> 2. **Electronic Signatures in Sri Lanka:** Fully legally recognized under the **Electronic Transactions Act No. 19 of 2006**.
> 3. **The CSSL Code of Ethics:** Know the six core values: Professionalism, Honesty, Competence, Professional Development, Adding Value to Sri Lanka, and Responsibility & Integrity.
> 4. **Is the CSSL Code of Ethics Legally Binding?** No; it is a professional ethical standard and code of conduct for members, not statutory criminal law enacted by Parliament.
> 5. **Open Source Commercial Use:** Open-source software *can* be used commercially, provided the user strictly complies with license conditions (e.g., MIT allows proprietary bundling; GPL requires releasing source code).

---

## 9. Quick Revision Summary

- **Legal Issues in IT:** Intellectual property, data privacy, software licensing, cybersecurity laws, e-contracts, and regulatory compliance.
- **IPR Types:** Copyright (code/docs), Patent (inventions/hardware), Trademark (brands/logos), Trade Secret (confidential algorithms).
- **Licenses:** Proprietary (closed), Open-Source (permissive MIT vs copyleft GPL), Freeware (free but closed), Shareware (trial).
- **Privacy:** Purpose limitation, data minimization, lawful consent, mandatory breach notification.
- **Sri Lankan Cyber Laws:** Electronic Transactions Act No. 19 of 2006 (e-contracts/e-signatures valid) and Computer Crime Act No. 24 of 2007 (criminalizes hacking, DDoS, tampering).
- **CSSL Code:** Professionalism, Honesty, Competence, Professional Development, Adding Value to Sri Lanka, Responsibility & Integrity.
- **Key Case Studies:** Cambridge Analytica (consent/privacy), Uber 2016 (breach concealment), Amazon AI (algorithmic gender bias), Pratibha Syntex (software piracy penalty).

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A software engineering team writes 5,000 lines of proprietary C++ code for an algorithmic trading engine. Which legal mechanism automatically protects this source code from unauthorized copying from the moment it is written?  
A. Patent  
B. Copyright  
C. Trademark  
D. Digital Certification  
*Answer:* **B**  
*Explanation:* Software code is categorized as an original literary work and receives automatic Copyright protection the instant it is created.

**Q2:** A software developer downloads a popular open-source image filtering library released under the GNU General Public License (GPL). He incorporates this library into his company’s commercial software product. What is the legal implication of using GPL code?  
A. He can sell the software and keep the entire codebase completely closed and secret  
B. He must pay an annual fee of $1,000 to the original open-source creator  
C. He is legally obligated to release the entire source code of his commercial software under the GPL  
D. The software becomes completely illegal to distribute under any circumstances  
*Answer:* **C**  
*Explanation:* The GNU GPL is a "copyleft" or viral license. Linking or incorporating GPL code into a distributed software application legally mandates that the entire application's source code be made publicly available under the GPL.

**Q3:** Under the Electronic Transactions Act No. 19 of 2006 of Sri Lanka, what is the legal validity of a commercial contract formed and agreed via electronic email communication?  
A. It is legally void and inadmissible in court  
B. It is legally valid and holds the identical enforceable status of a physical signed paper contract  
C. It is valid only if both parties obtain written approval from the Ministry of Justice  
D. It is valid only for transactions below LKR 10,000  
*Answer:* **B**  
*Explanation:* The 2006 Act explicitly grants electronic transactions and e-signatures full legal validity and court admissibility.

---

### Short-Answer & Scenario-Based Questions

**Q4 (True/False with Explanations):**  
Evaluate whether the following statements are True or False based on lecture materials:
1. *"Open-source software can never be used for commercial, revenue-generating business applications."*  
   *Answer:* **False.** Open-source software is widely used in commercial enterprises (e.g., Red Hat Linux, Android, AWS architectures). Commercial usage is fully permitted as long as the organization adheres to the specific terms of the open-source license.
2. *"The CSSL Code of Ethics is a legally binding criminal statute enacted by the Parliament of Sri Lanka."*  
   *Answer:* **False.** The CSSL Code of Ethics is a professional code of conduct governing members of the professional association; statutory criminal offenses are defined by acts of Parliament, such as the Computer Crime Act No. 24 of 2007.

**Q5 (Scenario-Based Analysis):**  
A senior systems administrator at a cloud datacenter in Sri Lanka is fired due to corporate downsizing. Angered by his dismissal, he logs into the production server using his administrative credentials before his account is deactivated, and executes a script that deletes the primary database containing 100,000 citizen medical records.
1. Identify the specific Sri Lankan law that has been violated and name the specific computer crime committed.  
2. Identify two distinct ethical violations under the CSSL Code of Ethics.  
3. Recommend two technical best practices the datacenter should have enforced to prevent this incident.  
*Model Answer:*  
1. **Statutory Legal Violation:** **Computer Crime Act No. 24 of 2007 (Sri Lanka)**. The offenses committed include: Unauthorized Access, Intentional Damage to Computer Systems, and Deliberate Destruction/Tampering of Digital Data.  
2. **CSSL Ethical Violations:**
   - *Core Value 1 (Professionalism):* Failed to act with professional dignity, severely damaging the reputation of the IT profession.
   - *Core Value 6 (Responsibility and Integrity):* Gross violation of integrity, intentionally harming the employer and innocent citizens whose health records were destroyed.  
3. **Technical Best Practices to Prevent Incident:**
   - *Immediate Revocation of Privileged Access:* HR and IT Security must coordinate to revoke all Active Directory, SSH, and database credentials *before* or concurrently with notifying an employee of termination.
   - *Four-Eyes Principle / Separation of Duties:* Deletion of primary production databases should require dual-authorization (two separate administrators approving the command) and automated immutable off-site backups must be maintained.
