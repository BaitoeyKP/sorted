# sorted
Merge three integer arrays into a single sorted ascending array **without using any built-in sort function.**

## Problem Statement
Given three integer arrays with specific ordering constraints:

| Array | Order | Example |
|-------|-------|---------|
| `collection_1` | Ascending | `[1, 3, 5]` |
| `collection_2` | Descending | `[9, 6, 2]` |
| `collection_3` | Ascending | `[2, 4, 8]` |

Produce a single array containing all elements in ascending order: `[1, 2, 2, 3, 4, 5, 6, 8, 9]`

## Approach

The `merge` function uses a **3-pointer merge technique (O(n)):**

- Pointer `i` walks `collection_1` **forward** (already ascending)
- Pointer `j` walks `collection_2` **backward** (descending → reads ascending from the tail)
- Pointer `k` walks `collection_3` **forward** (already ascending)

At each step:
- Compare current values
- Push the smallest into the result
- Move the corresponding pointer
- No sorting is used at any point

## Requirements
- Node.js >= 16
- npm >= 8


## Setup
```bash
# 1. Clone the repository
git clone https://github.com/BaitoeyKP/sorted
cd sorted

# 2. Install dependencies
npm install
```

## Installation
```bash
npm install
```


## Usage
### Interactive CLI
```bash
npm start
```

### Build
Compile TypeScript to `dist/`:
```bash
npm run build
```

## Testing
```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage
```

## Tech Stack

| Tool | Version |
|------|---------|
| TypeScript | ^5.4 |
| Jest + ts-jest | ^29 |
| ts-node | ^10.9 |
