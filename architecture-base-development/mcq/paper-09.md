# SE3100: Architecture Based Development
# Practice Exam Paper 09 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 09)
## Focus: Lecture 05 — Microservices Architecture (Principles, Bounded Context, Granularity & Trade-offs)

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Core Principles of Microservices (ක්ෂුද්‍ර සේවා ගෘහ නිර්මාණ ශිල්පයේ මූලික ලක්ෂණ)
According to the lecture slides, how does **Microservices Architecture** decompose an application system?  
*[Select THREE correct answers]*

- [ ] **A.** It decomposes the system into **small, single-purpose services (කුඩා, තනි අරමුණක් සහිත සේවා)**.
- [ ] **B.** Each service is **independently deployable (ස්වාධීනව ස්ථාපනය කළ හැකි)**.
- [ ] **C.** Each service normally runs in its **own process, virtual machine, or container (තමන්ගේම ක්‍රියාවලියක් හෝ කන්ටේනරයක් තුළ ධාවනය වේ)**.
- [ ] **D.** All business services must be bundled into a single monolithic `.war` or `.exe` file.
- [ ] **E.** All services are strictly prohibited from communicating across computer networks.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture explicitly states: *"Microservices Architecture decomposes the system into small, independently deployable, single-purpose services"* and *"Each service normally runs in its own process, virtual machine or container."*
* **Why D & E are INCORRECT:** Bundling everything into a single archive is the definition of a monolithic architecture, and microservices are inherently distributed and communicate over networks.

---

### Question 2: Typical Characteristics of Microservices Style (ක්ෂුද්‍ර සේවා විලාසයේ ප්‍රධාන ලක්ෂණ)
Which of the following are recognized in the lecture as **typical characteristics** of the Microservices Architecture style?  
*[Select FOUR correct answers]*

- [ ] **A.** **Highly distributed (ඉහළ මට්ටමකින් බෙදාහැරුණු ස්වභාවය)** and **Fine-grained services (සියුම් ලෙස වෙන්කළ සේවා)**.
- [ ] **B.** **Domain partitioning (වසම් පාදක බෙදීම)** based on business capabilities.
- [ ] **C.** **Independent deployment (ස්වාධීන ස්ථාපනය)** and **Independent scalability (ස්වාධීන පරිමාණනය)**.
- [ ] **D.** **Strong data ownership (ශක්තිමත් දත්ත හිමිකාරිත්වය)** and **Heavy reliance on operational automation (මෙහෙයුම් ස්වයංක්‍රීයකරණය මත දැඩිව රඳා පැවතීම)**.
- [ ] **E.** Complete reliance on a single centrally shared relational database table for all services.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** The lecture slide explicitly lists the typical characteristics of Microservices: Highly distributed, Fine-grained services, Domain partitioning, Independent deployment, Independent scalability, Strong data ownership, and Heavy reliance on operational automation.
* **Why E is INCORRECT:** Microservices avoids shared databases and instead enforces strong data ownership (database per service).

---

### Question 3: Domain-Driven Design and the Bounded Context (වසම්-පාදක නිර්මාණය සහ සීමාසහිත සන්දර්භය)
The lecture states that Microservices is strongly influenced by **Domain-Driven Design (DDD)** and its key concept of the **Bounded Context**. How does a Bounded Context govern service design?  
*[Select TWO correct answers]*

- [ ] **A.** A bounded context keeps domain concepts, code, and data **internally consistent** within an architectural boundary.
- [ ] **B.** **Inside** that bounded context, implementation details may be coupled; but **outside** that boundary, other services should **not depend** on internal code, schemas, or database structures.
- [ ] **C.** A bounded context forces all microservices across the entire enterprise to share the same internal Java class files.
- [ ] **D.** A bounded context requires all software engineers to sit in the same physical room without chairs.
- [ ] **E.** A bounded context eliminates the need for any business logic in software.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture explicitly states: *"A bounded context keeps domain concepts, code and data internally consistent within a boundary. Inside a bounded context, implementation details may be coupled. Outside that boundary, other services should not depend on internal code schema or database structures."*
* **Why C, D & E are INCORRECT:** Bounded contexts prevent sharing internal classes across boundaries; chairs and physical furniture are irrelevant; and business logic remains core to the domain.

---

### Question 4: Domain Partitioning in Microservices (ක්ෂුද්‍ර සේවාවල වසම් පාදක බෙදීම)
How does **Domain Partitioning** structure a microservices application compared to technical layering?  
*[Select TWO correct answers]*

- [ ] **A.** Services are organized around **Business capabilities, Domains, Subdomains, and Workflows** rather than technical layers (e.g., presentation, business, persistence).
- [ ] **B.** Domain partitioning allows cross-functional teams to **own functionality end-to-end** within a domain boundary.
- [ ] **C.** Domain partitioning mandates that all services must be written strictly in HTML.
- [ ] **D.** Domain partitioning groups all database tables into one service and all user interfaces into another.
- [ ] **E.** Domain partitioning forbids teams from communicating with each other.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture slide states: *"Microservices uses domain partitioning, with bounded contexts defining the boundaries of each partition (service). Services are organized around Business capabilities, Domains, Subdomains, Workflows etc. rather than technical layers. This allows teams to own functionality end-to-end within a domain boundary."*
* **Why C, D & E are INCORRECT:** Microservices are polyglot; separating UI and database into distinct tiers is technical layering (monolithic/layered architecture); and team communication is essential.

---

### Question 5: Choreography vs. Orchestration in Microservices (නර්තනය සහ වාද්‍ය වෘන්ද සංවිධානය)
According to the lecture comparison table, how do **Choreography** and **Orchestration** differ when coordinating business workflows across microservices?  
*[Select TWO correct answers]*

- [ ] **A.** **Choreography (නර්තනය):** Has no central coordinator; each service calls or reacts to other services as needed, preserving the highly decoupled philosophy of microservices, but error handling and coordination become more complex.
- [ ] **B.** **Orchestration (වාද්‍ය වෘන්දය):** Uses a localized mediator or orchestration service to coordinate calls, concentrating workflow coordination in a single service, which creates additional coupling between participating services and the orchestrator.
- [ ] **C.** Choreography is only used for playing sound files, while orchestration is used for video files.
- [ ] **D.** Orchestration eliminates all software coupling completely from the architecture.
- [ ] **E.** Both approaches mandate that a human operator manually clicks every service call.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The comparison table in Lecture 05 directly contrasts: Choreography (no central coordinator, each service reacts, preserves decoupling, error handling more complex) vs. Orchestration (uses localized mediator/orchestration service, coordinates calls, concentrates coordination, creates additional coupling, useful when complex process needs explicit coordination).
* **Why C, D & E are INCORRECT:** Multimedia metaphors, zero coupling claims, and manual human clicking are incorrect.

---

### Question 6: Determining Service Granularity: Three Key Factors (සේවා සියුම් බව තීරණය කිරීමේ මූලික සාධක)
Determining the correct service granularity is one of the hardest parts of Microservices Architecture. According to the lecture, what **three key factors** should be considered when defining service boundaries?  
*[Select THREE correct answers]*

- [ ] **A.** **Purpose (අරමුණ):** Ensuring the service represents a coherent, single business capability.
- [ ] **B.** **Transactions (ගනුදෙනු සීමා):** Analyzing transactional boundaries and ACID requirements across operations.
- [ ] **C.** **Choreography / Communication requirements (සන්නිවේදන අවශ්‍යතා):** Evaluating the communication overhead and dependencies between services.
- [ ] **D.** The physical weight of the computer server in kilograms.
- [ ] **E.** The alphabetical sorting order of developer usernames.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture slide explicitly states: *"Service boundaries should consider Purpose, Transactions, Choreography (Communication requirements)."*
* **Why D & E are INCORRECT:** Server hardware weight and alphabetical usernames have no architectural bearing on service boundary granularity.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: The "Grains of Sand" Anti-Pattern (ක්ෂුද්‍ර සේවාවන්හි 'වැලි කැට' විරෝධී රටාව)
What happens if an architecture team makes microservices **excessively fine-grained (too small)**, falling into the **"Grains of Sand" anti-pattern**?  
*[Select THREE correct answers]*

- [ ] **A.** Network communication and remote call volume increase significantly.
- [ ] **B.** Workflows become much harder to coordinate and network latency increases.
- [ ] **C.** Managing data consistency becomes harder, potentially creating a **Distributed Big Ball of Mud**.
- [ ] **D.** The computer monitor automatically fills with physical beach sand.
- [ ] **E.** Operational and infrastructure costs drop to exactly zero dollars.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture slide specifies: *"If services are too fine-grained: Communication increases, Workflows become harder to coordinate, Latency increases, Data consistency becomes harder. Making services too small will result in the Grains of Sand antipattern... leading to a Distributed Big Ball of Mud situation."*
* **Why D & E are INCORRECT:** Physical sand is an absurd metaphor literalization, and excessive fine granularity dramatically increases operational costs rather than reducing them to zero.

---

### Question 8: Heavy Reliance on Operational Automation (මෙහෙයුම් ස්වයංක්‍රීයකරණය මත දැඩිව රඳා පැවතීම)
The lecture highlights that *"Microservices gains flexibility only if the organisation can operate many independent services reliably."* Which operational automation capabilities are emphasized in the lecture?  
*[Select FOUR correct answers]*

- [ ] **A.** **Automated deployment (ස්වයංක්‍රීය ස්ථාපනය)** and deployment via **Containers or Virtual Machines**.
- [ ] **B.** **Service discovery, Monitoring, and Failure recovery mechanisms**.
- [ ] **C.** **Distributed logging and distributed tracing**.
- [ ] **D.** **Configuration management** and **API gateways**.
- [ ] **E.** Manual handwritten logging into paper ledgers for every HTTP request.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** Slide lines 343–358 explicitly list the operational automation requirements for Microservices: Automated deployment, Containers or virtual machines, Service discovery, Monitoring and Failure recovery mechanisms, Distributed logging and tracing, Configuration management, and API gateways.
* **Why E is INCORRECT:** Manual paper ledgers directly contradict operational automation.

---

### Question 9: Data Ownership and Database per Service (දත්ත හිමිකාරිත්වය සහ සේවාවකට වෙනම දත්ත සමුදාය)
How does Microservices Architecture manage data storage and cross-service data access according to the lecture?  
*[Select TWO correct answers]*

- [ ] **A.** It avoids shared schemas and shared databases as integration mechanisms, adopting a **Database per Service** approach where each service owns its data.
- [ ] **B.** Other services access that data strictly through **APIs, Messages, or Events**, protecting the bounded context and limiting implementation coupling.
- [ ] **C.** All microservices must directly execute SQL `JOIN` queries across each other's raw private database tables.
- [ ] **D.** Microservices systems are prohibited from saving any data to persistent disk drives.
- [ ] **E.** Every microservice must store all customer records inside local browser cookies only.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture states: *"Microservices tries to avoid shared schemas and shared databases as integration mechanisms. The usual approach is to have a Database per Service and Each service owning its data. Other services access that data through: APIs, Messages, Events. This protects the bounded context and limits implementation coupling."*
* **Why C, D & E are INCORRECT:** Direct SQL joins across service tables break bounded contexts; data is stored persistently; and browser cookies cannot replace backend databases.

---

### Question 10: Trade-offs in Selecting Distributed Architecture (බෙදාහැරීමේ වාසි සහ අභියෝග)
According to the lecture's trade-off analysis table on distribution, what does distribution **improve**, and what does it **usually increase**?  
*[Select THREE correct answers]*

- [ ] **A.** Distribution can improve **Scalability, Deployability, Fault tolerance, Team autonomy, and Evolvability**.
- [ ] **B.** Distribution usually increases **Communication complexity, Infrastructure cost, Operational complexity, Testing difficulty, and Debugging difficulty**.
- [ ] **C.** Distribution usually increases **Data consistency and workflow coordination problems**.
- [ ] **D.** Distribution guarantees that network latency drops to 0.000 milliseconds.
- [ ] **E.** Distribution eliminates the need for serialization, contracts, or security.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture table (slide line 117) clearly separates: Distribution can improve (Scalability, Deployability, Fault tolerance, Team autonomy, Evolvability, Technology flexibility) vs. Distribution usually increases (Communication complexity, Infrastructure cost, Operational complexity, Testing difficulty, Debugging difficulty, Data consistency and workflow coordination problems).
* **Why D & E are INCORRECT:** Remote calls over networks introduce latency, serialization overhead, contract management, and security concerns.

---

### Question 11: Characteristic Ratings of Microservices Style (ක්ෂුද්‍ර සේවා ශෛලියේ ලාක්ෂණික තරු ශ්‍රේණිගත කිරීම්)
According to the Richards & Ford characteristics ratings matrix presented in Lecture 05, what are the ratings for Microservices Architecture?  
*[Select THREE correct answers]*

- [ ] **A.** **5 Stars (☆☆☆☆☆):** Modularity, Maintainability, Testability, Deployability, Evolvability, Scalability, and Fault tolerance.
- [ ] **B.** **1 Star (☆):** Simplicity (ඉතා අඩු සරල බව / අධික සංකීර්ණ බව).
- [ ] **C.** **Overall Cost:** Ranked at the highest cost tier (**$$$$$**) with low Responsiveness (**☆☆**).
- [ ] **D.** **Overall Cost:** Ranked at the lowest possible cost tier ($).
- [ ] **E.** **Deployability:** Ranked at 1 star (☆).

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The rating table in Lecture 05 (Figure 18-16) assigns: Cost = $$$$$, Simplicity = 1 star, Responsiveness = 2 stars, Elasticity = 4 stars, and 5 stars for Modularity, Maintainability, Testability, Deployability, Evolvability, Scalability, and Fault tolerance.
* **Why D & E are INCORRECT:** Cost is $$$$$ (not $) and Deployability is 5 stars (not 1 star).

---

### Question 12: Strengths vs. Weaknesses of Microservices (ක්ෂුද්‍ර සේවාවල ශක්තීන් සහ දුර්වලතා)
According to the Strengths and Weaknesses summary table in Lecture 05, which of the following represent recognized **weaknesses** of the Microservices style?  
*[Select THREE correct answers]*

- [ ] **A.** High complexity, high overall cost, and high operational complexity.
- [ ] **B.** Network communication overhead and additional endpoint-security latency.
- [ ] **C.** Risk of excessive service granularity and excessive interservice communication.
- [ ] **D.** Complete inability to scale any individual service.
- [ ] **E.** Inability to deploy services on cloud platforms.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The slide table explicitly identifies weaknesses: High complexity, High overall cost and operational complexity, Network communication overhead, Additional endpoint-security latency, Data latency across services, Risk of excessive service granularity, Excessive interservice communication, and Excessive data/code sharing weakening bounded contexts.
* **Why D & E are INCORRECT:** Microservices provides excellent independent scalability (5 stars) and is tailored for cloud deployments.

---

### Question 13: When Microservices Architecture is Suitable vs. Less Suitable
According to the lecture guidelines, when is Microservices Architecture **suitable**, and when is it **less suitable**?  
*[Select THREE correct answers]*

- [ ] **A.** **Suitable:** When the system has a high degree of functional modularity and data can be cleanly isolated along domain boundaries.
- [ ] **B.** **Suitable:** When multiple teams require strong ownership boundaries and the organization has the engineering and operational maturity to support the style.
- [ ] **C.** **Less Suitable:** When the domain is **highly semantically coupled**, or the organization lacks strong deployment and operational automation.
- [ ] **D.** **Suitable:** When the system has a simple single-developer team with zero deployment automation and no cloud budget.
- [ ] **E.** **Less Suitable:** Whenever the application requires high scalability or high deployability.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The lecture explicitly notes: Microservices is suitable when functional modularity is high, clear bounded contexts can be established, multiple teams require strong ownership, and operational maturity is present. It is less suitable when the domain is highly semantically coupled and cannot be cleanly divided, or when deployment/operational automation is lacking.
* **Why D & E are INCORRECT:** Lack of automation makes microservices unsuitable; high scalability and deployability are primary reasons to choose microservices.

---

### Question 14: Latency and Remote Interaction Concerns in Distributed Architectures
Lecture 05 emphasizes that when transitioning from a monolith to a distributed architecture, local component calls become remote interactions. What concerns does this transition introduce?  
*[Select THREE correct answers]*

- [ ] **A.** **Network latency (ජාල ප්‍රමාදය)** and the need for remote communication protocols.
- [ ] **B.** **Serialization and deserialization overhead (දත්ත පරිවර්තනය කිරීමේ පිරිවැය)**.
- [ ] **C.** **Endpoint security, partial failures, contract management, and operational monitoring**.
- [ ] **D.** Inability of computers to calculate mathematical operations.
- [ ] **E.** Complete elimination of all operating system processes.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Slide lines 93–114 explicitly list: *"A local component call becomes a remote interaction. This introduces many other concerns such as: Network latency, Remote communication protocols, Serialization and deserialization, Endpoint security, Partial failures, Contract management, Operational monitoring, Distributed data and transaction concerns etc."*
* **Why D & E are INCORRECT:** Math calculations and operating systems function normally in distributed architectures.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Excessive Service Granularity & The Grains of Sand Anti-Pattern
A software engineering team building an online retail platform decides to make services as small as possible. They create separate microservices for `CustomerFirstNameService`, `CustomerLastNameService`, `OrderTaxCalculationService`, `OrderDiscountValidationService`, and `OrderLineItemService`.

During testing, fulfilling a single order requires 35 synchronous network hops between these tiny services. End-to-end response time exceeds 8 seconds, coordinating workflows is nearly impossible, and network timeouts frequently cause partial data inconsistencies.

#### Question 15: Evaluating the Granularity Problem
Based on Lecture 05, what architectural anti-pattern has this team fallen into, and what are its direct consequences?  
*[Select TWO correct answers]*

- [ ] **A.** The team has fallen into the **"Grains of Sand" anti-pattern** by creating excessively fine-grained services.
- [ ] **B.** This extreme granularity causes communication volume to explode, increases network latency, makes workflows hard to coordinate, and can lead to a **"Distributed Big Ball of Mud"**.
- [ ] **C.** The team has successfully applied Domain-Driven Design principles with perfect bounded contexts.
- [ ] **D.** The problem is caused solely by slow computer keyboards and has nothing to do with service granularity.
- [ ] **E.** The team should break each service down further into individual line-of-code microservices.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture explicitly warns: *"If services are too fine-grained: Communication increases, Workflows become harder to coordinate, Latency increases, Data consistency becomes harder. Making services too small will result in the Grains of Sand antipattern... leading to a Distributed Big Ball of Mud situation."*
* **Why C, D & E are INCORRECT:** Splitting first and last names into separate services violates DDD bounded context cohesion; keyboards are irrelevant; and further subdivision worsens the disaster.

---

### Scenario 2: Shared Database Coupling & Bounded Context Violation
A financial services firm splits its monolithic application into 12 separate microservices. However, to minimize data migration effort, all 12 services continue to read from and write to the same centralized relational database schema tables.

When the `LoanService` team alters the columns and data types in the `customer_account` table, the `PaymentService`, `CardService`, and `AuditService` all instantly crash in production due to broken SQL queries.

#### Question 16: Remediating the Data Coupling Flaw
According to Lecture 05 principles of **Data Ownership and Bounded Contexts**, how must this architecture be restructured?  
*[Select TWO correct answers]*

- [ ] **A.** Enforce the **Database-per-Service** approach where each service exclusively owns its data, avoiding shared schemas and shared databases as integration mechanisms.
- [ ] **B.** Other services must access account data strictly through **APIs, Messages, or Events**, protecting the bounded context and preventing internal schema changes from breaking dependent services.
- [ ] **C.** Force all 12 services to run inside the same database server using SQL stored procedures.
- [ ] **D.** Instruct developers to never make any database schema changes ever again.
- [ ] **E.** Eliminate all databases and store all banking transactions in text files on desktop screens.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Lecture 05 specifies: *"Microservices tries to avoid shared schemas and shared databases as integration mechanisms. The usual approach is to have a Database per Service and Each service owning its data. Other services access that data through: APIs, Messages, Events. This protects the bounded context and limits implementation coupling."*
* **Why C, D & E are INCORRECT:** Stored procedures create monolithic database coupling; freezing schema evolution stops business growth; and desktop text files are unsafe for banking.

---

### Scenario 3: Choreography vs. Orchestration for Order Fulfillment
An architect is designing a multi-step order fulfillment workflow involving `OrderService`, `PaymentService`, `InventoryService`, and `NotificationService`. 

The business analysts require that the workflow must have clear visibility, explicit tracking of order completion status at every step, and centralized handling and recovery if a step fails.

#### Question 17: Selecting the Workflow Coordination Approach
Based on the Lecture 05 comparison between **Choreography** and **Orchestration**, which approach should the architect select, and what is its primary trade-off?  
*[Select TWO correct answers]*

- [ ] **A.** The architect should choose **Orchestration** because it uses a localized mediator/orchestration service that coordinates calls to participating services, providing better workflow control, state tracking, and error handling.
- [ ] **B.** The trade-off is that Orchestration **concentrates workflow coordination in a single service** and **creates additional coupling** between participating services and the orchestrator.
- [ ] **C.** The architect should choose Choreography because Choreography provides superior centralized state management and effortless error recovery.
- [ ] **D.** Both approaches require that services communicate only by printing paper receipts.
- [ ] **E.** Orchestration completely eliminates the need for any microservices.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In the lecture comparison table: Orchestration uses a localized mediator/orchestration service, concentrates workflow coordination, and is useful when a complex business process requires explicit coordination and error handling. Its trade-off is creating additional coupling to the orchestrator. Choreography has no central coordinator and makes error handling/coordination more complex.
* **Why C, D & E are INCORRECT:** Choreography makes state tracking and error handling harder (not effortless); paper receipts are absurd; and orchestration coordinates microservices (does not eliminate them).

---

### Scenario 4: The "Distributed Monolith" Anti-Pattern
Company Z decomposed its monolithic application into 25 microservices. However:
1. All 25 services must be compiled, tested, and deployed together in a strict lockstep order every Thursday night.
2. A single user click on the frontend triggers a synchronous chain of 10 REST HTTP calls across 10 services.
3. If any single service in the chain is temporarily unavailable, the entire transaction fails immediately.
4. All services share a single centralized database schema.

#### Question 18: Architectural Diagnosis of Company Z
What architecture has Company Z actually built, and what are its qualities according to lecture principles?  
*[Select TWO correct answers]*

- [ ] **A.** Company Z has built a **"Distributed Monolith" (බෙදාහැර ඇති ඒකශිලා විරෝධී රටාව)**, which combines the high operational and communication complexity of distributed systems with the deployment coupling of monoliths.
- [ ] **B.** The system suffers from **high network latency, fragile availability, and zero true deployment independence**, failing to achieve the core benefits of microservices.
- [ ] **C.** Company Z has created the ideal microservices reference architecture recommended by all textbooks.
- [ ] **D.** The system has zero communication complexity because services are separated into different folders.
- [ ] **E.** Company Z will achieve 5-star simplicity with this architecture.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When services cannot deploy independently, share a database, and rely on fragile synchronous request chains, the system becomes a Distributed Monolith. It incurs all the network overhead and operational complexity of distributed systems with none of the agility or deployability benefits.
* **Why C, D & E are INCORRECT:** It is an anti-pattern (not an ideal reference architecture); network latency is high; and simplicity is 1 star (☆).

---

### Scenario 5: Microservices Migration Without Operational Automation
A software company with 6 developers attempts to rewrite their successful monolithic web app into 50 microservices. However:
* Deployments are executed manually via FTP and SSH scripts.
* They have no automated service discovery, centralized monitoring, or automated failure recovery.
* There is no distributed logging or tracing; troubleshooting a failed customer transaction requires developers to manually SSH into 50 separate virtual machines and grep text log files.

After three months, release velocity drops to near zero and developer burnout reaches crisis levels.

#### Question 19: Analyzing the Root Cause of Failure
According to Lecture 05, what fundamental requirement for adopting Microservices Architecture was ignored?  
*[Select TWO correct answers]*

- [ ] **A.** Microservices has a **heavy reliance on operational automation** (automated deployment, containers/VMs, service discovery, monitoring, failure recovery, distributed logging/tracing, configuration management).
- [ ] **B.** Microservices gains flexibility **only if the organization has the engineering and operational maturity** to operate many independent services reliably.
- [ ] **C.** Microservices can only succeed if all 50 services are rewritten in pure Assembly code.
- [ ] **D.** The team failed because microservices systems do not require any logging or monitoring.
- [ ] **E.** Microservices systems should never be deployed to virtual machines or containers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The lecture explicitly states: *"Microservices relies heavily on operational automation: Automated deployment, Containers or virtual machines, Service discovery, Monitoring and Failure recovery mechanisms, Distributed logging and tracing, Configuration management, API gateways etc. Microservices gains flexibility only if the organisation can operate many independent services reliably."*
* **Why C, D & E are INCORRECT:** Assembly code is irrelevant; logging is essential; and containers/VMs are standard deployment units.

---

### Scenario 6: Independent Scalability Under Asymmetric Workloads
A nationwide healthcare portal experiences heavily asymmetric traffic patterns:
* **Appointment Search & Doctor Schedule Viewing:** Receives over 500,000 requests per minute during morning hours.
* **Medical Record Archival & Regulatory Reporting:** Receives only 20 requests per day, but each request runs heavy background data aggregation.

#### Question 20: Evaluating Independent Scalability
How does Microservices Architecture accommodate this asymmetric workload compared to a Monolithic architecture according to the lecture?  
*[Select TWO correct answers]*

- [ ] **A.** The `AppointmentSearchService` can be scaled horizontally to dozens of container instances to handle peak search traffic, while `ReportingService` runs on a single small instance, optimizing resource utilization.
- [ ] **B.** In a monolithic architecture, the entire application (including the heavy reporting components) would have to be replicated across all high-capacity servers, resulting in wasteful resource consumption.
- [ ] **C.** Microservices mandates that every service must always run on the exact same number of server instances regardless of traffic.
- [ ] **D.** Monolithic architectures scale far more cost-effectively under asymmetric traffic than microservices.
- [ ] **E.** Microservices architecture does not support horizontal scalability.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Lecture 05 highlights **Independent Scalability** as a core driver for distribution and a hallmark strength of microservices (5-star scalability). High-traffic domain services scale independently without duplicating low-demand services, unlike monoliths where the entire unit must be replicated.
* **Why C, D & E are INCORRECT:** Microservices scale independently (not identically); scaling whole monoliths for asymmetric load is wasteful; and microservices has 5-star scalability.
