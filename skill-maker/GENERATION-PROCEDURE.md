# Skill Generation Procedures

Detailed step-by-step procedures for generating production-ready Claude Code skills with comprehensive quality assurance.

## Table of Contents

1. [Pre-Generation Procedures](#pre-generation-procedures)
2. [File Creation Procedures](#file-creation-procedures)
3. [Content Generation Procedures](#content-generation-procedures)
4. [Validation Procedures](#validation-procedures)
5. [Post-Generation Procedures](#post-generation-procedures)
6. [Error Handling Procedures](#error-handling-procedures)

---

## Pre-Generation Procedures

### Procedure 1: Requirements Validation

**Objective**: Ensure all necessary requirements are gathered before generation

**Steps:**

1. **Verify Required Information**
   ```markdown
   Check for:
   - [ ] Skill name (validated pattern: ^[a-z0-9-]{1,64}$)
   - [ ] Description (1-1024 chars, includes WHAT and WHEN)
   - [ ] Core functionality defined
   - [ ] Trigger conditions specified
   - [ ] Tool access requirements determined
   ```

2. **Validate Skill Name**
   ```bash
   # Name must match pattern
   Pattern: ^[a-z0-9-]{1,64}$

   Valid: user-auth, log-analyzer, pdf-processor
   Invalid: User_Auth, logAnalyzer, PDF-Processor

   # Check length
   Length must be: 1-64 characters
   ```

3. **Validate Description**
   ```markdown
   Requirements:
   - Length: 1-1024 characters
   - Must include: WHAT the skill does
   - Must include: WHEN Claude should use it
   - Should include: Action verbs (analyze, generate, process, etc.)
   - Optional: Dependencies or requirements

   Template:
   "[Action verb] [what it does]. Use when [trigger conditions]. [Optional: Requires X]"
   ```

4. **Confirm User Approval**
   ```markdown
   Present specification summary:

   ═══════════════════════════════════════════════════════
   SKILL SPECIFICATION SUMMARY
   ═══════════════════════════════════════════════════════

   IDENTITY
     Name: [skill-name]
     Description: [full description]
     Location: [.claude/skills/ or ~/.claude/skills/]

   FUNCTIONALITY
     Purpose: [what it does]
     Triggers: [when Claude uses it]
     Scope: [boundaries]

   TECHNICAL DETAILS
     Structure: [simple/standard/complex]
     Tools: [allowed tools or "all tools"]
     Dependencies: [list or "none"]

   QUALITY STANDARDS
     Examples: [count and complexity level]
     Documentation: [level of detail]
     Security: [considerations]
     Testing: [validation approach]

   ═══════════════════════════════════════════════════════
   Proceed with generation? [WAIT FOR USER CONFIRMATION]
   ═══════════════════════════════════════════════════════
   ```

### Procedure 2: Conflict Detection and Resolution

**Objective**: Prevent overwrit of existing skills without user consent

**Steps:**

1. **Check for Existing Skill**
   ```bash
   # Check both locations
   if [ -d ".claude/skills/[skill-name]" ]; then
     echo "Skill exists in project location"
     CONFLICT=true
   fi

   if [ -d "~/.claude/skills/[skill-name]" ]; then
     echo "Skill exists in personal location"
     CONFLICT=true
   fi
   ```

2. **If Conflict Detected**
   ```markdown
   Use AskUserQuestion tool to ask:

   Question: "A skill named '[skill-name]' already exists. How should I proceed?"
   Header: "Conflict"
   Options:
     - Overwrite existing skill (will create backup)
     - Choose a different name
     - Cancel generation
   ```

3. **If Overwrite Selected**
   ```bash
   # Create timestamped backup
   TIMESTAMP=$(date +%Y%m%d_%H%M%S)
   mv .claude/skills/[skill-name] .claude/skills/[skill-name].backup.$TIMESTAMP

   # Confirm backup created
   if [ -d ".claude/skills/[skill-name].backup.$TIMESTAMP" ]; then
     echo "Backup created: [skill-name].backup.$TIMESTAMP"
   fi
   ```

### Procedure 3: Dependency Verification

**Objective**: Verify external dependencies or document installation

**Steps:**

1. **For Python Dependencies**
   ```bash
   # Check if package is installed
   pip show package-name > /dev/null 2>&1

   if [ $? -eq 0 ]; then
     echo "Package installed: package-name"
   else
     echo "Package NOT installed - will document installation in SKILL.md"
     NEEDS_INSTALL_DOCS=true
   fi
   ```

2. **For System Commands**
   ```bash
   # Check if command is available
   which command-name > /dev/null 2>&1

   if [ $? -eq 0 ]; then
     echo "Command available: command-name"
   else
     echo "Command NOT found - will document requirement in SKILL.md"
     NEEDS_SYSTEM_DOCS=true
   fi
   ```

3. **Document Dependencies**
   ```markdown
   If dependencies are not available, ensure SKILL.md includes:

   ## Requirements

   **External Dependencies:**
   ```bash
   # Install required packages
   pip install package-name
   # or
   npm install package-name
   # or
   apt-get install command-name
   ```
   ```

---

## File Creation Procedures

### Procedure 4: Directory Structure Creation

**Objective**: Create appropriate directory structure based on complexity

**Steps:**

1. **Determine Structure Type**
   ```markdown
   Simple: Single SKILL.md file
     - Use when: < 200 lines, no scripts, straightforward

   Standard: SKILL.md + reference.md + examples.md
     - Use when: 200-500 lines, multiple use cases

   Complex: Full structure with scripts/ and templates/
     - Use when: > 500 lines, requires helper scripts
   ```

2. **Create Simple Structure**
   ```bash
   # Create directory
   mkdir -p .claude/skills/[skill-name]

   # Verify creation
   ls -la .claude/skills/[skill-name]
   ```

3. **Create Standard Structure**
   ```bash
   # Create directory
   mkdir -p .claude/skills/[skill-name]

   # Files will be created: SKILL.md, reference.md, examples.md
   ```

4. **Create Complex Structure**
   ```bash
   # Create directory with subdirectories
   mkdir -p .claude/skills/[skill-name]/{scripts,templates}

   # Verify structure
   tree .claude/skills/[skill-name]
   # Expected:
   # skill-name/
   # ├── scripts/
   # └── templates/
   ```

### Procedure 5: SKILL.md File Generation

**Objective**: Create properly formatted SKILL.md with valid YAML and complete content

**Steps:**

1. **Generate YAML Frontmatter**
   ```yaml
   ---
   name: [skill-name]
   description: [What it does] AND [When to use it]. [Optional: Requirements]
   allowed-tools: [Tool1, Tool2, Tool3]  # Optional field
   ---
   ```

   **Validation:**
   - Opening --- on line 1
   - Closing --- before content
   - Use spaces only (NO TABS)
   - Field names lowercase
   - name matches directory name
   - description 1-1024 characters

2. **Generate Main Content Sections**
   ```markdown
   Required sections in order:

   # [Skill Title]
   ## When to Use This Skill
   ## Quick Start (optional but recommended)
   ## Instructions
   ## Examples (minimum 2)
   ## Requirements (if dependencies exist)
   ## Troubleshooting (recommended)
   ## Notes (optional)
   ```

3. **Write Instructions Section**
   ```markdown
   ## Instructions

   ### Step 1: [Action Name]

   [Detailed, actionable instructions]

   [Optional: Code example]
   ```bash
   command --option value
   ```

   ### Step 2: [Next Action]

   [Continue step-by-step]
   ```

4. **Write Examples Section**
   ```markdown
   ## Examples

   ### Example 1: [Common Use Case]

   [Context: When this applies]

   ```[language]
   [Complete, executable code]
   ```

   **Expected Output:**
   ```
   [Show the result]
   ```

   ### Example 2: [Another Use Case]

   [Provide minimum 2 examples, target 3-5]
   ```

5. **Use Write Tool to Create File**
   ```markdown
   Use Write tool with:
   - file_path: H:\P300\.claude\skills\[skill-name]\SKILL.md
   - content: [Complete SKILL.md content]
   ```

### Procedure 6: Supporting Files Generation

**Objective**: Create reference.md and examples.md for standard/complex skills

**Steps:**

1. **Generate reference.md (if standard or complex structure)**
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

   **Returns**: [Return type and description]

   **Example**:
   ```[language]
   [Usage example]
   ```
   ```

2. **Generate examples.md (if standard or complex structure)**
   ```markdown
   # [Skill Name] Examples Library

   ## Basic Examples

   ### Example 1: [Title]
   [Detailed example]

   ## Intermediate Examples

   ### Example 2: [Title]
   [More complex scenario]

   ## Advanced Examples

   ### Example 3: [Title]
   [Advanced features]
   ```

3. **Use Write Tool for Each File**
   ```markdown
   For reference.md:
   - file_path: H:\P300\.claude\skills\[skill-name]\reference.md
   - content: [Complete reference content]

   For examples.md:
   - file_path: H:\P300\.claude\skills\[skill-name]\examples.md
   - content: [Complete examples content]
   ```

### Procedure 7: Script and Template Generation

**Objective**: Create helper scripts and templates for complex skills

**Steps:**

1. **Generate Helper Script (if needed)**
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
       parser = argparse.ArgumentParser(description='[Description]')
       parser.add_argument('input', help='[Input description]')

       args = parser.parse_args()

       # Script logic here

   if __name__ == '__main__':
       main()
   ```

2. **Set Script Permissions**
   ```bash
   # Make scripts executable
   chmod +x .claude/skills/[skill-name]/scripts/*.py

   # Verify permissions
   ls -la .claude/skills/[skill-name]/scripts/
   ```

3. **Generate Templates (if needed)**
   ```bash
   # Create template files in templates/ directory
   # Use Write tool to create each template
   ```

---

## Content Generation Procedures

### Procedure 8: Description Generation

**Objective**: Create clear, discoverable description with proper triggers

**Steps:**

1. **Identify Action Verbs**
   ```markdown
   Choose primary action verb:
   - analyze, generate, create, process, extract
   - convert, transform, validate, check, test
   - deploy, configure, setup, install
   ```

2. **Define WHAT Clause**
   ```markdown
   Template: [Action verb] [object] [additional details]

   Examples:
   - "Analyze Excel spreadsheets and generate reports"
   - "Extract text and tables from PDF documents"
   - "Generate unit tests for Python functions"
   ```

3. **Define WHEN Clause**
   ```markdown
   Template: Use when [user scenario] or [task description]

   Examples:
   - "Use when working with Excel files or analyzing tabular data"
   - "Use when extracting information from PDF documents"
   - "Use when creating test coverage for Python code"
   ```

4. **Add Dependencies (Optional)**
   ```markdown
   Template: Requires [package/tool name]

   Examples:
   - "Requires openpyxl package"
   - "Requires pdfplumber and PyPDF2"
   - "Requires pytest framework"
   ```

5. **Combine Components**
   ```markdown
   Final description:
   "[WHAT]. Use when [WHEN]. [Optional: Requires X]"

   Validate:
   - Length: 1-1024 characters
   - Includes action verb
   - Specifies triggers
   - Clear and specific
   ```

### Procedure 9: Instruction Generation

**Objective**: Create clear, step-by-step, actionable instructions

**Steps:**

1. **Identify Main Steps**
   ```markdown
   Break down the skill into logical steps:

   Step 1: [Preparation/Setup]
   Step 2: [Core Action]
   Step 3: [Verification/Completion]

   (Aim for 3-7 steps)
   ```

2. **Write Each Step**
   ```markdown
   ### Step [N]: [Action Verb] [What]

   [Explanation of what to do and why]

   [Optional: Code example or command]
   ```[language]
   [Code]
   ```

   [Optional: Expected result or next step]
   ```

3. **Add Code Examples Where Helpful**
   ```markdown
   For technical steps, include:
   - Complete code snippets
   - Command examples with flags explained
   - Configuration file examples
   ```

4. **Include Verification Steps**
   ```markdown
   After key steps, add verification:

   **Verify:**
   ```bash
   # Command to verify step completed
   ```

   **Expected result:** [What should happen]
   ```

### Procedure 10: Example Generation

**Objective**: Create minimum 2 complete, executable examples

**Refer to**: [EXAMPLE-GENRATION.md](EXAMPLE-GENRATION.md) for detailed guidelines

**Steps:**

1. **Generate Quick Start Example**
   ```markdown
   ### Example 1: Basic [Task]

   [One sentence context]

   ```[language]
   [5-15 lines of minimal, working code]
   ```

   **Expected Output:**
   ```
   [Show result]
   ```
   ```

2. **Generate Common Use Case Example**
   ```markdown
   ### Example 2: [Realistic Scenario]

   [Context paragraph explaining when this applies]

   **Prerequisites:**
   - [Any setup needed]

   ```[language]
   [20-50 lines of practical code]
   ```

   **Expected Output:**
   ```
   [Show result]
   ```

   **Explanation:**
   - [Key point 1]
   - [Key point 2]
   ```

3. **Generate Advanced Example (Optional)**
   ```markdown
   ### Example 3: [Advanced Feature]

   [Context for advanced users]

   ```[language]
   [More complex implementation]
   ```
   ```

4. **Validate Examples**
   ```markdown
   For each example, verify:
   - [ ] Complete and self-contained
   - [ ] Tested and working
   - [ ] Expected output shown
   - [ ] Prerequisites stated
   - [ ] Realistic use case
   ```

---

## Validation Procedures

### Procedure 11: YAML Frontmatter Validation

**Objective**: Ensure YAML is syntactically correct and complete

**Steps:**

1. **Read Generated SKILL.md**
   ```markdown
   Use Read tool to read the file
   ```

2. **Extract YAML Section**
   ```markdown
   Lines between opening --- and closing ---
   ```

3. **Validate Structure**
   ```markdown
   Check:
   - [ ] Opening --- on line 1
   - [ ] Closing --- exists
   - [ ] No tabs (only spaces)
   - [ ] Required fields present (name, description)
   - [ ] Field names are lowercase
   - [ ] No syntax errors
   ```

4. **Validate Field Values**
   ```markdown
   name field:
   - [ ] Matches pattern: ^[a-z0-9-]{1,64}$
   - [ ] Matches directory name
   - [ ] Length 1-64 characters

   description field:
   - [ ] Length 1-1024 characters
   - [ ] Includes WHAT clause
   - [ ] Includes WHEN clause

   allowed-tools field (if present):
   - [ ] Valid tool names
   - [ ] Proper casing (Read, Write, Edit, etc.)
   - [ ] Comma-separated
   ```

### Procedure 12: Content Validation

**Objective**: Verify all required sections are present and complete

**Steps:**

1. **Check Required Sections**
   ```markdown
   - [ ] H1 header (# Skill Name)
   - [ ] Instructions section (## Instructions)
   - [ ] Examples section (## Examples)
   - [ ] Minimum 2 examples present
   ```

2. **Validate Instructions**
   ```markdown
   - [ ] Step-by-step format
   - [ ] Clear, actionable directives
   - [ ] Code blocks have language identifiers
   - [ ] Commands explained
   ```

3. **Validate Examples**
   ```markdown
   For each example:
   - [ ] Has descriptive title
   - [ ] Includes context
   - [ ] Shows complete code
   - [ ] Has expected output
   - [ ] Is executable
   ```

4. **Check Optional Sections (if applicable)**
   ```markdown
   If dependencies exist:
   - [ ] Requirements section present
   - [ ] Installation instructions provided

   If troubleshooting added:
   - [ ] Common problems documented
   - [ ] Solutions provided
   ```

### Procedure 13: Security Validation

**Objective**: Ensure skill follows security best practices

**Steps:**

1. **Review Tool Access**
   ```markdown
   - [ ] Tool restrictions appropriate for skill purpose
   - [ ] Read-only skills use: Read, Grep, Glob only
   - [ ] Bash access justified if present
   - [ ] Write/Edit access scoped appropriately
   ```

2. **Check for Vulnerabilities**
   ```markdown
   - [ ] No command injection risks
   - [ ] File paths validated
   - [ ] No hardcoded credentials
   - [ ] User input sanitized
   ```

3. **Validate Script Security (if scripts present)**
   ```markdown
   - [ ] Scripts validated for injection vulnerabilities
   - [ ] Proper error handling
   - [ ] No eval() or exec() of untrusted input
   - [ ] File operations scoped to safe directories
   ```

---

## Post-Generation Procedures

### Procedure 14: File Verification

**Objective**: Confirm all files were created correctly

**Steps:**

1. **Verify File Creation**
   ```bash
   # List all files in skill directory
   ls -la .claude/skills/[skill-name]/

   # Expected for simple structure:
   # - SKILL.md

   # Expected for standard structure:
   # - SKILL.md
   # - reference.md
   # - examples.md

   # Expected for complex structure:
   # - SKILL.md
   # - reference.md
   # - examples.md
   # - scripts/
   # - templates/
   ```

2. **Check File Sizes**
   ```bash
   # Verify SKILL.md is under 50KB
   du -h .claude/skills/[skill-name]/SKILL.md

   # Should show: < 50K
   ```

3. **Verify Permissions (if scripts exist)**
   ```bash
   # Check scripts are executable
   ls -la .claude/skills/[skill-name]/scripts/

   # Should show: -rwxr-xr-x (executable)
   ```

### Procedure 15: Integration Testing

**Objective**: Verify skill integrates with existing skills

**Steps:**

1. **Check for Naming Conflicts**
   ```bash
   # List all skills
   ls .claude/skills/

   # Verify [skill-name] is unique
   ```

2. **Check for Trigger Overlap**
   ```markdown
   Review descriptions of similar skills to ensure:
   - Trigger conditions are distinct
   - No confusion about when to use each skill
   ```

3. **Verify Tool Compatibility**
   ```markdown
   Ensure tool restrictions don't prevent skill from functioning:
   - Required tools are available
   - Tool restrictions align with functionality
   ```

### Procedure 16: User Delivery and Testing Guidance

**Objective**: Provide user with testing instructions and next steps

**Steps:**

1. **Generate Success Message**
   ```markdown
   ═══════════════════════════════════════════════════════
   SKILL GENERATED SUCCESSFULLY
   ═══════════════════════════════════════════════════════

   Name: [skill-name]
   Location: .claude/skills/[skill-name]/SKILL.md
   Structure: [simple/standard/complex]
   File Size: [size]

   ═══════════════════════════════════════════════════════
   ```

2. **Provide Testing Instructions**
   ```markdown
   TESTING INSTRUCTIONS
   ═══════════════════════════════════════════════════════

   To verify the skill activates correctly, try asking:

   1. "[Question matching trigger condition 1]"
      Expected: Claude should use [skill-name] skill

   2. "[Question matching trigger condition 2]"
      Expected: Claude should use [skill-name] skill

   DEBUGGING
   ═══════════════════════════════════════════════════════

   If skill does not activate:
   - Refine description with more specific triggers
   - Run: claude --debug (to see skill loading errors)
   - Verify location: .claude/skills/[skill-name]/SKILL.md
   - Check YAML syntax is valid

   ═══════════════════════════════════════════════════════
   ```

3. **Git Instructions (if project skill)**
   ```markdown
   GIT COMMIT INSTRUCTIONS
   ═══════════════════════════════════════════════════════

   To share this skill with your team:

   ```bash
   git add .claude/skills/[skill-name]
   git commit -m "Add [skill-name] skill for [purpose]"
   git push
   ```

   Team members will receive the skill after: git pull

   ═══════════════════════════════════════════════════════
   ```

---

## Error Handling Procedures

### Procedure 17: Rollback on Failure

**Objective**: Safely rollback failed skill generation

**Steps:**

1. **Remove Generated Files**
   ```bash
   # Remove skill directory
   rm -rf .claude/skills/[skill-name]

   # Verify removal
   ls .claude/skills/ | grep [skill-name]
   # Should return nothing
   ```

2. **Restore from Backup (if overwrite occurred)**
   ```bash
   # Find most recent backup
   LATEST=$(ls -t .claude/skills/[skill-name].backup.* | head -1)

   # Restore backup
   if [ -n "$LATEST" ]; then
     mv "$LATEST" .claude/skills/[skill-name]
     echo "Restored from backup: $LATEST"
   fi
   ```

3. **Verify Rollback**
   ```bash
   # Check state
   ls -la .claude/skills/

   # Confirm skill is removed or restored to previous state
   ```

### Procedure 18: Error Recovery

**Objective**: Handle common errors and retry generation

**Steps:**

1. **YAML Syntax Error**
   ```markdown
   Recovery:
   1. Read generated SKILL.md
   2. Identify YAML error (tabs, missing colon, etc.)
   3. Regenerate SKILL.md with corrected YAML
   4. Validate again using Procedure 11
   ```

2. **Missing Dependencies Error**
   ```markdown
   Recovery:
   1. Document installation in Requirements section
   2. Update SKILL.md with installation instructions
   3. Add to troubleshooting section if common issue
   ```

3. **File Permission Error**
   ```markdown
   Recovery:
   1. Set appropriate permissions:
      chmod +x .claude/skills/[skill-name]/scripts/*.py
   2. Verify ownership
   3. Check parent directory permissions
   ```

4. **Validation Failure**
   ```markdown
   Recovery:
   1. Identify which validation check failed
   2. Fix the specific issue
   3. Re-run validation procedure
   4. If multiple failures, fix iteratively
   ```

---

## Procedure Execution Checklist

When generating a skill, follow these procedures in order:

### Pre-Generation
- [ ] Procedure 1: Requirements Validation
- [ ] Procedure 2: Conflict Detection and Resolution
- [ ] Procedure 3: Dependency Verification

### File Creation
- [ ] Procedure 4: Directory Structure Creation
- [ ] Procedure 5: SKILL.md File Generation
- [ ] Procedure 6: Supporting Files Generation (if needed)
- [ ] Procedure 7: Script and Template Generation (if needed)

### Content Generation
- [ ] Procedure 8: Description Generation
- [ ] Procedure 9: Instruction Generation
- [ ] Procedure 10: Example Generation

### Validation
- [ ] Procedure 11: YAML Frontmatter Validation
- [ ] Procedure 12: Content Validation
- [ ] Procedure 13: Security Validation

### Post-Generation
- [ ] Procedure 14: File Verification
- [ ] Procedure 15: Integration Testing
- [ ] Procedure 16: User Delivery and Testing Guidance

### Error Handling (if needed)
- [ ] Procedure 17: Rollback on Failure
- [ ] Procedure 18: Error Recovery

---

## Summary

Following these procedures ensures consistent, high-quality skill generation. Each procedure includes specific steps, validation criteria, and error handling. Use TodoWrite to track progress through procedures and update status as each completes.
