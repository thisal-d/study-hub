# SE3100: Architecture Based Development
## Lecture 03: Architectural Thinking — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Explain modularity (මොඩියුලර්භාවය)** and use **Cohesion (සංගතිභාවය)**, **Coupling (පරායත්තතාව)**, and **Connascence (සහජාතීත්වය)** to evaluate software structure.
* **Calculate and interpret architectural metrics**: Afferent Coupling ($C_a$), Efferent Coupling ($C_e$), Instability ($I$), Abstractness ($A$), and Distance from the Main Sequence ($D$).
* **Compare Technical Partitioning (තාක්ෂණික පාදක බෙදීම)** and **Domain Partitioning (ක්ෂේත්‍ර පාදක බෙදීම)** at the top architectural level.
* **Explain how Quality Attribute Scope relates to Architectural Quanta (ගෘහ නිර්මාණ ක්වොන්ටාව)**.
* **Determine when to choose a Monolithic Architecture vs. a Distributed Architecture** based on quanta analysis.

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

## 4. Cohesion: Types and Spectrum (සංගතිතා මට්ටම් වර්ගීකරණය)

Cohesion is ranked from **Strongest (Most Desirable)** to **Weakest (Anti-Pattern)**. High cohesion ensures that a module has a single, well-defined responsibility.

### The 7 Types of Cohesion Table

| Cohesion Type (සංගතිතා වර්ගය) | Strength | Description & Operating Principle | Simple Real-World Scenario |
| :--- | :---: | :--- | :--- |
| **1. Functional (ක්‍රියාකාරී)** | **Strongest (Best)** | Every element in the module contributes exclusively to performing a single well-defined task. | A `CompoundInterestCalculator` class containing only formulas for computing compound interest. |
| **2. Sequential (අනුක්‍රමික)** | **Strong** | The output of one processing step serves as the direct input to the next step (assembly line pipeline). | An image processing pipeline: `RawPixelReader` $\rightarrow$ `ContrastEnhancer` $\rightarrow$ `EdgeDetector`. |
| **3. Communicational (සන්නිවේදනාත්මක)** | **Moderate-High** | Distinct operations execute on the exact same input dataset or contribute to the same output data. | A `CustomerRecordManager` taking a `CustomerID` to fetch details, check credit limit, and list orders. |
| **4. Procedural (ක්‍රියාපටිපාටික)** | **Moderate** | Operations are grouped together because they must execute in a specific sequential order, even if they operate on different data. | A wizard script: `checkDiskSpace()` $\rightarrow$ `backupDatabase()` $\rightarrow$ `emailAdministrator()`. |
| **5. Temporal (කාලීන)** | **Moderate-Low** | Tasks are grouped together purely because they execute at the same moment in time. | An application startup routine: `loadConfigFiles()`, `initDatabase()`, `displaySplashScreen()`. |
| **6. Logical (තාර්කික)** | **Weak** | Unrelated operations are grouped into a single routine, selecting which to execute based on a control flag. | A method `process(int flag)` that formats dates if `flag=1`, prints PDF if `flag=2`, sends email if `flag=3`. |
| **7. Coincidental (අහඹු)** | **Weakest (Worst)** | Elements are placed together completely at random with no meaningful relationship ("God Object"). | A generic `AppUtils` class containing tax math, string reversals, hardware mouse battery checks, and MP3 decoders. |

> 💡 **Architectural Goal:** Always strive for **High Functional Cohesion** and avoid **Logical / Coincidental Cohesion**!

---

## 5. Coupling Metrics: Afferent, Efferent & Instability

Coupling helps architects understand how changes propagate through a codebase. Robert C. Martin developed mathematical metrics to quantify package coupling.

### A. Afferent vs. Efferent Coupling

```
      [Other Packages]                       [This Package]
             │                                     │
             ▼ (Ca = Incoming)                     ▼ (Ce = Outgoing)
      ┌──────────────┐                       ┌──────────────┐
      │ This Package │                       │Other Package │
      └──────────────┘                       └──────────────┘
```

* **Afferent Coupling ($C_a$ - Incoming):** Measures the number of classes outside this package that depend on classes inside this package (*"Who depends on me?"*). Indicates **responsibility**.
* **Efferent Coupling ($C_e$ - Outgoing):** Measures the number of classes inside this package that depend on classes outside this package (*"Who do I depend on?"*). Indicates **dependency / vulnerability**.

---

### B. Instability Index ($I$)
The **Instability Index ($I$)** measures a module's resilience to change:
$$I = \frac{C_e}{C_a + C_e}$$

* **$I = 0.0$ (Maximally Stable / උපරිම ලෙස ස්ථාවර):** $C_e = 0$. Many components depend on this package ($C_a > 0$), but it depends on nothing. It is difficult to change without breaking other modules (e.g., core domain entities).
* **$I = 1.0$ (Maximally Instable / උපරිම ලෙස අස්ථාවර):** $C_a = 0$. No other packages depend on it, but it depends on outside packages ($C_e > 0$). It is very easy and safe to change (e.g., top-level UI controllers).

---

### C. Abstractness ($A$) & Distance from the Main Sequence ($D$)
* **Abstractness ($A$):** Ratio of interfaces/abstract classes to total types:
  $$A = \frac{\sum m_a}{\sum m_c}$$
  ($A = 0.0$ is completely concrete code; $A = 1.0$ is pure interfaces).
* **The Main Sequence Line:** The ideal balance where Abstractness and Instability balance each other:
  $$A + I = 1$$
* **Normalized Distance from the Main Sequence ($D$):**
  $$D = |A + I - 1|$$
  (Goal: $D \approx 0.0$, on the Main Sequence).

```
   Abstractness (A)
      1.0 ┌─────────────────────────┐ (Zone of Uselessness: A=1, I=1)
          │\                        │  Pure interfaces, nobody uses them!
          │ \                       │
          │  \                      │
          │   \  Main Sequence      │
          │    \ (A + I = 1)        │
          │     \                   │
          │      \                  │
      0.0 └───────\─────────────────┘
         (Zone of Pain)            1.0 Instability (I)
         (A=0, I=0: Rigid, concrete, heavily depended on!)
```

### The Extreme Danger Zones Table

| Zone | Metrics Profile | Architectural Consequence & Danger | Real-World Scenario |
| :--- | :---: | :--- | :--- |
| **Zone of Pain (වේදනා කලාපය)** | $A \approx 0.0$<br>$I \approx 0.0$<br>($D \approx 1.0$) | Highly stable (many incoming dependents) but completely concrete (no interfaces). Rigid and painful to modify; changes trigger massive ripple breaks. | A raw SQL database class with 80 dependent modules and zero interface abstractions. |
| **Zone of Uselessness (නිෂ්ඵල කලාපය)** | $A \approx 1.0$<br>$I \approx 1.0$<br>($D \approx 1.0$) | Highly abstract (pure interfaces) but maximally instable (zero dependents). Represents over-engineered, dead boilerplate code. | A giant tree of 50 abstract interfaces written by an architect that no implementation ever uses. |
| **The Main Sequence (ප්‍රධාන අනුක්‍රමය)** | $A + I = 1.0$<br>($D = 0.0$) | Ideal architectural health: Concrete packages are flexible/instable, and stable packages are properly abstracted via interfaces. | Well-architected domain models and decoupled repository interfaces. |

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

| Concept / Metric | Mathematical Formula / Core Definition | Exam Takeaways to Memorize |
| :--- | :--- | :--- |
| **Cohesion** | Internal relatedness of a module's elements. | Spectrum from **Functional** (strongest, best) to **Coincidental** (weakest, worst). |
| **Afferent Coupling ($C_a$)** | Incoming connections to a package (*"Who calls me?"*). | Measures responsibility and stability. High $C_a$ means many depend on it. |
| **Efferent Coupling ($C_e$)** | Outgoing connections from a package (*"Who do I call?"*). | Measures dependency and vulnerability to outside ripple effects. |
| **Instability Index ($I$)** | $I = \frac{C_e}{C_a + C_e}$ (Ranges $0.0$ to $1.0$). | $I=0.0$ is **Maximally Stable** (hard to change); $I=1.0$ is **Maximally Instable** (flexible, easy to change). |
| **Abstractness ($A$)** | $A = \frac{\sum m_a}{\sum m_c}$ (Ranges $0.0$ to $1.0$). | $A=0$ is completely concrete; $A=1$ is pure interfaces/abstract classes. |
| **Main Sequence & Distance ($D$)** | $D = \|A + I - 1\|$ (Balanced when $D \approx 0$). | **Zone of Pain** ($A=0, I=0$): concrete, stable, rigid.<br>**Zone of Uselessness** ($A=1, I=1$): unused abstract code. |
| **Connascence** | Coupling where changing X forces Y to change to preserve correctness. | Properties: **Strength** (form), **Locality** (distance), **Degree** (number of affected parts). |
| **Static vs. Dynamic Connascence** | Compile-time source code vs. runtime execution flow. | Static: **Name $\rightarrow$ Type $\rightarrow$ Meaning $\rightarrow$ Position $\rightarrow$ Algorithm**.<br>Dynamic: **Execution, Timing, Values, Identity**. |
| **Rule of Locality** | *"As distance increases, connascence strength must decrease."* | Strong coupling is fine inside a private class; weak coupling is mandatory across network services. |
| **Architecture Partitioning** | Technical (horizontal layers) vs. Domain (vertical business workflows). | Technical partitions crosscut workflows; Domain partitions localize changes to business contexts. |
| **Architectural Quantum** | Smallest independently deployable unit with high cohesion and unified QAs. | Includes the database. Sharing a database collapses services into **one single quantum**. |
