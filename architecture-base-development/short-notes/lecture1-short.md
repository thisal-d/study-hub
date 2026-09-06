# SE3100: Architecture Based Development
## Lecture 01: Introduction to Software Architecture — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Define software architecture (මෘදුකාංග ගෘහ නිර්මාණ ශිල්පය නිර්වචනය කිරීම)** clearly and understand its core purpose.
* **Distinguish between intentional (සැලසුම් සහගත) and accidental (අහඹු) architecture**, understanding that **every software system has an architecture**.
* **Explain how software architecture is developed and evolved** under both **Plan-driven (සැලසුම් මූලික)** and **Agile (කඩිසර / ක්‍රියාශීලී)** development approaches.
* **Identify the key factors that influence software architecture** and understand the **Architecture Business Cycle (ගෘහ නිර්මාණ ව්‍යාපාරික චක්‍රය)**.

---

## 2. What is Software? (මෘදුකාංගයක් යනු කුමක්ද?)

* **Software (මෘදුකාංගය)** is a collection of programs and data that enables a computer or computing system to perform a required task.
* It is engineered to **solve a specific problem** or **support a human or business activity**.
* At its core, software:
  1. **Receives inputs (ආදාන ලබා ගැනීම)**.
  2. **Processes information (තොරතුරු සැකසීම)**.
  3. **Maintains data (දත්ත කළමනාකරණය / ගබඩා කිරීම)**.
  4. **Produces outputs (ප්‍රතිදාන ලබා දීම)**.
* Software may operate **independently (ස්වාධීනව)** or as part of a **larger distributed system (විශාල පද්ධතියක කොටසක් ලෙස)**.

---

## 3. Software is More Than Source Code (මෘදුකාංගය යනු කේතයට වඩා වැඩි දෙයකි)

A complete, working software system consists of multiple interrelated parts, not just raw program code.

### System Elements Table

| Element (මූලික අංගය) | Description (විස්තරය) | Simple Example / Scenario (සරල උදාහරණය) |
| :--- | :--- | :--- |
| **Source Code & Executables (මූල කේත සහ ධාවනය කළ හැකි ගොනු)** | The written code (e.g., Java, Python, C#) and compiled binary files that execute on the CPU. | A compiled `.jar` file or `.exe` program that runs business logic. |
| **Data & Databases (දත්ත සහ දත්ත සමුදායන්)** | Structured and unstructured storage where application records, states, and user information persist. | PostgreSQL database storing user profiles and order histories. |
| **Configurations, Libraries & Frameworks (වින්‍යාසයන්, පුස්තකාල සහ රාමු)** | External packages and environment settings that provide shared functionality and system parameters. | Spring Boot framework and a `.env` file containing API keys. |
| **External Services (බාහිර සේවාවන්)** | Third-party cloud systems that handle specialized capabilities without custom development. | Stripe for processing credit card payments or Twilio for SMS alerts. |
| **Interfaces to Other Systems (අතුරුමුහුණත්)** | Protocols and communication endpoints that allow distinct applications to exchange data. | RESTful APIs or gRPC endpoints linking an e-commerce store with an inventory system. |
| **Deployment & Runtime Environments (ස්ථාපන සහ ධාවන පරිසරයන්)** | Operating systems, web servers, virtual machines, and containers hosting the application. | Docker containers running inside a Kubernetes cluster on AWS Cloud. |

> 💡 **Real-World Example:** Consider an **Uber application**. It is not just the code written by engineers; it depends on a **MySQL database** (for ride records), **Google Maps API** (an external service for routing), **Stripe API** (for payments), and **Docker containers running on AWS** (deployment runtime). All these parts must work seamlessly together as one unified system.

---

## 4. Why Does Software Become Complex? (මෘදුකාංග සංකීර්ණ වීමට හේතු)

As software grows, its **Complexity (සංකීර්ණත්වය)** increases naturally due to several factors:

* **Increasing Functionality (ක්‍රියාකාරීත්වය වැඩිවීම):** As more features are added, the system must handle more use cases.
* **More Users and Stakeholders (වැඩි පරිශීලකයන් සහ පාර්ශ්වකරුවන්):** Different groups have conflicting needs (e.g., end-users want speed; managers want detailed auditing).
* **More Modules, Components, and Services (සංරචක සහ සේවා ප්‍රමාණය වැඩිවීම):** Having more building blocks creates more touchpoints.
* **Relationships and Dependencies (සබඳතා සහ රඳාපැවැත්මවල්):** When component A depends on B, and B depends on C, a change in C can break A unexpectedly.
* **Integration with External Systems (බාහිර පද්ධති සමඟ ඒකාබද්ධ වීම):** Relying on third-party APIs, legacy mainframes, and partner platforms.
* **Quality Expectations (ගුණාත්මක අපේක්ෂාවන්):** High demands for 99.999% uptime, sub-second response times, and bulletproof security.
* **Changing Requirements and Technologies (වෙනස්වන අවශ්‍යතා සහ තාක්ෂණයන්):** Evolving business rules and new tech stacks.

> 🔑 **Critical Point:** Software difficulty does not come only from the **number of elements**, but primarily from **how those elements interact and depend on each other**.

---

## 5. Managing Complexity Through Software Architecture (සංකීර්ණත්වය කළමනාකරණය කිරීම)

Software complexity must be actively managed. If it is ignored, the system descends into an unmaintainable state called a **"Big Ball of Mud" (අවුල් ජාලයක්)**.

### Complexity Management Principles

| Principle (මූලධර්මය) | Explanation (පැහැදිලි කිරීම) | Real-World Scenario (ප්‍රායෝගික උදාහරණය) |
| :--- | :--- | :--- |
| **Dividing into Meaningful Parts (අර්ථවත් කොටස්වලට බෙදීම)** | Breaking a massive system into smaller, cohesive logical units or subsystems. | Splitting an online store into **Catalog**, **Cart**, **Payment**, and **Shipping** modules. |
| **Assigning Clear Responsibilities (පැහැදිලි වගකීම් පැවරීම)** | Ensuring each part does one specific job and does not duplicate work (**Single Responsibility**). | The **Payment Service** handles only credit card transactions and never writes shipping labels. |
| **Establishing Boundaries (සීමා මායිම් පිහිටුවීම)** | Isolating internal details so other components only access what is publicly exposed. | The **Cart Module** cannot directly read the database of the **User Module**; it must call a public API. |
| **Controlling Dependencies (පරායත්තතා පාලනය කිරීම)** | Restricting which parts can call or rely on other parts to prevent tangled code. | UI layers can call Business Logic, but Business Logic cannot directly call UI components. |
| **Defining Communication Rules (සන්නිවේදන ක්‍රම නිර්වචනය කිරීම)** | Setting standard communication protocols across components. | Deciding that all microservices will communicate via JSON over HTTPS or through RabbitMQ message queues. |
| **Applying Consistent Rules (ස්ථාවර නීති රීති ක්‍රියාත්මක කිරීම)** | Using standard design patterns, error handling conventions, and naming styles everywhere. | Requiring all modules to log system errors in a standardized JSON structure with timestamps. |

### The Need for Software Architecture
* **Software Architecture (මෘදුකාංග ගෘහ නිර්මාණ ශිල්පය)** provides the **high-level structure (ඉහළ මට්ටමේ ව්‍යුහය)** required to organize and control a complex system.
* It answers:
  1. What are the major parts of the system?
  2. What is each part responsible for?
  3. How are the parts connected, and which dependencies are permitted?
  4. Which quality attributes (performance, security, scalability) must the system satisfy?
  5. Which architectural decisions must remain uniform and consistent?
* ⚠️ **Vital Rule:** Architecture **does not eliminate complexity**; it **organizes complexity** so that humans can understand, develop, test, and evolve the system over time.

> 💡 **Real-World Example:** Imagine building a 100-story skyscraper. Without an architectural blueprint, bricklayers, plumbers, and electricians will work chaotically, resulting in collapsed walls and burst pipes. The blueprint organizes where structural pillars go, where plumbing shafts run, and which weight limits apply to each floor.

---

## 6. What is Software Architecture? — The Four Dimensions (Richards & Ford)

According to Mark Richards and Neal Ford (*Fundamentals of Software Architecture*), software architecture consists of **Four Dimensions (මාන හතරක්)**:

```
┌─────────────────────────────────────────────────────────────┐
│                    SOFTWARE ARCHITECTURE                    │
├──────────────────────────────┬──────────────────────────────┤
│ 1. Quality Attributes        │ 2. Logical Components        │
│    ("-ilities" / Qualities)  │    (Services / Domains)      │
├──────────────────────────────┼──────────────────────────────┤
│ 3. Architectural Style       │ 4. Architectural Decisions   │
│    (Overall Pattern/Shape)   │    (Rules and Constraints)   │
└──────────────────────────────┴──────────────────────────────┘
```

### The Four Dimensions Table

| Dimension (මානය) | Purpose (අරමුණ) | Examples (උදාහරණ) | Real-World Scenario (ප්‍රායෝගික අවස්ථාව) |
| :--- | :--- | :--- | :--- |
| **1. Quality Attributes / Architectural Characteristics (ගුණාත්මක ලක්ෂණ)** | Defines what capabilities the system must possess to succeed. Often called the **"-ilities"**. | **Performance (ක්‍රියාකාරීත්වය)**, **Scalability (පරිමාණකරණය)**, **Security (ආරක්ෂාව)**, **Availability (ලබාගත හැකි බව)**. | A banking system must guarantee 99.999% uptime (**Availability**) and sub-200ms transaction times (**Performance**). |
| **2. Logical Components (තාර්කික සංරචක)** | Breaks down system behavior into meaningful building blocks and sets responsibility boundaries. | **Domains (ක්ෂේත්‍ර)**, **Services (සේවාවන්)**, **Workflows (වැඩ ප්‍රවාහ)**, **Business Capabilities**. | An e-commerce platform divided into `ProductCatalog`, `OrderProcessing`, and `NotificationService`. |
| **3. Architectural Style (ගෘහ නිර්මාණ විලාසය)** | The overarching structural pattern used to organize the physical or logical system. | **Layered (ස්ථරගත)**, **Modular Monolith (මොඩියුලර් ඒකශිලා)**, **Microservices (ක්ෂුද්‍ර සේවා)**, **Event-Driven (සිදුවීම් පාදක)**. | Choosing a **Microservices Style** so independent developer teams can deploy services without coordination delays. |
| **4. Architectural Decisions (ගෘහ නිර්මාණ තීරණ)** | The strict rules, policies, and constraints that govern how the software is constructed. | **Data ownership rules**, **Allowed communication protocols**, **Access boundaries**, **Security policies**. | Declaring: *"No service may directly query another service's database; all cross-service data access must go through REST APIs."* |

### How the Dimensions Connect
To produce a cohesive software architecture:
1. **Understand the problem domain (ගැටළු ක්ෂේත්‍රය අවබෝධ කර ගැනීම):** What does the business do?
2. **Identify important Quality Attributes:** Which characteristics are critical for business success?
3. **Identify Logical Components:** What core functions are needed to run the system?
4. **Select an Architectural Style:** Pick a structure that supports the required qualities and components.
5. **Establish Architectural Decisions:** Define hard rules and constraints to guide engineers during construction.

> ⚠️ **Key Takeaway:** An **architectural style alone is NOT a complete architecture**. Saying *"We are using microservices"* describes only the style, not the quality attributes, components, or governance rules that make up the complete architecture!

---

## 7. A Relatable Analogy: Building a Two-Storey House (නිවාස සැලසුම් උපමාව)

To make these 4 dimensions crystal clear, compare software architecture to designing and constructing a modern two-storey home:

### House Construction vs. Software Architecture

| House Construction Concept | Software Architecture Equivalent | Real-Life Application & Decisions in House |
| :--- | :--- | :--- |
| **House Structure / Type (දෙමහල් නිවාස ව්‍යුහය)** | **Architectural Style (ගෘහ නිර්මාණ විලාසය)** | Deciding whether the home will be a single-story ranch, a duplex, or a two-storey detached home. |
| **Rooms & Spaces (කාමර සහ ඉඩකඩ)** | **Logical Components (තාර්කික සංරචක)** | **Ground Floor:** Living room, dining room, kitchen, guest bath.<br>**First Floor:** Master bedroom, kid's bedroom, attached bathrooms, study. |
| **Building Durability & Safety (කල්පැවැත්ම සහ ආරක්ෂාව)** | **Quality Attributes (ගුණාත්මක ලක්ෂණ)** | Flood resistance, structural earthquake resistance, natural lighting, and ventilation efficiency. |
| **Wiring & Plumbing Plans (විදුලි සහ ජල නල සැලසුම්)** | **Architectural Decisions (ගෘහ නිර්මාණ තීරණ)** | • **Elevate Ground Floor:** Raised 3 feet above ground level for flood safety.<br>• **Group Wet Areas:** Stacking bathrooms directly above kitchen to minimize pipe lengths.<br>• **Central Distribution Panel:** Grouping circuit breakers in one safe, accessible location.<br>• **Drainage Slope:** Setting proper gradient so wastewater flows smoothly into mains. |

> 💡 **Real-World Example:** If an architect fails to separate wet areas (bathrooms/kitchens) from the electrical main distribution panel, water leaks could cause electrical fires. In software, if you fail to establish proper architectural decisions, a memory leak in a reporting module can crash the entire payment engine.

---

## 8. Architecture vs. Detailed Design (ගෘහ නිර්මාණ ශිල්පය සහ සවිස්තර නිර්මාණකරණය)

* Architecture and Detailed Design are **not completely separate activities**; they exist along a **continuous spectrum / continuum (අඛණ්ඩ පරාසයක්)**.
* There is no rigid wall between them, but decisions become **Architectural** when they possess certain characteristics.

### How to Recognize an Architectural Decision

A decision is **Architectural** when it:
1. Is **Strategic rather than Tactical (උපායමාර්ගික වීම):** Affects the long-term vision of the entire product.
2. Is **Difficult or Expensive to Change (වෙනස් කිරීම ඉතා අපහසු හෝ අධික වියදම් සහිත වීම):** Reversing it later requires massive rewriting.
3. Is **Long-Lasting (දිගුකාලීන බලපෑමක් පැවතීම):** Persists across many product releases.
4. **Affects Multiple Parts (පද්ධතියේ කොටස් කිහිපයකට බලපෑම):** Impacts multiple modules, services, or cross-cutting concerns.
5. Involves **Significant Trade-Offs (සැලකිය යුතු අන්‍යෝන්‍ය කැපකිරීම් සහිත වීම):** Improves one quality while compromising another.

### Comparison Table: Architecture vs. Detailed Design

| Comparison Criterion | Software Architecture (මෘදුකාංග ගෘහ නිර්මාණ ශිල්පය) | Detailed Design (සවිස්තරාත්මක නිර්මාණකරණය) |
| :--- | :--- | :--- |
| **Focus Level (අවධානය යොමු කරන මට්ටම)** | **High-level structure (ඉහළ මට්ටමේ ව්‍යුහය):** Overall system organization and global rules. | **Low-level implementation (පහළ මට්ටමේ ක්‍රියාත්මක කිරීම):** Internal class structures, methods, algorithms. |
| **Cost of Change (වෙනස් කිරීමේ පිරිවැය)** | **Extremely high and costly (ඉතා අධිකයි):** Changing databases or styles can take months. | **Relatively low and local (සාපේක්ෂව අඩුයි):** Refactoring an algorithm can take a few hours. |
| **Scope of Impact (බලපෑම් පරාසය)** | **System-wide (පද්ධතිය පුරා):** Affects all teams and components. | **Component-local (එක් සංරචකයකට සීමිත):** Affects only a single module or file. |
| **Typical Examples (සාමාන්‍ය උදාහරණ)** | • Choosing between Relational SQL vs. NoSQL.<br>• Selecting Microservices vs. Modular Monolith.<br>• Setting zero-trust security authentication models. | • Choosing between a `HashMap` vs. `TreeMap`.<br>• Applying the Strategy Pattern inside a tax calculator.<br>• Formatting UI buttons and screen padding. |

> 💡 **Real-World Example:** Deciding that all user records and transactions will be stored in an **Event-Sourced Cassandra database** across 3 data centers is an **Architectural Decision** (months of work to replace). Deciding to sort transaction records using **QuickSort vs. MergeSort** inside the transaction history widget is a **Design Decision** (can be modified in 30 minutes without affecting anything else).

---

## 9. Architecture Depends on Context (සන්දර්භය මත පදනම් වීම)

There is no universal, copy-paste architecture that fits every situation. Architectural choices depend heavily on the **Context (සන්දර්භය)**:

* **Business Needs (ව්‍යාපාරික අවශ්‍යතා):** Is the company trying to test a quick MVP or build an enterprise platform for 10 million users?
* **Available Technologies (පවතින තාක්ෂණයන්):** What cloud providers, frameworks, and tools are available and mature?
* **Cost & Budget (පිරිවැය සහ අයවැය):** How much capital is available for infrastructure, licensing, and tools?
* **Time to Market (කාලසීමාව):** Is there an urgent hard deadline to launch before a competitor?
* **Development Skills (සංවර්ධන කණ්ඩායමේ කුසලතා):** What programming languages and paradigms does the team actually master?
* **Operational Environment (ක්‍රියාත්මක පරිසරය):** On-premise servers, multi-cloud, or edge devices (e.g., IoT)?
* **Existing / Legacy Systems (පවතින පැරණි පද්ධති):** Must the new software integrate with an old banking mainframe?
* **Organizational Constraints (ආයතනික බාධක):** Regulatory compliance laws (e.g., GDPR, HIPAA, Central Bank financial regulations).

> ⚠️ **Key Rule:** An architecture that is perfect for **Netflix (global video streaming)** would be completely inappropriate, over-engineered, and disastrous for a **local clinic appointment booking system**!

---

## 10. Architecture is Based on Trade-Offs & "The Least-Worst Architecture"

In software engineering, there are **no perfect solutions—only trade-offs (අන්‍යෝන්‍ය හුවමාරු / කැපකිරීම්)**. When you increase one positive quality, another quality usually suffers.

### Common Architectural Trade-Offs Table

| Trade-Off Pair (කැපකිරීමේ යුගලය) | When You Increase (A) | The Negative Impact on (B) | Real-World Scenario (ප්‍රායෝගික අවස්ථාව) |
| :--- | :--- | :--- | :--- |
| **Security vs. Usability (ආරක්ෂාව සහ භාවිතයේ පහසුව)** | Enforcing Multi-Factor Authentication (MFA), biometric scans, and short token expiration. | **Usability decreases:** Users get frustrated having to log in repeatedly and enter OTP codes. | Banking apps that force logout every 60 seconds keep funds safe, but frustrate users checking rapid balances. |
| **Consistency vs. Availability (දත්තවල නිවැරදි බව සහ ලබාගත හැකි බව)** | Enforcing strict distributed data locks so all replicas show identical balances (CAP theorem). | **Availability decreases:** If one network partition drops, the system must reject transactions to avoid dirty data. | ATMs refusing cash withdrawals when network connection to the central bank branch is unstable. |
| **Flexibility vs. Complexity (නම්‍යශීලී බව සහ සංකීර්ණත්වය)** | Making the system highly configurable with dynamic plugins and generic abstraction layers. | **Complexity increases:** The codebase becomes difficult to trace, debug, test, and understand. | An ERP platform designed with infinite custom script hooks that becomes impossible for junior developers to debug. |
| **Component Isolation vs. Communication Overhead (හුදකලා බව සහ සන්නිවේදන ප්‍රමාදය)** | Breaking functionality into 50 microservices for independent deployments. | **Latency & Overhead increase:** Microservices must send network requests (JSON/gRPC), creating network delays. | E-commerce checkout slowing down because one checkout click requires 15 HTTP calls between microservices. |
| **Fast Delivery vs. Technical Debt (වේගවත් නිමාව සහ තාක්ෂණික ණය)** | Cutting corners and hardcoding logic to hit a strict launch deadline next week. | **Technical Debt accumulates:** The code becomes brittle and fragile, making future changes painful and expensive. | A startup releasing an unindexed database query to launch on Friday, which crashes the server under Monday's traffic. |

### The "Least-Worst Architecture" Concept (අවම අයහපත් ගෘහ නිර්මාණ ශිල්පය)
* Because every architectural choice has downsides, **there is no single "best" architecture**.
* Professional software architects do not search for a flawless utopian architecture; instead, they choose the **Least-Worst Architecture (අවම අවාසිදායක / වඩාත්ම ගැළපෙන ගෘහ නිර්මාණ ශිල්පය)**—the one whose trade-offs the business can safely afford.

---

## 11. Does All Software Have an Architecture? (සෑම මෘදුකාංගයකටම ගෘහ නිර්මාණ ශිල්පයක් තිබේද?)

### The Short Answer: **YES!**
Every software system has an architecture, whether anyone deliberately planned it or not. Every system contains:
1. Some form of physical or logical structure.
2. Elements with specific responsibilities.
3. Relationships and communication paths among elements.
4. Dependencies.
5. Data flows.
6. Rules (whether written down or hidden implicitly in the code).

The crucial question is **not whether a system has an architecture**, but:
> **Has the architecture been consciously understood, managed, and planned?**

---

## 12. Intentional vs. Accidental Architecture (සැලසුම් සහගත සහ අහඹු ගෘහ නිර්මාණ ශිල්පය)

### Comparison Table: Intentional vs. Accidental

| Feature / Aspect | Intentional Architecture (සැලසුම් සහගත ගෘහ නිර්මාණ ශිල්පය) | Accidental Architecture (අහඹු / අනුමාන රහිත ගෘහ නිර්මාණ ශිල්පය) |
| :--- | :--- | :--- |
| **How it Develops (වර්ධනය වන ආකාරය)** | Through **deliberate decisions (හිතාමතා ගත් තීරණ)**, reasoning, and planning based on quality goals. | Emerges organically from **isolated, uncoordinated local decisions (දේශීය, හුදකලා තීරණ)** without thinking about the big picture. |
| **Control of Dependencies (පරායත්තතා පාලනය)** | Boundaries are clear; dependencies are strictly monitored, modular, and restricted. | Dependencies grow uncontrollably like spaghetti; everything directly imports and calls everything else. |
| **Documentation & Visibility (ලේඛනගත කිරීම සහ විනිවිදභාවය)** | Architectural decisions and trade-offs are documented, justified, and communicated to developers. | Decisions are undocumented, living only in individual developers' heads or lost when staff leave. |
| **Handling System Changes (වෙනස්කම් හැසිරවීම)** | The architecture is actively reviewed, maintained, and refactored as requirements change. | Problems become visible only when modifying a simple button breaks the database or checkout flow. |
| **Outcome / Result (ප්‍රතිඵලය)** | High maintainability, predictable scalability, and manageable technical debt. | High maintenance cost, fragility, fear of modifying code, and eventually requiring a total rewrite. |

> 🔑 **Critical Law:** Choosing not to plan an architecture does **NOT** mean your system has no architecture. It simply means you have created an **Accidental Architecture that you did not choose and cannot control**!

> 💡 **Real-World Scenario:** In a fast-paced startup, three developers code features as fast as possible. Developer A accesses the SQL database directly from an Angular UI controller; Developer B writes database triggers for email alerts; Developer C imports a heavy machine learning library just to format dates. After one year, the system cannot scale, bugs take weeks to isolate, and nobody understands how data moves through the app. That is an **Accidental Architecture**.

---

## 13. Two Approaches to Intentional Architecture: Plan-Driven vs. Agile

Both approaches produce **Intentional Architecture**, but they organize when and how decisions are made differently.

### Plan-Driven vs. Agile Architectural Approaches

| Dimension (සංසන්දනාත්මක අංගය) | Plan-Driven Approach (සැලසුම් මූලික ප්‍රවේශය) | Agile Approach (ක්‍රියාශීලී / කඩිසර ප්‍රවේශය) |
| :--- | :--- | :--- |
| **Timing of Decisions (තීරණ ගන්නා කාලය)** | **Up-Front (ආරම්භයේදීම):** Major architectural planning is done before implementation begins (Big Design Up Front - BDUF). | **Incremental (වර්ධක ලෙස):** Establishes a minimal sound foundation early, making further decisions as the system grows. |
| **Core Methodologies (ප්‍රධාන ක්‍රමවේද)** | Waterfall Model, V-Model. | Scrum, Kanban, Extreme Programming (XP). |
| **Philosophy on Architecture (ගෘහ නිර්මාණ දර්ශනය)** | Architecture is treated as a solid, permanent foundation that developers strictly follow. | Architecture is treated as an **ongoing, evolving activity (අඛණ්ඩ ක්‍රියාකාරකමක්)** guided by feedback and learning. |
| **Structural Adjustments (ව්‍යුහාත්මක වෙනස්කම්)** | Changes to the blueprint require formal Change Requests, impact analyses, and budget revisions. | Code and structure are continuously improved using **Refactoring (කේත ප්‍රතිසංවිධානය)** in iterative sprints. |
| **Team Involvement (කණ්ඩායමේ දායකත්වය)** | Dedicated System Architects hand down blueprints for developers to implement. | The entire cross-functional team participates in architectural spikes and discussions. |
| **Ideal Use Cases (වඩාත්ම ගැළපෙන අවස්ථා)** | High-risk, stable-requirement systems: Air traffic control, nuclear plants, pace-makers, aerospace. | Rapidly shifting commercial markets: SaaS platforms, mobile apps, social media, e-commerce startups. |

### Vital Clarifications on Agile Architecture:
1. **Agile does NOT eliminate the need for architecture.**
2. While Agile architecture emerges incrementally, **it must never emerge without direction**.
3. **Architecturally Significant Decisions (ASD)** must still be made deliberately and thoughtfully, often timed at the **"Last Responsible Moment" (වඩාත් සුදුසු අවසන් මොහොත)** when sufficient data is available.

---

## 14. What Drives Architecture? & Business Drivers (ව්‍යාපාරික ධාවකයන්)

Architecture does not begin by opening an IDE or selecting trendy architectural styles like microservices. It begins by answering fundamental strategic questions:
1. **What is the organization trying to achieve?**
2. **What must the system do?**
3. **Which constraints cannot be ignored?**
4. **Which trade-offs are acceptable to management?**

### What are Business Drivers?
* **Business Drivers (ව්‍යාපාරික ධාවකයන්)** are the business goals, market pressures, and organizational constraints that determine whether a software system is considered a commercial success.
* Business drivers are stated in **business language (ව්‍යාපාරික භාෂාවෙන්)**, not technical software jargon.

### Common Business Drivers & Technical Translation

| Business Concern / Driver (ව්‍යාපාරික අවශ්‍යතාවය) | Business Meaning (ව්‍යාපාරික අර්ථය) | Translated Technical Quality Attribute (තාක්ෂණික ගුණාංගය) | Architectural Impact / Action (ගෘහ නිර්මාණ ක්‍රියාමාර්ගය) |
| :--- | :--- | :--- | :--- |
| **Reduce Time to Market (වෙළඳපොළට යන කාලය අඩු කිරීම)** | Release an MVP before competitors to capture market share. | **Deployability (ස්ථාපනය කිරීමේ පහසුව)** & **Modularity (මොඩියුලර් බව)** | Build an automated CI/CD deployment pipeline and decouple services so teams can ship independently. |
| **Rapid User Growth Expected (පරිශීලක වර්ධනය අපේක්ෂා කිරීම)** | The business plans to expand from 5,000 to 5,000,000 users over 6 months. | **Scalability (පරිමාණකරණය)** & **Elasticity (ප්‍රත්‍යාස්ථතාව)** | Design a stateless backend hosted in auto-scaling cloud clusters (e.g., AWS ECS/EKS). |
| **Zero Tolerance for Downtime (පද්ධතිය බිඳවැටීම් නොඉවසීම)** | Every minute of outage costs $50,000 in lost revenue and brand damage. | **Availability (ලබාගත හැකි බව)** & **Fault Tolerance (දෝෂ ඉවසීමේ හැකියාව)** | Deploy multi-region redundant database replicas with automated failover mechanisms. |
| **Compliance with Data Laws (දත්ත ආරක්ෂණ නීති පිළිපැදීම)** | European Union GDPR or banking financial regulations. | **Security (ආරක්ෂාව)** & **Auditability (විගණනය කිරීමේ හැකියාව)** | Implement end-to-end encryption (AES-256) and immutable audit log streams. |
| **Strict Limited Budget (සීමිත අයවැය)** | Startup running on minimal seed funding; operational costs must stay low. | **Cost Efficiency (පිරිවැය කාර්යක්ෂමතාව)** | Use serverless functions (AWS Lambda) so the business pays only for exact compute seconds used. |

> 🔑 **Architect's Key Job:** Software architects must act as translators—listening to business goals expressed in financial/market terms and translating them into technical **Quality Attributes (Architectural Characteristics)**, then prioritizing which ones must take precedence.

---

## 15. The Architecture Business Cycle (ABC - ගෘහ නිර්මාණ ව්‍යාපාරික චක්‍රය)

Formulated by Len Bass, Paul Clements, and Rick Kazman (*Software Architecture in Practice*), the **Architecture Business Cycle (ABC)** shows that architecture does not exist in an ivory tower.
* Architecture is shaped by its environment.
* In return, the resulting system and architecture **reshape the environment** in a continuous feedback loop.

```
       ┌────────────────────────────────────────────────────────┐
       │                 ENVIRONMENTAL INFLUENCES               │
       ├────────────────────────────────────────────────────────┤
       │ 1. Stakeholders (Needs, Features, Budget)              │
       │ 2. Developing Organization (Structure, Goals, Assets)   │
       │ 3. Technical Environment (Industry Trends, Cloud Tech) │
       │ 4. Architect's Experience (Skills, Lessons Learned)    │
       └───────────────────────────┬────────────────────────────┘
                                   │  Shapes
                                   ▼
                       ┌───────────────────────┐
                       │ SOFTWARE ARCHITECTURE │
                       └───────────┬───────────┘
                                   │  Produces
                                   ▼
                       ┌───────────────────────┐
                       │     ACTUAL SYSTEM     │
                       └───────────┬───────────┘
                                   │
               Reshapes & Influences Back (Feedback Loop)
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │ • Updates Stakeholder expectations for future versions │
       │ • Builds new organizational capabilities & IP assets   │
       │ • Creates new standards in the technical environment   │
       │ • Enriches the Architect's knowledge & experience      │
       └────────────────────────────────────────────────────────┘
```

### The Four Environmental Influences on Architecture

| Influencing Factor (බලපාන සාධකය) | How it Affects Architecture (ගෘහ නිර්මාණ ශිල්පයට බලපාන අයුරු) | Simple Real-World Example (ප්‍රායෝගික උදාහරණය) |
| :--- | :--- | :--- |
| **1. Stakeholders (පාර්ශ්වකරුවන්)** | Users, business sponsors, support engineers, and auditors demand specific features, performance, security, and low operational cost. | A compliance officer insists all healthcare patient data must be encrypted at rest and in transit. |
| **2. Developing Organization (සංවර්ධනය කරන ආයතනය)** | The business's immediate and long-term goals, financial runway, staffing structure, and existing software assets. | A company already owns an enterprise Oracle database license, so the architect uses Oracle instead of buying new software. |
| **3. Technical Environment (තාක්ෂණික පරිසරය)** | The current state of software engineering, trendy paradigms, popular cloud platforms, frameworks, and programming languages. | Cloud computing and Docker containerization being industry standard prompts the team to deploy on Kubernetes. |
| **4. Architect's Experience (ගෘහ නිර්මාණ ශිල්පියාගේ පළපුරුද්ද)** | Past successes, failures, technical background, and personal biases of the architect. | An architect who previously succeeded with Kafka event streaming will naturally favor event-driven architecture for the new project. |

### How Architecture Influences the Environment Back (The Feedback Loop)
* **On Stakeholders:** A successful, intuitive system opens up new business opportunities and sets higher performance expectations for the next version.
* **On the Organization:** Building the system creates reusable code libraries, specialized dev teams, and proprietary technology assets that allow the company to bid on bigger contracts.
* **On the Technical Environment:** Breakthrough architectures (e.g., Google’s MapReduce, Netflix's Chaos Engineering, Facebook's GraphQL) influence the wider industry and establish new global standards.
* **On the Architect:** The architect learns practical lessons from mistakes and triumphs, sharpening their architectural intuition for future systems.

---

## 16. Quick Revision Summary Table (කෙටි පුනරීක්ෂණ සාරාංශ වගුව)

| Concept / Term (සංකල්පය / පාරිභාෂික පදය) | Summary Definition (සාරාංශ නිර්වචනය) | Key Takeaways to Memorize for Exams (විභාගය සඳහා මතක තබාගත යුතු කරුණු) |
| :--- | :--- | :--- |
| **Software (මෘදුකාංගය)** | Programs, data, and configurations that solve human/business problems. | More than source code: includes code, databases, configs, libraries, external APIs, and runtime environments. |
| **Managing Complexity (සංකීර්ණත්වය කළමනාකරණය)** | Structuring a growing system into smaller, decoupled pieces. | Achieved by: dividing into parts, assigning responsibilities, setting boundaries, controlling dependencies, and standardizing communication. |
| **Software Architecture (මෘදුකාංග ගෘහ නිර්මාණ ශිල්පය)** | High-level structure, organization, and governing rules of a system. | Does **NOT** remove complexity; it organizes complexity so systems can be understood, built, and changed. |
| **The 4 Dimensions (මාන 4 - Richards & Ford)** | The four pillars that define complete architecture. | **Quality Attributes** ("-ilities"), **Logical Components**, **Architectural Style**, and **Architectural Decisions**. |
| **Architecture vs. Design** | Continuum between macro-strategic choices and micro-tactical implementations. | **Architecture:** Strategic, hard/expensive to change, cross-cutting.<br>**Design:** Tactical, local, inexpensive to modify. |
| **Trade-Offs (අන්‍යෝන්‍ය කැපකිරීම්)** | Sacrificing one software quality to achieve another. | "Everything in software architecture is a trade-off." Architects pick the **Least-Worst Architecture**. |
| **Does all software have architecture?** | Yes! Every software has some form of structure and relationships. | The real question is whether it is **Intentional (deliberate)** or **Accidental (unmanaged)**. |
| **Intentional vs. Accidental** | Conscious planning vs. uncoordinated, organic growth. | Neglecting architecture produces an accidental, brittle architecture that is painful and costly to maintain. |
| **Plan-Driven vs. Agile Architecture** | Up-front planning (Waterfall) vs. incremental evolution (Scrum). | Agile still requires deliberate architectural thinking; it emerges incrementally, but never without direction! |
| **Business Drivers (ව්‍යාපාරික ධාවකයන්)** | Business goals and market pressures (time-to-market, budget). | Stated in business terms; architects translate them into technical **Quality Attributes** (Scalability, Availability). |
| **Architecture Business Cycle (ABC)** | Two-way feedback loop between architecture and its surroundings (Bass et al.). | Architecture is shaped by **Stakeholders, Organization, Tech Environment, and Architect's Experience**, and reshapes them in return. |
