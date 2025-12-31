---
name: skill-maker
description: Generate production-ready Claude Code skills with comprehensive requirement elicitation, automated quality validation, and standards compliance verification. Use when the user wants to create a custom skill, automate workflows, or extend Claude Code capabilities. Ensures quality through systematic validation and testing.
---

# Skill Maker

A comprehensive meta-skill that generates production-ready Claude Code skills through systematic requirement elicitation, quality validation, standards compliance verification, and automated testing.

## Core Capabilities

1. **Requirement Elicitation**: Systematic gathering of complete, unambiguous requirements
2. **Quality Validation**: Automated validation of structure, syntax, and content quality
3. **Standard Compliance**: Verification against Claude Code documentation standards
4. **Skill Generation**: Automated creation of properly structured skill files
5. **Documentation**: Comprehensive documentation generation with examples and references
6. **Security Audit**: Security review for skills executing code or handling sensitive data
7. **Testing & Verification**: Post-generation validation and activation testing

## Reference Documentation

For detailed guidance on specific aspects of skill generation:

- **[REQUIREMENTS-FRAMEWORK.md](REQUIREMENTS-FRAMEWORK.md)**: Comprehensive framework for requirements elicitation, gap analysis, and validation methods
- **[GENERATION-PROCEDURE.md](GENERATION-PROCEDURE.md)**: Step-by-step procedures for skill generation, file creation, and validation
- **[EXAMPLE-GENRATION.md](EXAMPLE-GENRATION.md)**: Guidelines for creating high-quality, discoverable examples

---

## PHASE 1: REQUIREMENT ELICITATION

**For comprehensive requirements framework, see [REQUIREMENTS-FRAMEWORK.md](REQUIREMENTS-FRAMEWORK.md)**

### 1.1 Initial Requirements Capture

When a user requests a new skill, systematically capture:

**Core Requirements:**
- [ ] **Skill purpose**: Primary objective and problem being solved
- [ ] **Use cases**: Specific scenarios where skill applies
- [ ] **Scope**: Boundaries of what skill should and should not do
- [ ] **Target users**: Who will use this skill (individual, team, organization)
- [ ] **Success criteria**: How to measure if skill works correctly

**Technical Requirements:**
- [ ] **Input requirements**: What information skill needs to operate
- [ ] **Output expectations**: What skill should produce or accomplish
- [ ] **Tool dependencies**: Which Claude Code tools are required
- [ ] **External dependencies**: Packages, APIs, services, or files needed
- [ ] **Performance requirements**: Speed, size, or resource constraints

**Quality Requirements:**
- [ ] **Error handling**: How to handle failures or edge cases
- [ ] **Security considerations**: Sensitive data, permissions, or restrictions
- [ ] **Maintainability**: Version tracking, documentation depth
- [ ] **Testing needs**: How skill will be validated

**Domain and Context Requirements (CRITICAL - Always Elicit):**
- [ ] **Domain/Field**: Subject area (Programming, Science, Education, Business, etc.)
- [ ] **Audience level**: User knowledge level (Beginner, Intermediate, Advanced)
- [ ] **Education level**: If educational skill (High School, Undergraduate, Graduate, Professional)
- [ ] **Prior knowledge**: What users should already know
- [ ] **Learning objectives**: What users should achieve (if applicable)
- [ ] **Methodology**: Specific frameworks or approaches (Bloom's Taxonomy, Agile, etc.)
- [ ] **Context-specific needs**: Industry standards, compliance, style guidelines

### 1.2 Gap Identification Process

Analyze the user's request against the requirements checklist and identify gaps in three categories:

**Critical Gaps** (Must be resolved before generation):
- Missing skill name or invalid naming
- Unclear core functionality
- Ambiguous trigger conditions
- Undefined tool access requirements

**Important Gaps** (Should be resolved for quality):
- Missing examples or use cases
- Unclear error handling approach
- Unspecified dependency management
- Missing security considerations

**Optional Gaps** (Nice to have):
- Advanced features or edge cases
- Comprehensive documentation depth
- Integration with existing skills
- Performance optimization requirements

### 1.3 Structured Question Framework

Use the AskUserQuestion tool to resolve gaps systematically:

**Question Structure Guidelines:**
- Maximum 4 questions per interaction (avoid overwhelming user)
- Provide 2-4 options per question (with "Other" always available)
- Include context explaining why information is needed
- Recommend specific options when appropriate
- Use multiSelect: true when choices are not mutually exclusive

**Question Templates by Category:**

**1. Naming and Identity:**
```
Question: "What should the skill be named?"
Header: "Skill Name"
Options:
  - Suggested name based on functionality (Recommended)
  - User provides custom name
Context: "Names must be lowercase, use hyphens, max 64 characters"
```

**2. Scope and Complexity:**
```
Question: "What level of complexity should this skill support?"
Header: "Complexity"
Options:
  - Basic: Simple, focused functionality (Recommended for most cases)
  - Standard: Moderate complexity with multiple features
  - Advanced: Comprehensive with extensive options and configurations
Context: "Simpler skills are easier to maintain and more reliable"
```

**3. Tool Access and Security:**
```
Question: "What level of tool access should this skill have?"
Header: "Tool Access"
Options:
  - Read-only: Grep, Glob, Read only (Recommended for analysis skills)
  - Safe operations: Read, Write, Glob (for file creation without execution)
  - Full access: All tools including Bash (for automation skills)
Context: "Restricting tools improves security and prevents unintended changes"
```

**4. Skill Location:**
```
Question: "Where should this skill be stored?"
Header: "Location"
Options:
  - Project (.claude/skills/): Share with team via git (Recommended for team workflows)
  - Personal (~/.claude/skills/): Private, not shared
Context: "Project skills are version controlled and shared with teammates"
```

**5. Structure and Documentation:**
```
Question: "What documentation structure does this skill need?"
Header: "Structure"
Options:
  - Simple: Single SKILL.md file (Recommended for straightforward skills)
  - Standard: SKILL.md + reference.md + examples.md
  - Complex: Full structure with scripts and templates
Context: "Use progressive disclosure for complex skills"
```

**6. Dependencies and Requirements:**
```
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

**7. Example Depth:**
```
Question: "How comprehensive should the examples be?"
Header: "Examples"
Options:
  - Basic: 2-3 simple examples (Recommended for focused skills)
  - Intermediate: 4-6 examples covering common scenarios
  - Comprehensive: Extensive examples with edge cases
Context: "More examples improve discoverability and usability"
```

### 1.4 Requirement Validation

After gathering requirements, validate completeness:

```markdown
## Requirements Validation Checklist

**Identity:**
- [ ] Skill name: [name] (validated: lowercase, hyphens, 1-64 chars)
- [ ] Description: [description] (validated: 1-1024 chars, includes WHAT and WHEN)

**Functionality:**
- [ ] Core purpose: [purpose statement]
- [ ] Trigger conditions: [when Claude should use this]
- [ ] Expected outputs: [what skill produces]

**Technical:**
- [ ] Tool access: [specific tools or "all tools"]
- [ ] Dependencies: [list or "none"]
- [ ] Location: [.claude/skills/ or ~/.claude/skills/]

**Quality:**
- [ ] Example count: [minimum 2]
- [ ] Error handling: [approach defined]
- [ ] Security considerations: [reviewed and addressed]
```

### 1.5 Specification Confirmation

Present a comprehensive summary for user approval before generation:

```
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

TECHNICAL DETAILS
  Structure: [simple/standard/complex]
  Tools: [allowed tools]
  Dependencies: [list or none]

QUALITY STANDARDS
  Examples: [count and depth]
  Documentation: [level of detail]
  Security: [considerations addressed]
  Testing: [validation approach]

═══════════════════════════════════════════════════════
Proceed with generation? [Confirm before continuing]
═══════════════════════════════════════════════════════
```

---

## PHASE 2: QUALITY VALIDATION

### 2.1 Pre-Generation Validation

**Before creating any files, perform these checks:**

#### Name Validation
```bash
# Validate skill name format
Pattern: ^[a-z0-9-]{1,64}$
Requirements:
  - Only lowercase letters (a-z)
  - Only numbers (0-9)
  - Only hyphens (-) for word separation
  - Length: 1-64 characters
  - No underscores, spaces, or special characters

Example Valid Names: user-auth, log-analyzer, pdf-processor
Example Invalid Names: User_Auth, log_analyzer, PDF-Processor, skill_name
```

#### Description Validation
```yaml
Requirements:
  - Length: 1-1024 characters
  - Must include WHAT the skill does
  - Must include WHEN Claude should use it
  - Should include action verbs (analyze, generate, process, etc.)
  - Optional: Include dependencies or requirements

Example Good Description:
"Analyze Excel spreadsheets, create pivot tables, and generate charts. Use when working with Excel files, spreadsheets, or analyzing tabular data in .xlsx format. Requires openpyxl package."

Example Poor Description:
"Excel tool" (too vague, missing triggers)
```

#### Conflict Detection
```bash
# Check if skill already exists
Check paths:
  - .claude/skills/[skill-name]/
  - ~/.claude/skills/[skill-name]/

If exists:
  Options:
    1. Overwrite (create backup first)
    2. Rename new skill
    3. Cancel generation
```

### 2.2 Structural Validation

**Validate file structure before creation:**

```markdown
## Structure Validation Rules

Simple Structure (SKILL.md only):
  ✓ Use for: < 200 lines, no scripts, straightforward functionality
  ✓ Requirements: Clear instructions, 2+ examples

Standard Structure (with references):
  ✓ Use for: 200-500 lines, multiple use cases, API documentation
  ✓ Files: SKILL.md, reference.md, examples.md
  ✓ SKILL.md: Overview and quick start
  ✓ reference.md: Detailed API/command reference
  ✓ examples.md: Comprehensive examples library

Complex Structure (full documentation):
  ✓ Use for: > 500 lines, scripts, templates, extensive docs
  ✓ Files: SKILL.md, reference.md, examples.md, scripts/, templates/
  ✓ Scripts: Helper programs in scripts/ directory
  ✓ Templates: Reusable templates in templates/ directory
```

### 2.3 Content Quality Validation

**Validate content before writing files:**

```markdown
## Content Quality Checklist

Instructions Section:
  - [ ] Step-by-step format with clear numbering
  - [ ] Each step has actionable directive
  - [ ] Technical terms defined on first use
  - [ ] Code blocks properly formatted with language tags
  - [ ] Commands include descriptions of what they do

Examples Section:
  - [ ] Minimum 2 examples (target: 3-5 for standard skills)
  - [ ] Each example has descriptive title
  - [ ] Examples cover common use cases
  - [ ] Code examples are complete and executable
  - [ ] Expected outputs shown where applicable
  - [ ] Examples progress from simple to complex

Documentation Quality:
  - [ ] All prerequisites clearly stated
  - [ ] Installation instructions provided (if dependencies exist)
  - [ ] Error messages and troubleshooting included
  - [ ] Limitations or known issues documented
  - [ ] Links to external resources use valid URLs
```

### 2.4 YAML Syntax Validation

**Validate YAML frontmatter structure:**

```yaml
# Required Structure
---
name: skill-name          # Required: string, validated pattern
description: text         # Required: string, 1-1024 chars
allowed-tools: list       # Optional: comma-separated tool names
---

# Validation Rules
1. Opening --- must be on line 1
2. Closing --- must exist before content
3. Use spaces only (NO TABS)
4. Field names must be lowercase
5. String values do not need quotes (but can use them)
6. Multi-line strings use | or > for folding

# Common Errors to Prevent
❌ Tabs instead of spaces
❌ Missing closing ---
❌ Quotes around field names
❌ Invalid field names (Name vs name)
❌ Multi-line values without | or >
```

---

## PHASE 3: STANDARD COMPLIANCE

### 3.1 Claude Code Documentation Standards

**Ensure compliance with official standards:**

#### File Naming Standards
```
Directory names: lowercase-with-hyphens/
File names: SKILL.md, reference.md, examples.md
Script names: lowercase_with_underscores.py (language-specific)
Path separators: Always forward slashes (/) never backslashes (\)
```

#### Markdown Formatting Standards
```markdown
# Headers: Use ATX-style (#, ##, ###) not Setext-style
# Code blocks: Always specify language for syntax highlighting
# Lists: Consistent bullet style (-, not * or +)
# Links: Use reference-style for repeated URLs
# Emphasis: **bold** for emphasis, *italic* for terms
```

#### Tool Naming Standards
```
Correct: Read, Write, Edit, Bash, Grep, Glob, Task, WebFetch
Incorrect: read, bash, grep (wrong case)
Incorrect: FileRead, RunCommand (wrong names)

When restricting tools:
  allowed-tools: Read, Grep, Glob
  (comma-separated, proper casing, no quotes)
```

### 3.2 Best Practices Compliance

**Verify adherence to best practices:**

```markdown
## Best Practices Checklist

Focus and Scope:
  - [ ] Single, well-defined purpose
  - [ ] Not too broad (split if > 3 major functions)
  - [ ] Not too narrow (combine if overlaps with existing)

Discoverability:
  - [ ] Description includes keywords users would mention
  - [ ] Trigger conditions are specific and clear
  - [ ] Examples use realistic scenarios

Maintainability:
  - [ ] Instructions are easy to update
  - [ ] Dependencies are well-documented
  - [ ] Version history included (for team skills)

Security:
  - [ ] Tool restrictions applied when appropriate
  - [ ] No hardcoded secrets or credentials
  - [ ] User input validation where applicable
  - [ ] File operations scoped to appropriate directories

Performance:
  - [ ] SKILL.md file size < 50KB
  - [ ] Progressive disclosure for complex content
  - [ ] Efficient tool usage patterns
```

### 3.3 Accessibility and Usability

**Ensure skills are accessible and user-friendly:**

```markdown
## Accessibility Standards

Language Clarity:
  - [ ] Plain language for general concepts
  - [ ] Technical terms defined in context
  - [ ] Acronyms spelled out on first use
  - [ ] Consistent terminology throughout

Structure Clarity:
  - [ ] Logical section ordering
  - [ ] Clear section headers
  - [ ] Table of contents for long skills (> 400 lines)
  - [ ] Cross-references between related sections

Example Clarity:
  - [ ] Examples are self-contained
  - [ ] Required context provided before examples
  - [ ] Expected results shown
  - [ ] Common variations documented
```

---

## PHASE 4: SKILL GENERATION

**For detailed generation procedures, see [GENERATION-PROCEDURE.md](GENERATION-PROCEDURE.md)**

### 4.1 Pre-Generation Preparation

**Prepare for skill creation:**

#### Step 1: Conflict Resolution
```bash
# Check for existing skill
if [ -d ".claude/skills/skill-name" ]; then
  # Ask user: Overwrite, Rename, or Cancel
  # If Overwrite: Create timestamped backup
  mv .claude/skills/skill-name .claude/skills/skill-name.backup.$(date +%Y%m%d_%H%M%S)
fi
```

#### Step 2: Dependency Verification
```bash
# For skills with external dependencies
# Verify dependencies are available or document installation

# Python packages
pip show package-name || echo "Package not installed - will document installation"

# System commands
which command-name || echo "Command not found - will document requirement"

# Create installation documentation if needed
```

#### Step 3: Directory Structure Creation
```bash
# Use appropriate structure based on complexity

# Simple skill
mkdir -p .claude/skills/skill-name

# Standard skill
mkdir -p .claude/skills/skill-name

# Complex skill
mkdir -p .claude/skills/skill-name/{scripts,templates}
```

### 4.2 SKILL.md Generation Template

**Generate SKILL.md using this comprehensive template:**

```yaml
---
name: [skill-name]
description: [What the skill does] AND [When Claude should use it]. [Optional: Requirements]
[OPTIONAL: allowed-tools: Tool1, Tool2, Tool3]
---

# [Skill Title - Proper Case]

[1-2 sentence overview of skill purpose and value proposition]

## When to Use This Skill

Claude will automatically invoke this skill when:
- [Specific trigger condition 1]
- [Specific trigger condition 2]
- [Specific trigger condition 3]
- [Additional triggers as needed]

## Quick Start

[Minimal example showing basic usage - copy-paste ready]

```[language]
[Basic example code]
```

## Instructions

### Step 1: [Action Name]

[Detailed instructions for this step]

[Optional: Code example or command]

### Step 2: [Action Name]

[Continue with clear, actionable steps]

### Step 3: [Final Action]

[Completion step with verification]

## Examples

**For detailed example generation guidelines, see [EXAMPLE-GENRATION.md](EXAMPLE-GENRATION.md)**

### Example 1: [Common Use Case Name]

[Context: When this example applies]

```[language]
[Complete, executable example code]
```

**Expected Output:**
```
[Show what the result should look like]
```

### Example 2: [Intermediate Use Case]

[More complex scenario]

```[language]
[Example code]
```

### Example 3: [Advanced Use Case]

[Edge case or advanced feature]

```[language]
[Example code]
```

## Requirements

[IF APPLICABLE: List dependencies]

**System Requirements:**
- [Operating system requirements if any]
- [Minimum tool versions if applicable]

**External Dependencies:**
```bash
# Installation commands
pip install package-name
# or
npm install package-name
```

**File Requirements:**
- [Required files or directory structures]

## Configuration

[IF APPLICABLE: Configuration options]

**Available Options:**
- `option-name`: [Description and usage]
- `another-option`: [Description]

## Troubleshooting

**Issue**: [Common problem 1]
**Cause**: [Why this happens]
**Solution**: [How to resolve]

**Issue**: [Common problem 2]
**Solution**: [Resolution steps]

## Limitations

- [Known limitation 1]
- [Known limitation 2]
- [Scenarios not supported]

## Related Skills

[IF APPLICABLE: Links to related skills]

- `related-skill-name`: [When to use instead]
- `complementary-skill`: [Use together with this skill]

## Notes

- [Important consideration 1]
- [Best practice recommendation]
- [Performance tip]

[IF TEAM SKILL: Version History]
## Version History

- **v1.0.0** (YYYY-MM-DD): Initial release
```

### 4.3 Supporting File Generation

**Generate additional files based on structure:**

#### reference.md Template
```markdown
# [Skill Name] Reference Documentation

## API Reference

### Function: [function-name]

**Purpose**: [What it does]

**Syntax**:
```[language]
[Function signature]
```

**Parameters**:
- `param1` (type): [Description]
- `param2` (type): [Description]

**Returns**: [Return type and description]

**Example**:
```[language]
[Usage example]
```

### [Continue for all functions/commands]

## Advanced Configuration

[Detailed configuration options]

## Best Practices

[In-depth best practices for advanced users]
```

#### examples.md Template
```markdown
# [Skill Name] Examples Library

## Basic Examples

### Example 1: [Title]
[Detailed example with full context]

## Intermediate Examples

### Example 2: [Title]
[More complex scenario]

## Advanced Examples

### Example 3: [Title]
[Edge cases and advanced features]

## Real-World Use Cases

### Use Case 1: [Practical Scenario]
[Complete workflow example]
```

### 4.4 Script and Template Generation

**For complex skills requiring automation:**

#### Script Template (scripts/helper.py)
```python
#!/usr/bin/env python3
"""
Helper script for [skill-name]

Purpose: [What this script does]
Usage: python scripts/helper.py [arguments]
"""

import sys
import argparse

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(description='[Script description]')
    parser.add_argument('input', help='[Input description]')
    parser.add_argument('--option', help='[Option description]')

    args = parser.parse_args()

    # Script logic here

if __name__ == '__main__':
    main()
```

#### Template Generation
```bash
# Make scripts executable
chmod +x .claude/skills/skill-name/scripts/*.py
```

---

## PHASE 5: DOCUMENTATION

### 5.1 Inline Documentation Standards

**Ensure comprehensive inline documentation:**

```markdown
## Documentation Requirements

Code Examples:
  - [ ] Every code block has language identifier
  - [ ] Complex code includes inline comments
  - [ ] Variable names are self-documenting
  - [ ] Functions/methods have docstrings

Command Examples:
  - [ ] Each command has description comment
  - [ ] Parameters are explained
  - [ ] Expected output shown
  - [ ] Common variations documented

Configuration Examples:
  - [ ] Default values specified
  - [ ] Valid value ranges documented
  - [ ] Impact of changes explained
```

### 5.2 Progressive Disclosure

**Structure documentation for ease of use:**

```markdown
## Documentation Layers

Layer 1 - SKILL.md (Quick Start):
  - Essential information only
  - Common use cases (80% of usage)
  - Quick reference
  - Links to deeper documentation

Layer 2 - reference.md (Detailed Reference):
  - Complete API documentation
  - All options and parameters
  - Advanced configuration
  - Technical details

Layer 3 - examples.md (Example Library):
  - Comprehensive example collection
  - Real-world scenarios
  - Edge cases
  - Integration examples
```

### 5.3 Metadata Documentation

**Include comprehensive metadata:**

```markdown
## Skill Metadata

Required in SKILL.md:
  - Skill name and purpose
  - Trigger conditions
  - Basic usage instructions
  - Minimum 2 examples

Recommended in SKILL.md:
  - Dependencies and installation
  - Troubleshooting section
  - Limitations
  - Related skills

Optional (for team skills):
  - Author information
  - Version history
  - Change log
  - Contribution guidelines
```

### 5.4 README Generation (for complex skills)

**For complex skills with scripts, generate README.md:**

```markdown
# [Skill Name]

[Brief description]

## Installation

[Installation steps for dependencies]

## Quick Start

[Minimal working example]

## File Structure

```
skill-name/
├── SKILL.md           # Main skill definition
├── reference.md       # API reference
├── examples.md        # Example library
├── README.md          # This file
├── scripts/
│   └── helper.py     # Helper scripts
└── templates/
    └── template.txt  # Templates
```

## Usage

[Detailed usage instructions]

## Contributing

[If team skill: contribution guidelines]

## License

[If applicable: license information]
```

---

## PHASE 6: SECURITY AUDIT

### 6.1 Security Review Checklist

**Perform security audit before finalizing:**

```markdown
## Security Audit

Code Execution:
  - [ ] Scripts validated for command injection vulnerabilities
  - [ ] User input is sanitized before use
  - [ ] No eval() or exec() of untrusted input
  - [ ] Shell commands use parameterization, not string concatenation

File Operations:
  - [ ] File paths validated and sanitized
  - [ ] Operations scoped to appropriate directories
  - [ ] No access to sensitive system files
  - [ ] Proper error handling for file operations

Data Security:
  - [ ] No hardcoded credentials or API keys
  - [ ] Sensitive data not logged or displayed
  - [ ] Secure handling of temporary files
  - [ ] Proper cleanup of sensitive data

Tool Restrictions:
  - [ ] appropriate for skill purpose
  - [ ] Read-only skills use: Read, Grep, Glob only
  - [ ] Bash access justified and necessary
  - [ ] Write/Edit access scoped appropriately

External Dependencies:
  - [ ] Dependencies from trusted sources
  - [ ] Specific version requirements documented
  - [ ] Security considerations documented
  - [ ] Update/patch guidance provided
```

### 6.2 Permission and Access Control

**Validate access controls:**

```markdown
## Access Control Validation

Tool Access Levels:

Level 1 - Read-Only (Most Restrictive):
  allowed-tools: Read, Grep, Glob
  Use for: Analysis, reporting, search skills

Level 2 - Safe File Operations:
  allowed-tools: Read, Write, Glob
  Use for: File generation, documentation creation

Level 3 - Automation (Moderate):
  allowed-tools: Read, Write, Edit, Bash, Grep, Glob
  Use for: Workflow automation, refactoring

Level 4 - Full Access (Least Restrictive):
  allowed-tools: [omit field for all tools]
  Use for: Complex automation requiring all capabilities
  Justification required: [Explain why full access needed]
```

### 6.3 Vulnerability Prevention

**Prevent common vulnerabilities:**

```markdown
## Vulnerability Prevention

Command Injection:
  ❌ Bad: bash -c f"rm {user_input}"
  ✅ Good: Use parameterized commands, validate input

Path Traversal:
  ❌ Bad: read_file(f"data/{user_input}")
  ✅ Good: Validate path, use os.path.join, check for ../

SQL Injection (if using databases):
  ❌ Bad: f"SELECT * FROM users WHERE id={user_id}"
  ✅ Good: Use parameterized queries

XSS (if generating web content):
  ❌ Bad: f"<div>{user_input}</div>"
  ✅ Good: Escape HTML entities

SSRF (if making HTTP requests):
  ❌ Bad: fetch(user_provided_url)
  ✅ Good: Validate URL, whitelist domains
```

---

## PHASE 7: VALIDATION & TESTING

### 7.1 Post-Generation Validation

**Validate skill after generation:**

#### Automated Validation Steps
```bash
# Step 1: Verify file creation
ls -la .claude/skills/skill-name/

# Step 2: Read and verify SKILL.md
# Use Read tool to verify file contents

# Step 3: Validate YAML frontmatter
# Check for:
# - Opening --- on line 1
# - Closing --- before content
# - Required fields present
# - No tabs in YAML section

# Step 4: Validate file paths
# Ensure all paths use forward slashes

# Step 5: Check file sizes
# SKILL.md should be < 50KB for performance
du -h .claude/skills/skill-name/SKILL.md
```

#### Content Validation Checklist
```markdown
## Post-Generation Content Validation

YAML Frontmatter:
  - [ ] name field: matches directory name, valid pattern
  - [ ] description field: 1-1024 chars, includes WHAT and WHEN
  - [ ] allowed-tools field: valid tool names if present
  - [ ] No syntax errors, no tabs

Structure:
  - [ ] H1 header present (# Skill Name)
  - [ ] Required sections present (Instructions, Examples)
  - [ ] Sections in logical order
  - [ ] No broken internal links

Instructions:
  - [ ] Step-by-step format
  - [ ] Clear, actionable directives
  - [ ] Code blocks have language identifiers
  - [ ] Commands explained

Examples:
  - [ ] Minimum 2 examples present
  - [ ] Examples are complete and executable
  - [ ] Examples cover common use cases
  - [ ] Expected outputs shown

Dependencies:
  - [ ] All dependencies documented
  - [ ] Installation instructions provided
  - [ ] Version requirements specified if critical
```

### 7.2 YAML Syntax Validation

**Validate YAML is parseable:**

```markdown
## YAML Validation Procedure

1. Read the generated SKILL.md file
2. Extract lines between opening and closing ---
3. Check for common errors:
   - Tabs instead of spaces (YAML requires spaces)
   - Missing colon after field name
   - Invalid field names
   - Unmatched quotes
   - Invalid characters

Common YAML Errors to Catch:
  ❌ name: skill-name (with tab before name)
  ✅ name: skill-name (with 0 spaces before name at root level)

  ❌ description "text" (missing colon)
  ✅ description: text

  ❌ Name: skill-name (capitalized field)
  ✅ name: skill-name

  ❌ allowed-tools: Read, Write, (trailing comma)
  ✅ allowed-tools: Read, Write
```

### 7.3 Integration Testing

**Test skill integration:**

```markdown
## Integration Testing

Conflict Detection:
  - [ ] Skill name unique (no conflicts with existing skills)
  - [ ] No trigger overlap with existing skills
  - [ ] Tool restrictions compatible with use cases

Dependency Testing:
  - [ ] External dependencies available or documented
  - [ ] Installation commands work as documented
  - [ ] Version compatibility verified

File Structure Testing:
  - [ ] All referenced files exist
  - [ ] Internal links resolve correctly
  - [ ] Scripts are executable (if present)
  - [ ] Templates are accessible (if present)
```

### 7.4 Activation Testing

**Verify skill can be discovered and activated:**

```markdown
## Activation Testing Procedure

1. Inform user of test queries to try
2. Provide example questions that should trigger skill
3. Explain expected behavior

Example Test Guidance:
```
Skill Generated Successfully!

TESTING INSTRUCTIONS
═══════════════════════════════════════════════════════

To test if the skill activates correctly, try asking:

1. "[Question matching trigger condition 1]"
   Expected: Claude should use [skill-name] skill

2. "[Question matching trigger condition 2]"
   Expected: Claude should use [skill-name] skill

Debugging:
- If skill does not activate, refine description triggers
- Check: claude --debug (to see skill loading errors)
- Verify SKILL.md location: [path]

═══════════════════════════════════════════════════════
```

### 7.5 Quality Assurance Final Checklist

**Complete QA before delivery:**

```markdown
## Final Quality Assurance

Pre-Delivery Checklist:
  - [ ] All requirement elicitation gaps filled
  - [ ] Quality validation checks passed
  - [ ] Standard compliance verified
  - [ ] Security audit completed
  - [ ] Post-generation validation passed
  - [ ] YAML syntax validated
  - [ ] Integration testing completed
  - [ ] User informed of testing procedure
  - [ ] Documentation complete and accurate
  - [ ] Backup created (if overwriting existing skill)

Skill Quality Metrics:
  - [ ] Name: Valid pattern, descriptive
  - [ ] Description: Clear triggers, 1-1024 chars
  - [ ] Instructions: Step-by-step, actionable
  - [ ] Examples: Minimum 2, complete, realistic
  - [ ] Dependencies: Documented, installable
  - [ ] Security: Reviewed, no vulnerabilities
  - [ ] Performance: File size acceptable, efficient patterns
  - [ ] Documentation: Comprehensive, clear, accurate
```

---

## WORKFLOW EXECUTION

### Complete Skill Generation Workflow

**Follow this systematic workflow:**

```markdown
## Skill Generation Process

┌─────────────────────────────────────────────────────┐
│ PHASE 1: REQUIREMENT ELICITATION                    │
├─────────────────────────────────────────────────────┤
│ 1. Capture initial requirements                     │
│ 2. Identify gaps (critical, important, optional)    │
│ 3. Ask clarifying questions (AskUserQuestion tool)  │
│ 4. Validate requirement completeness                │
│ 5. Present specification summary for approval       │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 2: QUALITY VALIDATION                         │
├─────────────────────────────────────────────────────┤
│ 1. Validate skill name format                       │
│ 2. Validate description content and length          │
│ 3. Detect conflicts with existing skills            │
│ 4. Validate structure selection                     │
│ 5. Validate content quality requirements            │
│ 6. Validate YAML syntax requirements                │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 3: STANDARD COMPLIANCE                        │
├─────────────────────────────────────────────────────┤
│ 1. Verify Claude Code documentation standards       │
│ 2. Check best practices compliance                  │
│ 3. Validate accessibility and usability             │
│ 4. Ensure consistent formatting and naming          │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 4: SKILL GENERATION                           │
├─────────────────────────────────────────────────────┤
│ 1. Resolve conflicts (backup if overwriting)        │
│ 2. Verify dependencies                              │
│ 3. Create directory structure                       │
│ 4. Generate SKILL.md from template                  │
│ 5. Generate supporting files (if needed)            │
│ 6. Generate scripts and templates (if complex)      │
│ 7. Set appropriate permissions                      │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 5: DOCUMENTATION                              │
├─────────────────────────────────────────────────────┤
│ 1. Ensure inline documentation quality              │
│ 2. Implement progressive disclosure                 │
│ 3. Include comprehensive metadata                   │
│ 4. Generate README (if complex skill)               │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 6: SECURITY AUDIT                             │
├─────────────────────────────────────────────────────┤
│ 1. Complete security review checklist               │
│ 2. Validate permission and access controls          │
│ 3. Prevent common vulnerabilities                   │
│ 4. Document security considerations                 │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│ PHASE 7: VALIDATION & TESTING                       │
├─────────────────────────────────────────────────────┤
│ 1. Perform post-generation validation               │
│ 2. Validate YAML syntax                             │
│ 3. Run integration tests                            │
│ 4. Provide activation testing instructions          │
│ 5. Complete final QA checklist                      │
│ 6. Deliver skill with testing guidance              │
└─────────────────────────────────────────────────────┘
```

### Use TodoWrite Tool

**Track progress with TodoWrite:**

```markdown
When generating a skill, create todos for:

1. Requirement elicitation phase
2. Quality validation phase
3. Standard compliance verification
4. Skill file generation
5. Documentation generation
6. Security audit
7. Validation and testing

Update todo status:
- Mark in_progress when starting each phase
- Mark completed immediately when phase finishes
- Add new todos if additional steps discovered
```

---

## ERROR HANDLING AND RECOVERY

### Rollback Procedures

**If skill generation fails or needs reversal:**

```bash
# Rollback Procedure

# 1. Remove generated skill
rm -rf .claude/skills/skill-name

# 2. Restore from backup (if overwrite occurred)
if [ -d ".claude/skills/skill-name.backup.*" ]; then
  # Find most recent backup
  latest_backup=$(ls -t .claude/skills/skill-name.backup.* | head -1)
  mv "$latest_backup" .claude/skills/skill-name
fi

# 3. For git projects, revert changes
git checkout -- .claude/skills/skill-name
git clean -fd .claude/skills/skill-name

# 4. Verify removal
ls .claude/skills/ | grep skill-name || echo "Rollback successful"
```

### Error Recovery Strategies

```markdown
## Common Errors and Recovery

Error: Invalid YAML syntax
Recovery:
  1. Read generated SKILL.md
  2. Identify YAML error (tabs, missing colon, etc.)
  3. Regenerate SKILL.md with corrected YAML
  4. Validate again

Error: Missing dependencies
Recovery:
  1. Document installation procedure
  2. Update SKILL.md Requirements section
  3. Provide fallback instructions if dependency unavailable

Error: Skill not activating
Recovery:
  1. Refine description with more specific triggers
  2. Add keywords users would mention
  3. Test with varied phrasings
  4. Check claude --debug for loading errors

Error: File permission issues
Recovery:
  1. Set appropriate permissions: chmod +x scripts/*.py
  2. Verify ownership
  3. Check directory permissions
```

---

## BEST PRACTICES SUMMARY

### Skill Maker Meta-Guidelines

**When using this skill to generate skills:**

1. **Never Skip Requirement Elicitation**: Always identify and fill gaps before generation
2. **Always Use TodoWrite**: Track progress through all phases
3. **Validate Before Creating**: Check name, description, conflicts before writing files
4. **Read After Writing**: Always verify generated files are correct
5. **Security First**: Apply least-privilege tool restrictions
6. **Test Thoroughly**: Provide clear testing instructions to user
7. **Document Completely**: Include all necessary information for successful use
8. **Follow Standards**: Strict adherence to Claude Code documentation standards
9. **Progressive Disclosure**: Simple SKILL.md, detailed reference.md for complex skills
10. **User-Centric**: Focus on discoverability and usability

### Quality Metrics

**Every generated skill must achieve:**

- ✅ Valid YAML frontmatter (parseable, no errors)
- ✅ Clear, specific trigger conditions in description
- ✅ Minimum 2 complete, executable examples
- ✅ Step-by-step instructions with actionable directives
- ✅ All dependencies documented with installation
- ✅ Security considerations addressed
- ✅ File size < 50KB for SKILL.md
- ✅ No broken links or references
- ✅ Consistent formatting and style
- ✅ Tested activation procedure provided

---

## CONCLUSION

The Skill Maker skill ensures production-ready skill generation through:

1. **Systematic Requirement Elicitation**: Comprehensive gathering of all necessary information
2. **Rigorous Quality Validation**: Automated checks for structure, syntax, and content
3. **Standards Compliance**: Strict adherence to Claude Code documentation standards
4. **Secure Generation**: Security audit and vulnerability prevention
5. **Thorough Testing**: Post-generation validation and activation testing
6. **Complete Documentation**: Progressive disclosure with appropriate depth
7. **Error Recovery**: Rollback and error handling procedures

By following this comprehensive framework, every generated skill will be discoverable, usable, maintainable, secure, and high-quality.
