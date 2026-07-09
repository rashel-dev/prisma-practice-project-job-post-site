# AGENTS.md

## Project Rules

This repository is AI-assisted. All AI coding agents must follow these rules.

---

# General Principles

* Always use the latest versions of libraries unless the project explicitly pins another version.
* Before writing code, check the latest official documentation and current conventions.
* Never use deprecated APIs.
* Prefer modern syntax over legacy patterns.
* Follow official best practices instead of outdated tutorials.
* Keep the codebase consistent with existing architecture.
* Avoid unnecessary abstractions.
* Write clean, maintainable, and production-ready code.

---

# Package Management

* Use **pnpm** only.
* Never use npm or yarn commands unless explicitly requested.
* Use the latest pnpm conventions.

Examples:

* `pnpm install`
* `pnpm add`
* `pnpm remove`
* `pnpm update`
* `pnpm dlx`
* `pnpm exec`

---

# Documentation

Before implementing any feature:

1. Read the latest official documentation.
2. Follow current recommended patterns.
3. Ignore outdated blog posts unless specifically requested.

Documentation always has higher priority than previous AI knowledge.

---

# TypeScript

* Enable strict typing.
* Never use `any` unless absolutely necessary.
* Prefer inferred types when clear.
* Use modern TypeScript features.
* Keep types reusable.

---

# React

Always use the newest React conventions.

Prefer:

* Functional components
* Hooks
* Server Components where supported
* Modern Context patterns
* Proper Suspense usage
* Latest React recommendations

Avoid:

* Legacy lifecycle patterns
* Deprecated APIs
* Old class components

---

# Tailwind CSS

Always use the latest Tailwind CSS version.

* Follow official documentation.
* Prefer utility-first styling.
* Avoid unnecessary custom CSS.
* Use design tokens where appropriate.

---

# Node.js

* Target the latest LTS version.
* Use modern ECMAScript features.
* Prefer async/await.
* Handle errors properly.
* Never block the event loop.

---

# Prisma

Always follow the latest Prisma documentation.

* Use modern schema syntax.
* Generate types correctly.
* Keep migrations clean.
* Never write unsafe queries.
* Prefer transactions when appropriate.

---

# Database

* Normalize data where practical.
* Add indexes when needed.
* Use foreign keys correctly.
* Avoid duplicated data.

---

# API Design

* Follow REST conventions unless the project specifies otherwise.
* Validate all inputs.
* Return proper HTTP status codes.
* Keep responses consistent.
* Never expose sensitive information.

---

# Security

Always prioritize security.

* Validate all user input.
* Sanitize output when necessary.
* Never hardcode secrets.
* Use environment variables.
* Follow authentication best practices.
* Follow authorization best practices.

---

# Code Quality

Every implementation should be:

* Readable
* Modular
* Maintainable
* Well named
* Consistent
* Production ready

Avoid:

* Duplicate code
* Large functions
* Magic numbers
* Unused variables
* Dead code

---

# Performance

Prefer:

* Efficient algorithms
* Lazy loading
* Code splitting where appropriate
* Memoization only when beneficial
* Minimal bundle size

Avoid premature optimization.

---

# Comments

Write comments only when they add value.

Do not explain obvious code.

Prefer self-explanatory code.

---

# Testing

When adding functionality:

* Update existing tests if needed.
* Add tests for new behavior.
* Keep tests deterministic.

---

# Git

Generate meaningful commit messages.

Follow Conventional Commits.

Examples:

* feat:
* fix:
* docs:
* refactor:
* perf:
* test:
* chore:

---

# Dependency Management

Before adding a dependency:

* Prefer built-in APIs when sufficient.
* Choose actively maintained packages.
* Avoid abandoned libraries.
* Minimize dependency count.

---

# Code Generation

Generated code must:

* Compile successfully.
* Pass linting.
* Be formatted.
* Follow project architecture.
* Match existing naming conventions.

Never generate placeholder implementations if a complete implementation is feasible.

---

# When Unsure

If multiple approaches exist:

1. Prefer the official documentation.
2. Prefer the newest stable convention.
3. Prefer simpler code.
4. Explain important architectural decisions.
5. Avoid assumptions without verification.

---

# Rule Priority

1. Official documentation
2. Project architecture
3. This AGENTS.md
4. General industry best practices

These rules apply to every response, every file, and every generated implementation unless the user explicitly instructs otherwise.
