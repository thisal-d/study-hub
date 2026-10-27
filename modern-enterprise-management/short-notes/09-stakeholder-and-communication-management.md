# ⚡ Lecture 09: Stakeholder & Communication Management — Short Note

> **🎯 In 15 Seconds:** Stakeholder Management identifies and engages people affected by the project, while Communication Management ensures the right information reaches the right people at the right time using appropriate channels.

---

### 📊 1. The Power-Interest Grid

| Quadrant | Strategy | Action Required | Typical IT Example |
| :--- | :--- | :--- | :--- |
| **High Power, High Interest** | **Manage Closely (ළඟින්ම කළමනාකරණය)** | Daily/weekly updates, active collaboration. | Project Sponsor, VP of Engineering, Key Client. |
| **High Power, Low Interest** | **Keep Satisfied (සෑහීමකට පත්කර තැබීම)** | Executive summary dashboards; avoid micromanagement. | Chief Financial Officer (CFO), Regulatory Auditors. |
| **Low Power, High Interest** | **Keep Informed (තොරතුරු දැනුවත් කර තැබීම)** | Regular newsletters, sprint demos, FAQs. | End users (students, nurses), Junior Developers. |
| **Low Power, Low Interest** | **Monitor (නිරීක්ෂණය කිරීම)** | Periodic status reports; minimal effort. | Community neighbors, non-participating suppliers. |

---

### 📊 2. The Salience Model & 5 Engagement Levels

- **Salience Model (3 Dimensions):**
  1. **Power (බලය):** Ability to influence project outcomes.
  2. **Legitimacy (නීත්‍යානුකූල බව):** Appropriate or legal standing to be involved.
  3. **Urgency (හදිසි බව):** Degree to which claims call for immediate attention.
  *(A stakeholder with all 3 attributes is a **Definitive Stakeholder** requiring highest priority).*

- **5 Stakeholder Engagement Levels:**
  $$\text{Unaware} \longrightarrow \text{Resistant} \longrightarrow \text{Neutral} \longrightarrow \text{Supportive} \longrightarrow \text{Leading}$$

---

### 📊 3. The 5 Cs of Written Communication

| The 5 Cs | What It Means | Software Engineering Context |
| :--- | :--- | :--- |
| **1. Correct** | Accurate grammar, correct technical facts. | Specifying correct database versions and endpoints. |
| **2. Clear** | Simple, unambiguous words; beginner-friendly. | Avoiding confusing acronyms in client documentation. |
| **3. Concise** | Brief, eliminating unnecessary filler words. | Writing direct, action-oriented bullet points in release notes. |
| **4. Courteous** | Professional, polite, respectful tone. | Constructive code-review feedback without personal insults. |
| **5. Coherent** | Logical progression of ideas and structured flow. | Structuring sprint reports: Summary $\to$ Metrics $\to$ Risks. |

---

### 📊 4. Communication Channels Formula

$$\textbf{Number of Channels} = \frac{N(N - 1)}{2} \quad (N = \text{number of team members})$$
- *If team grows from 4 to 8:* Channels jump from $\frac{4 \times 3}{2} = 6$ to $\frac{8 \times 7}{2} = 28$! (Why large squads experience communication overhead).

---

### 📚 5. Jargon Buster

| Difficult Term | Plain English Meaning | Sinhala Term |
| :--- | :--- | :--- |
| **Stakeholder Register** | A document containing identification, assessment, and classification of all stakeholders. | පාර්ශ්වකරුවන්ගේ ලේඛනය |
| **Noise** | Any environmental, psychological, or technical barrier that distorts the message. | සන්නිවේදන බාධාව |
| **Feedback Loop** | The receiver's response confirming whether the message was decoded correctly. | ප්‍රතිපෝෂණ ලූපය |

---

### ⚠️ Common Exam Traps

> [!CAUTION]
> 1. **Do not send all information to everyone:** High Power, Low Interest stakeholders (e.g., CFO) do *not* want 50-page technical Jira logs; they want a 1-page financial milestone summary.
> 2. **Stakeholder Engagement is dynamic:** A stakeholder's position is never static; a resistant stakeholder can become supportive if engaged early.

---

### 🎯 Active Recall Self-Test

<details>
<summary><b>1. If a software project team has 6 members, how many formal communication channels exist?</b></summary>

$$\frac{6 \times (6 - 1)}{2} = \frac{30}{2} = \mathbf{15\ \text{communication channels}}.$$
</details>

<details>
<summary><b>2. How should you treat a stakeholder with High Power but Low Interest?</b></summary>

**Keep Satisfied.** Provide high-level milestone summaries to ensure they remain content without overwhelming them with operational details.
</details>
