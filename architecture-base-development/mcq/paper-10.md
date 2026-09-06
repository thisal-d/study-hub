# SE3100: Architecture Based Development
# Practice Exam Paper 10 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 10)
## Focus: Lecture 05 — Event-Driven Architecture, Space-Based Architecture & Style Ratings

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: What is Event-Driven Architecture (EDA)? (සිදුවීම් පාදක ගෘහ නිර්මාණ ශිල්පය)
Which of the following statements accurately define **Event-Driven Architecture (EDA)**?  
*[Select TWO correct answers]*

- [ ] **A.** An asynchronous distributed architectural style where decoupled components react to and publish **Events** reflecting state changes in the problem domain.
- [ ] **B.** Event producers emit events without needing to know which specific consumers (or how many consumers) will listen to or process those events.
- [ ] **C.** A style where every operation requires a synchronous HTTP GET request with a guaranteed immediate reply.
- [ ] **D.** An architecture designed exclusively to play digital sound effects through computer speakers.
- [ ] **E.** An architecture that is legally forbidden from processing financial transactions.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** EDA is an asynchronous architectural style where producers emit domain events (e.g., `OrderPlaced`) without knowing the identity or quantity of downstream consumers, providing high decoupling, responsiveness, and agility.
* **Why C, D & E are INCORRECT:** EDA is asynchronous (not synchronous HTTP GET); sound effects are physical media; and EDA is widely used in high-frequency trading and fintech.

---

### Question 2: Events vs. Commands vs. Messages (සිදුවීම්, විධාන සහ පණිවිඩ)
In asynchronous messaging architectures, how do **Events** differ from **Commands**?  
*[Select TWO correct answers]*

- [ ] **A.** An **Event (සිදුවීමක්)** is a statement of fact that has *already happened in the past* (e.g., `InvoiceCreated`, `UserRegistered`); producers cannot dictate what consumers do with it.
- [ ] **B.** A **Command (විධානයක්)** is an instruction sent to a specific target requesting that a specific action be performed in the *future* (e.g., `ChargeCreditCard`, `SendEmail`).
- [ ] **C.** An event is a command that has been translated into the French language.
- [ ] **D.** Commands can only be sent using physical paper mail envelopes.
- [ ] **E.** Events and commands are 100% identical with zero semantic distinction.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Events represent immutable historical facts that already occurred (past tense: `OrderShipped`). Commands represent directed intent instructing a specific recipient to act (imperative: `ShipOrder`).
* **Why C, D & E are INCORRECT:** Language translation, paper envelopes, and denying the semantic distinction are false.

---

### Question 3: The Two Topologies of Event-Driven Architecture (EDA හි ප්‍රධාන මුහුණුවර 2)
What are the **Two Primary Topologies** used to implement Event-Driven Architecture?  
*[Select TWO correct answers]*

- [ ] **A.** **Broker Topology (බ්‍රෝකර් / නර්තනමය මුහුණුවර):** A decentralized topology where event processors react independently to events published to a message broker with no central workflow coordinator.
- [ ] **B.** **Mediator Topology (මැදිහත්කාර / වාද්‍ය වෘන්ද මුහුණුවර):** A centralized topology where a dedicated Event Mediator orchestrates, sequences, and manages the multi-step event processing workflow.
- [ ] **C.** Space-Time Relativity Topology.
- [ ] **D.** Monolithic Mainframe Card Puncher Topology.
- [ ] **E.** All event-driven architectures have only one single topology.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The two fundamental topologies of EDA are the **Broker Topology** (choreographed, highly decoupled, no central coordinator) and the **Mediator Topology** (orchestrated, centralized workflow coordinator).
* **Why C, D & E are INCORRECT:** Relativity physics, punch-cards, and denying the two topologies are completely false.

---

### Question 4: What is Space-Based Architecture (SBA)? (අවකාශ පාදක ගෘහ නිර්මාණ ශිල්පය)
What is the core purpose and structural approach of **Space-Based Architecture (Tuple Space Style)**?  
*[Select TWO correct answers]*

- [ ] **A.** To achieve **extreme, near-infinite scalability and high concurrency** by eliminating the central relational database bottleneck from the transactional processing path.
- [ ] **B.** It keeps all transactional data in **In-Memory Replicated Data Grids** distributed directly across self-contained **Processing Units (PUs)**.
- [ ] **C.** It is designed exclusively for software installed on rocket ships traveling to the planet Mars.
- [ ] **D.** It forces all software to run without using any computer RAM.
- [ ] **E.** It is an architecture that completely prohibits users from making web requests.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Space-Based Architecture addresses the database scalability bottleneck (the "database wall"). It replicates in-memory data across Processing Units (PUs) using virtualized in-memory data grids, allowing extreme throughput and near-infinite horizontal scaling.
* **Why C, D & E are INCORRECT:** The name derives from "Tuple Space" in computer science (not outer space); it relies heavily on RAM; and it processes massive web traffic.

---

### Question 5: Components of a Processing Unit in Space-Based Architecture
What does an individual **Processing Unit (PU - සැකසුම් ඒකකය)** in a Space-Based Architecture contain?  
*[Select THREE correct answers]*

- [ ] **A.** Application business logic code.
- [ ] **B.** An in-memory data grid replica / cache containing local state.
- [ ] **C.** An underlying framework engine that executes transactions directly in RAM without hitting a disk database.
- [ ] **D.** A mechanical diesel combustion generator.
- [ ] **E.** A physical typewriter ribbon.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** A Processing Unit is a self-contained deployable bundle containing: (1) business logic, (2) an in-memory data grid instance (e.g., Hazelcast), and (3) an execution runtime that performs transactions in RAM.
* **Why D & E are INCORRECT:** Diesel engines and typewriter ribbons are hardware/mechanical artifacts.

---

### Question 6: The Role of the Data Pump in Space-Based Architecture (දත්ත පොම්පය)
In Space-Based Architecture, how does data eventually persist to a permanent relational database on physical disk?  
*[Select TWO correct answers]*

- [ ] **A.** A **Data Pump (දත්ත පොම්පය)** asynchronously reads in-memory updates from the data grid and writes them to the persistent database out-of-band.
- [ ] **B.** Because persistence occurs asynchronously in the background, user transactions do not wait for slow disk I/O, maintaining sub-millisecond response times.
- [ ] **C.** The Data Pump is a mechanical water pump used to cool server rooms.
- [ ] **D.** Persistent databases are never updated and all data is permanently lost when servers restart.
- [ ] **E.** The data pump requires software developers to manually type database rows every night.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Data Pump asynchronously pushes in-memory updates to disk storage out-of-band. The user's transaction finishes in memory in microseconds, eliminating disk I/O wait times.
* **Why C, D & E are INCORRECT:** It is a software component (not a water pump); data persists safely; and manual typing is absurd.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Broker Topology Characteristics & Trade-offs (බ්‍රෝකර් මුහුණුවරේ ලක්ෂණ)
Which of the following statements accurately characterize the **Broker Topology** in Event-Driven Architecture?  
*[Select THREE correct answers]*

- [ ] **A.** **High Performance & Responsiveness:** Event processors react immediately to published messages on message channels without waiting for a central orchestrator.
- [ ] **B.** **High Scalability & Loose Coupling:** Event processors can be scaled independently, and adding new event listeners requires zero modifications to existing event producers.
- [ ] **C.** **Difficult Error Handling & Transaction Rollbacks:** Because there is no central workflow coordinator, tracking multi-step transaction status and executing compensating rollbacks is complex.
- [ ] **D.** Broker topology requires a central human dispatcher to telephone all services before sending a message.
- [ ] **E.** Broker topology completely removes the need for any event broker software like Kafka or RabbitMQ.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Broker topology excels in performance, high throughput, and loose coupling, but suffers in workflow visibility, error handling, and transaction compensation because no single entity tracks overall status.
* **Why D & E are INCORRECT:** No human dispatching is needed, and an event broker (Kafka, RabbitMQ) is the foundational infrastructure.

---

### Question 8: Mediator Topology Characteristics & Trade-offs (මැදිහත්කාර මුහුණුවරේ ලක්ෂණ)
Which of the following statements accurately characterize the **Mediator Topology** in Event-Driven Architecture?  
*[Select THREE correct answers]*

- [ ] **A.** An **Event Mediator** orchestrates the sequence of events, maintaining workflow state, enforcing business steps, and coordinating error handling.
- [ ] **B.** Complex business transactions involving multiple steps and conditional branching are significantly easier to monitor, audit, and coordinate than in a Broker topology.
- [ ] **C.** **Potential Bottleneck / Scalability Trade-off:** The central Event Mediator can become an architectural bottleneck, and services become coupled to the mediator's command contracts.
- [ ] **D.** The Mediator topology is strictly banned from executing in cloud environments.
- [ ] **E.** A Mediator topology guarantees that no network cables will ever be required.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** The Mediator topology centralizes workflow control, making complex multi-step orchestration and error handling straightforward, at the cost of higher coupling to the mediator and potential throughput bottlenecks.
* **Why D & E are INCORRECT:** Mediators run in all cloud environments and rely on standard network infrastructure.

---

### Question 9: Virtualized Middleware Components in Space-Based Architecture
Space-Based Architecture utilizes **Virtualized Middleware (ප්‍රතීත මෘදුකාංග ස්ථරය)** to manage dynamic scaling and data synchronization. Which four components make up this middleware?  
*[Select FOUR correct answers]*

- [ ] **A.** **Messaging Grid (පණිවිඩ ජාලය):** Routes incoming client requests and sessions to available Processing Units.
- [ ] **B.** **Data Grid (දත්ත ජාලය):** Replicates in-memory state across all active Processing Units with zero-latency synchronization (e.g., Hazelcast IMDG).
- [ ] **C.** **Processing Grid (සැකසුම් ජාලය):** Coordinates parallel, distributed computational processing across multiple Processing Units.
- [ ] **D.** **Deployment Manager (ස්ථාපන කළමනාකරු):** Dynamically starts up new Processing Units or tears down idle Processing Units based on incoming load.
- [ ] **E.** **Office Janitorial Broom:** A cleaning broom used to sweep the computer laboratory floor.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** Space-Based Architecture's virtualized middleware consists of: (1) Messaging Grid, (2) Data Grid, (3) Processing Grid, and (4) Deployment Manager.
* **Why E is INCORRECT:** Cleaning brooms are physical maintenance tools, not software middleware.

---

### Question 10: Event Sourcing Pattern (සිදුවීම් මූල්‍යකරණ රටාව)
How does the **Event Sourcing Pattern** fundamentally alter traditional database state persistence?  
*[Select TWO correct answers]*

- [ ] **A.** Instead of storing only the *current state* of an entity by overwriting rows (e.g., SQL `UPDATE`), the system appends every state-changing domain event to an immutable, append-only **Event Store**.
- [ ] **B.** The current state of an entity is reconstructed at any point in time by replaying its historical stream of domain events from the beginning of time.
- [ ] **C.** Event sourcing requires all database records to be wiped clean every 60 seconds.
- [ ] **D.** Event sourcing proves that relational databases can never be used in software.
- [ ] **E.** Event sourcing forces all events to be written in binary Morse code.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Event Sourcing records every state change as an immutable event stream. Current state is derived by replaying events, providing a 100% audit log, temporal queries (time-travel debugging), and zero lost historical data.
* **Why C, D & E are INCORRECT:** Wiping databases is destructive, relational databases can store event streams, and Morse code is irrelevant.

---

### Question 11: Comparing Distributed Architectural Styles on Elasticity & Performance
According to Richards & Ford's characteristic rating matrix:
* Which distributed style receives the **highest possible 5-star rating for Performance and Elasticity/Scalability** due to in-memory processing?  
*[Select ONE correct answer]*

- [ ] **A.** Space-Based Architecture (SBA)
- [ ] **B.** Classic 4-Tier Layered Architecture
- [ ] **C.** Service-Based Architecture with a single shared MySQL database
- [ ] **D.** Mainframe Batch File Processing
- [ ] **E.** All distributed styles have identical 1-star performance ratings

**ANSWER:** A

**Explanation (විග්‍රහය):**
* **Why A is CORRECT:** Space-Based Architecture earns top ratings for Performance and Elasticity because requests execute in-memory across replicated data grids without waiting for synchronous database disk I/O bottlenecks.
* **Why B, C, D & E are INCORRECT:** Layered is monolithic; shared databases bottleneck SBA; batch processing is slow; and ratings differ dramatically across styles.

---

### Question 12: Architectural Complexity of Space-Based Architecture
Why does Space-Based Architecture receive a very **low rating for Simplicity and high Cost**?  
*[Select TWO correct answers]*

- [ ] **A.** Managing in-memory data grid replication, handling split-brain network partition scenarios, and keeping distributed caches synchronized requires specialized engineering and complex tooling.
- [ ] **B.** In-memory data grid licensing and large RAM footprint across dozens of replicated nodes significantly increase cloud infrastructure costs.
- [ ] **C.** Space-Based Architecture requires software engineers to travel to the International Space Station to deploy code.
- [ ] **D.** It is impossible to write software in RAM.
- [ ] **E.** Space-Based Architecture can only be run on vintage floppy disks.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** SBA is expensive and complex: massive RAM clusters, cache replication synchronization, handling network split-brain risks, and eventual consistency pumps require elite engineering.
* **Why C, D & E are INCORRECT:** Space stations, zero-RAM software, and floppy disks are ridiculous distortions.

---

### Question 13: Event-Driven Architecture: Asynchronous Backpressure (පසුපස පීඩන පාලනය)
In an Event-Driven Architecture, if an event producer publishes 100,000 events per second, but downstream event consumers can only process 20,000 events per second, how does the architecture prevent consumer crashes?  
*[Select TWO correct answers]*

- [ ] **A.** **Message Buffering in Event Channels:** The event broker (e.g., Kafka, RabbitMQ) buffers the surplus messages in durable queues, acting as a shock absorber.
- [ ] **B.** **Consumer-Driven Pull / Backpressure:** Consumers pull messages from the queue at their own sustainable processing rate, avoiding memory exhaustion.
- [ ] **C.** The event broker immediately terminates the operating system of the producer.
- [ ] **D.** The event broker deletes all unread messages without notifying anyone.
- [ ] **E.** Downstream consumers must catch fire and be replaced physically.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Message queues decouple processing velocity. Buffering absorbs sudden traffic bursts, allowing consumers to pull and process messages at a steady, sustainable pace (backpressure) without crashing.
* **Why C, D & E are INCORRECT:** Terminating OSes, silently dropping messages, and catching fire are unacceptable system behaviors.

---

### Question 14: Comprehensive Distributed Styles Comparison Matrix
Match each distributed architectural style with its ideal primary use case:
1. **Service-Based Architecture:**
2. **Microservices Architecture:**
3. **Event-Driven Architecture:**
4. **Space-Based Architecture:**

Which associations are **CORRECT**?  
*[Select THREE correct answers]*

- [ ] **A.** **Space-Based Architecture:** High-volume bidding, concert ticket sales, or online auctions where millions of concurrent users compete and relational databases cannot scale.
- [ ] **B.** **Event-Driven Architecture:** Highly decoupled, responsive systems with dynamic, non-linear workflows (e.g., IoT telemetry, algorithmic trading, real-time tracking).
- [ ] **C.** **Service-Based Architecture:** Pragmatic enterprise migration dividing a monolith into coarse domains while preserving ACID database transactions.
- [ ] **D.** Microservices Architecture: Simple applications built by a solo developer over a weekend.
- [ ] **E.** Space-Based Architecture: Low-budget static personal blogs with 2 visitors per week.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Space-Based solves database bottlenecks under extreme bidding/ticketing load; EDA excels in asynchronous, decoupled reactive flows; and SBA provides pragmatic domain decomposition with a shared database.
* **Why D & E are INCORRECT:** Microservices are massive overkill for a solo developer, and Space-Based is far too complex and costly for a tiny personal blog.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Concert Ticket Flash Sale Under Massive Concurrency
A national ticketing agency sells tickets for world-famous pop concerts. When tickets go on sale at 10:00 AM, 3,000,000 fans simultaneously rush the website to purchase 50,000 available seats.  
In the previous monolithic design, the relational database locked up immediately under 100,000 connection pool requests, resulting in a total site crash.

The lead architect refactors the ticketing engine into a **Space-Based Architecture (SBA)**:
* Ticket inventory is loaded into an In-Memory Data Grid replicated across 30 Processing Units.
* Seat reservation transactions execute directly in RAM in 200 microseconds.
* A Data Pump asynchronously pushes confirmed purchases to a permanent MySQL database out-of-band.

#### Question 15: Evaluating the Space-Based Ticket Solution
Why does Space-Based Architecture succeed where traditional database architectures fail?  
*[Select TWO correct answers]*

- [ ] **A.** It completely removes the relational database from the critical user transaction path, eliminating database row-locking contention and disk I/O bottlenecks during peak traffic.
- [ ] **B.** All seating availability checks and reservation state locks occur in high-speed, replicated in-memory RAM grids across Processing Units.
- [ ] **C.** It forces all 3,000,000 fans to receive free tickets without paying.
- [ ] **D.** Space-Based Architecture guarantees that pop stars will sing twice as fast.
- [ ] **E.** It proves that computer memory is obsolete and software should run on radio waves.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The relational database cannot handle millions of simultaneous transactional locks on disk. Space-Based Architecture processes reservations in-memory in microseconds across processing units, persisting to disk asynchronously.
* **Why C, D & E are INCORRECT:** Tickets still cost money; music speed is unaffected; and memory is vital.

---

### Scenario 2: Selecting EDA Topology for an E-Commerce Fulfillment Pipeline
An e-commerce company processes customer orders. When an order is placed:
1. Credit card is charged.
2. Warehouse inventory is reserved.
3. Shipping label is printed.
4. Loyalty reward points are credited.
5. Confirmation SMS is dispatched.

The order workflow is **strictly linear, business-critical, and requires centralized auditability and automated compensation (refunds)** if inventory is unavailable.

#### Question 16: Broker vs. Mediator Topology Selection
Which Event-Driven Architecture topology should the architect select, and why?  
*[Select TWO correct answers]*

- [ ] **A.** Select the **Mediator Topology (මැදිහත්කාර මුහුණුවර)** because the business transaction requires coordinated multi-step workflow control, strict step sequencing, and centralized compensation/rollback handling.
- [ ] **B.** The central Event Mediator acts as the orchestrator, tracking the state of each order step and issuing commands to specific processing queues.
- [ ] **C.** Select the Broker Topology because business transactions should never have any error recovery.
- [ ] **D.** Select a single text file and delete all event queues.
- [ ] **E.** The Mediator topology is strictly banned for e-commerce websites.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When a business workflow requires strict sequencing, centralized auditing, and multi-step transaction compensations (rollbacks), the **Mediator Topology** is superior to Broker because the mediator maintains global workflow state.
* **Why C, D & E are INCORRECT:** Broker topology makes multi-step rollbacks difficult; text files are inadequate; and Mediator is standard for e-commerce checkout.

---

### Scenario 3: Real-Time Ride-Sharing Matching (Uber/Lyft Style)
A ride-sharing platform connects 50,000 active passenger apps and 10,000 driver apps. Every 3 seconds, driver apps emit real-time GPS coordinates (`DriverMovedEvent`).  
Various independent subsystems need this data:
* `MapDisplayService`: Updates driver car icons on nearby passenger screens.
* `SurgePricingEngine`: Calculates geographic supply/demand ratios to adjust prices.
* `DriverFraudDetection`: Flags impossible GPS teleportation jumps.
* `TrafficCongestionAnalyzer`: Feeds city traffic speed algorithms.

#### Question 17: Architectural Evaluation of Broker Topology
Why is the **Broker (Choreographed) Topology** the ideal architectural fit for this telemetry stream?  
*[Select TWO correct answers]*

- [ ] **A.** High throughput and low latency: GPS events can be broadcast to high-capacity event brokers (e.g., Apache Kafka), and consumers process messages in parallel without a central coordinator bottleneck.
- [ ] **B.** Extensibility & Decoupling: New analytical services (e.g., `CityPollutionAnalyzer`) can be added to the event topic at any time without modifying or notifying driver mobile apps.
- [ ] **C.** The Broker topology requires all drivers to stop their cars when sending a GPS event.
- [ ] **D.** The Broker topology guarantees that no passenger will ever need a taxi ride.
- [ ] **E.** The system should use synchronous HTTP REST calls from the driver's phone to all 4 backend services simultaneously.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Fire-and-forget telemetry streams requiring high throughput and decoupled subscribers (adding new consumers without producer changes) represent the sweet spot for the **Broker Topology** on an event bus (e.g., Kafka).
* **Why C, D & E are INCORRECT:** Cars keep moving; passengers still ride; and calling 4 REST endpoints from mobile phones wastes bandwidth and battery.

---

### Scenario 4: Handling Event Schema Drift in Asynchronous Systems
In an Event-Driven Architecture, Service A emits an event `UserRegisteredEvent` with payload `{ "userId": 123, "userName": "Alice" }`. Six months later, Service A updates the event payload to `{ "userId": 123, "fullName": "Alice Smith" }` (renaming `userName` to `fullName`).  
Immediately, five downstream consumer services crash because they were expecting the old field name `userName`.

#### Question 18: Architectural Governance of Event Schemas
How should the architecture team prevent breaking downstream consumers during event evolution?  
*[Select TWO correct answers]*

- [ ] **A.** Implement a centralized **Schema Registry** (e.g., Confluent Schema Registry using Apache Avro or Protobuf) to enforce backward-compatible event schema evolution rules.
- [ ] **B.** Follow the **Tolerant Reader Pattern** and maintain dual fields (`userName` and `fullName`) during a deprecation transition period so existing consumers do not break.
- [ ] **C.** Never allow software systems to change field names under any circumstances.
- [ ] **D.** Force all downstream consumers to share the exact same source code repository as Service A.
- [ ] **E.** Delete all event consumers and rewrite the system into a single monolithic script.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Asynchronous event schemas require governance. A Schema Registry enforces backward compatibility, and the Tolerant Reader / dual-field deprecation pattern ensures existing consumers can continue parsing events smoothly.
* **Why C, D & E are INCORRECT:** Schemas must evolve; sharing source repos violates service decoupling; and deleting consumers is destructive.

---

### Scenario 5: Managing Split-Brain in Space-Based In-Memory Grids
A Space-Based Architecture operates an in-memory data grid distributed across two physical cloud data centers. A network fiber optic cable cut severs communication between the two data centers (network partition).  
If both data centers continue accepting write transactions independently, their in-memory data grids will diverge and contain conflicting account balances.

#### Question 19: Addressing Network Partitions in Data Grids
Under the CAP Theorem and Space-Based Architecture principles, how must the architecture handle this network partition?  
*[Select TWO correct answers]*

- [ ] **A.** The system must choose between **Consistency** (designating one data center as primary and rejecting writes in the isolated partition) or **Availability** (accepting writes in both, requiring complex post-partition reconciliation algorithms).
- [ ] **B.** A **Quorum-based consensus mechanism** (e.g., Raft/Paxos) ensures that only the data center holding the majority ($> 50\%$) of nodes is permitted to accept new write transactions.
- [ ] **C.** Both data centers should automatically catch fire and self-destruct.
- [ ] **D.** The CAP theorem does not apply to in-memory data grids because RAM violates physics.
- [ ] **E.** The system should solve the problem by deleting all customer bank accounts.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Network partitions in distributed in-memory data grids are governed by the CAP theorem. Quorum consensus ensures that only the majority partition accepts writes, preventing split-brain data corruption.
* **Why C, D & E are INCORRECT:** Hardware does not self-destruct; the CAP theorem applies to all distributed networks (including in-memory grids); and deleting accounts is absurd.

---

### Scenario 6: The Ultimate Architectural Trade-off Summary
A Chief Technology Officer (CTO) is presenting an architectural strategy roadmap to executive stakeholders, summarizing the trade-offs of the primary architectural styles:
* Monolithic Styles: Layered, Modular Monolith, Microkernel.
* Distributed Styles: Service-Based, Microservices, Event-Driven, Space-Based.

#### Question 20: Core Architectural Truths for Executives
Which two overarching architectural maxims must the CTO emphasize to management?  
*[Select TWO correct answers]*

- [ ] **A.** **"There is no single best architecture for every problem; every architecture is a bundle of trade-offs, and architects strive for the Least-Worst Architecture."**
- [ ] **B.** **"Do not distribute your architecture unless the business requirements (extreme scale, independent team deployment, fault isolation) strictly demand it, because distribution adds significant network latency, operational complexity, and data consistency penalties."**
- [ ] **C.** "Microservices should always be chosen for every project regardless of team size or requirements because monoliths are completely obsolete."
- [ ] **D.** "Distributed architectures eliminate all network latency and make software run for free."
- [ ] **E.** "Software architecture is an unnecessary activity that has zero impact on software systems."

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** These represent the two cardinal laws of software architecture: (1) Everything is a trade-off (Least-Worst Architecture), and (2) First Law of Software Architecture: *"Never distribute components unless you have to,"* because distribution introduces fallacies, complexity, and latency.
* **Why C, D & E are INCORRECT:** Microservices are not a silver bullet; network latency is never zero; and architecture is essential for system longevity and success.
