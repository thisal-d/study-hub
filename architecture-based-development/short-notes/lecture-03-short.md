# SE3100: Architecture Based Development
## Lecture 03: Architectural Thinking — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Explain modularity (මොඩියුලර්භාවය)**, **Cohesion (සංගතිභාවය)**, **Coupling (පරායත්තතාව)**, and **Connascence (සහජාතීත්වය)** to evaluate module boundaries.
* **Explain Coupling** using **Afferent Coupling ($C_a$)** and **Efferent Coupling ($C_e$)** to understand how changes propagate through a system.
* **Compare Technical Partitioning (තාක්ෂණික පාදක බෙදීම)** and **Domain Partitioning (ක්ෂේත්‍ර පාදක බෙදීම)** at the top architectural level.
* **Explain how Quality Attribute Scope relates to Architectural Quanta (ගෘහ නිර්මාණ ක්වොන්ටාව)**.
* **Relate Architectural Quanta to Monolithic and Distributed Architectures** to make informed architectural decisions.

---

## 2. Complexity in Software Systems & Modularity (සංකීර්ණත්වය සහ මොඩියුලර්භාවය)

As software systems grow, they naturally become harder to understand and maintain. Without deliberate structural discipline:
* Responsibilities become tangled and mixed together.
* Dependencies spread uncontrollably across the system.
* Changes produce unexpected side effects and regression bugs in unrelated areas.
* Reuse and replacement of components become nearly impossible.
* The codebase degrades into a chaotic **"Big Ball of Mud" (අවුල් ජාලයක්)**.

> 🔑 **Cardinal Law:** Software does **NOT** remain well-structured by accident. Architecture must actively impose and preserve organization through **Modularity**.

### Modularity as an Organizing Principle
* **Modularity (මොඩියුලර්භාවය)** decomposes a massive system into cohesive, logical groupings of code called **Modules (මොඩියුල)** or **Components (සංරචක)**.
* A module contains related classes, functions, and data structures working together toward a cohesive purpose.
* Reasoning at the component level allows architects to decide:
  1. What belongs together?
  2. What should be separated?
  3. How parts depend on each other?
  4. Where changes should be safely contained (blast-radius reduction)?

---

## 3. Cohesion, Coupling, and Connascence: The Core Triad

Architects evaluate the health of modular boundaries using three interconnected concepts:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THE MODULARITY TRIAD                            │
├─────────────────────┬──────────────────────┬───────────────────────────┤
│ 1. Cohesion         │ 2. Coupling          │ 3. Connascence            │
│    (Internal Unity) │    (Interdependence) │    (Change Propagation)   │
│    "Belonging       │    "Connections      │    "If X changes, must Y  │
│     together"       │     between parts"   │     change to be correct?"│
└─────────────────────┴──────────────────────┴───────────────────────────┘
```

* **Cohesion (සංගතිභාවය):** Measures how closely related the internal elements of a single module are.
* **Coupling (පරායත්තතාව):** Measures how dependent external software modules are on one another.
* **Connascence (සහජාතීත්වය):** Provides a formal, precise vocabulary to classify different forms and strengths of coupling.

---

## 4. Cohesion (සංගතිභාවය)

* **Definition (නිර්වචනය):** Cohesion refers to **how closely the parts of a module belong together (මොඩියුලයක කොටස් එකිනෙක කොතරම් සමීපව අයිති වන්නේද යන්න)**.
* **A Highly Cohesive Module (ඉහළ සංගතිභාවයක් සහිත මොඩියුලයක්):**
  1. **Contains strongly related behaviour (දැඩි ලෙස සම්බන්ධිත හැසිරීම් අඩංගු වේ):** The elements inside the module work together to implement related functionality.
  2. **Represents a meaningful purpose (අර්ථවත් අරමුණක් නියෝජනය කරයි):** The module fulfills a clear, distinct domain or architectural responsibility.
  3. **Contains the elements necessary to perform that purpose (එම අරමුණ ඉටු කිරීමට අවශ්‍ය අංග අඩංගු වේ):** Everything required to accomplish its purpose is present within the module.

### Modularity Versus Granularity (මොඩියුලර්භාවය සහ කැටිතිභාවය)
* Dividing something that is naturally cohesive may introduce **additional coupling** between the resulting modules.
* **The Architectural Goal:** Generally to create modules containing elements that **meaningfully belong together**.
* **Connection to Architectural Quantum:** Within an architectural quantum, related functionality must remain together and exhibit **high functional cohesion (ඉහළ ක්‍රියාකාරී සංගතිභාවය)**.

### Cohesion Concepts in Lecture Table

| Concept / Aspect | Lecture Principle & Meaning (දේශනයේ මූලධර්මය) | Simple Real-World Scenario (සරල ප්‍රායෝගික උදාහරණය) |
| :--- | :--- | :--- |
| **Highly Cohesive Module** | Contains strongly related behaviour, represents a meaningful purpose, and holds all necessary elements. | A `PaymentProcessing` module containing only payment verification, gateway communication, and transaction logging. |
| **Modularity vs. Granularity** | Breaking up a naturally unified feature into too many micro-parts creates excessive coupling between them. | Splitting user registration into 4 separate modules (`NameCollector`, `EmailValidator`, `PasswordHasher`, `UserSaver`), causing complex cross-module dependencies. |
| **Functional Cohesion in Quanta** | An architectural quantum must perform a meaningful purpose with high internal cohesion. | An independently deployable `OrderFulfillment` service containing all steps required to pack, label, and dispatch an order. |

---

## 5. Coupling: Afferent and Efferent (පරායත්තතාව)

* **Coupling (පරායත්තතාව)** concerns **dependencies between software elements (මෘදුකාංග අංග අතර පවතින රඳාපැවැත්මවල්)**.
* Coupling helps architects understand **how changes can propagate through a system (පද්ධතියක් හරහා වෙනස්කම් පැතිරී යා හැකි ආකාරය)**.

### Afferent vs. Efferent Coupling

```
      [Other Packages / Modules]             [This Module / Artifact]
                  │                                     │
                  ▼ (Ca = Incoming)                     ▼ (Ce = Outgoing)
       ┌───────────────────────┐             ┌───────────────────────┐
       │ This Module / Artifact│             │Other Modules / Services│
       └───────────────────────┘             └───────────────────────┘
```

* **Afferent Coupling ($C_a$ - Incoming Connections / ලැබෙන සබඳතා):**
  * **Incoming connections** to a software artifact.
  * Measures how many external classes, packages, or services depend on this artifact (*"Who depends on me?"*).
  * Indicates **responsibility** and impact on the rest of the system.
* **Efferent Coupling ($C_e$ - Outgoing Connections / පිටතට යන සබඳතා):**
  * **Outgoing connections** from a software artifact.
  * Measures how many external classes, packages, or services this artifact depends upon (*"Who do I depend on?"*).
  * Indicates **external dependence** and vulnerability to outside changes.

### Coupling Comparison Table

| Coupling Dimension | Lecture Definition | What it Reveals About the Architecture | Real-World Scenario |
| :--- | :--- | :--- | :--- |
| **Afferent Coupling ($C_a$)** | **Incoming connections** to a software artifact. | Indicates how critical this artifact is; modifying it may cause widespread ripple effects across all dependents. | A shared `AuthenticationService` used by 20 distinct business services ($C_a = 20$). |
| **Efferent Coupling ($C_e$)** | **Outgoing connections** from a software artifact. | Indicates how vulnerable this artifact is to changes made in outside components it depends on. | A `CheckoutController` that calls 6 external APIs, a payment gateway, and an inventory service ($C_e = 8$). |
| **Change Propagation (වෙනස්කම් පැතිරීම)** | The path and extent to which modifying one software artifact forces modifications in other artifacts. | Understanding coupling allows architects to design boundaries that contain changes and prevent cascade failures. | Changing a shared API contract in an upstream service with high afferent coupling breaks all downstream callers. |

---

## 6. Connascence (සහජාතීත්වය)

* Coined by Meilir Page-Jones, **Connascence (සහජාතීත්වය)** states:
  > *"Two software elements are connascent if a change in one requires the other to be modified to maintain overall system correctness."*
* Connascence offers a unified vocabulary to evaluate coupling across code and architecture.

### The Three Properties of Connascence

| Property | What it Evaluates | Architectural Rule |
| :--- | :--- | :--- |
| **1. Strength (ශක්තිය)** | How difficult the coupling is to refactor or how easily it causes bugs. | Prefer weaker forms (e.g., Name) over stronger forms (e.g., Algorithm). |
| **2. Locality (ප්‍රාදේශීයතාව)** | The physical/architectural distance between elements in the codebase. | Strong forms are acceptable *locally* (inside a class); weak forms must be used *across boundaries*. |
| **3. Degree (ප්‍රමාණය)** | The size of the impact: how many components are affected by the shared dependency. | Minimize degree: coupling to 2 classes is fine; coupling to 200 classes is dangerous. |

---

## 7. Static vs. Dynamic Connascence (ස්ථිතික සහ ගතික සහජාතීත්වය)

### A. Static Connascence (Source Code Level - Compile Time)
Ranked from **Weakest (Best)** to **Strongest (Most Complex)**:

| Static Type | Definition & Meaning | Simple Example |
| :--- | :--- | :--- |
| **1. Connascence of Name - CoN (නම)** | *Weakest form.* Elements must agree on the name of an entity. | Invoking `customer.calculateDiscount()`. Renaming is easily refactored via IDEs. |
| **2. Connascence of Type - CoT (වර්ගය)** | Elements must agree on the data type of an argument or field. | A method expecting an `int` vs. `String`. Compiler enforces type safety. |
| **3. Connascence of Meaning - CoM (අර්ථය)** | Elements must agree on the implicit meaning of values (magic values). | Using `status = 1` for "Active", `2` for "Suspended". (Refactor to an `enum`). |
| **4. Connascence of Position - CoP (පිහිටුම)** | Elements must agree on the exact order of positional parameters. | `createUser(String fName, String lName, String email, String zip, String city)`. |
| **5. Connascence of Algorithm - CoA (ඇල්ගොරිතමය)** | *Strongest static form.* Multiple components must implement an identical algorithm. | Producer and consumer sharing an identical custom checksum or encryption routine. |

---

### B. Dynamic Connascence (Runtime Execution Level)
Dynamic connascence occurs during runtime execution and is substantially harder to trace and debug:

| Dynamic Type | Definition & Meaning | Simple Example |
| :--- | :--- | :--- |
| **1. Connascence of Execution - CoE (ක්‍රියාත්මක අනුපිළිවෙල)** | Order of execution matters: steps must execute in a strict chronological sequence. | Must call `init()` $\rightarrow$ `authenticate()` $\rightarrow$ `openSocket()`; executing out-of-order crashes. |
| **2. Connascence of Timing - CoT (කාල නියමය)** | Correctness depends on precise timing, execution speed, or thread race conditions. | Two threads writing to a shared variable without locks, causing race condition corruption. |
| **3. Connascence of Values - CoV (අගයන්)** | Values in multiple components must change together to preserve global consistency. | Distributed database replicas where modifying a master record requires updating 3 read copies. |
| **4. Connascence of Identity - CoI (අනන්‍යතාවය)** | Multiple components must reference the exact same memory instance of an entity. | Two services requiring a shared in-memory singleton object rather than distinct identical copies. |

---

## 8. Guidelines for Creating Good Modules (Page-Jones Rules)

Meilir Page-Jones established three governing rules for architects:
1. **Minimize overall connascence** by creating well-encapsulated elements.
2. **Minimize connascence that crosses encapsulation boundaries.**
3. **Maximize connascence within encapsulation boundaries.**

> 🔑 **The Rule of Locality:** As the architectural distance between components increases (same method $\rightarrow$ same class $\rightarrow$ same module $\rightarrow$ across microservices), **connascence strength must decrease**. Strong coupling is acceptable inside a 10-line private method, but crossing network microservices with Connascence of Algorithm is disastrous!

---

## 9. Architecture Partitioning: Technical vs. Domain (ගෘහ නිර්මාණ බෙදීම්)

How should top-level components be arranged at the root level?

```
   TECHNICAL PARTITIONING                      DOMAIN PARTITIONING
┌───────────────────────────┐             ┌───────────┬───────────┬───────────┐
│ Presentation Layer (UI)   │             │  Catalog  │   Order   │  Billing  │
├───────────────────────────┤             │  Domain   │  Domain   │  Domain   │
│ Business Logic Layer      │             │  (UI,     │  (UI,     │  (UI,     │
├───────────────────────────┤             │   Logic,  │   Logic,  │   Logic,  │
│ Persistence Layer (Data)  │             │   Data)   │   Data)   │   Data)   │
└───────────────────────────┘             └───────────┴───────────┴───────────┘
```

### Technical vs. Domain Partitioning Table

| Dimension | Technical Partitioning (තාක්ෂණික පාදක බෙදීම) | Domain Partitioning (ක්ෂේත්‍ර පාදක බෙදීම) |
| :--- | :--- | :--- |
| **Top-Level Organization** | Horizontal layers organized by technical capability: Presentation, Business, Persistence. | Vertical slices organized by business domains: `Catalog`, `Order`, `Payment`, `Shipping`. |
| **Change Pattern** | A single business workflow change **cuts across all technical layers** (must modify UI, Business, and Database). | Changes are **localized inside a single domain module** without touching other domains. |
| **Organizational Alignment** | Aligns with technical silos (separate UI team, backend team, and DBA team). | Aligns with cross-functional domain teams (**Conway's Law** / Domain-Driven Design). |
| **Associated Architectural Styles** | Standard **Layered Architecture (N-Tier)**. | **Modular Monolith**, **Microservices**, **Event-Driven Architecture**. |
| **Primary Trade-off** | Simple separation of technical concerns, but high team coordination friction for business features. | Higher initial modeling effort, but high agility and decoupled release cadences. |

---

## 10. Scope of Quality Attributes & Architectural Quanta (ගෘහ නිර්මාණ ක්වොන්ටාව)

* Traditional software engineering assumed that a single set of Quality Attributes applied uniformly to the entire application.
* Modern systems have **divergent, conflicting quality scopes**:
  * *Public Catalog:* High Scalability, High Availability, Low Consistency.
  * *Billing Ledger:* High Security, Strict ACID Consistency, Modest Scalability.
* Attempting to satisfy every quality attribute uniformly across the entire system creates impossible trade-offs.

### What is an Architectural Quantum? (Richards & Ford)
> **An Architectural Quantum is an independently deployable artifact with high functional cohesion, low external static coupling, and unified synchronous connascence that establishes the scope for a set of Quality Attributes.**

```
┌─────────────────────────────────────────────────────────────┐
│                    ARCHITECTURAL QUANTUM                    │
├─────────────────────────────────────────────────────────────┤
│ • Independently deployable unit (code + private database)   │
│ • High internal functional cohesion                         │
│ • Low external implementation coupling                      │
│ • Unified set of Quality Attributes (e.g., 99.99% uptime)   │
└─────────────────────────────────────────────────────────────┘
```

### Core Rules of Architectural Quanta:
1. **The Database is Part of the Quantum:** If two services share a single database with synchronous joins, they form **ONE single Architectural Quantum**, regardless of how many containers are deployed!
2. **Synchronous Calls Merge Quanta:** Synchronous HTTP calls introduce runtime coupling. If Service A cannot function when Service B is down, their availability is coupled.
3. **Single Quantum $\rightarrow$ Monolith:** If the entire system shares one cohesive set of quality attributes, a Monolithic architecture is viable.
4. **Multiple Quanta $\rightarrow$ Distributed:** If different subdomains require fundamentally distinct quality attributes (e.g., extreme scale vs. strict auditability), multiple quanta are needed, implying a distributed architecture (e.g., Microservices).

---

## 11. Monolithic vs. Distributed Decision Framework

| Evaluation Factor | Monolithic Architecture (Single Quantum) | Distributed Architecture (Multiple Quanta) |
| :--- | :--- | :--- |
| **Structural Boundary** | All components packaged and deployed as a **single deployment unit**. | Multiple deployment units connected across networks via remote protocols. |
| **Communication** | In-memory method calls (nanoseconds latency, zero serialization). | Remote network calls (HTTP/gRPC/Kafka) subject to network latency and failures. |
| **Transactional Model** | Simple local ACID database transactions. | Eventual consistency, Sagas, compensating transactions. |
| **Operational Complexity** | Low (simple deployment pipelines, straightforward local debugging). | High (container orchestration, service discovery, distributed tracing). |
| **When to Choose** | Small-to-medium teams, single quality attribute scope, strict ACID requirements, modest budgets. | Large engineering teams, divergent quality attribute scopes, fine-grained independent scaling. |

### The 8 Fallacies of Distributed Computing (L. Peter Deutsch)
When moving to distributed architectures, architects must never assume:
1. *The network is reliable.*
2. *Latency is zero.*
3. *Bandwidth is infinite.*
4. *The network is secure.*
5. *Topology doesn't change.*
6. *There is only one administrator.*
7. *Transport cost is zero.*
8. *The network is homogeneous.*

---

## 12. Quick Revision Summary Table (කෙටි පුනරීක්ෂණ සාරාංශ වගුව)

| Concept / Metric | Core Definition in Lecture | Exam Takeaways to Memorize |
| :--- | :--- | :--- |
| **Cohesion (සංගතිභාවය)** | How closely parts of a module belong together. | Highly cohesive module has strongly related behaviour, meaningful purpose, and necessary elements. Over-dividing naturally cohesive code increases external coupling (Modularity vs Granularity). |
| **Coupling (පරායත්තතාව)** | Dependencies between software elements. | Evaluates how changes propagate through a system. Strive for high cohesion and low external coupling. |
| **Afferent Coupling ($C_a$)** | Incoming connections to a software artifact (*"Who depends on me?"*). | Measures responsibility and impact of changes on dependent modules. |
| **Efferent Coupling ($C_e$)** | Outgoing connections from a software artifact (*"Who do I depend on?"*). | Measures vulnerability to changes made in outside components. |
| **Connascence** | Coupling where changing X forces Y to change to preserve correctness. | Properties: **Strength** (form), **Locality** (distance), **Degree** (number of affected parts). |
| **Static vs. Dynamic Connascence** | Compile-time source code vs. runtime execution flow. | Static: **Name $\rightarrow$ Type $\rightarrow$ Meaning $\rightarrow$ Position $\rightarrow$ Algorithm**.<br>Dynamic: **Execution, Timing, Values, Identity**. |
| **Rule of Locality** | *"As distance increases, connascence strength must decrease."* | Strong coupling is fine inside a private class; weak coupling is mandatory across network services. |
| **Architecture Partitioning** | Technical (horizontal layers) vs. Domain (vertical business workflows). | Technical partitions crosscut workflows; Domain partitions localize changes to business contexts. |
| **Architectural Quantum** | Smallest independently deployable unit with high cohesion and unified QAs. | Includes the database. Sharing a database collapses services into **one single quantum**. |
