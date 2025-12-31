# Example Generation Framework

Comprehensive guidelines for creating high-quality, discoverable, and effective examples for Claude Code skills.

## Table of Contents

1. [Example Quality Principles](#example-quality-principles)
2. [Example Structure Standards](#example-structure-standards)
3. [Example Categories](#example-categories)
4. [Example Generation Process](#example-generation-process)
5. [Example Validation](#example-validation)
6. [Common Example Patterns](#common-example-patterns)
7. [Anti-Patterns to Avoid](#anti-patterns-to-avoid)

---

## Example Quality Principles

### Core Quality Criteria

Every example must meet these fundamental criteria:

#### 1. Completeness
- **Self-contained**: Example includes all necessary context and code
- **Executable**: Can be run immediately without modifications
- **Dependencies clear**: Any prerequisites are explicitly stated
- **Results shown**: Expected output or behavior is demonstrated

**Good Example:**
```python
# Complete example: Calculate fibonacci numbers
def fibonacci(n):
    """Calculate the nth fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Usage
result = fibonacci(10)
print(f"The 10th fibonacci number is: {result}")

# Expected Output:
# The 10th fibonacci number is: 55
```

**Bad Example:**
```python
# Incomplete: Missing context and expected output
result = fibonacci(10)
```

#### 2. Relevance
- **Real-world scenarios**: Examples reflect actual use cases
- **Skill-aligned**: Demonstrates core skill functionality
- **User-focused**: Addresses common problems users face
- **Practical**: Shows immediately applicable solutions

#### 3. Clarity
- **Well-commented**: Key steps explained inline
- **Descriptive naming**: Variables and functions have clear names
- **Step-by-step**: Logical progression through the example
- **Formatted properly**: Consistent indentation and style

#### 4. Progressive Complexity
- **Start simple**: Basic examples first
- **Build gradually**: Increase complexity progressively
- **Teach concepts**: Each example introduces new aspects
- **Connect examples**: Later examples build on earlier ones

---

## Example Structure Standards

### Standard Example Format

```markdown
### Example [Number]: [Descriptive Title]

[Context paragraph: When and why to use this example]

**Prerequisites:**
- [Prerequisite 1]
- [Prerequisite 2]

**Code:**
```[language]
[Complete, executable code]
```

**Expected Output:**
```
[Show what the result should be]
```

**Explanation:**
- [Key point 1]: [Explanation]
- [Key point 2]: [Explanation]

**Common Variations:**
- [Variation 1]: [Brief code snippet]
- [Variation 2]: [Brief code snippet]
```

---

## Example Categories

### Category 1: Quick Start Examples

**Purpose**: Get users productive immediately
**Complexity**: Minimal
**Length**: 5-15 lines of code
**Focus**: Core functionality only

### Category 2: Common Use Case Examples

**Purpose**: Demonstrate typical real-world scenarios
**Complexity**: Moderate
**Length**: 20-50 lines of code
**Focus**: Practical, immediately applicable solutions

### Category 3: Advanced Examples

**Purpose**: Show complex capabilities and edge cases
**Complexity**: High
**Length**: 50-100+ lines of code
**Focus**: Advanced features, optimization, integration

### Category 4: Tutorial Examples

**Purpose**: Teach concepts step-by-step
**Complexity**: Varies
**Format**: Multi-step walkthrough
**Focus**: Education and understanding

### Category 5: Troubleshooting Examples

**Purpose**: Help users debug and fix issues
**Format**: Problem → Solution
**Focus**: Common errors and their fixes

---

## Example Generation Process

### Step 1: Identify Example Needs

Analyze skill requirements and determine what examples are necessary to demonstrate functionality effectively.

### Step 2: Define Example Scope

For each example, specify purpose, user level, prerequisites, learning outcomes, and dependencies.

### Step 3: Write Example Code

Follow coding guidelines to create complete, tested, well-commented code with realistic data.

### Step 4: Add Context and Explanation

Provide when, why, what, and how information to give users complete understanding.

### Step 5: Show Expected Results

Document exact output or behavior users should expect.

### Step 6: Add Variations and Extensions

Provide related code snippets showing alternative approaches or extensions.

---

## Example Validation

### Validation Checklist

- [ ] Completeness: All imports, no undefined variables, prerequisites stated
- [ ] Correctness: Code tested and works, output matches documentation
- [ ] Clarity: Purpose clear, comments present, proper formatting
- [ ] Relevance: Demonstrates skill functionality, addresses real use case
- [ ] Usability: Can be copied and run immediately

---

## Common Example Patterns

### Pattern 1: Input → Process → Output
Use for data transformation, file processing, calculations

### Pattern 2: Setup → Configure → Execute
Use for complex configurations, multi-step processes

### Pattern 3: Problem → Solution → Explanation
Use for troubleshooting, debugging, optimization

### Pattern 4: Basic → Intermediate → Advanced
Use for progressive skill building

### Pattern 5: Before → After
Use for refactoring, optimization, improvements

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Incomplete Examples
Missing imports, undefined variables, no output shown

### Anti-Pattern 2: Unrealistic Examples
Using foo/bar instead of meaningful names and scenarios

### Anti-Pattern 3: No Error Handling
Examples that fail on common edge cases

### Anti-Pattern 4: Missing Context
Code without explanation of when or why to use it

### Anti-Pattern 5: Too Much Complexity
Over-engineering simple examples

### Anti-Pattern 6: No Expected Output
Users cannot verify if their implementation works

---

## Example Generation Checklist

### Planning
- [ ] Identified target user level
- [ ] Defined clear learning objective
- [ ] Determined appropriate complexity
- [ ] Listed all prerequisites

### Writing
- [ ] Wrote and tested working code
- [ ] Included all necessary imports
- [ ] Used realistic variable names
- [ ] Added explanatory comments

### Documentation
- [ ] Added clear title
- [ ] Provided context
- [ ] Listed prerequisites
- [ ] Showed complete code
- [ ] Documented expected output

### Validation
- [ ] Tested code executes correctly
- [ ] Verified output matches documentation
- [ ] Checked for security issues
- [ ] Confirmed best practices

---

## Summary

Effective examples require completeness, relevance, clarity, and progressive complexity. Every example must be executable, well-documented, and demonstrate real-world use cases. Quality examples are essential for skill discoverability and user success.
