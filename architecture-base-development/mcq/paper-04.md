# SE3100: Architecture Based Development
# Practice Exam Paper 04 (පුහුණු විභාග ප්‍රශ්න පත්‍රය 04)
## Focus: Lecture 03 — Architectural Thinking: Modularity, Cohesion & Coupling Metrics

---

## 🟢 Part 1: Easy Level Questions (මූලික මට්ටමේ ප්‍රශ්න)

---

### Question 1: Modularity as an Organizing Principle (මොඩියුලර්භාවය සංවිධානාත්මක මූලධර්මයක් ලෙස)
Why is **Modularity (මොඩියුලර්භාවය)** fundamental in managing software complexity?  
*[Select TWO correct answers]*

- [ ] **A.** It decomposes a complex, monolithic system into discrete, cohesive, and understandable units with well-defined boundaries.
- [ ] **B.** It allows individual parts of a system to be developed, tested, and maintained with minimal ripple effects on other components.
- [ ] **C.** It forces all developers to write code using only one single global variable.
- [ ] **D.** It completely eliminates the need for software systems to store data in memory.
- [ ] **E.** It legally prohibits software from running on Linux operating systems.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Modularity breaks large problems into manageable chunks with distinct boundaries, isolating change and reducing cognitive load for developers.
* **Why C, D & E are INCORRECT:** Single global variables destroy modularity; memory is always required; and modular software runs on all operating systems.

---

### Question 2: Defining Cohesion and Coupling (සංගතිභාවය සහ පරායත්තතාව)
What is the core distinction between **Cohesion (සංගතිභාවය)** and **Coupling (පරායත්තතාව)** in software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** **Cohesion** measures the degree to which elements *inside* a single module belong together and focus on a single, well-defined purpose.
- [ ] **B.** **Coupling** measures the degree of interdependence and connectivity *between* distinct modules or artifacts.
- [ ] **C.** Good software architecture strives for **Low Cohesion and High Coupling**.
- [ ] **D.** High coupling guarantees that changing one module will never cause bugs in another module.
- [ ] **E.** Cohesion and coupling are identical terms that mean the physical speed of Ethernet cables.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Cohesion is *internal* relatedness (elements working together toward one goal), while Coupling is *external* entanglement (interdependence between components).
* **Why C, D & E are INCORRECT:** Good architecture demands **High Cohesion and Low Coupling** (not low cohesion and high coupling); high coupling increases ripple effects; and they are architectural metrics, not cable speeds.

---

### Question 3: The Cohesion Spectrum (සංගතිතා මට්ටම් වර්ගීකරණය)
Computer science recognizes a spectrum of cohesion types ranging from strongest (most desirable) to weakest (least desirable). Which cohesion type is recognized as the **Strongest and Most Desirable (ශක්තිමත්ම සහ වඩාත්ම යෝග්‍ය)**?  
*[Select ONE correct answer]*

- [ ] **A.** Coincidental Cohesion (අහඹු සංගතිභාවය)
- [ ] **B.** Logical Cohesion (තාර්කික සංගතිභාවය)
- [ ] **C.** Functional Cohesion (ක්‍රියාකාරී සංගතිභාවය)
- [ ] **D.** Temporal Cohesion (කාලීන සංගතිභාවය)
- [ ] **E.** Procedural Cohesion (ක්‍රියාපටිපාටික සංගතිභාවය)

**ANSWER:** C

**Explanation (විග්‍රහය):**
* **Why C is CORRECT:** **Functional Cohesion** is the highest and most desirable form of cohesion, where every element inside the module contributes directly to performing a single, well-defined function (e.g., calculating compound interest).
* **Why A, B, D & E are INCORRECT:** Coincidental cohesion is the worst/weakest form. Logical, temporal, and procedural cohesion represent lower, less cohesive levels.

---

### Question 4: The Weakest Form of Cohesion (දුර්වලම සංගතිතා මට්ටම)
Which form of cohesion represents the **Weakest and Least Desirable (දුර්වලම සහ අවම යෝග්‍ය)** state, where parts of a module are grouped together purely by accident or convenience without any meaningful relationship?  
*[Select ONE correct answer]*

- [ ] **A.** Functional Cohesion
- [ ] **B.** Sequential Cohesion
- [ ] **C.** Coincidental Cohesion (අහඹු සංගතිභාවය - e.g., a generic "Utilities" or "Misc" class)
- [ ] **D.** Communicational Cohesion
- [ ] **E.** Object-Oriented Cohesion

**ANSWER:** C

**Explanation (විග්‍රහය):**
* **Why C is CORRECT:** **Coincidental Cohesion** occurs when tasks are thrown into a class simply because a developer did not know where else to put them (e.g., `GeneralHelper` containing print functions, tax calculations, and string reversals). It is an anti-pattern.
* **Why A, B, D & E are INCORRECT:** Functional, sequential, and communicational cohesion exhibit structured relationships among their elements.

---

### Question 5: Defining Afferent and Efferent Coupling (ඇෆරන්ට් සහ එෆරන්ට් පරායත්තතා)
In architectural code analysis, what do **Afferent Coupling ($C_a$)** and **Efferent Coupling ($C_e$)** measure?  
*[Select TWO correct answers]*

- [ ] **A.** **Afferent Coupling ($C_a$ - Incoming):** The number of classes/packages *outside* this package that depend on classes *inside* this package (who depends on me?).
- [ ] **B.** **Efferent Coupling ($C_e$ - Outgoing):** The number of classes/packages *inside* this package that depend on classes *outside* this package (who do I depend on?).
- [ ] **C.** Afferent coupling measures the physical temperature of the server motherboard in Celsius.
- [ ] **D.** Efferent coupling measures the total number of comments written in the source code file.
- [ ] **E.** $C_a$ and $C_e$ are only applicable to relational database SQL tables.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Afferent ($C_a$) = Incoming connections (measures responsibility/dependents). Efferent ($C_e$) = Outgoing connections (measures dependency on outside artifacts).
* **Why C, D & E are INCORRECT:** Motherboard temperature and comment counts are completely unrelated, and coupling metrics apply to code modules, packages, and services.

---

### Question 6: The Robert C. Martin Instability Index Formula (අස්ථාවරත්ව දර්ශක සූත්‍රය)
What is the mathematical formula for the **Instability Index ($I$)** of a module as defined by Robert C. Martin, and what is its valid numerical range?  
*[Select TWO correct answers]*

- [ ] **A.** Formula: $I = \frac{C_e}{C_a + C_e}$ (Efferent coupling divided by total coupling).
- [ ] **B.** Range: $I$ ranges from **0.0 (Maximally Stable / අප්‍රතිරෝධී / ස්ථාවර)** to **1.0 (Maximally Instable / ඉතා අස්ථාවර)**.
- [ ] **C.** Formula: $I = C_a \times C_e \times 100$.
- [ ] **D.** Range: $I$ ranges from $-100$ to $+100$.
- [ ] **E.** Formula: $I = \frac{C_a}{C_e}$.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Instability metric is defined as $I = \frac{C_e}{C_a + C_e}$. A value of 0 means zero outgoing dependencies (highly stable, independent). A value of 1 means zero incoming dependencies and all outgoing (highly instable, easily affected by changes).
* **Why C, D & E are INCORRECT:** These represent incorrect formulas and invalid ranges.

---

## 🟡 Part 2: Medium Difficulty Questions (මධ්‍යම මට්ටමේ ප්‍රශ්න)

---

### Question 7: Identifying Sequential vs. Communicational Cohesion
In a software component:
* Subsystem 1: An image pipeline takes raw sensor pixels, outputs calibrated pixels, which are then passed to a contrast enhancer, which passes them to an edge detector (the output of one step is the direct input to the next).
* Subsystem 2: A customer profile manager takes a `CustomerID` and uses it to fetch personal details, fetch purchase history, and fetch loyalty points (different operations operating on the exact same input data).

Which cohesion types are represented?  
*[Select TWO correct answers]*

- [ ] **A.** Subsystem 1 exhibits **Sequential Cohesion (අනුක්‍රමික සංගතිභාවය)** because the output of one processing element is the input to the next element.
- [ ] **B.** Subsystem 2 exhibits **Communicational Cohesion (සන්නිවේදනාත්මක සංගතිභාවය)** because multiple operations operate on the same input data or contribute to the same output data.
- [ ] **C.** Subsystem 1 exhibits Coincidental Cohesion because image pixels are random.
- [ ] **D.** Subsystem 2 exhibits Temporal Cohesion because customers have birthdates.
- [ ] **E.** Both subsystems exhibit zero cohesion because they are written in Java.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Data pipelining (output becomes input) is **Sequential Cohesion**. Multiple methods operating on the same underlying data structure is **Communicational Cohesion**.
* **Why C, D & E are INCORRECT:** Neither is coincidental or temporal; and programming language choice does not invalidate cohesion.

---

### Question 8: Calculating Instability ($I$) for Core Foundation Package
Package `com.bank.core.model` contains central domain entities (`Account`, `Transaction`). 
* There are **25 external packages** in the application that import and use these entity classes ($C_a = 25$).
* The package imports **zero external packages** ($C_e = 0$).

What is the **Instability Index ($I$)** of this package, and what does it indicate?  
*[Select TWO correct answers]*

- [ ] **A.** The Instability Index is $I = \frac{0}{25 + 0} = \mathbf{0.0}$.
- [ ] **B.** An Instability of **$0.0$** indicates that the package is **Maximally Stable (උපරිම ලෙස ස්ථාවර)**; changing it is difficult because 25 other packages depend on it.
- [ ] **C.** The Instability Index is $I = 1.0$, meaning it will break at any moment.
- [ ] **D.** The package is an anti-pattern and must be immediately deleted.
- [ ] **E.** An Instability of 0.0 indicates that no other code in the application can see this package.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** With $C_e = 0$, $I = 0.0$. In Robert C. Martin's metric, $I = 0$ signifies maximum stability. A stable package is heavily depended upon, making it resilient to ripple effects but hard to alter without impacting dependents.
* **Why C, D & E are INCORRECT:** $I$ is 0.0 (not 1.0); core entity models are naturally stable foundations (not anti-patterns); and other code can see it (proven by $C_a = 25$).

---

### Question 9: Calculating Instability ($I$) for UI Controller Package
Package `com.bank.web.controllers` contains Spring MVC REST controllers:
* No other packages in the system import these controllers ($C_a = 0$).
* These controllers import **12 different services, DTOs, and utility packages** to handle requests ($C_e = 12$).

What is the **Instability Index ($I$)** of this package, and what does it indicate?  
*[Select TWO correct answers]*

- [ ] **A.** The Instability Index is $I = \frac{12}{0 + 12} = \mathbf{1.0}$.
- [ ] **B.** An Instability of **$1.0$** indicates that the package is **Maximally Instable / Flexible (උපරිම ලෙස අස්ථාවර / පහසුවෙන් වෙනස් කළ හැකි)**; it is easy to change because no other packages depend on it.
- [ ] **C.** The package is completely broken and cannot compile.
- [ ] **D.** The Instability Index is 0.0 because controllers run in web browsers.
- [ ] **E.** The package should be forced to have 100 incoming dependencies to become stable.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** With $C_a = 0$ and $C_e = 12$, $I = 1.0$. In metric terms, "instable" simply means *flexible and easy to change without breaking other components*, which is normal and desirable for top-level UI controllers.
* **Why C, D & E are INCORRECT:** $I = 1.0$ does not mean broken code; controllers run on the server; and controllers should not be depended upon by lower tiers.

---

### Question 10: The Abstractness Metric ($A$) (වියුක්තතා මිනුම)
How is the **Abstractness ($A$)** of a software package calculated, and what do the values $A = 0$ and $A = 1$ represent?  
*[Select TWO correct answers]*

- [ ] **A.** Formula: $A = \frac{\sum \text{Abstract Classes and Interfaces}}{\sum \text{Total Classes and Interfaces}}$.
- [ ] **B.** A value of **$A = 0.0$** represents a **completely concrete package** (all implementations, no interfaces), while **$A = 1.0$** represents a **completely abstract package** (pure interfaces/abstract classes).
- [ ] **C.** Abstractness measures the total number of spelling errors in variable names.
- [ ] **D.** A value of $A = 1.0$ means the package can be run directly on a CPU without any concrete classes.
- [ ] **E.** Abstractness is calculated by dividing the file size in megabytes by the price of the laptop.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Abstractness ($A$) is the ratio of abstract classes/interfaces to total types, spanning from 0 (completely concrete code) to 1 (pure abstractions/interfaces).
* **Why C, D & E are INCORRECT:** Spelling errors, pure interface execution, and laptop prices have no connection to Abstractness.

---

### Question 11: Distance from the Main Sequence ($D$) (ප්‍රධාන අනුක්‍රමයේ සිට දුර)
Robert C. Martin defines the **Main Sequence** as the ideal balance between Abstractness ($A$) and Instability ($I$), defined by the line $A + I = 1$. The normalized **Distance ($D$)** is calculated as:
$$D = |A + I - 1|$$
What do the extreme zones represent when a package deviates significantly from the Main Sequence?  
*[Select TWO correct answers]*

- [ ] **A.** **The Zone of Pain (වේදනා කලාපය - $A \approx 0, I \approx 0$):** Highly stable (many incoming dependents) but completely concrete (no interfaces), making it rigid, fragile, and painful to modify.
- [ ] **B.** **The Zone of Uselessness (නිෂ්ඵල කලාපය - $A \approx 1, I \approx 1$):** Highly abstract (pure interfaces) but completely instable (no other packages depend on it), representing useless over-engineered abstractions.
- [ ] **C.** **The Main Sequence:** An anti-pattern that all software architects must actively avoid.
- [ ] **D.** The Zone of Pain is an area where software code runs twice as fast as normal code.
- [ ] **E.** A distance of $D = 0$ indicates that the package should be deleted immediately.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The **Zone of Pain** ($A=0, I=0$) is concrete and heavily depended upon, making changes painful. The **Zone of Uselessness** ($A=1, I=1$) is abstract with zero dependents, representing wasted boilerplate code.
* **Why C, D & E are INCORRECT:** The Main Sequence ($D=0$) is the ideal balanced line; the Zone of Pain does not speed up code; and $D=0$ is the goal, not a reason for deletion.

---

### Question 12: Cohesion: Temporal vs. Logical vs. Procedural
Match the following scenarios with their corresponding cohesion type:
1. An initialization routine that sets up the database connection, loads configuration files, and renders the startup splash screen because they all happen at application boot-up time.
2. A single error-logging class containing a method `processInput(int flag)` with a huge switch statement that either formats dates, calculates VAT, or writes text to disk based on the integer `flag`.

Which cohesion classifications are **CORRECT**?  
*[Select TWO correct answers]*

- [ ] **A.** Scenario 1 exhibits **Temporal Cohesion (කාලීන සංගතිභාවය)** because the tasks are grouped together solely because they execute during the same timeframe (application startup).
- [ ] **B.** Scenario 2 exhibits **Logical Cohesion (තාර්කික සංගතිභාවය)** because the operations are grouped into a single routine that selects an operation based on an arbitrary control flag.
- [ ] **C.** Scenario 1 exhibits Functional Cohesion.
- [ ] **D.** Scenario 2 exhibits Sequential Cohesion.
- [ ] **E.** Both scenarios exhibit perfect Object-Oriented design.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Grouping tasks because they run at the same time (e.g., startup/shutdown routines) is **Temporal Cohesion**. Grouping unrelated tasks into one method controlled by a flag/switch is **Logical Cohesion**.
* **Why C, D & E are INCORRECT:** Neither is functional or sequential; both represent lower, less desirable forms of cohesion.

---

### Question 13: Coupling Crossing Module Boundaries (මොඩියුල සීමා හරහා පරායත්තතාව පැතිරීම)
A software system initially contains two strongly coupled classes within the same package. A developer moves one class into a completely separate top-level module, while their direct method-calling dependency remains tightly coupled.  
What is the proper architectural assessment of this change?  
*[Select TWO correct answers]*

- [ ] **A.** The dependency has become **more problematic (වඩාත් ගැටලු සහගත)** because tight coupling now crosses an architectural module boundary.
- [ ] **B.** Crossing a module boundary with tight coupling increases ripple effects, degrades maintainability, and harms independent deployability.
- [ ] **C.** The dependency has been eliminated because the classes reside in different folders.
- [ ] **D.** The dependency automatically transformed into functional cohesion.
- [ ] **E.** The change is acceptable as long as both modules use Git for version control.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Moving coupled elements across module boundaries without decoupling them worsens the architecture. High coupling inside a module is manageable; high coupling *crossing* module boundaries destroys modularity.
* **Why C, D & E are INCORRECT:** Moving files does not remove dependencies (C); it does not create cohesion (D); and version control does not fix bad coupling (E).

---

### Question 14: The Law of Demeter (Least Knowledge Principle) (ඩිමීටර්ගේ නියමය)
The **Law of Demeter (LoD)**, or the Principle of Least Knowledge, states that an object should only invoke methods on: (1) itself, (2) its parameters, (3) objects it instantiates, or (4) its direct components.  
How does the Law of Demeter improve software architecture?  
*[Select TWO correct answers]*

- [ ] **A.** It prevents **"Train Wreck" coupling calls** (e.g., `order.getCustomer().getAddress().getCity().getZipCode()`), significantly reducing structural coupling.
- [ ] **B.** It ensures that a change to an internal intermediate class does not trigger ripple effects throughout remote parts of the codebase.
- [ ] **C.** It mandates that all software must be written in the Demeter programming language.
- [ ] **D.** It forbids software from having any object-oriented classes.
- [ ] **E.** It forces all method calls to execute across public internet REST endpoints.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** The Law of Demeter prevents cascading dot-navigation ("train wrecks"), reducing knowledge of external object structures and lowering coupling.
* **Why C, D & E are INCORRECT:** Demeter is not a programming language; it promotes clean OOP; and it does not force REST communication.

---

## 🔴 Part 3: Scenario-Based Questions (ප්‍රායෝගික අවස්ථා පාදක ප්‍රශ්න)

---

### Scenario 1: Refactoring a "God Object" Utility Class
An enterprise codebase contains a single 12,000-line class named `AppUtils.java`. It contains 140 static methods, including:
* `calculateEmployeeTax()`
* `compressJpegImage()`
* `validateCreditCardChecksum()`
* `formatGermanCurrency()`
* `parseFtpServerLogs()`

Every single team in the company imports `AppUtils.java`. When Team A modifies a date helper method in `AppUtils`, Team B's tax calculations fail to compile.

#### Question 15: Architectural Diagnosis and Remediation
What type of cohesion does `AppUtils` exhibit, and how should it be refactored?  
*[Select TWO correct answers]*

- [ ] **A.** `AppUtils` exhibits severe **Coincidental Cohesion (අහඹු සංගතිභාවය)**; it is a "God Object" anti-pattern that bundles unrelated responsibilities together.
- [ ] **B.** It should be decomposed into separate, highly cohesive, single-responsibility domain classes (e.g., `TaxCalculator`, `ImageProcessor`, `CardValidator`, `CurrencyFormatter`).
- [ ] **C.** `AppUtils` exhibits textbook Functional Cohesion and should be expanded to 50,000 lines.
- [ ] **D.** The developers should rename the file to `SuperUtils.java` to fix the compilation bugs.
- [ ] **E.** The class cannot be refactored because Java prohibits having more than one utility class.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** A giant class with unrelated functions exhibits Coincidental Cohesion. Decomposing it into focused, single-responsibility modules restores high cohesion and reduces coupling.
* **Why C, D & E are INCORRECT:** It is coincidental (not functional); renaming files changes nothing; and Java allows multiple classes.

---

### Scenario 2: Analyzing a Package in the "Zone of Pain"
In an online banking application, package `com.bank.database.raw` contains 40 raw, concrete SQL access classes:
* **Abstractness ($A = 0.0$):** Zero interfaces or abstract classes; everything is hardcoded concrete implementations.
* **Afferent Coupling ($C_a = 60$):** 60 other packages across the bank depend directly on these concrete database classes.
* **Efferent Coupling ($C_e = 0$):** The package depends on nothing except the basic JDK.
* **Instability ($I = \frac{0}{60+0} = 0.0$):** Maximally stable.
* **Distance from Main Sequence:** $D = |0.0 + 0.0 - 1| = \mathbf{1.0}$.

#### Question 16: Evaluation of the Package's Health
Where does this package reside on the Robert C. Martin metrics graph, and what are the architectural consequences?  
*[Select TWO correct answers]*

- [ ] **A.** The package sits directly in the **Zone of Pain (වේදනා කලාපය)** ($A=0, I=0, D=1.0$).
- [ ] **B.** Because the package is completely concrete ($A=0$) yet heavily depended upon ($C_a=60$), making any modifications to database queries is terrifyingly difficult, rigid, and causes massive ripple breaks across the bank.
- [ ] **C.** The package sits in the Zone of Uselessness and should be deleted immediately.
- [ ] **D.** The package is in the ideal Main Sequence and represents world-class architecture.
- [ ] **E.** The package will automatically convert into a microservice when compiled.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** $A=0, I=0$ puts the package squarely in the Zone of Pain ($D=1.0$). Being completely concrete and widely used makes it rigid and painful to change.
* **Why C, D & E are INCORRECT:** The Zone of Uselessness is $A=1, I=1$; it is far from the Main Sequence ($D=1.0$ vs $D=0$); and compilation does not create microservices.

---

### Scenario 3: Eliminating the "Zone of Pain" via Interfaces
To rescue the package from Scenario 2, the lead architect introduces an abstraction layer:
1. Every concrete database class is extracted behind a public interface (e.g., `IAccountRepository`).
2. Dependent packages now import and depend strictly on the interface abstractions.
3. The package now contains 40 interfaces and 40 implementations, so $A = \frac{40}{80} = 0.50$.
4. Instability remains $I = 0.50$.

#### Question 17: Architectural Metric Impact
What happened to the package's Distance from the Main Sequence ($D$)?  
*[Select TWO correct answers]*

- [ ] **A.** The new distance is $D = |0.50 + 0.50 - 1| = \mathbf{0.0}$.
- [ ] **B.** The package has moved directly onto the **Main Sequence**, achieving an optimal balance between Abstractness and Instability.
- [ ] **C.** The distance increased to $D = 5.0$, making the package worse than before.
- [ ] **D.** The package was forced into the Zone of Uselessness.
- [ ] **E.** The database will now reject all incoming SQL connections.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** With $A=0.5$ and $I=0.5$, $A + I = 1.0$, resulting in $D = |1.0 - 1.0| = 0.0$. The package has moved out of the Zone of Pain directly onto the ideal Main Sequence!
* **Why C, D & E are INCORRECT:** $D$ cannot exceed 1.0; it is not in the Zone of Uselessness ($A=1, I=1$); and SQL connections are unaffected.

---

### Scenario 4: Refactoring for High Cohesion in an E-Commerce Order Flow
In an e-commerce order processing module, a single method `processOrder()` executes the following steps sequentially:
1. Validates credit card payment via Stripe.
2. Formats and prints warehouse shipping packaging labels.
3. Sends promotional discount marketing emails to the customer.
4. Updates physical warehouse forklift battery telemetry data.

#### Question 18: Identifying Architectural Flaws
What architectural issues are present in this method, and how should it be redesigned?  
*[Select TWO correct answers]*

- [ ] **A.** The method suffers from low cohesion by bundling disparate business responsibilities (payment, shipping, marketing, forklift hardware) into a single execution flow.
- [ ] **B.** Forklift battery telemetry and promotional marketing should be decoupled from the transactional checkout path, using asynchronous domain events (e.g., `OrderPlacedEvent`).
- [ ] **C.** The method exhibits perfect functional cohesion and should not be modified.
- [ ] **D.** Forklifts must always be recharged before a credit card can be charged.
- [ ] **E.** The method should be rewritten in HTML to run faster.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Mixing payments, physical warehouse machinery, and marketing emails violates single responsibility. Decoupling non-critical tasks via asynchronous domain events restores high cohesion and resilience.
* **Why C, D & E are INCORRECT:** It is not functionally cohesive; forklifts have no business in checkout logic; and HTML is not a general-purpose programming language.

---

### Scenario 5: Circular Dependency Cycle Between Packages
Package `Billing` imports classes from Package `Shipping`.  
Package `Shipping` imports classes from Package `Inventory`.  
A junior developer adds an import statement in Package `Inventory` to call a method in Package `Billing`.

#### Question 19: Evaluating the Architectural Impact of Circular Dependencies
What architectural hazard was created by the junior developer's import statement?  
*[Select TWO correct answers]*

- [ ] **A.** A **Circular Dependency Cycle (චක්‍රීය පරායත්තතා ගැටළුව - Billing $\rightarrow$ Shipping $\rightarrow$ Inventory $\rightarrow$ Billing)** was created, violating the Acyclic Dependencies Principle (ADP).
- [ ] **B.** The three packages become tightly coupled into a single de-facto monolithic blob; none of them can be independently compiled, tested, reused, or deployed.
- [ ] **C.** The cycle makes all three packages run 300% faster.
- [ ] **D.** Circular dependencies automatically resolve themselves when deployed to AWS Cloud.
- [ ] **E.** Circular dependencies are considered best practice in modern microservices design.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Circular dependencies create a mutually dependent lock-in where changing any one package can trigger cascading re-compilation and bugs across all of them, violating the Acyclic Dependencies Principle (ADP).
* **Why C, D & E are INCORRECT:** Cycles do not speed up code; clouds do not fix bad code topology; and cycles are an anti-pattern.

---

### Scenario 6: Broken Modularity via Shared Static Variables
Two modules, `UserManagement` and `OrderProcessing`, share an unencapsulated global static variable `public static boolean isSystemLocked = false;`. When `UserManagement` performs a password reset, it sets `isSystemLocked = true`, which unexpectedly causes `OrderProcessing` to reject incoming customer credit card transactions.

#### Question 20: Characterizing the Architectural Defect
Which architectural concepts explain why this design is flawed?  
*[Select TWO correct answers]*

- [ ] **A.** It introduces hidden, undocumented **Dynamic Coupling via Shared State**, violating component boundaries.
- [ ] **B.** High coupling via mutable global state creates unpredictable side effects and breaks functional independence.
- [ ] **C.** Global static variables are the safest and most decoupled communication mechanism in enterprise architecture.
- [ ] **D.** The design is completely sound because both modules execute on the same CPU core.
- [ ] **E.** The bug occurred because the developers did not use a mechanical keyboard.

**ANSWER:** A, B

**Explanation (විග්‍රහය):**
* **Why A & B are CORRECT:** Mutable shared global state creates invisible coupling and action-at-a-distance bugs, shattering modular boundaries.
* **Why C, D & E are INCORRECT:** Global mutable state is notoriously dangerous (not safe); same CPU execution does not excuse bad architecture; and keyboards are irrelevant.
