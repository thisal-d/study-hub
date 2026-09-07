# SE3100: Architecture Based Development
# Practice Exam Paper 06 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 06)
## Focus: Lecture 04 — Monolithic Architectural Styles (Layered & Modular Monolith)

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Architectural Style vs. Architectural Pattern (ගෘහ නිර්මාණ විලාසය සහ රටාව)
What is the core distinction between an **Architectural Style (ගෘහ නිර්මාණ විලාසය)** and an **Architectural Pattern (ගෘහ නිර්මාණ රටාව)**?  
*[Select TWO correct answers]*

- [ ] **A.** An **Architectural Style** defines the overarching, macro-level structural topology and organizational shape of the entire software system (e.g., Layered, Microservices).
- [ ] **B.** An **Architectural Pattern** provides a localized, reusable solution to a specific design or implementation problem within an architecture.
- [ ] **C.** An architectural style only applies to hardware computer chips, while a pattern applies to CSS styling.
- [ ] **D.** An architectural pattern can never be used inside an architectural style.
- [ ] **E.** Architectural styles and patterns are identical terms with zero conceptual difference.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** An Architectural Style defines the macro-structural blueprint and topology of the application. An Architectural Pattern is a specific structural mechanism addressing a localized engineering challenge within that style.
* **Why C, D & E are INCORRECT:** Styles/patterns are software concepts (not hardware/CSS); patterns live inside styles; and they have distinct hierarchical scopes.

---

### Question 2: The Core Concept of Layered Architecture (ස්ථරගත ගෘහ නිර්මාණ ශිල්පය)
Which statements accurately describe the standard **Layered Architecture Style (N-Tier Architecture)**?  
*[Select TWO correct answers]*

- [ ] **A.** Components are organized into horizontal, technically partitioned layers, where each layer performs a specialized technical role (e.g., Presentation, Business, Persistence).
- [ ] **B.** Requests traditionally flow downwards in a strict top-to-bottom hierarchy: Presentation calls Business, Business calls Persistence, Persistence calls Database.
- [ ] **C.** The database layer is permitted to make direct upstream function calls to user interface screens.
- [ ] **D.** Layered architecture requires at least 50 distinct distributed cloud servers to operate.
- [ ] **E.** Layered architecture is categorized strictly as a distributed event-driven style.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Layered architecture is a technically partitioned monolithic style organized into horizontal layers with a top-to-bottom invocation hierarchy.
* **Why C, D & E are INCORRECT:** Upstream calls from database to UI violate layering; layered systems easily run on a single server (monolith); and it is not an event-driven distributed style.

---

### Question 3: The Four Standard Layers (සම්මත ස්ථර 4)
What are the **Four Standard Layers** typically found in an enterprise Layered Architecture?  
*[Select FOUR correct answers]*

- [ ] **A.** **Presentation Layer (ඉදිරිපත් කිරීමේ ස්ථරය):** Handles UI interactions, web controllers, and HTTP request/response serialization.
- [ ] **B.** **Business Layer (ව්‍යාපාරික තර්කණ ස්ථරය):** Enforces business rules, calculations, workflows, and domain validations.
- [ ] **C.** **Persistence Layer (දත්ත පැවතුම් ස්ථරය):** Manages data access, ORM mappings, and database queries (DAOs / Repositories).
- [ ] **D.** **Database Layer (දත්ත සමුදා ස්ථරය):** The persistent relational database or physical storage engine.
- [ ] **E.** **Office Desk Furniture Layer:** The wooden desks and chairs used by software engineers.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** Presentation, Business, Persistence, and Database form the canonical 4-tier layered architecture stack.
* **Why E is INCORRECT:** Office furniture is physical office equipment, not a software architectural layer.

---

### Question 4: Closed Layers vs. Open Layers (සංවෘත ස්ථර සහ විවෘත ස්ථර)
In Layered Architecture, what is the meaning of a **Closed Layer (සංවෘත ස්ථරය)** vs. an **Open Layer (විවෘත ස්ථරය)**?  
*[Select TWO correct answers]*

- [ ] **A.** A **Closed Layer** cannot be bypassed; a request entering from the layer above must stop and be processed by this layer before moving downwards.
- [ ] **B.** An **Open Layer** can be bypassed; a request from the layer above is permitted to skip this layer and directly call the layer underneath it.
- [ ] **C.** A closed layer means that the source code file is password-protected and encrypted on disk.
- [ ] **D.** An open layer means that any computer hacker on the internet can read the code.
- [ ] **E.** All layers in every software application are automatically open by default.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Closed layers enforce strict step-by-step traversal, preserving isolation. Open layers allow passthrough calls to skip the layer, reducing call overhead for simple requests.
* **Why C, D & E are INCORRECT:** Closed/open layers refer to call-path traversal rules, not file passwords, hacker access, or default configurations.

---

### Question 5: What is a Modular Monolith? (මොඩියුලර් ඒකශිලා ව්‍යුහය යනු කුමක්ද?)
Which statements accurately describe a **Modular Monolith Architecture**?  
*[Select TWO correct answers]*

- [ ] **A.** An architecture deployed as a **single deployment unit (monolith)**, but structured internally around **Domain Partitioning** with strict, encapsulated boundaries.
- [ ] **B.** A style that combines the operational simplicity and ACID transaction benefits of a monolith with the clean domain separation of microservices.
- [ ] **C.** A system composed of 500 remote microservices connected by public internet cables.
- [ ] **D.** An unorganized, messy legacy codebase with zero boundaries, commonly called a "Big Ball of Mud".
- [ ] **E.** An architecture that is legally prohibited from storing data in relational databases.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A Modular Monolith uses domain partitioning (e.g., `Order`, `Inventory`, `Billing`) with enforced internal boundaries while remaining a single deployment artifact with single-database simplicity.
* **Why C, D & E are INCORRECT:** It is a single deployment unit (not 500 microservices); it has strict boundaries (unlike a Big Ball of Mud); and it uses relational databases effectively.

---

### Question 6: The Architecture Sinkhole Anti-Pattern Definition
What is the **Architecture Sinkhole Anti-pattern (ගෘහ නිර්මාණ ආගාධ විරෝධී රටාව)** in Layered Architecture?  
*[Select TWO correct answers]*

- [ ] **A.** A situation where requests pass through multiple layers of the system with little or no business logic performed at each layer (pure passthrough processing).
- [ ] **B.** An anti-pattern that creates unnecessary latency, object allocations, and overhead because layers merely delegate calls downwards without adding value.
- [ ] **C.** A physical sinkhole that swallows the server building into the earth.
- [ ] **D.** A computer monitor displaying a black screen due to a burnt-out backlight.
- [ ] **E.** An automated method for accelerating database writes by 1,000 times.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Architecture Sinkhole Anti-pattern describes passthrough requests (e.g., UI $\rightarrow$ Business $\rightarrow$ Persistence $\rightarrow$ DB where Business does literally nothing except pass the DTO). It wastes CPU cycles and creates needless boilerplate code.
* **Why C, D & E are INCORRECT:** Geological sinkholes, monitor backlights, and database write accelerators are completely unrelated.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: The Principle of "Layers of Isolation" (හුදකලා කිරීමේ ස්ථර මූලධර්මය)
What does the concept of **"Layers of Isolation" (හුදකලා කිරීමේ ස්ථර)** provide in a closed-layer architecture?  
*[Select TWO correct answers]*

- [ ] **A.** A change made to one layer does not affect or ripple into other non-adjacent layers, because each layer knows only about the layer immediately beneath it.
- [ ] **B.** The Presentation Layer remains completely decoupled from the underlying database engine; upgrading from Oracle to PostgreSQL requires modifications only in the Persistence Layer.
- [ ] **C.** Layers of isolation allow the Presentation Layer to directly invoke private SQL stored procedures without the Business Layer knowing.
- [ ] **D.** It ensures that all software bugs are automatically resolved by the compiler.
- [ ] **E.** It forces all software developers to work in soundproof isolation booths.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Closed layers create boundaries of isolation. A change in the database only impacts the Persistence layer, shielding the Presentation layer from ripple effects.
* **Why C, D & E are INCORRECT:** Bypassing the business layer violates isolation; compilers cannot fix architectural bugs; and isolation booths are unrelated to code.

---

### Question 8: Remediation of the Architecture Sinkhole Anti-Pattern
When an architect notices that 80% of application requests are pure passthroughs exhibiting the **Architecture Sinkhole Anti-pattern**, how should the architecture be adjusted?  
*[Select TWO correct answers]*

- [ ] **A.** Designate intermediate layers (such as an optional Services or Workflow layer) as **Open Layers**, allowing simple read queries to bypass them and call Persistence directly.
- [ ] **B.** Evaluate whether the application is too simple for an N-tier layered architecture, considering a simpler two-tier or Active Record approach.
- [ ] **C.** Add 10 additional intermediate layers to ensure the sinkhole becomes 100% of all requests.
- [ ] **D.** Forbid the application from executing any database read queries forever.
- [ ] **E.** Delete the entire database and write all data on paper index cards.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Opening optional intermediate layers allows passthrough requests to skip redundant hops. If the entire app has little business logic, a simpler 2-tier pattern avoids over-engineering.
* **Why C, D & E are INCORRECT:** Adding more layers worsens the sinkhole; banning reads is ridiculous; and paper cards are absurd.

---

### Question 9: Comparing Layered Architecture vs. Modular Monolith (ස්ථරගත සහ මොඩියුලර් ඒකශිලා සංසන්දනය)
How do **Layered Architecture** and **Modular Monolith** differ regarding their partitioning strategy?  
*[Select TWO correct answers]*

- [ ] **A.** Layered Architecture uses **Technical Partitioning** at the top level, grouping components by technical role (UI, Business, Data).
- [ ] **B.** Modular Monolith uses **Domain Partitioning** at the top level, grouping components by business bounded contexts (`Order`, `Billing`, `Inventory`).
- [ ] **C.** A Modular Monolith can contain internal technical layers *inside* each of its individual domain modules.
- [ ] **D.** Layered Architecture cannot be run on a single server, whereas a Modular Monolith can.
- [ ] **E.** A Modular Monolith requires all internal communication between modules to execute over slow HTTP network protocols.

**ANSWER:** A, B (Note: C is also a true architectural characteristic, but A & B directly highlight the fundamental partitioning difference!)

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Layered is horizontally/technically partitioned at the root level. Modular Monolith is vertically/domain partitioned at the root level. (C is also true: domain modules can encapsulate internal presentation/data layers).
* **Why D & E are INCORRECT:** Both run on single servers (both are monoliths); and Modular Monoliths communicate via fast in-memory function calls, not slow HTTP calls.

---

### Question 10: Database Strategies in a Modular Monolith (දත්ත සමුදා උපායමාර්ග)
What are the common database strategies utilized in a Modular Monolith, and what are their trade-offs?  
*[Select TWO correct answers]*

- [ ] **A.** **Shared Database with Logical Separation (හවුල් දත්ත සමුදාය):** All modules connect to one database, but each module owns dedicated tables/schemas; cross-module joins are strictly forbidden in code.
- [ ] **B.** **Database-per-Module (මොඩියුලයකට වෙනම දත්ත සමුදායක්):** Each module has its own physical database schema, providing extreme data decoupling but making cross-domain reporting and transactions more complex.
- [ ] **C.** Forcing all modules to write their data into a single unindexed text file on a floppy disk.
- [ ] **D.** A Modular Monolith is prohibited from having any database whatsoever.
- [ ] **E.** All database tables must be shared globally with zero access restrictions.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Modular monoliths either use a single database with strict schema ownership per module (simpler transactions, enforced code boundaries) or separate schemas/databases (maximum decoupling, prepares for microservices).
* **Why C, D & E are INCORRECT:** Floppy disks are obsolete; databases are essential; and unrestrained shared tables destroy modular boundaries.

---

### Question 11: Enforcing Module Boundaries in a Modular Monolith (මොඩියුල සීමා බලාත්මක කිරීම)
In a Modular Monolith, developers often face the temptation to bypass boundaries (e.g., `OrderModule` directly instantiating internal helper classes of `BillingModule`). How can architects **enforce** boundaries?  
*[Select THREE correct answers]*

- [ ] **A.** Using modern language packaging tools (e.g., Java Platform Module System - JPMS, C# internal access modifiers, Go package boundaries).
- [ ] **B.** Using architectural fitness functions and static analysis linters (e.g., ArchUnit, SonarQube) that fail the build if unauthorized cross-module imports are detected.
- [ ] **C.** Defining public API/interface packages (e.g., `billing-api`) while keeping implementation packages (e.g., `billing-internal`) inaccessible to other modules.
- [ ] **D.** Physically removing the developers' computer monitors when they write code.
- [ ] **E.** Making all classes in the entire application `public` with no packages.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Architectural fitness functions (ArchUnit), module systems (JPMS/internal modifiers), and separating public API contracts from internal implementations cleanly enforce boundaries.
* **Why D & E are INCORRECT:** Removing monitors is abusive nonsense, and making all classes public destroys encapsulation.

---

### Question 12: Monolithic Architectural Styles Rating Matrix (ගුණාත්මක ශ්‍රේණිගත කිරීම්)
According to Richards & Ford's architectural characteristics rating matrix, what are the inherent architectural **strengths and weaknesses** of a standard **Layered Architecture**?  
*[Select TWO correct answers]*

- [ ] **A.** **Strengths:** Low cost, low overall complexity, high ease of initial development, and high testability of isolated layers.
- [ ] **B.** **Weaknesses:** Low agility/modifiability, low deployability (must redeploy the entire monolith for minor changes), and lower performance (layer traversal overhead).
- [ ] **C.** **Strengths:** Infinite horizontal scalability and zero deployment downtime.
- [ ] **D.** **Weaknesses:** Extremely high financial cost to set up in local development environments.
- [ ] **E.** Layered architecture has 5-star ratings across all architectural characteristics.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Layered architecture is cost-effective, familiar, and easy to build initially. However, its monolithic nature results in low deployability (all-or-nothing releases) and rigidity when requirements shift.
* **Why C, D & E are INCORRECT:** Monoliths struggle with infinite scaling; setup cost is low (not high); and no architecture has 5 stars everywhere (law of trade-offs).

---

### Question 13: The Modular Monolith as a Stepping Stone to Microservices
Why is a **Modular Monolith** widely recommended by leading architects (e.g., Martin Fowler) as an ideal precursor before migrating to distributed Microservices?  
*[Select TWO correct answers]*

- [ ] **A.** It allows teams to discover, test, and stabilize proper business domain boundaries in-memory without prematurely suffering the distributed network latency, deployment overhead, and data consistency headaches of microservices.
- [ ] **B.** Once domain boundaries are mature and clean, individual modules can easily be extracted into independent physical microservices with minimal friction.
- [ ] **C.** A Modular Monolith legally compels cloud providers to host the software free of charge.
- [ ] **D.** It proves that microservices are mathematically impossible to build.
- [ ] **E.** It forces all developers to leave the company before microservices can start.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Getting domain boundaries wrong in microservices leads to a "Distributed Monolith" (the worst possible architecture). A Modular Monolith validates boundaries in-memory; once boundaries are solid, extracting a module to a microservice is straightforward.
* **Why C, D & E are INCORRECT:** Cloud providers charge fees; microservices are possible; and developers remain employed.

---

### Question 14: Accidental Coupling in Layered Architectures
A common anti-pattern in Layered Architecture occurs when database entity classes (e.g., Hibernate `@Entity` classes) are passed directly through the Business layer into the Presentation layer and serialized directly into JSON sent to client web browsers.  
What architectural flaw does this represent?  
*[Select TWO correct answers]*

- [ ] **A.** It violates **Layers of Isolation**: The Presentation layer becomes tightly coupled to the database schema, exposing private database column structures directly to external clients.
- [ ] **B.** A change in a database table column can unintentionally break mobile app clients, and sensitive internal fields (e.g., password hashes) risk being leaked.
- [ ] **C.** It exhibits the highest standard of clean software architecture.
- [ ] **D.** It speeds up client web browsers by 5,000%.
- [ ] **E.** It proves that Data Transfer Objects (DTOs) should never be used.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Leaking database entities to the UI destroys layer isolation. Altering a table alters the UI API contract, and sensitive fields can be exposed. Using isolated Data Transfer Objects (DTOs) between layers prevents this.
* **Why C, D & E are INCORRECT:** It is a recognized anti-pattern, does not speed up browsers, and proves the urgent necessity of DTOs.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Resolving a 4-Tier Architecture Sinkhole
An online banking portal has 4 closed layers:  
*Presentation $\rightarrow$ Business $\rightarrow$ Persistence $\rightarrow$ Database*.  
The bank adds a feature allowing users to view their account balance. The request passes through the Presentation layer, through the Business layer (which does nothing except call `accountDao.getBalance()`), through the Persistence layer, to the Database.  
90% of user traffic consists of balance inquiries, and server CPU is heavily saturated with boilerplate call frames and object allocations.

#### Question 15: Remediating the Architecture Sinkhole
How should the architect resolve this issue while maintaining clean architecture principles?  
*[Select TWO correct answers]*

- [ ] **A.** Designate the intermediate business/services layer as an **Open Layer (විවෘත ස්ථරය)** for read-only queries, allowing the Presentation controller to call the Persistence balance lookup directly without passthrough boilerplate.
- [ ] **B.** Introduce an in-memory caching layer (e.g., Redis) to serve balance queries directly from memory for short intervals.
- [ ] **C.** Delete the entire banking database and force users to remember their balances in their heads.
- [ ] **D.** Add three more closed layers to make the sinkhole even deeper.
- [ ] **E.** Rewrite the banking website in raw assembly language and remove all layers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Making the layer open allows passthrough reads to skip the business layer cleanly. Adding a read cache (Redis) offloads repetitive read requests and alleviates CPU saturation.
* **Why C, D & E are INCORRECT:** Deleting databases is absurd; adding more layers worsens the sinkhole; and raw assembly is unmaintainable.

---

### Scenario 2: Legacy Layered Monolith Refactoring to Modular Monolith
An insurance enterprise has a monolithic codebase where 40 developers work on a single layered architecture (`ui/`, `services/`, `dao/`). When the automobile insurance team fixes a car accident claim bug in `services/`, they accidentally break the life insurance payout calculation because both share common helper classes. Deployments require a 48-hour freeze and 3 weeks of regression testing.

#### Question 16: Evaluating the Transition to a Modular Monolith
How does refactoring this application into a **Modular Monolith** address these issues?  
*[Select TWO correct answers]*

- [ ] **A.** It organizes the codebase into isolated, domain-bounded packages (e.g., `auto-insurance/`, `life-insurance/`, `health-insurance/`), ensuring that changes in automobile insurance cannot inadvertently alter life insurance code.
- [ ] **B.** Independent feature squads can own their respective domain modules, drastically reducing team coordination bottlenecks and regression blast radius.
- [ ] **C.** It requires the company to immediately replace all server computers with quantum computers.
- [ ] **D.** It guarantees that insurance claims will never be filed by customers again.
- [ ] **E.** It forces all insurance policies to be rewritten in Spanish.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Modular monoliths encapsulate domain boundaries. Auto insurance code is isolated from life insurance code, shrinking the blast radius of bugs and allowing domain squads to work with autonomy.
* **Why C, D & E are INCORRECT:** Quantum computers, eliminating insurance claims, and language translations are completely irrelevant.

---

### Scenario 3: Bounded Context Leakage in a Monolith
In an e-commerce monolith, a developer in the `OrderProcessing` module writes a SQL query that joins the `orders` table directly with the private `inventory_suppliers` table belonging to the `WarehouseSupply` module, bypassing the `WarehouseSupply` domain API.

#### Question 17: Architectural Assessment of Boundary Leakage
What architectural damage has occurred, and how should it be prevented?  
*[Select TWO correct answers]*

- [ ] **A.** **Data Coupling / Boundary Violation:** Direct cross-domain table joins break encapsulation, making it impossible to ever modify or migrate `WarehouseSupply` without breaking `OrderProcessing`.
- [ ] **B.** The architect should enforce separate database schemas per module or use static fitness functions (e.g., ArchUnit) to prohibit cross-module SQL joins.
- [ ] **C.** Direct database joins are the cleanest and most modular design pattern in enterprise architecture.
- [ ] **D.** The join automatically converts the application into an Event-Driven Architecture.
- [ ] **E.** The join guarantees 100% data encryption across all network cables.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Cross-domain database joins violate bounded contexts and couple modules at the data layer. Enforcing schema boundaries or automated fitness rules prevents boundary erosion.
* **Why C, D & E are INCORRECT:** Cross-domain joins destroy modularity; they do not create event-driven systems; and they have nothing to do with encryption.

---

### Scenario 4: Fast Release Requirements in Layered Architecture
A media startup runs a standard Layered Monolith. The marketing department wants to run rapid A/B experiments on the user registration screen, updating UI text and button colors three times a day. However, because the system is a single layered monolith, every UI change requires re-building, testing, and deploying the entire backend and database persistence stack, causing severe deployment bottlenecks.

#### Question 18: Identifying the Architectural Bottleneck
What architectural characteristic is weak in this Layered Monolith, and what structural separation would help?  
*[Select TWO correct answers]*

- [ ] **A.** **Deployability & Release Agility** are severely restricted because the presentation tier is coupled into the same deployment artifact as the core backend.
- [ ] **B.** Decoupling the frontend into an independent Single Page Application (SPA / mobile app) that communicates via REST APIs with the backend decouples deployment cycles, allowing the frontend to ship multiple times daily.
- [ ] **C.** Layered monoliths natively support deploying individual buttons without compiling any code.
- [ ] **D.** The marketing department should be prohibited from ever changing website text.
- [ ] **E.** The backend database should be deleted to allow buttons to change colors faster.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In a traditional monolithic layered web app, everything is packaged in a single WAR/binary, yielding low Deployability. Decoupling the UI into an independent frontend (SPA) communicating via APIs enables rapid, independent UI releases.
* **Why C, D & E are INCORRECT:** Monoliths cannot deploy individual buttons without compilation; banning marketing changes harms business; and deleting the database is destructive.

---

### Scenario 5: Modular Monolith vs. Microservices Cost-Benefit for a Startup
A startup with 4 software engineers and $50,000 in seed capital is building an online education platform. An external advisor insists that they must build a 25-microservice architecture using Kubernetes on Google Cloud.  
The lead engineer argues that they should build a **Modular Monolith** instead.

#### Question 19: Defending the Lead Engineer's Position
Why is the Lead Engineer's recommendation of a **Modular Monolith** far superior for this startup?  
*[Select TWO correct answers]*

- [ ] **A.** A team of 4 engineers would spend 80% of their time managing Kubernetes clusters, network routing, distributed tracing, and service discovery rather than building business features.
- [ ] **B.** A Modular Monolith gives the team clean domain boundaries and speed-to-market with minimal hosting costs, while preserving a frictionless path to extract microservices later if the business scales.
- [ ] **C.** Microservices are completely illegal for education platforms.
- [ ] **D.** A Modular Monolith eliminates the need for software engineers to write any program code.
- [ ] **E.** Google Cloud does not support running microservices.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Small teams drown under the operational overhead of microservices. A Modular Monolith provides clean domain structure, rapid development, low hosting costs, and an easy extraction path if growth warrants it.
* **Why C, D & E are INCORRECT:** Microservices are legal; code must be written; and Google Cloud fully supports microservices.

---

### Scenario 6: Broken Layers of Isolation via Upstream Database Calls
A developer writing a database trigger in the Database Layer writes a stored procedure that uses an HTTP extension to send a webhook directly to the frontend web browser, notifying the user that their profile was updated.

#### Question 20: Evaluating the Architectural Violation
Which foundational rule of Layered Architecture was violated, and what are the consequences?  
*[Select TWO correct answers]*

- [ ] **A.** It violates the strict **Top-to-Bottom Call Hierarchy**: lower layers (Database) are strictly forbidden from knowing about or directly calling upper layers (Presentation).
- [ ] **B.** The database tier becomes tightly coupled to external network communication and web UI protocols, creating severe security, testability, and database deadlock risks.
- [ ] **C.** This is a recognized best-practice pattern that all enterprise databases should use for all queries.
- [ ] **D.** It proves that databases no longer need SQL to operate.
- [ ] **E.** It speeds up database backups by 1,000%.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Layered architecture enforces unidirectional flow (top-to-bottom). Database triggers making outbound HTTP calls violate layer hierarchy, couple the database to UI protocols, and risk database connection pool exhaustion.
* **Why C, D & E are INCORRECT:** It is an extreme anti-pattern, does not remove SQL, and does not speed up backups.
