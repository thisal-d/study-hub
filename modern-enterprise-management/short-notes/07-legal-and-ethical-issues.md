# ⚡ Lecture 07: Legal & Ethical Issues in IT — Short Note

> **🎯 In 15 Seconds:** IT professionals must navigate **legal regulations** (intellectual property, software licenses, privacy laws) and uphold **ethical standards** (data privacy, AI fairness, transparency) to build secure and responsible technology.

---

### 📊 1. Intellectual Property (IP) Protection in IT

| IP Category | What It Legally Protects | Real IT Example | Violation / Infringement Example |
| :--- | :--- | :--- | :--- |
| **Copyright** | Original written code, documentation, UI layouts, diagrams. | React framework codebase, AWS user manuals. | Copy-pasting commercial proprietary code directly into a commercial project. |
| **Patent** | Novel, non-obvious technological inventions and processes. | A patented compression algorithm, hardware touchscreen design. | Replicating a patented cloud load-balancing algorithm without a license. |
| **Trademark** | Brand names, logos, slogans, and distinctive commercial identities. | The Google logo, Apple name, Microsoft Windows trademark. | Creating a clone website using another brand's exact logo and name. |
| **Trade Secret** | Confidential, unreleased algorithms, recipes, and strategic formulas. | Google Search ranking algorithm, TikTok recommendation engine. | An ex-employee stealing and selling proprietary source code to a competitor. |

---

### 📊 2. Software Licensing Models Compared

| License Category | Source Code Open? | Commercial Use? | Redistribution Rules | Common Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Proprietary** | ❌ No (Closed) | ✅ Yes (With bought license) | Strict restrictions on copying, modifying, and sharing. | Microsoft Windows, Adobe Photoshop, Oracle DB. |
| **Open Source (MIT / Apache)** | ✅ Yes | ✅ Yes (Highly permissive) | Can be modified and used in proprietary commercial apps freely. | Node.js, React, VS Code, Flutter. |
| **Open Source (GPL - Copyleft)** | ✅ Yes | ⚠️ Yes (With condition) | Any derivative software created **must also be open-sourced under GPL**. | Linux kernel, GNU tools, WordPress core. |
| **Freeware** | ❌ No | ⚠️ Free for personal use | Free to download and use, but source code is closed. | Adobe Acrobat Reader, Skype. |
| **Shareware** | ❌ No | ⚠️ Trial period only | Free for limited trial time; payment required for full features. | WinRAR, trial antivirus suites. |

---

### 📊 3. Regulatory Compliance & Data Privacy Standards

| Standard / Law | Industry Domain | Core Legal Mandates for IT Teams |
| :--- | :--- | :--- |
| **GDPR** *(General Data Protection Regulation)* | Global / EU Citizen Data | Explicit opt-in consent; right to be forgotten; mandatory **72-hour breach notification**. |
| **PCI-DSS** *(Payment Card Industry Standard)* | Banking & E-Commerce | End-to-end encryption for credit cards; restrict cardholder data access; regular vulnerability scans. |
| **HIPAA** *(Health Insurance Portability Act)* | Healthcare IT | Secure Electronic Health Records (EHR); strict patient medical confidentiality and access logs. |
| **TRCSL** | Sri Lanka Telecommunications | Comply with national telecommunications, frequency spectrum, and cyber regulations. |

---

### 📊 4. Ethical Dilemmas in Modern IT & AI Systems

| Ethical Concern | Core Problem | Real-World Example | Ethical Best Practice |
| :--- | :--- | :--- | :--- |
| **AI Algorithmic Bias** | AI models inherit historical human prejudices from training data. | Amazon scrapping its AI hiring tool because it penalized female resumes. | Audit training datasets for bias; maintain active human-in-the-loop oversight. |
| **User Privacy & Consent** | Exploiting user data without clear, transparent permission. | Cambridge Analytica harvesting 87M Facebook user profiles for political targeting. | Implement transparent privacy policies, clear opt-in checkboxes, and data minimization. |
| **Access Rights & Snooping** | Employees abusing admin privileges to view private records. | Database admin reading private employee salaries without work authorization. | Enforce the **Principle of Least Privilege (PoLP)** and Multi-Factor Authentication (MFA). |
| **Software Piracy** | Running unlicensed commercial software in business operations. | Indian firm Pratibha Syntex fined \$100,000 for using pirated Microsoft/Adobe software. | Maintain regular automated Software Asset Management (SAM) license audits. |

---

### 📊 5. Real-World Case Studies Breakdown

```
┌───────────────────────────────────────┬────────────────────────────────────────────────────────┐
│             CASE STUDY                │                 CORE LESSON & TAKEAWAY                 │
├───────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. Cambridge Analytica / Facebook     │ Violating user privacy without consent leads to        │
│                                       │ massive GDPR fines and permanent loss of brand trust.  │
├───────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 2. Uber 2016 Data Breach (57M users)  │ Hiding security breaches and paying hush money is an   │
│                                       │ ethical failure and invites severe regulatory fines.   │
├───────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 3. Amazon AI Recruitment Tool         │ Historical training data bias will be amplified by AI  │
│                                       │ algorithms unless actively audited and corrected.      │
├───────────────────────────────────────┼────────────────────────────────────────────────────────┤
│ 4. Pratibha Syntex Piracy Settlement  │ Using unlicensed pirated enterprise software leads to  │
│                                       │ legal penalties ($100K settlement) and audits.         │
└───────────────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

### 📖 Jargon & Specific Words Buster (Academic Words $\rightarrow$ Plain English)

| Specific Word / Term | Precise Academic Meaning | Plain English Translation | Memory Trick |
| :--- | :--- | :--- | :--- |
| **Copyleft** | A legal licensing clause requiring derivative works to maintain the exact same open-source freedoms. | If you use my open code, your modified code must also stay open. | *Opposite of copyright.* |
| **Principle of Least Privilege (PoLP)**| Granting users only the minimum security access permissions necessary to perform their job. | Don't give full admin power if basic read-only access is enough. | Minimum required privileges. |
| **Non-Repudiation** | The assurance that a party to a communication or contract cannot deny the authenticity of their signature. | Digital proof that you cannot deny you signed a document. | *Cannot repudiate (deny).* |
| **Data Integrity** | The accuracy, completeness, and consistency of data throughout its entire lifecycle. | Making sure data cannot be secretly altered, corrupted, or faked. | Untampered, honest data. |
| **Trade Secret** | Confidential business formula or algorithm that provides a competitive edge and is kept secret. | The secret sauce of a tech company that no outsider is allowed to see. | Secret competitive recipe. |
| **Proprietary Software** | Software whose source code is kept secret and strictly controlled under commercial copyright. | Closed-source commercial software where you only buy a license to use it. | Property of the vendor. |

---

### ⚠️ Common Exam Traps

- ❌ **Mistake:** Assuming **Open-Source Software (OSS)** means "No rules, do whatever you want".
  - ✅ **Reality:** OSS is bound by strict legal licenses. If you use **GPL (Copyleft)** code inside a proprietary commercial product without releasing your code, you can be sued.
- ❌ **Mistake:** Assuming "Legal" and "Ethical" are always identical.
  - ✅ **Reality:** An action can be *strictly legal* (exploiting a loophole in an outdated law) but *deeply unethical* (selling user browsing habits without their clear knowledge).

---

### 🧠 Quick Self-Test (Active Recall)

1. **What type of intellectual property protects the actual written code of a software application?**
   <details><summary>👉 Click to reveal answer</summary>Copyright (patents protect novel technological processes/algorithms; trademarks protect logos/names).</details>

2. **Under GDPR, within how many hours must a company formally notify authorities of a data breach?**
   <details><summary>👉 Click to reveal answer</summary>Within 72 hours of becoming aware of the breach.</details>

3. **What is the Principle of Least Privilege (PoLP)?**
   <details><summary>👉 Click to reveal answer</summary>A security rule where users/systems are granted only the minimum permissions necessary to perform their specific job tasks.</details>
