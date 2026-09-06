<div align="center">

# DISTRIBUTED ARCHITECTURAL STYLES SE3100 - Architecture Based Development

</div>

Vishan Jayasinghearachchi

Lecturer - Department of Software Engineering,

Faculty of Computing,

Sri Lanka Institute of Information Technology.

vishan.j@sliit.lk

## LEARNING OUTCOMES

After completing this lecture, you will be able to,

- Explain why distributed architecture styles are considered.

- Describe the Service-Based, Microservices, Event-Driven and Space-Based distributed architecture styles.

- Explain the strengths, weaknesses and suitable use cases of each style.

- Compare distributed styles based on architectural characteristics.

- Select an appropriate style based on system requirements and trade-offs.

## CONTENTS

- Monolithic vs. Distributed Architectures

- Why Consider Distribution?

- Trade-offs in selecting a Distributed Architecture Style

- Service-Based Architecture

- Microservices Architecture

- Event-Driven Architecture

- Space-Based Architecture

- Summary

## MONOLITHIC VS. DISTRIBUTED ARCHITECTURES

## Monolithic Architecture

Core application functionality is contained within a single application boundary.

- Components normally execute within the same application runtime.

- Internal communication usually happens through local calls.

## Distributed Architecture

Core functionality is separated into multiple remote runtime or deployment units.

- These units communicate across network boundaries.

Depending on the style, units may be deployed and scaled separately.

## WHY CONSIDER DISTRIBUTION?

- A distributed architecture may be considered when the system needs,

- Independent deployment of major parts

- Independent scalability

- Improved fault isolation

- Different performance needs across parts of the system

- Separate team ownership

- Support for frequent change in selected areas

o Better alignment with domain boundaries

Greater flexibility in technology and data choices

- Distribution should be driven by architectural need, not by fashion.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827362.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gw0wjlfOrHvAVfRuuP3OefrIKQE%3D&Expires=1789182627' alt='OCR图片'/></div>

## TRADE-OFFS IN DISTRIBUTION

- A local component call becomes a remote interaction.

- This introduces many other concerns such as,

Network latency

Remote communication protocols

o Serialization and deserialization

Endpoint security

Partial failures

Contract management

Operational monitoring

o Distributed data and transaction concerns etc.

- The system gains flexibility, but the architecture becomes harder to design, test, deploy and operate.

## TRADE-OFFS IN DISTRIBUTION

<table border="1"><tr><td>Distribution can improve</td><td>Distribution usually increases</td></tr><tr><td>Scalability</td><td>Communication complexity</td></tr><tr><td>Deployability</td><td>Infrastructure cost</td></tr><tr><td>Fault tolerance</td><td>Operational complexity</td></tr><tr><td>Team autonomy</td><td>Testing difficulty</td></tr><tr><td>Evolvability</td><td>Debugging difficulty</td></tr><tr><td>Technology flexibility</td><td>Data consistency and workflow coordination problems</td></tr></table>

Note: Use distribution only when its architectural benefits justify its complexity.

## SERVICE-BASED ARCHITECTURE

- Service-Based Architecture separates the application into a small number of coarse-grained domain services.

- Typical characteristics:

Distributed architecture

- Domain-oriented services (usually 4 to 12 services)

- Coarse-grained functionality

- Separately deployed services

- Relatively simple distributed topology

- Typically uses a centrally shared monolithic database

- Richards and Ford describe it as a pragmatic distributed architecture style with lower complexity and cost than microservices or Event-Driven Architecture.

## SERVICE-BASED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827434.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dD1pRK3ku2YnruZy%2BewKX9MTFJM%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 14-1. Basic topology of the service-based architectural style

</div>

## SERVICE-BASED ARCHITECTURE

- A domain service normally contains a substantial portion of related business functionality.

- For example, an Order Service may contain:

Order placement

Order validation

Payment processing

Inventory updates

O Order status management

- The service may internally contain layers such as:

API Facade

Business Logic

Persistence Logic

- The main architectural boundary is the domain service, not the internal layers.

## SERVICE-BASED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827449.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nAtXJ49VC3x%2BD0TpOJ7hkzq6YJ8%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 14-2. Domain service design variants

</div>

## SERVICE-BASED ARCHITECTURE

- Service-Based Architecture is a good choice when,

o The system can be partitioned into coarse-grained business domains.

Good modularity is required without microservices-level complexity.

o Conventional ACID transactions within domain boundaries are valuable.

o Moderate scalability is sufficient.

o Lower cost and lower operational complexity are important.

o The system is moving gradually from monolithic toward distributed architecture.

o It is a strong fit for many business applications that need practical modularity without extreme distribution.

## SERVICE-BASED ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$$</td></tr><tr><td rowspan="5">Structural</td><td>Partitioning type</td><td>Domain</td></tr><tr><td>Number of quanta</td><td>1 to many</td></tr><tr><td>Simplicity</td><td>☆☆☆</td></tr><tr><td>Modularity</td><td>☆☆☆</td></tr><tr><td rowspan="4">Engineering</td><td>Maintainability</td><td>☆☆☆☆</td></tr><tr><td>Testability</td><td>☆☆☆☆</td></tr><tr><td>Deployability</td><td>☆☆☆☆</td></tr><tr><td>Evolvability</td><td>☆☆☆☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆☆</td></tr><tr><td>Scalability</td><td>☆☆☆</td></tr><tr><td>Elasticity</td><td>☆☆</td></tr><tr><td>Fault tolerance</td><td>☆☆☆</td></tr></table>

<div align="center">

Figure 14-8. Service-based architecture characteristics ratings

</div>

## SERVICE-BASED ARCHITECTURE

<table border="1"><tr><td>Strengths</td><td>Weaknesses</td></tr><tr><td>Relatively simple and cost-effective distributed architecture</td><td>Coarse-grained deployment and scaling units</td></tr><tr><td>Good maintainability</td><td>Moderate scalability</td></tr><tr><td>Good testability and deployability</td><td>Relatively weak elasticity</td></tr><tr><td>Good evolvability</td><td>Shared database may introduce coupling</td></tr><tr><td>Good service-level fault tolerance when services remain independent</td><td>Database schema changes may require coordination</td></tr><tr><td>Strong support for ACID transactions within domain boundaries</td><td></td></tr><tr><td>Natural fit for domain partitioning</td><td></td></tr></table>

## MICROSERVICES ARCHITECTURE

- Microservices Architecture decomposes the system into Small, independently deployable, single-purpose services.

- Typical characteristics:

Highly distributed

Fine-grained services

Domain partitioning

- Independent deployment

- Independent scalability

Strong data ownership

Heavy reliance on operational automation

- Each service normally runs in its own process, virtual machine or container.

## MICROSERVICES ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827457.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u8yjdoWO8z853bQNXmzR8QiJ%2BBA%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 18-1. The topology of the microservices architecture style

</div>

## MICROSERVICES ARCHITECTURE

- Microservices is strongly influenced by Domain-Driven Design.

- The key idea is the Bounded Context.

- A bounded context keeps domain concepts, code and data internally consistent within a boundary.

- Inside a bounded context, implementation details may be coupled.

- Outside that boundary, other services should not depend on internal code schema or database structures.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827469.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4XrE2rW9h1hMImCyCV%2FgHpGccTA%3D&Expires=1789182627' alt='OCR图片'/></div>

## MICROSERVICES ARCHITECTURE

- Microservices is a domain-partitioned architecture.

- Microservices uses domain partitioning, with bounded contexts defining the boundaries of each partition (service).

- Services are organized around Business capabilities, Domains, Subdomains, Workflows etc. rather than technical layers.

- This allows teams to own functionality end-to-end within a domain boundary.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827477.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QkIelV18u7MV%2FIvXR7FF9ddB0OE%3D&Expires=1789182627' alt='OCR图片'/></div>

## MICROSERVICES ARCHITECTURE

- Determining the correct service granularity is one of the hardest parts of Microservices Architecture. Discovering it is an iterative process.

- Service boundaries should consider Purpose, Transactions, Choreography (Communication requirements).

- If services are too fine-grained:

- Communication increases

- Workflows become harder to coordinate

- Latency increases

Data consistency becomes harder

- Making services too small will result in the Grains of Sand antipattern.

## MICROSERVICES ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827483.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9NczkuvfGrXUh%2FblyIQle2g7jrg%3D&Expires=1789182627' alt='OCR图片'/></div>

Grains of Sand Anti-Pattern can lead to a Distributed Big Ball of Mud situation.

## MICROSERVICES ARCHITECTURE

- Choreography and Orchestration are two approaches in Microservices for collaborating to complete a business workflow.

<table border="1"><tr><td>Choreography</td><td>Orchestration</td></tr><tr><td>No central coordinator.</td><td>Uses a localized mediator or orchestration service.</td></tr><tr><td>Each service calls or reacts to other services as needed.</td><td>The orchestration service coordinates calls to participating services.</td></tr><tr><td>Preserves the highly decoupled philosophy of microservices.</td><td>Concentrates workflow coordination in a single service.</td></tr><tr><td>Avoids coupling services to a central coordinator.</td><td>Creates additional coupling between the participating services and the orchestrator.</td></tr><tr><td>Error handling and coordination become more complex</td><td>Useful when a complex business process requires explicit coordination.</td></tr></table>

## MICROSERVICES ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827497.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1PyxCMsBTH%2BczIUhDxufBfoilOE%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 18-7. Using choreography in microservices to manage coordination

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_2_1788577827512.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u41JQkJKMlVRBBQUVKfwHxdTw08%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 18-8. Using orchestration in microservices

</div>

## MICROSERVICES ARCHITECTURE

- Microservices tries to avoid shared schemas and shared databases as integration mechanisms.

- The usual approach is to have a Database per Service and Each service owning its data.

- Other services access that data through:

APIs

Messages

Events

- This protects the bounded context and limits implementation coupling.

## MICROSERVICES ARCHITECTURE

- Microservices relies heavily on operational automation.

- Typical automation requirements include:

Automated deployment

- Containers or virtual machines

- Service discovery, Monitoring and Failure recovery mechanisms

- Distributed logging and tracing

- Configuration management

API gateways etc.

- Microservices gains flexibility only if the organisation can operate many independent services reliably.

## MICROSERVICES ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827520.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7j2krnOH59%2FdoYAiol765ZMzgY0%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 18-5. Microservices architecture with a monolithic user interface

</div>

## MICROSERVICES ARCHITECTURE

<table border="1"><tr><td>Strengths</td><td>Weaknesses</td></tr><tr><td>Excellent modularity</td><td>High complexity</td></tr><tr><td>Excellent maintainability</td><td>High overall cost and operational complexity</td></tr><tr><td>Excellent testability</td><td>Network communication overhead</td></tr><tr><td>Excellent deployability</td><td>Additional endpoint-security latency</td></tr><tr><td>Excellent evolvability</td><td>Data latency across services</td></tr><tr><td>Excellent scalability</td><td>Risk of excessive service granularity</td></tr><tr><td>Strong elasticity</td><td>Excessive interservice communication</td></tr><tr><td>Excellent fault tolerance</td><td>Excessive data or code sharing can weaken bounded contexts</td></tr></table>

## MICROSERVICES ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827530.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CkF5kdMKpInDEUJhcvXQoiAecOo%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 18-17. A patient medical-monitoring system implemented using a microservices architecture

</div>

## MICROSERVICES ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$$$$$</td></tr><tr><td rowspan="4">Structural</td><td>Partitioning type</td><td>Domain</td></tr><tr><td>Number of quanta</td><td>1 to many</td></tr><tr><td>Simplicity</td><td>☆</td></tr><tr><td>Modularity</td><td>☆☆☆☆☆</td></tr><tr><td rowspan="4">Engineering</td><td>Maintainability</td><td>☆☆☆☆☆</td></tr><tr><td>Testability</td><td>☆☆☆☆☆</td></tr><tr><td>Deployability</td><td>☆☆☆☆☆</td></tr><tr><td>Evolvability</td><td>☆☆☆☆☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆</td></tr><tr><td>Scalability</td><td>☆☆☆☆☆</td></tr><tr><td>Elasticity</td><td>☆☆☆☆</td></tr><tr><td>Fault tolerance</td><td>☆☆☆☆☆</td></tr></table>

<div align="center">

Figure 18-16. Microservices characteristics ratings

</div>

## MICROSERVICES ARCHITECTURE

- Microservices is suitable when:

o The system has a high degree of functional modularity.

Data can be cleanly isolated along domain boundaries.

Clear bounded contexts can be established.

o High deployability, testability, evolvability, scalability or fault tolerance are important.

- Multiple teams require strong ownership boundaries.

o The organisation has the engineering and operational maturity to support the style.

- Microservices is less suitable when:

o The domain is highly semantically coupled.

Functionality cannot be cleanly divided into independent bounded contexts.

o The organisation lacks strong deployment and operational automation.

## EVENT-DRIVEN ARCHITECTURE

- Event-Driven Architecture is based on Asynchronous event processing.

- An event describes something that has already happened.

- Examples:

Order Placed

Payment Applied

Item Shipped

Customer Registered

- Event processors react to events without requiring the event producer to directly coordinate their behaviour.

## EVENT-DRIVEN ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827537.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WEDUIs8BayhaGE4iUsSLGGhIbKY%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 15-2. Basic topology of an event-driven architecture

</div>

## EVENT-DRIVEN ARCHITECTURE

- The basic event-driven topology contains:

- Initiating event

Event broker

Event processors

Derived events

## Example:

o An Order Placed event may be processed by a Payment Processor (Initiating Event).

o The Payment Processor may then publish Payment Applied (Derived Event).

- Another processor may react to Payment Applied and continue the workflow.

- This creates an asynchronous chain of event processing.

## EVENT-DRIVEN ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827553.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9Q9VvaG6omiyrLXb1GKZAstiIYI%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 15-3. Example of the event-driven architecture topology

</div>

## EVENT-DRIVEN ARCHITECTURE

- This kind of EDA is known as Choreographed/ Broker Topology.

- In choreographed EDA:

- No central component controls the full workflow.

- o Event processors react independently.

- Processors publish derived events.

- Other processors subscribe to relevant events.

o Publish/subscribe communication is commonly used.

- The event broker may be federated into multiple domain-based broker instances.

## EVENT-DRIVEN ARCHITECTURE

<table border="1"><tr><td>Advantages of Choreographed Topology</td><td>Challenges in Choreographed Topology</td></tr><tr><td>Strong decoupling</td><td>Difficult workflow visibility</td></tr><tr><td>High responsiveness</td><td>Difficult state tracking</td></tr><tr><td>High scalability</td><td>Complex error handling</td></tr><tr><td>Good fault tolerance</td><td>Difficult debugging</td></tr><tr><td>Parallel processing</td><td>Difficult to determine when a workflow has completed</td></tr></table>

## EVENT-DRIVEN ARCHITECTURE

- For more control over the processing of the event, Mediator Topology is used.

- The mediator topology introduces an event mediator.

- The mediator:

- Receives the initiating event

- o Knows the steps needed to process it

- Sends command messages to event processors

Coordinates the workflow

Can maintain workflow state

Can support error handling, recoverability and restart

- The mediated topology typically uses messages rather than events after the initiating event is received.

## EVENT-DRIVEN ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827561.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fGKEJXk10iz1nfIXUsyajoxgZ48%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 15-25. Mediator topology

</div>

## EVENT-DRIVEN ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827574.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=99lPpabPxMVHBZCMsMFEmFL%2B%2BiE%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 15-27. Mediator steps for placing an order

</div>

## EVENT-DRIVEN ARCHITECTURE

<table border="1"><tr><td>Choreography</td><td>Mediation</td></tr><tr><td>No central workflow controller</td><td>Central workflow controller</td></tr><tr><td>Highly decoupled</td><td>More coordinated</td></tr><tr><td>Higher scalability</td><td>Lower* scalability</td></tr><tr><td>Better responsiveness</td><td>Better workflow control</td></tr><tr><td>Difficult error handling</td><td>Better error handling</td></tr><tr><td>Difficult state tracking</td><td>Better state management</td></tr></table>

Note: Main Trade-Offs are Decoupling, responsiveness and scalability versus workflow control and recoverability.

*Lower scalability compared to Choreographed/ Broker Topology, but still highly scalable.

## EVENT-DRIVEN ARCHITECTURE

<table border="1"><tr><td>Strengths</td><td>Weaknesses</td></tr><tr><td>Excellent responsiveness</td><td>Low simplicity</td></tr><tr><td>High scalability</td><td>Low testability</td></tr><tr><td>Excellent fault tolerance</td><td>Nondeterministic workflows</td></tr><tr><td>Excellent evolvability</td><td>Difficult error handling</td></tr><tr><td>High modularity and maintainability</td><td>Difficult recoverability</td></tr><tr><td>Asynchronous and highly parallel processing</td><td>Difficult workflow-state tracking</td></tr></table>

## EVENT-DRIVEN ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$$</td></tr><tr><td rowspan="4">Structural</td><td>Partitioning type</td><td>Technical</td></tr><tr><td>Number of quanta</td><td>1 to many</td></tr><tr><td>Simplicity</td><td>☆☆</td></tr><tr><td>Modularity</td><td>☆☆☆☆</td></tr><tr><td rowspan="4">Engineering</td><td>Maintainability</td><td>☆☆☆☆</td></tr><tr><td>Testability</td><td>☆☆</td></tr><tr><td>Deployability</td><td>☆☆☆</td></tr><tr><td>Evolvability</td><td>☆☆☆☆☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆☆☆☆</td></tr><tr><td>Scalability</td><td>☆☆☆☆</td></tr><tr><td>Elasticity</td><td>☆☆☆</td></tr><tr><td>Fault tolerance</td><td>☆☆☆☆☆</td></tr></table>

<div align="center">

Figure 15-39. EDA characteristics ratings

</div>

## EVENT-DRIVEN ARCHITECTURE

- EDA is suitable when:

O The business problem focuses on responding to things happening inside or outside the system.

- Processing is naturally asynchronous.

High responsiveness and performance are required.

High scalability and fault tolerance are important.

o The workflow benefits from parallel and decoupled processing.

- Processing flows are dynamic rather than strictly deterministic.

- For well-structured, data-driven requests where certainty and workflow control are more important, a request-based model is generally preferable.

## SPACE-BASED ARCHITECTURE

- Traditional web applications commonly depend on a central database for transaction processing.

- As load increases:

o Web servers can be replicated.

Application servers can be replicated.

o The database often becomes the limiting resource.

- Space-Based Architecture is designed for:

High scalability

Elasticity

High concurrency

Variable and unpredictable user volume

## SPACE-BASED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827581.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=oG4%2F03%2FF2AZHUF5%2BV%2F03vEvxj4I%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 16-1. Scalability limits within a traditional web-based topology

</div>

## SPACE-BASED ARCHITECTURE

- Space-Based Architecture removes the central database as a synchronous constraint in normal transaction processing.

- Instead:

- Requests are processed by Processing Units.

- Transactional data is held primarily in memory.

- o Replicated in-memory caching is the standard model.

- Persistent database updates occur asynchronously.

o The database is no longer involved in every normal application transaction.

## SPACE-BASED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110939ca8770a20c1548e2%2Fcrop_1_1788577827587.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Yok0Wkczxz5d7t48hFKsbVlBwOw%3D&Expires=1789182627' alt='OCR图片'/></div>

<div align="center">

Figure 16-2. Space-based architecture's basic topology

</div>

## SPACE-BASED ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$$$$</td></tr><tr><td rowspan="5">Structural</td><td>Partitioning type</td><td>Technical</td></tr><tr><td>Number of quanta</td><td>1 to many</td></tr><tr><td>Simplicity</td><td>☆</td></tr><tr><td>Modularity</td><td>☆☆☆</td></tr><tr><td rowspan="5">Engineering</td><td>Maintainability</td><td>☆☆☆</td></tr><tr><td>Testability</td><td>☆</td></tr><tr><td>Deployability</td><td>☆☆☆</td></tr><tr><td>Evolvability</td><td>☆☆☆</td></tr><tr><td rowspan="5">Operational</td><td>Responsiveness</td><td>☆☆☆☆☆</td></tr><tr><td>Scalability</td><td>☆☆☆☆☆</td></tr><tr><td>Elasticity</td><td>☆☆☆☆☆</td></tr><tr><td>Fault tolerance</td><td>☆☆</td></tr></table>

<div align="center">

Figure 16-18. Space-based architecture characteristics ratings

</div>

## SPACE-BASED ARCHITECTURE

- Space-Based Architecture is appropriate when:

o The system experiences very high or sharply spiking concurrent load.

o User or request volume is unpredictable.

o Very high responsiveness is required.

o Scalability and elasticity are dominant architectural characteristics.

O A central transactional database would become the primary scalability constraint.

o The benefits justify the style's complexity and cost.

- It is a specialized style for situations that must maximize responsiveness, scalability and elasticity.

## REQUIRED READING

- Please read the Chapters 14, 15, 16, 18, 19 in M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

## SUMMARY

- Distributed architecture styles separate a system into remotely interacting runtime units.

- Distribution can improve scalability, deployability, fault isolation and evolvability.

- These benefits come with greater communication, data, testing and operational complexity.

- Service-Based Architecture provides pragmatic domain-based distribution with moderate complexity.

- Microservices provides fine-grained domain-based services with strong deployability, scalability and fault tolerance.

- Event-Driven Architecture supports asynchronous, highly responsive and scalable processing.

- Space-Based Architecture removes the database from the synchronous transaction path to maximize responsiveness, scalability and elasticity.

- The correct architecture style depends on the required architectural characteristics and the trade-offs the system can tolerate.

## REFERENCES

- M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.