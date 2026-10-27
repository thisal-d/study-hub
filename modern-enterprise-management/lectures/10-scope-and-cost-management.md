# Lecture 10: Project Management – Scope & Cost Management

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** Scope Baselines, WBS Decomposition, Cost Estimation Techniques, and Earned Value Management (EVM)  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

In software engineering, two questions haunt every project manager and technical lead:
1. *"What exactly are we building, and what are we NOT building?"* (**Scope Management**)
2. *"How much will it cost, and are we staying within our financial limits?"* (**Cost Management**)

When project scope is poorly defined, systems suffer from **Scope Creep (අනවසරයෙන් විෂය පථය පුළුල් වීම)**—the silent killer of software projects where endless unapproved features are added without increasing time or budget. Simultaneously, without rigorous cost estimation and real-time variance monitoring via **Earned Value Management (EVM)**, tech companies suffer catastrophic cost overruns that wipe out commercial profit.

This lecture provides the formal PMBOK® tools, decomposition techniques, mathematical formulas, and baseline controls needed to govern project scope and finances with absolute precision.

### Why This Topic Matters
- Uncontrolled scope creep and budget blowouts account for over 50% of software project cancellations globally.
- Tech leads must know how to decompose an architectural vision into manageable **Work Packages (කාර්ය පැකේජ)** using a **Work Breakdown Structure (WBS)**.
- Calculating Earned Value metrics (PV, EV, AC, CV, CPI, SV, SPI) is a mandatory core competency for project managers and a guaranteed examination topic.

### Learning Objectives
After studying these notes, you will be able to:
1. Define **Project Scope Management** and contrast **Project Scope** with **Product Scope**.
2. Sequence and detail the six core Scope Management processes.
3. Classify software requirements into **Functional, Non-Functional, Business, and Technical Requirements**, and construct a **Requirements Traceability Matrix (RTM)**.
4. Compose a comprehensive **Project Scope Statement** incorporating deliverables, assumptions, constraints, and exclusions.
5. Apply the technique of **Decomposition (විසංයෝජනය)** to build a multi-level **Work Breakdown Structure (WBS)** and define the **Scope Baseline**.
6. Clearly contrast **Validate Scope** with **Control Quality**.
7. Contrast traditional scope management with **Agile Scope Management** (Backlogs, User Stories).
8. Detail the four core Cost Management processes and evaluate the four major cost estimation techniques: **Analogous, Parametric, Bottom-Up, and Three-Point (PERT) Estimating**.
9. Formulate the project budget hierarchy distinguishing between **Contingency Reserves** and **Management Reserves**.
10. Calculate and interpret all **Earned Value Management (EVM)** metrics (CV, SV, CPI, SPI) to determine whether a software project is over budget or behind schedule.

---

## 2. Main Concepts

- **2.1 Understanding Scope Management & Boundaries**
- **2.2 Project Scope vs. Product Scope**
- **2.3 The Six Scope Management Processes**
- **2.4 Requirements Engineering & The Traceability Matrix (RTM)**
- **2.5 The Project Scope Statement (Inclusions vs. Exclusions)**
- **2.6 The Work Breakdown Structure (WBS) & Decomposition**
- **2.7 Validate Scope vs. Control Quality**
- **2.8 Scope Creep: Causes, Detection, and Prevention**
- **2.9 Agile Scope Management: Epics, User Stories, and Sprints**
- **2.10 The Four Cost Management Processes**
- **2.11 Four Cost Estimation Techniques (Formulas & Worked Math)**
- **2.12 Structuring the Project Budget: Cost Baselines vs. Reserves**
- **2.13 Earned Value Management (EVM): Formulas, Math & Interpretation**
- **2.14 Agile Cost Management: Burn Rates & Team Velocity**

---

## 3. Detailed Explanations

### 3.1 What Is Project Scope Management?

#### Formal Definition
> **Project Scope Management (ව්‍යාපෘති විෂය පථ කළමනාකරණය)** includes the processes required to ensure that a project includes **all the work required, and ONLY the work required**, to complete the project successfully.

- **Primary Goal:** To establish clear, defensible boundaries around the software project.
- Scope management focuses primarily on defining and controlling what is **in-scope** and explicitly what is **out-of-scope**. Doing extra work that was not requested ("Gold Plating") is just as unacceptable as delivering incomplete work.

---

### 3.2 Project Scope vs. Product Scope

A fundamental distinction in systems development:

```
[ PRODUCT SCOPE ]  ──► Focuses on FEATURES & FUNCTIONS ("What should the system do?")
[ PROJECT SCOPE ]  ──► Focuses on the WORK REQUIRED ("How will the team build and deliver it?")
```

| Dimension | Project Scope (ව්‍යාපෘති විෂය පථය) | Product Scope (නිෂ්පාදන විෂය පථය) |
|---|---|---|
| **Core Focus** | The **work, tasks, and activities** that must be performed to deliver the product. | The **features, attributes, and capabilities** of the software application itself. |
| **Key Question** | *"How will the work be executed, tested, and managed?"* | *"What functions and UI capabilities will the software provide?"* |
| **Managed By** | Project Manager (PM), Delivery Lead, Scrum Master. | Product Owner (PO), Business Analyst (BA), Solutions Architect. |
| **Measured Against** | The Project Management Plan and Schedule Baseline. | The Product Requirements Document (PRD). |
| **Mobile Banking Example** | Writing code, configuring AWS servers, conducting penetration testing, training bank tellers. | Biometric fingerprint login, instant funds transfer, PDF statement generation, SMS transaction alerts. |

---

### 3.3 The Six Scope Management Processes

```
[ 1. Plan Scope ] ──► [ 2. Collect Reqs ] ──► [ 3. Define Scope ] ──► [ 4. Create WBS ] ──► [ 5. Validate Scope ] ──► [ 6. Control Scope ]
 (Create Scope Plan)   (Gather user needs)    (Scope Statement)      (Decompose to tasks)   (Formal client sign-off)  (Prevent Scope Creep)
```

1. **Plan Scope Management:** Creates the **Scope Management Plan** (how scope will be defined and controlled) and the **Requirements Management Plan** (how requirements will be analyzed and tracked).
2. **Collect Requirements:** Engaging stakeholders to determine and document detailed business, user, and technical needs.
3. **Define Scope:** Developing a detailed description of the project boundaries and deliverables in the **Project Scope Statement**.
4. **Create WBS:** Subdividing large project deliverables into smaller, manageable work packages using **Decomposition**.
5. **Validate Scope:** The formal process of obtaining written customer or stakeholder acceptance of completed deliverables.
6. **Control Scope:** Monitoring project execution status, comparing actual work against the scope baseline, and managing change requests to prevent scope creep.

---

### 3.4 Requirements Engineering & The Traceability Matrix (RTM)

Requirements form the absolute foundation of all software development:

#### The Four Categories of Software Requirements
1. **Functional Requirements (ක්‍රියාකාරී අවශ්‍යතා):** Describe what the software system must actively do.  
   *Examples:* "The system must allow users to reset their password via SMS OTP"; "The platform must calculate compound interest on loans."
2. **Non-Functional Requirements - NFRs (ක්‍රියාකාරී නොවන අවශ්‍යතා):** Describe the quality, security, and performance characteristics of the system.  
   *Examples:* "The system must process 1,000 transactions per second"; "API response time must be under 200 milliseconds"; "System availability must be 99.99%."
3. **Business Requirements (ව්‍යාපාරික අවශ්‍යතා):** Describe the high-level commercial goals of the organization.  
   *Example:* "Reduce bank branch operational costs by 30% through digital self-service."
4. **Technical Requirements (තාක්ෂණික අවශ්‍යතා):** Structural and environmental constraints.  
   *Example:* "The application must be deployed on AWS Kubernetes clusters and support PostgreSQL 15."

---

#### The Requirements Traceability Matrix (RTM - අවශ්‍යතා සොයාගැනීමේ න්‍යාසය)
The RTM is a structured grid that links every single user requirement from its origin, through technical design and code development, to the specific test case that validates it:

```
┌───────┬────────────────────────────┬────────────────────┬──────────────────┬─────────────────┐
│ Req ID│ Requirement Description    │ Business Need      │ WBS Deliverable  │ Test Case ID    │
├───────┼────────────────────────────┼────────────────────┼──────────────────┼─────────────────┤
│ R-101 │ Fingerprint Biometric Auth │ Security Mandate   │ WBS 2.3 Auth Mod │ TC-SEC-042 (Pass)│
│ R-102 │ Real-Time LankaQR Payment  │ Merchant Expansion │ WBS 3.1 Pay API  │ TC-PAY-108 (Pass)│
└───────┴────────────────────────────┴────────────────────┴──────────────────┴─────────────────┘
```
*Why RTM Matters:* Ensures **zero missing requirements** upon deployment, and prevents developers from building unauthorized features that do not trace back to an approved business goal.

---

### 3.5 The Project Scope Statement

The **Project Scope Statement (ව්‍යාපෘති විෂය පථ ප්‍රකාශය)** is the definitive document defining what is included in the project and what is explicitly excluded:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   PROJECT SCOPE STATEMENT COMPONENTS                   │
├──────────────────────────┬─────────────────────────────────────────────┤
│ 1. Project Objectives    │ The measurable business outcomes to achieve.│
│ 2. Deliverables          │ The verified outputs (Code, APIs, Manuals). │
│ 3. In-Scope Activities   │ The exact work the team commits to build.   │
│ 4. Exclusions (Out-Scope)│ What will NOT be built under any condition. │
│ 5. Assumptions           │ Beliefs assumed to be true without proof.   │
│ 6. Constraints           │ Strict boundaries (Budget, Deadline, Laws). │
│ 7. Acceptance Criteria   │ Conditions required for formal sign-off.    │
└──────────────────────────┴─────────────────────────────────────────────┘
```

#### Practical Example: Mobile Banking App Scope Statement
- **In-Scope (ඇතුළත් විෂය පථය):** User registration, balance inquiry, inter-bank fund transfers via LankaPay, utility bill payments.
- **Exclusions / Out-of-Scope (බැහැර කළ විෂය පථය):** Cryptocurrency wallets, international foreign currency telegraphic transfers, stock market trading. (Documenting exclusions prevents clients from demanding crypto integration later without paying!).
- **Constraints (සීමාවන්):** Must launch before November 30th; total development budget capped at LKR 10,000,000; must comply with Central Bank cybersecurity regulations.
- **Acceptance Criteria (පිළිගැනීමේ නිර්ණායක):** Zero critical security vulnerabilities during penetration testing; 100% test pass rate on fund transfer APIs.

---

### 3.6 The Work Breakdown Structure (WBS) & Decomposition

> **Work Breakdown Structure - WBS (කාර්ය බිඳවැටීම් ව්‍යුහය):**  
> A hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish project objectives and create deliverables.

```
Level 1:                   [ University LMS Project ]
                                       │
Level 2:      ┌────────────────────────┼────────────────────────┐
              ▼                        ▼                        ▼
     [ 1.0 Requirements ]       [ 2.0 Development ]       [ 3.0 Deployment ]
                                       │
Level 3:             ┌─────────────────┴─────────────────┐
                     ▼                                   ▼
          [ 2.1 Backend APIs ]                 [ 2.2 Frontend UI ]
                     │
Level 4:   ┌─────────┴─────────┐
           ▼                   ▼
     [ 2.1.1 Auth ]     [ 2.1.2 Grading ] ◄── WORK PACKAGES (Lowest Level)
```

#### Core Concepts in WBS
- **Decomposition (විසංයෝජනය):** The primary technique used to subdivide complex project deliverables into smaller, more manageable units called **Work Packages**.
- **Work Package (කාර්ය පැකේජය):** The lowest hierarchical level of the WBS. A work package can be reliably scheduled, cost-estimated, assigned to a specific developer, and monitored.
- **The 100% Rule (100% නීතිය):** The WBS must encompass 100% of the work defined by the project scope—nothing more, nothing less. The child work packages beneath a parent deliverable must sum to exactly 100% of the parent deliverable's scope.
- **WBS Dictionary (WBS ශබ්දකෝෂය):** A detailed companion document providing comprehensive information for each work package: code identifier, detailed statement of work, assigned lead, required resources, cost estimate, and acceptance criteria.
- **The Scope Baseline (විෂය පථ මූලික පදනම):** The approved, formal version of:
  $$\mathbf{\text{Scope Baseline} = \text{Project Scope Statement} + \text{WBS} + \text{WBS Dictionary}}$$

---

### 3.7 Validate Scope vs. Control Quality

A critical, heavily examined distinction:

```
[ Executing Work ] ──► [ Quality Control (QC) ] ──► [ Verified Deliverables ] ──► [ Validate Scope ] ──► [ Accepted Deliverables ]
                        (Done by Internal QA;        (Technically Correct &        (Done by Client/Sponsor;
                         Checks Defect-Free)          Free of Defects)              Checks Business Acceptance)
```

| Dimension | Control Quality (තත්ත්ව පාලනය) | Validate Scope (විෂය පථය වලංගු කිරීම) |
|---|---|---|
| **Primary Focus** | **Correctness:** Are the deliverables technically defect-free and compliant with standards? | **Acceptance:** Does the customer formally accept and sign off on the deliverables? |
| **Conducted By** | Internal Quality Assurance (QA) engineers and peer code reviewers. | The external Client, Project Sponsor, and Business End-Users. |
| **Primary Tool** | Automated unit tests, integration testing, code quality scanners (SonarQube). | Formal client demonstrations, inspection walkthroughs, User Acceptance Testing (UAT). |
| **Chronological Flow** | Occurs **FIRST** (internally verifies the code works). | Occurs **SECOND** (client inspects the verified deliverable for sign-off). |

---

### 3.8 Scope Creep: The Silent Project Killer

**Scope Creep (අනවසරයෙන් විෂය පථය පුළුල් වීම)** is the uncontrolled, unauthorized growth or expansion of project scope without adjustments to time, cost, or resources.

```
                     ┌── Poor, ambiguous requirements gathered at the start.
                     ├── "Gold Plating" (Developers adding unrequested fancy features).
Causes of Scope Creep ┼── Informal stakeholder requests during hallway chats ("Can you quickly add this?").
                     └── Lack of a formal Change Control Board (CCB) process.
```

- **How to Control Scope:** Every new feature request must submit a formal **Change Request (CR)**. The project manager conducts an impact assessment: *"Adding this feature will delay the launch by 2 weeks and cost LKR 300,000."* The change is implemented **only** if the client formally approves the added time and budget.

---

### 3.9 Scope Management in Agile Environments

In predictive Waterfall projects, scope is locked down in early phases. In **Agile (Scrum)** environments, scope is expected to evolve dynamically:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AGILE SCOPE ARTIFACTS                           │
├──────────────────────────┬─────────────────────────────────────────────┤
│ 1. Product Backlog       │ The single prioritized master list of all   │
│                          │ features, user stories, and bug fixes.      │
├──────────────────────────┼─────────────────────────────────────────────┤
│ 2. User Stories          │ Business requirements written from the      │
│                          │ end-user perspective:                       │
│                          │ "As a [User], I want [Goal], so that [Why]."│
├──────────────────────────┼─────────────────────────────────────────────┤
│ 3. Sprint Planning       │ Development team pulls high-priority user   │
│                          │ stories into a 2-week Sprint Backlog.       │
├──────────────────────────┼─────────────────────────────────────────────┤
│ 4. Definition of Done    │ Formal criteria determining when a story is │
│    (DoD)                 │ complete (code written, peer reviewed, UAT).│
└──────────────────────────┴─────────────────────────────────────────────┘
```

---

### 3.10 What Is Project Cost Management?

#### Formal Definition
> **Project Cost Management (ව්‍යාපෘති පිරිවැය කළමනාකරණය)** includes the processes involved in **planning, estimating, budgeting, financing, funding, managing, and controlling** costs so that the project can be completed within the approved budget.

```
[ 1. Plan Cost Management ] ──► [ 2. Estimate Costs ] ──► [ 3. Determine Budget ] ──► [ 4. Control Costs ]
  Define rules, units, and        Approximate costs of      Aggregate estimates to form     Track actual spend;
  variance thresholds.            individual tasks.         the approved Cost Baseline.     run EVM calculations.
```

1. **Plan Cost Management:** Produces the **Cost Management Plan** detailing estimation accuracy levels, currency units, variance thresholds (e.g., alert sponsor if variance > 5%), and reporting formats.
2. **Estimate Costs:** Developing quantitative approximations of the monetary resources needed to complete all work packages.
3. **Determine Budget:** Aggregating activity estimates and adding contingency reserves to establish the authorized **Cost Baseline**.
4. **Control Costs:** Monitoring expenditures against the cost baseline, approving budget revisions, and applying **Earned Value Management (EVM)**.

---

### 3.11 Four Cost Estimation Techniques

```
                                [ COST ESTIMATION TECHNIQUES ]
                                               │
         ┌─────────────────────────┬───────────┴───────────┬─────────────────────────┐
         ▼                         ▼                       ▼                         ▼
   [ ANALOGOUS ]             [ PARAMETRIC ]          [ THREE-POINT (PERT) ]    [ BOTTOM-UP ]
  Historical comparison.    Statistical formula.    Optimistic, Likely,        Detailed individual
  Fast, low accuracy.       Unit rate based.        Pessimistic weighting.     task roll-up. High accuracy.
```

#### 1. Analogous Estimating (සමානතා ඇස්තමේන්තුකරණය)
- Uses historical actual cost data from previous, similar software projects as the basis for estimating the current project.
- *Pros:* Extremely fast; ideal during early Initiation when technical details are unknown.
- *Cons:* Low accuracy; fails if the new project involves different technologies or junior developers.
- *Example:* "Our previous mobile app cost LKR 2,000,000 and took 3 months; therefore, this new mobile app will cost roughly LKR 2,000,000."

#### 2. Parametric Estimating (පරාමිතික ඇස්තමේන්තුකරණය)
- Uses a statistical relationship between historical data and mathematical variables.
- *Formula:* $\text{Total Estimate} = \text{Quantity of Units} \times \text{Unit Rate}$.
- *Example:* If historical telemetry shows that writing, documenting, and testing one complex backend API endpoint costs LKR 50,000, then building 14 endpoints will cost:
  $$\text{Cost} = 14 \times \text{LKR } 50,000 = \mathbf{\text{LKR } 700,000}$$

#### 3. Bottom-Up Estimating (පහළ සිට ඉහළට ඇස්තමේන්තුකරණය)
- The most accurate and rigorous method. The team decomposes the WBS down to individual work packages, estimates the exact developer hours and resources for each, and aggregates (sums) them up the hierarchy into a master estimate.
- *Pros:* High precision; creates strong team ownership.
- *Cons:* Extremely time-consuming and expensive to perform.

#### 4. Three-Point (PERT) Estimating (ත්‍රි-ලක්ෂ්‍ය ඇස්තමේන්තුකරණය)
Accounts for uncertainty and risk by calculating an expected weighted average across three scenarios:
- **Optimistic Cost ($O$):** Best-case scenario (everything goes flawlessly).
- **Most Likely Cost ($M$):** Realistic scenario (normal conditions and average productivity).
- **Pessimistic Cost ($P$):** Worst-case scenario (critical bugs, server outages, delays).

$$\mathbf{\text{Expected Cost } (E) = \frac{O + 4M + P}{6}}$$

*(Note: Slide 53 contains a minor textual typo displaying $6O$; the standard academic PERT Beta distribution formula taught globally is $\frac{O + 4M + P}{6}$).*

---

#### Fully Worked Three-Point (PERT) Numerical Problem
A software firm is estimating the cost of integrating a complex third-party AI image recognition API:
- Optimistic Cost ($O$) = LKR 100,000
- Most Likely Cost ($M$) = LKR 160,000
- Pessimistic Cost ($P$) = LKR 340,000

**Step-by-Step Calculation:**
$$E = \frac{100,000 + 4(160,000) + 340,000}{6}$$
$$E = \frac{100,000 + 640,000 + 340,000}{6} = \frac{1,080,000}{6} = \mathbf{\text{LKR } 180,000}$$
*Interpretation:* Accounting for uncertainty, the realistic expected cost baseline for this task is LKR 180,000.

---

### 3.12 Structuring the Project Budget: Cost Baselines vs. Reserves

A vital PMBOK® concept is understanding what components constitute the **Cost Baseline** versus the **Total Project Budget**:

```
[ Activity Cost Estimates ] ──► (Sum of all individual WBS work packages)
             │
             ▼  (Plus: Work Package Risk Allowances)
[ Work Package Cost Estimates ]
             │
             ▼  (Plus: Contingency Reserves for Identified Known-Unknowns)
┌────────────────────────────────────────────────────────────────────────┐
│                   COST BASELINE (පිරිවැය මූලික පදනම)                    │
│   The approved time-phased budget used to measure EVM performance.     │
│       Cost Baseline = Work Estimates + Contingency Reserves            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼  (Plus: Management Reserves for Unknown-Unknowns)
┌────────────────────────────────────────────────────────────────────────┐
│                 TOTAL PROJECT BUDGET (සමස්ත ව්‍යාපෘති අයවැය)              │
│       Total Budget = Cost Baseline + Management Reserves               │
└────────────────────────────────────────────────────────────────────────┘
```

#### Contingency Reserves vs. Management Reserves

| Reserve Type | Nature of Risk Covered | Controlled By | Part of Cost Baseline? |
|---|---|---|---|
| **Contingency Reserves (අපේක්ෂිත ආපදා සංචිත)** | Covers **"Known-Unknowns"** (Risks explicitly identified and documented in the Risk Register; e.g., cloud storage price fluctuations). | The **Project Manager**. The PM can spend these funds to execute planned risk responses. | **YES.** Included directly inside the Cost Baseline. |
| **Management Reserves (කළමනාකාරීත්ව සංචිත)** | Covers **"Unknown-Unknowns"** (Completely unforeseen, catastrophic events outside the project scope; e.g., unexpected national currency collapse). | **Executive Senior Management / Project Sponsor**. The PM cannot spend these funds without formal approval. | **NO.** Added on top of the Cost Baseline to form the Total Budget. |

---

### 3.13 Earned Value Management (EVM): Comprehensive Formulas & Calculations

> **Earned Value Management - EVM (උපයාගත් වටිනාකම කළමනාකරණය)** is an objective project performance measurement methodology that integrates **Scope, Schedule, and Cost metrics** to evaluate project progress and predict final completion outcomes.

```
       Cost ($)
          │                                  Actual Cost (AC) ── (Actual spend)
          │                                 /
          │                                /     Planned Value (PV) ── (Planned budget)
          │                               /     /
          │                              /     /
          │                             /     /
          │                            /     /  Earned Value (EV) ── (Value of completed work)
          │                           /     /  /
          │                          •─────•──•  ◄── Cost & Schedule Variances
          └─────────────────────────────────────────► Time (Status Date)
```

#### The Three Fundamental EVM Pillars
1. **Planned Value - PV (සැලසුම්ගත වටිනාකම):** The authorized budget allocated to work scheduled to be completed up to the status date.  
   $$\mathbf{PV = \text{Planned \% Complete} \times \text{BAC (Budget at Completion)}}$$
2. **Earned Value - EV (උපයාගත් වටිනාකම):** The authorized budget value of the work *actually completed* by the team up to the status date.  
   $$\mathbf{EV = \text{Actual \% Complete} \times \text{BAC}}$$
3. **Actual Cost - AC (සත්‍ය පිරිවැය):** The total monetary cost actually incurred and spent in completing the work executed up to the status date.

---

#### EVM Variance and Index Formulas

| Metric Name | Mathematical Formula | Interpretation Criteria |
|---|---|---|
| **Cost Variance (CV)** | $\mathbf{CV = EV - AC}$ | • **$CV > 0 \implies$ Under Budget (Good)**<br>• $CV = 0 \implies$ Exactly on Budget<br>• **$CV < 0 \implies$ Over Budget (Bad - Cost Overrun)** |
| **Schedule Variance (SV)** | $\mathbf{SV = EV - PV}$ | • **$SV > 0 \implies$ Ahead of Schedule (Good)**<br>• $SV = 0 \implies$ Exactly on Schedule<br>• **$SV < 0 \implies$ Behind Schedule (Bad - Delayed)** |
| **Cost Performance Index (CPI)** | $\mathbf{CPI = \frac{EV}{AC}}$ | • **$CPI > 1.0 \implies$ Cost Efficient (Earning more than spending)**<br>• $CPI = 1.0 \implies$ Target efficiency<br>• **$CPI < 1.0 \implies$ Cost Inefficient (Over spending)** |
| **Schedule Performance Index (SPI)** | $\mathbf{SPI = \frac{EV}{PV}}$ | • **$SPI > 1.0 \implies$ Schedule Efficient (Progressing faster)**<br>• $SPI = 1.0 \implies$ Target pace<br>• **$SPI < 1.0 \implies$ Schedule Delayed (Progressing slower)** |

---

#### Fully Worked Master EVM Numerical Example (From Lecture Slides)
**Scenario:** A software company is developing an enterprise mobile banking app.
- Total Approved Budget at Completion (BAC) = $1,000,000.
- At the Month 4 status review date:
  - **Planned Value (PV) = $100,000** (Work planned to be done).
  - **Earned Value (EV) = $90,000** (Actual completed work value).
  - **Actual Cost (AC) = $110,000** (Cash actually spent).

**Step-by-Step Calculations:**
1. **Calculate Cost Variance (CV):**
   $$CV = EV - AC = \$90,000 - \$110,000 = \mathbf{-\$20,000} \quad (CV < 0)$$
   *Interpretation:* The project is **Over Budget** by $20,000. The team spent $110,000 to deliver only $90,000 worth of code.
2. **Calculate Schedule Variance (SV):**
   $$SV = EV - PV = \$90,000 - \$100,000 = \mathbf{-\$10,000} \quad (SV < 0)$$
   *Interpretation:* The project is **Behind Schedule**. Deliverables worth $10,000 that should have been finished by Month 4 remain incomplete.
3. **Calculate Cost Performance Index (CPI):**
   $$CPI = \frac{EV}{AC} = \frac{\$90,000}{\$110,000} = \mathbf{0.818} \quad (\approx 0.82)$$
   *Interpretation:* For every **$1.00 spent**, the project only earns **$0.82 of value**. The project is operating with severe cost inefficiency.
4. **Calculate Schedule Performance Index (SPI):**
   $$SPI = \frac{EV}{PV} = \frac{\$90,000}{\$100,000} = \mathbf{0.90}$$
   *Interpretation:* The project is progressing at only **90% of its planned delivery speed**.

---

### 3.14 Agile Cost Management: Team Velocity & Burn Rates

In Agile (Scrum) software projects, scope evolves while team size and sprint durations are fixed. Cost management adapts using modern Agile metrics:

```
[ Team-Based Budgeting ] ──► Cost is calculated based on stable squad size per sprint.
                              Example: Squad of 6 engineers costs LKR 1,500,000 / month.
                              A 6-month project budget = 6 × 1,500,000 = LKR 9,000,000.

[ Burn Rate Tracking ]   ──► Measuring how quickly project capital is consumed per sprint.

[ Velocity-Based ]       ──► Forecasting completion cost using historical story point completion.
```

---

## 4. Comparison Tables

### 4.1 Validate Scope vs. Control Quality

| Attribute | Validate Scope | Control Quality |
|---|---|---|
| **Objective** | Formal customer acceptance of deliverables. | Verification of technical correctness and zero defects. |
| **Participants** | Product Sponsor, Client, Business End-Users. | Quality Assurance (QA) Engineers, Testers. |
| **Criterion** | Compliance with business acceptance criteria. | Adherence to technical quality standards and bug thresholds. |
| **Output** | **Accepted Deliverables** and formal sign-offs. | **Verified Deliverables** and quality inspection logs. |

### 4.2 Comparison of Cost Estimation Techniques

| Technique | Speed | Relative Cost | Accuracy Level | Best Stage to Apply |
|---|---|---|---|---|
| **Analogous** | Very Fast | Very Low | Low ($\pm 25\% \text{ to } \pm 50\%$) | Early Initiation (preliminary charter). |
| **Parametric** | Moderate | Moderate | Moderate ($\pm 15\% \text{ to } \pm 25\%$) | When statistical historical data exists. |
| **Three-Point** | Moderate | Moderate | High ($\pm 10\% \text{ to } \pm 15\%$) | When tasks have high uncertainty/risk. |
| **Bottom-Up** | Slow | High | **Highest ($\pm 5\% \text{ to } \pm 10\%$)** | Detailed Planning (after WBS is frozen). |

---

## 5. Processes and Workflows

### 5.1 Integrated Scope & Cost Change Control Workflow

```
1. Stakeholder Requests New Feature
   └─► Example: Client requests cryptocurrency payments in mobile banking app.
         │
         ▼
2. Evaluate Against Scope Baseline
   └─► Check Project Scope Statement: Cryptocurrency is explicitly OUT-OF-SCOPE.
         │
         ▼
3. Conduct Technical Impact & EVM Cost Assessment
   └─► Solutions Architect & PM calculate:
       • Schedule Impact: +4 weeks.
       • Cost Impact: +LKR 1,200,000 (New third-party crypto gateway fees + security audit).
         │
         ▼
4. Submit Formal Change Request (CR)
   └─► Present impact assessment to Change Control Board (CCB) / Project Sponsor.
         │
         ▼
5. Decision by Change Control Board
   ┌─────────┴─────────┐
   ▼                   ▼
[ REJECTED ]      [ APPROVED ]
Inform client;    1. Update Scope Baseline (WBS & WBS Dictionary).
continue baseline.2. Update Cost Baseline (+LKR 1,200,000) and Schedule Baseline (+4 weeks).
                  3. Implement feature in next sprint.
```

---

## 6. Comprehensive Formulas Reference Sheet

```
1. Three-Point (PERT) Expected Cost:
   E = (O + 4M + P) / 6

2. Cost Baseline:
   Cost Baseline = Aggregated Work Package Estimates + Contingency Reserves

3. Total Project Budget:
   Total Budget = Cost Baseline + Management Reserves

4. Earned Value Management (EVM) Core Metrics:
   Planned Value (PV) = Planned % Complete × BAC
   Earned Value (EV)  = Actual % Complete × BAC
   Actual Cost (AC)   = Total actual cash spent

5. EVM Variances:
   Cost Variance (CV)     = EV - AC  (Positive = Under Budget, Negative = Over Budget)
   Schedule Variance (SV) = EV - PV  (Positive = Ahead of Schedule, Negative = Behind Schedule)

6. EVM Performance Indices:
   Cost Performance Index (CPI)     = EV / AC  (> 1.0 = Efficient, < 1.0 = Inefficient)
   Schedule Performance Index (SPI) = EV / PV  (> 1.0 = Fast, < 1.0 = Delayed)
```

---

## 7. Advantages and Limitations of Scope & Cost Controls

| Control Technique | Key Strategic Advantages (වාසි) | Practical Pitfalls / Limitations (සීමාවන්) |
|---|---|---|
| **Work Breakdown Structure (WBS)** | • Prevents work from falling through the cracks.<br>• Provides the single foundation for cost, schedule, and team assignment. | • Over-decomposition can lead to micromanagement and excessive administrative overhead. |
| **Earned Value Management (EVM)** | • Provides early mathematical warning of budget and schedule disasters months before deadlines.<br>• Objective, data-driven. | • Garbage in, garbage out: requires accurate, honest reporting of actual developer progress and expenses. |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Master these critical rules for your examination:
> 1. **Management Reserves vs. Cost Baseline:** Management reserves are **NEVER** included in the Cost Baseline! The Cost Baseline includes only work package estimates plus contingency reserves.
> 2. **EVM Variances Rule:** $CV = EV - AC$ and $SV = EV - PV$. Always remember that **EV comes first** in both subtraction formulas!
> 3. **EVM Indices Rule:** $CPI = EV / AC$ and $SPI = EV / PV$. Always remember that **EV is in the numerator** for both division formulas!
> 4. **Index Meaning:** Any index ($CPI$ or $SPI$) **below 1.0 is BAD**; any index **above 1.0 is GOOD**.
> 5. **Scope Baseline Components:** Scope Baseline = Project Scope Statement + WBS + WBS Dictionary.

---

## 9. Quick Revision Summary

- **Scope Management:** Ensures all the required work, and only the required work, is performed.
- **Product vs. Project Scope:** Product scope = features/functions; Project scope = work required to deliver them.
- **Decomposition:** Breaking deliverables into work packages to construct the WBS (enforcing the 100% rule).
- **Scope Baseline:** Approved Scope Statement + WBS + WBS Dictionary.
- **Validate Scope vs. Quality Control:** Quality Control checks defect-free correctness (QA); Validate Scope secures formal client acceptance (Client).
- **Scope Creep:** Uncontrolled scope growth; managed via formal Change Requests.
- **Cost Estimation:** Analogous (historical), Parametric (unit rate math), Bottom-Up (detailed task roll-up), Three-Point PERT ($\frac{O + 4M + P}{6}$).
- **Reserves:** Contingency reserves (known-unknowns, inside baseline); Management reserves (unknown-unknowns, outside baseline).
- **EVM Master Rules:** $CV = EV - AC$; $SV = EV - PV$; $CPI = EV/AC$; $SPI = EV/PV$.

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A software project reaches the end of Month 3 with the following EVM data:
- Earned Value (EV) = LKR 4,500,000
- Actual Cost (AC) = LKR 5,000,000
- Planned Value (PV) = LKR 4,500,000  
Which statement is mathematically and operationally correct?  
A. The project is under budget and ahead of schedule  
B. The project is over budget and exactly on schedule  
C. The project is under budget and behind schedule  
D. The project is over budget and ahead of schedule  
*Answer:* **B**  
*Explanation:*  
$CV = EV - AC = 4,500,000 - 5,000,000 = \mathbf{-LKR \ 500,000}$ (Negative $\implies$ Over Budget).  
$SV = EV - PV = 4,500,000 - 4,500,000 = \mathbf{0}$ (Zero $\implies$ Exactly on Schedule).

**Q2:** A Project Manager adds up the estimated costs of all WBS work packages and adds LKR 500,000 in contingency reserves for identified cloud storage risks. What has been established?  
A. The Total Project Budget  
B. The Cost Baseline  
C. The Management Reserve  
D. The Earned Value  
*Answer:* **B**  
*Explanation:* The Cost Baseline consists of activity cost estimates plus contingency reserves. Management reserves are added on top of the cost baseline to establish the Total Budget.

**Q3:** During which process are completed software deliverables formally inspected and officially accepted in writing by the client?  
A. Control Quality  
B. Plan Scope Management  
C. Validate Scope  
D. Define Scope  
*Answer:* **C**  
*Explanation:* Validate Scope is the process of obtaining formal stakeholder/customer sign-off and acceptance of completed deliverables.

---

### Short-Answer & Scenario-Based Questions

**Q4 (Explain-the-Difference):** Clearly contrast Validate Scope with Control Quality regarding who performs the process and what primary question is answered.  
*Model Answer:*  
**Control Quality** is performed internally by the development organization’s Quality Assurance (QA) team and software testers; it answers the question: *"Is the software technically correct, properly coded, and free from defects?"* In contrast, **Validate Scope** is performed externally by the customer, project sponsor, or business end-users; it answers the question: *"Does the completed software satisfy the agreed business requirements, and does the client formally accept and sign off on it?"*

**Q5 (Comprehensive Worked EVM Problem):**  
A software team is contracted to build an online tax processing portal. The approved budget at completion (BAC) is LKR 20,000,000 over a 10-month schedule. At the end of Month 5:
- The project plan scheduled 50% of the work to be completed.
- The development team has actually completed 40% of the work.
- The accounting department reports that LKR 10,000,000 has been spent so far.

Calculate:
1. Planned Value (PV).
2. Earned Value (EV).
3. Actual Cost (AC).
4. Cost Variance (CV) and Schedule Variance (SV).
5. Cost Performance Index (CPI) and Schedule Performance Index (SPI).
6. Provide a concise executive diagnosis of the project’s health.

*Model Answer:*  
1. $PV = 50\% \times \text{LKR } 20,000,000 = \mathbf{\text{LKR } 10,000,000}$.  
2. $EV = 40\% \times \text{LKR } 20,000,000 = \mathbf{\text{LKR } 8,000,000}$.  
3. $AC = \mathbf{\text{LKR } 10,000,000}$.  
4. **Variances:**  
   - $CV = EV - AC = 8,000,000 - 10,000,000 = \mathbf{-\text{LKR } 2,000,000}$ (Cost Overrun).  
   - $SV = EV - PV = 8,000,000 - 10,000,000 = \mathbf{-\text{LKR } 2,000,000}$ (Schedule Delay).  
5. **Performance Indices:**  
   - $CPI = \frac{EV}{AC} = \frac{8,000,000}{10,000,000} = \mathbf{0.80}$.  
   - $SPI = \frac{EV}{PV} = \frac{8,000,000}{10,000,000} = \mathbf{0.80}$.  
6. **Executive Diagnosis:**  
   The project is in **critical condition**. It is both significantly **over budget** ($CV = -\text{LKR } 2,000,000; CPI = 0.80$, meaning every rupee spent generates only 80 cents of software value) and severely **behind schedule** ($SV = -\text{LKR } 2,000,000; SPI = 0.80$, meaning work is progressing at only 80% of the planned speed). Immediate corrective interventions are required: pruning non-essential backlog features or optimizing development processes to regain schedule and cost control.
