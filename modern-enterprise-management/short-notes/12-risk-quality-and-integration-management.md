# ⚡ Lecture 12: Managing IT Projects – Risk, Quality & Integration — Short Note

> **🎯 In 15 Seconds:** IT project management tackles uncertainty (**Risk**), guarantees deliverables meet requirements (**Quality**), and coordinates all 9 knowledge areas so that scope changes do not destabilize the system (**Integration**).

---

### 📊 1. Risk vs. Issue vs. Assumption vs. Constraint

| Concept | Temporal Focus | Certainty | Action Required | Concrete IT Example |
| :--- | :--- | :--- | :--- | :--- |
| **Risk (අවදානම)** | Future | Uncertain ($0\% < P < 100\%$) | Plan responses (Mitigate, Avoid, etc.). | Cloud server *might* crash during registration rush. |
| **Issue (ගැටලුව)** | Present | Certain ($100\%$ occurred) | Implement immediate workaround. | Cloud server *has* crashed; students cannot log in. |
| **Assumption (උපකල්පනය)** | Present/Future | Believed true without proof | Validate via spikes and technical tests. | Assuming client network supports 1 Gbps throughput. |
| **Constraint (සීමාව)** | Entire Project | Non-negotiable boundary | Work strictly within restrictions. | Budget is capped at LKR 10M; launch by Dec 31. |

---

### 📊 2. Risk Response Strategies: Threats vs. Opportunities

| Strategy | Threats (Negative Risks) | Opportunities (Positive Risks) |
| :--- | :--- | :--- |
| **1** | **Avoid:** Eliminate cause (drop untested library). | **Exploit:** Ensure event happens 100% (assign top talent). |
| **2** | **Mitigate:** Reduce probability/impact (add auto-scaling). | **Enhance:** Increase probability/benefit (team AI training). |
| **3** | **Transfer:** Shift financial loss (cyber insurance, cloud SLA). | **Share:** Partner with specialist for mutual win (joint venture). |
| **4** | **Accept:** Retain risk (set aside contingency reserve). | **Accept:** Take advantage if it happens without effort. |

$$\textbf{Risk Score} = \text{Probability } (1–5) \times \text{Impact } (1–5) \qquad \textbf{EMV} = \text{Probability } (P) \times \text{Financial Impact } (I)$$

---

### 📊 3. Quality Assurance (QA) vs. Quality Control (QC)

| Feature | Quality Assurance (QA - තත්ත්ව සහතිකය) | Quality Control (QC - තත්ත්ව පාලනය) |
| :--- | :--- | :--- |
| **Core Focus** | **Process-oriented** (ක්‍රියාවලිය කේන්ද්‍ර කරගත්). | **Product-oriented** (නිෂ්පාදනය කේන්ද්‍ර කරගත්). |
| **Primary Goal** | **Prevent defects** from entering the codebase. | **Identify and isolate defects** in the software. |
| **Question** | *"Are we building software the right way?"* | *"Does the built software meet specifications?"* |
| **Techniques** | Coding standards, peer reviews, CI/CD pipelines. | Automated unit/integration tests, penetration tests, UAT. |

---

### 📊 4. The Cost of Quality (CoQ) Breakdown

$$\textbf{CoQ} = \textbf{Cost of Conformance} + \textbf{Cost of Non-Conformance}$$
- **Cost of Conformance (Investment in Quality):**
  - *Prevention Costs:* Developer training, design reviews, coding tools.
  - *Appraisal Costs:* QA testing salaries, load testing labs, security audits.
- **Cost of Non-Conformance (Loss from Defects):**
  - *Internal Failure Costs:* Developer bug fixing, re-testing, build rework.
  - *External Failure Costs:* Production downtime, SLA breach fines, lost customers, lawsuits.

---

### 📊 5. Integration & The Ripple Effect

Adding a "simple" feature (e.g., biometric login) ripples through all 9 knowledge areas:
- **Scope:** Extra biometric logic & fallback PINs $\to$ **Schedule:** $+2$ weeks testing $\to$ **Cost:** SDK licensing $\to$ **Risk:** Biometric data leaks $\to$ **Resources:** Security architect needed.
- **Integrated Change Control Workflow:**
  $$\text{Request} \longrightarrow \text{Impact Analysis (Scope, Time, Cost, Risk)} \longrightarrow \text{CCB Review} \longrightarrow \text{Approve/Reject} \longrightarrow \text{Update Baselines}$$

---

### 📚 6. Jargon Buster

| Difficult Term | Plain English Meaning | Sinhala Term |
| :--- | :--- | :--- |
| **Quality vs. Grade** | Quality = zero defects / meets specs; Grade = feature complexity / bells & whistles. | තත්ත්වය සහ ශ්‍රේණිය |
| **Definition of Done (DoD)** | Universal checklist every user story must satisfy before being considered shippable. | සම්මත අවසන් කිරීමේ නිර්වචනය |
| **Technical Spike** | A time-boxed agile research prototype used to retire technical risk early. | තාක්ෂණික පර්යේෂණ කාලසීමාව |

---

### ⚠️ Common Exam Traps

> [!CAUTION]
> 1. **Quality is NOT feature count:** A simple app with zero bugs is **High Quality, Low Grade**. A luxury app full of crashes is **Low Quality, High Grade**. Low quality is *never* acceptable!
> 2. **Never evaluate change requests in isolation:** When a client requests a change, the PM must *first* perform an integrated impact analysis across all 9 knowledge areas before taking it to the CCB.

---

### 🎯 Active Recall Self-Test

<details>
<summary><b>1. A team purchases cybersecurity insurance. What risk response strategy is this?</b></summary>

**Risk Transfer (පැවරීම)**. It shifts financial liability to an external third party without altering the technical probability of a breach.
</details>

<details>
<summary><b>2. Why is peer code review classified as QA rather than QC?</b></summary>

Because peer review is a **process-oriented preventive activity** performed during development to ensure engineers adhere to standards, rather than testing a finished build.
</details>
