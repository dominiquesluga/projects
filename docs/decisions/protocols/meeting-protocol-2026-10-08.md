### 1. Meeting Protocol

**Date:** October 8, 2026

**Attendees:** Prof. Nietzsche (acting as Supervisor/Client)

**1. Technology & Architecture**

* **Frontend:** Angular is preferred but Vue.js is also being considered. The team will review component libraries (e.g., PrimeNG for Angular / PrimeVue for Vue.js) to ensure a uniform layout with ready-to-use tables, buttons, and calendar components. Decision next time.
* **Backend:** Java Spring Boot.
* **Database:** PostgreSQL (switching away from SQLite).
* **Containerization:** Docker containers will be used.
* **Authentication:** Single Sign-On (SSO) implemented via Keycloak.
* **Documentation & Management:** Centralized via GitHub using Markdown, LaTeX, and GitHub Issues for tracking tasks. Agile model using Scrum with short stand-up meetings to align on the current status.

**2. Functional System Requirements & Client Expectations**

* **Core Goal & Vacation Rules:**
* 30 vacation days per year per person. Vacation days can be rolled over to the next year (kept simple as of today).
* Entering, editing, and managing vacation days in the application.
* The system does not strictly block taking more than 30 days (allows entering e.g., 32 days), but it triggers a clear visual warning / red flag for admins/secretariat.


* **Absence Calendar:** Tracks reasons such as vacation or conference attendance (illness is generally excluded).
* **Synchronization:** Superb if entries in the system automatically sync to Outlook (App to Outlook), while reverse synchronization is not strictly required.
* **Time Tracking:** Time investment can be tracked using Clockify (punch-clock style for in/out times) or via GitHub issues.
* **Roles & Permissions:**
* **Professor (Self-Service):** Can manage own vacation, view total quota (available, planned, taken, remaining). Read-only calendar access to see who is present, but without viewing others' exact vacation stats.
* **Secretariat (Admin):** Centralized rights to enter and manipulate vacations for others. Has a comprehensive overview of all vacations, sorted by amounts, with clear visibility of anyone exceeding quotas.
* **Dean (True Admin):** Similar elevated permissions, acting as a central approval authority.


* **Approval Workflow:** Flexible workflow where approval is not rigidly binding. The system handles requests post-hoc or manages the required approvals without overly strict bottlenecks.

**3. Project Management, Scope & Client Communication**

* **Requirements & Scope Management:** Instead of traditional heavy specifications (*Lastenheft/Pflichtenheft*, which are outdated in agile workflows), all client wishes and spontaneus new features are collected. The team, together with the supervisor/client, handles prioritization since the client might ask for many features that exceed capacity.
* **Communication Rules:**
* Protocols and summaries should be sent directly to both the client and supervisor during client meetings, whereas supervisor-only meetings go to the supervisor.
* The client stays out of internal technical details (tech stack is secondary as long as the UI matches expectations and works seamlessly).