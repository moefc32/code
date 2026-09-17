# Article Drafting Guideline

## Purpose

Use this guideline to prepare a Code subsite article from project experience. The preliminary questions are intended to capture enough of the real story for a coherent working draft without inventing important facts.

Code subsite theme: **Architecture Recipes**

The article should explain a technical solution through the reasoning that produced it. The artifact, architecture, implementation choices, constraints, trade-offs, and lessons should remain understandable to technically interested readers without turning the article into raw documentation.

---

## Part 1: Preliminary Questions

Answer these questions, try to capture the technical story and reasoning without trying to structure the answers as an article :

1. **What were you trying to build, and what made the existing approach insufficient?**  
   Describe the project, its context, the problem you encountered, and any constraints that shaped the technical problem.

2. **How did you decide what the system should look like?**  
   Describe the architecture you arrived at, the important technologies or components involved, and the reasoning or trade-offs behind the structure.

3. **What did building it reveal?**  
   Describe implementation discoveries, unexpected problems, compromises, or changes that affected your original technical thinking.

4. **What makes this architecture worth documenting?**  
   Explain what the approach enabled, where it works well, where its boundaries are, and what you would carry forward or change if you built it again.

---

## Part 2: Editorial Drafting

Use the completed preliminary answers as the foundational source to assemble the working draft following this editorial instruction :

```md
Draft a working article for the **Code** subsite, whose theme is **Architecture Recipes**.

The source material below contains my actual project story and reasoning. Treat it as factual source material. Do not invent technologies, requirements, implementation details, outcomes, motivations, or lessons that are not supported by it. If something is unclear, preserve the uncertainty rather than filling the gap with assumptions.

The article should explain the architecture as a recipe for solving a particular problem. Do not turn it into generic software-engineering advice or documentation. The reader should understand what problem led to the architecture, what I considered, why I made the important decisions, how the solution works, and what trade-offs or boundaries I discovered.

Preserve the internal reasoning in the narrative. Do not merely say that I chose an approach. Show enough of the situation and decision-making that the reader can understand why that approach became reasonable.

Build a clear article structure with useful section headings. Avoid a chronology dump. Chronology should support the reasoning rather than become the organizing principle when a stronger conceptual structure is available.

Keep technical terminology where it improves precision, but explain specialized concepts naturally for readers who may not already know the specific technology.

Do not manufacture a dramatic problem or success story. If the project was exploratory, incomplete, constrained, or only partially successful, preserve that character.

The closing should reflect on the architectural lesson and its boundaries rather than making the solution sound universally applicable.

Writing constraints :

- Use first person where appropriate.
- Preserve my personal reasoning and voice rather than replacing it with generic technical prose.
- Every paragraph must contain multiple sentences and develop a complete thought. Never use a single-sentence paragraph.
- Avoid unnecessary rhetorical questions.
- Do not use em dashes.
- Do not use inline colons or semicolons.
- Avoid repetitive sentence structures.
- Avoid exaggerated claims such as "revolutionary", "game-changing", or "the perfect solution".
- Target approximately 650–1000 words unless the source material clearly requires a different length.
- Do not add a "Conclusion" section unless explicitly requested.

After drafting, check the article for factual fidelity, repeated ideas, weak transitions, unnecessary technical detail, and places where the reasoning has been flattened into generic statements.

Source material :

[PASTE COMPLETED PRELIMINARY QUESTIONS HERE]
```
