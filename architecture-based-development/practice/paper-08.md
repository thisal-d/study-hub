# SE3100: Architecture Based Development
# Practice Exam Paper 08 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 08)
## Focus: Lecture 05 — Distributed Foundations, 8 Fallacies & Service-Based Architecture

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Monolithic vs. Distributed Architecture (ඒකශිලා සහ බෙදාහැර ඇති ගෘහ නිර්මාණ ශිල්ප සංසන්දනය)
What is the fundamental architectural difference between a **Monolithic Architecture** and a **Distributed Architecture**?  
*[Select TWO correct answers]*

- [ ] **A.** In a **Monolithic Architecture**, application components execute within the same operating system runtime process, communicating primarily through in-memory method calls.
- [ ] **B.** In a **Distributed Architecture**, application components run in separate execution runtimes (processes, containers, virtual machines), communicating across networks via remote protocols (HTTP, gRPC, messaging).
- [ ] **C.** Monolithic applications are strictly forbidden from connecting to the internet.
- [ ] **D.** Distributed architectures guarantee that zero software bugs will ever occur.
- [ ] **E.** Monoliths can only be written in the C programming language.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Monoliths run within a single application process using in-memory communication. Distributed architectures decouple components across separate network-connected processes/machines.
* **Why C, D & E are INCORRECT:** Monoliths connect to the internet normally; distributed systems actually introduce more failure modes; and monoliths can be written in any language.

---

### Question 2: Why Consider a Distributed Architecture? (බෙදාහැර ඇති පද්ධති තෝරාගැනීමට හේතු)
Which of the following are legitimate business and technical drivers for transitioning from a monolith to a **Distributed Architecture**?  
*[Select THREE correct answers]*

- [ ] **A.** **Scalability & Elasticity (පරිමාණකරණය සහ ප්‍රත්‍යාස්ථතාව):** The need to scale specific high-traffic subdomains independently without replicating the entire application.
- [ ] **B.** **Independent Deployability (ස්වාධීන ස්ථාපන හැකියාව):** Allowing independent engineering teams to build, test, and release services on separate release cycles.
- [ ] **C.** **Fault Isolation (දෝෂ හුදකලා කිරීම):** Preventing a memory leak or crash in an auxiliary reporting module from bringing down the core payment processing engine.
- [ ] **D.** To eliminate the need for software testing and QA engineers.
- [ ] **E.** To guarantee zero network latency across all transactions.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Fine-grained scalability, independent deployment cadences, and fault isolation are premier drivers for moving to distributed architectures.
* **Why D & E are INCORRECT:** Testing becomes *more* critical in distributed systems, and network communication inherently adds latency (never zero).

---

### Question 3: The 8 Fallacies of Distributed Computing: Reliability & Latency
L. Peter Deutsch formulated the classic "8 Fallacies of Distributed Computing." Which of the following statements represent these false assumptions?  
*[Select TWO correct answers]*

- [ ] **A.** Fallacy 1: *"The network is reliable"* (ජාලය සැමවිටම විශ්වාසදායකය - false assumption that network packets never drop).
- [ ] **B.** Fallacy 2: *"Latency is zero"* (ජාල ප්‍රමාදය ශුන්‍ය වේ - false assumption that remote network calls execute as fast as in-memory method calls).
- [ ] **C.** Fallacy 1: The assumption that all computers run on electricity.
- [ ] **D.** Fallacy 2: The assumption that keyboards require keystrokes.
- [ ] **E.** All 8 fallacies were mathematically proven to be 100% true statements.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Assuming networks never fail (Fallacy 1) and that remote calls take zero time (Fallacy 2) are disastrous misconceptions that lead to unhandled timeouts and crashes.
* **Why C, D & E are INCORRECT:** Electricity and keyboards are physical realities, and the "Fallacies" are named specifically because they are **false** assumptions!

---

### Question 4: The 8 Fallacies of Distributed Computing: Bandwidth & Security
Which of the following are also recognized among the **8 Fallacies of Distributed Computing**?  
*[Select TWO correct answers]*

- [ ] **A.** Fallacy 3: *"Bandwidth is infinite"* (දත්ත හුවමාරු කලාප පළල අසීමිතය - assuming massive payloads can be transmitted across networks without saturation).
- [ ] **B.** Fallacy 4: *"The network is secure"* (ජාලය සහමුලින්ම ආරක්ෂිතය - assuming internal network traffic cannot be intercepted or spoofed).
- [ ] **C.** Fallacy 3: That computers can only store data in the form of sound waves.
- [ ] **D.** Fallacy 4: That software programs can only be written by robots.
- [ ] **E.** Fallacy 3: That optical mice operate using diesel fuel.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Fallacy 3 (Bandwidth is infinite) and Fallacy 4 (The network is secure) warn architects against sending bloated payloads and neglecting internal zero-trust transport encryption (mTLS).
* **Why C, D & E are INCORRECT:** Sound-wave storage, robot programmers, and diesel mice are completely absurd notions.

---

### Question 5: What is Service-Based Architecture (SBA)? (සේවා පාදක ගෘහ නිර්මාණ ශිල්පය)
What are the defining structural characteristics of a **Service-Based Architecture (SBA)**?  
*[Select TWO correct answers]*

- [ ] **A.** It consists of a modest number of **coarse-grained domain services (සාමාන්‍යයෙන් සේවා 4 සිට 12 දක්වා)**, typically sharing a centralized single database.
- [ ] **B.** An API Layer or reverse proxy sits between external user clients and the coarse-grained domain services.
- [ ] **C.** It requires at least 1,000 fine-grained microservices, each with its own isolated database.
- [ ] **D.** It forbids services from executing any SQL database queries.
- [ ] **E.** All services must be compiled into a single `.exe` binary running on a single laptop.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Service-Based Architecture (SBA) uses a pragmatic hybrid approach: a few coarse-grained domain services (4–12 services) fronted by an API layer, typically sharing a central database.
* **Why C, D & E are INCORRECT:** 1,000 services with separate databases is extreme microservices; SBA heavily relies on SQL databases; and services run in separate processes (not a single monolithic binary).

---

### Question 6: Granularity: Service-Based vs. Microservices (සේවාවල ප්‍රමාණය / පරිමාව)
How does the service granularity of **Service-Based Architecture** compare to **Microservices Architecture**?  
*[Select TWO correct answers]*

- [ ] **A.** Service-Based Architecture uses **Coarse-Grained Services (ස්ථූල සේවාවන්)** that encompass broad domain areas (e.g., an entire `BillingService` or `InventoryService`).
- [ ] **B.** Microservices Architecture uses **Fine-Grained Services (සියුම් සේවාවන්)** focused on single, narrow business capabilities (e.g., `PaymentProcessingService`, `InvoiceGenerationService`, `TaxCalculationService`).
- [ ] **C.** Service-Based Architecture uses services that are 100 times smaller than microservices.
- [ ] **D.** Microservices must always be at least 500 gigabytes in binary size.
- [ ] **E.** Granularity is a metric that measures the physical weight of computer hard drives.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** SBA is coarse-grained (fewer, larger services covering broad subdomains). Microservices is fine-grained (many small, single-purpose services adhering strictly to Single Responsibility).
* **Why C, D & E are INCORRECT:** Microservices are smaller than SBA services; binary sizes are small; and granularity refers to scope of responsibility, not disk weight.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: The Shared Database in Service-Based Architecture (හවුල් දත්ත සමුදාය)
A primary defining trait of Service-Based Architecture is the **Shared Database**. What are the major **advantages and trade-offs** of this approach?  
*[Select THREE correct answers]*

- [ ] **A.** **Advantage:** Preserves simple **ACID Transactions** within domain boundaries using a shared database, avoiding complex distributed data consistency and workflow coordination problems.
- [ ] **B.** **Advantage:** Lowers initial operational and infrastructure costs compared to managing dozens of distinct physical databases.
- [ ] **C.** **Trade-off / Risk:** The shared database acts as a **Single Point of Failure (SPOF)** and a scalability bottleneck for the entire system.
- [ ] **D.** **Advantage:** The shared database makes network latency drop to negative numbers.
- [ ] **E.** **Trade-off:** The shared database makes it illegal to execute SQL `SELECT` statements.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** A shared database in SBA retains simple ACID transactions and easy reporting with low hosting complexity, but introduces a single point of failure (SPOF), shared performance bottlenecks, and coupling at the database schema.
* **Why D & E are INCORRECT:** Negative latency violates physics, and SQL SELECT queries are the standard way data is retrieved.

---

### Question 8: Fallacy 5 & 6: Topology and Administration
Which of the following represent Fallacy 5 and Fallacy 6 of Distributed Computing?  
*[Select TWO correct answers]*

- [ ] **A.** **Topology Doesn't Change (ජාල ව්‍යුහය කිසිදා වෙනස් නොවේ):** The false assumption that IP addresses, routers, and server routes remain static and immutable over time.
- [ ] **B.** **There is One Administrator (එක් පරිපාලකයෙකු පමණක් සිටී):** The false assumption that a single administrative team controls all networks, cloud firewalls, and server configurations across the distributed path.
- [ ] **C.** The assumption that computers can run without computer chips.
- [ ] **D.** The assumption that electricity can be created from pure thoughts.
- [ ] **E.** Both fallacies state that software architecture is obsolete.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In reality, network topologies change continuously (cloud auto-scaling, dynamic IPs, DNS shifts), and systems cross multiple administrative boundaries (corporate VPNs, AWS, third-party CDNs).
* **Why C, D & E are INCORRECT:** Chip-less computers and thought-electricity are nonsense, and architecture is essential in distributed systems.

---

### Question 9: Fallacy 7 & 8: Transport Cost and Homogeneity
What are the architectural implications of Fallacy 7 (*"Transport cost is zero"*) and Fallacy 8 (*"The network is homogeneous"*)?  
*[Select TWO correct answers]*

- [ ] **A.** **Transport Cost is Non-Zero:** Serializing/deserializing data (JSON/Protobuf), TLS encryption, and network socket management consume real CPU cycles and cloud egress bandwidth fees.
- [ ] **B.** **The Network is Heterogeneous:** Systems connect machines with different operating systems, byte orderings (endianness), hardware architectures, and network protocols; assuming uniform environments causes serialization bugs.
- [ ] **C.** Transport cost is zero because internet bandwidth is completely free across all cloud providers.
- [ ] **D.** All computers in the world run the exact same version of Microsoft Windows 95.
- [ ] **E.** Heterogeneity means that all servers must be painted in identical colors.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Moving data across networks costs money (cloud egress fees) and CPU time (serialization). Real networks are heterogeneous, connecting diverse platforms and protocols.
* **Why C, D & E are INCORRECT:** Cloud bandwidth is billed; diverse OSes exist; and hardware color is irrelevant.

---

### Question 10: Database Coupling in Service-Based Architecture
In a Service-Based Architecture where 6 services share a single database, Service A alters the schema of table `CUSTOMER_RECORD` by dropping a column. What architectural problem occurs?  
*[Select TWO correct answers]*

- [ ] **A.** **Database Coupling (දත්ත සමුදා පරායත්තතාව):** Dropping the column can immediately cause runtime SQL exceptions in Service B and Service C if they also depended on that column.
- [ ] **B.** Services cannot be truly deployed independently if they are tightly coupled to shared database schemas without backward-compatible database migration practices.
- [ ] **C.** The database will automatically buy more RAM from Amazon.
- [ ] **D.** All 6 services will magically convert into iPhone mobile apps.
- [ ] **E.** Database coupling is considered a mandatory requirement for achieving 100% security.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When multiple services share a database, table alterations in one service risk breaking other services. Database refactorings must follow backward-compatible expand/contract patterns.
* **Why C, D & E are INCORRECT:** Databases do not buy RAM automatically; services do not become iPhone apps; and database coupling harms maintainability rather than helping security.

---

### Question 11: The API Layer in Service-Based Architecture (API ස්ථරය)
Why is an **API Layer / Reverse Proxy** (e.g., Nginx, Envoy, Kong) placed in front of coarse-grained services in SBA?  
*[Select THREE correct answers]*

- [ ] **A.** **Abstraction & Single Entry Point:** Clients communicate with a unified public API endpoint without needing to know internal service IP addresses or topologies.
- [ ] **B.** **Cross-Cutting Concerns:** Centralizing authentication, rate-limiting, SSL termination, and CORS handling in the API layer.
- [ ] **C.** **Protocol Translation:** Translating external client protocols (e.g., HTTPS/JSON) to internal protocols (e.g., gRPC).
- [ ] **D.** To replace all backend service code with static images of flowers.
- [ ] **E.** To ensure that users cannot access any features on the website.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** An API Layer shields internal topology, provides a unified entry point, and consolidates security, rate-limiting, and protocol translation.
* **Why D & E are INCORRECT:** Flower images and blocking user access contradict the purpose of an API gateway.

---

### Question 12: Architectural Quanta in Service-Based Architecture
How many **Architectural Quanta** exist in a standard Service-Based Architecture featuring 6 coarse-grained services that all connect to a single shared relational database?  
*[Select TWO correct answers]*

- [ ] **A.** It represents **exactly ONE Architectural Quantum (තනි ගෘහ නිර්මාණ ක්වොන්ටාවක්)** because all 6 services share a single database boundary and synchronous data connascence.
- [ ] **B.** If the shared database goes down, all 6 services become unavailable, proving that they share a unified availability quantum.
- [ ] **C.** It represents 6 independent architectural quanta because there are 6 distinct services.
- [ ] **D.** It represents 36 architectural quanta.
- [ ] **E.** A Service-Based Architecture cannot possess any architectural quanta.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Because all services rely on a single shared database, their availability and data connascence are coupled into a single deployment boundary, forming **one single architectural quantum**.
* **Why C, D & E are INCORRECT:** Service count alone does not create separate quanta if the data tier is shared; 36 is mathematically unfounded; and every architecture has at least one quantum.

---

### Question 13: Ratings Profile for Service-Based Architecture
According to Richards & Ford's characteristic rating matrix, what are the primary **strengths** of Service-Based Architecture compared to Microservices?  
*[Select TWO correct answers]*

- [ ] **A.** **Lower Operational & Architectural Complexity:** SBA provides a relatively simple distributed topology and lower cost ($$) than microservices, avoiding excessive service granularity, complex distributed workflow coordination, and heavy operational overhead.
- [ ] **B.** **Easier Migration Path:** It is significantly easier and cheaper to migrate a legacy monolith to 6 coarse-grained services with a shared database than to 50 microservices with separate databases.
- [ ] **C.** SBA provides infinite elasticity and 100% fault isolation on the data tier.
- [ ] **D.** SBA completely eliminates the need for software developers.
- [ ] **E.** SBA is the only architecture supported by cloud providers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** SBA is a pragmatic "sweet spot": it provides service-level modularity and deployment autonomy for major domains while avoiding the extreme operational overhead and distributed data challenges of microservices.
* **Why C, D & E are INCORRECT:** A shared database prevents infinite elasticity and data tier fault isolation; developers are needed; and clouds support all styles.

---

### Question 14: Network Latency Overhead in Distributed Invocations
An architect replaces a local in-memory method call (`orderService.calculateTax()`) that executed in **15 nanoseconds** with a remote REST HTTP network call across two microservices. The remote call takes **25 milliseconds** to complete.  
What is the mathematical factor of slowdown, and what architectural lesson does it teach?  
*[Select TWO correct answers]*

- [ ] **A.** The network call is approximately **$1,600,000$ times slower** than the local in-memory call ($25 \text{ ms} = 25,000,000 \text{ ns}$ vs. $15 \text{ ns}$).
- [ ] **B.** Architects must never distribute components blindly; distributing components introduces orders of magnitude higher latency (Fallacy 2: Latency is zero).
- [ ] **C.** The remote call is 100 times faster than the local in-memory call.
- [ ] **D.** Network calls execute with zero CPU cycles.
- [ ] **E.** The architect should distribute every individual line of code into its own separate microservice.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** $25 \text{ ms} = 25,000,000 \text{ ns}$. Dividing by $15 \text{ ns}$ reveals a ~1.6 million-fold latency increase! Remote network calls are vastly slower than local RAM access.
* **Why C, D & E are INCORRECT:** Remote calls are slower (not faster); network I/O takes CPU time; and distributing individual lines of code is an absurd anti-pattern.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Mitigating Network Unreliability (Fallacy 1)
A banking frontend calls an external credit check service over the public internet. Occasionally, network packets drop, causing client requests to hang indefinitely and exhaust the web server's thread pool.

The architecture team introduces two mechanisms:
1. **Timeout Tactic:** Setting a strict 2-second timeout on all outbound remote calls.
2. **Automated Fallback & Fault Recovery:** If remote calls fail or time out, the system automatically returns a cached graceful fallback response without stalling user requests.

#### Question 15: Evaluating the Fault Tolerance Mechanism
Which Distributed Computing Fallacy is directly addressed, and what architectural quality is protected?  
*[Select TWO correct answers]*

- [ ] **A.** It directly addresses **Fallacy 1 ("The network is reliable")** by acknowledging that networks fail and ensuring calls do not hang forever.
- [ ] **B.** It protects **System Availability and Fault Tolerance**, preventing thread pool exhaustion from cascading into a total application outage.
- [ ] **C.** It addresses Fallacy 4 by revealing all user passwords to the public.
- [ ] **D.** The fallback mechanism guarantees that the external credit check network will never drop a packet again.
- [ ] **E.** Timeouts cause the server's hard disk to be wiped clean.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Networks are unreliable (Fallacy 1). Timeouts and automated fallback recovery prevent network stalls from exhausting server worker threads, protecting application availability.
* **Why C, D & E are INCORRECT:** Fallback responses protect operations (not leak passwords); software mechanisms cannot magically prevent physical network packet drops; and do not wipe disks.

---

### Scenario 2: Legacy ERP Modernization via Service-Based Architecture
A manufacturing conglomerate operates a massive 20-year-old monolithic ERP system. The business wants to improve development agility and deploy updates to the `Procurement` and `CustomerPortal` modules without re-testing the massive `FactoryManufacturing` core. However, all company operations rely on complex relational SQL queries joining 150 tables.

An external consultant proposes an immediate rewrite into 80 microservices with 80 separate NoSQL databases.  
The internal Chief Architect proposes a **Service-Based Architecture (SBA)** with 4 coarse-grained services sharing the existing Oracle database.

#### Question 16: Comparing the Two Modernization Proposals
Why is the Chief Architect's **Service-Based Architecture** proposal vastly superior in this scenario?  
*[Select TWO correct answers]*

- [ ] **A.** Decomposing 150 relational tables across 80 NoSQL databases would shatter existing relational joins, requiring an impossible rewrite of corporate accounting logic and creating massive distributed consistency failures.
- [ ] **B.** SBA provides domain decoupling and independent service deployments for `Procurement` and `CustomerPortal` while preserving the existing database schemas and transactional integrity.
- [ ] **C.** Microservices with NoSQL are legally required for manufacturing companies.
- [ ] **D.** The Chief Architect's proposal guarantees that the company will never need to pay for cloud hosting.
- [ ] **E.** ERP systems are prohibited from running across more than one process.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Shattering 150 tightly coupled relational tables into 80 NoSQL databases would create insurmountable distributed data headaches. SBA provides domain autonomy for new features while safely retaining the shared relational database core.
* **Why C, D & E are INCORRECT:** NoSQL is not legally mandated; cloud hosting has costs; and ERPs frequently run across distributed services.

---

### Scenario 3: Overcoming Bandwidth Saturation (Fallacy 3)
A mobile banking application connects to a backend microservice. When a user opens their mobile app, the backend service serializes and returns a massive 45-megabyte uncompressed JSON payload containing the user's complete 10-year transaction history, causing mobile devices on cellular 3G/4G connections to lag, freeze, and exhaust data quotas.

#### Question 17: Architectural Diagnosis and Remediation
Which Fallacy of Distributed Computing was violated, and what is the proper architectural fix?  
*[Select TWO correct answers]*

- [ ] **A.** **Violated Fallacy:** **Fallacy 3 ("Bandwidth is infinite")**; transmitting massive payloads over mobile networks saturates bandwidth and exhausts client memory.
- [ ] **B.** **Remediation:** Implement **Pagination (පිටුගත කිරීම)** and **Data Filtering (GraphQL or query parameters)** so the mobile app only requests the 20 most recent transactions, with GZIP/Brotli payload compression.
- [ ] **C.** **Violated Fallacy:** Fallacy 1 ("The network is reliable").
- [ ] **D.** **Remediation:** Force mobile users to buy 100-gigabit fiber optic cables and plug them directly into their smartphones.
- [ ] **E.** The architecture is completely sound because mobile phones have unlimited cellular bandwidth.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Assuming bandwidth is infinite (Fallacy 3) leads to bloated payloads. Implementing pagination, query projections, and compression limits payload size, respecting mobile bandwidth constraints.
* **Why C, D & E are INCORRECT:** The issue is payload volume (bandwidth), not packet drops; smartphones cannot connect to 100Gbps fiber cables; and mobile data is finite.

---

### Scenario 4: Securing Internal Microservices Traffic (Fallacy 4)
A retail company migrates its monolithic system into 12 distributed services on AWS. Because the services communicate inside an AWS Virtual Private Cloud (VPC), the engineering team disables authentication and transmits all internal REST traffic in plain unencrypted HTTP, assuming that internal cloud networks are completely safe.

A compromised container in the cluster allows an attacker to capture plaintext credit card numbers transmitted between internal services.

#### Question 18: Security Analysis of the Architecture
Which Distributed Computing Fallacy was committed, and what architecture model should be adopted?  
*[Select TWO correct answers]*

- [ ] **A.** **Committed Fallacy:** **Fallacy 4 ("The network is secure")**; assuming that perimeter network firewalls make internal network traffic immune to snooping.
- [ ] **B.** **Proper Model:** Adopt a **Zero-Trust Architecture (ශුන්‍ය විශ්වාස ගෘහ නිර්මාණ ශිල්පය)** enforcing mutual TLS (mTLS) encryption and cryptographic service-to-service authentication (e.g., via a Service Mesh like Istio/Linkerd).
- [ ] **C.** **Committed Fallacy:** Fallacy 2 ("Latency is zero").
- [ ] **D.** The company should post all customer credit cards publicly on the internet to prove they have nothing to hide.
- [ ] **E.** Internal networks are physically impossible to hack.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Fallacy 4 warns that internal networks are *not* secure. Modern architectures mandate Zero-Trust: encrypting internal traffic with mTLS and authenticating service identities even inside private VPCs.
* **Why C, D & E are INCORRECT:** The flaw is security (not latency); posting credit cards is illegal; and internal networks are frequently compromised via lateral movement.

---

### Scenario 5: Database Bottleneck in Service-Based Architecture
An e-commerce website using Service-Based Architecture features 5 services: `CatalogService`, `CartService`, `PaymentService`, `RecommendationService`, and `ReviewService`. All 5 services share a single MySQL database instance.  
During a flash sale, the `RecommendationService` runs a complex machine learning SQL query that locks database tables and spikes CPU utilization to 100%, causing the `PaymentService` to fail to record customer payments.

#### Question 19: Architectural Trade-Off Analysis & Solution
What core architectural vulnerability of SBA is demonstrated, and how can the architect isolate the critical payment flow?  
*[Select TWO correct answers]*

- [ ] **A.** **Vulnerability:** The shared database represents a **Single Point of Contention & Failure (SPOF)**; non-critical analytic workloads can starve mission-critical transactional services.
- [ ] **B.** **Solution:** Separate database concerns: extract the `PaymentService` into its own dedicated database (or read replicas for recommendations), isolating transactional workloads from heavy analytical queries.
- [ ] **C.** The vulnerability occurred because MySQL is incapable of running on computer servers.
- [ ] **D.** The architect should force customers to pay using paper checks sent in the mail.
- [ ] **E.** The system should delete the `PaymentService` and keep only the `RecommendationService`.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A shared database couples workloads. A runaway query in an auxiliary service (recommendations) can starve critical transactional flows (payments). Isolating the payment database or adding read replicas provides fault and performance isolation.
* **Why C, D & E are INCORRECT:** MySQL powers global systems; paper checks ruin e-commerce; and deleting payments destroys revenue.

---

### Scenario 6: Team Autonomy in Service-Based Architecture
An enterprise software department with 35 engineers is organized into 4 domain teams: `Accounts`, `Billing`, `Logistics`, and `Support`. Previously, all 35 engineers worked in a single massive monolithic repository, causing daily merge conflicts and release freezes.

The company migrates to a **Service-Based Architecture** with 4 coarse-grained services, one for each domain team, while keeping their shared Oracle database.

#### Question 20: Evaluating the Organizational Impact
What organizational benefits and constraints result from this architectural transition?  
*[Select TWO correct answers]*

- [ ] **A.** **Benefit:** Each domain team gains clear code ownership and can independently build, test, and deploy their service without git merge conflicts with other teams.
- [ ] **B.** **Constraint:** Teams must still coordinate when altering shared database tables or executing schema migrations, preserving a degree of organizational coupling at the database tier.
- [ ] **C.** The transition guarantees that developers will never need to write another line of code.
- [ ] **D.** The transition forces all 35 developers to use the same physical computer monitor.
- [ ] **E.** Service-Based Architecture eliminates the need for any version control systems like Git.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** SBA gives domain teams code-level autonomy and independent deployment pipelines, but the shared database requires team coordination for schema migrations.
* **Why C, D & E are INCORRECT:** Developers still write code; shared monitors are absurd; and Git remains indispensable.
