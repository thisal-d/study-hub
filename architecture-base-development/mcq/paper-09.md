# SE3100: Architecture Based Development
# Practice Exam Paper 09 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 09)
## Focus: Lecture 05 — Microservices Architecture (Sagas, Distributed Transactions & Resilience)

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Core Principles of Microservices (ක්ෂුද්‍ර සේවා ගෘහ නිර්මාණ ශිල්පයේ මූලික ලක්ෂණ)
Which of the following statements represent fundamental principles of the **Microservices Architecture Style**?  
*[Select THREE correct answers]*

- [ ] **A.** **Single Responsibility / High Cohesion (තනි වගකීම):** Each microservice models a single, well-defined business capability or bounded context.
- [ ] **B.** **Database-per-Service (සේවාවකට වෙනම දත්ත සමුදායක්):** Each microservice exclusively owns and encapsulates its private database/datastore; direct cross-service database access is prohibited.
- [ ] **C.** **Independent Deployability (ස්වාධීන ස්ථාපන හැකියාව):** Each service can be built, tested, containerized, and deployed to production independently without redeploying other services.
- [ ] **D.** All microservices must be compiled together into a single monolithic `.war` file.
- [ ] **E.** All microservices must share a single, global MySQL database table without any passwords.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Microservices mandate single responsibility (bounded context), private database-per-service (data encapsulation), and independent deployment pipelines.
* **Why D & E are INCORRECT:** Compiling into a single WAR and sharing raw database tables are defining traits of monoliths, directly violating microservice principles.

---

### Question 2: Why Avoid Two-Phase Commit (2PC) in Microservices?
Why is the classic distributed transaction protocol **Two-Phase Commit (2PC / XA Transactions)** considered an **Anti-Pattern** in modern Microservices?  
*[Select TWO correct answers]*

- [ ] **A.** **Performance & Latency Bottleneck:** 2PC holds synchronous database locks across distributed network nodes during the prepare and commit phases, creating severe latency and throughput bottlenecks.
- [ ] **B.** **Availability Penalty (CAP Theorem):** If any single service or network link becomes unreachable during the commit phase, the entire transaction blocks, crippling system availability.
- [ ] **C.** 2PC was declared illegal by the United Nations.
- [ ] **D.** 2PC speeds up transactions by 1,000,000% and makes code too fast to read.
- [ ] **E.** 2PC is only supported on mechanical typewriter machines.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** 2PC holds synchronous distributed locks across networks. If a single node is slow or fails, all locks remain held, destroying throughput and availability across services.
* **Why C, D & E are INCORRECT:** 2PC is a technical database protocol (not an illegal UN ban); it slows transactions down (not speeds them up); and typewriters do not run transactions.

---

### Question 3: The Saga Pattern for Distributed Transactions (සාගා රටාව)
How does the **Saga Pattern (සාගා රටාව)** manage distributed business transactions across multiple microservices without distributed database locks?  
*[Select TWO correct answers]*

- [ ] **A.** It decomposes a distributed transaction into a sequence of **local database transactions** across participating services.
- [ ] **B.** Each local transaction updates its private database and publishes an event or message that triggers the next local transaction in the saga.
- [ ] **C.** It forces all microservices to merge back into a single monolithic SQL table.
- [ ] **D.** It requires human bank managers to manually click buttons for every database record.
- [ ] **E.** It guarantees that transactions execute in negative zero seconds.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A Saga coordinates transactions as a sequence of local transactions: each service executes its own local ACID transaction and emits an event to trigger the next service, achieving eventual consistency without global distributed locks.
* **Why C, D & E are INCORRECT:** Sagas do not merge databases into monoliths, require no manual human clicking, and execute within normal time.

---

### Question 4: Compensating Transactions in a Saga (වන්දි ගෙවීමේ ගනුදෙනු)
In a Saga, if a step fails midway (e.g., payment succeeds, but inventory reservation fails), how does the system recover to a consistent state?  
*[Select TWO correct answers]*

- [ ] **A.** The system executes a series of **Compensating Transactions (වන්දි ගෙවීමේ ගනුදෙනු)** that semantically reverse/undo the effects of previously completed local transactions (e.g., issuing a refund for the charged payment).
- [ ] **B.** It achieves **Eventual Consistency (අවසාන අනුකූලතාව)** rather than immediate atomic rollback.
- [ ] **C.** The server hardware self-destructs and catches fire to erase the error.
- [ ] **D.** The system ignores the failure and ships empty boxes to the customer.
- [ ] **E.** The system permanently deletes the customer's home address.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In a Saga, you cannot automatically rollback a committed local transaction. Instead, compensating transactions execute semantic reversals (e.g., refunding a card, canceling a reservation) to achieve eventual consistency.
* **Why C, D & E are INCORRECT:** Hardware does not ignite; shipping empty boxes is fraudulent; and deleting addresses is destructive.

---

### Question 5: Choreography vs. Orchestration Sagas
What is the difference between a **Choreographed Saga** and an **Orchestrated Saga**?  
*[Select TWO correct answers]*

- [ ] **A.** **Choreographed Saga (නර්තනමය සාගා):** Services react independently to domain events published by other services without any central coordinator.
- [ ] **B.** **Orchestrated Saga (වාද්‍ය වෘන්ද සාගා):** A centralized orchestrator service (Saga Execution Coordinator - SEC) explicitly sends command messages to each participating service, instructing them which local transaction to execute next.
- [ ] **C.** Choreographed sagas can only be used by ballet dancing schools.
- [ ] **D.** Orchestrated sagas require the company CEO to play a musical instrument.
- [ ] **E.** Both types of sagas require all services to run on a single computer monitor.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Choreography is decentralized event-driven coordination (services listen and react). Orchestration relies on a central coordinator that explicitly manages the workflow state machine and issues commands.
* **Why C, D & E are INCORRECT:** Ballet, musical instruments, and computer monitors have nothing to do with distributed workflow patterns.

---

### Question 6: The Circuit Breaker Pattern (පරිපථ බිඳින්නන්ගේ රටාව)
What are the three operational states of the **Circuit Breaker Pattern**?  
*[Select THREE correct answers]*

- [ ] **A.** **Closed (සංවෘත තත්ත්වය):** Normal operation; remote calls pass through to the target service.
- [ ] **B.** **Open (විවෘත තත්ත්වය):** The target service has failed repeatedly; calls fail immediately (fast-fail) without making network requests, returning a cached/fallback response.
- [ ] **C.** **Half-Open (අර්ධ-විවෘත තත්ත්වය):** After a cooldown period, the circuit allows a limited number of trial requests to test if the failing service has recovered.
- [ ] **D.** **Quantum Superposition:** The circuit breaker exists simultaneously in 50 physical universes.
- [ ] **E.** **Permanent Destruction:** The circuit breaker melts down all motherboard wires.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Closed (healthy/passthrough), Open (tripped/fast-fail), and Half-Open (probing for recovery) are the three canonical states of the Circuit Breaker pattern.
* **Why D & E are INCORRECT:** Superposition and wire meltdown are physics/hardware absurdities.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Service Discovery: Client-Side vs. Server-Side (සේවා සොයාගැනීම)
In a dynamic cloud environment where microservice container instances spin up and shut down with dynamically changing IP addresses, how does **Service Discovery** work?  
*[Select TWO correct answers]*

- [ ] **A.** **Client-Side Discovery (පාරිභෝගික පාර්ශ්වීය සොයාගැනීම):** The client queries a Service Registry (e.g., Netflix Eureka, Consul) to retrieve available service instance IP addresses and executes local load-balancing algorithms.
- [ ] **B.** **Server-Side Discovery (සේවාදායක පාර්ශ්වීය සොයාගැනීම):** The client sends requests to a stable router / load balancer (e.g., AWS ALB, Kubernetes Service), which queries the registry and forwards the request to an available instance.
- [ ] **C.** All microservices must have their IP addresses permanently carved into stone tablets.
- [ ] **D.** Service discovery requires software engineers to manually edit `/etc/hosts` files on every server every 30 seconds.
- [ ] **E.** Dynamic service discovery is strictly banned by cloud providers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Dynamic service instances require Service Discovery. Client-side discovery lets the client query the registry directly; Server-side discovery routes traffic through an intelligent load balancer (e.g., Kubernetes DNS/Service).
* **Why C, D & E are INCORRECT:** Dynamic IPs change too fast for stone tablets or manual `/etc/hosts` editing, and clouds natively provide discovery tools.

---

### Question 8: API Gateway / Backends for Frontends (BFF) Pattern
Why do modern microservice architectures utilize an **API Gateway** or the **Backends for Frontends (BFF)** pattern?  
*[Select THREE correct answers]*

- [ ] **A.** **Request Aggregation / Fan-Out:** Aggregating data from multiple internal microservices into a single consolidated response, preventing mobile apps from making 30 separate network calls.
- [ ] **B.** **Tailored Client Contracts:** Providing different specialized API endpoints optimized for different frontends (e.g., lightweight payloads for mobile apps vs. comprehensive payloads for desktop web).
- [ ] **C.** **Centralized Edge Security:** Enforcing JWT token verification, rate-limiting, and TLS termination at the edge before traffic reaches internal services.
- [ ] **D.** To replace all backend microservices with static text files.
- [ ] **E.** To guarantee that external users can directly edit raw database tables.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** An API Gateway / BFF aggregates distributed responses, tailors payloads to specific client devices, and handles edge cross-cutting concerns (authentication, rate-limiting, SSL).
* **Why D & E are INCORRECT:** Gateways do not replace services with text files, nor do they expose raw database tables to users.

---

### Question 9: The Bulkhead Pattern for Fault Isolation (බල්ක්හෙඩ් රටාව)
Named after the watertight compartments in a ship's hull, how does the **Bulkhead Pattern** protect a microservice ecosystem?  
*[Select TWO correct answers]*

- [ ] **A.** It partitions system resources (e.g., thread pools, memory, CPU limits) into isolated pools so that an overloaded or failing downstream dependency cannot consume all server resources and crash the entire service.
- [ ] **B.** If requests to an external slow third-party API exhaust their dedicated thread pool of 10 threads, other critical operations (using separate thread pools) continue functioning normally.
- [ ] **C.** It causes the ship to sink immediately when an error is logged.
- [ ] **D.** It completely eliminates the need for software to use computer memory.
- [ ] **E.** It forces all microservices to be hosted on floating marine cargo ships.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Bulkheading isolates thread pools or connection limits per dependency. If one downstream service stalls, it exhausts only its designated pool, preventing catastrophic resource starvation of the entire application.
* **Why C, D & E are INCORRECT:** Ships sinking, zero-memory software, and maritime hosting are humorous misunderstandings of the nautical metaphor.

---

### Question 10: Trade-Off Analysis: Choreographed vs. Orchestrated Sagas
What are the respective trade-offs between Choreographed and Orchestrated Sagas?  
*[Select TWO correct answers]*

- [ ] **A.** **Choreography:** Simple to set up for small workflows and offers loose coupling, **but** becomes extremely difficult to track, understand, and debug as the number of steps grows (workflow logic is dispersed across services).
- [ ] **B.** **Orchestration:** Centralizes workflow status, simplifies auditing, and makes complex error-handling clear, **but** risks turning the orchestrator into an overly smart "God Object" bottleneck that tightly couples domain logic.
- [ ] **C.** Choreography requires all services to share a single physical hard drive.
- [ ] **D.** Orchestration makes it impossible to use event queues.
- [ ] **E.** Both types of sagas guarantee immediate ACID consistency across all databases.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Choreography is decoupled but hard to visualize/debug in complex flows. Orchestration is clear and centralized but risks introducing an over-centralized bottleneck.
* **Why C, D & E are INCORRECT:** Sagas use private databases (not shared disks); orchestrators use event queues; and sagas provide *eventual* consistency, not immediate ACID.

---

### Question 11: CQRS (Command Query Responsibility Segregation) in Microservices
Why is the **CQRS Pattern** frequently paired with Event-Driven Microservices?  
*[Select TWO correct answers]*

- [ ] **A.** It separates **Write Operations (Commands)** from **Read Operations (Queries)**, allowing the data models, database technologies, and scaling strategies for reads and writes to be optimized independently.
- [ ] **B.** In a system with separate microservice databases, executing cross-service join queries is difficult; CQRS projects domain events into a denormalized read database optimized for fast querying.
- [ ] **C.** It mandates that all database queries must be written in handwriting on paper.
- [ ] **D.** It forces all software developers to execute SQL statements through Morse code.
- [ ] **E.** CQRS guarantees that all data reads will always cost $1,000 per query.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** With database-per-service, cross-service queries are slow. CQRS solves this by listening to events and populating read-optimized views (e.g., Elasticsearch), cleanly decoupling write models from read models.
* **Why C, D & E are INCORRECT:** Handwriting, Morse code, and query fees are absurd.

---

### Question 12: Architectural Quanta in Microservices Architecture
How many **Architectural Quanta** exist in a genuine Microservices Architecture containing 15 microservices, where each service owns its private database and communicates asynchronously via an event broker?  
*[Select TWO correct answers]*

- [ ] **A.** It represents **15 distinct Architectural Quanta (ගෘහ නිර්මාණ ක්වොන්ටා 15ක්)** because each microservice has independent deployability, separate data storage, and autonomous quality attributes.
- [ ] **B.** Each quantum can scale independently (e.g., Service 1 can run 50 instances on high-memory nodes, while Service 2 runs 2 instances on lightweight nodes).
- [ ] **C.** It represents exactly one single architectural quantum.
- [ ] **D.** Microservices architectures are prohibited from possessing any architectural quanta.
- [ ] **E.** It represents 0.5 quanta.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When services own private databases and decouple communication asynchronously, each service forms an independent Architectural Quantum. Each can scale, deploy, and configure quality attributes autonomously.
* **Why C, D & E are INCORRECT:** Separate databases and deployment boundaries create 15 quanta (not 1 or 0); and fractional quanta do not exist.

---

### Question 13: Retry with Exponential Backoff and Jitter (නැවත උත්සාහ කිරීමේ උපායමාර්ග)
When a microservice encounters a transient network timeout while calling another service, why should it use **Exponential Backoff with Jitter (අනුපාතික ප්‍රමාදය සහ අහඹු කාල විචලනය)** instead of immediate rapid retries?  
*[Select TWO correct answers]*

- [ ] **A.** **Exponential Backoff:** Progressively increases the delay between retries (e.g., 100ms, 200ms, 400ms, 800ms) to give the struggling downstream service time to recover.
- [ ] **B.** **Jitter (Randomness):** Adds random variance to retry intervals, preventing the **"Thundering Herd Problem" (බිඳවැටුණු සේවා වෙත එකවර එල්ලවන ප්‍රහාරය)** where hundreds of clients retry at the exact same millisecond and re-crash the recovering service.
- [ ] **C.** It forces the client's laptop to turn off automatically.
- [ ] **D.** It ensures that network requests are transmitted via satellite lasers.
- [ ] **E.** Immediate rapid retries in a tight loop are considered the best way to heal a crashed server.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Exponential backoff spaces out retries, and jitter randomizes the timing, preventing synchronized retry stampedes (thundering herds) that repeatedly overwhelm a recovering service.
* **Why C, D & E are INCORRECT:** Laptops do not turn off; satellite lasers are irrelevant; and tight-loop retries guarantee crashing the target service again.

---

### Question 14: Characteristic Ratings of Microservices Style
According to Richards & Ford's architectural rating matrix, what are the primary **weaknesses and operational penalties** of Microservices Architecture?  
*[Select THREE correct answers]*

- [ ] **A.** **High Overall Architectural & Operational Complexity:** Managing service discovery, distributed tracing, container orchestration (Kubernetes), and API gateways requires immense expertise.
- [ ] **B.** **Low Performance / Latency Overhead:** Extensive network hops, JSON/gRPC serialization, and distributed security handshakes add latency compared to in-memory method calls.
- [ ] **C.** **Challenging Testability:** End-to-end integration testing across 40 distributed services with eventual consistency is vastly harder than testing a local monolithic application.
- [ ] **D.** Inability to deploy code to cloud servers.
- [ ] **E.** Inability to run on Intel or AMD computer processors.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Microservices excel in scalability and deployability, but suffer severe penalties in operational complexity, network latency overhead, and distributed testing difficulty.
* **Why D & E are INCORRECT:** Microservices are built specifically for the cloud and run on all standard Intel/AMD/ARM processors.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: E-Commerce Distributed Checkout Saga Failure
In an e-commerce platform using microservices, an order checkout workflow executes the following steps:
1. `OrderService`: Creates an `Order` record with status `PENDING`.
2. `PaymentService`: Successfully charges $150 to the customer's credit card.
3. `InventoryService`: Attempts to reserve the ordered item, but finds the item is out of stock, throwing an `InventoryExhaustedException`.

#### Question 15: Executing the Compensating Transaction
Under the Saga Pattern, what must the architecture do to restore business consistency?  
*[Select TWO correct answers]*

- [ ] **A.** `InventoryService` publishes an `InventoryReservationFailedEvent`.
- [ ] **B.** `PaymentService` listens for this failure event and executes a **Compensating Transaction** that automatically refunds the $150 charge to the customer's credit card.
- [ ] **C.** The system should ignore the error, keep the customer's $150, and never ship any item.
- [ ] **D.** The system should lock the entire global banking network for 72 hours.
- [ ] **E.** The system should force the customer to purchase an airline ticket.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** When inventory fails, the saga triggers compensating transactions: an `InventoryReservationFailedEvent` prompts `PaymentService` to refund the customer and `OrderService` to mark the order `CANCELLED`.
* **Why C, D & E are INCORRECT:** Keeping money without goods is theft; locking global networks is impossible; and airline tickets are irrelevant.

---

### Scenario 2: Cascading Outage via Thread Pool Exhaustion
During a marketing flash sale, an external currency conversion service slows down from 50 ms to 30 seconds per request. Because the `CheckoutService` invokes this currency service synchronously using a shared thread pool with no timeouts or circuit breakers, all 200 worker threads in `CheckoutService` become blocked waiting for currency rates. Consequently, domestic customers paying in local currency (who do not even need currency conversion) receive HTTP 504 Gateway Timeout errors and cannot checkout.

#### Question 16: Remediating the Cascading Failure
Which resilience patterns should the architecture team implement immediately?  
*[Select TWO correct answers]*

- [ ] **A.** **Circuit Breaker & Strict Timeouts:** Wrap the currency conversion client in a Circuit Breaker with a 1-second timeout, failing fast and using fallback cached exchange rates if the service degrades.
- [ ] **B.** **Bulkhead Pattern:** Isolate currency conversion requests to a dedicated, limited thread pool (e.g., max 10 threads), ensuring that a slow currency service can never starve the primary checkout thread pool.
- [ ] **C.** Increase the thread timeout to 5 hours so that requests wait indefinitely.
- [ ] **D.** Delete all payment methods and force customers to visit the company office in person.
- [ ] **E.** Remove the internet connection from the web server.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Timeouts + Circuit Breakers prevent calls from hanging, while Bulkheads isolate resources so that a slow third-party API cannot exhaust the main application thread pool.
* **Why C, D & E are INCORRECT:** 5-hour timeouts worsen starvation; in-person visits destroy e-commerce; and removing the internet breaks the site.

---

### Scenario 3: Bounded Context Violation via Distributed Foreign Keys
In an online food delivery microservices application, a developer in the `DeliveryTrackingService` directly stores the foreign key `restaurant_id` in its delivery table. To display the restaurant's phone number on the delivery tracker screen, `DeliveryTrackingService` makes a synchronous HTTP REST call to `RestaurantCatalogService` on every single GPS coordinate ping (every 2 seconds per driver for 20,000 drivers).

During dinner rush, the `RestaurantCatalogService` crashes due to 10,000 requests per second of repetitive lookups.

#### Question 17: Architectural Redesign via Data Replication / CQRS
How should the architect redesign this interaction to eliminate the synchronous bottleneck?  
*[Select TWO correct answers]*

- [ ] **A.** Apply **Event-Driven Data Replication**: When an order is placed, replicate the snapshot of required restaurant metadata (name, phone number) directly into the `DeliveryTrackingService`'s local event payload or database.
- [ ] **B.** Decouple the services so that `DeliveryTrackingService` reads locally from its own cached snapshot during tracking, eliminating all synchronous HTTP queries to `RestaurantCatalogService`.
- [ ] **C.** Increase the GPS ping rate to 100 times per second to see if the catalog service recovers.
- [ ] **D.** Force delivery drivers to memorize all restaurant phone numbers in their heads.
- [ ] **E.** Merge all food delivery services into a single text file.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Synchronously querying catalog data on high-frequency tracking pings violates service independence. Replicating static snapshot data (name, phone) inside the delivery order record allows the tracking service to function autonomously without network calls.
* **Why C, D & E are INCORRECT:** Increasing ping frequency worsens the crash; driver memorization is impossible; and single text files are not software architecture.

---

### Scenario 4: The "Distributed Monolith" Anti-Pattern
Company Z split its monolithic system into 30 microservices. However:
1. All 30 services must be deployed together in a strict lockstep order every Tuesday night.
2. A single user click on the frontend triggers a chain of 14 synchronous REST HTTP calls across 14 services.
3. If any single service of the 14 is down, the user request fails completely.
4. All services share a single Oracle database.

#### Question 18: Architectural Assessment of Company Z
What architecture has Company Z actually built, and what are its qualities?  
*[Select TWO correct answers]*

- [ ] **A.** Company Z has built a **"Distributed Monolith" (බෙදාහැර ඇති ඒකශිලා විරෝධී රටාව)**, which combines the worst operational complexity of distributed systems with the worst deployment coupling of monoliths.
- [ ] **B.** The system exhibits **low availability, high network latency, extreme fragility**, and zero true deployment independence.
- [ ] **C.** Company Z has built a world-class, state-of-the-art microservices system that all companies should imitate.
- [ ] **D.** The system has zero network latency because services use HTTP.
- [ ] **E.** The system will automatically fix itself if the company buys more office desks.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A Distributed Monolith has all the downsides of microservices (network latency, distributed failures, complex ops) with none of the benefits (it cannot deploy independently, shares a database, and chains synchronous calls).
* **Why C, D & E are INCORRECT:** It is an anti-pattern (not world-class); HTTP adds latency; and office desks do not solve code topology flaws.

---

### Scenario 5: Service Mesh for Infrastructure Concerns
An enterprise operates 60 microservices written in a mix of Java, Go, Python, and Node.js. Developers spend weeks writing duplicate library code in four different languages to handle mTLS encryption, JWT token parsing, circuit breaking, distributed tracing (Zipkin/Jaeger headers), and request retries.

The lead architect introduces a **Service Mesh (e.g., Istio with Envoy Sidecar proxies)**.

#### Question 19: Evaluating the Service Mesh Impact
What architectural benefit does the Service Mesh provide to the polyglot microservice ecosystem?  
*[Select TWO correct answers]*

- [ ] **A.** It extracts cross-cutting operational and networking concerns (mTLS, telemetry, tracing, retries, traffic routing) out of the application code and pushes them into an external infrastructure sidecar proxy tier.
- [ ] **B.** Developers can focus entirely on writing business domain logic in their respective programming languages without reimplementing networking and security libraries in each language.
- [ ] **C.** It eliminates the need for computer servers by running code inside internet cables.
- [ ] **D.** It automatically translates Python code into Java code at compile time.
- [ ] **E.** It forces all microservices to use the same database password.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A Service Mesh deploys sidecar proxies alongside each service container, handling mTLS, telemetry, tracing, and retries transparently across polyglot languages, freeing engineers to focus on business domain logic.
* **Why C, D & E are INCORRECT:** Software requires servers; service meshes do not transpile languages; and shared database passwords violate microservice security.

---

### Scenario 6: Microservices Independent Scalability in Real Estate Portal
A real estate property portal experiences asymmetric traffic:
* **Property Search & Photo Browsing:** Experiences 1,000,000 requests per minute during evening hours.
* **Mortgage Application Submissions:** Experiences only 50 requests per hour, but each requires intense background credit bureau checks.

#### Question 20: Analyzing Independent Scalability
How does Microservices Architecture support this asymmetric demand compared to a Monolith?  
*[Select TWO correct answers]*

- [ ] **A.** The `SearchService` and `PhotoService` can be scaled horizontally to 200 container instances across multiple cloud availability zones, while `MortgageSubmissionService` runs on only 2 small instances, saving vast infrastructure costs.
- [ ] **B.** In a monolith, the entire application (including heavy mortgage libraries and PDF generators) would have to be scaled to 200 full instances, wasting memory and cloud hosting budget.
- [ ] **C.** Microservices require all services to run on the exact same number of instances regardless of load.
- [ ] **D.** Photo browsing can only be supported if the application is written in Assembly language.
- [ ] **E.** Monoliths scale 1,000 times cheaper than microservices under asymmetric load.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Fine-grained elasticity is a crowning strength of microservices. Asymmetric workloads allow high-traffic services (search/photos) to scale independently without wasting compute resources replicating low-traffic services (mortgage submission).
* **Why C, D & E are INCORRECT:** Services scale independently (not identically); assembly is unnecessary; and scaling entire monoliths under asymmetric load is far more wasteful.
