<div align="center">

# QUALITY ATTRIBUTES, SCENARIOS AND TACTICS SE3100 - Architecture Based Development

</div>

Vishan Jayasinghearachchi

Lecturer - Department of Software Engineering,

Faculty of Computing,

Sri Lanka Institute of Information Technology.

vishan.j@sliit.lk

## LEARNING OUTCOMES

After completing this lecture, you will be able to,

- Define Quality Attributes and distinguish them from functional requirements.

- Explain why Quality Attributes influence software architecture.

- Identify Architecturally Significant Quality Attributes.

- Develop measurable Quality Attribute Scenarios.

- Explain how architectural tactics support specific Quality Attributes.

## CONTENTS

- What are Quality Attributes?

- Formal definition of Quality Attributes

- Why are Quality Attributes important in architecture?

- Architecturally significant Quality Attributes

- Quality Attribute Scenarios

- Quality Attribute Tactics

- Summary

## WHAT ARE QUALITY ATTRIBUTES?

- A software system must,

o Perform the required domain functions.

o Provide those functions with acceptable qualities.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520866.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nL305fpz6%2FmiZDRFzrsBBabYiqo%3D&Expires=1789182320' alt='OCR图片'/></div>

## WHAT ARE QUALITY ATTRIBUTES?

- For example, an examination system must,

- Allow authorized users to enter marks.

- o Protect marks from unauthorized modification.

- Remain accessible during result publication.

o Return results within an acceptable time.

Support changes to grading policies.

- Managing marks and results represents the system's domain functionality.

- Security, availability, performance and modifiability describe required qualities of the system.

## DEFINING QUALITY ATTRIBUTES (ARCHITECTURAL CHARACTERISTICS)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520921.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0KhNvbmWlN7NDG%2BsLAWqVLs5BgQ%3D&Expires=1789182320' alt='OCR图片'/></div>

<div align="center">

Figure 4-2. The differentiating features of architectural characteristics

</div>

## DEFINING QUALITY ATTRIBUTES (ARCHITECTURAL CHARACTERISTICS)

- Nondomain design consideration

O It concerns a capability or design consideration beyond the main domain behaviour.

- Influences a structural aspect of the design

    o Supporting it affects system organisation, boundaries, dependencies or interactions.

- Important to the success of the system

    o Failure to support it may prevent the application from achieving its intended purpose.

## FUNCTIONALITY VS. QUALITY ATTRIBUTES

<table border="1"><tr><td>Functionality(Functional Requirements)</td><td>Quality Attributes</td></tr><tr><td>Describes what the system does.</td><td>Describes the measurable qualities and capabilities the system must support while providing its functionality.</td></tr><tr><td>Represents the domain behaviour the system must provide.</td><td>Represents the qualities the system must support.</td></tr><tr><td>Commonly represented through features or use cases.</td><td>Commonly represented through measurable scenarios.</td></tr><tr><td>Examples: Register a student, record marks, calculate grades, publish results, generate reports.</td><td>Examples: Performance, availability, security, modifiability, scalability.</td></tr></table>

## FUNCTIONALITY VS. QUALITY ATTRIBUTES

- Quality Attributes are also called architectural characteristics, quality requirements, or non-functional requirements.

- Both Functional Requirements and Quality Attributes are necessary for a system's success.

O A function may exist but still be provided too slowly, unreliably or insecurely, making the system unacceptable for its intended purpose.

## SOME COMMON QUALITY ATTRIBUTES

<table border="1"><tr><td>Quality Attribute</td><td>Main Concern</td></tr><tr><td>Performance</td><td>How quickly the system responds</td></tr><tr><td>Availability</td><td>Whether the system is operational when required</td></tr><tr><td>Security</td><td>Protection against unauthorised access and modification</td></tr><tr><td>Modifiability</td><td>Ease of making changes</td></tr><tr><td>Scalability</td><td>Ability to support increasing demand</td></tr><tr><td>Testability</td><td>Ease of demonstrating correct behaviour</td></tr><tr><td>Usability</td><td>Effectiveness of user interaction</td></tr><tr><td>Interoperability</td><td>Ability to exchange and use information with other systems</td></tr></table>

## WHY ARE QUALITY ATTRIBUTES IMPORTANT IN ARCHITECTURE?

- Consider an examination system that must,

Record marks

Manage students

Calculate grades

Publish results

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520929.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7OlTdQsikgbiL5nlXLzd%2BBKceh8%3D&Expires=1789182320' alt='OCR图片'/></div>

## WHY ARE QUALITY ATTRIBUTES IMPORTANT IN ARCHITECTURE?

- The same functionality could be implemented using (for example),

A single application with a shared database

- A set of independently deployed services

o An event-driven architecture.

- The same functionality can be achieved through different structures.

- The required Quality Attributes help determine which structure is appropriate.

- The relevant Quality Attributes depend on the system and its context. There is no single list that is appropriate for every system.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520934.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Qmqxn%2BW7CSpJi0xX22RS2jw4vXw%3D&Expires=1789182320' alt='OCR图片'/></div>

## WHY ARE QUALITY ATTRIBUTES IMPORTANT IN ARCHITECTURE?

- Architecture should not begin by selecting a fashionable architectural style.

- It should begin by understanding,

- What functionality the system must achieve

- Which qualities are essential

- Which constraints must be respected

- Which failures are unacceptable

- Which changes are expected

- Which trade-offs are acceptable

- Quality Attributes help translate business and stakeholder concerns into technical concerns that can influence the architecture.

## WHY ARE QUALITY ATTRIBUTES IMPORTANT IN ARCHITECTURE?

<table border="1"><tr><td>Quality Attribute</td><td>Possible Architectural Responses</td></tr><tr><td>Performance</td><td>Caching, concurrency, communication mechanisms</td></tr><tr><td>Availability</td><td>Redundancy, monitoring, recovery mechanisms</td></tr><tr><td>Security</td><td>Security boundaries, authentication, access control</td></tr><tr><td>Modifiability</td><td>Modularisation, interfaces, dependency control</td></tr><tr><td>Scalability</td><td>Distribution, replication, resource allocation</td></tr><tr><td>Interoperability</td><td>Protocols, interfaces, data formats</td></tr></table>

## TRADE-OFFS IN QUALITY ATTRIBUTES

- Quality Attributes cannot normally be considered in isolation.

- Achieving one Quality Attribute may positively or negatively affect others.

- Examples:

- Redundancy may improve availability but increase cost and complexity.

Caching may improve performance but complicate consistency.

Additional abstraction may improve modifiability but introduce overhead.

- Strong security controls may reduce usability.

- Architecture therefore involves trade-off analysis rather than the independent optimisation of each quality.

## ARCHITECTURALLY SIGNIFICANT QUALITY ATTRIBUTES

- A Quality Attribute is architecturally significant when supporting it requires important structural decisions.

o It is not practical to treat every desirable quality as equally important

- Supporting more Quality Attributes may introduce substantial additional complexity.

- Questions to consider when identifying the most significant quality attributes

O Which qualities are essential for system success?

O Which failures would be unacceptable?

- Which qualities require early structural decisions?

O Which qualities would be difficult to add later?

## ARCHITECTURALLY SIGNIFICANT QUALITY ATTRIBUTES

- Richards and Ford recommend keeping the final list of driving Architectural Characteristics (Quality Attributes) as short as reasonably possible.

- Their recommendation:

o Identify a short list of candidate Quality Attributes.

o Ask stakeholders to select the three highest-priority Quality Attributes.

o Use these as the primary architectural drivers for design and trade-off analysis.

o This is a prioritisation technique, not a universal numerical rule.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520941.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hk4rFr4BzUNa%2BQvKSYNf8LKoSGA%3D&Expires=1789182320' alt='OCR图片'/></div>

## QUALITY ATTRIBUTE SCENARIOS

- A Quality Attribute requirement should be unambiguous and testable.

- Statements such as the following are too vague:

The system must be fast.

O The system must be secure.

o The system must be highly available.

O They do not state,

What event occurs

Under which conditions it occurs

- Which part of the system is affected

O What the system must do

How success will be measured

o A Quality Attribute name alone does not provide a concrete operational requirement.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520946.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jJJqWCdsHsqiNzbrS0lLzIDu8PU%3D&Expires=1789182320' alt='OCR图片'/></div>

## QUALITY ATTRIBUTE SCENARIOS

- Bass, Clements and Kazman use Quality Attribute Scenarios to express Quality Attribute requirements in an operational and testable form.

- A scenario identifies,

o An event or condition

o The context in which it occurs

The affected part of the system

The required system response

O A measurable level of success

- A scenario converts a vague quality expectation into a concrete requirement which is unambiguous and testable.

## QUALITY ATTRIBUTE SCENARIOS

<table border="1"><tr><td>Element</td><td>Purpose</td></tr><tr><td>Source of stimulus</td><td>Some entity(a human,a computer system,or any other actuator) that generates the stimulus.</td></tr><tr><td>Stimulus</td><td>Event or condition requiring a response</td></tr><tr><td>Environment</td><td>The conditions in which the stimulus occurs.The system may be in an overload condition or in normal operation,or some other relevant state.</td></tr><tr><td>Artifact</td><td>Part(s) of the system affected</td></tr><tr><td>Response</td><td>Activity undertaken by the system in response to the stimulus</td></tr><tr><td>Response measure</td><td>Measurable criterion used to evaluate the response</td></tr></table>

Elements of a Quality Attribute Scenario

## QUALITY ATTRIBUTE SCENARIOS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520954.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rfQe20%2FXsOUn5xEe8hntec6FeOE%3D&Expires=1789182320' alt='OCR图片'/></div>

Elements of a Quality Attribute Scenario

## QUALITY ATTRIBUTE SCENARIOS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520970.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MNjznuganR3ohnaQHpKNN7nJtUM%3D&Expires=1789182320' alt='OCR图片'/></div>

A General Quality Attribute Scenario for Availability

## QUALITY ATTRIBUTE SCENARIOS

<table border="1"><tr><td>Element</td><td>Scenario</td></tr><tr><td>Source of stimulus</td><td>Internal to the system</td></tr><tr><td>Stimulus</td><td>The primary database crashes</td></tr><tr><td>Environment</td><td>During result publication (Normal Operation)</td></tr><tr><td>Artifact</td><td>Primary database and results platform</td></tr><tr><td>Response</td><td>Detects the fault and restores the service (e.g. using standby database)</td></tr><tr><td>Response measure</td><td>Service is restored within 60 seconds without losing committed results</td></tr></table>

<div align="center">

Example: A Concrete Quality Attribute Scenario for Availability

</div>

## QUALITY ATTRIBUTE SCENARIOS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520981.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=y3Fgd5Cy5oQZZKZi6nfEnQdDQEg%3D&Expires=1789182320' alt='OCR图片'/></div>

<div align="center">

Example: A Concrete Quality Attribute Scenario for Availability

</div>

## QUALITY ATTRIBUTE SCENARIOS

<div align="center">

TABLE 8.1 Performance General Scenario

</div>

<table border="1"><tr><td>Portion of Scenario</td><td>Possible Values</td></tr><tr><td>Source</td><td>Internal or external to the system</td></tr><tr><td>Stimulus</td><td>Arrival of a periodic, sporadic, or stochastic event</td></tr><tr><td>Artifact</td><td>System or one or more components in the system</td></tr><tr><td>Environment</td><td>Operational mode: normal, emergency, peak load, overload</td></tr><tr><td>Response</td><td>Process events, change level of service</td></tr><tr><td>Response Measure</td><td>Latency, deadline, throughput, jitter, miss rate</td></tr></table>

## QUALITY ATTRIBUTE SCENARIOS

<table border="1"><tr><td>Element</td><td>Scenario</td></tr><tr><td>Source of stimulus</td><td>Registered student</td></tr><tr><td>Stimulus</td><td>Requests the examination results page</td></tr><tr><td>Environment</td><td>Peak result-release period(Peak-Load Operation)</td></tr><tr><td>Artifact</td><td>Results service</td></tr><tr><td>Response</td><td>Retrieves and displays the student&#x27;s results</td></tr><tr><td>Response measure</td><td>95% of requests are completed within two seconds</td></tr></table>

<div align="center">

Example: A Concrete Quality Attribute Scenario for Performance

</div>

## QUALITY ATTRIBUTE SCENARIOS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520988.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vjYqjP557ta3qOMmCid79EaFGJw%3D&Expires=1789182320' alt='OCR图片'/></div>

<div align="center">

Example: A Concrete Quality Attribute Scenario for Security

</div>

## QUALITY ATTRIBUTE SCENARIOS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577520994.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gev7lAFexgFEeRqnuOGi5n%2FoS2k%3D&Expires=1789182321' alt='OCR图片'/></div>

Example: A Concrete Quality Attribute Scenario for Modifiability

## QUALITY ATTRIBUTE TACTICS

- Tactics are design techniques an architect can use to help achieve required Quality Attribute responses

- A tactic is a design decision that influences the achievement of a quality attribute response - tactics directly affect the system's response to some stimulus.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577521001.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=dneY276zNHEMxGHyNDlsLLftevo%3D&Expires=1789182321' alt='OCR图片'/></div>

## QUALITY ATTRIBUTE TACTICS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577521006.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c7CZFnV1ck4fLqQoIHhlO2ohvio%3D&Expires=1789182321' alt='OCR图片'/></div>

Fault Masked or Repair Made

<div align="center">

Availability Tactics

</div>

## QUALITY ATTRIBUTE TACTICS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577521011.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XGAormF7OAfiuToesAuw949%2F9uE%3D&Expires=1789182321' alt='OCR图片'/></div>

<div align="center">

Performance Tactics

</div>

## QUALITY ATTRIBUTE TACTICS

Attack

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577521018.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aeZHeEAuXfS2SmH7bHBtUcm83Pw%3D&Expires=1789182321' alt='OCR图片'/></div>

System Detects Resists, Reacts or Recovers

Security Tactics

## QUALITY ATTRIBUTE TACTICS

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026090511045732be3361ba7f44dc%2Fcrop_1_1788577521031.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qpBzPMuWi5mrhMrddc8%2FumvgD7s%3D&Expires=1789182321' alt='OCR图片'/></div>

<div align="center">

Modifiability Tactics

</div>

## REQUIRED READING

- Please read the Chapter 04 - Understanding Quality Attributes and each chapter on relevant Quality Attributes in L. Bass, P. C. Clements, and R. Kazman, "Software Architecture in Practice," 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.

## SUMMARY

- Functional requirements describe what the system must do.

- Quality Attributes describe the qualities and capabilities the system must support while providing its functionality.

- Quality Attributes influence important structural and architectural decisions.

- Only the Quality Attributes that significantly influence the architecture should be treated as Architecturally Significant Quality Attributes.

- Quality Attribute requirements must be expressed clearly and measurably using Quality Attribute Scenarios.

- Architectural tactics are design decisions used to control Quality Attribute responses.

- Tactics may improve one Quality Attribute while negatively affecting another.

- Architecture therefore requires prioritisation, judgment and trade-off analysis.

## REFERENCES

- M. Richards and N. Ford, "Fundamentals of Software Architecture: A Modern Engineering Approach," 2nd ed. Sebastopol, CA: O'Reilly Media, 2025.

- L. Bass, P. C. Clements, and R. Kazman, "Software Architecture in Practice," 3rd ed. Boston, MA: Addison-Wesley Professional, 2012.