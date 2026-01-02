#!/bin/bash

echo "==================================="
echo "DIAGNOSTIC SCRIPT FOR MODULE RESOLUTION"
echo "==================================="
echo ""

cd /Users/yasmin/Projects/micro-frontend-demo

echo "1. Checking tsconfig.base.json paths..."
echo "-----------------------------------"
cat tsconfig.base.json | grep -A 5 "paths"
echo ""

echo "2. Checking if main index.ts exists..."
echo "-----------------------------------"
if [ -f "libs/shared/src/index.ts" ]; then
  echo "✅ libs/shared/src/index.ts EXISTS"
  echo "Contents:"
  cat libs/shared/src/index.ts
else
  echo "❌ libs/shared/src/index.ts DOES NOT EXIST"
fi
echo ""

echo "3. Checking Button component..."
echo "-----------------------------------"
if [ -f "libs/shared/src/components/Button/index.tsx" ]; then
  echo "✅ Button component EXISTS"
  echo "First 10 lines:"
  head -10 libs/shared/src/components/Button/index.tsx
else
  echo "❌ Button component DOES NOT EXIST"
fi
echo ""

echo "4. Checking package.json in shared library..."
echo "-----------------------------------"
if [ -f "libs/shared/package.json" ]; then
  echo "✅ libs/shared/package.json EXISTS"
  cat libs/shared/package.json | grep -A 2 "name"
else
  echo "❌ libs/shared/package.json DOES NOT EXIST"
fi
echo ""

echo "5. Checking products app tsconfig..."
echo "-----------------------------------"
if [ -f "apps/products/tsconfig.json" ]; then
  echo "✅ apps/products/tsconfig.json EXISTS"
  cat apps/products/tsconfig.json | grep -A 2 "extends"
else
  echo "❌ apps/products/tsconfig.json DOES NOT EXIST"
fi
echo ""

echo "6. Checking how products app imports..."
echo "-----------------------------------"
if [ -f "apps/products/src/app/app.tsx" ]; then
  echo "✅ apps/products/src/app/app.tsx EXISTS"
  echo "Import lines:"
  grep "import.*yasmin" apps/products/src/app/app.tsx
else
  echo "❌ apps/products/src/app/app.tsx DOES NOT EXIST"
fi
echo ""

echo "7. Checking directory structure..."
echo "-----------------------------------"
echo "libs/shared structure:"
find libs/shared -type f -name "*.ts*" | head -20
echo ""

echo "8. Checking if it's 'product' or 'products'..."
echo "-----------------------------------"
ls -d apps/product* 2>/dev/null
echo ""

echo "==================================="
echo "DIAGNOSTIC COMPLETE"
echo "==================================="