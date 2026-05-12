# LECTURE 6 — Protection and Security of the Operating System

---

## 1. Protection vs. Security

| Concept | Definition | Scope |
|---------|-----------|-------|
| **Protection** | Guarding data/programs against interference by **other authorized users** | Internal (insiders) |
| **Security** | Guarding data/programs against interference by **external unauthorized entities** | External (outsiders) |

---

## 2. CIA Security Triad (★ EXAM ★)

| Principle | Meaning | Example |
|-----------|---------|---------|
| **Confidentiality** | Info only accessible to authorized parties | Password seen by shoulder-surfer = breach |
| **Integrity** | Data/systems not modified without authorization | Only admins modify system files |
| **Availability** | Resources accessible when needed | CPU shared fairly; no DoS |

---

## 3. Authentication Methods (3 Mechanisms)

1. **Password** — something you know
2. **Physical token/artifact** — something you have (smart card, key fob)
3. **Biometric measure** — something you are (fingerprint, retina scan)

---

## 4. Two Facets of Protection

| Facet | Meaning |
|-------|---------|
| **Secrecy** | Only authorized users can access information (OS handles this) |
| **Privacy** | Info used only for intended purpose (left to users/processes) |

---

## 5. Security Models

| Type | Description |
|------|-------------|
| **Discretionary** | Holders of rights can transfer them at their discretion |
| **Mandatory** | Only designated roles can grant rights |

**Security Policy** = high-level rules (what is allowed)  
**Security Model** = mechanisms implementing the policy (how to enforce it)

---

## 6. Access Matrix

- Rows = Subjects (users/processes), Columns = Objects (files, devices)
- Cell = Allowed operations (r, w, x)

| Subjects \ Objects | File 1 | File 2 | File 3 |
|-------------------|--------|--------|--------|
| User 1 | r,w | r | r,w,x |
| User 2 | r | r | r,w,x |
| User 3 | r,w,x | r,w | r,w,x |

**Three components:** Objects (passive: files, terminals), Subjects (active: processes), Rules (governing access)

---

## 7. Program Threats

| Threat | Description | Example |
|--------|-------------|---------|
| **Trojan Horse** | Malicious program disguised as legitimate | Fake calculator steals passwords |
| **Trapdoor (Backdoor)** | Hidden entry point bypassing authentication | Developer leaves secret login |
| **Logic Bomb** | Activates when specific condition is met | Code deletes files on a date |
| **Virus** | Attaches to legitimate program; replicates when run | Corrupts files, slows system |
| **Worm** | Self-replicating; spreads without host program via network | No host program needed (differs from virus) |

**Direct threats:** Targeted attacks  
**Indirect threats:** General random attacks (viruses, worms, Trojans)

**Defenses against program threats:**
- Code signing, Antivirus software, Sandboxing, Least privilege execution

---

## 8. System & Network Threats

| Threat | Description | Example |
|--------|-------------|---------|
| **DoS** | Makes system resources unavailable by overloading | Flooding server with requests |
| **DDoS** | DoS from multiple machines (botnet) | Coordinated attack from thousands of bots |
| **Spoofing** | Attacker pretends to be legitimate | IP spoofing, Email spoofing |
| **Port Scanning** | Scanning open ports to find vulnerabilities | Recon before attack |
| **MITM (Man-in-the-Middle)** | Intercepts communication between two parties | Steal passwords on public Wi-Fi |
| **Ransomware** | Encrypts files; demands payment | Locks all data |
| **Spyware** | Silently collects user information | Tracks browsing, keystrokes |

**OS/Network Defenses:** Firewalls, IDS (Intrusion Detection Systems), Secure protocols (HTTPS, SSH), Regular patching

---

## 9. Unix File Permissions

| Class | Octal | Binary | Access |
|-------|-------|--------|--------|
| Owner | 7 | 111 | r,w,x |
| Group | 6 | 110 | r,w |
| Public | 1 | 001 | x only |

`chmod 761 filename` → Owner: rwx, Group: rw, Public: x  
`chgrp G filename` → Attach group G to file

---

## Lecture 6 — Exam Checklist

- [ ] Distinguish Protection (insiders) vs. Security (outsiders)
- [ ] Name CIA triad: Confidentiality, Integrity, Availability
- [ ] List 3 authentication mechanisms
- [ ] Explain Access Matrix (subjects, objects, permissions)
- [ ] Identify 5 program threats (Trojan, Trapdoor, Logic Bomb, Virus, Worm)
- [ ] Distinguish Virus (needs host) vs. Worm (no host)
- [ ] List system/network threats: DoS, DDoS, Spoofing, MITM
- [ ] Name OS/network defenses