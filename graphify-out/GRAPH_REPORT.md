# Graph Report - .  (2026-06-29)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 149 nodes · 207 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `42782a7e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `profile` - 6 edges
3. `scripts` - 5 edges
4. `projects` - 3 edges
5. `services` - 3 edges
6. `getMockReply()` - 3 edges
7. `uid()` - 2 edges
8. `ChatTerminal()` - 2 edges
9. `ContactCTA()` - 2 edges
10. `Footer()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (21): MemorySection(), PipelineSection(), StackSection(), WhySection(), afterItems, beforeItems, caseStudies, CaseStudy (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (13): ContactCTA(), Footer(), HeroSection(), TITLE_WORDS, LinksSection(), Loader(), Manifesto(), Nav() (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): ChatTurn, ProjectsSection(), ServicesSection(), projects, services, skillGroups, projectList, serviceList (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (20): dependencies, next, react, react-dom, devDependencies, autoprefixer, postcss, tailwindcss (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Community 5"
Cohesion: 0.19
Nodes (11): ChatTerminal(), uid(), coreMessages, statusMessages, suggestedQuestions, ChatTurn, streamBotReply(), getMockReply() (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (3): inter, metadata, viewport

## Knowledge Gaps
- **55 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `profile` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0748663101604278 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12648221343873517 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._