install:
	chmod +x ./server/start.sh
	npm install
	make build tests
build:
	./node_modules/uglify-js/bin/uglifyjs -m -o cookie.min.js cookie.js
tests: 
	./server/start.sh