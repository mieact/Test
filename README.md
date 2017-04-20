# API Tests 

# node v6.9.4 or higher must be installed
node$ node -v

v6.9.4

# Install Mocha and Chai
npm install mocha

npm install chai

# Execute the tests
./node_modules/mocha/bin/mocha

# Sample Ouput
# Server returns 400 for GET request http://finance.google.com/finance/info?client=ig&q=NSE:PP
# Asserting sum of the values(expected value set to 77.15) will mostly fail as well when it is executed because the quotes are dynamic and will change constantly.

node$ ./node_modules/mocha/bin/mocha 


  API Test
    ✓ response should contain l http://finance.google.com/finance/info?client=ig&q=NSE:PYPL (195ms)
    ✓ response should contain l http://finance.google.com/finance/info?client=ig&q=NSE:EBAY (105ms)
    1) response should contain l http://finance.google.com/finance/info?client=ig&q=NSE:PP
    ✓ response sum should match 77.15


  3 passing (477ms)
  1 failing

  1) API Test response should contain l http://finance.google.com/finance/info?client=ig&q=NSE:PP:
     Uncaught AssertionError: expected 200 to equal 400
      at ClientRequest.<anonymous> (test/test.js:14:16)
      at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:474:21)
      at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23)
      at Socket.socketOnData (_http_client.js:363:20)
      at readableAddChunk (_stream_readable.js:176:18)
      at Socket.Readable.push (_stream_readable.js:134:10)
      at TCP.onread (net.js:548:20)
