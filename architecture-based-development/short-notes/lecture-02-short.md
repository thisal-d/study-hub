# SE3100: Architecture Based Development
## Lecture 02: Quality Attributes, Scenarios and Tactics — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Define Quality Attributes (ගුණාත්මක ලක්ෂණ)** and distinguish them clearly from functional requirements.
* **Explain why Quality Attributes dictate software architecture decisions** and structural topologies.
* **Identify Architecturally Significant Quality Attributes** using stakeholder prioritization techniques.
* **Construct unambiguous, measurable 6-Part Quality Attribute Scenarios** (Source, Stimulus, Artifact, Environment, Response, Response Measure).
* **Explain how Architectural Tactics (ගෘහ නිර්මාණ උපායමාර්ග)** are used by architects to achieve desired quality attribute responses.

---

## 2. What are Quality Attributes? (ගුණාත්මක ලක්ෂණ යනු මොනවාද?)

A software system must accomplish two fundamental objectives:
1. **Perform the required domain functions (අවශ්‍ය කාර්යයන් ඉටු කිරීම):** What the system must do.
2. **Provide those functions with acceptable qualities (පිළිගත හැකි ගුණාත්මකභාවයකින් එම කාර්යයන් ලබා දීම):** How well, how securely, and how reliably it does it.

### Concrete Example: Examination System (විභාග පද්ධතියක උදාහරණය)
* **Domain Functionality (ක්‍රියාකාරීත්වය):** Allows teachers to enter student marks, calculate grades, publish results, and generate report cards.
* **Required Quality Attributes (අවශ්‍ය ගුණාත්මක ලක්ෂණ):**
  * **Security (ආරක්ෂාව):** Marks must be protected from unauthorized alterations.
  * **Availability (ලබාගත හැකි බව):** The portal must remain online without crashing during peak result release.
  * **Performance (ක්‍රියාකාරීත්වය / වේගය):** Results pages must load within 2 seconds.
  * **Modifiability (වෙනස් කිරීමේ හැකියාව):** System must easily adapt if grading curves or criteria change next year.

> 🔑 **Core Principle:** A function may exist, but if it runs too slowly, crashes frequently, or leaks private data, the system is an **unacceptable business failure**.

---

## 3. Functionality vs. Quality Attributes (ක්‍රියාකාරීත්වය සහ ගුණාත්මක ලක්ෂණ අතර වෙනස)

| Comparison Factor | Functionality / Functional Requirements (ක්‍රියාකාරී අවශ්‍යතා) | Quality Attributes / Architectural Characteristics (ගුණාත්මක ලක්ෂණ) |
| :--- | :--- | :--- |
| **Core Question (මූලික ප්‍රශ්නය)** | *What* does the system do? (පද්ධතිය කරන්නේ මොනවාද?) | *How well* does the system behave? (පද්ධතිය කෙතරම් හොඳින් ක්‍රියා කරන්නේද?) |
| **Focus (අවධානය)** | Domain behavior, workflows, user interactions, and specific business calculations. | Operational capabilities, robustness, scalability, timing, and system-wide boundaries. |
| **Standard Representation (නිරූපණය කරන ආකාරය)** | Use cases, user stories, functional flowcharts, and feature lists. | Measurable **Quality Attribute Scenarios** and service level objectives (SLOs). |
| **Concrete Examples (ප්‍රායෝගික උදාහරණ)** | • Register a student.<br>• Charge a credit card.<br>• Calculate monthly interest.<br>• Print an invoice. | • **Performance:** $< 200\text{ ms}$ latency.<br>• **Availability:** $99.99\%$ uptime.<br>• **Security:** Zero unauthenticated access.<br>• **Scalability:** Handle $100,000$ req/sec. |

> 💡 **Real-World Scenario:** In an **ATM banking machine**, withdrawing $100 is a **Functional Requirement**. Ensuring the cash dispenser dispenses money within 5 seconds without double-deducting the account balance (**Performance & Consistency**) and resisting skimming attacks (**Security**) are **Quality Attributes**.

---

## 4. Differentiating Features of Architectural Characteristics (Richards & Ford)

Mark Richards and Neal Ford identify three criteria that define an Architectural Characteristic (Quality Attribute):

1. **Non-domain design consideration (ක්ෂේත්‍රයෙන් ඔබ්බට ගිය සැලසුම් සාධකයක් වීම):**  
   It concerns operational capabilities beyond the raw domain problem (e.g., security is required whether building a hospital system, bank, or video game).
2. **Influences a structural aspect of the design (ව්‍යුහාත්මක සැලසුමට බලපෑම් කිරීම):**  
   Achieving it requires important architectural choices (e.g., introducing load balancers, message queues, layers, or redundant databases).
3. **Critical to system success (පද්ධතියේ සාර්ථකත්වයට අත්‍යවශ්‍ය වීම):**  
   Failing to satisfy it prevents the software from achieving its business purpose.

### Common Quality Attributes Table

| Quality Attribute (ගුණාත්මක ලක්ෂණය) | Main Concern (ප්‍රධාන අවධානය) | Simple Real-World Scenario (සරල ප්‍රායෝගික උදාහරණය) |
| :--- | :--- | :--- |
| **Performance (ක්‍රියාකාරීත්වය)** | How quickly the system responds and processes events. | Google search returning query results in under 0.25 seconds. |
| **Availability (ලබාගත හැකි බව)** | The proportion of time the system is operational and ready to accept requests. | AWS S3 providing 99.99% uptime so files can be accessed 24/7. |
| **Security (ආරක්ෂාව)** | Protection against unauthorized access, data theft, and malicious modification. | Banking apps locking out accounts after 3 consecutive wrong PIN attempts. |
| **Modifiability (වෙනස් කිරීමේ හැකියාව)** | The ease, speed, and cost of making changes, adding features, or altering technologies. | Adding Apple Pay as a checkout option in 2 days without breaking credit card billing. |
| **Scalability (පරිමාණකරණය)** | The ability to support increasing workloads and traffic demands without degrading. | Netflix smoothly streaming video to 15 million concurrent users on New Year's Eve. |
| **Testability (පරීක්ෂා කිරීමේ හැකියාව)** | The ease of demonstrating and validating correct behavior through automated tests. | Running 2,000 unit tests in 60 seconds with 85% code coverage. |
| **Usability (භාවිතයේ පහසුව)** | How easily and effectively human users can accomplish their desired tasks. | A customer completing checkout in 2 clicks without reading an instruction manual. |
| **Interoperability (අන්තර්ක්‍රියාකාරිත්වය)** | The ability to exchange and meaningfully use information across disparate external systems. | An online travel site aggregating live flight prices from 10 different airline APIs. |

---

## 5. Why are Quality Attributes Critical in Software Architecture?

* The exact same domain functionality can be implemented using vastly different structural architectures:
  1. A **Monolith with a shared database**.
  2. A set of **independently deployed Microservices**.
  3. An **Event-Driven Architecture (EDA)** with Kafka message streams.
* **Functionality alone does not tell you which structure to pick!**
* The **required Quality Attributes determine which architecture is appropriate**.

### Quality Attributes Driving Architectural Choices Table

| Desired Quality Attribute | Architectural Responses & Structural Mechanisms | Real-World Application |
| :--- | :--- | :--- |
| **Extreme Performance** | In-memory caching (Redis), asynchronous processing, non-blocking I/O. | High-frequency stock trading engines. |
| **High Availability** | Active/passive database redundancy, automated health checks, failover clusters. | Hospital life-support patient telemetry systems. |
| **Rigorous Security** | Zero-trust boundaries, mutual TLS (mTLS), strict role-based access control (RBAC). | Central bank cross-border wire transfer gateways. |
| **High Modifiability** | Modular monolith, clean interface contracts, dependency injection, plug-in style. | SaaS billing engines supporting customized corporate tax rules. |
| **Elastic Scalability** | Stateless distributed containers (Docker/K8s), autoscaling worker pools, message queues. | E-commerce flash sale ticket booking portals. |

---

## 6. Trade-Offs in Quality Attributes (ගුණාත්මක ලක්ෂණ අතර අන්‍යෝන්‍ය කැපකිරීම්)

Achieving one Quality Attribute almost always positively or negatively impacts another. Software architecture is therefore the art of **trade-off analysis (අන්‍යෝන්‍ය කැපකිරීම් විශ්ලේෂණය)**:

* **Redundancy** improves **Availability**, but increases financial cost, hardware footprint, and synchronization complexity.
* **Caching** improves **Performance (Latency)**, but introduces data staleness risks and complex cache-invalidation challenges.
* **Abstraction & Intermediaries** improve **Modifiability**, but introduce call-stack overhead and slight latency penalties.
* **Strict Security (MFA, session timeouts)** strengthens **Data Protection**, but degrades **Usability** by creating user friction.

---

## 7. Architecturally Significant Quality Attributes (ASQA)

* It is impossible to make every quality attribute a top priority. Attempting to optimize everything results in bloated, over-engineered, and unaffordable systems.
* An attribute is **Architecturally Significant** when supporting it requires foundational, costly-to-change structural choices.

### The Richards & Ford Prioritization Rule
1. Brainstorm a candidate list of quality attributes with stakeholders.
2. Ask executive stakeholders and product leaders to **pick the TOP THREE highest-priority Quality Attributes**.
3. Use those top 3 attributes as the primary drivers to shape the structural topology and guide trade-off evaluations.

---

## 8. Quality Attribute Scenarios (ගුණාත්මක අවස්ථා ආකෘතිය)

Requirements like *"the system must be fast"* or *"the system must be secure"* are **unacceptable buzzwords** because they are ambiguous, untestable, and unverifiable.  
Len Bass, Paul Clements, and Rick Kazman created the standardized **6-Part Quality Attribute Scenario Template** to make requirements concrete, testable, and falsifiable:

```
┌──────────────────┐       ┌───────────┐       ┌─────────────────┐       ┌──────────────────┐
│ Source of        │ ----> │ Stimulus  │ ----> │ Artifact        │ ----> │ Response &       │
│ Stimulus         │       │ (Event)   │       │ (Component hit) │       │ Response Measure │
└──────────────────┘       └───────────┘       └─────────────────┘       └──────────────────┘
                                 ▲
                                 │ Under specific
                       ┌───────────────────┐
                       │ Environment       │
                       │ (Operating State) │
                       └───────────────────┘
```

### The Six Elements of a Quality Attribute Scenario Table

| Element (අංගය) | Definition (නිර්වචනය) | Example from Examination System |
| :--- | :--- | :--- |
| **1. Source of Stimulus (උත්තේජනයේ මූලය)** | The entity (human, hardware sensor, hacker, internal cron) that generates the event. | Internal database engine or registered student. |
| **2. Stimulus (උත්තේජනය)** | The specific condition or event that arrives at the system requiring a response. | Primary database server crashes unexpectedly. |
| **3. Artifact (කලාකෘතිය / අදාළ කොටස)** | The specific subsystem, component, or service receiving the stimulus. | The results publishing database cluster. |
| **4. Environment (පරිසර තත්ත්වය)** | The operating conditions when the stimulus occurs (normal operation, peak load, degraded failover). | During peak annual result publication traffic. |
| **5. Response (ප්‍රතිචාරය)** | The observable action undertaken by the system upon receiving the stimulus. | Detects primary failure, promotes standby replica, and resumes query serving. |
| **6. Response Measure (ප්‍රතිචාර මිණුම)** | The objective, quantitative criteria used to test whether the response was successful. | Service is restored within **60 seconds with zero lost committed results**. |

---

## 9. Concrete Scenarios for Core Quality Attributes

### A. Availability Concrete Scenario
* **Source:** Internal hardware component.
* **Stimulus:** Primary database server crashes due to power supply failure.
* **Artifact:** Primary database and results platform.
* **Environment:** Normal operation during high-traffic result release.
* **Response:** System detects the crash, promotes a hot-standby replica, and updates DNS routing.
* **Response Measure:** Database operations resume within **60 seconds with 0% data loss** of committed transactions.

### B. Performance Concrete Scenario
* **Source:** 50,000 registered students concurrently online.
* **Stimulus:** Submitting requests to view semester examination results.
* **Artifact:** Results rendering service.
* **Environment:** Peak-load operation (10,000 requests per second).
* **Response:** Retrieves result data, renders HTML/PDF, and returns payload to client.
* **Response Measure:** **95% of requests complete within 2.0 seconds**; 99.9% complete within 4.0 seconds.

### C. Security Concrete Scenario
* **Source:** Malicious external hacker.
* **Stimulus:** Attempts to inject SQL commands via an unauthenticated URL query parameter to alter student grades.
* **Artifact:** Public web API gateway and grading service.
* **Environment:** Live production operation over the public internet.
* **Response:** Web Application Firewall (WAF) sanitizes input, rejects the request, logs the attacker's IP, and alerts security staff.
* **Response Measure:** The unauthorized modification is blocked **100% of the time**, and security audit logs record the attempt within **500 milliseconds**.

### D. Modifiability Concrete Scenario
* **Source:** University academic council.
* **Stimulus:** Request to introduce a new letter grading policy (e.g., adding `A+` grade with 4.25 GPA scale).
* **Artifact:** Grade computation module.
* **Environment:** Post-release development maintenance environment.
* **Response:** Developer updates grading rules configuration and runs automated unit tests.
* **Response Measure:** The change is implemented, tested, and deployed to staging within **4 person-hours of effort** without requiring modifications to the database schema.

---

## 10. Architectural Tactics (ගෘහ නිර්මාණ උපායමාර්ග)

* **Tactics (උපායමාර්ග)** are design techniques that an architect uses to control a system's response to a specific stimulus.
* Tactics are the fundamental building blocks from which **Architectural Patterns and Styles** are constructed.

### A. Availability Tactics (ලබාගත හැකි බව පිළිබඳ උපායමාර්ග)

```
                       ┌─────────────────────────────────────────┐
                       │          AVAILABILITY TACTICS           │
                       ├───────────────┬─────────────────────────┤
                       │ Fault Detect  │ Ping/Echo, Heartbeat    │
                       ├───────────────┼─────────────────────────┤
                       │ Fault Recover │ Active/Passive Spares   │
                       ├───────────────┼─────────────────────────┤
                       │ Fault Prevent │ Removal from Service    │
                       └───────────────┴─────────────────────────┘
```

| Category | Tactic | Explanation & Mechanics | Real-World Scenario |
| :--- | :--- | :--- | :--- |
| **Fault Detection (දෝෂ හඳුනාගැනීම)** | **Ping / Echo** | One component sends an interrogation request and waits for an echo response within a deadline. | Load balancer pings web servers every 5 seconds to verify health. |
| | **Heartbeat** | Monitored component autonomously emits periodic pulses to a watchdog monitor. | A background worker thread sends a heartbeat message every 2 seconds to prove it isn't deadlocked. |
| | **Exceptions** | Runtime framework traps divide-by-zero, null pointers, or memory faults. | Java `try-catch-finally` blocks catching `SQLException` to prevent thread crashes. |
| **Fault Recovery (දෝෂවලින් යථා තත්ත්වයට පත්වීම)** | **Active Redundancy (Hot Spare)** | Redundant nodes process the same input concurrently; if one fails, others continue with zero delay. | Flight control avionics where 3 computers process sensor data in parallel. |
| | **Passive Redundancy (Warm/Cold Spare)** | A primary handles requests; a secondary is periodically updated and takes over on failure. | MySQL master-replica database failover. |
| | **Rollback** | Restores state to a previously saved consistent checkpoint after a failure. | Database rolling back an uncompleted money transfer after a network disconnect. |
| **Fault Prevention (දෝෂ වැළැක්වීම)** | **Removal from Service** | Temporarily taking a degrading node offline for garbage collection or updates before it crashes. | Blue-Green deployment draining traffic from old nodes. |

---

### B. Security Tactics (ආරක්ෂාව පිළිබඳ උපායමාර්ග)

| Category | Tactic | Explanation & Mechanics | Real-World Scenario |
| :--- | :--- | :--- | :--- |
| **Resist Attacks (ප්‍රහාරවලට ප්‍රතිරෝධය)** | **Authenticate Actors** | Verifies the identity of users or services claiming an identity. | Multi-Factor Authentication (MFA) and OAuth2/JWT tokens. |
| | **Authorize Actors** | Confirms an authenticated actor has permission to perform an action. | Role-Based Access Control (RBAC) ensuring only `Dean` can approve final grades. |
| | **Encrypt Data** | Converts plaintext into ciphertext at rest and in transit. | AES-256 disk encryption and TLS 1.3 encrypted HTTPS network channels. |
| | **Validate Input** | Sanitizes incoming strings and parameters to prevent buffer overflows and SQL injection. | Rejecting SQL injection characters (`' OR 1=1--`) at the API Gateway. |
| **Detect Attacks (ප්‍රහාර හඳුනාගැනීම)** | **Intrusion Detection System (IDS)** | Compares network packet patterns against known signatures or anomaly baselines. | Snort or AWS GuardDuty flagging abnormal port scanning. |
| | **Maintain Audit Logs** | Tamper-evident logging of security-critical operations with timestamps and user IDs. | Logging every instance of an admin changing student marks in an immutable WORM store. |
| **Recover from Attacks (යථා තත්ත්වයට පත්වීම)** | **Restore State** | Rebuilding compromised servers from trusted golden master images. | Wiping a hacked container and launching a clean Docker image from an immutable registry. |

---

### C. Performance Tactics (ක්‍රියාකාරීත්වය පිළිබඳ උපායමාර්ග)

| Category | Tactic | Explanation & Mechanics | Real-World Scenario |
| :--- | :--- | :--- | :--- |
| **Manage Demand (ඉල්ලුම පාලනය)** | **Manage Event Rate** | Enforcing rate-limiting and throttling to cap incoming request frequency. | Capping an API key at 100 requests per minute to prevent server exhaustion. |
| | **Control Sample Rate** | Decreasing sample frequency when measured attributes change slowly. | IoT temperature sensor reporting once every 10 minutes instead of every 10 milliseconds. |
| **Manage Resources (සම්පත් පාලනය)** | **Increase Resources** | Adding faster CPUs, memory, or scaling horizontal container instances. | Adding 10 AWS EC2 instances during a holiday flash sale. |
| | **Maintain Multiple Copies (Caching)** | Storing computed results or database reads in high-speed RAM. | Redis caching user profiles to reduce SQL database query latency from 50ms to 1ms. |
| | **Introduce Concurrency** | Processing independent tasks in parallel across multiple worker threads. | Splitting a batch of 10,000 PDF invoices across 8 CPU threads simultaneously. |

---

### D. Modifiability Tactics (වෙනස් කිරීමේ හැකියාව පිළිබඳ උපායමාර්ග)

| Category | Tactic | Explanation & Mechanics | Real-World Scenario |
| :--- | :--- | :--- | :--- |
| **Reduce Coupling (පරායත්තතා අඩු කිරීම)** | **Encapsulate** | Hiding internal data structures and implementation details behind public interfaces. | Accessing customer records strictly through a repository interface rather than raw SQL tables. |
| | **Use an Intermediary** | Introducing a broker, adapter, or facade to decouple two direct dependencies. | An API Gateway allowing backend service IPs to change without breaking mobile clients. |
| | **Restrict Dependencies** | Enforcing layered or architectural boundaries to prevent dependency tangles. | UI layer can invoke business layer, but business layer cannot import UI buttons. |
| **Defer Binding Time (බැඳීමේ කාලය කල් දැමීම)** | **Compile-Time Binding** | Deciding configurations via build flags and conditional compilation. | C++ `#ifdef DEBUG` flags. |
| | **Startup / Load-Time** | Injecting dependencies and reading environment variables at application startup. | Reading database connection strings from `.env` files via Spring Boot. |
| | **Runtime Binding** | Dynamically discovering, loading, and executing plugins at runtime without restarts. | VS Code loading an extension `.vsix` file dynamically at runtime. |

---

## 11. Quick Revision Summary Table (කෙටි පුනරීක්ෂණ සාරාංශ වගුව)

| Concept / Term | Core Definition | Key Exam Takeaways |
| :--- | :--- | :--- |
| **Functionality vs. QAs** | Functionality is *what* the system does; Quality Attributes define *how well* it does it. | Both are critical. A correct function delivered too slowly or insecurely is a business failure. |
| **Architectural Relevance** | The same functionality can be achieved using different architectural topologies. | Quality Attributes (not functionality alone) dictate which architectural structure is appropriate. |
| **Prioritization (ASQA)** | Only attributes requiring structural decisions are Architecturally Significant. | Richards & Ford rule: Identify the **Top 3** Quality Attributes with stakeholders to guide design. |
| **6-Part Scenario Template** | Standard framework to express testable, measurable quality requirements. | **Source, Stimulus, Artifact, Environment, Response, Response Measure**. |
| **Response Measure** | Objective, quantitative criterion evaluating response success. | Replaces vague buzzwords ("system must be fast") with falsifiable metrics ("latency $< 2$ seconds"). |
| **Architectural Tactics** | Foundational design techniques used to achieve specific quality attribute responses. | Patterns/styles are built from collections of tactics. |
| **Availability Tactics** | Keeping the system functioning and operational. | **Detect** (Ping/Echo, Heartbeat), **Recover** (Active/Passive spares, Rollback), **Prevent** (Removal from service). |
| **Security Tactics** | Protecting data and services against unauthorized access. | **Resist** (Authenticate, Authorize, Encrypt), **Detect** (IDS, Audit logs), **Recover** (Restore state). |
| **Performance Tactics** | Managing latency, throughput, and computing resource utilization. | **Manage Demand** (Rate-limiting, Throttling), **Manage Resources** (Concurrency, Caching, Scaling). |
| **Modifiability Tactics** | Lowering the time, effort, and financial cost of making changes. | **Reduce Coupling** (Encapsulate, Intermediary, Restrict dependencies), **Defer Binding Time** (Runtime plugins). |
