# SE3100: Architecture Based Development
# Practice Exam Paper 07 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 07)
## Focus: Lecture 04 — Microkernel (Plug-in) Architecture & Monolithic Style Comparison

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: What is Microkernel Architecture? (ප්ලගීන / මයික්‍රෝකර්නල් ගෘහ නිර්මාණ ශිල්පය)
What are the two primary structural components of the **Microkernel (Plug-in) Architectural Style**?  
*[Select TWO correct answers]*

- [ ] **A.** **Core System (මූලික පද්ධතිය):** Contains the minimal functionality required to make the application operational, along with general lifecycle management and plugin registration logic.
- [ ] **B.** **Plug-in Components (ප්ලගීන සංරචක):** Specialized, standalone, and decoupled processing modules that extend or customize the core system with domain-specific capabilities.
- [ ] **C.** **Quantum Supercomputer Node:** A cryogenically cooled hardware processor located at an offsite research lab.
- [ ] **D.** **Office Paper Shredder:** A mechanical machine that destroys discarded printed documents.
- [ ] **E.** **Public Blockchain Miner:** A computer solving proof-of-work cryptographic puzzles.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Microkernel Architecture is fundamentally composed of: (1) A minimal **Core System** and (2) Independent, swappable **Plug-in Components** that attach to the core via standard contracts.
* **Why C, D & E are INCORRECT:** Quantum hardware, office shredders, and crypto miners have no relevance to the Microkernel software architectural style.

---

### Question 2: Real-World Examples of Microkernel Architecture (ප්‍රායෝගික උදාහරණ)
Which of the following software applications are classic, textbook examples of the **Microkernel (Plug-in) Architecture**?  
*[Select THREE correct answers]*

- [ ] **A.** **Eclipse IDE / Visual Studio Code:** A lightweight editor core extended by language tools, debuggers, and theme plugins.
- [ ] **B.** **Web Browsers (e.g., Google Chrome, Mozilla Firefox):** A core rendering/networking engine extended by third-party browser extensions and add-ons.
- [ ] **C.** **Operating System Kernels (e.g., Minix, Mach):** A minimal OS kernel handling CPU/memory management, with device drivers running as isolated plugins.
- [ ] **D.** A single 10-line basic calculator script that adds two numbers together.
- [ ] **E.** A static printed paperback textbook.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Modern IDEs (VS Code/Eclipse), web browsers (Chrome/Firefox extensions), and microkernel operating systems (Minix/Mach) are the canonical implementations of the Microkernel style.
* **Why D & E are INCORRECT:** A 10-line script is too trivial to have a plug-in architecture, and a printed book is static physical media.

---

### Question 3: The Role of the Plug-in Registry (ප්ලගීන ලේඛනාගාරයේ කාර්යභාරය)
What is the primary role of the **Plug-in Registry (ප්ලගීන ලේඛනාගාරය / නාමාවලිය)** in a Microkernel Architecture?  
*[Select TWO correct answers]*

- [ ] **A.** It keeps track of which plugins are installed, their versions, their protocols, and their runtime communication endpoints.
- [ ] **B.** It allows the Core System to discover, load, initialize, and route requests to registered plugins without hardcoding references to them.
- [ ] **C.** It calculates the monthly payroll salaries of the software development team.
- [ ] **D.** It automatically sends spam advertising emails to all registered plugin creators.
- [ ] **E.** It forces the operating system to shut down whenever a new plugin is detected.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Plug-in Registry acts as a dynamic directory where plugins register their metadata, contracts, and entry points, enabling the Core to decouple from specific plugin implementations.
* **Why C, D & E are INCORRECT:** A registry is an internal routing table, not a payroll calculator, spam engine, or shutdown script.

---

### Question 4: Contracts in Microkernel Architecture (ප්ලගීන ගිවිසුම් / අතුරුමුහුණත්)
Why are **Contracts (ගිවිසුම් / සම්මත අතුරුමුහුණත්)** critical in Microkernel Architecture?  
*[Select TWO correct answers]*

- [ ] **A.** They define a standardized interface (methods, arguments, return types) that all plugins must implement to communicate with the core.
- [ ] **B.** They ensure that the Core System can interact with any plugin polymorphically without needing custom integration code for each new plugin.
- [ ] **C.** They legally bind plugin developers to transfer their personal real-estate assets to the company.
- [ ] **D.** They prevent plugins from executing more than 5 lines of code per day.
- [ ] **E.** They force all plugins to be written exclusively in machine assembly code.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Contracts (interfaces / abstract base classes) establish uniform rules of interaction, ensuring the Core can execute any plugin via polymorphic invocation regardless of who authored it.
* **Why C, D & E are INCORRECT:** Contracts are software interfaces (not real-estate deeds), do not limit lines of code, and support high-level languages.

---

### Question 5: Modifiability and Extensibility Ratings of Microkernel
According to Richards & Ford, why does the Microkernel Architecture receive exceptionally high ratings for **Extensibility (පුළුල් කිරීමේ හැකියාව)** and **Modifiability (වෙනස් කිරීමේ හැකියාව)**?  
*[Select TWO correct answers]*

- [ ] **A.** New features and custom capabilities can be added or updated as isolated plugins without modifying or recompiling the Core System.
- [ ] **B.** If a single customer requires specialized business logic, a custom plugin can be deployed for that client without risking regressions in the shared core.
- [ ] **C.** It completely eliminates the need for software to run on a computer CPU.
- [ ] **D.** It guarantees that plugins will never encounter software bugs or syntax errors.
- [ ] **E.** It allows software to run without any source code.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The primary virtue of Microkernel is plug-and-play extensibility: new features are added as isolated plugins without touching the stable core, minimizing regression risks.
* **Why C, D & E are INCORRECT:** Software always needs CPUs and source code, and plugins can still contain logical bugs.

---

### Question 6: Monolithic vs. Distributed Classification of Microkernel
Why is the classic Microkernel Architecture categorized primarily as a **Monolithic Architectural Style** rather than a Distributed Style?  
*[Select TWO correct answers]*

- [ ] **A.** In its standard implementation, the Core System and its Plug-in components are loaded and executed within the **same single application process / runtime boundary**.
- [ ] **B.** Communication between the Core and Plug-ins typically occurs via fast, direct **in-memory function/method calls**, not remote network protocols.
- [ ] **C.** Microkernel architecture is strictly banned from being run on any networked computer.
- [ ] **D.** It requires all plugins to be carved into physical marble stone slabs.
- [ ] **E.** It cannot run if more than one user logs into the operating system.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Traditional microkernels (e.g., Eclipse, browser extensions, desktop accounting plugins) run within a single OS process using in-memory method invocations, making them a Monolithic style. (Remote plugins exist as an advanced hybrid, but the classic style is in-process).
* **Why C, D & E are INCORRECT:** Microkernels run on networked computers; marble stone is ridiculous; and they readily support multi-user operations.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Communication Mechanisms Between Core and Plug-ins
How can the Core System and Plug-in components communicate with each other?  
*[Select THREE correct answers]*

- [ ] **A.** **Point-to-Point In-Memory Method Calls (සෘජු ක්‍රමවේද ඇමතුම්):** Direct object reference invocation implementing a shared interface (e.g., Java interface polymorphism).
- [ ] **B.** **Pipes / Streams (නල සහ ධාරා):** Standard I/O byte streams passing data payloads between processes.
- [ ] **C.** **Local Messaging / In-Memory Event Bus (දේශීය පණිවිඩ හුවමාරුව):** Asynchronously publishing domain events onto an in-process event dispatcher that registered plugins subscribe to.
- [ ] **D.** Sending paper handwritten letters via government postal mail trucks.
- [ ] **E.** Using smoke signals generated by lighting computer keyboards on fire.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Point-to-point interface calls, pipes/streams, and local in-memory event buses are standard communication mechanisms in microkernel implementations.
* **Why D & E are INCORRECT:** Postal letters and burning keyboards are absurd physical disruptions.

---

### Question 8: Plug-in Discovery Mechanisms (ප්ලගීන සොයාගැනීමේ ක්‍රමවේද)
How does a Core System dynamically discover which plugins are installed on the local system at runtime?  
*[Select THREE correct answers]*

- [ ] **A.** **File System Directory Scanning (ගොනු පද්ධති පරිලෝකනය):** Scanning a dedicated `/plugins` directory on startup for valid `.jar`, `.dll`, or `.so` files implementing the plugin manifest.
- [ ] **B.** **Configuration Files / Manifests (වින්‍යාස ගොනු):** Reading an XML, JSON, or YAML configuration file that explicitly lists the fully qualified class names of registered plugins.
- [ ] **C.** **Dependency Injection / Service Loaders (සේවා පැටවුම් යාන්ත්‍රණ):** Using reflection mechanisms like Java's `ServiceLoader` or Spring's component scanning to discover implementations at runtime.
- [ ] **D.** Asking the company receptionist to shout plugin names in the hallway.
- [ ] **E.** Calling a random telephone number from the local phonebook.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Directory scanning, configuration manifests, and dynamic ServiceLoader reflection are standard runtime plugin discovery techniques.
* **Why D & E are INCORRECT:** Shouting in hallways and telephone calls are human actions unrelated to automated software discovery.

---

### Question 9: Architectural Weaknesses of the Microkernel Style
Despite its tremendous extensibility, what are the inherent **Architectural Weaknesses and Risks** of the Microkernel style?  
*[Select TWO correct answers]*

- [ ] **A.** **Scalability Limitations:** Because it is traditionally a single-process monolithic application, scaling the entire system requires replicating the entire core and all loaded plugins together.
- [ ] **B.** **Contract Fragility / Core Evolution Complexity:** Modifying the Core-Plugin contract interface later can break all third-party plugins in the ecosystem, requiring careful versioning.
- [ ] **C.** Microkernel architecture is completely incapable of performing any mathematical multiplication.
- [ ] **D.** It forces all software developers to rewrite the Linux kernel from scratch every morning.
- [ ] **E.** It is impossible to write unit tests for any microkernel plugin.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Monolithic microkernels scale as a single unit (poor fine-grained scalability), and altering core plugin contracts risks breaking existing plugins (contract fragility).
* **Why C, D & E are INCORRECT:** It executes math normally, does not rewrite OS kernels, and plugins are highly isolated and testable.

---

### Question 10: Layered vs. Modular Monolith vs. Microkernel Comparison
Match each monolithic architectural style with its defining operational characteristic:
1. **Layered Architecture**
2. **Modular Monolith**
3. **Microkernel Architecture**

Which set of associations is **CORRECT**?  
*[Select TWO correct answers]*

- [ ] **A.** **Layered Architecture** excels at technical separation of concerns with low initial cost, but exhibits low agility when business workflows change.
- [ ] **B.** **Microkernel Architecture** excels at isolating variable, customer-specific feature sets around a stable invariant core via standardized contracts.
- [ ] **C.** **Modular Monolith** organizes code around domain bounded contexts while retaining single-quantum deployment and transactional simplicity.
- [ ] **D.** Layered Architecture is exclusively used for building nuclear missile guidance systems.
- [ ] **E.** Microkernel Architecture requires all code to be written without any interfaces.

**ANSWER:** A, B (Note: C is also completely true; A, B, and C all accurately describe the comparative traits!)

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Layered = technical separation/low cost; Microkernel = stable core + swappable feature plugins; Modular Monolith = domain bounded contexts + single deployment simplicity.
* **Why D & E are INCORRECT:** Layered architecture is general-purpose, and Microkernel relies extensively on interfaces (contracts).

---

### Question 11: Remote Plug-ins (Distributed Microkernel Hybrid)
In advanced architectures, a Microkernel can support **Remote Plug-ins** hosted on separate servers communicating via REST, gRPC, or messaging.  
What trade-off does introducing Remote Plug-ins create?  
*[Select TWO correct answers]*

- [ ] **A.** It allows independent deployment, isolated scaling, and fault isolation for heavy plugins (e.g., a plugin crash cannot crash the core process).
- [ ] **B.** It introduces distributed system complexity, network latency, serialization overhead, and the Fallacies of Distributed Computing into a previously simple monolithic architecture.
- [ ] **C.** It makes the entire internet shut down permanently.
- [ ] **D.** Remote plugins are guaranteed to execute with zero network latency.
- [ ] **E.** Remote plugins eliminate the need for any communication protocols.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Remote plugins enable independent deployment and process isolation, but at the cost of distributed complexity, network latency, and remote failure handling.
* **Why C, D & E are INCORRECT:** The internet does not shut down; latency is never zero; and protocols (REST/gRPC) are mandatory.

---

### Question 12: Overall Ratings Comparison Matrix for Monolithic Styles
Comparing the three monolithic styles based on Richards & Ford's characteristic ratings:
* **Deployability:** Which monolithic style offers the highest deployability for adding new features without redeploying the core?  
*[Select ONE correct answer]*

- [ ] **A.** Microkernel Architecture (due to hot-pluggable, swappable plugin components)
- [ ] **B.** Standard 4-Tier Layered Architecture
- [ ] **C.** The "Big Ball of Mud" Anti-pattern
- [ ] **D.** Spaghetti Code Architecture
- [ ] **E.** All monolithic architectures have mathematically identical deployability ratings

**ANSWER:** A

**Explanation (විග්‍රහය):**
* **Why A is CORRECT:** Microkernel achieves higher deployability than Layered or basic monoliths because individual plugins can be added, updated, or replaced at runtime (hot-deploy) without rebuilding or restarting the core application.
* **Why B, C, D & E are INCORRECT:** Layered monoliths require full application redeployments for any change; anti-patterns offer terrible deployability; and ratings vary significantly across styles.

---

### Question 13: The Plug-in Contract Versioning Strategy
When an architect maintains a public ecosystem of plugins, how should **Contract Versioning** be handled to prevent breaking third-party plugins?  
*[Select TWO correct answers]*

- [ ] **A.** Use semantic versioning (SemVer) and preserve backwards compatibility by creating new interface versions (e.g., `IPluginV2`) alongside older interfaces (`IPluginV1`).
- [ ] **B.** Implement adapter layers in the Core System to translate calls between new core capabilities and older legacy plugin contracts.
- [ ] **C.** Silently delete all deprecated interface methods on a Friday night without telling plugin authors.
- [ ] **D.** Force all plugin authors to pay a $1,000 fine whenever they update a plugin.
- [ ] **E.** Prohibit the Core System from ever adding new features.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Versioning contracts polymorphically (e.g., `IPluginV2`) and maintaining backward-compatible adapters in the core prevents breaking existing plugins when the platform evolves.
* **Why C, D & E are INCORRECT:** Deleting methods breaks plugins; fines are ridiculous; and platforms must be able to evolve.

---

### Question 14: Plugin Isolation and Sandboxing (ප්ලගීන හුදකලා කිරීම සහ ආරක්ෂාව)
What risk occurs if a poorly written plugin executes an infinite loop or runs out of memory (`OutOfMemoryError`) inside an in-process Microkernel, and how can the core mitigate it?  
*[Select TWO correct answers]*

- [ ] **A.** **Risk:** In a shared memory process, a memory leak or crash in a single plugin can bring down the entire Core System and all other plugins.
- [ ] **B.** **Mitigation:** The core can isolate plugins using separate classloaders, resource quotas, timeouts, or running untrusted plugins in isolated worker processes/sandboxes.
- [ ] **C.** **Risk:** The computer monitor will catch fire.
- [ ] **D.** **Mitigation:** Deleting the operating system kernel.
- [ ] **E.** There is zero risk because in-process plugins can never experience memory errors.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In a single-process microkernel, a rogue plugin can crash the entire application. Mitigations include sandboxing, memory quotas, timeouts, and separate child processes.
* **Why C, D & E are INCORRECT:** Monitors do not ignite; deleting OS kernels is destructive; and plugins frequently experience memory errors if unmanaged.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Medical Insurance Claim Rule Customization
A health insurance software vendor sells an insurance claims engine to 40 private hospital chains. 
* The **Core Claim Processing workflow** (patient identity check, hospital admission validation, fraud heuristic scan, payment ledger write) is 100% identical across all hospitals.
* However, each of the 40 hospitals has **unique, proprietary claim calculation rules and discount formulas** that change every quarter.
* The product is deployed as an on-premises desktop/server application at each hospital.

#### Question 15: Architectural Style Recommendation
Which architectural style is **MOST APPROPRIATE** for this product, and why?  
*[Select TWO correct answers]*

- [ ] **A.** **Microkernel Architecture (Plug-in Style):** The invariant claim processing steps reside in the Core System, while each hospital's customized discount rules are implemented as swappable Plug-in components.
- [ ] **B.** It allows the vendor to ship core bugfixes universally to all 40 hospitals while deploying individual customized rule plugins independently without touching the core.
- [ ] **C.** Deploy 40 separate distributed cloud microservices over public internet connections for each hospital's local desktop application.
- [ ] **D.** Write a massive 100,000-line `if-else` statement inside a single Java class containing hardcoded rules for all 40 hospitals.
- [ ] **E.** The vendor should refuse to sell software to hospitals.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Stable core workflow + variable, customer-specific customizations is the textbook definition of the Microkernel style. It isolates customer variability into swappable plugins without core changes.
* **Why C, D & E are INCORRECT:** Cloud microservices add unnecessary network latency and operational overhead to an on-prem desktop app; 100,000-line if-else blocks are unmaintainable; and refusing sales destroys business.

---

### Scenario 2: Graphic Design Software Filter Engine
A photo editing software company (similar to Adobe Photoshop) wants to allow external third-party developers to create and sell custom image filters (e.g., Sepia tone, Vintage blur, Oil painting effect).

The architecture team designs a `ImageFilterPlugin` interface:
```java
public interface ImageFilterPlugin {
    String getFilterName();
    ImageBuffer applyFilter(ImageBuffer input, FilterParameters params);
}
```
The application core provides the canvas UI, rendering pipeline, undo/redo history, and color palettes, while loading third-party filter files dynamically from a `/filters` folder.

#### Question 16: Architectural Design Analysis
Which architectural principles and mechanisms are illustrated here?  
*[Select TWO correct answers]*

- [ ] **A.** **Open-Closed Principle (OCP):** The photo editing platform is **open for extension** (anyone can create a new filter) but **closed for modification** (the core canvas and rendering engine remain untouched).
- [ ] **B.** **Contract-Based Extensibility:** The `ImageFilterPlugin` interface serves as the formal contract, allowing polymorphic execution of arbitrary third-party filter algorithms.
- [ ] **C.** The design exhibits high coupling because third-party developers must rewrite the entire Photoshop UI to add a filter.
- [ ] **D.** The design is flawed because plugins must always be written in HTML.
- [ ] **E.** The design converts the desktop photo editor into a distributed cryptocurrency miner.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** This is the quintessential realization of the Open-Closed Principle using Microkernel Architecture. The interface contract decouples filter creators from core canvas mechanics.
* **Why C, D & E are INCORRECT:** Coupling is low (not high); plugins use native code/Java (not HTML); and it has nothing to do with crypto mining.

---

### Scenario 3: Audio Production Digital Audio Workstation (DAW)
A digital audio software suite (like FL Studio or Ableton Live) allows musicians to record audio tracks. Musicians demand the ability to install VST / AU synthesizer instruments and effect plugins created by hundreds of music tech companies worldwide.

#### Question 17: Analyzing Microkernel Suitability
Why would a **Microkernel Architecture** succeed, whereas a **Distributed Microservices Architecture** would fail catastrophically for this real-time audio workstation?  
*[Select TWO correct answers]*

- [ ] **A.** Audio processing requires ultra-low **sub-millisecond in-memory latency (buffer sizes of 64–128 samples at 44.1kHz)**; in-process microkernel method calls execute in nanoseconds, whereas distributed REST/network calls introduce 10–50 ms of network latency, causing intolerable audio stutter and lag.
- [ ] **B.** Monolithic in-process memory sharing allows massive multi-gigabyte audio sample libraries to be accessed with zero network serialization overhead.
- [ ] **C.** Audio workstations are legally prohibited from executing in-memory code.
- [ ] **D.** Microservices run 1,000 times faster than in-memory method calls on desktop computers.
- [ ] **E.** Musicians only listen to music that has zero sound frequencies.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Real-time audio processing requires nanosecond in-memory memory access. Distributing VST plugins over network microservices would introduce fatal latency, buffer underruns, and audio glitches. Microkernel is the only viable choice.
* **Why C, D & E are INCORRECT:** In-memory code is standard; network calls are vastly *slower* than local memory; and music requires sound.

---

### Scenario 4: Export Engine in a Financial Analytics Platform
A financial analytics platform allows hedge fund managers to view stock charts. The core analytics engine produces standardized mathematical data tables. Users request the ability to export these reports into 15 different formats: PDF, Excel (`.xlsx`), CSV, JSON, XML, Tableau, LaTeX, Parquet, and proprietary Bloomberg terminal formats.

The team implements each exporter as a plug-in implementing `IReportExporter`.

#### Question 18: Architectural Assessment of the Exporter Design
What are the primary operational benefits of using the Microkernel pattern for this export subsystem?  
*[Select TWO correct answers]*

- [ ] **A.** Adding a new export format (e.g., Markdown) requires creating a single new plugin class without risking regressions in existing PDF or Excel exporters.
- [ ] **B.** The core reporting workflow remains clean, compact, and completely decoupled from external document-generation libraries (e.g., Apache POI, iText).
- [ ] **C.** The platform can no longer calculate any mathematical stock prices.
- [ ] **D.** Exporting files is guaranteed to take 48 hours per file.
- [ ] **E.** All financial data must be publicly broadcast to social media.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Decomposing exporters into plugins isolates third-party formatting dependencies (PDF/Excel libraries) from the core analytics engine and makes adding new formats safe and frictionless.
* **Why C, D & E are INCORRECT:** Math calculations continue normally; exports are fast; and private financial data is not leaked.

---

### Scenario 5: Migrating a Tax Plugin to a Remote Service
A tax software platform has 20 in-process plugins. One particular plugin, `CorporateGlobalTaxOptimizer`, performs massive Monte Carlo simulations requiring 32 GB of RAM and 100% of 16 CPU cores for 10 minutes, freezing the core desktop application for all other tasks.

The architect decides to extract *only this single plugin* into a **Remote Plug-in** hosted on an auto-scaling cloud cluster accessed via an asynchronous gRPC message channel.

#### Question 19: Architectural Trade-Off Analysis
What did the architect achieve, and what trade-offs were accepted?  
*[Select TWO correct answers]*

- [ ] **A.** **Gained:** Heavy compute workloads are offloaded from the client machine, preventing application freezes and granting the heavy calculation elastic cloud scaling.
- [ ] **B.** **Trade-off Accepted:** Network latency, cloud hosting bills, and the need to handle network timeouts and retries were introduced for that specific feature.
- [ ] **C.** The architect proved that in-memory plugins should be deleted from all software in the world.
- [ ] **D.** The application can now run without any computer power.
- [ ] **E.** Monte Carlo simulations can now run in zero nanoseconds.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Offloading a compute-heavy plugin to a remote service solves CPU/memory starvation for the client desktop, accepting the trade-offs of network latency and cloud infrastructure costs for that specific capability.
* **Why C, D & E are INCORRECT:** In-memory plugins remain ideal for light features; electricity is still required; and simulations still require compute time.

---

### Scenario 6: The Dilemma of Monolithic Style Selection
A healthcare startup is building an electronic medical record (EMR) application. 
* They have a small team of 5 engineers.
* Requirements will evolve rapidly as government health mandates change.
* Low hosting cost is critical.
* They want to avoid distributed complexity while keeping features modular.

#### Question 20: Selecting Between Layered, Modular Monolith, and Microkernel
Which architectural guidance is **MOST ACCURATE** for this startup?  
*[Select TWO correct answers]*

- [ ] **A.** A **Modular Monolith** is an exceptional choice if the system consists of distinct, cohesive healthcare subdomains (`Patients`, `Appointments`, `Prescriptions`, `Billing`) developed within a single manageable codebase.
- [ ] **B.** A **Microkernel Architecture** is ideal if the application centers on a core medical record with variable, pluggable specialty clinic modules (e.g., `DentalPlugin`, `CardiologyPlugin`, `OptometryPlugin`).
- [ ] **C.** A standard 4-tier Layered Architecture is the only architecture permitted by healthcare laws.
- [ ] **D.** The startup must immediately build 40 distributed microservices across three cloud providers.
- [ ] **E.** All monolithic architectures are completely obsolete and should never be used in modern engineering.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Both Modular Monolith (domain-partitioned workflows) and Microkernel (core + specialty clinic plugins) provide high modularity, low operational complexity, and low hosting costs for small teams.
* **Why C, D & E are INCORRECT:** Layered is not legally mandated; 40 microservices would bankrupt the startup with operational overhead; and monoliths remain industry mainstays.
