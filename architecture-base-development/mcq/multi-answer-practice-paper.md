# SE3100: Architecture Based Development
# Multi-Answer Practice Exam Paper (බහුවරණ පුහුණු ප්‍රශ්න පත්‍රය)

> **Exam Format Notice:**  
> In this examination, questions will follow the format of the official sample paper, but will require **Multiple Correct Answers** (Multi-Select).  
> Read each question carefully, note the required number of answers (e.g., *[Select TWO]* or *[Select THREE]*), and evaluate each option independently.

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Dimensions of Software Architecture (මෘදුකාංග ගෘහ නිර්මාණ මානයන්)
According to Mark Richards and Neal Ford, software architecture is defined across four fundamental dimensions. Which of the following statements are **TRUE** regarding these dimensions?  
*[Select TWO correct answers]*

- [ ] **A.** An Architectural Style on its own represents the complete architecture of a software system.
- [ ] **B.** Quality Attributes (Architectural Characteristics) define what the system must be capable of supporting and represent conditions for success.
- [ ] **C.** Architectural Decisions establish mandatory rules and constraints that guide the construction and communication of system components.
- [ ] **D.** Logical Components must always map directly in a 1-to-1 manner to physical cloud server containers.
- [ ] **E.** Architectural styles apply solely to distributed architectures and have no relevance to monolithic software.

---

### Question 2: Coupling Metrics & Instability (පරායත්තතා මිනුම් සහ අස්ථාවරත්වය)
An architect calculates code metrics for a package within a Java application. The package has **8 incoming connections ($C_a = 8$)** from other packages and **2 outgoing dependencies ($C_e = 2$)** to external utilities. Which of the following statements are **CORRECT**?  
*[Select TWO correct answers]*

- [ ] **A.** The package possesses high Afferent Coupling ($C_a = 8$), meaning many other components depend on it.
- [ ] **B.** The Instability Index ($I = \frac{C_e}{C_a + C_e}$) of this package is **0.20**, classifying it as a **highly stable (ස්ථාවර)** package that is resilient to external ripple effects.
- [ ] **C.** The Instability Index ($I$) of this package is **0.80**, indicating that it is highly fragile and will break easily when other packages change.
- [ ] **D.** The package has high Efferent Coupling ($C_e = 8$), indicating it is heavily burdened by external system calls.
- [ ] **E.** A package with an Instability score close to 0 is an anti-pattern and should always be refactored to have higher outgoing dependencies.

---

### Question 3: Fallacies of Distributed Computing (බෙදාහැර ඇති පද්ධති පිළිබඳ මිථ්‍යාවන්)
L. Peter Deutsch formulated the famous "Fallacies of Distributed Computing"—false assumptions that software engineers commonly make when moving from monoliths to distributed architectures. Which of the following are recognized **Fallacies of Distributed Computing**?  
*[Select THREE correct answers]*

- [ ] **A.** The network is completely reliable (ජාලය කිසිදා බිඳ නොවැටේ).
- [ ] **B.** Latency is zero (ජාල ප්‍රමාදය ශුන්‍ය වේ).
- [ ] **C.** Bandwidth is infinite (දත්ත හුවමාරු කලාප පළල අසීමිත වේ).
- [ ] **D.** Distributed transactions are completely free of concurrency bottlenecks.
- [ ] **E.** Microservices automatically eliminate all application runtime bugs.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 4: Technical Partitioning vs. Domain Partitioning (තාක්ෂණික සහ ක්ෂේත්‍ර පාදක බෙදීම්)
A software organization decides to refactor a large legacy enterprise system from a **Technically Partitioned (Layered) Monolith** to a **Domain Partitioned (Modular Monolith)** architecture. Which of the following are legitimate architectural consequences of this transition?  
*[Select TWO correct answers]*

- [ ] **A.** Business workflow modifications that previously required changing Presentation, Business, and Persistence layers can now often be completed within a single domain module.
- [ ] **B.** Technical layers (such as database persistence and web controllers) are completely forbidden from existing within individual domain modules.
- [ ] **C.** Cross-functional engineering teams can now take full ownership of cohesive business domains (e.g., `Billing`, `Shipping`) rather than working in isolated technical silos (e.g., DBA team, UI team).
- [ ] **D.** Database response times will immediately improve by 50% purely as a result of changing the folder structure.
- [ ] **E.** The refactored system automatically splits into independent physical microservices running in separate cloud instances.

---

### Question 5: Event-Driven Architecture — Broker vs. Mediator Topologies (සිදුවීම් පාදක ගෘහ නිර්මාණ ශිල්පය)
Event-Driven Architecture (EDA) is commonly implemented using either the **Broker (Choreography) Topology** or the **Mediator (Orchestration) Topology**. Which statements accurately compare these two topologies?  
*[Select TWO correct answers]*

- [ ] **A.** In a Broker topology, a central coordinator actively directs, sequences, and manages the execution flow of all event processors.
- [ ] **B.** In a Mediator topology, a central workflow coordinator directs processing steps, making complex, multi-step business transactions easier to monitor and orchestrate.
- [ ] **C.** The Broker topology offers higher responsiveness, greater throughput, and loose coupling because event processors operate independently without a central bottleneck.
- [ ] **D.** Error handling and distributed transaction compensations (rollbacks) are substantially simpler to manage in a Broker topology than in a Mediator topology.
- [ ] **E.** A Mediator topology completely removes the need for messaging queues or event channels between services.

---

### Question 6: Layered Architecture — Open vs. Closed Layers (ස්ථරගත ගෘහ නිර්මාණ ශිල්පයේ විවෘත සහ සංවෘත ස්ථර)
In a standard Layered Architecture with four layers (*Presentation Layer $\rightarrow$ Business Layer $\rightarrow$ Services Layer $\rightarrow$ Persistence Layer*), the development team designates the **Services Layer** as an **Open Layer (විවෘත ස්ථරය)**. Which of the following are direct architectural implications of this choice?  
*[Select TWO correct answers]*

- [ ] **A.** The Business Layer is now permitted to bypass the Services Layer and directly invoke components in the Persistence Layer.
- [ ] **B.** The concept of "Layers of Isolation" is completely eliminated across the entire software application.
- [ ] **C.** It helps avoid the **Architecture Sinkhole Anti-pattern** for simple passthrough operations where requests require no additional services-layer logic.
- [ ] **D.** The Persistence Layer is now allowed to make direct upstream function calls to the Presentation Layer.
- [ ] **E.** All layers underneath an open layer automatically lose their closed boundaries and become open by inheritance.

---

### Question 7: Architectural Quanta and System Scope (ගෘහ නිර්මාණ ක්වොන්ටාව)
Mark Richards and Neal Ford define an **Architectural Quantum** as an independently deployable component with high functional cohesion and synchronous connascence. Which of the following statements about Architectural Quanta are **TRUE**?  
*[Select TWO correct answers]*

- [ ] **A.** A monolithic application with a single shared database and single deployment artifact represents **exactly one Architectural Quantum**.
- [ ] **B.** If two microservices share a single relational database and require synchronous two-phase commits to update common tables, they functionally form a **single Architectural Quantum**.
- [ ] **C.** Every individual class or function in an object-oriented application forms its own separate Architectural Quantum.
- [ ] **D.** Distributing an application into microservices automatically increases the number of architectural quanta without any regard to database dependencies.
- [ ] **E.** An Architectural Quantum can never possess its own distinct Quality Attributes (e.g., different scalability or security levels).

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario A: FinTech Payment Gateway & Heavy Background Processing
An online payments startup has a core transactional system deployed as a single application. During holiday sales, thousands of users make rapid payments. However, the system crashes because the CPU-intensive generation of cryptographic PDF tax invoices runs in the same execution thread as checkout processing, consuming all available system memory.

A junior architect suggests: *"Let us immediately dismantle the entire payments system and rewrite it into 30 independent microservices."*

#### Question 8: Architectural Evaluation of the Proposal
As the Lead Architect, which of the following evaluations and counter-recommendations are **MOST APPROPRIATE**?  
*[Select TWO correct answers]*

- [ ] **A.** Reject the full 30-microservice rewrite, because introducing distributed network latency, eventual consistency, and cluster orchestration for an early-stage product introduces massive unnecessary complexity.
- [ ] **B.** Decompose only the bottleneck: extract the PDF invoice generation into an asynchronous worker service (or separate architectural quantum) fed by an event queue, while keeping the stable transactional payment core modular.
- [ ] **C.** Accept the 30-microservice rewrite immediately, because any system that experiences CPU exhaustion is prohibited from remaining monolithic under modern software engineering standards.
- [ ] **D.** Retain the single thread execution and simply double the physical RAM of the server without changing the software architecture.
- [ ] **E.** Implement synchronous REST calls between the payment checkout thread and the PDF generator to ensure the user's browser stays on hold until the PDF file is written to disk.

---

### Scenario B: Monolithic Plug-in vs. Distributed Services
A commercial enterprise tax-calculation product has a stable, invariant core accounting engine. However, every corporate client has custom tax rules that change yearly based on regional tax laws. There is no requirement for these customer-specific tax rules to scale independently of the main desktop/server application.

A vendor proposes implementing each custom client tax rule as an independently hosted, remote REST microservice over the public internet.

#### Question 9: Architectural Trade-Off Analysis
If the development team implements these customer-specific tax rules as **separately deployed remote microservices** instead of **local in-process Plug-ins (Microkernel Architecture)**, which **TWO** trade-offs will the organization experience?  
*[Select TWO correct answers]*

- [ ] **A.** **Trade-off 1:** Independent deployment and decoupled release cycles for custom rules are gained, **at the cost of** significantly higher network latency, serialization overhead, and network failure vulnerabilities.
- [ ] **B.** **Trade-off 2:** Transactional simplicity and zero-latency local function calls are gained, **at the cost of** higher cloud server hosting bills.
- [ ] **C.** **Trade-off 3:** Operational complexity increases (monitoring distributed endpoints, managing API contracts, handling network partitions), **at the cost of** losing the simplicity of single-process debugging.
- [ ] **D.** **Trade-off 4:** Code reusability is completely eliminated across all client implementations.
- [ ] **E.** **Trade-off 5:** The system is guaranteed to achieve 100% availability because distributed services never experience runtime crashes.

---

### Scenario C: Architectural Tactics for High Availability & Security
A national healthcare system manages patient medical records. The system requires **High Availability (ඉහළ ලබාගත හැකි බව - 99.99% uptime)** and rigorous **Security (ආරක්ෂාව - Zero unauthorized record access)**.

#### Question 10: Architectural Tactics Selection
Which of the following architectural tactics correctly address these required Quality Attributes?  
*[Select TWO correct answers]*

- [ ] **A.** **Availability Tactic (Fault Recovery):** Implement active redundancy (hot-standby database replicas) with automated heartbeat monitoring and instantaneous failover to maintain uptime if the primary database crashes.
- [ ] **B.** **Security Tactic (Resisting Attacks):** Enforce mutual TLS (mTLS) authentication, attribute-based access control (ABAC), and AES-256 data encryption at rest and in transit.
- [ ] **C.** **Availability Tactic (Fault Prevention):** Remove all input validation checks to allow server threads to execute transactions as quickly as possible.
- [ ] **D.** **Security Tactic (Recovering from Attacks):** Expose raw database endpoints directly to client web browsers so patients can verify the integrity of their own medical tables.
- [ ] **E.** **Modifiability Tactic (Binding Time):** Hardcode database connection strings directly into binary machine instructions so they cannot be altered after compile time.

---

# 📝 Comprehensive Answer Key & Deep Rationales

---

### Answer to Question 1: **B, C**
* **Why B is CORRECT:** Quality Attributes (often termed "-ilities", such as Scalability, Availability, Performance) specify the operational characteristics the system must support to achieve business success.
* **Why C is CORRECT:** Architectural decisions formulate explicit rules and constraints (e.g., *"Database access must only occur through designated repository interfaces"*), ensuring consistent engineering across the organization.
* **Why A is INCORRECT:** An architectural style (e.g., Layered, Microservices) describes only the high-level structural shape/topology. A complete architecture also requires quality attributes, logical components, and architectural decisions.
* **Why D is INCORRECT:** Logical components represent functional boundaries (domains/services); they do not need a 1-to-1 mapping to physical containers (multiple components can run in a single container).
* **Why E is INCORRECT:** Architectural styles apply to both monolithic (Layered, Modular Monolith, Microkernel) and distributed systems (Microservices, Event-Driven, Space-Based).

---

### Answer to Question 2: **A, B**
* **Why A is CORRECT:** Afferent Coupling ($C_a$) measures **incoming dependencies** (how many other components call this package). Here $C_a = 8$, meaning 8 external packages rely on it.
* **Why B is CORRECT:** The Robert C. Martin Instability formula is:
  $$I = \frac{C_e}{C_a + C_e} = \frac{2}{8 + 2} = \frac{2}{10} = 0.20$$
  An instability score of **$0.20$ (close to 0)** indicates a **highly stable package (ඉතා ස්ථාපිත සංරචකයක්)**. It is hard to change because many other modules depend on it, but it is not easily disrupted by changes in external packages.
* **Why C & D are INCORRECT:** $C_e$ is 2 (not 8), and $I$ is 0.20 (not 0.80).
* **Why E is INCORRECT:** Core framework packages and utility foundations naturally have $I \approx 0$; this is expected and healthy, not an anti-pattern.

---

### Answer to Question 3: **A, B, C**
* **Why A, B, and C are CORRECT:** L. Peter Deutsch specified the 8 classic fallacies of distributed computing:
  1. *The network is reliable.*
  2. *Latency is zero.*
  3. *Bandwidth is infinite.*
  4. *The network is secure.*
  5. *Topology doesn't change.*
  6. *There is one administrator.*
  7. *Transport cost is zero.*
  8. *The network is homogeneous.*
* **Why D and E are INCORRECT:** Distributed transactions introduce severe latency and locking overhead (Two-Phase Commit / CAP theorem trade-offs). Microservices do not eliminate software bugs; distributed environments introduce complex distributed failure modes.

---

### Answer to Question 4: **A, C**
* **Why A is CORRECT:** In a technically partitioned system, changing an order checkout flow forces developers to touch the Presentation layer, the Business layer, and the Data layer. In a domain-partitioned architecture (Modular Monolith), the `Order` domain encapsulates its own presentation, business rules, and persistence internally, localizing changes.
* **Why C is CORRECT:** Domain partitioning aligns with **Conway's Law** and Domain-Driven Design (DDD), enabling cross-functional teams to own an end-to-end business capability.
* **Why B is INCORRECT:** Technical layers still exist within domain modules; they are simply encapsulated under domain boundaries rather than spanning the top-level architecture.
* **Why D & E are INCORRECT:** Changing code packaging does not alter relational database indexing or query speeds, nor does it physically decouple runtimes into cloud microservices.

---

### Answer to Question 5: **B, C**
* **Why B is CORRECT:** The Mediator topology uses an orchestrator (Mediator) that knows the steps of the business workflow, sends commands to specific processors, and coordinates the status of complex transactions.
* **Why C is CORRECT:** In a Broker topology, event processors broadcast events and react to events without central coordination (Choreography). This eliminates central processing bottlenecks and achieves maximum throughput and responsiveness.
* **Why A is INCORRECT:** In a Broker topology, there is **no central coordinator**; event processors react independently.
* **Why D is INCORRECT:** Error handling and compensating transactions (rollbacks) are notoriously **difficult** in Broker topologies because no single entity has global visibility over the entire transaction state.
* **Why E is INCORRECT:** Mediator topologies still rely heavily on message queues (e.g., event queues, command queues).

---

### Answer to Question 6: **A, C**
* **Why A is CORRECT:** By definition, an **Open Layer (විවෘත ස්ථරය)** can be bypassed. A request from the layer directly above it (Business Layer) can skip the Services Layer and call the layer below it (Persistence Layer).
* **Why C is CORRECT:** The **Architecture Sinkhole Anti-pattern** occurs when simple requests pass through multiple layers without performing any actual business logic (e.g., just passing a query down). Making intermediate passthrough layers open allows requests to bypass them, reducing latency and overhead.
* **Why B is INCORRECT:** Isolation is relaxed only around the designated open layer; closed layers still enforce isolation.
* **Why D & E are INCORRECT:** Layered architectures strictly enforce top-to-bottom call hierarchies; lower layers can never invoke upper layers directly. Openness is not inherited transitively.

---

### Answer to Question 7: **A, B**
* **Why A is CORRECT:** A monolithic system deployed as a single unit with a shared database has unified static/dynamic connascence and a single deployment boundary, forming **one single Architectural Quantum**.
* **Why B is CORRECT:** If two services share a relational database schema and rely on synchronous two-phase commits to ensure transactional integrity, they cannot be deployed, scaled, or evolved independently. Therefore, they form a **single Architectural Quantum** despite running in separate processes.
* **Why C is INCORRECT:** Individual classes are not independently deployable artifacts with distinct quality attributes.
* **Why D is INCORRECT:** Decomposing code into microservices does not create multiple quanta if the services remain tightly coupled to a single shared database.
* **Why E is INCORRECT:** The primary reason architects define quanta is to allow different parts of a system to exhibit different quality attributes (e.g., high scalability for browsing, high consistency for billing).

---

### Answer to Question 8: **A, B**
* **Why A is CORRECT:** Decomposing a startup's entire codebase into 30 microservices introduces immense operational overhead (Kubernetes, distributed tracing, network latency, distributed data consistency) that will cripple team productivity.
* **Why B is CORRECT:** Architectural thinking requires targeting the specific bottleneck. The issue is CPU starvation caused by long-running PDF creation in the checkout thread. Moving PDF generation to an asynchronous worker queue decouples the workload while preserving the simplicity of the modular core.
* **Why C is INCORRECT:** The vast majority of world-class applications run successfully on modular monoliths; microservices are not mandatory for high performance.
* **Why D & E are INCORRECT:** Doubling RAM does not fix CPU starvation or poor thread design. Making the checkout wait synchronously for PDF rendering makes user checkout times even slower.

---

### Answer to Question 9: **A, C**
* **Why A is CORRECT:** Moving client-specific plugins to remote microservices decouples deployment, but incurs the unavoidable penalty of network latency, serialization (JSON/Protobuf), and network failure modes (Distributed Computing Fallacies).
* **Why C is CORRECT:** Operating separate remote microservices requires deploying API gateways, health check monitors, automated CI/CD pipelines, and circuit breakers, whereas local in-process plugins run inside the same memory space with simple local method calls.
* **Why B is INCORRECT:** Remote microservices do not provide zero latency or transactional simplicity; local plugins do.
* **Why D is INCORRECT:** Code reusability is not eliminated by choosing remote services.
* **Why E is INCORRECT:** Distributed networks add *more* failure points, not fewer.

---

### Answer to Question 10: **A, B**
* **Why A is CORRECT:** Under Bass et al.'s Architectural Tactics for **Availability (Fault Recovery)**, active redundancy (hot standbys) coupled with heartbeats and automated failover switches traffic immediately if the master node dies, sustaining uptime.
* **Why B is CORRECT:** Under Bass et al.'s Architectural Tactics for **Security (Resisting Attacks)**, encrypting data (AES-256) and verifying identity/permissions (mTLS, ABAC) directly resist unauthorized data breaches.
* **Why C is INCORRECT:** Removing input validation creates critical SQL injection and buffer overflow vulnerabilities, destroying both security and stability.
* **Why D is INCORRECT:** Exposing raw databases to public web browsers violates fundamental security boundaries and guarantees catastrophic data compromises.
* **Why E is INCORRECT:** Hardcoding database connection strings prevents dynamic reconfiguration, destroying modifiability and maintainability.
