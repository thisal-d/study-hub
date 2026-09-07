# SE3100: Architecture Based Development
## Lecture 05: Distributed Architectural Styles — Study Guide & Short Note

---

## 1. Learning Outcomes (ඉගෙනුම් ඵල)

By studying this lecture guide, you will be able to:
* **Explain why distributed architectures are considered** and evaluate the **trade-offs of distribution**.
* **Identify and understand the 8 Fallacies of Distributed Computing (බෙදාහැර ඇති පද්ධති පිළිබඳ මිථ්‍යාවන් 8)**.
* **Describe the structure, characteristics, strengths, and weaknesses of the four primary Distributed Architectural Styles**:
  1. **Service-Based Architecture (සේවා පාදක ගෘහ නිර්මාණ ශිල්පය)**
  2. **Microservices Architecture (ක්ෂුද්‍ර සේවා ගෘහ නිර්මාණ ශිල්පය)**
  3. **Event-Driven Architecture - EDA (සිදුවීම් පාදක ගෘහ නිර්මාණ ශිල්පය)**
  4. **Space-Based Architecture - SBA (අවකාශ පාදක ගෘහ නිර්මාණ ශිල්පය)**
* **Contrast Choreography vs. Orchestration** in Event-Driven and Microservice systems.
* **Select an appropriate distributed style** using Richards & Ford's comparative characteristics rating matrix.

---

## 2. Monolithic vs. Distributed Architecture (ඒකශිලා සහ බෙදාහැර ඇති ගෘහ නිර්මාණ ශිල්පය)

```
       MONOLITHIC ARCHITECTURE                       DISTRIBUTED ARCHITECTURE
┌──────────────────────────────────────┐     ┌──────────────┐        ┌──────────────┐
│ Single Application Process / Runtime │     │  Service A   │ <====> │  Service B   │
│  [UI] -> [Business] -> [Persistence] │     └──────┬───────┘ (Network└──────┬───────┘
│                 │                    │            │ (HTTP/gRPC/Kafka)      │
│                 ▼                    │            ▼                        ▼
│        [Single Database]             │     [Database A]             [Database B]
└──────────────────────────────────────┘
```

* **Monolithic Architecture:** All application code executes within a **single operating system process / runtime boundary**. Internal communication occurs via in-memory method calls.
* **Distributed Architecture:** Functionality is separated across **multiple remote deployment units** running in separate processes, virtual machines, or containers that communicate across networks via remote protocols (HTTP, gRPC, messaging).

### Why Consider Distribution? (බෙදාහැර ඇති ව්‍යුහයක් තෝරාගන්නේ ඇයි?)
A distributed architecture should be considered when the business strictly requires:
1. **Independent Deployment (ස්වාධීන ස්ථාපන හැකියාව):** Releasing new features in one domain without redeploying or freezing other areas.
2. **Independent Scalability & Elasticity (ස්වාධීන පරිමාණකරණය):** Horizontally scaling high-traffic subdomains without scaling the whole application.
3. **Improved Fault Isolation (දෝෂ හුදකලා කිරීම):** A crash or memory leak in one service does not crash other services.
4. **Different Quality Attributes Across Domains:** Providing extreme speed for searching, but strict consistency for billing.
5. **Team Ownership Autonomy (කණ්ඩායම් ස්වාධීනත්වය):** Supporting multiple cross-functional teams (**Conway's Law**).
6. **Technology Diversity (Polyglot Stacks):** Using Python for AI services, Go for networking, and Java for business rules.

> ⚠️ **First Law of Software Architecture:** *"Never distribute your architecture unless you have to!"* Distribution should be driven by genuine architectural need, not by fashion!

---

## 3. Trade-offs in Distribution (බෙදාහැරීමේදී සිදුවන කැපකිරීම්)

When in-memory method calls become remote network hops, massive complexity is introduced:

| Distribution Can Significantly Improve | Distribution Inevitably Increases |
| :--- | :--- |
| **Scalability & Elasticity (පරිමාණකරණය)** | **Communication Complexity:** Remote protocols, serialization, timeouts, retries. |
| **Deployability & Agility (ස්ථාපන පහසුව)** | **Infrastructure & Cloud Cost:** Higher hosting bills, container orchestration. |
| **Fault Isolation (දෝෂ හුදකලා කිරීම)** | **Operational Complexity:** Managing service discovery, log aggregation, tracing. |
| **Team Autonomy (කණ්ඩායම් ස්වාධීනත්වය)** | **Testing Difficulty:** End-to-end testing across 40 distributed services is very hard. |
| **Technology Flexibility (තාක්ෂණික නිදහස)** | **Data Consistency Problems:** Eventual consistency, distributed sagas, loss of ACID. |

---

## 4. The 8 Fallacies of Distributed Computing (L. Peter Deutsch)

Engineers transitioning from monoliths to distributed systems commonly make eight false assumptions:

| Fallacy (මිථ්‍යාව) | The False Assumption | The Harsh Reality (යථාර්ථය) | Architectural Defense |
| :--- | :--- | :--- | :--- |
| **1. The network is reliable** | Packets never drop; connections never break. | Switches fail, fiber cables get cut, and cloud nodes drop. | Use **Timeouts**, **Retries with Exponential Backoff**, and **Circuit Breakers**. |
| **2. Latency is zero** | Remote calls take zero time, just like local RAM calls. | A local RAM call takes 10 nanoseconds; a network call takes 10–50 milliseconds ($1,000,000\times$ slower!). | Minimize remote hops, aggregate requests, use asynchronous messaging. |
| **3. Bandwidth is infinite** | You can transmit massive payloads without consequences. | Large payloads saturate network cards, causing queueing and packet drops. | Implement **Pagination**, query projections (GraphQL), and payload compression (GZIP). |
| **4. The network is secure** | Internal private VPC networks cannot be intercepted. | Lateral hacker movement and rogue insiders can sniff plaintext packets. | Implement **Zero-Trust Architecture** with **mutual TLS (mTLS)** and API tokens. |
| **5. Topology doesn't change** | Server IP addresses, routers, and routes remain constant. | Cloud containers spin up and down dynamically with ephemeral IPs. | Use dynamic **Service Discovery** (Consul, Eureka, Kubernetes DNS). |
| **6. There is one administrator** | A single admin configures all networks and servers uniformly. | Systems span multiple clouds, CDNs, VPNs, and third-party vendors. | Standardize governance, automated Infrastructure as Code (Terraform). |
| **7. Transport cost is zero** | Moving data over networks incurs no financial or compute cost. | Cloud providers charge high bandwidth egress fees; JSON serialization costs CPU. | Use efficient binary serialization (Protobuf/gRPC) and colocate communicating services. |
| **8. The network is homogeneous** | All computers run identical OSes, hardware, and byte orderings. | Networks connect Linux, Windows, ARM chips, Intel chips, and legacy mainframes. | Use open standard communication protocols (JSON, gRPC, HTTPS). |

---

## 5. Service-Based Architecture (SBA) (සේවා පාදක ගෘහ නිර්මාණ ශිල්පය)

A **pragmatic distributed architecture** that decomposes an application into a small number of **coarse-grained domain services (සාමාන්‍යයෙන් සේවා 4 සිට 12 දක්වා)**, typically sharing a centrally managed monolithic database.

```
                         ┌──────────────────────────────┐
                         │   API LAYER / REVERSE PROXY  │
                         └──────────────┬───────────────┘
                                        │ (Remote Calls)
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  ┌──────────────┐               ┌──────────────┐               ┌──────────────┐
  │ Order Service│               │Inventory Svc │               │Customer Svc  │
  └──────┬───────┘               └──────┬───────┘               └──────┬───────┘
         │                              │                              │
         └──────────────────────────────┼──────────────────────────────┘
                                        ▼ (Direct SQL)
                         ┌──────────────────────────────┐
                         │   SHARED MONOLITHIC DB       │
                         └──────────────────────────────┘
```

### Key Characteristics of SBA:
* **Coarse-Grained Services:** An `Order Service` handles order placement, validation, payments, and order status together, rather than splitting into 10 tiny microservices.
* **Shared Central Database:** Preserves traditional **ACID transactions** within and across domain tables, eliminating complex distributed transaction patterns.
* **API Layer:** Shields clients, providing routing, rate-limiting, and authentication.
* **Pragmatic Sweet Spot:** Achieves domain modularity and independent service deployability without the extreme operational complexity and multi-database headaches of microservices.

### Strengths & Weaknesses of SBA Table

| Strengths (වාසි) | Weaknesses (අවාසි) |
| :--- | :--- |
| • Relatively simple and cost-effective distributed style.<br>• Excellent maintainability, testability, and deployability.<br>• Strong support for ACID transactions.<br>• Easier migration path from legacy monoliths. | • Coarse-grained deployment and scaling boundaries.<br>• Moderate scalability and weak elasticity.<br>• Shared database is a **Single Point of Failure (SPOF)** and coupling bottleneck.<br>• Database schema changes require cross-service coordination. |

---

## 6. Microservices Architecture Style (ක්ෂුද්‍ර සේවා ගෘහ නිර්මාණ ශිල්පය)

Decomposes the system into **small, independently deployable, single-purpose services** organized around business bounded contexts.

### Key Architectural Principles:
1. **Bounded Context (Domain-Driven Design):** Each microservice has an explicit boundary separating its domain model and language from outside systems.
2. **Database-per-Service:** Each microservice exclusively owns its private database. Other services can **never** access that database directly; they must communicate via public APIs or events.
3. **High Operational Automation:** Relies on automated CI/CD pipelines, container orchestration (Kubernetes), distributed tracing, and service meshes.

### The Service Granularity Dilemma: "Grains of Sand" Anti-Pattern
* Making services too small (e.g., a service that only performs one SQL query) leads to the **Grains of Sand Anti-pattern (වැලි කැට විරෝධී රටාව)**, resulting in a **Distributed Big Ball of Mud**:
  * Massive network latency overhead.
  * Impossible workflow coordination.
  * Severe data consistency nightmares.
* *Guidance:* Service boundaries should balance purpose, transactions, and communication overhead.

### Choreography vs. Orchestration Table

| Dimension | Choreography (නර්තනමය සම්බන්ධීකරණය) | Orchestration (වාද්‍ය වෘන්ද සම්බන්ධීකරණය) |
| :--- | :--- | :--- |
| **Coordination Model** | **Decentralized:** No central controller. Services react independently to domain events. | **Centralized:** A central mediator/orchestration service directs participating services. |
| **Coupling** | Loosely coupled; services only know about events, not who consumes them. | Tightly coupled to the orchestrator; orchestrator knows all participating services. |
| **Workflow Tracking** | Difficult to track overall state; hard to determine when a workflow completes. | Centralized workflow visibility, easy auditing, and clear state machine transitions. |
| **Error Handling** | Extremely complex; requires distributed event cascades to trigger compensating rollbacks. | Straightforward; orchestrator coordinates compensating transactions explicitly. |
| **Best Suited For** | Highly parallel, fire-and-forget, fast-moving event pipelines. | Complex, multi-step business transactions requiring strict sequencing (e.g., Checkout). |

---

## 7. Event-Driven Architecture (EDA) (සිදුවීම් පාදක ගෘහ නිර්මාණ ශිල්පය)

A distributed style based on **asynchronous event processing**. An **Event (සිදුවීමක්)** describes an immutable fact that has already happened in the past (e.g., `OrderPlaced`, `PaymentApproved`).

```
  [Event Producer] ===(Initiating Event)===> [Event Broker] ===> [Event Processor]
                                                                        │
                                                                 (Derived Event)
                                                                        ▼
                                                             [Downstream Processor]
```

### The Two Topologies of EDA Table

| Architectural Feature | Broker Topology (බ්‍රෝකර් මුහුණුවර) | Mediator Topology (මැදිහත්කාර මුහුණුවර) |
| :--- | :--- | :--- |
| **Workflow Control** | **Decentralized (Choreography):** No central coordinator controls the workflow. | **Centralized (Orchestration):** An Event Mediator coordinates, sequences, and manages steps. |
| **Message Nature** | Pure publish/subscribe **Events** (facts that already happened). | Initiating event received, followed by **Command Messages** issued by the mediator. |
| **Responsiveness** | **Extremely high (5 stars):** Processors react in parallel without central bottlenecks. | Slightly lower due to intermediate mediator coordination overhead. |
| **Scalability** | **Extremely high:** Independent processors scale horizontally on event topics. | High, though the mediator can become a scalability constraint. |
| **Workflow Visibility** | **Poor:** Workflow logic is scattered across independent event processors. | **Excellent:** Mediator contains the explicit workflow state machine. |
| **Error Handling** | **Very Difficult:** Hard to coordinate multi-step compensations across independent listeners. | **Manageable:** Mediator tracks step failure and issues compensating rollback commands. |
| **Ideal Scenarios** | IoT telemetry, real-time location tracking, algorithmic financial notifications. | Multi-step e-commerce order fulfillment, customer onboarding workflows. |

---

## 8. Space-Based Architecture (SBA) (අවකාශ පාදක ගෘහ නිර්මාණ ශිල්පය)

Designed for systems with **extreme concurrent load, unpredictably spiking traffic, and high transaction volume** where the central relational database becomes the primary scalability bottleneck (the "database wall").

### How it Works:
* It **removes the central database from the critical synchronous transaction path**!
* Transactions execute directly in **RAM** across self-contained **Processing Units (PUs)**.
* Transactional data is kept in an **In-Memory Data Grid (IMDG)** replicated across PUs.
* A background **Data Pump (දත්ත පොම්පය)** asynchronously pushes state updates to physical disk storage out-of-band.

```
       [Client Requests] ===> [Messaging Grid] ===> [Processing Units (PUs)]
                                                            │ (In-Memory Data Grid)
                                                            ▼ (Asynchronous)
                                                    [Data Pump Engine]
                                                            ▼
                                                    [Persistent Database]
```

### Virtualized Middleware Components:
1. **Messaging Grid (පණිවිඩ ජාලය):** Routes client sessions to available Processing Units.
2. **Data Grid (දත්ත ජාලය):** Replicates in-memory data states across active Processing Units.
3. **Processing Grid (සැකසුම් ජාලය):** Coordinates parallel computing jobs across PUs.
4. **Deployment Manager (ස්ථාපන කළමනාකරු):** Dynamically spins up new PUs or destroys idle PUs based on load.

> 💡 **Ideal Real-World Applications:** Pop concert ticket flash sales, online auction bidding engines (eBay), and high-frequency stock exchange matching engines.

---

## 9. Master Distributed Styles Comparison Matrix (Richards & Ford)

| Characteristic | Service-Based Architecture | Microservices Architecture | Event-Driven Architecture | Space-Based Architecture |
| :--- | :---: | :---: | :---: | :---: |
| **Overall Cost (පිරිවැය)** | **$$** | **$$$$$** | **$$** | **$$$$** |
| **Partitioning Type** | Domain | Domain | Technical / Domain | Technical |
| **Number of Quanta** | 1 to many | 1 to many | 1 to many | 1 to many |
| **Simplicity (සරල බව)** | ⭐⭐⭐ | ⭐ | ⭐⭐ | ⭐ |
| **Modularity (මොඩියුලර් බව)** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Maintainability (නඩත්තු පහසුව)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Testability (පරීක්ෂා කිරීමේ පහසුව)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| **Deployability (ස්ථාපන පහසුව)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Evolvability (විකාශන හැකියාව)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Responsiveness (වේගවත් බව)** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Scalability (පරිමාණකරණය)** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Elasticity (ප්‍රත්‍යාස්ථතාව)** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Fault Tolerance (දෝෂ ඉවසීම)** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

---

## 10. Quick Revision Summary Table (කෙටි පුනරීක්ෂණ සාරාංශ වගුව)

| Architecture Style | Core Structural Blueprint | Crown Quality Attribute | Primary Trade-Off / Risk |
| :--- | :--- | :--- | :--- |
| **Service-Based (SBA)** | 4 to 12 coarse-grained domain services sharing a central monolithic database. | **Pragmatic Modularity & ACID:** Low cost, simple transactions. | Shared database is a **Single Point of Failure (SPOF)** and coupling bottleneck. |
| **Microservices** | Fine-grained single-purpose services with private **database-per-service**. | **Independent Deployability & Elasticity:** High autonomy, scalability. | **High Complexity & Cost:** Eventual consistency, distributed sagas, network latency. |
| **Event-Driven (EDA)** | Asynchronous event processing via **Broker** (choreography) or **Mediator** (orchestration). | **Extreme Responsiveness & Throughput:** Parallel processing, loose coupling. | Difficult error handling, non-deterministic workflows, challenging traceability. |
| **Space-Based (SBA)** | In-memory Processing Units (PUs) with data grid; removes DB from critical path. | **Near-Infinite Scalability & Elasticity:** Sub-millisecond in-memory speed. | **Very High Cost & Low Simplicity:** Large RAM footprint, split-brain data risks. |
| **8 Fallacies** | False assumptions about network reliability, zero latency, infinite bandwidth, etc. | Core knowledge for all distributed systems design. | Must design for failure using Timeouts, Bulkheads, and Circuit Breakers. |
