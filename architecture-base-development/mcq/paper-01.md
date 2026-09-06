# SE3100: Architecture Based Development
# Practice Exam Paper 01 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 01)
## Focus: Lecture 01 — Introduction to Software Architecture & Foundations

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: What Constitutes a Software System? (මෘදුකාංග පද්ධතියක අඩංගු අංග)
A modern production-grade software system is composed of more than just human-written source code. Which of the following elements are recognized as fundamental components of a complete software system?  
*[Select THREE correct answers]*

- [ ] **A.** Executable binaries and source code (මූල කේත සහ ධාවනය කළ හැකි ගොනු).
- [ ] **B.** Data stores, relational databases, and file caches.
- [ ] **C.** Configurations, external libraries, runtime environments, and third-party APIs.
- [ ] **D.** Physical semiconductor wafer fabrication equipment.
- [ ] **E.** End-user personal web browsing histories.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** In software architecture, software is recognized as an interconnected ecosystem consisting of source code/executables, persistent databases, configurations, shared libraries, external services, and deployment/runtime environments.
* **Why D & E are INCORRECT:** Hardware manufacturing equipment (D) and personal browsing histories (E) are external entities, not constituent building blocks of a deployed application architecture.

---

### Question 2: The Core Purpose of Software Architecture (මෘදුකාංග ගෘහ නිර්මාණ ශිල්පයේ මූලික අරමුණ)
Which of the following statements accurately describe the primary purpose and nature of software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** Architecture provides the high-level structure required to organize and manage system complexity.
- [ ] **B.** Architecture completely removes and eliminates all inherent complexity from a software system.
- [ ] **C.** Architecture helps teams establish clear responsibilities, boundaries, and communication rules between parts.
- [ ] **D.** Architecture guarantees that developers will never need to write automated unit tests.
- [ ] **E.** Architecture focuses exclusively on micro-level class algorithms and database SQL query optimizations.

**ANSWER:** A, C

**Explanation (විග්‍රහය):**
* **Why A & C are CORRECT:** Architecture defines the macro-structure, divides systems into cohesive parts, assigns responsibilities, and governs interactions. Crucially, architecture **does not remove complexity**; it **organizes complexity** so humans can manage it.
* **Why B is INCORRECT:** Architecture cannot magically eliminate business domain complexity; it merely organizes it.
* **Why D & E are INCORRECT:** Architecture does not replace testing (D), and micro-level algorithms/queries fall under detailed design, not architecture (E).

---

### Question 3: The Four Dimensions of Software Architecture (ගෘහ නිර්මාණ මාන හතර)
Mark Richards and Neal Ford define software architecture across four fundamental dimensions. Which of the following represent these **Four Dimensions**?  
*[Select FOUR correct answers]*

- [ ] **A.** Quality Attributes / Architectural Characteristics (ගුණාත්මක ලක්ෂණ - e.g., Scalability, Security).
- [ ] **B.** Logical Components (තාර්කික සංරචක - e.g., Services, Domains, Workflows).
- [ ] **C.** Architectural Style (ගෘහ නිර්මාණ විලාසය - e.g., Layered, Microservices).
- [ ] **D.** Architectural Decisions (ගෘහ නිර්මාණ තීරණ - rules and constraints).
- [ ] **E.** Marketing Campaigns (වෙළඳ ප්‍රචාරණ ව්‍යාපාර).

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** Richards & Ford state that architecture is the union of: (1) Quality Attributes ("-ilities"), (2) Logical Components, (3) Architectural Style, and (4) Architectural Decisions.
* **Why E is INCORRECT:** Marketing is a business sales function, not an architectural dimension.

---

### Question 4: Architectural Decisions in House Construction Analogy (නිවාස ඉදිකිරීමේ උපමාව)
In the lecture's analogy comparing software architecture to designing a modern two-storey home, which elements correspond to **Architectural Decisions (ගෘහ නිර්මාණ තීරණ)**?  
*[Select TWO correct answers]*

- [ ] **A.** Elevating the ground floor foundation by 3 feet to prevent seasonal flood damage.
- [ ] **B.** Vertically grouping and stacking wet plumbing areas (bathrooms above kitchens) to minimize pipe runs.
- [ ] **C.** Choosing the color of the curtains in the master bedroom.
- [ ] **D.** Selecting the specific brand of living room television.
- [ ] **E.** The physical dining table seating arrangement.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Elevating the floor for flood safety and stacking wet areas to optimize drainage and prevent leaks are macro-level, costly-to-change structural rules—the exact definition of architectural decisions.
* **Why C, D & E are INCORRECT:** Interior decorations, appliance brands, and furniture positioning are easily changeable interior details (equivalent to detailed UI styling or local variables in code).

---

### Question 5: Does All Software Have an Architecture? (සෑම මෘදුකාංගයකටම ව්‍යුහයක් තිබේද?)
Which statements are **TRUE** regarding whether all software systems have an architecture?  
*[Select TWO correct answers]*

- [ ] **A.** Yes, every software system has an architecture, because every system has some form of structure, components, and relationships.
- [ ] **B.** Only enterprise applications built by certified architects have an architecture; simple applications have none.
- [ ] **C.** The real question is not whether an architecture exists, but whether it was **deliberately understood and managed**.
- [ ] **D.** If developers never draw architectural diagrams, the software runs without any architecture.
- [ ] **E.** An architecture only exists after a system is migrated to the cloud.

**ANSWER:** A, C

**Explanation (විග්‍රහය):**
* **Why A & C are CORRECT:** Every running piece of code has elements, dependencies, and data flows. Therefore, an architecture always exists; the critical distinction is whether it is **Intentional (deliberate)** or **Accidental (unmanaged)**.
* **Why B, D & E are INCORRECT:** Architecture is an intrinsic property of all software systems, regardless of whether it is formally documented or deployed in the cloud.

---

### Question 6: Business Drivers (ව්‍යාපාරික ධාවකයන්)
What are **Business Drivers (ව්‍යාපාරික ධාවකයන්)** in the context of software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** The business goals, competitive market pressures, and resource constraints that determine system success.
- [ ] **B.** Technical CPU scheduling algorithms operating inside the Linux kernel.
- [ ] **C.** Strategic objectives expressed in business language (e.g., reducing time-to-market, budget ceilings).
- [ ] **D.** Software device drivers that allow a printer to communicate with an operating system.
- [ ] **E.** The specific JavaScript syntax rules enforced by a code linter.

**ANSWER:** A, C

**Explanation (විග්‍රහය):**
* **Why A & C are CORRECT:** Business drivers are commercial goals and external constraints (cost, schedule, competition, user growth) expressed in business terminology that architects must translate into technical quality attributes.
* **Why B, D & E are INCORRECT:** Hardware drivers (D), kernel algorithms (B), and linter rules (E) are low-level technical mechanisms, not business drivers.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Identifying Architectural Decisions vs. Detailed Design (ගෘහ නිර්මාණ තීරණ සහ සවිස්තර නිර්මාණකරණය)
A decision in software engineering exists along a continuum. A decision is classified as **Architectural (ගෘහ නිර්මාණ මට්ටමේ)** rather than **Design (සවිස්තර නිර්මාණ මට්ටමේ)** when it possesses which of the following characteristics?  
*[Select THREE correct answers]*

- [ ] **A.** It is strategic and affects the long-term direction of the entire software product.
- [ ] **B.** It is difficult, painful, or prohibitively expensive to alter later in the project lifecycle.
- [ ] **C.** It has cross-cutting impact across multiple modules and teams.
- [ ] **D.** It can be refactored by a junior programmer in under fifteen minutes without external consultation.
- [ ] **E.** It pertains solely to the internal sorting algorithm used inside a private helper method.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Architectural decisions are strategic, long-lasting, expensive to change, impact multiple system components, and involve significant trade-offs.
* **Why D & E are INCORRECT:** Local, low-impact, easily reversible decisions (like choosing an in-memory sorting algorithm or quick refactoring) represent detailed design.

---

### Question 8: Intentional Architecture vs. Accidental Architecture (සැලසුම් සහගත සහ අහඹු ව්‍යුහය)
Which of the following statements correctly compare **Intentional Architecture** and **Accidental Architecture**?  
*[Select TWO correct answers]*

- [ ] **A.** Intentional architecture arises from deliberate decisions, clear boundary enforcement, and controlled dependencies.
- [ ] **B.** Accidental architecture produces an unmanaged system where dependencies grow like spaghetti and problems appear only when change becomes nearly impossible.
- [ ] **C.** Accidental architecture means the system has literally zero code dependencies and runs faster.
- [ ] **D.** Intentional architecture requires every single micro-level decision to be finalized before writing any code.
- [ ] **E.** Choosing not to plan an architecture guarantees that an accidental architecture will not develop.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Intentional architecture is the result of conscious architectural reasoning and boundary control. Accidental architecture emerges haphazardly from isolated local choices, leading to high maintenance costs and fragility.
* **Why C, D & E are INCORRECT:** Accidental architecture increases chaotic dependencies (C). Intentional architecture allows incremental decisions (D). Ignoring planning is the exact cause of accidental architecture (E).

---

### Question 9: Plan-Driven vs. Agile Approaches to Architecture (සැලසුම් මූලික සහ කඩිසර ප්‍රවේශ)
Both Plan-Driven (e.g., Waterfall) and Agile (e.g., Scrum) approaches can produce **Intentional Architecture**. Which of the following statements accurately contrast their approaches to architectural planning?  
*[Select TWO correct answers]*

- [ ] **A.** The Plan-Driven approach performs the vast majority of major architectural planning up front before implementation begins.
- [ ] **B.** The Agile approach establishes a sound architectural starting foundation and allows further architectural decisions to evolve incrementally through feedback and refactoring.
- [ ] **C.** Agile development completely eliminates the need for software architecture and encourages developers to write code without any structural direction.
- [ ] **D.** Plan-Driven approaches encourage continuous daily restructuring of database schemas throughout the deployment phase.
- [ ] **E.** In an Agile approach, architecturally significant decisions are never made deliberately.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Plan-driven emphasizes upfront architecture (Big Design Up Front - BDUF). Agile establishes "just enough" initial architecture and evolves it iteratively via refactoring and spikes at the "last responsible moment".
* **Why C, D & E are INCORRECT:** Agile does not eliminate architecture (C). Plan-driven resists late structural changes (D). Agile still demands deliberate architectural decisions (E).

---

### Question 10: Translating Business Drivers into Quality Attributes (ව්‍යාපාරික අවශ්‍යතා තාක්ෂණික ගුණාංග බවට පරිවර්තනය)
Software architects act as translators between business leaders and engineering teams. Which of the following correctly pair a **Business Driver** with its corresponding **Technical Quality Attribute**?  
*[Select TWO correct answers]*

- [ ] **A.** Business Concern: *"We anticipate our user base will surge from 10,000 to 2,000,000 in six months"* $\rightarrow$ Technical Quality Attribute: **Scalability & Elasticity (පරිමාණකරණය සහ ප්‍රත්‍යාස්ථතාව)**.
- [ ] **B.** Business Concern: *"Every second of system outage during trading hours costs the bank $100,000 in regulatory fines"* $\rightarrow$ Technical Quality Attribute: **Availability & Fault Tolerance (ලබාගත හැකි බව සහ දෝෂ ඉවසීමේ හැකියාව)**.
- [ ] **C.** Business Concern: *"We must launch ahead of our competitor next month"* $\rightarrow$ Technical Quality Attribute: **Cryptographic Non-Repudiation**.
- [ ] **D.** Business Concern: *"Our startup has very limited financial runway"* $\rightarrow$ Technical Quality Attribute: **Multi-Region Hardware Redundancy**.
- [ ] **E.** Business Concern: *"We must comply with patient privacy laws"* $\rightarrow$ Technical Quality Attribute: **Sub-millisecond Network Throughput**.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Rapid user growth maps directly to Scalability/Elasticity. Extreme financial penalty for downtime maps directly to High Availability/Fault Tolerance.
* **Why C, D & E are INCORRECT:** Early market launch requires Deployability/Modularity (not non-repudiation). Limited budget requires Cost Efficiency/Serverless (not expensive multi-region redundancy). Privacy compliance requires Security/Auditability (not network throughput).

---

### Question 11: The Architecture Business Cycle - Environmental Influences (ගෘහ නිර්මාණ ව්‍යාපාරික චක්‍රයේ පාරිසරික සාධක)
Under the **Architecture Business Cycle (ABC)** formulated by Bass, Clements, and Kazman, which four primary environmental factors influence the creation of a software architecture?  
*[Select FOUR correct answers]*

- [ ] **A.** Stakeholder concerns and expectations (පාර්ශ්වකරුවන්ගේ අවශ්‍යතා).
- [ ] **B.** Developing Organization goals and existing assets (සංවර්ධනය කරන ආයතනයේ අරමුණු).
- [ ] **C.** Technical Environment and industry trends (තාක්ෂණික පරිසරය).
- [ ] **D.** The Architect's personal experience and knowledge (ගෘහ නිර්මාණ ශිල්පියාගේ පළපුරුද්ද).
- [ ] **E.** The astronomical moon cycle and solar flares.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** Bass et al.'s ABC explicitly identifies: (1) Stakeholders, (2) Developing Organization, (3) Technical Environment, and (4) Architect's Experience as the four forces shaping architecture.
* **Why E is INCORRECT:** Solar/astronomical cycles are completely irrelevant to software architecture.

---

### Question 12: The Feedback Loop of the Architecture Business Cycle (ABC හි ප්‍රතිපෝෂණ චක්‍රය)
The Architecture Business Cycle describes a two-way relationship. Once an architecture and its resulting system are built, how do they **influence and reshape the environment in return**?  
*[Select THREE correct answers]*

- [ ] **A.** The system changes stakeholder expectations, giving users a higher benchmark for future releases.
- [ ] **B.** The system produces reusable libraries, organizational assets, and institutional experience for the developing company.
- [ ] **C.** The project enriches the architect's personal experience and technical intuition for subsequent systems.
- [ ] **D.** The system completely removes the need for human software engineers in future projects.
- [ ] **E.** The system invalidates all physical laws of computer networking.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The return loop of the ABC demonstrates that a delivered system educates stakeholders, builds intellectual property/reusable code for the organization, and sharpens the architect's skills.
* **Why D & E are INCORRECT:** Systems do not eliminate engineers or alter laws of physics.

---

### Question 13: Architectural Trade-Off: Security vs. Usability (ආරක්ෂාව සහ භාවිතයේ පහසුව අතර කැපකිරීම)
When an architect mandates multi-factor authentication (MFA), strict 60-second idle session timeouts, and biometric re-verification on every screen, which trade-off is being made?  
*[Select TWO correct answers]*

- [ ] **A.** System security is significantly strengthened against unauthorized intrusion.
- [ ] **B.** User experience and usability decrease because users encounter frequent friction and interruption.
- [ ] **C.** The system automatically runs 500% faster on client mobile devices.
- [ ] **D.** Network latency between client and server drops to zero.
- [ ] **E.** Database storage requirements are reduced by half.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Security vs. Usability is a classic architectural trade-off. Increasing security controls protects data but introduces friction, frustrating users.
* **Why C, D & E are INCORRECT:** Security checks add processing overhead; they never decrease latency or halve storage.

---

### Question 14: Architectural Trade-Off: Consistency vs. Availability (දත්තවල නිවැරදි බව සහ ලබාගත හැකි බව)
In distributed systems, enforcing immediate strict consistency across all replicated database nodes when network partitions occur (CAP Theorem principle) produces which unavoidable consequence?  
*[Select TWO correct answers]*

- [ ] **A.** Every successful read returns the most up-to-date, identical data across all nodes.
- [ ] **B.** Availability drops because transactions must be rejected or delayed if any replica node is temporarily unreachable.
- [ ] **C.** System availability becomes 100% immune to network cable cuts.
- [ ] **D.** The cost of server hardware drops to zero.
- [ ] **E.** The database automatically converts into a flat file without indexes.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Under the CAP theorem, prioritizing Consistency across network partitions forces the system to decline write operations when nodes cannot synchronize, sacrificing Availability.
* **Why C, D & E are INCORRECT:** Network partitions remain real; hardware is not free; and databases do not spontaneously degrade into flat files.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: The "Least-Worst" Architecture Selection (අවම අයහපත් ගෘහ නිර්මාණ ශිල්පය තේරීම)
A software consulting company is designing a nationwide COVID-19 vaccine registration portal. The system will experience extreme traffic surges (10 million concurrent citizens) on launch day, must be built within 6 weeks, and has a fixed budget. 

The junior engineers propose an ultra-flexible, completely generic dynamic workflow engine with 40 distributed microservices. The senior architect rejects this proposal and instead selects a simpler modular design with read-heavy caching and managed auto-scaling cloud queues.

#### Question 15: Evaluation of the Senior Architect's Decision
Why is the Senior Architect's recommendation the **"Least-Worst Architecture" (අවම අයහපත් ගෘහ නිර්මාණ ශිල්පය)** for this context?  
*[Select TWO correct answers]*

- [ ] **A.** An architecture with 40 microservices would fail to launch within 6 weeks due to immense distributed orchestration, testing, and networking complexity.
- [ ] **B.** In software architecture, there is no universally perfect solution; the architect must choose the option whose specific trade-offs (e.g., simpler features for fast delivery) best align with business drivers.
- [ ] **C.** Modular monolithic designs are legally mandated by all government health authorities worldwide.
- [ ] **D.** Caching and managed cloud queues completely eliminate the need for server CPUs.
- [ ] **E.** Microservices are strictly prohibited from being hosted in cloud environments.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Tight deadlines (6 weeks) and fixed budgets conflict with the high setup/operational cost of 40 microservices. The architect correctly identifies the least-worst solution that guarantees meeting the launch deadline while handling load via caching.
* **Why C, D & E are INCORRECT:** Modular monoliths are not legally mandated (C); caching does not eliminate CPU usage (D); and microservices thrive in cloud environments (E).

---

### Scenario 2: Legacy Migration and Accidental Complexity
Company X operates a 15-year-old logistics dispatching system. Over the years, when new features were needed, developers directly modified existing database tables, wrote direct SQL statements inside UI button event handlers, and shared global variables across unrelated modules without documentation. Now, a simple change to the shipping fee calculation causes truck drivers' mobile apps to crash.

#### Question 16: Diagnosis of the System's Architectural State
Which statements accurately characterize the condition of Company X's logistics system?  
*[Select TWO correct answers]*

- [ ] **A.** The system exhibits **Accidental Architecture**, having evolved through uncoordinated, ad-hoc local decisions without overarching structural boundaries.
- [ ] **B.** The system suffers from severe **High Coupling and Low Cohesion**, where unrelated responsibilities are tangled together.
- [ ] **C.** The system exhibits a textbook example of intentional plan-driven architecture.
- [ ] **D.** The system has no architecture whatsoever because the original code was written 15 years ago.
- [ ] **E.** The system's problems can be solved instantly by simply changing the color scheme of the web application.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Ad-hoc local modifications, lack of boundaries, and cross-cutting dependencies describe Accidental Architecture and toxic coupling.
* **Why C, D & E are INCORRECT:** It is not intentional (C); every system has an architecture, even an accidental one (D); and UI color tweaks cannot fix architectural decay (E).

---

### Scenario 3: Context-Driven Architecture Selection
Startup A is building a mobile dating app with 500 initial beta users to test product-market fit on a $15,000 budget.  
Enterprise B is a multinational investment bank processing $40 billion in daily stock trades across New York, London, and Tokyo under strict SEC compliance.

#### Question 17: Architectural Context Comparison
Which architectural assessments are **CORRECT** regarding these two organizations?  
*[Select TWO correct answers]*

- [ ] **A.** An architecture suitable for Enterprise B (e.g., multi-region fault tolerance, HSM cryptographic appliances, formal audit pipelines) would be disastrously expensive and over-engineered for Startup A.
- [ ] **B.** Architectural decisions depend strictly on **Context** (budget, scale, timeline, regulatory constraints, team skills).
- [ ] **C.** Both organizations should implement the exact same architectural blueprint because software design patterns are universally identical.
- [ ] **D.** Startup A should immediately build a multi-region distributed cluster to ensure its 500 beta users experience zero latency.
- [ ] **E.** Enterprise B can safely rely on an undocumented, accidental monolithic script because stock trades do not require security.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Architecture depends entirely on Context. Enterprise B requires high compliance, redundancy, and auditability; Startup A requires speed-to-market, cost efficiency, and agility.
* **Why C, D & E are INCORRECT:** Universal copy-paste architecture is an anti-pattern (C); multi-region clusters for 500 users is wasteful (D); and banks cannot neglect security (E).

---

### Scenario 4: Fast Delivery vs. Technical Debt
To demonstrate a working prototype to venture capital investors before a funding deadline on Friday, an engineering team hardcodes database connection strings, bypasses authentication tokens, and writes a massive 4,000-line monolithic function that mixes database queries with HTML rendering.

#### Question 18: Evaluating the Trade-Off Made
What architectural trade-off did the team make, and what are its long-term consequences?  
*[Select TWO correct answers]*

- [ ] **A.** The team prioritized **Fast Delivery (කාලෝචිත නිමාව)** at the expense of incurring significant **Technical Debt (තාක්ෂණික ණය)**.
- [ ] **B.** If the team receives funding and continues building on this brittle codebase without refactoring, future modifications will become exponentially slower and more bug-prone.
- [ ] **C.** The team successfully proved that modularity and software architecture are completely unnecessary in commercial software.
- [ ] **D.** The 4,000-line monolithic function will automatically organize itself into microservices once deployed.
- [ ] **E.** Hardcoding database credentials improves overall cyber security because attackers cannot guess the hardcoded values.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Sacrificing code structure for immediate deadlines accumulates Technical Debt. Left unaddressed, technical debt cripples future velocity and reliability.
* **Why C, D & E are INCORRECT:** Monolithic spaghetti code does not magically convert to microservices, and hardcoded credentials represent a severe security vulnerability.

---

### Scenario 5: Modular Boundaries and Dependency Control
An architect discovers that the `Billing` module directly accesses internal SQL tables belonging to the `Inventory` module. The architect refactors the system so that `Billing` must invoke a well-defined public interface (`IInventoryService`) exposed by the `Inventory` module, hiding the underlying database schema.

#### Question 19: Architectural Principle Applied
Which core architectural principles were implemented by this refactoring?  
*[Select TWO correct answers]*

- [ ] **A.** **Establishing Boundaries & Encapsulation (සීමා මායිම් සහ කරලිකරණය):** Internal database details of `Inventory` are protected from unauthorized external manipulation.
- [ ] **B.** **Controlling Dependencies (පරායත්තතා පාලනය කිරීම):** Coupling between modules is redirected to an explicit abstraction rather than shared raw database state.
- [ ] **C.** The refactoring transformed the application into a distributed cloud serverless architecture.
- [ ] **D.** The refactoring eliminated the need for `Billing` to ever know item prices.
- [ ] **E.** The refactoring prevents the database from storing data on a hard disk.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Hiding the internal schema establishes component boundaries (encapsulation) and reduces coupling by enforcing communication through a stable contract (`IInventoryService`).
* **Why C, D & E are INCORRECT:** Interface abstraction within a codebase does not make it cloud-serverless, nor does it eliminate prices or disk storage.

---

### Scenario 6: Architectural Quanta in Monoliths
A software system consists of an admin web portal, customer mobile app backend, and notification engine, all compiled into a single executable binary that connects to a single shared PostgreSQL database.

#### Question 20: Characterizing the Architectural Quantum
Which statement accurately describes the **Architectural Quantum** of this system?  
*[Select TWO correct answers]*

- [ ] **A.** The system has **exactly one Architectural Quantum** because all components share a single deployment boundary and a single database runtime.
- [ ] **B.** A failure or security breach in the database affects all three functional areas because they share a unified quantum.
- [ ] **C.** The system has three distinct architectural quanta because there are three user-facing functional capabilities.
- [ ] **D.** Every database table in PostgreSQL forms its own independent architectural quantum.
- [ ] **E.** The system has zero architectural quanta because quanta only exist in microservices.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** An architectural quantum is an independently deployable component with high functional cohesion, unified connascence, and unified quality attributes. A monolith with a shared database forms exactly one quantum; issues in the shared runtime impact all parts.
* **Why C, D & E are INCORRECT:** Functional capabilities are not independent quanta if they cannot be deployed or scaled separately from the shared database.
