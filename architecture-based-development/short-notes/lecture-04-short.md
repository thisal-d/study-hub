# SE3100: Architecture Based Development
## Lecture 04: Monolithic Architectural Styles — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Explain what an Architectural Style (ගෘහ නිර්මාණ විලාසය)** represents and **differentiate an architectural style from an architectural pattern**.
* **Analyze the structure, principles, and trade-offs of the three primary Monolithic Architectural Styles**:
  1. **Layered Architecture (ස්ථරගත ගෘහ නිර්මාණ ශිල්පය)**
  2. **Modular Monolith Architecture (මොඩියුලර් ඒකශිලා ගෘහ නිර්මාණ ශිල්පය)**
  3. **Microkernel / Plug-in Architecture (ප්ලගීන / මයික්‍රෝකර්නල් ගෘහ නිර්මාණ ශිල්පය)**
* **Understand critical concepts**: Closed vs. Open Layers, Layers of Isolation, and the **Architecture Sinkhole Anti-pattern**.
* **Evaluate and compare monolithic styles** using Richards & Ford's architectural characteristics rating matrix to select the right style for real-world business constraints.

---

## 2. What is an Architectural Style? (ගෘහ නිර්මාණ විලාසයක් යනු කුමක්ද?)

An **Architectural Style (ගෘහ නිර්මාණ විලාසය)** describes the overarching, macro-level structural topology and default characteristics of a software system. It governs:
1. **Component Topology (සංරචක ව්‍යුහය):** How components and dependencies are arranged.
2. **Physical Architecture (භෞතික ව්‍යුහය):** Whether the system is monolithic or distributed.
3. **Deployment (ස්ථාපන ක්‍රමය):** How deployment artifacts are packaged and deployed.
4. **Communication Style (සන්නිවේදන රටාව):** Whether calls are in-memory method calls or remote network protocols.
5. **Data Topology (දත්ත සංවිධානය):** Whether databases are monolithic, shared, or distributed.

### Architectural Style vs. Architectural Pattern Table

| Concept | Scope & Definition | Examples | Simple Real-World Analogy |
| :--- | :--- | :--- | :--- |
| **Architectural Style (ගෘහ නිර්මාණ විලාසය)** | Defines the macro-level organizational shape and structural topology of the entire system. | **Layered**, **Modular Monolith**, **Microkernel**, **Microservices**, **Event-Driven**. | Deciding whether a residential building is a **Single-Family House**, a **Duplex**, or a **Skyscraper**. |
| **Architectural Pattern (ගෘහ නිර්මාණ රටාව)** | A specialized, reusable design solution addressing a localized problem within an architectural style. | **CQRS**, **Circuit Breaker**, **Saga Pattern**, **Adapter**, **Active Record**. | Installing an **Automated Fire Sprinkler System** or an **Elevator** inside the building. |

> 🔑 **Rule:** Architectural patterns are applied *inside* an architectural style. An architectural style on its own is the macro-structure!

---

## 3. Why Choose a Monolithic Architecture? (ඒකශිලා ව්‍යුහයක් තෝරාගන්නේ ඇයි?)

Architectural styles are divided into **Monolithic** (single deployment boundary, 1 architectural quantum) and **Distributed** (multiple deployment units communicating across networks).

### The Strategic Advantages of a Monolith:
* **Fewer Deployment Units:** A single artifact (e.g., a `.jar`, `.war`, or container) deployed cleanly to production.
* **In-Memory Performance:** Internal calls occur via local RAM function calls (measured in **nanoseconds**) with zero network serialization overhead.
* **Avoids the 8 Fallacies of Distributed Computing:** Zero network packet drops, zero remote network latency, and no complex cluster orchestration.
* **Transactional Simplicity:** Seamless local **ACID database transactions** without needing distributed Sagas or eventual consistency.
* **Lower Overall Cost:** Minimal cloud infrastructure bills and straightforward local development debugging.

> ⚠️ **Key Truth:** A monolith is **not necessarily poor code**. A well-architected monolith with strict internal boundaries (e.g., a Modular Monolith or Microkernel) is an elite, highly maintainable architecture!

---

## 4. Layered Architecture (ස්ථරගත ගෘහ නිර්මාණ ශිල්පය)

* The most common architectural style in enterprise IT, also known as the **N-Tier Architecture**.
* It is **Technically Partitioned (තාක්ෂණික පාදක බෙදීම)**: components are grouped into horizontal layers based on their technical responsibility.

```
┌─────────────────────────────────────────────────────────────┐
│                 PRESENTATION LAYER (UI / API)               │
├─────────────────────────────────────────────────────────────┤
│                 BUSINESS LAYER (Domain Rules)               │
├─────────────────────────────────────────────────────────────┤
│                 PERSISTENCE LAYER (Data Access)             │
├─────────────────────────────────────────────────────────────┤
│                 DATABASE LAYER (SQL Storage)                │
└─────────────────────────────────────────────────────────────┘
```

### The Four Standard Layers Table

| Layer (ස්ථරය) | Core Responsibilities (වගකීම්) | Typical Technologies & Artifacts |
| :--- | :--- | :--- |
| **1. Presentation Layer (ඉදිරිපත් කිරීමේ ස්ථරය)** | Handling user interactions, web requests, HTML/JSON rendering, input capture. | React, Angular, Spring MVC Controllers, ASP.NET Web API. |
| **2. Business Layer (ව්‍යාපාරික ස්ථරය)** | Enforcing business rules, workflow coordination, validations, and domain calculations. | Domain Services, Pricing Engines, Eligibility Evaluators. |
| **3. Persistence Layer (දත්ත පැවතුම් ස්ථරය)** | Managing database connectivity, object-relational mapping (ORM), and SQL query execution. | Hibernate, JPA Repositories, Entity Framework DAOs. |
| **4. Database Layer (දත්ත සමුදා ස්ථරය)** | Physical persistent storage of structured records and relational tables. | PostgreSQL, MySQL, Oracle, Microsoft SQL Server. |

---

## 5. Closed Layers vs. Open Layers (සංවෘත සහ විවෘත ස්ථර)

```
        CLOSED LAYER (Strict Step-by-Step)               OPEN LAYER (Bypass Allowed)
        ┌────────────────────────────────┐            ┌────────────────────────────────┐
        │       Presentation Layer       │            │       Presentation Layer       │
        └───────────────┬────────────────┘            └───────┬────────────────┬───────┘
                        ▼ (Must stop here)                    │ (Bypass)       ▼ (Normal)
        ┌────────────────────────────────┐                    │        ┌───────────────┐
        │         Business Layer         │                    │        │Services Layer │ (OPEN)
        └───────────────┬────────────────┘                    │        └───────┬───────┘
                        ▼                                     ▼                ▼
        ┌────────────────────────────────┐            ┌────────────────────────────────┐
        │       Persistence Layer        │            │       Persistence Layer        │
        └────────────────────────────────┘            └────────────────────────────────┘
```

### Closed Layers & "Layers of Isolation" (හුදකලා කිරීමේ ස්ථර)
* **Closed Layer (සංවෘත ස්ථරය):** A request moving downwards cannot skip this layer.
* **Layers of Isolation:** Changes made within one layer generally **do not affect other non-adjacent layers**, provided contracts remain stable.
  * *Example:* Changing the database from Oracle to PostgreSQL requires changing code only in the **Persistence Layer**; the **Presentation Layer** knows nothing about SQL and remains untouched.

### Open Layers (විවෘත ස්ථර)
* **Open Layer (විවෘත ස්ථරය):** A layer that is permitted to be bypassed. A request from the layer above can skip the open layer and call the layer beneath it directly.
* *When to use:* Used when adding an optional layer (e.g., a shared `Services` or `Security` utility layer) that should only be invoked when special processing is required.
* *Trade-off:* Bypassing layers increases coupling and weakens isolation, but eliminates unnecessary boilerplate.

---

## 6. The Architecture Sinkhole Anti-Pattern (ගෘහ නිර්මාණ ආගාධ විරෝධී රටාව)

* **Definition:** Occurs when incoming requests pass straight through multiple layers with **little or no business logic performed** at intermediate layers (pure passthrough delegation).
* **Example Scenario:** A user requests their basic street address:
  1. Presentation calls `CustomerService.getAddress(id)`.
  2. `CustomerService` does zero processing; it simply calls `CustomerDAO.getAddress(id)`.
  3. `CustomerDAO` fetches the record and passes it back up.
* **The Penalty:** Creates unnecessary memory allocations, stack frames, boilerplate DTO classes, and latency without adding any value.
* **Architectural Guidance:**
  * If **$< 20\%$** of requests are passthroughs: Normal and acceptable.
  * If **$> 80\%$** of requests are passthroughs: The application has fallen into the **Sinkhole Anti-pattern**.
  * *Remediation:* Make intermediate layers **Open**, allowing read queries to bypass the business layer, or simplify the application to a 2-tier design.

---

## 7. Modular Monolith Architecture Style (මොඩියුලර් ඒකශිලා ගෘහ නිර්මාණ ශිල්පය)

A **Modular Monolith** is a single deployment unit that is **Domain Partitioned (ක්ෂේත්‍ර පාදක බෙදීම)** internally.
* Instead of organizing top-level code into UI, Business, and Data folders, it organizes code into **business domain modules** (e.g., `Order`, `Inventory`, `Payment`, `Shipping`).
* Technical layers still exist, but they are encapsulated **inside each domain module**.

### Monolithic Structure vs. Modular Structure Table

| Aspect | Monolithic Structure (තනි ගබඩා ව්‍යුහය) | Modular Structure (මොඩියුලර් ව්‍යුහය) |
| :--- | :--- | :--- |
| **Source Code Organization** | All domain modules reside within a single codebase/repository in separate high-level directories. | Modules are built as separate, self-contained artifacts (e.g., separate JAR / DLL packages). |
| **Primary Advantage** | Extremely simple to build, test, and deploy locally. | Strongest physical boundary enforcement; impossible to bypass module boundaries accidentally. |
| **Cross-Module Coupling** | Higher risk that developers casually import private internal classes of another module. | Lower risk; dependencies must be explicitly declared in build manifests (`pom.xml` / `.csproj`). |
| **Governance Required** | Requires strict discipline and architectural fitness linters (e.g., ArchUnit). | Structural boundaries are enforced automatically by the compiler. |
| **Best Suited For** | Small-to-medium teams with frequent cross-domain collaboration. | Larger engineering departments with specialized domain squads. |

### Database Topologies in a Modular Monolith
A Modular Monolith can utilize two database strategies:
1. **Shared Database with Logical Separation (හවුල් දත්ත සමුදාය):** All modules connect to one physical database instance, but each module strictly owns its dedicated tables/schemas. Cross-module SQL joins are prohibited.
2. **Separate Databases per Module (වෙනම දත්ත සමුදායන්):** Each module has a completely separate database, providing absolute data isolation and paving a seamless migration path to microservices.

---

## 8. When to Use (and Avoid) Layered vs. Modular Monolith

| Architectural Style | When to Choose (සුදුසු අවස්ථා) | When to Avoid (නුසුදුසු අවස්ථා) |
| :--- | :--- | :--- |
| **Layered Architecture** | • Small, simple applications and websites.<br>• Tight budgets and strict launch deadlines.<br>• Unclear long-term business domain model.<br>• Teams structured into technical silos (UI devs, DBAs). | • Complex domains with frequent business workflow updates.<br>• Systems requiring high elasticity and independent team deployments.<br>• Applications suffering heavily from the Sinkhole anti-pattern. |
| **Modular Monolith** | • Complex business logic adhering to Domain-Driven Design (DDD).<br>• Fast speed-to-market with small teams (4–15 engineers).<br>• Desiring microservice-level domain modularity without distributed operational overhead.<br>• Ideal stepping stone before migrating to microservices. | • Extreme asymmetric scaling requirements (e.g., 1 feature needs 1,000 servers).<br>• Systems where changes are primarily technical (e.g., swapping UI frameworks weekly). |

---

## 9. Microkernel Architecture Style (Plug-in Architecture)

The **Microkernel Architecture (ප්ලගීන ගෘහ නිර්මාණ ශිල්පය)** divides application logic into two parts:
1. **Core System (මූලික පද්ධතිය):** Contains the minimal functionality required to run the system, basic workflows, and plugin lifecycle management.
2. **Plug-in Components (ප්ලගීන සංරචක):** Standalone, modular components containing specialized, customizable, or volatile business logic that extends the core.

```
                         ┌──────────────────────────────┐
                         │         CORE SYSTEM          │
                         │ (Minimal Invariant Workflow) │
                         └──────────────┬───────────────┘
                                        │ (Plug-in Registry)
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  ┌──────────────┐               ┌──────────────┐               ┌──────────────┐
  │  Plug-in A   │               │  Plug-in B   │               │  Plug-in C   │
  │ (Custom Tax) │               │ (Custom PDF) │               │(Custom Fraud)│
  └──────────────┘               └──────────────┘               └──────────────┘
```

### Core Concepts of Microkernel:
* **Plug-in Independence:** Plugins should be self-contained and independent of other plugins; they attach to the core through well-defined contracts.
* **Plug-in Registry (ප්ලගීන ලේඛනාගාරය):** The core manages an internal registry containing plugin names, capabilities, contracts, and communication paths.
* **Contracts (ගිවිසුම්):** Standardized interfaces (methods, input/output schemas) that all plugins implement, allowing the core to execute plugins polymorphically.
* **Deployment Modes:**
  * **Compile-Based Plugins:** Packaged at build time (e.g., Spring DI beans).
  * **Runtime-Based Plugins:** Hot-loaded dynamically while the application is running without downtime (e.g., scanning a `/plugins` folder for `.jar` files).
  * **Remote Plugins (Hybrid):** Hosted as external services accessed via REST/gRPC (introduces distributed complexity).

> 💡 **Real-World Examples:** Eclipse IDE, Visual Studio Code, Jenkins CI/CD, Jira, Google Chrome browser extensions, and operating system kernels (Minix).

---

## 10. Monolithic Styles Characteristic Ratings Matrix (Richards & Ford)

| Architectural Characteristic | Layered Architecture | Modular Monolith | Microkernel Architecture |
| :--- | :---: | :---: | :---: |
| **Overall Cost (පිරිවැය)** | **$** (Low) | **$** (Low) | **$** (Low) |
| **Partitioning Type** | Technical | Domain | Technical and/or Domain |
| **Number of Quanta** | 1 | 1 | 1 |
| **Simplicity (සරල බව)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Modularity (මොඩියුලර් බව)** | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Maintainability (නඩත්තු කිරීමේ පහසුව)** | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Testability (පරීක්ෂා කිරීමේ පහසුව)** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Deployability (ස්ථාපන පහසුව)** | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Evolvability (විකාශනය වීමේ හැකියාව)** | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Responsiveness (වේගවත් බව)** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Scalability (පරිමාණකරණය)** | ⭐ | ⭐ | ⭐ |
| **Elasticity (ප්‍රත්‍යාස්ථතාව)** | ⭐ | ⭐ | ⭐ |
| **Fault Tolerance (දෝෂ ඉවසීමේ හැකියාව)** | ⭐ | ⭐ | ⭐ |

---

## 11. Final Monolithic Comparison Table

| Style | Defining Topology | Top Benefit | Major Trade-off / Risk | Ideal Application |
| :--- | :--- | :--- | :--- | :--- |
| **Layered** | Horizontal technical tiers. | Familiar, lowest initial development cost, simple to understand. | Low agility, poor deployability, sinkhole antipattern. | Small apps, websites, CRUD prototypes with tight deadlines. |
| **Modular Monolith** | Single deployment unit with domain-partitioned modules. | Clean domain boundaries (DDD), avoids distributed complexity, easy team ownership. | Hard to scale individual modules independently; single deployment bottleneck. | Growing enterprise products, startups validating domain boundaries before microservices. |
| **Microkernel** | Stable minimal core extended by swappable plug-in modules. | High extensibility, feature isolation, hot-deployability of custom features. | Poor fine-grained scaling; contract versioning complexity. | Packaged software products, developer tools (IDEs), customizable rule engines (tax, insurance). |

---

## 12. Quick Revision Summary Table (කෙටි පුනරීක්ෂණ සාරාංශ වගුව)

| Concept / Term | Summary Definition | Key Points to Remember for Exams |
| :--- | :--- | :--- |
| **Architectural Style** | Macro-level topology and default characteristics. | Governs component topology, deployment, data, and communication. Distinct from patterns! |
| **Architectural Pattern** | Localized design solution addressing a specific challenge. | Applied *inside* styles (e.g., CQRS applied inside a Microservices style). |
| **Layered Architecture** | Horizontal technical partitioning (Presentation, Business, Data). | High simplicity and low cost; suffers from poor agility and monolithic redeployment bottlenecks. |
| **Closed Layer** | Must process requests sequentially; cannot be bypassed. | Enables **Layers of Isolation** (changes inside one layer do not ripple to non-adjacent layers). |
| **Open Layer** | Permitted to be bypassed by requests from above. | Used for optional shared services to prevent unnecessary boilerplate and latency. |
| **Sinkhole Anti-pattern** | Requests pass through layers performing zero business logic. | Wastes CPU/RAM. If $>80\%$ of requests are passthroughs, open intermediate layers or simplify design. |
| **Modular Monolith** | Single deployment artifact domain-partitioned internally. | Retains in-memory speed and ACID transactions while isolating business subdomains (DDD). |
| **Microkernel Style** | Core System (minimal invariant logic) + Plug-in Components. | Moves volatility away from the core; plugins interact via **Contracts** managed by a **Registry**. |
| **Plugin Communication** | In-process method calls, pipes, or dynamic event bus. | Monolithic by nature (single process); remote plugins introduce distributed network fallacies. |
| **Monolith vs. Microservices** | 1 quantum vs. multiple quanta. | Start with a Modular Monolith to discover boundaries before prematurely jumping to microservices! |
