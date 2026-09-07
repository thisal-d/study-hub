<div align="center">

# MONOLITHIC ARCHITECTURAL STYLES SE3100 - Architecture Based Development

</div>

Vishan Jayasinghearachchi

Lecturer - Department of Software Engineering,

Faculty of Computing,

Sri Lanka Institute of Information Technology.

vishan.j@sliit.lk

## LEARNING OUTCOMES

After completing this lecture, you will be able to,

- Explain what an architectural style represents.

- Differentiate architectural styles from architectural patterns.

- Describe the structure of Layered, Modular Monolith, and Microkernel architectures.

- Evaluate their strengths, weaknesses, Quality Attribute implications, and suitable use cases.

## CONTENTS

- Architectural styles and patterns

- Quality Attributes and style selection

- Monolithic vs. distributed architectural styles

- Layered Architecture

- Modular Monolith Architecture

- Microkernel Architecture

- Comparison of styles

- Summary

## WHAT IS AN ARCHITECTURAL STYLE?

- An architectural style describes important structural characteristics of an architecture.

- It describes aspects such as,

How components are organized

Physical architecture

Deployment

Communication

Data organization

- A style therefore describes the overall shape and default characteristics of an architecture.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678586.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jBl5HSDYqPDMtSMRDjWJDS5Q0Ws%3D&Expires=1789182478' alt='OCR图片'/></div>

## WHAT IS AN ARCHITECTURAL STYLE?

<table border="1"><tr><td>Aspect</td><td>Concern</td></tr><tr><td>Component topology</td><td>How components and dependencies are organized</td></tr><tr><td>Physical architecture</td><td>Monolithic or distributed structure</td></tr><tr><td>Deployment</td><td>How the system is deployed</td></tr><tr><td>Communication style</td><td>How components communicate</td></tr><tr><td>Data topology</td><td>How application data is organized</td></tr></table>

## ARCHITECTURAL STYLE VS. PATTERN

## Architectural Style

o Describes the overall architectural structure

- Describes topology and assumed/default characteristics

E.g. Microservices

## Architectural Pattern

Captures a contextualized solution

- Addresses a particular architectural problem or context

- Applied within an architectural style

E.g. CQRS

## QUALITY ATTRIBUTES AND STYLE SELECTION

- Different architectural styles support different sets of Quality Attributes.

- Each architectural style has Quality Attributes which it supports well, and Attributes which are traded off.

- Required Quality Attributes influence Choice of Architectural Style.

- There is no universally best architectural style.

## MONOLITHIC VS. DISTRIBUTED ARCHITECTURES

- Architectural Styles can be broadly categorized into two types based on deployment.

Monolithic

- A single deployment unit of application code (and databases, configurations etc.)

Distributed

- Multiple deployment units connected through networks.

## MONOLITHIC ARCHITECTURE STYLES

- A monolithic architecture can still contain many components, classes, logical layers and modules.

- A monolith can still have strong internal modularity.

- The important point is that these elements normally belong to a single application deployment boundary (i.e. one Architecture Quantum).

- In this lecture, the following monolithic architectural styles will be discussed:

Layered Architecture

Modular Monolith

Microkernel Architecture

## WHY USE A MONOLITH?

- Monolithic architectures avoid many of the challenges introduced by distributed communication.

- Compared with distributed architectures, they generally involve, o Fewer deployment units

o No required remote communication between internal application components o Lower infrastructure and network complexity

Lower overall cost

- Local calls also avoid the problems introduced by remote communication (Refer - Fallacies of Distributed Computing from the previous lecture).

## LAYERED ARCHITECTURE

- The Layered Architecture Style organizes components into logical horizontal layers.

- Architecture is Technically Partitioned.

- A common structure can contain the following layers:

Presentation

Business

Persistence

Database

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678638.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yQZ3ObS5A2KXryp0D7zo1W2sXw0%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 10-1. Standard logical layers within the layered architecture style

</div>

## LAYERED ARCHITECTURE

<table border="1"><tr><td>Layer</td><td>Responsibilities</td></tr><tr><td>Presentation Layer</td><td>User Interface, User Interaction, Presentation logic</td></tr><tr><td>Business Layer</td><td>Business rules, Business processing</td></tr><tr><td>Persistence Layer</td><td>Data access, Persistence logic</td></tr><tr><td>Database Layer</td><td>Data Storage</td></tr></table>

## LAYERED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678646.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=lHhKZs9Cr0TMz2Ba7CSWZmcS%2BA4%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 10-2. Physical topology (deployment) variants

</div>

## LAYERED ARCHITECTURE

- Each layer in a Layered architecture can be Closed or Open.

- If a layer is closed, a request moves sequentially from the top layer down to the bottom layer and cannot skip any layers.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678652.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7PaJORAHXvWZ9ob9FDbF7PQLEMc%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 10-3. Closed layers within a layered architecture

</div>

## LAYERED ARCHITECTURE

- An important concept in Layered Architecture is Layers of Isolation.

- Layers of Isolation concept means that changes within one layer generally do not affect other layers, as long as the contracts between layers remain unchanged.

- Each layer is independent of the other layers, with little or no knowledge of their inner workings.

- This concept is enabled by Closed Layers.

## LAYERED ARCHITECTURE

- However, it makes sense to keep a layer open sometimes. An open layer may be bypassed.

- This may avoid unnecessary processing when a layer does not need to participate in every request.

- More bypassing would lead to higher coupling between layers which would lead to less isolation.

- Therefore, whether a layer should be open or closed is an architectural decision.

## LAYERED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678659.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BRDBLobwZojsdWPVzs29bvVJX8s%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 10-4. Shared objects within the Business layer

</div>

## LAYERED ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678674.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NMC0jh0G%2BhtBYXchieDCNesYtoA%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 10-5. Adding a new Services layer to the architecture

</div>

## LAYERED ARCHITECTURE

- Architecture Sinkhole Antipattern - This antipattern occurs when requests are simply passed through from layer to layer, with no business logic performed.

- Results in unnecessary object instantiation and processing, draining both memory consumption and performance.

- e.g.：

- Presentation layer requests for basic customer information (e.g. Address).

- o The request gets passed to each layer below until the database layer.

- Database responds with the data, which is sent upwards by layer. Each layer does no additional processing.

- Note - Every layered architecture will have some scenarios that can be considered as Architecture Sinkhole.

## LAYERED ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$</td></tr><tr><td rowspan="4">Structural</td><td>Partitioning type</td><td>Technical</td></tr><tr><td>Number of quanta</td><td>1</td></tr><tr><td>Simplicity</td><td>☆☆☆☆☆</td></tr><tr><td>Modularity</td><td>☆</td></tr><tr><td rowspan="4">Engineering</td><td>Maintainability</td><td>☆</td></tr><tr><td>Testability</td><td>☆☆</td></tr><tr><td>Deployability</td><td>☆</td></tr><tr><td>Evolvability</td><td>☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆☆</td></tr><tr><td>Scalability</td><td>☆</td></tr><tr><td>Elasticity</td><td>☆</td></tr><tr><td>Fault tolerance</td><td>☆</td></tr></table>

<div align="center">

Figure 10-6. Layered architecture characteristics ratings

</div>

## WHEN TO USE LAYERED ARCHITECTURE

- Suitable for:

O Small, Simple applications

Websites

- Projects with tight budgets and tight development schedules

- It is also useful when development must begin before the long-term architectural direction is clear.

- Less suitable for large systems that require high levels of scalability, agility, deployability etc.

## MODULAR MONOLITH ARCHITECTURE STYLE

- A Modular Monolith is one deployment unit internally organized around business domains.

- It is therefore primarily domain partitioned. Layers may still exist inside individual domain modules.

- Example for modules on an e-commerce platform:

Order Placement

Inventory Management

Payment Processing

Notification

Shipping

## MODULAR MONOLITH ARCHITECTURE STYLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678682.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FoX3Yd%2BNZ3V%2Fk4j7n2zanV6LzXE%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 11-1. With the modular monolith architecture style, functionality is grouped by domain area

</div>

## MODULAR MONOLITH ARCHITECTURE STYLE

- Modules inside a Modular Monolithic Architecture can be organized in two ways.

Monolithic Structure

- All the modules representing the system are contained in a single source-code repository.

- Each module is represented by a separate high-level directory containing the components and any subdomains that make up that module.

- Deployed as a single unit.

## Modular Structure

- Modules are represented as self-contained artifacts (such as JAR and DLL files).

- They are put together into a single deployment unit during deployment.

## MODULAR MONOLITH ARCHITECTURE STYLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678689.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qLZw4sq4BGAxV8l0BIke7T46pJY%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 11-2. An example of the monolithic structure option

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_2_1788577678693.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pXY7L100BgUpaLieICcmlOnWu54%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 11-3. An example of the modular structure option using JAR files

</div>

## MODULAR MONOLITH ARCHITECTURE STYLE

<table border="1"><tr><td>Aspect</td><td>Monolithic Structure</td><td>Modular Structure</td></tr><tr><td>Source code</td><td>All modules kept together</td><td>Each module kept separately</td></tr><tr><td>Main advantage</td><td>Simple to maintain, test, and deploy</td><td>Stronger module boundaries and separation of concerns</td></tr><tr><td>Code reuse</td><td>Higher risk of excessive reuse across modules</td><td>Less tendency for excessive cross-module reuse</td></tr><tr><td>Module communication</td><td>Easier when modules frequently interact</td><td>Best when modules are largely independent</td></tr><tr><td>Governance</td><td>Requires strict governance to preserve boundaries</td><td>Boundaries are easier to maintain structurally</td></tr><tr><td>Best suited for</td><td>Systems with interdependent modules</td><td>Larger systems with independent modules or specialized teams</td></tr><tr><td>Main risk</td><td>Can degrade into a Big Ball of Mud</td><td>Less effective when dependent modules require frequent communication</td></tr></table>

## MODULAR MONOLITH ARCHITECTURE STYLE

- A modular monolith is usually deployed as a single unit. It typically uses a single monolithic database.

O A shared database can reduce communication between modules because data is directly shared.

- However, independent modules may have their own databases containing module-specific contextual data. Therefore, a modular monolith can use either:

One shared database

- Separate databases for individual modules

- The application remains monolithic even when multiple databases are used.

## MODULAR MONOLITH ARCHITECTURE STYLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678698.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gjM3A9Upq7IvW4AKDvP%2BOgl9J9U%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 11-6. Data can be monolithic or modules can have their own databases

</div>

## MODULAR MONOLITH ARCHITECTURE STYLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678709.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NsT5%2Fpcs8SLZYryYYPKVuCDGQAs%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 11-8. A small restaurant ordering and management system using the modular monolith style

</div>

## MODULAR MONOLITH ARCHITECTURE STYLE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$</td></tr><tr><td rowspan="5">Structural</td><td>Partitioning type</td><td>Domain</td></tr><tr><td>Number of quanta</td><td>1</td></tr><tr><td>Simplicity</td><td>☆☆☆☆☆</td></tr><tr><td>Modularity</td><td>☆☆</td></tr><tr><td rowspan="5">Engineering</td><td>Maintainability</td><td>☆☆</td></tr><tr><td>Testability</td><td>☆☆</td></tr><tr><td>Deployability</td><td>☆☆</td></tr><tr><td>Evolvability</td><td>☆☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆☆</td></tr><tr><td>Scalability</td><td>☆</td></tr><tr><td>Elasticity</td><td>☆</td></tr><tr><td>Fault tolerance</td><td>☆</td></tr></table>

<div align="center">

Figure 11-7. Architectural characteristics star ratings for the modular monolith

</div>

## WHEN TO USE MODULAR MONOLITH ARCHITECTURE STYLE

- Suitable when there are tight budget or time constraints.

- A good choice for starting a new system and when the system's future architectural direction is still uncertain.

- Allows the system to start simple and evolve later into distributed styles such as Service-based architecture and Microservices.

- Allows teams to own a module end to end with minimal coordination

- Naturally supports Domain-Driven Design (DDD) because it uses domain partitioning.

## WHEN NOT TO USE MODULAR MONOLITH ARCHITECTURE STYLE

- Not suitable when the system requires high levels of Scalability, Availability, Responsiveness, Performance etc.

- Avoid when most changes are technically oriented, such as frequently replacing User interface technology, Database technology etc.

- Because it is domain partitioned, technical changes may affect many or all modules.

- Such changes can require significant coordination between domain teams.

o In these situations, a layered architecture may be a better choice.

## MICROKERNEL ARCHITECTURE

- Also known as the Plug-in Architecture.

- A long-established architecture style that is still widely used.

- A natural fit for product-based applications.

Particularly useful when the application requires customization or extensibility.

- Also suitable for custom business applications with varying domain rules.

- Application logic is divided between the core and independent plug-ins.

Core system - The core contains the basic functionality of the system.

- Plug-ins - Plug-ins provide specific application features or processing logic.

## MICROKERNEL ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678714.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3dFe2Mtz%2BkAHeccUX4jH2%2Bn7SMk%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 13-1. Basic components of the microkernel architecture style

</div>

## MICROKERNEL ARCHITECTURE

- Core is the minimum functionality required to run the system

- The core should remain relatively stable.

- Plug-In Components contain functionality that is,

Specialized

Variable

Customizable

o More likely to change

- This moves complexity and variation away from the core.

- The core itself may internally use another structure such as,

Layered Architecture

Modular Monolith

## MICROKERNEL ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678720.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nyS5aD5X1oVDlfNbqzjVnTasDQ0%3D&Expires=1789182478' alt='OCR图片'/></div>

Layered core system (technically partioned)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_2_1788577678726.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6fTg948QFuMKeI8F%2FMzOZYqKQaU%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 13-2. Variations of the microkernel architecture core system

</div>

## MICROKERNEL ARCHITECTURE

- Plug-ins should ideally be,

Self-contained

- Independent of other plug-ins

- Connected primarily to the core

- Typical communication is from Core to Plugins using a method or function call.

- Plug-ins may be,

- Compile-Based - Adding or changing a plug-in requires redeploying the application.

- Runtime-Based - Plug-ins can be added or removed while the system is running.

- Remote plug-ins may also use,

REST

Messaging

Note - This introduces distributed-system complexity.

## MICROKERNEL ARCHITECTURE

- The core needs to know which plug-ins exist and how to access them.

- This is commonly handled through a Plug-In Registry.

- The registry may contain information such as o Plug-in name o Location or reference o Contract information

- Contracts define how the core and plug-ins interact, including:

    o Expected behaviour

    o Input data

    o Output data

- Contracts allow plug-ins to vary without requiring specialized core logic for each one.

## MICROKERNEL ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260905110726ba820a886f3a48dc%2Fcrop_1_1788577678739.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=digHic6rA2QrYiriYh4DOwWIYJ0%3D&Expires=1789182478' alt='OCR图片'/></div>

<div align="center">

Figure 13-8. A plug-in component can own its own data store

</div>

## MICROKERNEL ARCHITECTURE

<table border="1"><tr><td></td><td>Architectural characteristic</td><td>Star rating</td></tr><tr><td></td><td>Overall cost</td><td>$</td></tr><tr><td rowspan="4">Structural</td><td>Partitioning type</td><td>Domain and technical</td></tr><tr><td>Number of quanta</td><td>1</td></tr><tr><td>Simplicity</td><td>☆☆☆☆</td></tr><tr><td>Modularity</td><td>☆☆☆</td></tr><tr><td rowspan="4">Engineering</td><td>Maintainability</td><td>☆☆☆</td></tr><tr><td>Testability</td><td>☆☆☆</td></tr><tr><td>Deployability</td><td>☆☆☆</td></tr><tr><td>Evolvability</td><td>☆☆☆</td></tr><tr><td rowspan="4">Operational</td><td>Responsiveness</td><td>☆☆☆</td></tr><tr><td>Scalability</td><td>☆</td></tr><tr><td>Elasticity</td><td>☆</td></tr><tr><td>Fault tolerance</td><td>☆</td></tr></table>

<div align="center">

Figure 13-9. Microkernel architecture characteristics ratings

</div>

## WHEN TO USE MICROKERNEL ARCHITECTURE

- Commonly used in software development tools, such as,

Eclipse IDE

Jira

Jenkins

- Also used in web browsers, where plug-ins or extensions add capabilities to the core browser.

- Isolates custom or variable behavior from stable core functionality.

- Supports easy addition, removal, and modification of features.

- Reduces the risk of complex customization logic becoming a Big Ball of Mud.

- Particularly suitable for domains where customization and variation are common.

## WHEN TO USE MICROKERNEL ARCHITECTURE

<table border="1"><tr><td>Architectural Style</td><td>Layered</td><td>Modular Monolith</td><td>Microkernel</td></tr><tr><td>Primary structure</td><td>Technical layers</td><td>Domain modules</td><td>Core+plug-ins</td></tr><tr><td>Partitioning</td><td>Technical</td><td>Domain</td><td>Technical and/or domain</td></tr><tr><td>Typical deployment</td><td>Monolithic</td><td>Monolithic</td><td>Monolithic</td></tr><tr><td>Main structural benefit</td><td>Separation of technical concerns</td><td>Domain modularity</td><td>Extensibility</td></tr><tr><td>Best fit</td><td>Simple technical structure</td><td>Domain-oriented systems</td><td>Customizable systems</td></tr></table>

## REQUIRED READING

- Please read the Chapters 10, 11, 13 in M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

## SUMMARY

- An architectural style describes the overall topology and assumed/default characteristics of an architecture.

- Layered Architecture organizes components around technical responsibilities.

- Modular Monolith organizes a single deployment around domains or subdomains.

- Microkernel Architecture separates a stable core from specialized and variable plug-in functionality.

- Different styles provide different Quality Attribute trade-offs.

- The appropriate style depends on the problem, required Quality Attributes, and real-world constraints.

## REFERENCES

- M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.