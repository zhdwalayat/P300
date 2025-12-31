@# Requirements Elicitation Framework

Comprehensive framework for systematically gathering complete, unambiguous requirements for Claude Code skill generation.

## Table of Contents

1. [Requirements Categories](#requirements-categories)
2. [Elicitation Techniques](#elicitation-techniques)
3. [Question Framework](#question-framework)
4. [Gap Analysis](#gap-analysis)
5. [Validation Methods](#validation-methods)
6. [Documentation Standards](#documentation-standards)

---

## Requirements Categories

### Category 1: Core Requirements

Essential information that must be gathered before skill generation can proceed.

#### 1.1 Identity Requirements

**Skill Name**
- **Definition**: Unique identifier for the skill
- **Format**: lowercase, hyphens only, 1-64 characters
- **Pattern**: `^[a-z0-9-]{1,64}$`
- **Examples**: `user-auth`, `log-analyzer`, `pdf-processor`
- **Validation**: Must be unique, no conflicts with existing skills

**Elicitation Questions:**
- What should this skill be called?
- Is there an existing naming convention to follow?
- Does this name clearly indicate the skill's purpose?

#### 1.2 Functional Requirements

**Purpose Statement**
- **Definition**: Clear statement of what the skill accomplishes
- **Format**: Action verb + object + outcome
- **Template**: "This skill [action] [object] to [outcome]"
- **Example**: "This skill analyzes log files to identify error patterns"

**Elicitation Questions:**
- What problem does this skill solve?
- What is the primary objective?
- What should the skill accomplish?
- What is the expected outcome?

**Use Cases**
- **Definition**: Specific scenarios where the skill applies
- **Format**: List of concrete situations
- **Template**: "When [situation], use this skill to [action]"
- **Example**: "When debugging production issues, use this skill to analyze server logs"

**Elicitation Questions:**
- When would someone use this skill?
- What scenarios does this address?
- Who is the target user?
- What tasks does this enable?

**Scope Boundaries**
- **Definition**: What is included and excluded from the skill
- **Format**: In-scope / Out-of-scope lists
- **Purpose**: Prevent scope creep and clarify limitations

**Elicitation Questions:**
- What is included in this skill?
- What is explicitly excluded?
- What are the boundaries of functionality?
- What related tasks are not covered?

#### 1.3 Trigger Requirements

**Trigger Conditions**
- **Definition**: Specific conditions that cause Claude to invoke the skill
- **Format**: List of keywords, phrases, or scenarios
- **Purpose**: Enable skill discovery and automatic activation

**Elicitation Questions:**
- What keywords should trigger this skill?
- What questions would users ask?
- How would users describe this task?
- What phrases indicate this skill is needed?

**Trigger Examples:**
```markdown
Skill: log-analyzer

Trigger keywords:
- "analyze logs"
- "parse log files"
- "find errors in logs"
- "troubleshoot from logs"

Trigger scenarios:
- User mentions log files (access.log, error.log, etc.)
- User asks about debugging or troubleshooting
- User needs to extract information from logs
```

#### 1.4 Domain and Context Requirements

**CRITICAL: Always elicit domain and context information**

**Domain/Field**
- **Definition**: Subject area or field where the skill will be used
- **Examples**: Programming, Mathematics, Science, Humanities, Business, Medicine, Education
- **Impact**: Determines terminology, conventions, examples, and best practices
- **Validation**: Must be specific enough to guide content generation

**Elicitation Questions:**
- What domain or field is this skill for?
- What subject area does this address?
- Are there domain-specific conventions to follow?
- What terminology is standard in this field?

**User/Audience Level**
- **Definition**: Knowledge and expertise level of intended users
- **Levels**:
  - Beginner (no prior knowledge)
  - Intermediate (basic understanding)
  - Advanced (deep expertise)
  - Specific: High School, Undergraduate, Graduate, Professional
- **Impact**: Affects language complexity, explanation depth, assumption of prior knowledge

**Elicitation Questions:**
- Who will use this skill?
- What is their knowledge level?
- What can we assume they already know?
- Should explanations be simplified or technical?

**Prior Knowledge Assumptions**
- **Definition**: What users are expected to know before using the skill
- **Format**: List of prerequisite concepts or skills
- **Purpose**: Set appropriate starting point for content

**Elicitation Questions:**
- What should users know before using this skill?
- Are there prerequisites?
- What concepts should be familiar?
- What background is assumed?

**Learning Objectives** (for educational skills)
- **Definition**: What users should be able to do after using the skill
- **Format**: Action-oriented statements (e.g., "Users will be able to...")
- **Purpose**: Guide content generation and success criteria

**Elicitation Questions:**
- What should users learn from this?
- What should they be able to do afterward?
- What outcomes are expected?
- How will we measure success?

**Context-Specific Requirements**
- **Definition**: Special considerations based on use context
- **Examples**:
  - Educational: Follows specific pedagogy (Bloom's Taxonomy, etc.)
  - Professional: Industry standards, compliance requirements
  - Research: Citation requirements, methodology
  - Creative: Style guidelines, format conventions

**Elicitation Questions:**
- Are there specific methodologies to follow?
- Are there industry standards or regulations?
- Are there format or style requirements?
- Are there quality or compliance criteria?

**Domain-Specific Elicitation Examples:**

```markdown
Educational Skill Requirements:
- Education level: High School, Undergraduate, Graduate
- Subject: Mathematics, Science, Language Arts, etc.
- Pedagogy: Bloom's Taxonomy, Inquiry-based, etc.
- Assessment needs: Quizzes, practice problems, etc.

Programming Skill Requirements:
- Language/framework: Python, JavaScript, React, etc.
- Experience level: Beginner, Intermediate, Advanced
- Use case: Web development, Data science, Automation
- Coding standards: PEP 8, ESLint, etc.

Content Generation Skill Requirements:
- Content type: Notes, summaries, reports, documentation
- Audience: Students, professionals, general public
- Tone: Formal, casual, technical, educational
- Length: Brief, comprehensive, detailed
- Format: Markdown, HTML, PDF, etc.

Analysis Skill Requirements:
- Analysis type: Statistical, qualitative, comparative
- Data sources: Files, databases, APIs, user input
- Output format: Reports, visualizations, summaries
- Depth: Overview, detailed, exhaustive
```

### Category 2: Technical Requirements

#### 2.1 Input Requirements

**Input Types**
- **Definition**: What information or data the skill needs to operate
- **Examples**: Files, text, parameters, configuration

**Elicitation Questions:**
- What inputs does the skill require?
- What format should inputs be in?
- Are there default values for inputs?
- Are inputs optional or required?

**Input Validation**
- **Definition**: How inputs should be validated
- **Examples**: Type checking, format validation, range checking

**Elicitation Questions:**
- How should invalid inputs be handled?
- What constitutes valid input?
- Are there size or format limits?

#### 2.2 Output Requirements

**Output Types**
- **Definition**: What the skill produces or accomplishes
- **Examples**: Files, data, reports, modifications

**Elicitation Questions:**
- What should the skill output?
- What format should outputs be in?
- Where should outputs be saved?
- Should outputs be displayed or returned?

**Success Criteria**
- **Definition**: How to determine if the skill succeeded
- **Examples**: File created, data processed, validation passed

**Elicitation Questions:**
- How do we know the skill worked correctly?
- What indicates success?
- What indicates failure?

#### 2.3 Tool Requirements

**Tool Dependencies**
- **Definition**: Which Claude Code tools the skill requires
- **Options**: Read, Write, Edit, Bash, Grep, Glob, Task, WebFetch, etc.

**Elicitation Questions:**
- Will the skill need to read files? (Read, Grep, Glob)
- Will it need to create or modify files? (Write, Edit)
- Will it need to run commands? (Bash)
- Does it need web access? (WebFetch, WebSearch)
- Does it need to spawn agents? (Task)

**Tool Restrictions**
- **Definition**: Whether to restrict tools for security
- **Options**: Read-only, Safe operations, Full access

**Elicitation Questions:**
- Should this skill be read-only?
- Are file modifications necessary?
- Is command execution required?
- What is the security sensitivity?

**Tool Access Levels:**
```markdown
Level 1 - Read-Only (Most Restrictive):
  allowed-tools: Read, Grep, Glob
  Use for: Analysis, search, reporting skills

Level 2 - Safe File Operations:
  allowed-tools: Read, Write, Glob
  Use for: File generation, documentation

Level 3 - Automation (Moderate):
  allowed-tools: Read, Write, Edit, Bash, Grep, Glob
  Use for: Workflow automation, refactoring

Level 4 - Full Access (Least Restrictive):
  allowed-tools: [all tools - omit field]
  Use for: Complex automation
  Requires: Justification for full access
```

#### 2.4 External Dependencies

**Package Requirements**
- **Definition**: External packages or libraries required
- **Examples**: Python packages, npm modules, system utilities

**Elicitation Questions:**
- Does this skill require external packages?
- Which programming language packages?
- Which system utilities or commands?
- Are there version requirements?

**Service Requirements**
- **Definition**: External services or APIs required
- **Examples**: Database connections, API endpoints, cloud services

**Elicitation Questions:**
- Does this need external service access?
- Which APIs are required?
- Are credentials needed?
- Is internet connectivity required?

### Category 3: Quality Requirements

#### 3.1 Documentation Requirements

**Documentation Depth**
- **Simple**: Basic usage only
- **Standard**: Comprehensive with examples
- **Extensive**: Full reference documentation

**Elicitation Questions:**
- How detailed should documentation be?
- Who is the audience (beginner/advanced)?
- Are advanced features included?
- Should there be troubleshooting guides?

**Example Requirements**
- **Minimum**: 2 examples required
- **Target**: 3-5 examples recommended
- **Comprehensive**: 7+ examples for complex skills

**Elicitation Questions:**
- How many examples are needed?
- What use cases should be covered?
- Should examples progress in complexity?
- Are edge cases demonstrated?

#### 3.2 Error Handling Requirements

**Error Scenarios**
- **Definition**: Common errors and how to handle them
- **Examples**: File not found, invalid input, permission denied

**Elicitation Questions:**
- What can go wrong?
- How should errors be reported?
- Should errors be recoverable?
- What are common failure modes?

**Recovery Procedures**
- **Definition**: How to recover from errors
- **Examples**: Retry logic, fallback options, cleanup procedures

**Elicitation Questions:**
- How should the skill recover from errors?
- Are there fallback options?
- Should partial results be saved?
- How should cleanup be handled?

#### 3.3 Security Requirements

**Sensitive Data Handling**
- **Definition**: How to handle credentials, secrets, personal data
- **Requirements**: No hardcoded secrets, proper sanitization

**Elicitation Questions:**
- Does this skill handle sensitive data?
- Are credentials required?
- Should data be encrypted?
- Are there privacy concerns?

**Permission Requirements**
- **Definition**: File system or system permissions needed
- **Examples**: Read/write access, execute permissions

**Elicitation Questions:**
- What file system access is needed?
- Are elevated permissions required?
- Should access be restricted to specific directories?

#### 3.4 Performance Requirements

**Speed Requirements**
- **Definition**: Expected execution time or performance
- **Examples**: Real-time, batch processing, background tasks

**Elicitation Questions:**
- How fast should this execute?
- Are there large datasets to process?
- Should processing be optimized?
- Are there timeout considerations?

**Size Requirements**
- **Definition**: File size limits, data volume limits
- **Constraint**: SKILL.md should be < 50KB

**Elicitation Questions:**
- How large can input files be?
- Are there memory constraints?
- Should there be size limits?

### Category 4: Operational Requirements

#### 4.1 Skill Location

**Storage Location**
- **Personal**: `~/.claude/skills/` (not shared)
- **Project**: `.claude/skills/` (version controlled, team shared)

**Elicitation Questions:**
- Should this be shared with the team?
- Is this project-specific or general-purpose?
- Should it be version controlled?

#### 4.2 Versioning Requirements

**Version Tracking**
- **Definition**: Whether to track versions for team skills
- **Format**: Semantic versioning (v1.0.0)

**Elicitation Questions:**
- Should this skill have version tracking?
- Is this a team skill that will evolve?
- Should changes be documented?

#### 4.3 Maintenance Requirements

**Update Frequency**
- **Definition**: How often the skill needs updates
- **Examples**: Static, occasional updates, frequent changes

**Elicitation Questions:**
- Will this need regular updates?
- Who will maintain this skill?
- Are there external dependencies that change?

---

## Elicitation Techniques

### Technique 1: Structured Questioning

**Approach**: Use predefined question framework to systematically gather requirements

**When to Use**: Initial requirements gathering, complete coverage needed

**Process:**
1. Start with core requirements (identity, purpose, scope)
2. Move to technical requirements (inputs, outputs, tools)
3. Address quality requirements (documentation, errors, security)
4. Finish with operational requirements (location, versioning)

### Technique 2: Scenario-Based Elicitation

**Approach**: Ask user to describe specific scenarios where skill would be used

**When to Use**: Understanding use cases, identifying trigger conditions

**Process:**
1. "Describe a situation where you would use this skill"
2. "Walk me through the steps you would take"
3. "What would you expect to happen?"
4. "What information would you need to provide?"

**Example:**
```markdown
User: "I want a skill for managing database migrations"

Claude: "Let's explore a specific scenario. Imagine you have made changes
to your database schema and need to apply them to production. Can you walk
me through:
1. What files or information you would start with?
2. What steps you would take?
3. What you would expect the skill to do?
4. What the end result should be?"
```

### Technique 3: Example-Driven Elicitation

**Approach**: Ask user to provide or describe example inputs and outputs

**When to Use**: Clarifying data formats, understanding transformations

**Process:**
1. "Can you show me an example input?"
2. "What should the output look like?"
3. "Are there variations or edge cases?"

### Technique 4: Constraint-Based Elicitation

**Approach**: Identify limitations, boundaries, and restrictions

**When to Use**: Defining scope, identifying security concerns

**Process:**
1. "What should this skill NOT do?"
2. "What are the limitations?"
3. "Are there security concerns?"
4. "Are there performance constraints?"

### Technique 5: Comparative Elicitation

**Approach**: Compare to existing skills or known tools

**When to Use**: Clarifying functionality, understanding differences

**Process:**
1. "Is this similar to any existing skill?"
2. "How is this different from [related skill]?"
3. "What does this do that [other tool] doesn't?"

---

## Question Framework

### Standard Question Templates

#### Identity Questions

```markdown
Question: "What should the skill be named?"
Header: "Skill Name"
Options:
  - [Suggested name based on functionality] (Recommended)
  - User provides custom name
Context: "Names must be lowercase, use hyphens, max 64 characters"
```

#### Scope Questions

```markdown
Question: "What level of complexity should this skill support?"
Header: "Complexity"
Options:
  - Basic: Simple, focused functionality (Recommended for most cases)
  - Standard: Moderate complexity with multiple features
  - Advanced: Comprehensive with extensive options
Context: "Simpler skills are easier to maintain and more reliable"
```

#### Tool Access Questions

```markdown
Question: "What level of tool access should this skill have?"
Header: "Tool Access"
Options:
  - Read-only: Grep, Glob, Read only (Recommended for analysis)
  - Safe operations: Read, Write, Glob
  - Full access: All tools including Bash
Context: "Restricting tools improves security"
```

#### Location Questions

```markdown
Question: "Where should this skill be stored?"
Header: "Location"
Options:
  - Project (.claude/skills/): Share with team via git (Recommended for teams)
  - Personal (~/.claude/skills/): Private, not shared
Context: "Project skills are version controlled and shared"
```

#### Structure Questions

```markdown
Question: "What documentation structure does this skill need?"
Header: "Structure"
Options:
  - Simple: Single SKILL.md file (Recommended for straightforward skills)
  - Standard: SKILL.md + reference.md + examples.md
  - Complex: Full structure with scripts and templates
Context: "Use progressive disclosure for complex skills"
```

#### Dependency Questions

```markdown
Question: "Does this skill require external dependencies?"
Header: "Dependencies"
Options:
  - No dependencies: Uses only Claude Code built-in tools (Recommended)
  - Python packages: Requires pip install
  - System commands: Requires specific CLI tools
  - APIs or services: Requires external service access
Context: "Skills with fewer dependencies are more portable"
multiSelect: true
```

#### Example Depth Questions

```markdown
Question: "How comprehensive should the examples be?"
Header: "Examples"
Options:
  - Basic: 2-3 simple examples (Recommended for focused skills)
  - Intermediate: 4-6 examples covering common scenarios
  - Comprehensive: Extensive examples with edge cases
Context: "More examples improve discoverability and usability"
```

#### Domain and Field Questions

```markdown
Question: "What domain or subject area is this skill for?"
Header: "Domain"
Options:
  - Programming/Software Development
  - Mathematics and Science
  - Humanities and Social Sciences
  - Business and Finance
  - Education and Learning
  - Creative Arts and Design
Context: "Domain affects terminology, conventions, and examples used"
```

#### Audience Level Questions

```markdown
Question: "What is the target audience's knowledge level?"
Header: "Audience"
Options:
  - Beginner: No prior knowledge assumed (Recommended for educational skills)
  - Intermediate: Basic understanding assumed
  - Advanced: Deep expertise assumed
  - Mixed: Multiple levels (skill adapts based on input)
Context: "Audience level affects language complexity and explanation depth"
```

#### Specific Education Level Questions (for educational skills)

```markdown
Question: "What specific education level should this target?"
Header: "Ed Level"
Options:
  - High School (ages 14-18)
  - Undergraduate (college/university)
  - Graduate (master's/PhD level)
  - Professional (industry practitioners)
Context: "Education level determines appropriate complexity and prerequisites"
```

#### Prior Knowledge Questions

```markdown
Question: "What prior knowledge should be assumed?"
Header: "Prerequisites"
Options:
  - None: Complete beginner (Recommended for introductory skills)
  - Basic: Fundamental concepts understood
  - Intermediate: Core principles mastered
  - Advanced: Specialized knowledge required
Context: "Prior knowledge sets the starting point for content"
```

#### Learning Objectives Questions (for educational skills)

```markdown
Question: "What should users be able to do after using this skill?"
Header: "Objectives"
Options:
  - Recall facts and concepts (Remember level)
  - Explain and summarize (Understand level)
  - Apply knowledge practically (Apply level)
  - Analyze and evaluate (Higher-order thinking)
Context: "Learning objectives guide content structure and depth"
multiSelect: true
```

#### Context-Specific Methodology Questions

```markdown
Question: "Are there specific methodologies or frameworks to follow?"
Header: "Methodology"
Options:
  - Yes - User will specify (ask follow-up)
  - Standard best practices for the domain (Recommended)
  - No specific methodology required
Context: "Methodologies like Bloom's Taxonomy, Agile, etc. guide structure"
```

### AskUserQuestion Best Practices

**Guidelines:**
- Maximum 4 questions per interaction
- Provide 2-4 options per question
- Include clear context explaining why information is needed
- Recommend specific options when appropriate
- Use multiSelect: true when choices are not mutually exclusive
- Keep headers concise (max 12 characters)
- Make labels clear and descriptive (1-5 words)

---

## Gap Analysis

### Three-Tier Gap Classification

#### Tier 1: Critical Gaps

**Definition**: Missing information that prevents skill generation

**Examples:**
- Skill name not specified or invalid
- Core functionality unclear
- Trigger conditions not defined
- Tool access requirements unknown

**Action**: Must be resolved before proceeding with generation

**Resolution**: Use AskUserQuestion tool with high priority

#### Tier 2: Important Gaps

**Definition**: Missing information that affects skill quality significantly

**Examples:**
- Insufficient examples planned
- Error handling approach unclear
- Dependency management not specified
- Security considerations not addressed

**Action**: Should be resolved for quality assurance

**Resolution**: Ask clarifying questions, provide recommendations

#### Tier 3: Optional Gaps

**Definition**: Missing information that enhances but is not critical

**Examples:**
- Advanced features or edge cases
- Comprehensive documentation depth
- Integration with other skills
- Performance optimization details

**Action**: Can proceed without, but improve if specified

**Resolution**: Use reasonable defaults, mention to user

### Gap Identification Process

**Step 1: Analyze User Request**
```markdown
Review initial request against requirements checklist:

Core Requirements:
- [ ] Skill name provided?
- [ ] Purpose clear?
- [ ] Use cases defined?
- [ ] Scope understood?

Technical Requirements:
- [ ] Inputs specified?
- [ ] Outputs defined?
- [ ] Tools identified?
- [ ] Dependencies listed?

Quality Requirements:
- [ ] Documentation level?
- [ ] Example count?
- [ ] Error handling?
- [ ] Security needs?
```

**Step 2: Classify Gaps**
```markdown
For each missing item:

If missing:
  - Skill name, purpose, triggers → Critical Gap
  - Examples, error handling → Important Gap
  - Advanced features, optimization → Optional Gap
```

**Step 3: Prioritize Questions**
```markdown
Ask questions in priority order:

1. Critical gaps first (all must be resolved)
2. Important gaps second (quality assurance)
3. Optional gaps last (if time permits)

Batch questions: Maximum 4 per interaction
```

**Step 4: Document Gaps**
```markdown
Track gaps and resolutions:

Gap Tracking:
- Gap: [Description]
- Tier: [Critical/Important/Optional]
- Status: [Identified/Asked/Resolved]
- Resolution: [Answer or default used]
```

---

## Validation Methods

### Requirements Completeness Validation

**Checklist Method:**
```markdown
## Requirements Validation Checklist

**Identity:**
- [ ] Skill name: [name] (validated: ^[a-z0-9-]{1,64}$)
- [ ] Description: [description] (validated: 1-1024 chars, WHAT and WHEN)

**Functionality:**
- [ ] Core purpose: [statement]
- [ ] Use cases: [list of scenarios]
- [ ] Scope: [defined boundaries]
- [ ] Trigger conditions: [keywords and scenarios]

**Technical:**
- [ ] Inputs: [specified]
- [ ] Outputs: [defined]
- [ ] Tool access: [specific tools or "all tools"]
- [ ] Dependencies: [list or "none"]
- [ ] Location: [.claude/skills/ or ~/.claude/skills/]

**Quality:**
- [ ] Documentation depth: [simple/standard/extensive]
- [ ] Example count: [number]
- [ ] Error handling: [approach]
- [ ] Security: [considerations]

**Operational:**
- [ ] Version tracking: [yes/no]
- [ ] Maintenance plan: [if applicable]
```

### Specification Confirmation

**Present Summary for Approval:**
```markdown
═══════════════════════════════════════════════════════
SKILL SPECIFICATION SUMMARY
═══════════════════════════════════════════════════════

IDENTITY
  Name: [skill-name]
  Description: [full description]
  Location: [path]

FUNCTIONALITY
  Purpose: [what it does]
  Triggers: [when Claude uses it]
  Scope: [what's included/excluded]

USE CASES
  1. [Use case 1]
  2. [Use case 2]
  3. [Use case 3]

TECHNICAL DETAILS
  Inputs: [what skill needs]
  Outputs: [what skill produces]
  Structure: [simple/standard/complex]
  Tools: [allowed tools]
  Dependencies: [list or none]

QUALITY STANDARDS
  Examples: [count and depth]
  Documentation: [level]
  Error Handling: [approach]
  Security: [considerations]

═══════════════════════════════════════════════════════
Proceed with generation? [WAIT FOR USER CONFIRMATION]
═══════════════════════════════════════════════════════
```

---

## Documentation Standards

### Requirements Documentation Format

**Template:**
```markdown
# Skill Requirements: [skill-name]

## Core Requirements

### Identity
- **Name**: [skill-name]
- **Purpose**: [what it does]
- **Scope**: [boundaries]

### Functional Requirements
- **Use Case 1**: [scenario]
- **Use Case 2**: [scenario]
- **Use Case 3**: [scenario]

### Trigger Conditions
- [trigger 1]
- [trigger 2]
- [trigger 3]

## Technical Requirements

### Inputs
- [input 1]: [format/type]
- [input 2]: [format/type]

### Outputs
- [output 1]: [format/type]
- [output 2]: [format/type]

### Tool Access
- **Level**: [Read-only/Safe/Automation/Full]
- **Tools**: [list]
- **Justification**: [why this level]

### External Dependencies
- [dependency 1]: [version]
- [dependency 2]: [version]

## Quality Requirements

### Documentation
- **Depth**: [Simple/Standard/Extensive]
- **Examples**: [count]

### Error Handling
- **Approach**: [description]
- **Recovery**: [procedures]

### Security
- **Sensitive Data**: [yes/no]
- **Restrictions**: [description]

## Operational Requirements

### Location
- **Path**: [.claude/skills/ or ~/.claude/skills/]
- **Reasoning**: [team/personal]

### Versioning
- **Track Versions**: [yes/no]
- **Initial Version**: [v1.0.0]

## Validation Status

- [ ] All critical requirements gathered
- [ ] All important requirements addressed
- [ ] User confirmed specification
- [ ] Ready for generation
```

---

## Summary

Effective requirements elicitation ensures production-ready skills through:

1. **Systematic Coverage**: Using category framework ensures nothing is missed
2. **Structured Questioning**: Question templates gather complete information
3. **Gap Analysis**: Three-tier classification prioritizes elicitation efforts
4. **Validation**: Checklists and confirmation ensure accuracy
5. **Documentation**: Standardized format captures all requirements clearly

The requirements framework enables consistent, thorough requirements gathering that results in well-defined, high-quality Claude Code skills.
