# Environment Setup Instructions

This document provides instructions for setting up the development environment for this monorepo project.

## Prerequisites

- Node.js (version 18 or later recommended)
- pnpm package manager
- Docker (for running MCP servers)
- Python 3.10+ (for some MCP server examples)

## Setup Steps

1. **Install Node.js**

   Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **Install pnpm**

   ```bash
   npm install -g pnpm
   ```

3. **Install project dependencies**

   At the root of the repository, run:

   ```bash
   pnpm install
   ```

4. **Run MCP servers**

   Ensure Docker is installed and running. Use the provided MCP server Docker images or npx commands to start the servers as needed.

5. **Running the applications**

   Use the scripts defined in each app's package.json or the root workspace to start development servers or build the projects.

6. **Python environment (optional)**

   For running Python-based MCP server examples, install Python 3.10 or later and create a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

## Additional Notes

- Follow the coding standards and branching strategy as documented.
- Use feature branches and pull requests for all changes.
- Run linting and tests before committing.
