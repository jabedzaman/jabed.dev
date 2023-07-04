#!/bin/bash

# clean all .turbo
find . -name ".turbo" -type d -prune -exec rm -rf '{}' \;

# clean all node_modules
find . -name "node_modules" -type d -prune -exec rm -rf '{}' \;

# clean all .DS_Store
find . -name ".DS_Store" -type f -delete

# clean all .log
find . -name "*.log" -type f -delete
find . -name "*.log.*" -type f -delete
find . -name "*.log" -type f -delete

# clean all build
find . -name "build" -type d -prune -exec rm -rf '{}' \;

# clean all .cache
find . -name ".cache" -type d -prune -exec rm -rf '{}' \;

# clean all .next
find . -name ".next" -type d -prune -exec rm -rf '{}' \;

# clean all .contentlayer
find . -name ".contentlayer" -type d -prune -exec rm -rf '{}' \;

# clean all next-env.d.ts
find . -name "next-env.d.ts" -type f -delete
