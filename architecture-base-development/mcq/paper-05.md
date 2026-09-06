# SE3100: Architecture Based Development
# Practice Exam Paper 05 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 05)
## Focus: Lecture 03 — Connascence, Partitioning & Architectural Quanta

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: What is Connascence? (සහජාතීත්වය / සහසම්බන්ධතාවය යනු කුමක්ද?)
What is **Connascence (සහජාතීත්වය)** as defined by Meilir Page-Jones in software engineering?  
*[Select TWO correct answers]*

- [ ] **A.** A metric describing that two software components are connascent if a change in one requires the other to be modified to maintain overall correctness.
- [ ] **B.** A generalized, modern way to describe, categorize, and evaluate coupling across different dimensions of code.
- [ ] **C.** A legal patent owned by computer hardware manufacturers in Silicon Valley.
- [ ] **D.** The speed at which electrical signals travel through computer fiber optic cables.
- [ ] **E.** An automated command in Linux used to delete temporary system directories.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Meilir Page-Jones defined Connascence as a relationship between two software elements where changing one necessitates changing the other to preserve system correctness. It unifies and refines classic coupling concepts.
* **Why C, D & E are INCORRECT:** Connascence is a software design metric, not a patent, physical cable speed, or Linux command.

---

### Question 2: The Three Dimensions of Connascence (සහජාතීත්වයේ මාන තුන)
Architects evaluate connascence using three primary dimensions. Which of the following represent these **Three Dimensions of Connascence**?  
*[Select THREE correct answers]*

- [ ] **A.** **Strength (ශක්තිය):** How easily a particular form of connascence can be refactored or how severely it couples components.
- [ ] **B.** **Locality (ප්‍රාදේශීයතාව):** The physical proximity of the connascent elements in the codebase (e.g., inside the same method, same class, same module, or across distributed services).
- [ ] **C.** **Degree (ප්‍රමාණය / සංඛ්‍යාව):** The size of the impact—how many elements or components are affected by the shared relationship.
- [ ] **D.** **Weight:** The physical weight of the laptop chassis in grams.
- [ ] **E.** **Brightness:** The monitor display luminescence in nits.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The three pillars of Connascence analysis are **Strength** (form of coupling), **Locality** (distance in code/architecture), and **Degree** (number of impacted components).
* **Why D & E are INCORRECT:** Hardware weight and screen brightness are irrelevant to code metrics.

---

### Question 3: Static vs. Dynamic Connascence (ස්ථිතික සහ ගතික සහජාතීත්වය)
What is the core distinction between **Static Connascence** and **Dynamic Connascence**?  
*[Select TWO correct answers]*

- [ ] **A.** **Static Connascence** can be detected and analyzed by examining the source code directly at compile/build time.
- [ ] **B.** **Dynamic Connascence** can only be observed and evaluated at runtime while the application is actively executing.
- [ ] **C.** Static connascence only exists in JavaScript, while dynamic connascence only exists in C++.
- [ ] **D.** Dynamic connascence means that the computer monitor is dynamically refreshing at 120Hz.
- [ ] **E.** Static connascence is completely impossible to eliminate from any software codebase.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Static connascence relates to source code structure (names, types, algorithms) discoverable at compile-time. Dynamic connascence involves runtime execution flow, timing, and mutable shared states.
* **Why C, D & E are INCORRECT:** Both forms exist across all programming languages; monitor refresh rates are hardware; and static connascence can be refactored.

---

### Question 4: Types of Static Connascence (ස්ථිතික සහජාතීත්ව වර්ග)
Which of the following are recognized as types of **Static Connascence**?  
*[Select THREE correct answers]*

- [ ] **A.** **Connascence of Name - CoN (නම පිළිබඳ සහජාතීත්වය):** Multiple components must agree on the exact name of an entity (e.g., method name, class name).
- [ ] **B.** **Connascence of Type - CoT (වර්ගය පිළිබඳ සහජාතීත්වය):** Multiple components must agree on the data type of an argument or return value.
- [ ] **C.** **Connascence of Algorithm - CoA (ඇල්ගොරිතමය පිළිබඳ සහජාතීත්වය):** Multiple components must agree on a specific computational algorithm (e.g., identical checksum calculation, hashing algorithm).
- [ ] **D.** Connascence of Monitor Diagonal Width.
- [ ] **E.** Connascence of Electricity Voltage.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Name (CoN), Type (CoT), Meaning (CoM), Position (CoP), and Algorithm (CoA) are the five formal types of Static Connascence.
* **Why D & E are INCORRECT:** Monitor sizes and electrical voltages are physical attributes unrelated to software source code.

---

### Question 5: Defining Architectural Quanta (ගෘහ නිර්මාණ ක්වොන්ටාව නිර්වචනය)
How do Mark Richards and Neal Ford formally define an **Architectural Quantum (ගෘහ නිර්මාණ ක්වොන්ටාව)**?  
*[Select TWO correct answers]*

- [ ] **A.** An independently deployable artifact with high functional cohesion and high synchronous connascence.
- [ ] **B.** A subsystem that encapsulates all the structural elements required to deliver a specific set of Quality Attributes autonomously.
- [ ] **C.** A quantum computer chip built using superconducting qubits by NASA.
- [ ] **D.** A single line of comment written in an HTML file.
- [ ] **E.** An antivirus software program running on desktop Windows computers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** An Architectural Quantum is an independently deployable unit with high functional cohesion, synchronous connascence (including its database/runtime), and a unified set of Quality Attributes.
* **Why C, D & E are INCORRECT:** It is a software architecture concept, completely unrelated to quantum physics chips, HTML comments, or antivirus utilities.

---

### Question 6: Technical Partitioning vs. Domain Partitioning Definition
What is the fundamental difference between **Technical Partitioning** and **Domain Partitioning**?  
*[Select TWO correct answers]*

- [ ] **A.** **Technical Partitioning (තාක්ෂණික පාදක බෙදීම):** The system's top-level components are organized by technical function/layer (e.g., Presentation, Business, Persistence).
- [ ] **B.** **Domain Partitioning (ක්ෂේත්‍ර පාදක බෙදීම):** The system's top-level components are organized around business workflows and capabilities (e.g., `Catalog`, `Order`, `Billing`, `Shipping`).
- [ ] **C.** Technical partitioning is strictly prohibited by law in financial enterprise software.
- [ ] **D.** Domain partitioning means that every domain must run on a different physical continent.
- [ ] **E.** Technical partitioning only works if all developers write code in Python.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Technical partitioning divides software horizontally by technical layers (presentation, business, database). Domain partitioning divides software vertically by business capabilities (Domain-Driven Design).
* **Why C, D & E are INCORRECT:** Technical partitioning is widely used in layered architectures; domains do not require separate continents; and technical partitioning is language-agnostic.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Ranking Static Connascence from Weakest to Strongest
In software refactoring, weaker forms of connascence are preferred because they are easier to maintain. What is the correct order of Static Connascence from **Weakest (Best) to Strongest (Most Difficult)**?  
*[Select ONE correct answer]*

- [ ] **A.** Connascence of Name (CoN) $\rightarrow$ Type (CoT) $\rightarrow$ Meaning (CoM) $\rightarrow$ Position (CoP) $\rightarrow$ Algorithm (CoA)
- [ ] **B.** Connascence of Algorithm (CoA) $\rightarrow$ Position (CoP) $\rightarrow$ Type (CoT) $\rightarrow$ Name (CoN)
- [ ] **C.** Connascence of Position $\rightarrow$ Name $\rightarrow$ Algorithm $\rightarrow$ Meaning
- [ ] **D.** All types of static connascence have mathematically identical strength.
- [ ] **E.** Static connascence has no measurable hierarchy.

**ANSWER:** A

**Explanation (විග්‍රහය):**
* **Why A is CORRECT:** The hierarchy from weakest (most desirable) to strongest (hardest to maintain) is:  
  1. **Name** (weakest, trivial to refactor via IDE rename).  
  2. **Type** (typed parameters).  
  3. **Meaning** (magic numbers / conventions).  
  4. **Position** (positional function arguments).  
  5. **Algorithm** (strongest static form; both parties must implement identical math/logic).
* **Why B, C, D & E are INCORRECT:** B and C reverse or scramble the verified hierarchy, and D & E falsely deny the hierarchy.

---

### Question 8: Identifying Connascence of Position (CoP) vs. Connascence of Meaning (CoM)
Examine the following code snippets:
1. `void process(String a, String b, String c, String d, String e, String f)`: A method with 6 string arguments where the caller must pass arguments in the exact specified sequence.
2. `if (user.getStatus() == 1)`: An application where the integer `1` implicitly represents "Active User", while `2` represents "Suspended", and `3` represents "Deleted".

Which connascence types are exhibited?  
*[Select TWO correct answers]*

- [ ] **A.** Snippet 1 exhibits **Connascence of Position - CoP (පිහිටුම පිළිබඳ සහජාතීත්වය)**: Passing values in the wrong order compiles without error but produces severe data bugs.
- [ ] **B.** Snippet 2 exhibits **Connascence of Meaning - CoM (අර්ථය පිළිබඳ සහජාතීත්වය)**: Both caller and callee must agree that the magic integer `1` represents "Active".
- [ ] **C.** Snippet 1 can be refactored into a weaker Connascence of Name by passing a single `ParameterObject` or named map.
- [ ] **D.** Snippet 2 exhibits Connascence of Algorithm because the integer 1 is calculated using calculus.
- [ ] **E.** Both snippets represent the highest level of software security.

**ANSWER:** A, B (Note: C is also a valid architectural remediation principle, but A & B identify the types directly!)

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Positional parameter dependency is Connascence of Position (CoP). Magic numbers/flags where integers hold implicit meaning represent Connascence of Meaning (CoM) (should be refactored to an `enum`).
* **Why D & E are INCORRECT:** Magic flags are not algorithms; and positional/magic dependencies degrade quality rather than improving security.

---

### Question 9: Dynamic Connascence — Execution vs. Timing vs. Identity
Which of the following correctly pair a type of **Dynamic Connascence** with its operational meaning?  
*[Select THREE correct answers]*

- [ ] **A.** **Connascence of Execution (ක්‍රියාත්මක වීමේ අනුපිළිවෙල):** Multiple operations must execute in an exact strict sequence (e.g., `init()` must be called before `start()`, which must be called before `execute()`).
- [ ] **B.** **Connascence of Timing (කාල නියමය පිළිබඳ සහජාතීත්වය):** The correctness of an operation depends on exact temporal synchronization or race conditions (e.g., two threads modifying shared data without locks).
- [ ] **C.** **Connascence of Identity (අනන්‍යතාවය පිළිබඳ සහජාතීත්වය):** Multiple components must reference the exact same memory instance of an object rather than separate identical copies.
- [ ] **D.** Connascence of Execution: The computer operating system must be turned off while running code.
- [ ] **E.** Connascence of Timing: All software must only execute during daylight hours.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Execution (strict sequence), Timing (temporal synchronization/race conditions), and Identity (shared in-memory instance) are the recognized forms of Dynamic Connascence.
* **Why D & E are INCORRECT:** Powered-off computers and daylight hours are nonsense conditions.

---

### Question 10: The Rule of Locality in Connascence (ප්‍රාදේශීයතා නියමය)
What does the **Rule of Locality** state regarding software coupling and connascence?  
*[Select TWO correct answers]*

- [ ] **A.** Strong forms of connascence (e.g., Algorithm, Position, Execution) are acceptable if they reside **locally within a single private method or class**.
- [ ] **B.** As the distance between components increases (e.g., across packages, across modules, across network APIs), connascence must be **refactored into weaker forms** (e.g., Connascence of Name).
- [ ] **C.** The Rule of Locality requires all software developers to live in the same geographic town.
- [ ] **D.** Components separated by a network are encouraged to have high Connascence of Identity.
- [ ] **E.** All classes in a codebase must have identical names to satisfy locality.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Rule of Locality states: *"As distance increases, connascence strength must decrease."* Tight connascence inside a 10-line helper method is harmless; tight connascence across remote microservices is disastrous.
* **Why C, D & E are INCORRECT:** Locality refers to architectural distance in code, not real-estate geography; identity across networks is impossible without shared memory; and identical names cause naming collisions.

---

### Question 11: Change Pattern in Technically Partitioned Systems (තාක්ෂණික බෙදීම්වල වෙනස්කම් රටාව)
In an enterprise application partitioned technically into Presentation, Business, and Persistence layers:  
When the business introduces a new feature (e.g., *"Support Gift Cards"*), what change pattern typically occurs?  
*[Select TWO correct answers]*

- [ ] **A.** Developers must modify the Presentation layer (new UI screens), the Business layer (gift card rules), and the Persistence layer (new database tables).
- [ ] **B.** A single business workflow change is forced to cut across all technical layers, increasing coordination overhead across teams.
- [ ] **C.** The change can be completed by modifying zero lines of code.
- [ ] **D.** The technical partitioning automatically generates the gift card database tables without human intervention.
- [ ] **E.** The entire software architecture converts into a distributed broker topology.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In technically partitioned (layered) systems, every new business workflow cuts across all horizontal technical layers, forcing multi-layer edits and team coordination delays.
* **Why C, D & E are INCORRECT:** Code must be written; layers do not auto-generate schemas; and technical partitioning does not convert systems to event brokers.

---

### Question 12: Change Pattern in Domain Partitioned Systems (ක්ෂේත්‍ර බෙදීම්වල වෙනස්කම් රටාව)
In a modern system partitioned by Domain into `Order`, `Billing`, `Catalog`, and `Shipping` modules:  
When the business modifies the invoice layout and tax rules for `Billing`, what change pattern occurs?  
*[Select TWO correct answers]*

- [ ] **A.** Changes are localized entirely within the `Billing` domain module, leaving `Order`, `Catalog`, and `Shipping` untouched.
- [ ] **B.** The risk of accidental side effects and regression breaks across unrelated business capabilities is drastically minimized.
- [ ] **C.** The entire company must re-test the `Shipping` module for three weeks.
- [ ] **D.** The change requires rewriting the underlying operating system kernel.
- [ ] **E.** Domain partitioning makes it impossible to save data into a database.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Domain partitioning aligns code with business capabilities. A billing change is contained within the `Billing` bounded context, preventing ripple bugs in other modules.
* **Why C, D & E are INCORRECT:** Shipping does not need re-testing; OS kernels are untouched; and databases function normally inside domain modules.

---

### Question 13: Architectural Quanta and Shared Databases (ගෘහ නිර්මාණ ක්වොන්ටාව සහ හවුල් දත්ත සමුදාය)
A company builds 8 microservices, each running in its own Docker container. However, all 8 microservices directly read and write to a single centralized Oracle database, executing cross-service SQL joins and transactions.  
How many **Architectural Quanta** exist in this system?  
*[Select TWO correct answers]*

- [ ] **A.** The system forms **exactly ONE Architectural Quantum** because the services share a unified database and synchronous database connascence.
- [ ] **B.** If a developer alters a table schema in the shared database, all 8 services can break and must be coordinated, tested, and redeployed together.
- [ ] **C.** The system forms 8 independent architectural quanta because there are 8 Docker containers.
- [ ] **D.** The system forms 64 architectural quanta.
- [ ] **E.** A shared database guarantees that services can be deployed independently with zero coordination.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** An Architectural Quantum includes the data storage! Even with 8 containers, sharing a single relational database binds them with high static and dynamic connascence, collapsing them into **one single quantum**.
* **Why C, D & E are INCORRECT:** Containers alone do not define a quantum if the database is shared; and shared databases prevent independent deployment.

---

### Question 14: Quality Attribute Scope and Architectural Quanta (ගුණාත්මක ලක්ෂණවල විෂය පථය)
Why is the number of **Architectural Quanta** critical when analyzing system **Quality Attributes**?  
*[Select TWO correct answers]*

- [ ] **A.** A single architectural quantum can only enforce a **single unified set of Quality Attributes** across all its internal components (e.g., if one part needs 99.999% availability, the entire quantum must be built for 99.999%).
- [ ] **B.** Systems with **multiple architectural quanta** allow different subsystems to possess different quality attributes (e.g., high scalability for the customer catalog, high security/consistency for payments).
- [ ] **C.** Having multiple architectural quanta makes it illegal to use cloud computing.
- [ ] **D.** A single quantum automatically guarantees that all software bugs will vanish.
- [ ] **E.** Quality attributes only exist in systems with zero architectural quanta.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The boundary of an Architectural Quantum defines the boundary of its quality attributes. In a single quantum, all parts share the same availability, scalability, and security profile. Multiple quanta decouple quality attribute requirements across domains.
* **Why C, D & E are INCORRECT:** Multiple quanta thrive in cloud microservices; bugs still occur; and every system has at least one quantum.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Refactoring Connascence of Algorithm in Two Microservices
Service A (Producer) writes encrypted user tokens to an event bus. Service B (Consumer) reads the tokens from the bus and decrypts them. Both services have identical custom AES encryption algorithms and private keys hardcoded inside their respective codebases. When the security team updates the encryption algorithm to AES-GCM, Service B crashes because it was not updated simultaneously.

#### Question 15: Evaluating the Connascence Defect
Which type of connascence is demonstrated, and how should it be refactored according to the Rule of Locality?  
*[Select TWO correct answers]*

- [ ] **A.** The services exhibit **Connascence of Algorithm - CoA (ඇල්ගොරිතමය පිළිබඳ සහජාතීත්වය)** crossing a distributed service boundary.
- [ ] **B.** The architecture should be refactored by extracting the token validation into a shared identity provider service (e.g., OAuth2 / OIDC) or standardized shared library, weakening connascence to **Connascence of Name / Protocol**.
- [ ] **C.** The services exhibit Connascence of Position because Service A is placed on the left side of the network diagram.
- [ ] **D.** The team should solve the problem by hardcoding all passwords directly into DNS records.
- [ ] **E.** The crash proves that encryption should never be used in software.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Both services sharing a custom algorithm is Connascence of Algorithm (CoA). Crossing a network boundary with CoA is hazardous; replacing it with standard token verification (OAuth2/JWT) weakens it to standard protocol/name connascence.
* **Why C, D & E are INCORRECT:** Diagram positioning is not connascence; DNS passwords are a security leak; and encryption is vital.

---

### Scenario 2: Refactoring Connascence of Execution in Multi-Threaded Code
A class `DatabaseConnectionManager` contains three methods: `connect()`, `authenticate()`, and `executeQuery()`. If a developer writes `manager.executeQuery()` before calling `connect()` and `authenticate()`, the application throws a `NullPointerException` and terminates.

#### Question 16: Refactoring Dynamic Connascence to Static Form
What type of connascence exists, and how can it be refactored into a safer compile-time structure?  
*[Select TWO correct answers]*

- [ ] **A.** The code exhibits **Connascence of Execution - CoE (ක්‍රියාත්මක වීමේ අනුපිළිවෙල පිළිබඳ සහජාතීත්වය)**, where operations must occur in a rigid temporal sequence.
- [ ] **B.** It can be refactored into **Static Connascence of Type (CoT)** by using a Factory or Builder pattern where `authenticate()` returns an `AuthenticatedSession` object, and only that object provides the `executeQuery()` method.
- [ ] **C.** It exhibits Connascence of Meaning because database passwords are strings.
- [ ] **D.** The developers should delete all exception handling to let the program run without connecting.
- [ ] **E.** Connascence of Execution is completely impossible to prevent in object-oriented programming.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Requiring methods to run in sequence is Connascence of Execution (CoE). Returning an `AuthenticatedSession` object turns a runtime execution error into a compile-time type check (CoT), making invalid sequences unrepresentable.
* **Why C, D & E are INCORRECT:** It is execution (not meaning); deleting error handling causes crashes; and design patterns readily eliminate CoE.

---

### Scenario 3: Deciding Between Monolithic and Distributed Architecture
Company ABC is designing a core enterprise platform. The CTO wants to know whether to build a Monolith or a Distributed Architecture. The system requirements state:
* High data transaction consistency across all operations.
* A small engineering team of 6 developers.
* Tight budget with modest traffic expectations (10,000 active daily users).
* Low operational complexity desired.

#### Question 17: Architectural Recommendation
Based on Lecture 03's decision criteria, which architectural recommendation is **MOST APPROPRIATE**?  
*[Select TWO correct answers]*

- [ ] **A.** Select a **Monolithic Architecture (e.g., Modular Monolith)** because a team of 6 developers can easily manage a single deployment quantum without the distributed network overhead, operational complexity, and eventual consistency dilemmas of microservices.
- [ ] **B.** A single architectural quantum provides high transactional ACID consistency and low deployment costs, perfectly aligning with the company's constraints.
- [ ] **C.** Select a 50-service distributed microservices architecture because small teams should never build monoliths.
- [ ] **D.** Monoliths are prohibited by law for modern software development.
- [ ] **E.** The company should not write any code and hire 10,000 human workers to calculate everything with pencils.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Small team size (6 developers), strict transactional consistency requirements, modest traffic, and low budget strongly favor a single quantum (Modular Monolith). Distributed systems would add crippling overhead.
* **Why C, D & E are INCORRECT:** Small teams struggle with microservices; monoliths are thriving and legitimate; and manual calculations are absurd.

---

### Scenario 4: Organizational Alignment via Conway's Law
A software company reorganizes its engineering department into three cross-functional feature squads:
* **Squad Alpha:** Owns the `ProductCatalog` domain end-to-end (UI, API, database).
* **Squad Beta:** Owns the `OrderCheckout` domain end-to-end.
* **Squad Gamma:** Owns the `CustomerSupport` domain end-to-end.

However, the software codebase is strictly organized into horizontal technical layers:
* `Frontend_Layer.git`
* `Business_Layer.git`
* `Database_Layer.git`

Every time Squad Alpha wants to release a new catalog feature, they must submit pull requests across all three git repositories, waiting for approvals from separate UI, backend, and DBA gatekeepers.

#### Question 18: Evaluating the Architectural Mismatch
What architectural principle describes this problem, and how should it be resolved?  
*[Select TWO correct answers]*

- [ ] **A.** The mismatch violates **Conway's Law** (organizations design architectures that mirror their communication structures), creating friction between cross-functional team boundaries and technical architecture boundaries.
- [ ] **B.** The architecture should be transitioned to **Domain Partitioning (Modular Monolith or Microservices)**, aligning code packaging directly with cross-functional team ownership.
- [ ] **C.** The company should fire all developers and outsource everything to an automated bot.
- [ ] **D.** The current architecture is ideal because cross-functional teams should always wait 6 months for code reviews.
- [ ] **E.** Conway's Law states that software must be partitioned solely by file size.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Conway's Law highlights the friction when team structures (domain squads) conflict with architecture (technical layers). Transitioning to domain partitioning aligns team boundaries with code boundaries (Inverse Conway Maneuver).
* **Why C, D & E are INCORRECT:** Firing developers is not architectural advice; 6-month delays are toxic; and Conway's Law relates to organizational communication, not file size.

---

### Scenario 5: Detecting Accidental Quanta Merging via Database Views
Two distinct microservices, `InventoryService` and `ShippingService`, each have their own separate PostgreSQL database schemas. However, to speed up query performance, a developer creates a foreign database foreign-data-wrapper (FDW) view that allows `ShippingService` to execute direct SQL joins against `InventoryService`'s private tables.

#### Question 19: Architectural Quantum Analysis
What happened to the architectural quanta of these two services?  
*[Select TWO correct answers]*

- [ ] **A.** The direct database join coupled the two services at the data tier, effectively **collapsing two separate architectural quanta into a single unified quantum**.
- [ ] **B.** Any change to the inventory table schema now risks breaking the shipping database view, eliminating independent deployability.
- [ ] **C.** The two services became 10 times more decoupled and independent.
- [ ] **D.** Database views have zero impact on software architecture boundaries.
- [ ] **E.** The system automatically converted into a Space-Based Architecture.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Sharing databases via views creates tight data connascence. The services can no longer be deployed or evolved independently, merging them into a single de-facto quantum.
* **Why C, D & E are INCORRECT:** Views couple (not decouple) systems; database coupling severely damages boundaries; and it did not become space-based.

---

### Scenario 6: High Availability vs. High Performance Quanta Decoupling
An enterprise streaming platform consists of two distinct capabilities:
1. **Video Streaming Pipeline:** Requires extreme scalability ($10,000,000$ concurrent read streams), high availability, and can tolerate 5-minute eventual consistency of metadata.
2. **Subscription Billing & Payout Engine:** Processes financial payouts to content creators, requiring strict transactional ACID consistency, zero duplicate payments, and audit compliance, with modest volume (100 payments/day).

#### Question 20: Justifying Multiple Architectural Quanta
Why does this system justify being split into **Multiple Architectural Quanta**?  
*[Select TWO correct answers]*

- [ ] **A.** The two subsystems possess fundamentally conflicting Quality Attribute requirements: high-scale eventual consistency for streaming vs. strict ACID consistency for billing.
- [ ] **B.** Splitting them into distinct architectural quanta allows the streaming pipeline to scale horizontally across thousands of nodes without burdening the billing database.
- [ ] **C.** Software systems are legally forbidden from running video and billing on the same operating system.
- [ ] **D.** Having multiple quanta guarantees that content creators will never ask for payment.
- [ ] **E.** The billing engine should be deleted because video streaming is more popular.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When different capabilities require fundamentally divergent quality attributes (massive scale/availability vs strict consistency/auditability), decomposing the system into separate Architectural Quanta allows each part to be engineered for its specific requirements.
* **Why C, D & E are INCORRECT:** There is no such law; creators must be paid; and deleting billing makes monetization impossible.
