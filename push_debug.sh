#!/bin/bash
echo "--- DEBUG START ---"
pwd
echo "--- GIT STATUS ---"
git status
echo "--- GIT ADD ---"
git add .
echo "--- GIT COMMIT ---"
git commit -m "Fix mobile styling and scroll indicators"
echo "--- GIT PUSH ---"
git push origin main
echo "--- DEBUG END ---"
