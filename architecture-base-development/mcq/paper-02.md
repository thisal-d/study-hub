# SE3100: Architecture Based Development
# Practice Exam Paper 02 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 02)
## Focus: Lecture 02 — Quality Attributes & 6-Part Scenarios

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Functional Requirements vs. Quality Attributes (ක්‍රියාකාරී අවශ්‍යතා සහ ගුණාත්මක ලක්ෂණ)
How do **Quality Attributes (ගුණාත්මක ලක්ෂණ)** differ fundamentally from **Functional Requirements (ක්‍රියාකාරී අවශ්‍යතා)**?  
*[Select TWO correct answers]*

- [ ] **A.** Functional requirements specify *what* domain behavior the system must do (e.g., calculate tax, process order).
- [ ] **B.** Quality Attributes specify *how well* the system performs those functions (e.g., how fast, how securely, how reliably).
- [ ] **C.** Functional requirements are solely defined by the technical software architect without consulting business users.
- [ ] **D.** Quality Attributes can always be tested completely by compiling the code without running it.
- [ ] **E.** Quality attributes have no impact whatsoever on software architecture design.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Functional requirements define the capabilities and domain tasks the software provides. Quality attributes (non-functional characteristics or "-ilities") evaluate the performance, availability, security, and modifiability of those functions.
* **Why C, D & E are INCORRECT:** Functional requirements come from business stakeholders; quality attributes require runtime execution or code evaluation to test; and quality attributes are the primary driver of architecture.

---

### Question 2: The Six Parts of a Quality Attribute Scenario (ගුණාත්මක අවස්ථා ආකෘතියේ කොටස් 6)
Bass, Clements, and Kazman define a standardized 6-part template to specify measurable Quality Attribute Scenarios. Which of the following are valid parts of this **6-Part Scenario Template**?  
*[Select FOUR correct answers]*

- [ ] **A.** **Source of Stimulus (උත්තේජනයේ මූලය):** The entity that generated the stimulus (e.g., end-user, hacker, internal sensor).
- [ ] **B.** **Stimulus (උත්තේජනය):** The specific condition or event that arrives at the system (e.g., sudden load spike, failed hard drive).
- [ ] **C.** **Artifact (කලාකෘතිය / අදාළ කොටස):** The specific system component or subsystem receiving the stimulus.
- [ ] **D.** **Response Measure (ප්‍රතිචාර මිණුම):** The objective, measurable criteria to evaluate if the response succeeded (e.g., latency $< 200$ ms).
- [ ] **E.** **CEO's Annual Bonus (ප්‍රධාන විධායක නිලධාරියාගේ වාර්ෂික ප්‍රසාද දීමනාව):** The financial compensation of company management.

**ANSWER:** A, B, C, D

**Explanation (විග්‍රහය):**
* **Why A, B, C & D are CORRECT:** The 6 formal parts are: (1) Source of Stimulus, (2) Stimulus, (3) Artifact, (4) Environment, (5) Response, and (6) Response Measure.
* **Why E is INCORRECT:** Management bonuses are completely outside technical architectural specifications.

---

### Question 3: The Remaining Two Parts of the Scenario Template
Which two elements complete the **6-Part Quality Attribute Scenario Template** alongside Source, Stimulus, Artifact, and Response Measure?  
*[Select TWO correct answers]*

- [ ] **A.** **Environment (පරිසර තත්ත්වය):** The operating conditions under which the stimulus occurs (e.g., normal operation, peak holiday load, degraded failover mode).
- [ ] **B.** **Response (ප්‍රතිචාරය):** The action taken by the artifact upon receiving the stimulus (e.g., log error, switch to standby database, isolate network socket).
- [ ] **C.** **Hardware Manufacturer Warranty:** The legal warranty period of physical server cases.
- [ ] **D.** **Marketing Slogan:** The branding slogan used on product retail boxes.
- [ ] **E.** **Font Typography Selection:** The choice of font used in marketing flyers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** **Environment** (the operational state at the time of stimulus) and **Response** (the observable activity performed by the system) complete the 6-part framework.
* **Why C, D & E are INCORRECT:** Warranties, slogans, and marketing fonts have no role in quality attribute scenario definitions.

---

### Question 4: Architecturally Significant Quality Attributes (ගෘහ නිර්මාණාත්මකව වැදගත් ගුණාත්මක ලක්ෂණ)
Which of the following are recognized as **Architecturally Significant Quality Attributes** that heavily dictate architectural decisions?  
*[Select THREE correct answers]*

- [ ] **A.** **Availability (ලබාගත හැකි බව):** The proportion of time the system is functioning and ready to accept requests.
- [ ] **B.** **Modifiability (වෙනස් කිරීමේ හැකියාව):** The ease and cost of making changes, adding features, or altering technologies.
- [ ] **C.** **Performance (ක්‍රියාකාරීත්වය / කාර්යක්ෂමතාව):** The timing, latency, throughput, and resource utilization under given workloads.
- [ ] **D.** **Monochrome Palette:** Forcing an application to display only black-and-white graphics.
- [ ] **E.** **Developer Keyboard Layout:** Whether the programmer uses a QWERTY or DVORAK keyboard.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Availability, Modifiability, and Performance are classic, fundamental architectural quality attributes.
* **Why D & E are INCORRECT:** UI color styles and developer typing accessories are not architectural characteristics.

---

### Question 5: Characteristics of a Good Response Measure (හොඳ ප්‍රතිචාර මිණුමක ලක්ෂණ)
Why is the **Response Measure (ප්‍රතිචාර මිණුම)** critical in a Quality Attribute Scenario?  
*[Select TWO correct answers]*

- [ ] **A.** It transforms vague requirements (e.g., *"The system must be fast and secure"*) into concrete, testable, and falsifiable metrics (e.g., *"Latency $\le 500$ ms under 5,000 req/sec"*).
- [ ] **B.** It allows architects and QA engineers to unambiguously verify whether the delivered system satisfies stakeholder expectations.
- [ ] **C.** It guarantees that the system will never experience hardware or network failures.
- [ ] **D.** It automatically writes the entire database backend code without human intervention.
- [ ] **E.** It proves that functional testing is unnecessary.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Ambiguous requirements like "the system should be scalable" cannot be tested. A measurable response measure makes requirements quantitative, testable, and verifiable.
* **Why C, D & E are INCORRECT:** Response measures do not prevent hardware faults, generate code, or eliminate functional testing.

---

### Question 6: General Scenarios vs. Concrete Scenarios (සාමාන්‍ය සහ නිශ්චිත අවස්ථා)
What is the difference between a **General Quality Attribute Scenario** and a **Concrete Quality Attribute Scenario**?  
*[Select TWO correct answers]*

- [ ] **A.** A General Scenario is system-independent (e.g., *"An unexpected stimulus arrives during normal operation; the system logs the fault and continues"*).
- [ ] **B.** A Concrete Scenario is tailored to a specific system, specifying exact actors, components, and numerical thresholds (e.g., *"A user requests a fund transfer during peak Friday hours; the core payment API completes it within 150 ms"*).
- [ ] **C.** General scenarios can only be written in assembly language.
- [ ] **D.** Concrete scenarios are strictly prohibited from containing numerical units like seconds or megabytes.
- [ ] **E.** A concrete scenario never identifies the artifact being tested.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** General scenarios provide domain-neutral guidance across projects, while concrete scenarios instantiate exact details, system artifacts, and measurable tolerances for a specific application.
* **Why C, D & E are INCORRECT:** General scenarios are natural language concepts, and concrete scenarios explicitly mandate quantitative metrics and identified artifacts.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Anatomy of an Availability Scenario (ලබාගත හැකි බව පිළිබඳ අවස්ථාවක් විශ්ලේෂණය)
Consider the following scenario statement:  
*"An external network router crashes (Stimulus) due to a power surge (Source) while the e-commerce checkout service (Artifact) is operating under normal peak traffic (Environment). The system switches to a redundant secondary router and resumes normal message routing (Response) within 4 seconds with zero lost in-flight orders (Response Measure)."*

Which elements of this scenario are correctly mapped to the 6-part framework?  
*[Select TWO correct answers]*

- [ ] **A.** **Environment:** Normal peak operating traffic.
- [ ] **B.** **Response Measure:** Switch to the backup router within 4 seconds with zero dropped orders.
- [ ] **C.** **Artifact:** The power utility company's electrical grid.
- [ ] **D.** **Stimulus:** The financial profit earned during holiday discounts.
- [ ] **E.** **Source of Stimulus:** The customer entering a credit card number.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The operational condition at the time of the event is the Environment ("normal peak traffic"), and the quantitative success criterion is the Response Measure ("within 4 seconds, zero lost orders").
* **Why C, D & E are INCORRECT:** The Artifact is the checkout service (not the power company); the Stimulus is the router crash (not profit); and the Source is the power surge.

---

### Question 8: Modifiability Scenarios (වෙනස් කිරීමේ හැකියාව පිළිබඳ අවස්ථා)
In a Modifiability Scenario, what typically serves as the **Stimulus** and the **Response Measure**?  
*[Select TWO correct answers]*

- [ ] **A.** **Stimulus:** A request to add, delete, or modify a feature, technology, or interface (e.g., support a new third-party payment gateway).
- [ ] **B.** **Response Measure:** The time, effort (in person-hours/days), or financial cost required to make the change without breaking existing regression tests.
- [ ] **C.** **Stimulus:** A denial-of-service attack flooding ports with UDP packets.
- [ ] **D.** **Response Measure:** The physical weight of the server chassis in kilograms.
- [ ] **E.** **Stimulus:** The CPU clock speed measured in gigahertz.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Modifiability evaluates how easily software accommodates change. The stimulus is a change request (new feature/API), and the response measure is the effort/cost/time required to implement and test the change.
* **Why C, D & E are INCORRECT:** UDP flooding is a Security/Availability stimulus, and chassis weight or CPU gigahertz are hardware metrics unrelated to modifiability.

---

### Question 9: Security Scenarios — Confidentiality vs. Integrity vs. Availability (ආරක්ෂණ අවස්ථා)
A financial institution creates three security scenarios. Which of the following correctly pair a security goal with its scenario focus?  
*[Select TWO correct answers]*

- [ ] **A.** **Confidentiality (රහස්‍යභාවය):** Preventing unauthorized users or interceptors from viewing private customer transaction data.
- [ ] **B.** **Integrity (අඛණ්ඩතාව / දත්තවල නිවැරදි බව):** Preventing unauthorized modification, tampering, or deletion of account balance records.
- [ ] **C.** **Non-Repudiation:** Forcing users to delete their account history after every session.
- [ ] **D.** **Availability:** Making all private financial logs accessible to the general public over plain HTTP.
- [ ] **E.** **Authentication:** Guessing a user's password automatically without prompting them.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The CIA triad defines Confidentiality (protecting data visibility) and Integrity (protecting data from unauthorized alteration).
* **Why C, D & E are INCORRECT:** Non-repudiation guarantees that an actor cannot deny an action; availability protects uptime (not public leaking of logs); and authentication verifies identity securely.

---

### Question 10: Performance Scenarios — Latency, Throughput, and Jitter (ක්‍රියාකාරීත්ව අවස්ථා)
In a Performance Quality Attribute Scenario, how are **Latency** and **Throughput** defined and measured?  
*[Select TWO correct answers]*

- [ ] **A.** **Latency (ප්‍රමාදය):** The elapsed time between the arrival of a stimulus (request) and the delivery of the corresponding response.
- [ ] **B.** **Throughput (කාර්යක්ෂම පරිමාව):** The number of transactions, requests, or data units successfully processed per unit of time (e.g., transactions per second - TPS).
- [ ] **C.** **Latency:** The physical length of the fiber optic cable measured in kilometers.
- [ ] **D.** **Throughput:** The total number of software bugs reported by testers in a month.
- [ ] **E.** **Throughput:** The percentage of memory consumed by the operating system desktop wallpaper.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** In performance analysis, Latency is the time taken to process a single request (response time), while Throughput measures the volume of requests processed over time.
* **Why C, D & E are INCORRECT:** Cable length, bug counts, and desktop wallpaper memory are not architectural definitions of latency or throughput.

---

### Question 11: Usability Scenarios and Metrics (භාවිතයේ පහසුව පිළිබඳ අවස්ථා)
Which of the following represent valid, measurable **Response Measures** for a **Usability (භාවිතයේ පහසුව)** Quality Attribute Scenario?  
*[Select THREE correct answers]*

- [ ] **A.** The time taken for a first-time user to complete an onboarding workflow successfully without requesting customer assistance (e.g., $< 3$ minutes).
- [ ] **B.** The error rate of users inputting credit card information (e.g., $< 2\%$ entry error rate).
- [ ] **C.** User satisfaction scores measured via a standardized System Usability Scale (SUS) survey (e.g., $\ge 85$).
- [ ] **D.** The speed of electric current travelling through copper motherboards.
- [ ] **E.** The total number of transistors fabricated on the CPU chip.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Usability response measures evaluate task completion time, user error frequency, learning curve efficiency, and user satisfaction ratings.
* **Why D & E are INCORRECT:** Electrical current speed and transistor counts are physical silicon metrics, not software usability indicators.

---

### Question 12: Testability Scenarios (පරීක්ෂා කිරීමේ හැකියාව පිළිබඳ අවස්ථා)
What makes a system **Testable**, and how is **Testability (පරීක්ෂා කිරීමේ හැකියාව)** evaluated in a scenario?  
*[Select TWO correct answers]*

- [ ] **A.** The ability to easily control internal state inputs and observe internal state outputs (Controllability and Observability).
- [ ] **B.** The percentage of statement, branch, or path coverage achieved by automated test suites within a defined execution time window (e.g., $\ge 80\%$ test coverage in $< 5$ minutes).
- [ ] **C.** Proving that software code will never be executed by any human user.
- [ ] **D.** Ensuring that all unit tests are deleted immediately before production deployment.
- [ ] **E.** Making all classes completely private with zero public interfaces.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Testability depends on Controllability (providing inputs/state) and Observability (viewing outputs/state). Its response measures typically include test coverage percentages and test run execution times.
* **Why C, D & E are INCORRECT:** Code must be used; deleting tests before release is dangerous; and zero public interfaces makes testing impossible.

---

### Question 13: The Role of "Environment" in Stress Testing (පරිසරයේ වැදගත්කම)
Why is the **Environment (පරිසර තත්ත්වය)** clause in a Quality Attribute Scenario vital when defining system performance?  
*[Select TWO correct answers]*

- [ ] **A.** A system might easily respond within 100 ms under **Normal Operation** (10 users), but might degrade or crash under **Stress / Peak Operation** (100,000 users).
- [ ] **B.** Specifying the environment ensures that performance benchmarks are evaluated under realistic, designated operational contexts (e.g., during database backup, under network packet loss).
- [ ] **C.** It forces software developers to move to a different geographic country to write code.
- [ ] **D.** It dictates the weather conditions outside the server building.
- [ ] **E.** It proves that code works identically regardless of whether servers are online or turned off.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Response times and availability depend heavily on operational state. A system behaving well under low load (normal environment) may fail under heavy load or degraded mode (failover environment).
* **Why C, D & E are INCORRECT:** Environment refers to the runtime system state, not outdoor weather, foreign travel, or powered-down computers.

---

### Question 14: Prioritizing Quality Attributes: The Utility Tree (ප්‍රයෝජ්‍යතා ගස)
In architecture evaluations (such as the Architecture Tradeoff Analysis Method - ATAM), why do architects use a **Utility Tree (ප්‍රයෝජ්‍යතා ගස)**?  
*[Select TWO correct answers]*

- [ ] **A.** To structure, categorize, and prioritize Quality Attributes based on their **Business Importance** and **Architectural Difficulty**.
- [ ] **B.** To map broad quality goals (e.g., High Security) down to specific, concrete, testable Quality Attribute Scenarios.
- [ ] **C.** To calculate the exact financial cost of planting pine trees outside the office building.
- [ ] **D.** To replace all database SQL tables with graphical tree images.
- [ ] **E.** To generate automated marketing emails to customers.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A Utility Tree translates broad business drivers into prioritized, concrete Quality Attribute Scenarios, ranked by importance to business and risk/difficulty to architecture.
* **Why C, D & E are INCORRECT:** A utility tree is an architectural prioritization tool, completely unrelated to landscaping, SQL replacement, or marketing campaigns.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Healthcare Patient Monitoring System
A hospital ICU telemetry system monitors 200 critically ill patients. Each bedside heartbeat sensor transmits ECG data pulses every 50 milliseconds to a centralized nurse monitor application.

The hospital sets the following requirement:  
*"If any bedside ECG sensor detects cardiac arrest (Stimulus), the centralized nurse alarm console (Artifact) must sound a loud audio alarm and flash a red visual alert (Response) within 500 milliseconds (Response Measure) under full network load with all 200 monitors transmitting concurrently (Environment)."*

#### Question 15: Evaluating the Telemetry Scenario
Which Quality Attribute is being evaluated, and what makes this a properly constructed scenario?  
*[Select TWO correct answers]*

- [ ] **A.** The primary Quality Attribute is **Performance (Real-Time Responsiveness / Latency)** coupled with **Safety-Critical Availability**.
- [ ] **B.** The scenario is unambiguous and measurable because it defines the exact stimulus (cardiac arrest), operational context (200 monitors transmitting), and a quantitative deadline (alarm sounds in $< 500$ ms).
- [ ] **C.** The primary Quality Attribute is Usability because doctors can change the color of the screen text.
- [ ] **D.** The scenario is poorly written because 500 milliseconds is an impossible duration for computer hardware to measure.
- [ ] **E.** The primary Quality Attribute is Modifiability because the nurse can rewrite the Java codebase during surgery.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Triggering alarms within 500 ms under peak load evaluates real-time Performance and Availability. It adheres strictly to the 6-part framework with clear, testable thresholds.
* **Why C, D & E are INCORRECT:** Changing text color is minor styling, not the primary goal; 500 ms is easily measurable; and nurses do not rewrite code during medical emergencies.

---

### Scenario 2: E-Commerce Black Friday Flash Sale
During a nationwide holiday shopping sale, an e-commerce platform anticipates that 500,000 shoppers will simultaneously click the "Purchase" button at 12:00 AM. 

The software architecture team writes the following scenario:  
*"500,000 concurrent purchase checkout requests arrive at 12:00 AM (Stimulus/Source) at the Order Processing API (Artifact). During this extreme peak load (Environment), the system must successfully process every valid transaction without dropping orders or displaying HTTP 500 errors (Response), maintaining an average checkout response time under 2.5 seconds with 99.99% transaction success rate (Response Measure)."*

#### Question 16: Architectural Assessment of the Flash Sale Scenario
Which statements correctly analyze this scenario from an architectural standpoint?  
*[Select TWO correct answers]*

- [ ] **A.** The scenario targets **Scalability (පරිමාණකරණය)**, **Elasticity (ප්‍රත්‍යාස්ථතාව)**, and **Availability (ලබාගත හැකි බව)**.
- [ ] **B.** The response measure ($\le 2.5$ seconds average latency, $\ge 99.99\%$ success rate) provides a clear benchmark that can be validated in pre-production using automated stress/load testing tools (e.g., JMeter, Locust).
- [ ] **C.** The scenario is invalid because e-commerce systems are not permitted to experience traffic spikes.
- [ ] **D.** The scenario proves that the company does not need to deploy cloud load balancers.
- [ ] **E.** The scenario targets Modifiability because developers can change the CSS style of the checkout button.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Handling 500,000 concurrent requests without failure evaluates Scalability and Availability. The numerical criteria allow automated load generators to test the system before launch.
* **Why C, D & E are INCORRECT:** Traffic spikes are normal; load balancers are essential for distributing such traffic; and CSS styling is unrelated to checkout scalability.

---

### Scenario 3: Bank Regulatory Audit Log Tampering
A commercial bank is mandated by government regulators to maintain an unalterable record of all wire transfers exceeding $10,000. 

The security architect drafts the following scenario:  
*"A rogue database administrator with root server access (Source) attempts to modify transaction amounts in the audit log database (Stimulus) on the production ledger (Artifact) during normal bank operations (Environment). The system rejects the modification attempt, raises a critical security alert to the Chief Information Security Officer (CISO), and replicates the uncorrupted cryptographic hash to an offsite immutable write-once-read-many (WORM) storage (Response) within 1 second of the attempt (Response Measure)."*

#### Question 17: Security Quality Attribute Analysis
Which core security principles and attributes are embodied in this scenario?  
*[Select TWO correct answers]*

- [ ] **A.** The scenario directly validates **Integrity (දත්තවල නිවැරදි බව)** and **Non-Repudiation (ක්‍රියාවන් ප්‍රතික්ෂේප කළ නොහැකි බව)**.
- [ ] **B.** The scenario addresses **Insider Threat (අභ්‍යන්තර තර්ජන)** and enforces tamper-evidence using immutable storage and cryptographic hashing.
- [ ] **C.** The scenario targets Usability because the rogue administrator can easily edit the ledger.
- [ ] **D.** The scenario demonstrates that database administrators should never be assigned passwords.
- [ ] **E.** The scenario targets Portability because the ledger can be installed on an Android smartphone.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Preventing unauthorized alterations ensures data Integrity, and immutable offsite logs enforce Non-Repudiation while mitigating insider attacks.
* **Why C, D & E are INCORRECT:** Allowing administrators to tamper with logs destroys integrity; removing passwords destroys security; and smartphone installation (portability) is not the goal.

---

### Scenario 4: SaaS Tax Accounting Engine Evolution
A global accounting SaaS platform operates across 15 countries. Every year, tax authorities in several countries update their corporate tax brackets with only 14 days' notice.

The lead architect specifies:  
*"When a country's government updates its statutory tax rates (Source/Stimulus), a software developer must be able to add the new regional tax calculation module to the billing engine (Artifact) in a maintenance environment without modifying or re-testing existing country modules (Response). The integration and deployment of the new tax rule must take less than 4 person-hours of effort and zero downtime of the live platform (Response Measure)."*

#### Question 18: Evaluating the Tax Modifiability Scenario
Which architectural characteristics are essential to fulfill this scenario?  
*[Select TWO correct answers]*

- [ ] **A.** The primary Quality Attribute is **Modifiability (වෙනස් කිරීමේ හැකියාව)**, specifically targeting low cost-of-change and high isolation.
- [ ] **B.** Achieving this scenario requires an architecture that decouples country rules from the core engine (e.g., **Microkernel / Plug-in Architecture** or Strategy Pattern).
- [ ] **C.** The system must hardcode all tax calculations into a single 50,000-line switch-statement stored inside the database stored procedure.
- [ ] **D.** The primary Quality Attribute is Performance because the tax rates change every millisecond.
- [ ] **E.** The system must completely delete all previous years' tax records to save disk space.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Adding rules in $< 4$ hours without touching existing code is the textbook definition of Modifiability, best supported by plug-in or modular architectures.
* **Why C, D & E are INCORRECT:** Hardcoding 50,000-line switch statements creates unmaintainable code; tax rates do not change every millisecond; and deleting financial records violates legal compliance.

---

### Scenario 5: IoT Connected Fleet Vehicle Disconnection
A logistics fleet company tracks 10,000 delivery trucks travelling through remote mountain areas where cellular mobile internet connectivity frequently drops for up to 3 hours.

The architect writes:  
*"When a truck enters a cellular dead zone (Stimulus) while driving on a highway (Environment), the onboard vehicle IoT unit (Artifact) must cache GPS telemetry data locally in non-volatile flash storage (Response). Upon regaining 4G/5G signal, the IoT unit must transmit all accumulated cached records to the cloud server without data loss or record corruption (Response Measure: 100% data transmission within 60 seconds of signal recovery)."*

#### Question 19: Fault Tolerance & Availability Assessment
Which architectural capabilities are validated by this IoT scenario?  
*[Select TWO correct answers]*

- [ ] **A.** **Fault Tolerance & Resilience (දෝෂ ඉවසීමේ හැකියාව):** The system gracefully handles intermittent network disconnection using an "offline-first" store-and-forward mechanism.
- [ ] **B.** **Reliability & Data Integrity:** Zero loss of accumulated GPS telemetry points once connectivity is restored.
- [ ] **C.** The scenario assumes that cellular internet is completely reliable and never experiences disconnections.
- [ ] **D.** The IoT device must immediately explode if network connectivity is lost for more than 5 minutes.
- [ ] **E.** The scenario targets Testability because the truck driver can inspect the circuit board while driving.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Store-and-forward caching provides Fault Tolerance against network partitions, ensuring 100% data integrity when connection is restored.
* **Why C, D & E are INCORRECT:** Networks are acknowledged as unreliable; exploding devices is absurd; and inspecting circuit boards while driving is dangerous and unrelated to testability.

---

### Scenario 6: Ambiguous Requirement vs. Measurable Scenario
A client sends an email to an architecture team stating:  
*"The banking website must be extremely user-friendly, completely secure, highly reliable, and blazing fast."*

#### Question 20: Evaluating the Client's Statement
What is the fundamental architectural problem with the client's statement, and what must the architect do?  
*[Select TWO correct answers]*

- [ ] **A.** The client's statement consists of vague, non-verifiable buzzwords that cannot be tested or engineered directly into an architecture.
- [ ] **B.** The architect must collaborate with stakeholders to translate these broad desires into concrete, 6-part Quality Attribute Scenarios with quantitative Response Measures.
- [ ] **C.** The client's statement is already a perfect, fully detailed concrete architectural scenario.
- [ ] **D.** The architect should immediately start coding without asking for any clarifications because "fast" has a universal mathematical definition.
- [ ] **E.** The architect should reject the client and cancel the project immediately.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Buzzwords like "blazing fast" and "completely secure" are untestable. The architect's job is to define specific, measurable scenarios (e.g., latency $< 200$ ms, zero unauthenticated data leaks).
* **Why C, D & E are INCORRECT:** The statement is not concrete; "fast" varies wildly between an ATM and a video game; and canceling the project is unprofessional.
