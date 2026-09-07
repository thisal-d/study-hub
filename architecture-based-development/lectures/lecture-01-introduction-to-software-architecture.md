<div align="center">

# INTRODUCTION TO SOFTWARE ARCHITECTURE

SE3100 - Architecture Based Development

</div>

Vishan Jayasinghearachchi

Lecturer - Department of Software Engineering,

Faculty of Computing,

Sri Lanka Institute of Information Technology.

vishan.j@sliit.lk

## LEARNING OUTCOMES

After completing this lecture, you will be able to,

- Define software architecture.

- Distinguish between intentional and accidental architecture, recognizing that every software system has an architecture.

- Explain how software architecture is developed and evolved under plan-driven and Agile development approaches.

- Identify the factors that influence software architecture.

## CONTENTS

- What is software?

- Why does software become complex?

- Managing complexity through software architecture

- What is software architecture?

- Does all software have an architecture?

- Developing architecture up front or incrementally

- Business drivers

- Architecture Business Cycle

- Summary

## WHAT IS SOFTWARE?

- Software enables a computer or computing system to perform a required task.

- It is developed to solve a problem or support a human or business activity.

- It receives inputs, processes information, maintains data and produces outputs.

- Software may operate independently or as part of a larger system.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246317.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nVFdLdvjRX9sEwiAJfQBKFOmowE%3D&Expires=1789179046' alt='OCR图片'/></div>

## SOFTWARE IS MORE THAN SOURCE CODE

- A software system may include,

Source code and executable programs

Data and databases

- Configurations, Libraries and frameworks

- External services

- Interfaces to other systems

- Deployment and runtime environments

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246366.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2WdQNWYndgklATV6zYB6FIlyirQ%3D&Expires=1789179046' alt='OCR图片'/></div>

- These parts must work together as one system.

## WHY DOES SOFTWARE BECOME COMPLEX?

- Software becomes complex because of,

- Increasing functionality

- More users and stakeholders

- More modules, components and services

- Relationships and dependencies among system elements

- Integration with external systems

- Quality expectations

- Changing requirements and technologies

- The difficulty comes not only from the number of elements, but also from how they interact.

## COMPLEXITY MUST BE MANAGED

- Complexity must be managed by,

Dividing the system into meaningful parts

o Assigning clear responsibilities to each part

o Establishing boundaries for the parts

- Controlling dependencies among parts

- o Defining how the parts communicate

- Applying consistent rules across the system

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246389.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AOPJWDszVuyzPkey59NOaLzOimY%3D&Expires=1789179046' alt='OCR图片'/></div>

## THE NEED FOR SOFTWARE ARCHITECTURE

- Software architecture provides the high-level structure required to manage a complex system.

- It helps development teams determine,

What the major parts of the system are

- What each part is responsible for

- How the parts are connected and which dependencies are allowed

- Which qualities the system must support

- Which decisions must remain consistent

- Architecture does not remove complexity.

- It organizes complexity so that the system can be understood, developed and changed.

## WHAT IS SOFTWARE ARCHITECTURE?

- Software architecture describes the fundamental structure and important decisions of a software system.

- Richards and Ford define software architecture through four dimensions.

- Quality Attributes (Architectural Characteristics)

- Logical components

- Architectural style

- Architectural decisions

- These dimensions are applicable throughout the system.

## DEFINING SOFTWARE ARCHITECTURE: FOUR DIMENSIONS

- Quality Attributes (Architectural Characteristics)

- The capabilities and qualities required for the system to succeed.

## Logical components

- The major elements that implement the behaviour of the system.

## Architectural style

- The overall structural arrangement used by the system.

## Architectural decisions

- The rules and constraints that guide construction of the system.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246395.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ted7i8GaGTpad%2BuzPW%2BmKclzZL4%3D&Expires=1789179046' alt='OCR图片'/></div>

## FOUR DIMENSIONS OF SOFTWARE ARCHITECTURE

<table border="1"><tr><td>Architectural Dimension</td><td>Purpose</td><td>Examples</td></tr><tr><td>Quality Attributes(Architectural Characteristics)</td><td>Describe what the system must be capable of supporting and the conditions for success.</td><td>Performance, Scalability, Security, Availability</td></tr><tr><td>Logical Components</td><td>Divide system behaviour into meaningful parts and show where responsibilities belong.</td><td>Domains, Services, Workflows, Business capabilities</td></tr><tr><td>Architectural Style</td><td>Defines the general structural approach used to implement the system.</td><td>Layered, Modular monolith, Event-driven, Microservices</td></tr><tr><td>Architectural Decisions</td><td>Establish rules and constraints that guide system construction.</td><td>Data ownership, Communication mechanisms, Access rules, Security rules and regulations etc.</td></tr></table>

## DEFINING SOFTWARE ARCHITECTURE: FOUR DIMENSIONS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246441.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dENKW7yOzV%2B2zqyiNE%2F6MYaXoVw%3D&Expires=1789179046' alt='OCR图片'/></div>

<div align="center">

Figure 1-1. Architecture consists of the system's structure, combined with architecture characteristics ("-ilities"), logical components, architecture styles, and decisions

</div>

## FOUR DIMENSIONS OF SOFTWARE ARCHITECTURE

- How do the dimensions connect to produce a software architecture?

- Understand the problem domain.

- Identify the important Quality Attributes (Architectural Characteristics).

O Identify the logical components required to implement system behaviour.

o Select an architectural style that supports the required structure and qualities.

o Establish architectural decisions that guide implementation.

- A style alone does not represent the complete architecture.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246449.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qtRs8ATQzQTIqYJOdqmntXrTm1Q%3D&Expires=1789179046' alt='OCR图片'/></div>

## A RELATABLE EXAMPLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246457.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qd2Pb5O8ayTAyNyHh7eW5ql0FDM%3D&Expires=1789179046' alt='OCR图片'/></div>

## FLOOR PLAN - WELL BUILT TWO STOREY HOUSE Logical Components (Rooms and Spaces)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_2_1788574246464.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=auujcVtCiZIrcpWwYJsL4HWAle8%3D&Expires=1789179046' alt='OCR图片'/></div>

GROUND FLOOR PLAN

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_3_1788574246470.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EYMQvIpaLYd7hqZYITqz8w3FxvE%3D&Expires=1789179046' alt='OCR图片'/></div>

FIRST FLOOR PLAN

## ARCHITECTURAL DECISIONS - WIRING & PLUMBING PLAN

<div align="center">

ELECTRICAL WIRING PLAN

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_4_1788574246476.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gUxOoFAii%2BXPf9mKw3AzTd7RKuM%3D&Expires=1789179046' alt='OCR图片'/></div>

## Main Distribution Panel

Light Fixture

Switch

Power Outlet

Lighting Circuit

Power Circuit

## Key Architectural Decisions:

- Elevate ground floor for flood safety

- Separate wet areas (baths, kitchen) for efficient plumbing

- Centralized electrical distribution for safety and maintainability

- Proper drainage and slope for waste water

<div align="center">

PLUMBING PLAN

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_5_1788574246481.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gxjwVEzx%2F4gmmN6Xd6ODpDDnf6A%3D&Expires=1789179046' alt='OCR图片'/></div>

Cold Water Line

Hot Water Line

--- Waste Water Line

Water Inlet

Floor Drain

Water Closet (W)

Lavatory

Shower

Kitchen Sink

## ARCHITECTURE VS. DESIGN

- Architecture and design are not completely separate activities; they exist on a continuum.

- A decision becomes more architectural when it is,

- Strategic rather than tactical

Difficult or expensive to change

Long-lasting

- Relevant to several parts of the system

Associated with significant trade-offs

- Changing the Data Storage mechanism generally can be considered closer to an architectural decision.

- Detailed classes, algorithms and screen layouts are generally closer to design.

## ARCHITECTURE DEPENDS ON CONTEXT

- Architectural decisions depend on many factors.

Business needs

Available technologies

Cost

Time

Development skills

Operational environment

Existing systems

- Organizational constraints

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246490.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nu5fpj3Ta%2Fs2iLjjsZDJE%2Fx6PdQ%3D&Expires=1789179046' alt='OCR图片'/></div>

- An architecture that is suitable for one system may be unsuitable for another.

## ARCHITECTURE IS BASED ON TRADE-OFFS

- Everything in software architecture is a trade-off.

- For example,

- Greater security may reduce usability.

- Greater consistency may reduce availability.

- Greater flexibility may increase complexity.

Greater isolation may increase communication overhead.

o Faster delivery may increase technical debt.

- There is no single best architecture for every system.

- Usually, what we end up with is the Least-worst architecture.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246495.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eBRQJLzeegcqCQCEaniAxz6tX6Y%3D&Expires=1789179046' alt='OCR图片'/></div>

## DOES ALL SOFTWARE HAVE AN ARCHITECTURE?

- Yes!

- Any software system has, o Some form of structure

O Elements with responsibilities

- Relationships among those elements

Dependencies

Data flows

Rules, whether explicit or implicit

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246504.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4%2FZ%2Bc%2Bh%2FTiQCdK3HaAZYoHsh%2FiE%3D&Expires=1789179046' alt='OCR图片'/></div>

- The real question is whether the architecture has been consciously understood and managed.

## INTENTIONAL ARCHITECTURE

## Intentional architecture results from deliberate decisions.

- Important Quality Attributes (Architectural Characteristics) are identified.

- Responsibilities are assigned clearly.

- Dependencies are controlled.

- o An appropriate structural approach is selected.

- Important decisions are communicated.

O The architecture is reviewed as the system changes.

- Note: Intentional architecture does not mean that every decision must be made at the beginning.

## ACCIDENTAL ARCHITECTURE

- Accidental architecture emerges without sufficient architectural reasoning.

- It may result when teams,

- Begin coding without considering the overall structure

- Make isolated local decisions

- Add dependencies whenever they appear convenient

- Allow frameworks to determine the system structure

- Copy existing solutions without considering the context

- Delay important decisions until change becomes expensive

- Not planning the architecture does not produce a system without architecture.

- It produces an architecture that was not deliberately selected.

## INTENTIONAL VS ACCIDENTAL ARCHITECTURE

<table border="1"><tr><td>Approach</td><td>How It Develops</td><td>Key Characteristics</td></tr><tr><td>Intentional Architecture</td><td>Structure is considered deliberately.</td><td>Decisions are justified Dependencies and boundaries are controlled The architecture is reviewed as the system changes.</td></tr><tr><td>Accidental Architecture</td><td>Structure results from unrelated local decisions.</td><td>Dependencies grow without control Decisions may not be documented or understood Problems become visible only when the system is difficult to change.</td></tr></table>

## TWO APPROACHES TO INTENTIONAL ARCHITECTURE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246509.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=4zphDOH7gaKCQgONvE1W57hAd94%3D&Expires=1789179046' alt='OCR图片'/></div>

Source: https://www.excellisit.com/differentiating-plan-driven-development-vs-agile-development/

## TWO APPROACHES TO INTENTIONAL ARCHITECTURE

## Plan-driven approach

Most major architectural planning is performed up front.

E.g. Waterfall Methodology

## Agile approach

- Initial architecture is established, and further planning is performed incrementally.

E.g. SCRUM

- Both approaches involve deliberate architectural decisions.

## TWO APPROACHES TO INTENTIONAL ARCHITECTURE

## In a Plan-driven approach,

- Plan most of the architecture before implementation.

Requirements are studied early.

o The overall structure is planned before most implementation begins.

Major components and interfaces are identified early.

Development follows the planned architecture.

Significant changes may require the architecture to be revised.

- Architecture is treated as an early foundation for development.

## TWO APPROACHES TO INTENTIONAL ARCHITECTURE

## In an Agile approach,

O Establish enough architecture to begin and continue planning as the system develops.

Additional decisions are made as the system grows.

o The architecture evolves through implementation and feedback.

o Refactoring is used to improve the structure.

o The development team participates in architectural decisions.

- Important decisions are made when sufficient information becomes available.

## TWO APPROACHES TO INTENTIONAL ARCHITECTURE

(Continued from Agile approach)

- Architecture is treated as a continuing activity. o An Agile architecture may emerge incrementally.

- However, this does not mean that it emerges without direction.

- Architecturally significant decisions must still be made deliberately.

## WHAT DRIVES ARCHITECTURE?

- Architecture does not begin with selecting an architectural style.

- It begins by understanding important queries such as,

O What the organization is trying to achieve?

What the system must do?

- Which constraints cannot be ignored?

- Which trade-offs are acceptable?

- The architecture must be justified by the needs of the system and its environment.

## BUSINESS DRIVERS

- Business drivers are the business goals, pressures and constraints that determine the success of the system.

- Examples include:

- Reducing time to market

- Improving user satisfaction

Gaining a competitive advantage

Meeting a fixed deadline

- Remaining within a limited budget

- Business drivers are normally expressed in business language.

## BUSINESS DRIVERS

- Architects must translate business concerns into Quality Attributes (Architectural Characteristics).

- For example, "the company expects rapid growth" could mean Scalability, Elasticity, Availability, Deployability should be prioritized quality attributes.

- The architect must understand what the business wants and identify the technical qualities needed to support it.

- It is not practical to treat every Quality Attribute as equally important.

- Prioritizing Quality Attributes and identifying trade-offs are necessary.

## THE ARCHITECTURE BUSINESS CYCLE

- Business drivers explain what the organization wants the system to achieve.

- However, architecture is also influenced by many factors including,

Stakeholders

The developing organization

- Existing systems and assets

The architect's experience

Available technologies and resources

Industry practices

Schedule and budget

- The Architecture Business Cycle provides a broader view of these influences.

## THE ARCHITECTURE BUSINESS CYCLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246515.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d9lZ3vXsqfAoNviY0sqYCN7WVq8%3D&Expires=1789179046' alt='OCR图片'/></div>

## THE ARCHITECTURE BUSINESS CYCLE

- The Architecture Business Cycle describes the relationship between architecture and its environment and how architecture itself influences that environment in return.

- Software architecture is influenced by factors such as,

Stakeholder concerns

Developing Organization

Technical Environment

Architect's Experience

- The resulting architecture and system then influence those environments in return.

- Further Reading: Refer this link.

## THE ARCHITECTURE BUSINESS CYCLE

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090510101839a44f1b242f4ccf%2Fcrop_1_1788574246521.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qrBXa235ncbq2DkjZ5iO3LVdwpU%3D&Expires=1789179046' alt='OCR图片'/></div>

Source: https://people.ece.ubc.ca/~matei/EECE417/BASS/ch01lev1sec1.html

## SUMMARY

- Software becomes complex as functionality, elements, dependencies and quality expectations increase.

- Complexity must be managed through structure, boundaries, responsibilities and decisions.

- Software architecture consists of Quality Attributes (Architectural Characteristics), logical components, architectural style and architectural decisions.

- Every software system has an architecture.

- Architecture may be intentional or accidental.

- Intentional architecture may be developed largely up front or incrementally.

- Agile development does not remove the need for architecture.

- Business drivers are translated into Quality Attributes (Architectural Characteristics).

- The Architecture Business Cycle explains the wider influences to and from architecture.

## REFERENCES

- M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

- L. Bass, P. C. Clements, and R. Kazman, "Software Architecture in Practice," 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.