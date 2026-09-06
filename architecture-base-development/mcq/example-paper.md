## Easy Questions

Which Quality Attribute describes a system's ability to support increasing levels of demand?

A. Availability

B. Modifiability

C. Scalability

D. Testability

E. Interoperability

ANSWER: C

Which architectural style separates stable core functionality from specialized or variable plug-in functionality?

A. Layered Architecture

B. Modular Monolith Architecture

C. Service-Based Architecture

D. Microkernel Architecture

E. Event-Driven Architecture

ANSWER: D

Which type of coupling represents outgoing connections from a software artifact to other software artifacts?

A. Afferent coupling

B. Efferent coupling

C. Static connascence

D. Functional cohesion

E. Dynamic coupling

ANSWER: B

## Medium Difficulty Questions

An enterprise application is organized into Presentation, Business, and Persistence components at the top level. A change to a single business workflow requires modifications across all three areas. Which architectural partitioning most directly explains this change pattern?

A. The system is domain partitioned, causing technical responsibilities to cross business boundaries.

B. The system is technically partitioned, causing a business workflow to span several technical partitions.

C. The system contains multiple Architectural Quanta, requiring changes across deployment boundaries.

D. The system uses strong functional cohesion within each business workflow.

E. The system uses Event-Driven Architecture for communication between technical components.

ANSWER: B

A business workflow in a software system based on event-driven architecture has no central component controlling its execution. Individual processors react independently to received events and publish further events that trigger subsequent processing. Which topology is represented?

A. Mediator topology

B. Choreographed/Broker topology

C. Service-Based topology

D. Space-Based topology

E. Layered topology

ANSWER: B

A software system initially contains two strongly dependent elements within the same module. The elements are moved into separate modules while their dependency remains strong. What is the most appropriate architectural assessment?

A. The dependency becomes easier to manage because the elements are now separated.

B. The dependency becomes more problematic because strong coupling now crosses a module boundary.

C. The dependency becomes cohesion rather than coupling.

D. The dependency is removed because each element now belongs to a separate module.

E. The dependency becomes acceptable if both modules use the same programming language.

ANSWER: B

## Scenario Questions

A commercial software product contains a stable set of core functions, while different customers require optional features that vary significantly and change frequently. The product is currently deployed as a single application, and there is no requirement to scale these optional features independently. A development team proposes implementing every optional feature as a separately deployed remote service.

Which architectural recommendation is MOST appropriate?

A. Use separately deployed services because frequently changing features should always have independent deployment boundaries.

B. Use plug-ins around a stable core because the required variability can be isolated without introducing unnecessary distributed-system complexity.

C. Use a Modular Monolith because domain partitioning provides stronger support for optional feature installation than plug-in-based architectures.

D. Use Event-Driven Architecture because independently changing features require asynchronous communication with the core.

E. Use Layered Architecture because technical partitioning allows customer-specific functionality to remain independent of the core.

## ANSWER: B

If the development team implements the optional features as separately deployed remote services instead of plug-ins, which trade-off is MOST likely?

A. Greater independent deployment and better fault isolation, at the cost of additional network and operational complexity.

B. Greater functional cohesion and simpler communication, at the cost of reduced customization.

C. Greater transaction consistency and simpler deployment, at the cost of reduced scalability.

D. Greater module isolation and lower infrastructure cost, at the cost of reduced testability.

E. Greater responsiveness and simpler failure handling, at the cost of increased coupling to the core.

ANSWER: A