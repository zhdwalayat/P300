# CLAUD# Claude Agent Instructions

## Tone and Communication Style

### Academic Tone Requirements

When interacting with users in this workspace, maintain a formal academic tone characterized by:

1. **Precision and Clarity**: Use precise terminology and clear, unambiguous language. Avoid colloquialisms and informal expressions.

2. **Objectivity**: Present information objectively, supported by logical reasoning and evidence-based explanations. Minimize subjective statements.

3. **Formal Language**: Employ formal vocabulary and sentence structures. Use complete sentences and proper grammar throughout all communications.

4. **Technical Accuracy**: Prioritize technical correctness and thoroughness. Provide detailed explanations when discussing complex concepts.

5. **Professional Distance**: Maintain a respectful, professional distance. Address the user formally and avoid overly casual or familiar language.

6. **Structured Responses**: Organize responses in a logical, hierarchical manner with clear sections, subsections, and transitions between ideas.

7. **Citation of Sources**: When referencing external information, documentation, or established practices, acknowledge the source or framework being discussed.

8. **Avoid Contractions**: Use full forms (e.g., "do not" instead of "don't", "cannot" instead of "can't").

9. **Scholarly Vocabulary**: Utilize discipline-appropriate terminology and academic phraseology where relevant.

10. **Evidence-Based Reasoning**: Support recommendations and solutions with clear rationale, explaining the underlying principles and considerations.

## Example Communication Patterns

**Instead of**: "Let's check out the code and see what's wrong."

**Use**: "I shall examine the codebase to identify the source of the issue."

**Instead of**: "This won't work because..."

**Use**: "This approach is not viable due to the following constraints..."

**Instead of**: "I'll fix this for you."

**Use**: "I will implement the necessary corrections to address this matter."

## File Organization Requirements

### Topic-Based Organization for Study Materials

**Critical Principle**: All notes, flash cards, and quizzes are organized by **user-specified topics**, with each topic having its own dedicated directory containing subdirectories for each material type.

#### Workflow for Creating Study Materials

When the user requests creation of notes, flash cards, or quizzes on a specific topic:

1. **Identify the Topic**: Determine the subject matter from the user's request
   - Example: User asks "create notes on Python programming"
   - Topic identified: Python programming

2. **Request Topic Directory Name**: Ask the user to specify the directory name for this topic
   - Prompt: "What should the directory name be for this topic?"
   - Example user response: "python-basics" or "Python_Programming"

3. **Create Topic Directory Structure**: Create a directory with the user-specified name at the P300 root level, containing three subdirectories:
   - `[Topic_Name]/Notes/` - All notes for this topic
   - `[Topic_Name]/Flash_cards/` - All flash cards for this topic
   - `[Topic_Name]/Quiz/` - All quizzes for this topic

4. **Generate Materials in Appropriate Subdirectories**: Place all generated materials in the correct subdirectory within the topic directory
   - Notes → `[Topic_Name]/Notes/`
   - Flash cards → `[Topic_Name]/Flash_cards/`
   - Quizzes → `[Topic_Name]/Quiz/`

#### Directory Structure Example

```
H:\P300\
├── CLAUDE.md
├── WORK_LOG.md
├── [SKILL-NAME]-skill.md
│
├── Python_Programming/           (User-requested topic)
│   ├── Notes/                    (All Python notes here)
│   │   └── python-fundamentals.md
│   ├── Flash_cards/              (All Python flash cards here)
│   │   └── python-flashcards.md
│   └── Quiz/                     (All Python quizzes here)
│       └── python-quiz.md
│
├── Web_Development/              (Another user-requested topic)
│   ├── Notes/
│   │   └── html-css-basics.md
│   ├── Flash_cards/
│   │   └── web-dev-flashcards.md
│   └── Quiz/
│       └── web-dev-quiz.md
│
├── notes/                        (Note Generator Project)
└── skill-maker/                  (Skill Maker Project)
```

### Implementation Guidelines

**Topic Directory Creation**:
- **Always ask the user** for the topic directory name before creating structure
- Create the topic directory at P300 root level: `H:\P300\[Topic_Name]\`
- **Always create all three subdirectories** (Notes/, Flash_cards/, Quiz/) for each topic
- Use the exact directory name provided by the user

**Material Placement**:
- **Notes**: Always place in `[Topic_Name]/Notes/` directory
- **Flash Cards**: Always place in `[Topic_Name]/Flash_cards/` directory
- **Quizzes**: Always place in `[Topic_Name]/Quiz/` directory

**Naming Conventions**:
- Topic directories: Use user-specified names (may contain underscores, hyphens, or spaces based on user preference)
- Subdirectories: Exactly `Notes`, `Flash_cards`, `Quiz` (case-sensitive)
- Material files: Use descriptive names relevant to the topic content

**Important Requirements**:
- Each topic must have its own complete set of Notes/, Flash_cards/, and Quiz/ subdirectories
- Do not create a centralized Notes/, Flash_cards/, or Quiz/ directory at P300 root
- All materials for a topic must remain within that topic's directory structure
- Maintain consistent structure across all topic directories

## Work Log Documentation

### WORK_LOG.md Maintenance

All activities performed in the P300 workspace must be documented in the work log.

**Location**: `H:\P300\WORK_LOG.md`

**When to Update**:
- After completing any significant task or activity
- When creating new files or directories
- When modifying project structure
- When developing or updating skills
- At the end of each work session

**Log Entry Format**:
```markdown
### Activity Title
**Time**: HH:MM or HH:MM - HH:MM
**Activity**: Brief description of what was done

**Details**:
- Detailed breakdown of actions performed
- Files created or modified
- Decisions made

**Results**:
- Outcomes achieved
- Metrics or measurements (if applicable)
- Status or next steps
```

**Required Information**:
1. **Date**: Session date (YYYY-MM-DD format)
2. **Time**: Timestamp or time range
3. **Activity Description**: Clear, concise summary
4. **Details**: Comprehensive breakdown of work performed
5. **Results**: Outcomes, achievements, status

**Example Entry**:
```markdown
## 2025-12-31

### Session 2: Database Schema Design

#### Database Schema Creation
**Time**: 14:30 - 15:15
**Activity**: Designed and implemented database schema for user management

**Details**:
- Created users table with authentication fields
- Implemented role-based access control schema
- Added indexes for query optimization
- Generated migration files

**Results**:
- Schema complete and validated
- Migration files: `001_create_users.sql`, `002_create_roles.sql`
- Performance: Query time < 10ms for user lookup
```

**Update Procedure**:
1. Read existing `WORK_LOG.md` to understand current state
2. Append new entry under appropriate date heading
3. Maintain chronological order within each date
4. Update summary sections if applicable
5. Preserve formatting consistency

**Critical Requirement**: ALWAYS update WORK_LOG.md after completing any work in P300. This maintains complete project history and activity tracking.

## Skills Management

### Working with Multiple Skill Files

The P300 workspace supports multiple independent skill files for different functionalities.

**Important**: Skill files are **user-provided** for specific tasks. The user will specify which skill file to use when assigning a task.

**Skill File Location**: P300 root directory (e.g., `H:\P300\`)

**Naming Convention**: `[SKILL-NAME]-skill.md`
- Use descriptive, uppercase names with hyphens
- Always end with `-skill.md` suffix
- Examples: `WEB-Des-skill.md`, `DATA-Analysis-skill.md`, `API-Builder-skill.md`

**User-Provided Workflow**:
1. User places skill file at P300 root (or specifies existing skill)
2. User assigns task and references the skill file to use
3. Read the specified skill file to understand requirements and instructions
4. Execute the task following the skill file's instructions
5. Log the activity in WORK_LOG.md upon completion

**Skill File Structure**:

All skill files must follow this standard format:

```markdown
---
name: skill-name
description: Clear description of what the skill does and when to use it. Include trigger conditions and capabilities.
---

# Skill Title

Brief overview of skill purpose and value.

## When to Use This Skill

Claude will automatically invoke this skill when:
- Trigger condition 1
- Trigger condition 2
- Trigger condition 3

## Instructions

### Step 1: [Action Name]
Clear, actionable instructions

### Step 2: [Action Name]
Continue with detailed steps

## Examples

### Example 1: [Use Case]
Practical example with code or implementation details

## Best Practices

Key guidelines and recommendations

## Notes

Additional important information
```

**When User Provides a Skill File**:

1. **Read the Skill File**: Always read the user-provided skill file first
   - User specifies: "Use WEB-Des-skill.md for this task"
   - Read: `H:/P300/WEB-Des-skill.md`

2. **Understand Instructions**: Review the skill file structure:
   - YAML frontmatter (name, description)
   - Trigger conditions ("When to Use This Skill")
   - Step-by-step instructions
   - Examples and best practices

3. **Execute Task**: Follow the skill file's instructions precisely
   - Use specified tools and methods
   - Apply documented best practices
   - Reference provided examples

4. **Skill Independence**: Each skill file operates independently
   - No dependencies between skills
   - Self-contained instructions
   - Clear scope and boundaries

5. **Log Completion**: After completing the task:
   - Document activity in WORK_LOG.md
   - Include which skill file was used
   - Note results and outcomes

**Available Skills**:
- `WEB-Des-skill.md` - Web designer for front-end development (HTML/CSS/JS)
- (User may provide additional skill files as needed)

**Skill File Requirements**:
- Each skill must have clear YAML frontmatter (name, description)
- Must define specific trigger conditions
- Must provide step-by-step instructions
- Must include practical examples
- Must document best practices
- Keep focused and concise (prefer < 300 lines)

**Skill Best Practices**:
- Keep skill files focused and concise (prefer < 300 lines)
- Include 2-3 practical examples minimum
- Define clear, specific trigger conditions
- Use academic formal tone in documentation
- Maintain consistent formatting across all skills

## Project Structure Overview

### P300 Root Organization

```
P300/
├── CLAUDE.md                   (This file - project instructions)
├── WORK_LOG.md                 (Activity tracking and documentation)
├── [SKILL-NAME]-skill.md       (Independent skill files)
│
├── [Topic_Name]/               (User-requested study topics)
│   ├── Notes/
│   ├── Flash_cards/
│   └── Quiz/
│
├── notes/                      (Note Generator Project)
│   ├── .claude/skills/
│   ├── Notes/
│   ├── Flash_cards/
│   └── Quiz/
│
└── skill-maker/                (Skill Maker Project)
    └── [project files]
```

### File Management Rules

1. **Root Level Files**: Project instructions, work log, and skill files only
2. **Project Directories**: Independent projects (notes, skill-maker) in separate directories
3. **Topic Directories**: User-requested topics with Notes/, Flash_cards/, Quiz/ subdirectories
4. **No Redundancy**: Eliminate duplicate files and maintain single source of truth
5. **Clear Naming**: Use descriptive, consistent naming conventions
6. **Proper Documentation**: All work logged in WORK_LOG.md

---

**Last Updated**: 2025-12-31
