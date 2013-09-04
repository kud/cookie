#/bin/sh
node server 3030 &
sleep 1
open http://localhost:3030/test
wait