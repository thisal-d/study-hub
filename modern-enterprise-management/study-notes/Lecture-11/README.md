# Lecture 11: Project Management – Procurement, Resource, and Schedule Management

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** External Vendor Procurement, Human & Physical Resource Allocation, Network Sequencing, and Critical Path Method (CPM)  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

A brilliant software design and a well-funded budget mean nothing if you cannot assemble the right developers, procure essential cloud servers, and sequence development tasks into an achievable timeline. In complex software development, three management disciplines must execute in perfect synchronization:
1. **Procurement Management (ප්‍රසම්පාදන කළමනාකරණය):** Acquiring external specialized tools, cloud datacenters, and third-party vendor APIs.
2. **Resource Management (සම්පත් කළමනාකරණය):** Acquiring, developing, assigning, and retaining high-caliber developers, QA engineers, and physical computing hardware.
3. **Schedule Management (කාලසටහන් කළමනාකරණය):** Decomposing deliverables into activities, mapping dependencies, and identifying the **Critical Path (අර්බුදකාරී මාර්ගය)** that dictates total project delivery time.

This lecture unifies these three operational pillars, providing the mathematical models, network diagram techniques, and contractual mechanisms required to drive an IT project to completion on time and within specifications.

### Why This Topic Matters
- Over 70% of enterprise software projects suffer delivery delays due to dependency bottlenecks, vendor delays, and developer overallocation.
- Solutions Architects and Technical Leads must calculate early/late start dates, total float (slack), and critical paths to make informed trade-offs when deadlines are compressed.
- Navigating vendor contracts (RFPs, RFQs, SLAs) and managing human resources in Agile environments (capacity planning, skill matrices) are essential leadership competencies.

### Learning Objectives
After studying these notes, you will be able to:
1. Define **Procurement Management** and sequence its four core lifecycle processes.
2. Formulate **Make-or-Buy Decisions (නිෂ්පාදනය හෝ මිලදී ගැනීම පිළිබඳ තීරණ)** and contrast procurement documents (**RFP, RFQ, SOW**).
3. Detail the six core **Resource Management** processes and differentiate between human and physical resources.
4. Apply team development frameworks to transform developers into high-performing, collaborative squads.
5. Define **Schedule Management** and differentiate the six key scheduling processes.
6. Map activity dependencies using all four precedence relationships: **Finish-to-Start (FS)**, **Start-to-Start (SS)**, **Finish-to-Finish (FF)**, and **Start-to-Finish (SF)**.
7. Calculate activity durations using **Analogous, Parametric, Bottom-Up, and Three-Point (PERT) Estimating**.
8. Execute a complete **Critical Path Method (CPM)** network analysis: calculate Early Start (ES), Early Finish (EF), Late Start (LS), Late Finish (LF), and Total Float (Slack).
9. Identify critical activities (Zero Float) and evaluate the impact of delays on total project duration.
10. Integrate **Earned Value Management (EVM)** schedule metrics (**Schedule Variance - SV** and **Schedule Performance Index - SPI**) to control project timelines.

---

## 2. Main Concepts

- **2.1 Understanding Project Procurement Management**
- **2.2 The Four Procurement Lifecycle Processes (Plan, Conduct, Control, Close)**
- **2.3 Make-or-Buy Analysis & Procurement Documentation (RFP, RFQ, SOW)**
- **2.4 Understanding Project Resource Management**
- **2.5 The Six Resource Management Processes**
- **2.6 Resource Allocation & Optimization (WSO2 Case Context)**
- **2.7 Understanding Schedule Management & Common Techniques**
- **2.8 The Six Schedule Management Processes**
- **2.9 Defining Activities & Precedence Dependencies (FS, SS, FF, SF)**
- **2.10 Duration Estimation Techniques (PERT Calculations)**
- **2.11 The Critical Path Method (CPM) Master Network Analysis**
- **2.12 Schedule Control & EVM Timeline Metrics**

---

## 3. Detailed Explanations

### 3.1 What Is Project Procurement Management?

#### Formal Definition
> **Project Procurement Management (ව්‍යාපෘති ප්‍රසම්පාදන කළමනාකරණය)** includes the processes necessary to purchase or acquire products, services, or results needed from outside the project team.

In modern IT projects, software teams rarely build every component from scratch. They procure:
- Cloud hosting infrastructure (AWS, Microsoft Azure, Google Cloud).
- Specialized SaaS APIs (Stripe payment gateways, Twilio SMS messaging, Auth0 identity management).
- Specialized external contractors (penetration testers, AI/ML consultants).
- Physical hardware (datacenter racks, developer workstations).

---

### 3.2 The Four Procurement Lifecycle Processes

```
[ 1. Plan Procurement ] ──► [ 2. Conduct Procurements ] ──► [ 3. Control Procurements ] ──► [ 4. Close Procurements ]
  Make-or-Buy decision;       Issue RFPs; evaluate bids;      Monitor vendor performance;    Audit deliverables;
  define SOW & criteria.      negotiate & award contracts.    manage contract changes.        settle final invoices.
```

#### 1. Plan Procurement Management (ප්‍රසම්පාදනය සැලසුම් කිරීම)
- *What happens:* Deciding what software modules or hardware must be obtained externally and which will be built internally.
- *Key Technique:* **Make-or-Buy Analysis (නිෂ්පාදනය හෝ මිලදී ගැනීම පිළිබඳ විශ්ලේෂණය)**.
- *Key Outputs:* Procurement Management Plan, Procurement Statement of Work (SOW), Bid Documents (RFP/RFQ), and Vendor Selection Criteria.

#### 2. Conduct Procurements (ප්‍රසම්පාදනය සිදුකිරීම)
- *What happens:* Releasing bid documents to the market, hosting bidder conferences, receiving proposals, evaluating vendor capabilities, negotiating legal terms, and signing contracts.
- *Key Output:* **Awarded Commercial Contracts (ප්‍රදානය කළ ගිවිසුම්)**.

#### 3. Control Procurements (ප්‍රසම්පාදනය පාලනය කිරීම)
- *What happens:* Monitoring vendor performance against agreed **Service Level Agreements (SLAs)**, inspecting deliverables, processing monthly invoices, and managing formal contract amendments.
- *Key Outputs:* Approved Change Requests, Verified Deliverables, Work Performance Information.

#### 4. Close Procurements (ප්‍රසම්පාදනය අවසන් කිරීම)
- *What happens:* Formally completing all contractual obligations.
- *The 5 Mandatory Closing Steps:*
  1. *Verify Deliverables:* Confirm 100% of vendor deliverables meet technical specifications.
  2. *Conduct Procurement Audit:* Document vendor strengths, weaknesses, and performance scores.
  3. *Finalize Payments:* Settle all outstanding invoices, claims, and retainages.
  4. *Archive Records:* Securely archive contracts, legal correspondence, and technical manuals.
  5. *Document Lessons Learned:* Record supplier reliability notes to guide future procurement managers.

---

### 3.3 Make-or-Buy Analysis & Procurement Documents

```
                             [ PROCUREMENT DOCUMENTS ]
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
  [ SOW ]                          [ RFP ]                          [ RFQ ]
Statement of Work            Request for Proposal             Request for Quotation
Defines detailed technical   Invites vendors to propose       Invites vendors to submit
deliverables & scope.        solutions to a business problem. binding price quotes for
                                                              standardized items.
```

- **Make-or-Buy Analysis:** A structured financial and strategic evaluation comparing the cost and risk of building a solution internally using existing developers versus purchasing an off-the-shelf product from a vendor.  
  *Rule of Thumb:* Buy if the capability is a commodity (e.g., standard payroll or SMS delivery); Make if the software represents your core proprietary intellectual property and competitive advantage.
- **Statement of Work - SOW (කාර්ය විස්තර පත්‍රිකාව):** Clear, unambiguous narrative description of the products, services, or technical deliverables the vendor must supply.
- **Request for Proposal - RFP (යෝජනා ඉල්ලුම් කිරීම):** Issued when the project problem is known, but the technical solution is open to vendor innovation. (e.g., "Propose an automated baggage handling AI system for Colombo Airport").
- **Request for Quotation - RFQ (මිල ගණන් කැඳවීම):** Issued when requirements are fully standardized, and selection is based purely on price and delivery speed. (e.g., "Quote price for 100 Dell Core-i7 laptops").

---

### 3.4 What Is Project Resource Management?

#### Formal Definition
> **Project Resource Management (ව්‍යාපෘති සම්පත් කළමනාකරණය)** includes the processes to identify, acquire, develop, manage, and control the human and physical resources needed for the successful completion of the project.

```
                    ┌── Human Resources (Developers, QA Testers, Tech Leads, Scrum Masters)
Project Resources ──┼── Physical Infrastructure (Servers, Laptops, Datacenter Space)
                    └── Software Tools & Licenses (IDEs, Cloud Credits, Jira Subscriptions)
```

---

### 3.5 The Six Resource Management Processes

```
[ 1. Plan Resources ] ──► [ 2. Estimate Resources ] ──► [ 3. Acquire Resources ] ──► [ 4. Develop Team ]
  Define roles, charts,     Determine types &           Assign developers;             Upskill, train,
  and management plans.     quantities per task.        procure hardware.              build collaboration.
                                                                                              │
[ 6. Control Resources ] ◄────────────────────────────── [ 5. Manage Team ] ◄─────────────────┘
  Track physical resource                                 Monitor performance;
  usage & resolve deficits.                               resolve peer conflicts.
```

#### Detailed Process Breakdown
1. **Plan Resource Management:** Formulates the **Resource Management Plan** detailing roles, organizational reporting charts, and team acquisition strategies.
2. **Estimate Activity Resources:** Analyzes work packages to determine the exact human skills (e.g., 2 senior React Native developers for 3 weeks) and physical equipment needed.
3. **Acquire Resources:** Negotiates with functional department managers or external recruitment agencies to secure team members and physical computing assets.
4. **Develop Team (කණ්ඩායම සංවර්ධනය කිරීම):** Elevating team competencies, collaboration, trust, and psychological safety through technical boot camps, team-building exercises, and mentoring.
5. **Manage Team (කණ්ඩායම කළමනාකරණය කිරීම):** Tracking developer performance, providing 1-on-1 coaching, clearing impediments, and resolving interpersonal conflicts.
6. **Control Resources (සම්පත් පාලනය කිරීම):** Ensuring that physical hardware, software licenses, and cloud servers are available as scheduled, monitoring usage variances, and reallocating underutilized assets.

---

### 3.6 Resource Optimization in Practice (The WSO2 Context)

In fast-paced enterprise software firms like **WSO2 Sri Lanka**, software engineers are frequently assigned to multiple client projects simultaneously:
- **The Issue:** Overallocating senior architects causes severe cognitive burnout, context-switching latency, and project delays.
- **The Solution:** Applying **Resource Optimization (සම්පත් ප්‍රශස්තකරණය)** techniques:
  - **Skill Matrix (කුසලතා න්‍යාසය):** Mapping developers' verified proficiencies across languages (Go, Java, Python) and frameworks.
  - **Capacity Planning:** Utilizing Agile sprint velocity tracking to allocate work matching the team's proven sustainable pace rather than forcing unrealistic overtime.

---

### 3.7 What Is Project Schedule Management?

#### Formal Definition
> **Project Schedule Management (ව්‍යාපෘති කාලසටහන් කළමනාකරණය)** includes the processes required to manage the timely completion of the project.

```
Common Scheduling Techniques:
├── Critical Path Method (CPM - Longest path, zero float)
├── Gantt Charts (Visual horizontal bar schedules)
├── Network Diagrams (Activity-on-Node sequence mapping)
├── Rolling Wave Planning (Progressive elaboration: near-term detailed, long-term broad)
└── Agile Sprint Schedulers (Timeboxed 2-week iterations)
```

---

### 3.8 The Six Schedule Management Processes

```
[ 1. Plan Schedule ] ──► [ 2. Define Activities ] ──► [ 3. Sequence Activities ] ──► [ 4. Estimate Durations ]
  Select tools, rules,      Decompose work packages    Identify logical               Calculate work days
  and baseline formats.     into actionable tasks.     dependencies (FS, SS).         using PERT / math.
                                                                                              │
[ 6. Control Schedule ] ◄─────────────────────────────── [ 5. Develop Schedule ] ◄────────────┘
  Track progress, EVM                                     Execute CPM analysis;
  variances (SV, SPI).                                    freeze Schedule Baseline.
```

1. **Plan Schedule Management:** Produces the **Schedule Management Plan** detailing scheduling methodologies (Agile vs. Predictive), software tools (Jira, MS Project), and baseline control rules.
2. **Define Activities:** Decomposing WBS work packages into discrete, executable **Activities / Tasks (කාර්යයන්)** that can be estimated and scheduled.
3. **Sequence Activities:** Identifying and documenting logical relationships and dependencies among activities using **Precedence Diagramming Methods (PDM)**.
4. **Estimate Activity Durations:** Calculating the number of work periods (days/weeks) required to complete each activity using available resources.
5. **Develop Schedule:** Combining activity sequences, durations, resource requirements, and schedule constraints to generate the master **Schedule Baseline**.
6. **Control Schedule:** Monitoring schedule execution, measuring timeline variances using EVM, and applying corrective acceleration actions (**Crashing** or **Fast-Tracking**).

---

### 3.9 Sequencing Activities & The Four Dependency Types

In a project network diagram, activities are represented as nodes, connected by directional dependency arrows:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE FOUR PRECEDENCE DEPENDENCY TYPES                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Finish-to-Start (FS) [Most Common]:                                                │
│    Activity B cannot start until Activity A finishes.                                  │
│    [ Development (A) ] ──────────────► [ Testing (B) ]                                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. Start-to-Start (SS):                                                                │
│    Activity B cannot start until Activity A starts.                                    │
│    [ Setup Project Environment (A) ]                                                   │
│           │ (Starts concurrently)                                                      │
│           ▼                                                                            │
│    [ Database Schema Configuration (B) ]                                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. Finish-to-Finish (FF):                                                              │
│    Activity B cannot finish until Activity A finishes.                                 │
│    [ System Integration Testing (A) ]                                                  │
│           │ (Must finish before)                                                       │
│           ▼                                                                            │
│    [ User Documentation Updates (B) ]                                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. Start-to-Finish (SF) [Extremely Rare]:                                              │
│    Activity B cannot finish until Activity A starts.                                   │
│    [ New Cloud Core Banking System Starts (A) ]                                        │
│           │ (Allows termination of)                                                    │
│           ▼                                                                            │
│    [ Legacy On-Premise Core Banking System Finishes/Shuts Down (B) ]                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.10 Estimating Activity Durations & Three-Point (PERT) Math

Duration estimation calculates work periods required. The most reliable technique under uncertainty is **Three-Point Estimating (PERT)**:

$$\mathbf{\text{Expected Duration } (E) = \frac{O + 4M + P}{6}}$$

- **Optimistic Duration ($O$):** Best-case timeline.
- **Most Likely Duration ($M$):** Normal, realistic timeline.
- **Pessimistic Duration ($P$):** Worst-case timeline (unexpected delays).

#### Fully Worked Duration Calculation Example (From Lecture Slides)
- Activity: Complex Integration Security Testing.
- $O = 2 \text{ days}$
- $M = 4 \text{ days}$
- $P = 8 \text{ days}$

$$E = \frac{2 + 4(4) + 8}{6} = \frac{2 + 16 + 8}{6} = \frac{26}{6} = \mathbf{4.33 \text{ days}}$$

---

### 3.11 The Critical Path Method (CPM): Master Network Analysis

> **Critical Path Method - CPM (අර්බුදකාරී මාර්ග ක්‍රමවේදය):**  
> A network analysis technique used to identify the **longest sequence of dependent activities** across a project network diagram, which dictates the **shortest possible total project duration**.

```
┌────────────────────────────────────────────────────────┐
│                   ACTIVITY NODE BLOCK                  │
├──────────────────────────┬─────────────────────────────┤
│ Early Start (ES)         │ Early Finish (EF)           │
├──────────────────────────┼─────────────────────────────┤
│          Activity Name & Duration (D)                 │
├──────────────────────────┼─────────────────────────────┤
│ Late Start (LS)          │ Late Finish (LF)            │
└──────────────────────────┴─────────────────────────────┘
```

#### The Golden Rules of CPM Calculations
1. **Forward Pass (Early Dates Calculation):**  
   - Starts at Project Day 0.
   - $\mathbf{EF = ES + \text{Duration}}$
   - If an activity has multiple predecessors, its **$ES = \text{Maximum of predecessor } EF\text{s}$**.
2. **Backward Pass (Late Dates Calculation):**  
   - Starts at the final project completion date.
   - $\mathbf{LS = LF - \text{Duration}}$
   - If an activity has multiple successors, its **$LF = \text{Minimum of successor } LS\text{s}$**.
3. **Float / Slack (ලිහිල් කාලය):**  
   The amount of time an activity can be delayed without delaying the total project completion date:
   $$\mathbf{\text{Total Float} = LS - ES = LF - EF}$$
4. **The Critical Path Rule:**  
   > Any activity with **$\mathbf{\text{Total Float} = 0}$** is a **CRITICAL ACTIVITY**.  
   > Any delay on a critical activity will immediately delay the entire project!

---

#### Fully Worked Master CPM Network Analysis: Website Development Project
*(Data directly from Slide 56 of Lecture 11)*

**Project Activities & Durations:**
- **Activity A:** Requirements (5 days)
- **Activity B:** Research (3 days)
- **Activity C:** UI Design (4 days) — *Depends on A*
- **Activity D:** Development (7 days) — *Depends on C*
- **Activity E:** Content Creation (6 days) — *Depends on B*
- **Activity F:** Testing (3 days) — *Depends on both D and E*

```
                       ┌──► [ C: Design (4d) ] ──► [ D: Dev (7d) ] ──┐
                       │                                             ▼
[ Start ] ──► [ A: Reqs (5d) ]                                 [ F: Testing (3d) ] ──► [ Finish ]
   │                                                                 ▲
   └────────► [ B: Research (3d) ] ──────► [ E: Content (6d) ] ──────┘
```

#### Forward Pass (Calculating ES and EF):
- **Activity A:** $ES = 0 \implies EF = 0 + 5 = \mathbf{5}$
- **Activity B:** $ES = 0 \implies EF = 0 + 3 = \mathbf{3}$
- **Activity C:** Predecessor is A ($EF = 5$) $\implies ES = 5 \implies EF = 5 + 4 = \mathbf{9}$
- **Activity D:** Predecessor is C ($EF = 9$) $\implies ES = 9 \implies EF = 9 + 7 = \mathbf{16}$
- **Activity E:** Predecessor is B ($EF = 3$) $\implies ES = 3 \implies EF = 3 + 6 = \mathbf{9}$
- **Activity F:** Predecessors are D ($EF = 16$) and E ($EF = 9$).  
  $ES = \max(16, 9) = \mathbf{16} \implies EF = 16 + 3 = \mathbf{19 \text{ days}}$.  
  $$\mathbf{\text{Total Project Duration} = 19 \text{ Days}}$$

#### Backward Pass (Calculating LF and LS):
- **Activity F:** Project finish is 19. $LF = 19 \implies LS = 19 - 3 = \mathbf{16}$
- **Activity D:** Successor is F ($LS = 16$) $\implies LF = 16 \implies LS = 16 - 7 = \mathbf{9}$
- **Activity C:** Successor is D ($LS = 9$) $\implies LF = 9 \implies LS = 9 - 4 = \mathbf{5}$
- **Activity A:** Successor is C ($LS = 5$) $\implies LF = 5 \implies LS = 5 - 5 = \mathbf{0}$
- **Activity E:** Successor is F ($LS = 16$) $\implies LF = 16 \implies LS = 16 - 6 = \mathbf{10}$
- **Activity B:** Successor is E ($LS = 10$) $\implies LF = 10 \implies LS = 10 - 3 = \mathbf{7}$ *(Note: Slide 56 table contains a minor computational slip listing LS=2; mathematically $10 - 3 = 7$; either way, float is positive, proving it is non-critical)*.

---

#### The Master CPM Results Table

| Activity | Description | Duration (Days) | Early Start (ES) | Early Finish (EF) | Late Start (LS) | Late Finish (LF) | Total Float ($LS - ES$) | Is It Critical? |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **A** | Requirements | 5 | 0 | 5 | 0 | 5 | **0** | **YES (Critical)** |
| **B** | Research | 3 | 0 | 3 | 7 | 10 | **7 (or 2)** | No (Has Float) |
| **C** | UI Design | 4 | 5 | 9 | 5 | 9 | **0** | **YES (Critical)** |
| **D** | Development | 7 | 9 | 16 | 9 | 16 | **0** | **YES (Critical)** |
| **E** | Content Creation | 6 | 3 | 9 | 10 | 16 | **7** | No (Has Float) |
| **F** | Testing | 3 | 16 | 19 | 16 | 19 | **0** | **YES (Critical)** |

$$\mathbf{\text{Critical Path: } A \to C \to D \to F \quad \text{Total Project Duration} = 19 \text{ Days}}$$

> [!IMPORTANT]
> **Key Exam Takeaway:**
> - Path 1: $A + C + D + F = 5 + 4 + 7 + 3 = \mathbf{19 \text{ days}}$ (Longest Path = Critical Path).
> - Path 2: $B + E + F = 3 + 6 + 3 = \mathbf{12 \text{ days}}$ (Non-critical path with 7 days of float).
> - Any delay in Activity A, C, D, or F will **immediately delay the entire project** beyond 19 days!

---

### 3.12 Schedule Control via Earned Value Management (EVM)

During project execution, schedule performance is tracked using EVM metrics:

$$\mathbf{\text{Schedule Variance } (SV) = EV - PV}$$
$$\mathbf{\text{Schedule Performance Index } (SPI) = \frac{EV}{PV}}$$

#### Fully Worked EVM Schedule Numerical Example (From Slide 61 & 64)
- **Scenario:** Planned Value (PV) = $100,000; Earned Value (EV) = $80,000; Actual Cost (AC) = $110,000.
- **Calculations:**
  $$SV = EV - PV = \$80,000 - \$100,000 = \mathbf{-\$20,000} \quad (SV < 0)$$
  $$SPI = \frac{EV}{PV} = \frac{\$80,000}{\$100,000} = \mathbf{0.80} \quad (SPI < 1.0)$$
- **Interpretation:** The project has completed $20,000 less work than scheduled. Operating at an $SPI$ of 0.80 means work is progressing at only **80% of the planned schedule efficiency**. The project is severely **behind schedule**.

---

## 4. Comparison Tables

### 4.1 Comparison of Activity Dependency Types

| Precedence Type | Code | Operational Meaning | Practical IT Example | Frequency |
|---|---|---|---|---|
| **Finish-to-Start** | **FS** | B cannot start until A completes. | Code must be written before it can be tested. | **95% of tasks (Standard)** |
| **Start-to-Start** | **SS** | B cannot start until A begins. | Writing code and configuring mock databases start on the same morning. | Common in Agile |
| **Finish-to-Finish** | **FF** | B cannot finish until A finishes. | User manual updates cannot be completed until system testing finishes. | Common in QA/Docs |
| **Start-to-Finish** | **SF** | B cannot finish until A starts. | Old legacy database cannot be retired until new cloud system goes live. | Extremely Rare |

### 4.2 Schedule Compression: Crashing vs. Fast-Tracking

| Compression Technique | How It Works | Cost Impact | Risk Impact |
|---|---|---|---|
| **Crashing (කඩා වැටීම / සම්පත් එක්කිරීම)** | Adding extra resources to **critical path** activities (e.g., paying overtime, hiring two extra senior coders). | **Increases Cost** significantly. | Low technical risk, but high budget burn. |
| **Fast-Tracking (සමාන්තරව ක්‍රියාත්මක කිරීම)** | Re-sequencing activities that were originally planned in series (FS) to run **in parallel** (SS). | Zero direct cost increase. | **High Risk:** Increases rework and coordination bugs. |

---

## 5. Processes and Workflows

### 5.1 The Step-by-Step CPM Construction Workflow

```
1. Activity Decomposition
   └─► Generate activity list from WBS work packages with durations and predecessors.
         │
         ▼
2. Construct Network Diagram
   └─► Draw activity nodes and link them using Finish-to-Start dependency arrows.
         │
         ▼
3. Execute Forward Pass
   └─► Calculate ES and EF for all nodes from left to right; $ES = \max(\text{Predecessor } EF\text{s})$.
         │
         ▼
4. Identify Total Project Duration
   └─► The highest EF at the final node represents the total project timeline.
         │
         ▼
5. Execute Backward Pass
   └─► Calculate LF and LS for all nodes from right to left; $LF = \min(\text{Successor } LS\text{s})$.
         │
         ▼
6. Calculate Float & Isolate Critical Path
   └─► Calculate $\text{Float} = LS - ES$. Highlight nodes with $\text{Float} = 0$ in red.
```

---

## 6. Comprehensive Formulas Reference Sheet

```
1. PERT Expected Duration:
   E = (O + 4M + P) / 6

2. Forward Pass:
   EF = ES + Duration
   ES of successor = Max(EF of all immediate predecessors)

3. Backward Pass:
   LS = LF - Duration
   LF of predecessor = Min(LS of all immediate successors)

4. Total Float (Slack):
   Float = LS - ES  =  LF - EF

5. EVM Schedule Metrics:
   Schedule Variance (SV) = EV - PV
   Schedule Performance Index (SPI) = EV / PV
```

---

## 7. Advantages and Limitations of Procurement, Resource & Schedule Controls

| Technique | Key Strategic Advantages (වාසි) | Critical Pitfalls / Limitations (සීමාවන්) |
|---|---|---|
| **Critical Path Method (CPM)** | • Mathematically proves the exact completion date.<br>• Pinpoints the exact 20% of activities that dictate 100% of project timing. | • Assumes unlimited resource availability; if developer resources are constrained, CPM dates become invalid (requiring Critical Chain). |
| **Make-or-Buy Analysis** | • Prevents wasting millions of rupees "reinventing the wheel" for commodity software modules. | • Can create dangerous external vendor lock-in and dependency if critical intellectual property is outsourced. |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Keep these high-yield rules ready for rapid recall:
> 1. **Critical Path Definition:** The **longest path** through the network diagram that determines the **shortest possible project duration**.
> 2. **Critical Activity Float:** Activities on the critical path **ALWAYS have a Total Float of Zero ($\mathbf{Float = 0}$)**!
> 3. **Forward vs. Backward Pass:** Forward pass selects the **MAXIMUM** $EF$ for converging paths; Backward pass selects the **MINIMUM** $LS$ for diverging paths.
> 4. **Precedence Types:** Finish-to-Start (FS) is the most common dependency.
> 5. **SPI Meaning:** $SPI < 1.0$ indicates the project is **behind schedule**.

---

## 9. Quick Revision Summary

- **Procurement Management:** Plan $\to$ Conduct $\to$ Control $\to$ Close Procurements.
- **Documents:** SOW (deliverables), RFP (solution proposals), RFQ (price quotes).
- **Resource Management:** Plan $\to$ Estimate $\to$ Acquire $\to$ Develop $\to$ Manage $\to$ Control.
- **Schedule Management:** Plan $\to$ Define $\to$ Sequence $\to$ Estimate $\to$ Develop $\to$ Control.
- **Dependencies:** FS (standard), SS (parallel start), FF (joint finish), SF (rare transition).
- **PERT Duration:** $E = \frac{O + 4M + P}{6}$.
- **CPM Master Equations:** $EF = ES + D$; $LS = LF - D$; $\text{Float} = LS - ES$.
- **Critical Path:** Longest sequence of dependent tasks, determines project timeline, zero float.
- **EVM Timeline:** $SV = EV - PV$; $SPI = EV / PV$.

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A software project schedule network diagram has three parallel paths from Start to Finish:
- Path 1: A $\to$ B $\to$ C (Duration = 14 days)
- Path 2: D $\to$ E $\to$ F (Duration = 22 days)
- Path 3: G $\to$ H $\to$ I (Duration = 18 days)  
What is the Critical Path and the minimum total project duration?  
A. Path 1, with a duration of 14 days  
B. Path 2, with a duration of 22 days  
C. Path 3, with a duration of 18 days  
D. The average of all three paths (18 days)  
*Answer:* **B**  
*Explanation:* The Critical Path is the longest path through the network diagram, which determines the minimum possible project duration. Path 2 is 22 days, making it the Critical Path.

**Q2:** A project manager conducts a backward pass on Activity D and finds that Late Finish ($LF$) is Day 16 and Early Finish ($EF$) is Day 16. What is the Total Float of Activity D?  
A. 16 days  
B. 32 days  
C. 0 days  
D. 1 day  
*Answer:* **C**  
*Explanation:* $\text{Total Float} = LF - EF = 16 - 16 = \mathbf{0 \text{ days}}$. Activity D is on the Critical Path.

**Q3:** A project reports an Earned Value (EV) of $90,000 and a Planned Value (PV) of $100,000. What is the Schedule Performance Index (SPI), and what does it reveal about timeline performance?  
A. $SPI = 1.11$; Project is ahead of schedule  
B. $SPI = 0.90$; Project is behind schedule  
C. $SPI = 0.90$; Project is under budget  
D. $SPI = -10,000$; Project is on schedule  
*Answer:* **B**  
*Explanation:* $SPI = \frac{EV}{PV} = \frac{90,000}{100,000} = \mathbf{0.90}$. Because $SPI < 1.0$, the project is progressing at 90% of its planned rate and is behind schedule.

---

### Short-Answer & Scenario-Based Questions

**Q4 (Explain-the-Difference):** Distinguish between Schedule Crashing and Schedule Fast-Tracking when a technical project manager must compress a delayed software schedule.  
*Model Answer:*  
**Schedule Crashing (කඩා වැටීම / සම්පත් එක්කිරීම)** involves adding extra resources to activities on the critical path (such as authorizing paid overtime or assigning two additional senior developers) to compress duration; this significantly increases project costs. In contrast, **Schedule Fast-Tracking (සමාන්තරව ක්‍රියාත්මක කිරීම)** involves taking critical path activities that were originally scheduled sequentially (Finish-to-Start) and executing them concurrently in parallel (Start-to-Start); this incurs no extra direct financial cost, but dramatically increases project risk, architectural rework, and defect coordination overhead.

**Q5 (Comprehensive Worked CPM Network Problem):**  
A team is developing a microservices module consisting of 4 activities:
- Activity A (Database Design): Duration = 4 days; Predecessors = None
- Activity B (API Development): Duration = 6 days; Predecessor = A
- Activity C (UI Wireframing): Duration = 3 days; Predecessor = A
- Activity D (System Integration): Duration = 5 days; Predecessors = B and C

Calculate:
1. The Early Start (ES) and Early Finish (EF) for all activities.
2. The total project duration.
3. The Late Start (LS), Late Finish (LF), and Total Float for Activity C.
4. State the Critical Path.

*Model Answer:*  
1. **Forward Pass:**  
   - Activity A: $ES = 0 \implies EF = 0 + 4 = \mathbf{4 \text{ days}}$.  
   - Activity B: $ES = 4 \implies EF = 4 + 6 = \mathbf{10 \text{ days}}$.  
   - Activity C: $ES = 4 \implies EF = 4 + 3 = \mathbf{7 \text{ days}}$.  
   - Activity D: Predecessors are B ($EF=10$) and C ($EF=7$). $ES = \max(10, 7) = \mathbf{10} \implies EF = 10 + 5 = \mathbf{15 \text{ days}}$.  
2. **Total Project Duration:** The final early finish is **15 days**.  
3. **Backward Pass for Activity C:**  
   - Activity D: $LF = 15 \implies LS = 15 - 5 = \mathbf{10 \text{ days}}$.  
   - Activity C: Successor is D ($LS=10$) $\implies LF = \mathbf{10 \text{ days}}$.  
     $LS = LF - \text{Duration} = 10 - 3 = \mathbf{7 \text{ days}}$.  
     $\text{Total Float for Activity C} = LS - ES = 7 - 4 = \mathbf{3 \text{ days}}$ (or $LF - EF = 10 - 7 = \mathbf{3 \text{ days}}$).  
4. **Critical Path:**  
   - Path 1: $A \to B \to D = 4 + 6 + 5 = \mathbf{15 \text{ days}}$ (Zero float).  
   - Path 2: $A \to C \to D = 4 + 3 + 5 = \mathbf{12 \text{ days}}$ (Float = 3 days).  
   **Critical Path is A $\to$ B $\to$ D.**
