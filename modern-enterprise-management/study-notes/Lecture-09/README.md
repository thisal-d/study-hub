# Lecture 09: Project Management – Stakeholder & Communication Management

**Module:** IT3120 – Modern Enterprise Management (නූතන ව්‍යවසාය කළමනාකරණය)  
**Main Topic:** Stakeholder Analysis Frameworks, Engagement Strategies, Communication Channels, and The 5 Cs of Communication  
**Target Audience:** Computing and Information Technology Undergraduates

---

## 1. Introduction

Why do technologically perfect software projects fail? Decades of software engineering research prove that systems rarely collapse due to poor coding syntax; they collapse because of **people problems**. When key decision-makers feel ignored, when business analysts misinterpret user desires, or when project updates are buried in unread email chains, trust dissolves and projects derail.

Two knowledge areas work in tandem to prevent these failures: **Stakeholder Management (පාර්ශ්වකරුවන් කළමනාකරණය)** and **Communication Management (සන්නිවේදන කළමනාකරණය)**. Together, they provide the systematic tools required to identify everyone who has an interest in the project, understand their hidden motivations, navigate corporate politics, and guarantee that the right information reaches the right people through the right channels at the right time.

### Why This Topic Matters
- In modern Agile and DevOps environments, software is built collaboratively. Developers must regularly interact with client sponsors, end-users, compliance officers, and third-party API vendors.
- Missing an influential stakeholder during early project phases leads to severe resistance, scope disputes, and costly rework late in the development cycle.
- High-performing tech leads spend up to **90% of their working time communicating**. Mastering structured communication methods separates ordinary developers from elite technical leaders.

### Learning Objectives
After studying these notes, you will be able to:
1. Define **Stakeholder Management** and detail its four continuous lifecycle processes.
2. Construct and populate a professional **Stakeholder Register (පාර්ශ්වකරුවන්ගේ ලේඛනය)**.
3. Master and apply the four major stakeholder analysis models: **Power–Interest Grid**, **Power–Influence Grid**, **Influence–Impact Grid**, and the **Salience Model (සැලියන්ස් ආකෘතිය)**.
4. Classify stakeholders across the five progressive **Engagement Levels** (Unaware to Leading).
5. Define **Communication Management** and differentiate its three core processes.
6. Evaluate the trade-offs of the three primary communication methods: **Interactive, Push, and Pull Communication**.
7. Deconstruct the standard **Communication Model** (Sender, Encoding, Channel, Decoding, Receiver, Feedback) and identify real-world communication barriers (**Noise**).
8. Implement the **5 Cs of Effective Communication** in technical software documentation.
9. Formulate an end-to-end **Communications Management Plan**.
10. Synthesize stakeholder and communication strategies through the comprehensive **SLIIT Learning Management System (LMS) Case Study**.

---

## 2. Main Concepts

- **2.1 Understanding Stakeholder Management**
- **2.2 The Four Stakeholder Management Processes**
- **2.3 Stakeholder Analysis Framework 1: The Power–Interest Grid**
- **2.4 Frameworks 2 & 3: Power–Influence & Influence–Impact Grids**
- **2.5 Advanced Framework 4: The Mitchell-Agle-Wood Salience Model**
- **2.6 The Five Stakeholder Engagement Levels**
- **2.7 Understanding Communication Management & Core Objectives**
- **2.8 The Three Communication Management Processes**
- **2.9 Communication Methods: Interactive vs. Push vs. Pull**
- **2.10 The Communication Model & Breakdown Barriers (Noise)**
- **2.11 The 5 Cs of Effective Communication**
- **2.12 Comprehensive Case Study: SLIIT Learning Management System (LMS)**

---

## 3. Detailed Explanations

### 3.1 What Is Stakeholder Management?

#### Formal Definition
> **Stakeholder Management (පාර්ශ්වකරුවන් කළමනාකරණය)** is the systematic discipline of **identifying, analyzing, and actively engaging** individuals, groups, or organizations that can affect, be affected by, or perceive themselves to be affected by any decision, activity, or outcome of a project.

- **Who is a Stakeholder?** Anyone with a stake in the project outcome.
  - *Internal Stakeholders:* Developers, QA testers, Scrum Masters, Tech Leads, Executive Sponsors, and System Administrators.
  - *External Stakeholders:* Clients, end-users, third-party software vendors, government regulators (e.g., Central Bank), and the public.
- **Why It Matters:** Projects fail when stakeholders' unvoiced expectations are not managed. Identifying a critical compliance auditor on the day of deployment will halt a project instantly.

---

### 3.2 The Four Key Processes in Stakeholder Management

```
[ 1. Identify Stakeholders ] ──► [ 2. Plan Engagement ] ──► [ 3. Manage Engagement ] ──► [ 4. Monitor Engagement ]
  (Who is affected?                (What strategies will            (Executing communication;       (Tracking attitudes;
   Output: Stakeholder Register)    we use to involve them?)         resolving conflicts)            adjusting strategies)
```

#### 1. Identify Stakeholders (ආරම්භයේදීම හඳුනාගැනීම)
- *What happens:* Brainstorming, examining contracts, and interviewing sponsors to uncover every person impacted by the system.
- *Key Tool:* Expert judgment, stakeholder mapping grids.
- *Primary Output:* **Stakeholder Register (පාර්ශ්වකරුවන්ගේ ලේඛනය)**:
  - *Identification Info:* Name, organizational department, role.
  - *Assessment Info:* Major expectations, potential influence, and level of project interest.
  - *Classification:* Internal/External, Supporter/Resistant.

#### 2. Plan Stakeholder Engagement (සම්බන්ධ කරගැනීම සැලසුම් කිරීම)
- *What happens:* Developing tailored strategies to involve stakeholders effectively based on their needs, expectations, and power.
- *Primary Output:* **Stakeholder Engagement Plan (පාර්ශ්වකරුවන් සම්බන්ධ කරගැනීමේ සැලැස්ම)**.

#### 3. Manage Stakeholder Engagement (ක්‍රියාකාරීව සම්බන්ධ කරගැනීම)
- *What happens:* The active execution phase. Communicating regularly, holding sprint reviews, addressing concerns before they escalate into hostility, and negotiating compromises.
- *Primary Outputs:* Change Requests, Issue Log updates, Project Document Revisions.

#### 4. Monitor Stakeholder Engagement (නිරන්තරයෙන් නිරීක්ෂණය කිරීම)
- *What happens:* Tracking stakeholder attitudes over time. A stakeholder who was neutral in month 1 may become strongly resistant in month 4 if their department's workflow is disrupted.

---

### 3.3 Stakeholder Analysis Framework 1: The Power–Interest Grid

The **Power–Interest Grid (බලය සහ උනන්දුව පදනම් කරගත් න්‍යාසය)** is the most widely utilized 2×2 matrix in enterprise project management. It plots a stakeholder's formal **Power / Authority (බලය)** against their personal **Interest / Concern (උනන්දුව)**:

```
    Power (බලය)
      ▲
 High │  ┌──────────────────────────────┬──────────────────────────────┐
      │  │        KEEP SATISFIED        │        MANAGE CLOSELY        │
      │  │        (තෘප්තිමත්ව තබන්න)     │         (ළඟින්ම කළමනාකරණය)    │
      │  │  • University Deans          │  • Project Sponsor           │
      │  │  • Central Bank Regulators   │  • Primary Corporate Client  │
      │  ├──────────────────────────────┼──────────────────────────────┤
      │  │           MONITOR            │         KEEP INFORMED        │
      │  │         (නිරීක්ෂණය කරන්න)      │         (දැනුවත්ව තබන්න)      │
      │  │  • General Public            │  • End-Users / Students      │
  Low │  │  • Minor Hardware Vendors    │  • QA Testing Engineers      │
      │  └──────────────────────────────┴──────────────────────────────┘
      └────────────────────────────────────────────────────────────────► Interest (උනන්දුව)
         Low                                                         High
```

#### Detailed Quadrant Management Strategies

1. **High Power – High Interest $\implies$ MANAGE CLOSELY (ළඟින්ම කළමනාකරණය කරන්න):**
   - *Stakeholder Profile:* Key decision-makers who fund the project and care deeply about its success. (e.g., Executive Sponsor, Chief Technology Officer).
   - *Strategy:* Involve them in major architectural decisions, conduct weekly 1-on-1 status briefings, and manage their expectations proactively.
2. **High Power – Low Interest $\implies$ KEEP SATISFIED (තෘප්තිමත්ව තබන්න):**
   - *Stakeholder Profile:* Powerful entities who do not have time for daily meetings, but can terminate the project if their rules are violated. (e.g., Legal Counsel, Compliance Regulators, University Deans).
   - *Strategy:* Do not overwhelm them with technical jargon; provide concise executive summaries and ensure all their regulatory standards are met.
3. **Low Power – High Interest $\implies$ KEEP INFORMED (දැනුවත්ව තබන්න):**
   - *Stakeholder Profile:* People heavily affected by the software who lack formal power to approve budgets. (e.g., Students, Data Entry Operators, QA Testers).
   - *Strategy:* Send regular newsletters, host interactive system demonstrations, and collect their feedback to secure user adoption.
4. **Low Power – Low Interest $\implies$ MONITOR (අවම පරිශ්‍රමයකින් නිරීක්ෂණය කරන්න):**
   - *Stakeholder Profile:* Individuals with minimal authority and little concern for daily project progress. (e.g., Peripheral suppliers).
   - *Strategy:* Monitor with occasional updates; do not waste excessive project resources here unless their power or interest shifts.

---

### 3.4 Additional Analysis Grids

1. **Power–Influence Grid (බලය සහ බලපෑම් හැකියාව):**  
   Plots formal authority (**Power**) against the informal capability to sway opinions and guide decisions (**Influence**).  
   *Use Case:* Identifies **informal leaders**. In a software company, a veteran Principal Architect may hold zero managerial power on paper, but possesses massive influence over whether developers accept a new framework.
2. **Influence–Impact Grid (බලපෑම් හැකියාව සහ ව්‍යාපෘතියෙන් වන බලපෑම):**  
   Plots an individual’s ability to affect project tasks against the degree to which the project’s deployment will transform their daily work (**Impact**).  
   *Use Case:* **Change Management**. When deploying an automated ERP, factory workers have low influence over software design, but suffer 100% impact on their jobs. Managing them prevents strikes and user rebellion.

---

### 3.5 Advanced Analysis: The Mitchell-Agle-Wood Salience Model

For large-scale, politically volatile enterprise projects, the **Salience Model (සැලියන්ස් ආකෘතිය)** categorizes stakeholders across three Venn diagram attributes:

```
                      [ POWER (බලය) ]
                      (Formal Authority)
                           /     \
                          /   4   \
                         / \     / \
                        /   \ 7 /   \
                       /  5  \ /  6  \
                      /       X       \
   [ LEGITIMACY (නීත්‍යානුකූලභාවය) ] ─── [ URGENCY (හදිසි අවශ්‍යතාව) ]
    (Moral or Contractual Right)           (Demand for Immediate Action)
```

#### The Seven Stakeholder Typologies
1. **Dormant Stakeholders (නිද්‍රාශීලී):** Possess **Power** only, but lack legitimacy and urgency. Must be monitored because they can awaken suddenly (e.g., an unengaged investor).
2. **Discretionary Stakeholders (අභිමතානුසාරී):** Possess **Legitimacy** only (e.g., charitable NGOs). They receive courtesy information.
3. **Demanding Stakeholders (ඉල්ලීම්බර):** Possess **Urgency** only. Loud and vocal, but hold zero formal power or legitimate claim. They require polite acknowledgment with minimal resource investment.
4. **Dominant Stakeholders (ප්‍රමුඛ):** Possess **Power + Legitimacy** (e.g., Corporate Board of Directors). They command formal authority and expect active, close engagement.
5. **Dangerous Stakeholders (අන්තරායකර):** Possess **Power + Urgency**, but lack legal legitimacy (e.g., rogue activist hackers, disgruntled striking workers). Can resort to coercive tactics; must be actively managed to mitigate risk!
6. **Dependent Stakeholders (පරායත්ත):** Possess **Legitimacy + Urgency**, but lack power (e.g., local community members impacted by datacenter noise). They rely on others to advocate for them.
7. **Definitive Stakeholders (නිරපේක්ෂ / තීරණාත්මක):** Possess **ALL THREE: Power + Legitimacy + Urgency**! These are the #1 highest-priority stakeholders in the entire project ecosystem (e.g., the Project Sponsor demanding an urgent fix to a critical production bug).

---

### 3.6 The Five Stakeholder Engagement Levels

During project execution, project managers track stakeholder attitudes across five distinct levels:

```
[ 1. Unaware ] ──► [ 2. Resistant ] ──► [ 3. Neutral ] ──► [ 4. Supportive ] ──► [ 5. Leading ]
 (නොදැනුවත්)         (විරුද්ධ වන)         (මැදහත්)           (සහය දක්වන)        (නායකත්වය දෙන)
```

1. **Unaware (නොදැනුවත්):** Completely oblivious to the project’s existence and its potential organizational impacts.
2. **Resistant (විරුද්ධ වන):** Aware of the project, but actively opposes it due to fear of job loss, loss of status, or increased workload.
3. **Neutral (මැදහත්):** Aware of the project, but neither supports nor resists it. Passive.
4. **Supportive (සහය දක්වන):** Understands project benefits and actively assists the development team in achieving milestones.
5. **Leading (නායකත්වය දෙන):** Champion of the project. Actively promotes the software to peers, clears organizational roadblocks, and drives adoption.

> **Project Manager Objective:** Systematically transition stakeholders from **Unaware** or **Resistant** states into **Supportive** and **Leading** champions through targeted engagement.

---

### 3.7 What Is Communication Management?

#### Formal Definition
> **Communication Management (සන්නිවේදන කළමනාකරණය)** is the systematic process of **planning, collecting, creating, distributing, storing, retrieving, managing, and monitoring** project information to guarantee that the right information reaches the right stakeholders at the right time.

#### Core Dimensions
- Software engineers often assume communication happens automatically. In reality, **over 50% of software defects originate from flawed, ambiguous communication** during early requirements analysis.
- Effective communication management establishes clear protocols regarding:
  - *What* data must be shared.
  - *Who* is authorized to receive it.
  - *How* frequently updates occur.
  - *Which* channels must be utilized.

---

### 3.8 The Three Communication Management Processes

```
[ 1. Plan Communication Management ] ──► [ 2. Manage Communications ] ──► [ 3. Monitor Communications ]
  Determine stakeholder information        Generate, distribute, and             Track message effectiveness;
  needs; build Communications Plan.         store project data (Reports).         resolve communication gaps.
```

1. **Plan Communication Management (සැලසුම් කිරීම):** Defines stakeholder communication requirements based on their role and analysis quadrant.  
   *Output:* The master **Communications Management Plan (සන්නිවේදන කළමනාකරණ සැලැස්ම)**.
2. **Manage Communications (ක්‍රියාත්මක කිරීම):** The ongoing execution of the plan—distributing status reports, hosting sprint reviews, writing meeting minutes, and updating dashboards.
3. **Monitor Communications (නිරීක්ෂණය සහ පාලනය):** Assessing whether messages are actually understood. If developers misunderstand API specifications sent via email, the PM intervenes to change the channel to interactive workshops.

---

### 3.9 Communication Methods: Interactive vs. Push vs. Pull

```
                           ┌── 1. INTERACTIVE (Real-time, two-way dialogue: Zoom, Meetings, Workshops)
Communication Methods ─────┼── 2. PUSH (One-way delivery to specific targets: Emails, Memos, Newsletters)
                           └── 3. PULL (Self-service access from central repository: Jira, Intranet, Wiki)
```

| Method | Operational Mechanism | Best Used For | Software Industry Examples |
|---|---|---|---|
| **Interactive Communication (අන්තර්ක්‍රියාකාරී)** | Real-time, multi-directional exchange allowing **immediate verbal and non-verbal feedback**. Minimizes misunderstandings. | High-risk, complex, sensitive, or contentious topics; architectural debates. | Daily Scrum standup meetings, sprint retrospectives, client demonstration sessions, Zoom whiteboarding calls. |
| **Push Communication (තල්ලු කිරීමේ සන්නිවේදනය)** | Sent directly to specific recipients. Confirms the message was sent, but **cannot guarantee the recipient read or understood it**. | Formal announcements, contractual notifications, routine status reports. | Weekly project progress emails sent to management, formal PDF invoices, system maintenance memos. |
| **Pull Communication (ඇදගැනීමේ සන්නිවේදනය)** | Information stored in a centralized, secure repository. Stakeholders access and retrieve the data **at their own discretion**. | Large volumes of reference information distributed to large, dispersed audiences. | Confluence team wikis, Jira Kanban boards, GitHub code repositories, automated Azure DevOps analytics dashboards. |

---

### 3.10 The Communication Model & Communication Noise

The classic Shannon-Weaver communication framework models information exchange as a rigorous technical pipeline:

```
[ SENDER ] ──► [ ENCODING ] ──► [ CHANNEL / MEDIUM ] ──► [ DECODING ] ──► [ RECEIVER ]
   (PM)       (Thoughts into      (Slack, Email, Zoom)   (Interpreting       (Dev)
                Words/Code)                                 Meaning)
                                           ▲
                                           │
                                  [ NOISE / BARRIERS ]
                          (Jargon, Bias, Email Fatigue,
                             Cultural Distractions)
                                           │
                                           ▼
[ SENDER ] ◄──────────────────────── [ FEEDBACK ] ◄───────────────────────── [ RECEIVER ]
              (Receiver responds confirming message was understood)
```

- **Sender (පණිවිඩකරු):** Initiates the message by translating thoughts into understandable symbols (**Encoding**).
- **Channel / Medium (මාධ්‍යය):** The chosen transport vehicle (Slack message, face-to-face meeting, formal email).
- **Receiver (ග්‍රාහකයා):** Interprets and translates the symbols back into thoughts (**Decoding**).
- **Feedback (ප්‍රතිපෝෂණය):** The receiver's response confirming understanding. **Communication is incomplete without feedback!**
- **Noise / Barriers (බාධාකාරී සාධක):** Anything that corrupts or distorts the message in transit:
  - Technical jargon confusing non-technical business clients.
  - Ambiguous writing in requirement tickets.
  - Emotional prejudice, stress, or language and cultural barriers.

---

### 3.11 The 5 Cs of Effective Communication

Whenever a software engineer writes a project email, technical ticket, or status report, they must enforce the **5 Cs**:

```
                       ┌── 1. CLEAR (පැහැදිලි): Simple, direct, free of confusing technical jargon.
                       ├── 2. CONCISE (කෙටි හා සංක්ෂිප්ත): Focused, eliminating unnecessary fluff and filler.
The 5 Cs of Effective  ┼── 3. CORRECT (නිවැරදි): Factually accurate, technically precise, zero errors.
    Communication      ├── 4. COHERENT (තර්කානුකූල): Logically structured with bullet points and clean flow.
                       └── 5. CONTROLLED (පාලනය කළ): Professionally delivered, respecting confidentiality.
```

- **Bad Example:** *"Hey team, our backend thing is having issues, maybe memory or something, we should check it out sometime soon."* (Vague, lacks data, zero clarity).
- **Good Example (Applying the 5 Cs):**  
  > *"Production Alert: The user authentication microservice is experiencing an Out-Of-Memory (OOM) crash affecting 15% of mobile logins. Root cause identified: unindexed database query in the user profile table. Resolution: Database patch deploying at 14:00 UTC. Downtime: 0 minutes."* (Clear, Concise, Correct, Coherent, Controlled!).

---

### 3.12 Comprehensive Case Study: SLIIT Learning Management System (LMS)

**Project Context:** The Sri Lanka Institute of Information Technology (SLIIT) undertakes an 8-month project to construct a next-generation **Learning Management System (Courseweb LMS)**. The development is executed collaboratively by the institute’s in-house IT Division and an external software consultancy.

#### 1. Stakeholder Identification & The Power–Interest Grid

```
       Power (බලය)
         ▲
    High │  ┌──────────────────────────────┬──────────────────────────────┐
         │  │        KEEP SATISFIED        │        MANAGE CLOSELY        │
         │  │  • Faculty Deans & HODs      │  • Managing Director / CEO   │
         │  │  • Ministry of Education     │  • IT Director (Sponsor)     │
         │  ├──────────────────────────────┼──────────────────────────────┤
         │  │           MONITOR            │         KEEP INFORMED        │
         │  │  • Server Hardware Suppliers │  • Lecturers & Instructors   │
     Low │  │  • General Public            │  • Undergraduate Students    │
         │  └──────────────────────────────┴──────────────────────────────┘
         └────────────────────────────────────────────────────────────────► Interest (උනන්දුව)
            Low                                                         High
```

#### 2. Tailored Stakeholder Engagement Strategies

| Stakeholder Group | Grid Classification | Engagement Strategy & Operational Tactics |
|---|---|---|
| **SLIIT Executive Management** | High Power – High Interest | **Manage Closely:** Monthly executive steering committee meetings, high-level milestone progress dashboards, immediate variance escalations. |
| **Faculty Deans & HODs** | High Power – Moderate Interest | **Keep Satisfied:** Bi-monthly summarized progress briefs; ensure examination policy regulations are strictly adhered to. |
| **Lecturers & Academic Staff** | Moderate Power – High Interest | **Keep Informed & Consult:** Bi-weekly hands-on user interface workshops; interactive demonstrations to collect feedback on assignment grading workflows. |
| **Undergraduate Students** | Low Power – High Interest | **Keep Informed:** User experience pilot testing cohorts, student feedback surveys, automated knowledge base guides. |
| **External Software Vendor** | High Influence – High Interest | **Manage Closely:** Daily Scrum standups, bi-weekly sprint planning, and shared Jira Kanban boards. |

---

#### 3. The Comprehensive Communications Management Plan

| Information Deliverable | Target Audience | Communication Method | Channel & Tool | Frequency | Responsible Owner |
|---|---|---|---|---|---|
| **Executive Progress Brief** | Academic Board / Sponsor | Push Communication | Formal PDF Email Report | Monthly | Project Manager |
| **Sprint Burn-down & Velocity** | Dev Team & Vendor | Pull Communication | Jira / Azure DevOps Portal | Continuous / Real-Time | Scrum Master |
| **LMS UI/UX Demonstration** | Lecturers & Students | Interactive | Live Zoom Workshop | Monthly | Lead UI/UX Designer |
| **Technical Incident Escalation** | In-House IT Support | Interactive & Push | Urgent Slack Channel & Phone | As Incidents Occur | QA Lead |
| **System Architecture Manual** | IT Operations Team | Pull Communication | Confluence Team Wiki | Updated Each Release | Solutions Architect |

---

## 4. Comparison Tables

### 4.1 Comparison of Communication Methods

| Method | Directionality | Speed of Feedback | Cost & Effort | Major Risk |
|---|---|---|---|---|
| **Interactive** | Two-way (Multi-directional). | **Immediate** real-time feedback. | High time investment (meetings, calls). | Meeting fatigue, calendar congestion. |
| **Push** | One-way (Outward delivery). | **Delayed or Zero** feedback. | Moderate (composing emails, writing memos). | Message ignored, ends up in spam, misunderstood. |
| **Pull** | Self-Service (Retrieval). | **None** (User accesses on demand). | Low marginal cost once platform is set up. | Stakeholders forget to check portals; outdated docs. |

### 4.2 Salience Model vs. Power–Interest Grid

| Dimension | Power–Interest Grid | Mitchell Salience Model |
|---|---|---|
| **Structure** | 2-dimensional 2×2 matrix. | 3-dimensional Venn diagram. |
| **Variables Evaluated** | Power and Interest. | **Power, Legitimacy, and Urgency**. |
| **Complexity** | Simple, intuitive, universally applied. | Highly advanced; captures dynamic corporate politics. |
| **Best Used For** | Standard software development projects. | High-profile, politically sensitive enterprise transformations. |

---

## 5. Processes and Workflows

### 5.1 Communication Problem Resolution Workflow

```
1. Identify Communication Breakdown
   └─► Example: Lecturers complain that the new LMS assignment submission portal is unusable.
         │
         ▼
2. Analyze Communication Model Flaw
   └─► Diagnosis: The instructions were "Pushed" via a dense 40-page text email attachment.
       Encoding was too technical; Noise (email fatigue) prevented lecturers from reading it.
         │
         ▼
3. Switch to Appropriate Communication Method
   └─► Transition from PUSH to INTERACTIVE & PULL.
         │
         ▼
4. Execute Interactive Engagement
   └─► Host 30-minute interactive hands-on demo sessions (Zoom + Campus Labs).
         │
         ▼
5. Implement Pull Documentation
   └─► Record 2-minute video tutorials hosted on the LMS home dashboard (Pull).
         │
         ▼
6. Verify via Feedback Loop
   └─► Send a 1-question pulse survey verifying confidence; monitor lecturer support ticket volume drop.
```

---

## 6. Practical Real-World Scenarios

### Scenario: Managing a "Dangerous" Stakeholder (Power + Urgency without Legitimacy)
- **The Context:** A hospital deploys a new electronic health record system. An unauthorized group of external IT equipment suppliers, angered that the hospital switched to a cloud database rather than buying on-premise hardware from them, launches a coordinated public smear campaign on social media, falsely claiming patient records are insecure.
- **Salience Model Classification:** **Dangerous Stakeholder** (They possess the **Power** to damage public reputation, and act with extreme **Urgency**, but hold zero **Legitimate** claim inside the project).
- **Managerial Response Strategy:**
  1. Do not ignore them (their urgency creates immediate reputational risk).
  2. Deploy formal **Push Communication**: Release an official security compliance certification signed by an independent cybersecurity auditor.
  3. Engage **Definitive Stakeholders (Hospital Board & Ministry of Health)** via **Interactive Briefings** to ensure internal alignment.
  4. Work with legal counsel to issue formal cease-and-desist warnings to neutralize the threat.

---

## 7. Advantages and Limitations of Stakeholder Models

| Framework | Key Advantages (වාසි) | Critical Limitations (සීමාවන්) |
|---|---|---|
| **Power–Interest Grid** | • Extremely easy to construct and explain to teams.<br>• Instantly clarifies where executive attention must be allocated. | • Static snapshot; fails to capture how stakeholder attitudes shift over time.<br>• Ignores stakeholder relationships and political alliances. |
| **The 5 Cs of Communication** | • Drastically reduces developer misunderstandings.<br>• Saves hours of wasted email back-and-forth. | • Requires discipline and training; developers often default to informal, ambiguous slang in chat tools. |

---

## 8. Important Exam Points

> [!IMPORTANT]
> Key examination focus areas:
> 1. **High Power, Low Interest Strategy:** Always remember the prescription: **Keep Satisfied** (e.g., government regulators and faculty deans).
> 2. **Definitive Stakeholders:** In the Salience Model, Definitive stakeholders possess **Power, Legitimacy, AND Urgency**. They receive top priority!
> 3. **Communication Methods:** Interactive = Two-way meetings; Push = Sent emails/reports; Pull = Intranets/Wikis.
> 4. **Feedback in the Communication Model:** The communication loop is **incomplete** until the receiver decodes the message and sends **Feedback** confirming comprehension.
> 5. **The 5 Cs:** Clear, Concise, Correct, Coherent, and Controlled.

---

## 9. Quick Revision Summary

- **Stakeholder Management:** Systematic identification, analysis, and engagement throughout the project lifecycle.
- **4 Processes:** Identify $\to$ Plan $\to$ Manage $\to$ Monitor.
- **Power–Interest Matrix:** Manage Closely (High/High), Keep Satisfied (High/Low), Keep Informed (Low/High), Monitor (Low/Low).
- **Salience Model:** Evaluates Power, Legitimacy, and Urgency across 7 classes.
- **5 Engagement Levels:** Unaware $\to$ Resistant $\to$ Neutral $\to$ Supportive $\to$ Leading.
- **Communication Management:** Planning, collecting, creating, distributing, storing, and monitoring project information.
- **Communication Methods:** Interactive (meetings), Push (emails), Pull (shared knowledge portals).
- **Shannon-Weaver Model:** Sender $\to$ Encoding $\to$ Channel (subject to Noise) $\to$ Decoding $\to$ Receiver $\to$ Feedback.
- **5 Cs:** Clear, Concise, Correct, Coherent, Controlled.

---

## 10. Practice Questions & Answers

### Multiple-Choice Questions (MCQs)

**Q1:** A project manager needs to communicate complex, contentious software architecture changes to five resistant senior database engineers. Which communication method is MOST effective for this situation?  
A. Pull Communication via a Confluence wiki post  
B. Push Communication via an all-staff email memo  
C. Interactive Communication through a face-to-face workshop  
D. Automated status notifications on Slack  
*Answer:* **C**  
*Explanation:* Complex, sensitive, or contentious topics with resistant stakeholders require Interactive Communication (meetings/workshops) to allow two-way dialogue, immediate clarification, and emotional rapport.

**Q2:** In the Mitchell, Agle, and Wood Salience Model, what is the classification of a stakeholder who possesses formal decision-making Power, legal Legitimacy, and an Urgent claim requiring immediate attention?  
A. Dominant Stakeholder  
B. Dangerous Stakeholder  
C. Definitive Stakeholder  
D. Dependent Stakeholder  
*Answer:* **C**  
*Explanation:* Stakeholders who hold all three attributes (Power, Legitimacy, Urgency) are categorized as Definitive Stakeholders and command the highest priority.

**Q3:** A project manager stores all software API documentation, system architecture wireframes, and sprint performance burn-down charts in a centralized, password-protected cloud portal where team members can access them whenever needed. What communication method is being used?  
A. Push Communication  
B. Pull Communication  
C. Interactive Communication  
D. Informal Communication  
*Answer:* **B**  
*Explanation:* Storing project information in a central location for self-service retrieval by stakeholders is Pull Communication.

---

### Short-Answer & Scenario-Based Questions

**Q4 (Explain-the-Difference):** Contrast the management strategy for a stakeholder in the "Keep Satisfied" quadrant with one in the "Manage Closely" quadrant of the Power–Interest Grid.  
*Model Answer:*  
Stakeholders in the **"Manage Closely"** quadrant possess both High Power and High Interest (e.g., the Project Sponsor). The manager must involve them actively in key decisions, conduct frequent status meetings, and collaborate with them continuously. In contrast, stakeholders in the **"Keep Satisfied"** quadrant hold High Power but Low Interest (e.g., regulatory compliance authorities). The manager should satisfy their specific requirements and provide concise executive summaries without overwhelming them with day-to-day operational details.

**Q5 (Case-Based Scenario):**  
During the deployment of a new hospital information system, the project team observes that head nurses are actively resistant to using the digital bedside tablets, complaining that typing patient records takes longer than writing on paper charts.
1. Identify the current engagement level of the head nurses and state the target engagement level the project manager must aim for.  
2. Formulate a three-step communication and engagement strategy to resolve their resistance.  
*Model Answer:*  
1. **Engagement Levels:** Current level = **Resistant (විරුද්ධ වන)**. Target level = **Supportive (සහය දක්වන)** or **Leading (නායකත්වය දෙන)**.  
2. **Three-Step Resolution Strategy:**  
   - *Step 1: Conduct Interactive Empathy Sessions:* Meet with the head nurses in person to observe their daily routine. Listen to their specific frustrations without being defensive.  
   - *Step 2: Optimize System & Tailor Training (Address the Root Cause):* Work with UI/UX engineers to introduce customizable voice-to-text dictation and standardized medical check-boxes on the tablets, cutting data entry time in half. Provide dedicated 1-on-1 bedside coaching.  
   - *Step 3: Appoint Nurse Champions (Leading Level):* Select two respected senior nurses, train them thoroughly as super-users, and empower them to guide and support their peers, fostering organic peer-to-peer adoption.
