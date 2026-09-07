## ARCHITECTURAL THINKING

## SE3100 - Architecture Based Development

Vishan Jayasinghearachchi

Lecturer - Department of Software Engineering,

Faculty of Computing,

Sri Lanka Institute of Information Technology.

vishan.j@sliit.lk

## LEARNING OUTCOMES

After completing this lecture, you will be able to,

- Explain modularity, cohesion, coupling, and connascence.

- Compare technical and domain partitioning.

- Explain how Quality Attribute scope relates to architectural quanta.

- Relate architectural quanta to monolithic and distributed architectures.

## CONTENTS

- Complexity in Software Systems

- Modularity as an organizing principle

- Cohesion, Coupling and Connascence

- Architecture Partitioning

- Scope of Quality Attributes

- Architectural Quanta

- Deciding between Monolithic vs. Distributed Architecture

- Summary

## COMPLEXITY IN SOFTWARE SYSTEMS

- Software systems become increasingly difficult to understand and change as they grow.

- Without deliberate structure,

o Responsibilities become mixed together.

- Dependencies spread across the system.

- Changes produce unexpected side effects.

o Reuse and replacement become difficult.

o The system gradually loses structural clarity.

- Software does not remain well structured by accident.

- Architecture must impose and preserve organization.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596350.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4xWknDnbeEsTAT1SXWNUtbft8fQ%3D&Expires=1789182396' alt='OCR图片'/></div>

## MODULARITY AS AN ORGANIZING PRINCIPLE

- Modularity provides a way to control the complexity of a software system, by providing a way of organizing the system.

- Instead of treating the system as one indivisible whole, it is considered to be composed of many parts which are called modules.

- Richards & Ford use modularity to describe a logical grouping of related code.

- A module may contain,

Classes

Functions

- Other related implementation elements

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596356.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Ypn7lu5UpRPPkU1oAhENF%2BPk7J0%3D&Expires=1789182396' alt='OCR图片'/></div>

## MODULARITY AS AN ORGANIZING PRINCIPLE

- Architects primarily reason at the level of components which are implemented modules.

- This allows architects to reason about,

What belongs together

What should be separated

How different parts depend on each other

- Where changes should be contained

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596362.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ckXJbpVEaazC5JHGFbib20rG0Wc%3D&Expires=1789182396' alt='OCR图片'/></div>

## COHESION, COUPLING AND CONNASCENCE

- There are three important concepts for understanding modularity.

- Cohesion

How closely related the elements inside a module are.

- Coupling

How dependent software elements are on other software elements.

- Connascence

How changing one component require changing others for the correctness of the

system.

o It's a more precise way of describing different forms of coupling.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596369.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QTGhoNT6jynkxXD00FwWWngWFa8%3D&Expires=1789182396' alt='OCR图片'/></div>

## COHESION

- Cohesion refers to how closely the parts of a module belong together.

- A highly cohesive module,

- Contains strongly related behaviour.

- Represents a meaningful purpose.

o Contains the elements necessary to perform that purpose.

- Dividing something that is naturally cohesive may introduce additional coupling between the resulting modules (Modularity Versus Granularity).

- The architectural goal is generally to create modules containing elements that meaningfully belong together.

## COUPLING

- Coupling concerns dependencies between software elements.

- Afferent Coupling

    o Incoming connections to a software artifact.

- Efferent Coupling

    o Outgoing connections from a software artifact.

- Coupling helps us understand how changes can propagate through a system.

## CONNASCENCE

- Connascence provides a more precise vocabulary for describing coupling.

- Two components are connascent when,

    o A change in one requires the other to be modified to maintain the overall correctness of the system.

- Connascence can be divided into,

    o Static Connascence

    o Dynamic Connascence

## STATIC CONNASCENCE

- Static connascence represents coupling that can be identified from the source code.

- Static connascence types include,

Connascence of Name

O Connascence of Type

- Connascence of Meaning

- Connascence of Position

- Connascence of Algorithm

- These represent different things that software elements must agree upon.

## DYNAMIC CONNASCENCE

- Dynamic connascence concerns coupling that occurs during execution.

- Dynamic connascence types include,

Connascence of Execution

Connascence of Timing

Connascence of Values

Connascence of Identity

- These dependencies arise from how software elements interact at runtime.

## STATIC VS. DYNAMIC CONNASCENCE

<table border="1"><tr><td>Static Connascence</td><td>Dynamic Connascence</td></tr><tr><td>Source-code level</td><td>Runtime</td></tr><tr><td>Can be identified through code analysis</td><td>Depends on execution behaviour</td></tr><tr><td>Generally easier to detect and refactor</td><td>Generally harder to manage</td></tr><tr><td>Preferred over stronger dynamic forms</td><td>Can create significant runtime dependencies</td></tr></table>

Note: where possible, weaker and more manageable forms of connascence are preferable.

## PROPERTIES OF CONNASCENCE

- Strength

How easy is the coupling is to refactor.

- Locality

How close the connascent elements are to each other.

- Degree

How many elements are affected by the dependency.

- These properties help determine whether coupling is acceptable within a particular architectural boundary.

## STRENGTH OF CONNASCENCE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596379.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NcVjoqIToPTyKOcUq4Jv13bSkEA%3D&Expires=1789182396' alt='OCR图片'/></div>

<div align="center">

Figure 3-5. Connascence strength can be a good refactoring guide

</div>

Convert strong forms of connascence into weaker forms of connascence.

## LOCALITY OF CONNASCENCE

- Strong coupling is less problematic when the coupled elements are close together.

Within the same module

- Strong coupling may be acceptable.

Across separate modules or systems

- The same coupling becomes more problematic.

- As the distance between software elements increases, weaker forms of connascence should be preferred.

## MANAGING DEGREE OF CONNASCENCE

- Meilir Page-Jones, who put forward the concept of connascence, provides three guidelines,

- Minimize overall connascence by creating encapsulated elements.

- Minimize connascence that crosses encapsulation boundaries.

- Maximize connascence within encapsulation boundaries.

- Therefore, inside a boundary

High cohesion and stronger internal relationships can be acceptable.

- Across boundaries

- Coupling should be minimized.

## CREATING GOOD MODULES

- A good architectural boundary should therefore attempt to,

- Keep related behaviour together (High cohesion)

- Keep strongly dependent elements together (Localize coupling)

- Reduce dependencies crossing the boundary (Low external coupling)

- This idea becomes important when deciding how the architecture should be partitioned.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596384.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=N8%2BxWqhhniFbBs728E9Fs7sKp98%3D&Expires=1789182396' alt='OCR图片'/></div>

## ARCHITECTURE PARTITIONING

- Components can be organized in many different ways.

- One particularly important architectural decision is how the components should be arranged at the top level.

o How should the major parts of the architecture be organized?

- There are two major approaches

Technical Partitioning

Domain Partitioning

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596391.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=sxTgKWQVuRGFFWvL%2F%2F7UpyU9Glo%3D&Expires=1789182396' alt='OCR图片'/></div>

## TECHNICAL PARTITIONING

- Technical partitioning organizes top-level components around technical capabilities.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596411.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FS41d4M%2FvQ49yUgPHYmo8W7CYgg%3D&Expires=1789182396' alt='OCR图片'/></div>

## TECHNICAL PARTITIONING

- Technical partitioning organizes top-level components around technical capabilities.

- Each partition contains a particular type of technical responsibility.

<table border="1"><tr><td>Advantages</td><td>Trade-off</td></tr><tr><td>Clear separation of technical concerns.</td><td>Most business workflows cut across several technical capabilities.</td></tr><tr><td>Related technical code is easy to locate.</td><td>Therefore,a single workflow may be spread across several partitions.</td></tr><tr><td>Aligns naturally with layered architectures.</td><td></td></tr></table>

## DOMAIN PARTITIONING

- Domain partitioning organizes top-level components around,

Business domains

Business capabilities

Workflows

- Each domain can internally contain its own technical components or layers.

- The top-level boundary, however, remains the domain.

## DOMAIN PARTITIONING

<div align="center">

Domain partitioning

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596458.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6ad%2BLO67T0CgxgLc8tLSVpBM084%3D&Expires=1789182396' alt='OCR图片'/></div>

## DOMAIN VS. TECHNICAL PARTITIONING

<table border="1"><tr><td>Technical Partitioning</td><td>Domain Partitioning</td></tr><tr><td>Organized by technical capability</td><td>Organized by domain/workflow</td></tr><tr><td>E.g. Presentation, business, persistence</td><td>E.g. Purchasing, inventory, delivery</td></tr><tr><td>Workflow crosses partitions</td><td>Workflow tends to remain within a domain</td></tr><tr><td>Aligns closely with layered architecture</td><td>Aligns closely with modular monolith and distributed architectures such as microservices</td></tr></table>

## SCOPE OF QUALITY ATTRIBUTES

- A common assumption is that the same set of Quality Attributes applies to the entire system.

- This may be true for some systems.

- However, modern systems may contain different parts with different Quality Attribute requirements.

- The important architectural question becomes what is the scope of each set of Quality Attributes?

## SCOPE OF QUALITY ATTRIBUTES

- Consider a system containing three main areas.

Public-facing functions

- Required Quality Attributes: Scalability, Availability, Agility

Back-office functions

- Required Quality Attributes: Security, Data Integrity, Auditability

Frequently changing functions

- Required Quality Attributes: Maintainability, Deployability, Testability

- Trying to satisfy every Quality Attribute uniformly across the whole system may create unnecessary and complex trade-offs.

- Different clusters can indicate different architectural boundaries.

## SCOPE OF QUALITY ATTRIBUTES

- System-wide Quality Attributes

One set of Quality Attributes applies across the system.

- Scoped Quality Attributes

- Different parts of the system require different combinations or levels of Quality Attributes.

- The scope may therefore differ across the problem domain.

- Where does each set of Quality Attributes apply?

- Where should architectural boundaries exist?

- The concept of Architecture Quantum represents this scope.

## ARCHITECTURAL QUANTUM

- An architectural quantum establishes the scope for a set of architectural characteristics.

- Or more simply,

The smallest part of a system that can be deployed and run independently.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596493.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ierOBO6VQ%2B1DpMZ5McAF508Hk84%3D&Expires=1789182396' alt='OCR图片'/></div>

## ARCHITECTURAL QUANTUM

- An architectural quantum establishes a scope for a set of Quality Attributes.

- An architectural quantum has,

- Independent deployment

High functional cohesion

Low external implementation static coupling

- The nature of communication between quanta requires careful evaluation.

- Synchronous communication introduces dynamic coupling.

- It can cause the operational Quality Attributes of one quantum to affect another and may therefore influence the effective quantum boundaries.

## ARCHITECTURAL QUANTUM

- An architectural quantum contains the components necessary to function independently.

- Dependencies required for operation belong to the quantum.

- For example:

o If an application depends on a database to operate, the database forms part of that quantum.

- A shared dependency can therefore affect where quantum boundaries exist.

## ARCHITECTURAL QUANTUM

- An architectural quantum should perform a meaningful purpose.

- This connects directly to cohesion.

- Within the quantum related functionality should remain together.

- A quantum therefore represents more than an arbitrary deployment boundary.

- It should exhibit high functional cohesion.

## ARCHITECTURAL QUANTUM

- Static coupling represents the structural dependencies between parts of the architecture.

- If two services depend on the same coupling point, such as a shared database or shared component, they belong to the same architectural quantum.

- Therefore, separate quanta should have low external implementation coupling.

<table border="1"><tr><td>Within a Quantum</td><td>Between Quanta</td></tr><tr><td>High cohesion</td><td>Low implementation coupling</td></tr><tr><td>Higher coupling may be acceptable</td><td>Loose coupling is preferred</td></tr></table>

- The broader the scope, the looser the coupling should be.

## ARCHITECTURAL QUANTUM

- Separate quanta still need to collaborate.

- This creates dynamic coupling.

- Communication may occur,

Synchronously

Asynchronously

- Synchronous communication can cause the operational characteristics of one quantum to affect another.

- Therefore, communication choices can influence quantum boundaries.

- The quantum provides a useful architectural boundary for applying operational Quality Attributes.

## DETERMINING ARCHITECTURAL QUANTA

- Quality Attribute Scope

    o Do different parts require different Quality Attributes?

- Domain Boundaries

    o Which functionality naturally belongs together?

- Static Coupling

    o Which elements share structural dependencies?

- Shared Dependencies

    o Do components depend on common infrastructure or data?

- These factors help determine possible quantum boundaries.

## DETERMINING ARCHITECTURAL QUANTA

- One coherent set of Quality Attributes

o The system may be able to operate within a single architectural scope.

O One architectural quantum.

A monolithic architecture becomes a viable choice

- Multiple distinct sets of Quality Attributes

- Separate scopes may be required.

- Identify appropriate architectural quanta

- Multiple independently deployable quanta may imply a distributed architecture.

- The architecture begins to emerge from its requirements rather than from being chosen for being a fashionable.

## MONOLITHIC VS. DISTRIBUTED ARCHITECTURE

- Monolithic Architecture

A single deployment unit containing all application code.

- Distributed Architecture

- Multiple deployment units connected through remote access protocols.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_1_1788577596498.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x6R7i4HWxnPcQSxcXnyQUJ%2FOVpU%3D&Expires=1789182396' alt='OCR图片'/></div>

MONOLITHIC

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202609051106081065b0c3ff8346fc%2Fcrop_2_1788577596537.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uf1kTGpad%2F8OSw5qItgh9SG3hlM%3D&Expires=1789182396' alt='OCR图片'/></div>

DISTRIBUTED

## MONOLITHIC ARCHITECTURE

- A monolithic system may still contain,

Multiple modules

Multiple components

- Strong internal boundaries

- Domain partitioning and/or Technical partitioning

- The defining characteristic of monolithic architecture is that the application is deployed as a single unit.

## DISTRIBUTED ARCHITECTURE

- A distributed architecture contains,

Multiple deployment units

o that communicate through remote access protocols.

- This introduces physical separation between parts of the system.

- Distributed architectures can provide strong support for Quality Attributes such as Performance, Scalability, Availability.

- However, they introduce significant additional trade-offs.

## FALLACIES OF DISTRIBUTED COMPUTING

1. The network is reliable.

2. Latency is zero.

3. Bandwidth is infinite.

4. The network is secure.

5. The topology never changes.

6. There is only one administrator.

7. Transport cost is zero.

8. The network is homogeneous.

Read more here.

## MONOLITH VS. DISTRIBUTED ARCHITECTURE

<table border="1"><tr><td>One Quality Attribute Scope</td><td>Multiple Independent Quality Attribute Scopes</td></tr><tr><td>May require one architectural quantum</td><td>May require multiple architectural quanta</td></tr><tr><td>Monolithic architecture is viable</td><td>Distributed architecture may be required</td></tr></table>

The decision begins with architectural requirements rather than with an architecture style.

## REQUIRED READING

- Please read the Chapters 03,07,09 in M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

## SUMMARY

- Modularity organizes software into meaningful logical units.

- Cohesion, coupling and connascence help evaluate module boundaries.

- Architecture may be partitioned technically or by domain.

- Quality Attribute scope helps identify architectural quanta.

- Architectural quanta define independently parts of the system.

- One QA scope may allow a monolithic architecture; multiple independent scopes may require a distributed architecture.

- Distribution introduces additional architectural trade-offs.

## REFERENCES

- M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.