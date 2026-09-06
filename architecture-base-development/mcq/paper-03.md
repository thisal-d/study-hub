# SE3100: Architecture Based Development
# Practice Exam Paper 03 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 03)
## Focus: Lecture 02 — Architectural Tactics (Availability, Security, Performance, Modifiability)

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: What is an Architectural Tactic? (ගෘහ නිර්මාණ උපායශීලී ක්‍රමවේදයක් යනු කුමක්ද?)
What is an **Architectural Tactic (ගෘහ නිර්මාණ උපායමාර්ගික ක්‍රමවේදය)** as defined by Bass, Clements, and Kazman?  
*[Select TWO correct answers]*

- [ ] **A.** A design decision that directly influences the achievement of a specific Quality Attribute response.
- [ ] **B.** A fundamental building block from which architectural patterns and styles are constructed.
- [ ] **C.** A financial scheme used by software corporations to evade corporate income taxes.
- [ ] **D.** A hardware chip used exclusively in wireless Bluetooth computer mice.
- [ ] **E.** An automated method for deleting code repositories when deadlines are missed.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** An architectural tactic is a focused, foundational design technique aimed at controlling a single quality attribute (e.g., heartbeats for availability, caching for performance). Architectural patterns are packaging bundles of multiple tactics.
* **Why C, D & E are INCORRECT:** Tactics are software engineering techniques, not tax evasion methods, mouse chips, or deletion scripts.

---

### Question 2: Availability Tactics — Fault Detection (දෝෂ හඳුනාගැනීමේ උපායමාර්ග)
Which of the following are recognized tactics for **Detecting Faults (දෝෂ හඳුනාගැනීම)** to support system **Availability**?  
*[Select THREE correct answers]*

- [ ] **A.** **Ping / Echo (පිං සහ ප්‍රතිචාරය):** Periodically sending an interrogation message to a remote component and listening for a reply to verify it is alive.
- [ ] **B.** **Heartbeat (හෘද ස්පන්දන සංඥාව):** A monitored component autonomously emitting periodic pulse messages to a monitor component at designated intervals.
- [ ] **C.** **Exceptions (ව්‍යතිරේක හැසිරවීම):** Using runtime exception-handling mechanisms to trap semantic faults and hardware exceptions when normal execution fails.
- [ ] **D.** Completely disabling all server error-logging mechanisms to save hard disk space.
- [ ] **E.** Hardcoding passwords in cleartext inside JavaScript HTML comments.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Ping/Echo, Heartbeat, and Exception handling are standard architectural tactics specifically categorized under Availability $\rightarrow$ Fault Detection.
* **Why D & E are INCORRECT:** Disabling logging blinds the system to faults, and cleartext passwords are an extreme security violation.

---

### Question 3: Availability Tactics — Fault Recovery (දෝෂවලින් යථා තත්ත්වයට පත්වීම)
Which of the following tactics are used to **Recover from Faults (දෝෂවලින් යථා තත්ත්වයට පත්වීම)** to maintain high availability?  
*[Select THREE correct answers]*

- [ ] **A.** **Active Redundancy (Hot Spare - සක්‍රීය අතිරික්තය):** Multiple identical components process the same input stream concurrently; if one crashes, others continue without downtime.
- [ ] **B.** **Passive Redundancy (Warm/Cold Spare - අක්‍රීය අතිරික්තය):** A primary component processes requests while a standby backup is periodically updated; upon primary failure, the backup takes over.
- [ ] **C.** **Rollback (පෙර තත්ත්වයට හැරවීම):** Restoring the application state to a previous known consistent checkpoint after an unrecoverable failure.
- [ ] **D.** Turning off the server power switch permanently whenever an error occurs.
- [ ] **E.** Removing all unit tests from the production release branch.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Active Redundancy, Passive Redundancy, and Rollback are core fault recovery tactics that sustain operational continuity.
* **Why D & E are INCORRECT:** Powering off servers permanently destroys availability, and removing tests degrades quality.

---

### Question 4: Security Tactics — Resisting Attacks (ප්‍රහාරවලට ප්‍රතිරෝධය දැක්වීම)
Which of the following are standard architectural tactics categorized under **Resisting Attacks (ප්‍රහාරවලට ප්‍රතිරෝධය දැක්වීම)**?  
*[Select THREE correct answers]*

- [ ] **A.** **Authenticate Actors (පරිශීලකයන් හඳුනාගැනීම):** Verifying the claimed identity of human users or external services (e.g., passwords, digital certificates, biometrics).
- [ ] **B.** **Authorize Actors (අවසර ලබාදීම):** Verifying that an authenticated entity has legitimate permissions to access a specific resource or execute an operation.
- [ ] **C.** **Encrypt Data (දත්ත ගුප්තකේතනය කිරීම):** Transforming plain data into ciphertext using algorithms (e.g., AES-256) at rest and in transit (TLS) to prevent eavesdropping.
- [ ] **D.** Displaying full credit card numbers and PIN codes on public bulletin boards.
- [ ] **E.** Permitting arbitrary unauthenticated users to execute administrative SQL queries.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Authentication, Authorization, and Encryption are foundational tactics for resisting unauthorized access and data compromises.
* **Why D & E are INCORRECT:** Exposing PIN numbers and allowing raw SQL execution are direct violations of security principles.

---

### Question 5: Performance Tactics — Managing Demand vs. Managing Resources
Tactics for **Performance (ක්‍රියාකාරීත්වය)** are divided into managing demand (workload) and managing system resources. Which tactics fall under **Managing System Resources (සම්පත් කළමනාකරණය)**?  
*[Select THREE correct answers]*

- [ ] **A.** **Increase Resources (සම්පත් වැඩි කිරීම):** Scaling up CPU, memory, network bandwidth, or server instances (vertical and horizontal scaling).
- [ ] **B.** **Maintain Multiple Copies of Data (Caching / Replicas - දත්ත පිටපත් පවත්වා ගැනීම):** Storing frequently read data in fast in-memory caches (e.g., Redis) or read replicas.
- [ ] **C.** **Introduce Concurrency (සමගාමීත්වය හඳුන්වා දීම):** Executing independent processing steps simultaneously across multiple threads or processor cores.
- [ ] **D.** Permitting infinite unthrottled requests to flood a single database node.
- [ ] **E.** Forcing all application threads to wait behind a single global lock.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Increasing hardware, caching, and multi-threaded concurrency are standard tactics to optimize resource efficiency and reduce latency.
* **Why D & E are INCORRECT:** Flooding databases causes crashes, and single global locks cause catastrophic thread contention and latency.

---

### Question 6: Modifiability Tactics — Deferring Binding Time (බැඳීමේ කාලය කල් දැමීම)
At what different stages can software components, parameters, or configurations be **bound** to support high **Modifiability**?  
*[Select THREE correct answers]*

- [ ] **A.** **Compile Time (සම්පාදන කාලය):** Binding modules using build-time flags, compile-time macros, or static libraries.
- [ ] **B.** **Load / Startup Time (ආරම්භක කාලය):** Binding configuration parameters via environment variables (`.env`) or dependency injection configuration files (e.g., Spring XML/JSON).
- [ ] **C.** **Runtime (ධාවන කාලය):** Dynamically discovering, loading, and binding new modules or plugins at runtime using reflection or dynamic link libraries (DLLs/`.so`).
- [ ] **D.** Never binding any code, so the computer cannot execute the program.
- [ ] **E.** Post-mortem binding after physical hardware has melted down.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Binding time tactics allow choices to be made at compile-time, deployment/startup-time, or dynamically at runtime (e.g., dynamic plugins), increasing system adaptability.
* **Why D & E are INCORRECT:** Programs must bind to execute; hardware failure is outside software binding.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Availability Tactics — Fault Prevention vs. Fault Detection vs. Fault Recovery
Architects must distinguish between preventing, detecting, and recovering from faults. Which of the following correctly pairs an availability tactic with its category?  
*[Select TWO correct answers]*

- [ ] **A.** **Tactic:** *Removal from Service (සේවාවෙන් ඉවත් කිරීම)* $\rightarrow$ **Category:** **Fault Prevention (දෝෂ වැළැක්වීම)** (e.g., taking an unhealthy server offline before it crashes to perform scheduled maintenance).
- [ ] **B.** **Tactic:** *State Resynchronization (තත්ත්ව නැවත සමමුහුර්තකරණය)* $\rightarrow$ **Category:** **Fault Recovery (දෝෂවලින් යථා තත්ත්වයට පත්වීම)** (e.g., synchronizing a recovered backup database with the master log).
- [ ] **C.** **Tactic:** *Ping / Echo* $\rightarrow$ **Category:** **Fault Prevention**.
- [ ] **D.** **Tactic:** *Heartbeat* $\rightarrow$ **Category:** **Fault Recovery**.
- [ ] **E.** **Tactic:** *Active Redundancy* $\rightarrow$ **Category:** **Fault Detection**.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Removal from service prevents catastrophic failures by isolating degrading nodes. State resynchronization recovers a secondary node so it matches the primary.
* **Why C, D & E are INCORRECT:** Ping/Echo and Heartbeat are Fault *Detection* tactics (not prevention or recovery). Active Redundancy is a Fault *Recovery* tactic (not detection).

---

### Question 8: Performance Tactics — Managing Demand (ඉල්ලුම කළමනාකරණය කිරීමේ උපායමාර්ග)
When system hardware resources cannot be easily increased, architects manage incoming demand. Which of the following represent **Demand Management Tactics**?  
*[Select TWO correct answers]*

- [ ] **A.** **Manage Event Rate (ඉල්ලුම් අනුපාතය පාලනය කිරීම):** Enforcing rate-limiting and request throttling (e.g., limiting an API key to 100 requests per minute).
- [ ] **B.** **Control Sample Rate (නියැදි අනුපාතය පාලනය):** Decreasing the frequency at which sensors report continuous telemetry when data values remain unchanged.
- [ ] **C.** Purchasing 50 additional physical mainframe servers.
- [ ] **D.** Rewriting all business logic into low-level assembly language.
- [ ] **E.** Allowing infinite denial-of-service bot traffic to bypass network firewalls.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Managing event rate (throttling) and controlling sample rates reduce the volume of work arriving at the system, keeping load within safe operational limits.
* **Why C, D & E are INCORRECT:** Purchasing hardware manages *resources* (not demand); assembly language is an implementation detail; and allowing bot traffic destroys performance.

---

### Question 9: Modifiability Tactics — Reducing Coupling (පරායත්තතාව අඩු කිරීමේ උපායමාර්ග)
Which of the following are recognized architectural tactics for **Reducing Coupling (පරායත්තතාව අඩු කිරීම)** between modules to improve **Modifiability**?  
*[Select THREE correct answers]*

- [ ] **A.** **Encapsulate (කරලිකරණය):** Hiding private implementation details, data schemas, and internal algorithms behind a stable public interface.
- [ ] **B.** **Use an Intermediary (මැදිහත්කරුවෙකු භාවිතා කිරීම):** Introducing a mediator, message broker, adapter, or API gateway so two components do not depend directly on each other.
- [ ] **C.** **Restrict Dependencies (පරායත්තතා සීමා කිරීම):** Enforcing layered boundaries or dependency inversion so high-level business rules do not depend on low-level database drivers.
- [ ] **D.** Creating bidirectional circular references between all classes in the application.
- [ ] **E.** Giving every module direct write access to all other modules' raw memory pointers.

**ANSWER:** A, B, C

**Explanation (විග්‍රහය):**
* **Why A, B & C are CORRECT:** Encapsulation, Intermediaries (brokers/adapters), and Restricting Dependencies (layers/interfaces) decouple modules, allowing one module to change without breaking others.
* **Why D & E are INCORRECT:** Circular dependencies and raw shared memory pointers maximize coupling and ruin modifiability.

---

### Question 10: Security Tactics — Detecting Attacks (ප්‍රහාර හඳුනාගැනීමේ උපායමාර්ග)
Which architectural tactics are utilized specifically to **Detect Attacks (ප්‍රහාර හඳුනාගැනීම)** while they are occurring?  
*[Select TWO correct answers]*

- [ ] **A.** **Intrusion Detection System - IDS (ආක්‍රමණ හඳුනාගැනීමේ පද්ධති):** Analyzing network packet patterns and API calls against known signature rules or behavioral anomalies.
- [ ] **B.** **Maintain Audit Logs (විගණන සටහන් පවත්වා ගැනීම):** Recording critical security-sensitive operations (logins, privilege escalations, financial transfers) with timestamps and actor identities.
- [ ] **C.** Disabling firewall alerts whenever suspicious traffic is encountered.
- [ ] **D.** Encrypting all user passwords with a single hardcoded reversible Caesar cipher.
- [ ] **E.** Deleting all server logs every 10 seconds.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Intrusion Detection Systems and tamper-resistant Audit Logs are textbook tactics for detecting and tracing active attacks and unauthorized system activity.
* **Why C, D & E are INCORRECT:** Disabling alerts blinds security; Caesar ciphers are easily cracked; and deleting logs erases evidence of intrusion.

---

### Question 11: Security Tactics — Recovering from Attacks (ප්‍රහාරවලින් යථා තත්ත්වයට පත්වීම)
After an attacker successfully compromises a server, which architectural tactics help the system **Recover from the Attack**?  
*[Select TWO correct answers]*

- [ ] **A.** **Restore State (තත්ත්වය යථා තත්ත්වයට පත් කිරීම):** Rebuilding compromised server instances from clean, verified golden master images and restoring clean database backups.
- [ ] **B.** **Maintain Audit Trail (විගණන මාවත පවත්වා ගැනීම):** Using immutable, write-once audit logs to identify the exact vulnerability exploited, determine data exposure, and remediate the entry point.
- [ ] **C.** Paying random ransoms to unknown hackers without fixing the underlying software defect.
- [ ] **D.** Immediately sending customer passwords via unencrypted Twitter public posts.
- [ ] **E.** Disabling all antivirus and firewall software across the entire enterprise.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Restoring state from trusted images/backups and analyzing forensic audit trails are the primary architectural tactics for rapid attack recovery and remediation.
* **Why C, D & E are INCORRECT:** Paying ransoms does not fix flaws; broadcasting passwords is disastrous; and disabling firewalls invites more attacks.

---

### Question 12: Testability Tactics — Specialized Interfaces and Record/Playback
Which tactics directly improve the **Testability (පරීක්ෂා කිරීමේ හැකියාව)** of complex software components?  
*[Select TWO correct answers]*

- [ ] **A.** **Specialized Testing Interfaces (පරීක්ෂණ අතුරුමුහුණත්):** Providing dedicated APIs or diagnostic hooks that allow automated test suites to inject state, simulate faults, and inspect private variables.
- [ ] **B.** **Record / Playback (වාර්තා කිරීම සහ නැවත ධාවනය):** Capturing live system inputs/state sequences during production and replaying them deterministically in test environments to reproduce bugs.
- [ ] **C.** Obfuscating all variable names so that software testers cannot read error messages.
- [ ] **D.** Preventing automated continuous integration (CI) servers from compiling test suites.
- [ ] **E.** Making all software components completely dependent on live production credit card transactions to execute tests.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Dedicated test interfaces (Controllability/Observability) and Record/Playback mechanisms are premier tactics for verifying complex systems predictably.
* **Why C, D & E are INCORRECT:** Obfuscating errors hinders debugging; stopping CI prevents testing; and testing against real customer credit cards is hazardous and unethical.

---

### Question 13: Usability Tactics — Supporting User Initiative (පරිශීලක මුලපිරීම් සඳහා සහාය දැක්වීම)
Which architectural tactics empower users to correct mistakes and retain control over system interactions?  
*[Select TWO correct answers]*

- [ ] **A.** **Cancel (අවලංගු කිරීම):** Allowing a user to interrupt and abort a long-running operation (e.g., large file download or batch export) safely without crashing the client.
- [ ] **B.** **Undo (කළ ක්‍රියාව ආපසු හැරවීම):** Maintaining a history stack of user operations and state transitions, allowing users to reverse accidental actions.
- [ ] **C.** Automatically deleting a user's entire account if they make a single typo.
- [ ] **D.** Freezing the user's web browser screen permanently when an input validation error occurs.
- [ ] **E.** Forcing users to solve complex calculus integrals before clicking a checkout button.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** "Cancel" and "Undo" are classic Usability tactics categorized under Supporting User Initiative, requiring state tracking and interruptible processing.
* **Why C, D & E are INCORRECT:** Account deletion on typos, freezing screens, and calculus challenges destroy usability.

---

### Question 14: Trade-Offs Between Tactics: Caching vs. Consistency
Introducing an in-memory caching tactic (e.g., Redis) dramatically improves **Performance (Latency)**. What negative trade-off does this tactic introduce?  
*[Select TWO correct answers]*

- [ ] **A.** **Stale Data / Reduced Consistency (දත්තවල නැවුම් බව අඩුවීම):** Data in the cache can become out-of-sync with the primary database, leading users to view outdated information.
- [ ] **B.** **Increased System Complexity (සංකීර්ණත්වය වැඩිවීම):** The engineering team must implement complex cache-invalidation strategies (e.g., TTLs, write-through, write-behind, cache-busting).
- [ ] **C.** Network bandwidth to the database is multiplied by 10,000 times on every read request.
- [ ] **D.** The cache tactic guarantees that the application can never run on any cloud provider.
- [ ] **E.** The cache completely prevents any write operations from ever reaching the database.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** As Phil Karlton famously noted, *"There are only two hard things in Computer Science: cache invalidation and naming things."* Caching improves read speed at the cost of data staleness risks and cache-invalidation complexity.
* **Why C, D & E are INCORRECT:** Caching *reduces* database bandwidth, works on all clouds, and does not block writes.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Preventing Downtime in a Stock Trading Exchange
A stock exchange matching engine must guarantee that if a server rack suffers a physical power outage during trading hours, orders are processed without interruption.

The architecture team proposes:  
*"Deploy an **Active Redundancy (Hot Spare)** configuration where an active secondary server processes every incoming order stream in parallel with the primary server. A dedicated heartbeat monitor pings both servers every 10 milliseconds. If the primary fails to reply to two consecutive pings, traffic switches instantly to the secondary with zero downtime."*

#### Question 15: Analyzing the High-Availability Tactic
Which architectural tactics are implemented in this scenario, and what is the primary trade-off?  
*[Select TWO correct answers]*

- [ ] **A.** **Tactics Used:** Fault Detection (**Heartbeat**) combined with Fault Recovery (**Active Redundancy**).
- [ ] **B.** **Primary Trade-off:** Extremely high availability and zero failover latency are achieved **at the cost of** doubled hardware/infrastructure costs and synchronization overhead.
- [ ] **C.** **Tactics Used:** Modifiability tactic (Compile-time binding) and Usability tactic (Undo).
- [ ] **D.** **Primary Trade-off:** The system becomes 100% immune to all software bugs, at zero financial cost.
- [ ] **E.** The scenario demonstrates an Anti-pattern that causes all financial transactions to be permanently deleted.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Heartbeats detect faults; active redundancy provides seamless failover. The trade-off is higher infrastructure cost (running 2x hardware constantly) and data synchronization overhead.
* **Why C, D & E are INCORRECT:** Compile-time binding and undo are unrelated; active redundancy does not eliminate bugs or cost nothing; and it is a proven pattern, not an anti-pattern.

---

### Scenario 2: Defending an Online Banking API Against Credential Stuffing
A commercial bank observes that malicious botnets are submitting 50,000 automated login requests per minute using stolen username/password lists.

The security architect implements three tactics:
1. **Manage Event Rate / Throttle Requests:** Limiting IP addresses to 5 failed attempts per 10 minutes.
2. **Authenticate Actors via MFA:** Requiring an out-of-band TOTP authenticator app code for unrecognized IP locations.
3. **Detect Attacks (IDS):** Flagging distributed IP clusters exhibiting robotic user-agent signatures.

#### Question 16: Security & Performance Tactics Evaluation
Which statements accurately evaluate this defensive architectural response?  
*[Select TWO correct answers]*

- [ ] **A.** The architect combines a **Performance Tactic (Rate Limiting / Managing Demand)** with **Security Tactics (Resisting Attacks via MFA, Detecting Attacks via IDS)** to protect system resources and data.
- [ ] **B.** Legitimate human users logging in from new devices may experience a slight drop in Usability (entering an MFA code) in exchange for significant security hardening against account takeover.
- [ ] **C.** Rate limiting guarantees that hackers will gain administrative access to the underlying SQL server.
- [ ] **D.** Implementing MFA makes it impossible for the bank to comply with banking regulations.
- [ ] **E.** The architect should have removed authentication entirely to make the botnet attacks succeed faster.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Combining demand throttling with MFA and IDS stops credential stuffing while balancing the trade-off of minor user friction for major security gain.
* **Why C, D & E are INCORRECT:** Rate limiting blocks attackers (not assists them); MFA is mandated by regulations; and removing authentication is absurd.

---

### Scenario 3: Video Streaming Platform Video Transcoding Bottleneck
A video streaming service (similar to YouTube) allows users to upload 4K video files. The CPU-heavy transcoding process (converting videos into 1080p, 720p, 480p formats) causes the web server's CPU to spike to 100%, causing the homepage to become unresponsive for all regular viewers.

The team implements two Performance Tactics:
1. **Introduce Concurrency & Asynchronous Buffering:** Video upload requests immediately save raw files to cloud object storage (S3) and push an event message to an asynchronous queue (RabbitMQ).
2. **Increase Resources (Horizontal Worker Scaling):** A pool of dedicated transcoding worker servers pulls jobs from the queue independently, auto-scaling up or down based on queue depth.

#### Question 17: Architectural Tactics Analysis
What did the architecture team accomplish with these tactics?  
*[Select TWO correct answers]*

- [ ] **A.** They decoupled the user-facing web tier from the compute-intensive background processing, preserving web frontend responsiveness.
- [ ] **B.** They applied **Resource Management Tactics (Asynchronous Concurrency and Elastic Horizontal Worker Scaling)** to absorb fluctuating upload workloads smoothly.
- [ ] **C.** They proved that video transcoding can be performed in zero milliseconds with zero CPU cycles.
- [ ] **D.** They forced users to wait with an open browser tab for 4 hours until the video finished transcoding.
- [ ] **E.** They converted the video streaming platform into a non-relational database.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Buffering background transcoding behind an asynchronous queue isolates the web tier, ensuring fast user uploads and auto-scaled processing without crashing the site.
* **Why C, D & E are INCORRECT:** Transcoding always takes CPU time; asynchronous queues allow users to close their tabs immediately; and the system did not become a database.

---

### Scenario 4: Isolating Third-Party Payment Gateway Changes
An online airline booking system connects to a third-party bank gateway to process credit cards. Every 6 months, the bank updates its SOAP API XML schemas, requiring the airline's developers to rewrite business booking classes across 12 different modules.

The architect introduces an **Intermediary Tactic (Adapter / Abstraction Layer)**:  
The airline defines an internal interface (`IPaymentGateway`). An adapter class (`BankPaymentAdapter`) implements this interface and translates internal method calls into the bank's external SOAP calls.

#### Question 18: Evaluating the Modifiability Tactic
What is the direct architectural benefit of this intermediary tactic?  
*[Select TWO correct answers]*

- [ ] **A.** It **Restricts Dependencies** and **Encapsulates** external change: when the bank modifies its SOAP XML schema, only the `BankPaymentAdapter` class requires modification; the other 12 booking modules remain completely untouched.
- [ ] **B.** It substantially lowers the cost, effort, and regression risk of accommodating future payment gateway updates.
- [ ] **C.** It makes the airline's flights fly 200 mph faster.
- [ ] **D.** It eliminates the need for airline passengers to pay for plane tickets.
- [ ] **E.** It forces the bank to shut down its SOAP API forever.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Adapter pattern acts as an Intermediary tactic. It encapsulates third-party volatility, restricting changes to a single adapter class and isolating the rest of the codebase.
* **Why C, D & E are INCORRECT:** Software architecture does not affect airplane aerodynamics, ticket prices, or bank server operations.

---

### Scenario 5: Dynamic Shipping Rule Engine using Runtime Binding
An international retail company ships packages worldwide. Shipping regulations and customs tariff rates vary by destination country and change weekly.

The development team creates a **Microkernel / Plug-in Architecture** where custom shipping rules are compiled into independent `.jar` or `.dll` plug-in files. At runtime, the core system scans a plugins directory, dynamically loading and binding the required shipping rule classes without restarting the application.

#### Question 19: Evaluating the Binding Time Tactic
Which architectural tactic was applied, and what Quality Attribute does it support?  
*[Select TWO correct answers]*

- [ ] **A.** **Tactic Applied:** **Defer Binding Time to Runtime (ධාවන කාලයේදී බැඳීම සිදු කිරීම)** using dynamic plugin loading.
- [ ] **B.** **Supported Quality Attribute:** **Modifiability & Extensibility (වෙනස් කිරීමේ සහ පුළුල් කිරීමේ හැකියාව)**, allowing new shipping rules to be deployed with zero application downtime.
- [ ] **C.** **Tactic Applied:** Deferring binding to compile time using C++ static linking.
- [ ] **D.** **Supported Quality Attribute:** Usability, because the computer monitor displays text in 3D.
- [ ] **E.** The tactic guarantees that shipping trucks will never run out of diesel fuel.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Loading plugins dynamically at runtime is a textbook runtime binding tactic that maximizes Modifiability, allowing zero-downtime updates of regional business rules.
* **Why C, D & E are INCORRECT:** It is runtime (not compile-time) binding; 3D monitor text is unrelated; and truck fuel is unaffected by software binding.

---

### Scenario 6: Testability via Dependency Injection and Mock Objects
A developer is writing unit tests for an `OrderCheckoutService`. The service needs to charge a customer's credit card. In the initial design, the service directly instantiated a real `StripeLivePaymentGateway` inside its constructor, causing unit tests to fail unless an active internet connection and real credit card credentials were provided.

The architect refactors the service to accept an `IPaymentProcessor` interface via **Dependency Injection**. In automated tests, the test harness passes a `MockPaymentProcessor` that simulates successful and failed card charges instantly in-memory without making network calls.

#### Question 20: Analyzing the Testability Tactic
Which principles of **Testability (පරීක්ෂා කිරීමේ හැකියාව)** were enhanced by this refactoring?  
*[Select TWO correct answers]*

- [ ] **A.** **Controllability (පාලනය කිරීමේ හැකියාව):** The test suite can deliberately force specific return values (e.g., card declined, network timeout) into the service to test edge-case handling.
- [ ] **B.** **Isolation & Repeatability:** Unit tests can execute reliably in milliseconds in an offline continuous integration (CI) pipeline without incurring real financial charges.
- [ ] **C.** The refactoring proves that interfaces are harmful to software design.
- [ ] **D.** The refactoring prevents the application from ever executing in production.
- [ ] **E.** The refactoring guarantees that Stripe will never charge transaction processing fees.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Dependency Injection decouples components from concrete implementations, drastically improving Controllability and Observability for fast, deterministic, offline automated unit tests.
* **Why C, D & E are INCORRECT:** Interfaces are beneficial (not harmful); the code runs fine in production with the real implementation; and Stripe's fee structure is unchanged.
