#!/bin/bash
git status > status_log.txt 2>&1
echo "Status code: $?" >> status_log.txt
ls -l status_log.txt
