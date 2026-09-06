# SE3100: Architecture Based Development
# Practice Exam Paper 04 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 04)
## Focus: Lecture 03 — Architectural Thinking: Modularity, Cohesion & Coupling Metrics

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Modularity as an Organizing Principle (මොඩියුලර්භාවය සංවිධානාත්මක මූලධර්මයක් ලෙස)
Why is **Modularity (මොඩියුලර්භාවය)** fundamental in managing software complexity?  
*[Select TWO correct answers]*

- [ ] **A.** It decomposes a complex, monolithic system into discrete, cohesive, and understandable units with well-defined boundaries.
- [ ] **B.** It allows individual parts of a system to be developed, tested, and maintained with minimal ripple effects on other components.
- [ ] **C.** It forces all developers to write code using only one single global variable.
- [ ] **D.** It completely eliminates the need for software systems to store data in memory.
- [ ] **E.** It legally prohibits software from running on Linux operating systems.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Modularity breaks large problems into manageable chunks with distinct boundaries, isolating change and reducing cognitive load for developers.
* **Why C, D & E are INCORRECT:** Single global variables destroy modularity; memory is always required; and modular software runs on all operating systems.

---

### Question 2: Defining Cohesion and Coupling (සංගතිභාවය සහ පරායත්තතාව)
What is the core distinction between **Cohesion (සංගතිභාවය)** and **Coupling (පරායත්තතාව)** in software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** **Cohesion** measures the degree to which elements *inside* a single module belong together and focus on a single, well-defined purpose.
- [ ] **B.** **Coupling** measures the degree of interdependence and connectivity *between* distinct modules or artifacts.
- [ ] **C.** Good software architecture strives for **Low Cohesion and High Coupling**.
- [ ] **D.** High coupling guarantees that changing one module will never cause bugs in another module.
- [ ] **E.** Cohesion and coupling are identical terms that mean the physical speed of Ethernet cables.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Cohesion is *internal* relatedness (elements working together toward one goal), while Coupling is *external* entanglement (interdependence between components).
* **Why C, D & E are INCORRECT:** Good architecture demands **High Cohesion and Low Coupling** (not low cohesion and high coupling); high coupling increases ripple effects; and they are architectural metrics, not cable speeds.

---

### Question 3: Characteristics of a Highly Cohesive Module (ඉහළ සංගතිභාවයක් සහිත මොඩියුලයක ලක්ෂණ)
According to the lecture, cohesion refers to how closely the parts of a module belong together. Which of the following are recognized as defining characteristics of a **highly cohesive module**?  
*[Select THREE correct answers]*

- [ ] **A.** Contains strongly related behaviour (දැඩි ලෙස සම්බන්ධිත හැසිරීම් අඩංගු වේ).
- [ ] **B.** Represents a meaningful purpose (අර්ථවත් අරමුණක් නියෝජනය කරයි).
- [ ] **C.** Contains the elements necessary to perform that purpose (එම අරමුණ ඉටු කිරීමට අවශ්‍ය අංග අඩංගු වේ).
- [ ] **D.** Contains 50 unrelated functions grouped together by coincidence.
- [ ] **E.** Completely avoids having any internal classes or functions.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture slide on Cohesion explicitly states that a highly cohesive module: (1) contains strongly related behaviour, (2) represents a meaningful purpose, and (3) contains the elements necessary to perform that purpose.
* **Why D & E are INCORRECT:** Grouping unrelated functions is an anti-pattern (Big Ball of Mud), and modules must contain the elements necessary to fulfill their purpose.

---

### Question 4: Modularity Versus Granularity (මොඩියුලර්භාවය සහ කැටිතිභාවය)
What does the lecture identify as the critical trade-off when considering **Modularity Versus Granularity**?  
*[Select TWO correct answers]*

- [ ] **A.** Dividing something that is naturally cohesive may introduce **additional coupling** between the resulting modules.
- [ ] **B.** The architectural goal is generally to create modules containing elements that **meaningfully belong together**.
- [ ] **C.** Finer granularity always guarantees zero coupling across the entire system.
- [ ] **D.** Dividing a module into 1,000 tiny classes automatically makes the system execute 10 times faster.
- [ ] **E.** Granularity has no relationship to modularity or coupling.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture explicitly notes: *"Dividing something that is naturally cohesive may introduce additional coupling between the resulting modules (Modularity Versus Granularity). The architectural goal is generally to create modules containing elements that meaningfully belong together."*
* **Why C, D & E are INCORRECT:** Finer granularity often increases communication and coupling between parts; splitting does not speed up CPU execution; and granularity directly impacts coupling.

---

### Question 5: Defining Afferent and Efferent Coupling (ඇෆරන්ට් සහ එෆරන්ට් පරායත්තතා)
In architectural code analysis, what do **Afferent Coupling ($C_a$)** and **Efferent Coupling ($C_e$)** measure?  
*[Select TWO correct answers]*

- [ ] **A.** **Afferent Coupling ($C_a$ - Incoming):** The number of classes/packages *outside* this package that depend on classes *inside* this package (who depends on me?).
- [ ] **B.** **Efferent Coupling ($C_e$ - Outgoing):** The number of classes/packages *inside* this package that depend on classes *outside* this package (who do I depend on?).
- [ ] **C.** Afferent coupling measures the physical temperature of the server motherboard in Celsius.
- [ ] **D.** Efferent coupling measures the total number of comments written in the source code file.
- [ ] **E.** $C_a$ and $C_e$ are only applicable to relational database SQL tables.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Afferent ($C_a$) = Incoming connections (measures responsibility/dependents). Efferent ($C_e$) = Outgoing connections (measures dependency on outside artifacts).
* **Why C, D & E are INCORRECT:** Motherboard temperature and comment counts are completely unrelated, and coupling metrics apply to code modules, packages, and services.

---

### Question 6: Change Propagation and Coupling (පරායත්තතාව සහ වෙනස්කම් පැතිරීම)
Why is understanding coupling essential when evaluating software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** Coupling concerns dependencies between software elements and helps architects understand **how changes can propagate through a system**.
- [ ] **B.** High external coupling creates ripple effects where modifying one component forces changes and regressions in dependent components.
- [ ] **C.** Coupling measures the electrical voltage running through the computer's CPU power cable.
- [ ] **D.** High coupling guarantees that all software modules can be deployed completely independently without testing.
- [ ] **E.** Coupling only exists if the software is written in Python.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** As stated in the lecture, coupling concerns dependencies between software elements, and understanding coupling allows architects to trace and control how changes propagate through a system.
* **Why C, D & E are INCORRECT:** Coupling is not electrical voltage; high coupling prevents independent deployment; and coupling applies to all software languages.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Static Connascence Types (ස්ථිතික සහජාතීත්වය)
Static connascence represents coupling that can be identified directly from the source code. Which of the following are recognized in the lecture as forms of **Static Connascence**?  
*[Select THREE correct answers]*

- [ ] **A.** Connascence of Name (නම) & Connascence of Type (වර්ගය).
- [ ] **B.** Connascence of Meaning (අර්ථය) & Connascence of Position (පිහිටුම).
- [ ] **C.** Connascence of Algorithm (ඇල්ගොරිතමය).
- [ ] **D.** Connascence of Quantum Gravity.
- [ ] **E.** Connascence of Keyboard Layout.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture slide explicitly defines the five types of Static Connascence: Name, Type, Meaning, Position, and Algorithm.
* **Why D & E are INCORRECT:** Quantum gravity and keyboard layouts are unrelated distractors.

---

### Question 8: Dynamic Connascence Types (ගතික සහජාතීත්වය)
Dynamic connascence concerns coupling that occurs during execution at runtime. Which of the following are recognized in the lecture as forms of **Dynamic Connascence**?  
*[Select FOUR correct answers]*

- [ ] **A.** Connascence of Execution (ක්‍රියාත්මක අනුපිළිවෙල).
- [ ] **B.** Connascence of Timing (කාල නියමය).
- [ ] **C.** Connascence of Values (අගයන්).
- [ ] **D.** Connascence of Identity (අනන්‍යතාවය).
- [ ] **E.** Connascence of Optical Glass.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** The lecture slide lists the four types of Dynamic Connascence: Execution, Timing, Values, and Identity, which arise from how software elements interact at runtime.
* **Why E is INCORRECT:** Optical glass is a physical material, not an architectural connascence type.

---

### Question 9: Static vs. Dynamic Connascence (ස්ථිතික සහ ගතික සහජාතීත්වය සංසන්දනය)
According to the comparison table in the lecture slides, how do **Static Connascence** and **Dynamic Connascence** compare?  
*[Select THREE correct answers]*

- [ ] **A.** Static connascence exists at the **source-code level** and can be identified through code analysis.
- [ ] **B.** Dynamic connascence exists at **runtime** and depends on execution behaviour.
- [ ] **C.** Static forms are generally **easier to detect and refactor**, making weaker static forms preferred over stronger dynamic forms.
- [ ] **D.** Dynamic connascence is always easier to manage than static connascence.
- [ ] **E.** Static connascence can only be identified after the software is deployed to production.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Directly from the lecture comparison table: Static is source-code level, identifiable via code analysis, and easier to detect/refactor; Dynamic is runtime, depends on execution, harder to manage, and can create significant runtime dependencies.
* **Why D & E are INCORRECT:** Dynamic forms are harder to manage (not easier), and static forms are identified via source code analysis before runtime.

---

### Question 10: Properties of Connascence: Strength, Locality, and Degree (සහජාතීත්වයේ ලක්ෂණ)
The lecture identifies three properties that help determine whether coupling is acceptable within a particular architectural boundary. What are these **Three Properties of Connascence**?  
*[Select THREE correct answers]*

- [ ] **A.** **Strength (ශක්තිය):** How easy the coupling is to refactor.
- [ ] **B.** **Locality (ප්‍රාදේශීයතාව):** How close the connascent elements are to each other.
- [ ] **C.** **Degree (ප්‍රමාණය):** How many elements are affected by the dependency.
- [ ] **D.** **Weight (බර):** The physical gravitational weight of the computer in kilograms.
- [ ] **E.** **Color (වර්ණය):** The RGB color code of the IDE theme.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture explicitly defines Strength (how easy to refactor), Locality (how close elements are to each other), and Degree (how many elements are affected).
* **Why D & E are INCORRECT:** Physical weight and screen colors are irrelevant distractors.

---

### Question 11: Managing Degree of Connascence (Meilir Page-Jones Guidelines)
Meilir Page-Jones, who put forward the concept of connascence, provides three fundamental guidelines for architects. What are these **Three Guidelines**?  
*[Select THREE correct answers]*

- [ ] **A.** **Minimize overall connascence** by creating encapsulated elements.
- [ ] **B.** **Minimize connascence that crosses encapsulation boundaries.**
- [ ] **C.** **Maximize connascence within encapsulation boundaries.**
- [ ] **D.** Maximize connascence that crosses encapsulation boundaries to create global coupling.
- [ ] **E.** Forbid any code from being encapsulated inside boundaries.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** As taught on the slide: (1) Minimize overall connascence by creating encapsulated elements, (2) Minimize connascence that crosses encapsulation boundaries, (3) Maximize connascence within encapsulation boundaries (where high cohesion and stronger internal relationships are acceptable).
* **Why D & E are INCORRECT:** Crossing boundaries with strong connascence is an anti-pattern to be minimized, and encapsulation is essential.

---

### Question 12: Locality of Connascence (සහජාතීත්වයේ ප්‍රාදේශීයතාව)
According to the lecture, how does the **distance** between software elements affect whether strong coupling is acceptable?  
*[Select TWO correct answers]*

- [ ] **A.** Strong coupling is **less problematic** when the coupled elements are close together (e.g., **within the same module**).
- [ ] **B.** As the distance between software elements increases (across separate modules or systems), **weaker forms of connascence should be preferred**.
- [ ] **C.** Strong coupling across separate remote systems is always preferred over loose coupling.
- [ ] **D.** Locality means all software must be developed in the same physical city.
- [ ] **E.** Distance between software elements has zero architectural significance.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture slide states: *"Strong coupling is less problematic when the coupled elements are close together. Within the same module, strong coupling may be acceptable. Across separate modules or systems, the same coupling becomes more problematic. As the distance between software elements increases, weaker forms of connascence should be preferred."*
* **Why C, D & E are INCORRECT:** Strong coupling across remote systems causes fragility; locality refers to code/architectural distance; and distance is fundamentally significant.

---

### Question 13: Coupling Crossing Module Boundaries (මොඩියුල සීමා හරහා පරායත්තතාව පැතිරීම)
A software system initially contains two strongly coupled classes within the same package. A developer moves one class into a completely separate top-level module, while their direct method-calling dependency remains tightly coupled.  
What is the proper architectural assessment of this change?  
*[Select TWO correct answers]*

- [ ] **A.** The dependency has become **more problematic (වඩාත් ගැටලු සහගත)** because tight coupling now crosses an architectural module boundary.
- [ ] **B.** Crossing a module boundary with tight coupling increases ripple effects, degrades maintainability, and harms independent deployability.
- [ ] **C.** The dependency has been eliminated because the classes reside in different folders.
- [ ] **D.** The dependency automatically transformed into functional cohesion.
- [ ] **E.** The change is acceptable as long as both modules use Git for version control.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Moving coupled elements across module boundaries without decoupling them worsens the architecture. High coupling inside a module is manageable; high coupling *crossing* module boundaries destroys modularity.
* **Why C, D & E are INCORRECT:** Moving files does not remove dependencies (C); it does not create cohesion (D); and version control does not fix bad coupling (E).

---

### Question 14: Creating Good Modules (හොඳ මොඩියුල නිර්මාණය කිරීම)
According to the lecture slide on "Creating Good Modules", what three goals should a good architectural boundary attempt to achieve?  
*[Select THREE correct answers]*

- [ ] **A.** **Keep related behaviour together (High cohesion).**
- [ ] **B.** **Keep strongly dependent elements together (Localize coupling).**
- [ ] **C.** **Reduce dependencies crossing the boundary (Low external coupling).**
- [ ] **D.** Spread related behaviour randomly across 50 separate servers.
- [ ] **E.** Maximize external dependencies crossing the boundary.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture slide on Creating Good Modules specifies: (1) Keep related behaviour together (High cohesion), (2) Keep strongly dependent elements together (Localize coupling), (3) Reduce dependencies crossing the boundary (Low external coupling).
* **Why D & E are INCORRECT:** Spreading related behaviour destroys cohesion, and maximizing external dependencies creates fragile, coupled systems.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Unmanaged Complexity and the "Big Ball of Mud"
An enterprise software system has grown over 5 years without deliberate architectural governance. 
* Business logic, UI formatting, and database queries are intertwined in the same source files.
* Modifying a minor calculation in one feature breaks three unrelated features in production.
* Developers fear touching legacy code because nobody understands how dependencies spread across the system.

#### Question 15: Diagnosis of the System's Structural Breakdown
Based on the lecture slides on "Complexity in Software Systems", what has occurred in this system?  
*[Select TWO correct answers]*

- [ ] **A.** The system has degraded into a **"Big Ball of Mud" (අවුල් ජාලයක්)** because responsibilities became mixed together and dependencies spread across the system without deliberate structural control.
- [ ] **B.** Software does not remain well structured by accident; architecture must actively impose and preserve organization through modularity.
- [ ] **C.** The system is in perfect architectural health and needs no restructuring.
- [ ] **D.** The bugs occurred because the developers did not use mechanical keyboards.
- [ ] **E.** The system should be thrown away and replaced with a single static HTML page.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture explicitly teaches that without deliberate structure, responsibilities become mixed together, dependencies spread, changes produce unexpected side effects, and the system gradually degrades into a "Big Ball of Mud". Software does not stay structured by accident; architecture must impose and preserve organization.
* **Why C, D & E are INCORRECT:** Mixing responsibilities is flawed architecture; keyboards are irrelevant; and enterprise systems cannot run on static HTML.

---

### Scenario 2: Analyzing Afferent Coupling and Blast Radius
Package `com.core.security` provides authentication and token validation:
* **28 external services and modules** in the enterprise platform import and call methods in `com.core.security` ($C_a = 28$).
* `com.core.security` imports **zero external business modules** ($C_e = 0$).

#### Question 16: Architectural Assessment of Afferent Coupling
What does this coupling profile reveal to the software architect?  
*[Select TWO correct answers]*

- [ ] **A.** The security package has **high Afferent Coupling ($C_a = 28$)**, indicating that it carries high responsibility and that many parts of the system depend on it.
- [ ] **B.** Any breaking change made to method signatures or contracts in `com.core.security` will have a wide **change propagation blast radius**, potentially impacting all 28 dependent modules.
- [ ] **C.** The package is completely unreferenced by the rest of the application.
- [ ] **D.** The package has high efferent coupling because it makes 28 outgoing network calls.
- [ ] **E.** High afferent coupling means the package will automatically delete its source code on Mondays.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Afferent Coupling ($C_a$) represents incoming connections to a software artifact. A high $C_a$ indicates that many external modules depend on it, meaning modifications carry a wide change propagation risk.
* **Why C, D & E are INCORRECT:** $C_a = 28$ proves 28 dependents exist; $C_e = 0$ means zero outgoing dependencies; and deletion is absurd.

---

### Scenario 3: Modularity vs. Granularity Trap in Order Management
A development team breaks up the checkout process into 6 tiny separate packages: `CartLoader`, `ItemValidator`, `PriceAdder`, `TaxLookup`, `DiscountDeductor`, and `TotalComputer`.
* Each package contains only a single 5-line method.
* Computing an order requires 18 cross-package method calls with tightly coupled data transfer objects passing back and forth.
* Changes to billing rules require updating all 6 packages simultaneously.

#### Question 17: Architectural Evaluation of Modularity vs. Granularity
What architectural issue has the team encountered, and what is the proper solution?  
*[Select TWO correct answers]*

- [ ] **A.** The team fell into the **Modularity Versus Granularity trap**: dividing something that is naturally cohesive introduced excessive coupling between the resulting modules.
- [ ] **B.** The architectural goal is to create modules containing elements that **meaningfully belong together**; the team should consolidate these tightly dependent pricing steps into a cohesive `OrderPricing` module.
- [ ] **C.** The team has achieved world-class micro-architecture and should divide each method into 10 smaller packages.
- [ ] **D.** The issue is caused by the operating system running out of disk space.
- [ ] **E.** The packages should be deployed to 6 different public cloud providers to fix the coupling.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** As taught in the lecture, dividing naturally cohesive logic into overly fine-grained units introduces additional coupling. The goal is to keep related behaviour together in modules that meaningfully belong together.
* **Why C, D & E are INCORRECT:** Over-fragmentation worsens coupling; disk space is unrelated; and distributing over clouds increases network latency and operational complexity.

---

### Scenario 4: Refactoring for High Cohesion in an E-Commerce Order Flow
In an e-commerce order processing module, a single method `processOrder()` executes the following steps sequentially:
1. Validates credit card payment via Stripe.
2. Formats and prints warehouse shipping packaging labels.
3. Sends promotional discount marketing emails to the customer.
4. Updates physical warehouse forklift battery telemetry data.

#### Question 18: Identifying Architectural Flaws
What architectural issues are present in this method, and how should it be redesigned?  
*[Select TWO correct answers]*

- [ ] **A.** The method suffers from low cohesion by bundling disparate business responsibilities (payment, shipping, marketing, forklift hardware) into a single execution flow.
- [ ] **B.** Forklift battery telemetry and promotional marketing should be decoupled from the transactional checkout path, using asynchronous domain events (e.g., `OrderPlacedEvent`).
- [ ] **C.** The method exhibits perfect functional cohesion and should not be modified.
- [ ] **D.** Forklifts must always be recharged before a credit card can be charged.
- [ ] **E.** The method should be rewritten in HTML to run faster.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Mixing payments, physical warehouse machinery, and marketing emails violates single responsibility. Decoupling non-critical tasks via asynchronous domain events restores high cohesion and resilience.
* **Why C, D & E are INCORRECT:** It is not functionally cohesive; forklifts have no business in checkout logic; and HTML is not a general-purpose programming language.

---

### Scenario 5: Circular Dependency Cycle Between Packages
Package `Billing` imports classes from Package `Shipping`.  
Package `Shipping` imports classes from Package `Inventory`.  
A junior developer adds an import statement in Package `Inventory` to call a method in Package `Billing`.

#### Question 19: Evaluating the Architectural Impact of Circular Dependencies
What architectural hazard was created by the junior developer's import statement?  
*[Select TWO correct answers]*

- [ ] **A.** A **Circular Dependency Cycle (චක්‍රීය පරායත්තතා ගැටළුව - Billing $\rightarrow$ Shipping $\rightarrow$ Inventory $\rightarrow$ Billing)** was created, violating the Acyclic Dependencies Principle (ADP).
- [ ] **B.** The three packages become tightly coupled into a single de-facto monolithic blob; none of them can be independently compiled, tested, reused, or deployed.
- [ ] **C.** The cycle makes all three packages run 300% faster.
- [ ] **D.** Circular dependencies automatically resolve themselves when deployed to AWS Cloud.
- [ ] **E.** Circular dependencies are considered best practice in modern microservices design.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Circular dependencies create a mutually dependent lock-in where changing any one package can trigger cascading re-compilation and bugs across all of them, violating the Acyclic Dependencies Principle (ADP).
* **Why C, D & E are INCORRECT:** Cycles do not speed up code; clouds do not fix bad code topology; and cycles are an anti-pattern.

---

### Scenario 6: Broken Modularity via Shared Static Variables
Two modules, `UserManagement` and `OrderProcessing`, share an unencapsulated global static variable `public static boolean isSystemLocked = false;`. When `UserManagement` performs a password reset, it sets `isSystemLocked = true`, which unexpectedly causes `OrderProcessing` to reject incoming customer credit card transactions.

#### Question 20: Characterizing the Architectural Defect
Which architectural concepts explain why this design is flawed?  
*[Select TWO correct answers]*

- [ ] **A.** It introduces hidden, undocumented **Dynamic Coupling via Shared State**, violating component boundaries.
- [ ] **B.** High coupling via mutable global state creates unpredictable side effects and breaks functional independence.
- [ ] **C.** Global static variables are the safest and most decoupled communication mechanism in enterprise architecture.
- [ ] **D.** The design is completely sound because both modules execute on the same CPU core.
- [ ] **E.** The bug occurred because the developers did not use a mechanical keyboard.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Mutable shared global state creates invisible coupling and action-at-a-distance bugs, shattering modular boundaries.
* **Why C, D & E are INCORRECT:** Global mutable state is notoriously dangerous (not safe); same CPU execution does not excuse bad architecture; and keyboards are irrelevant.
