var assert = require('chai').assert,
    http = require('http');

describe('API Test', function () {
  var urls = [
    "http://finance.google.com/finance/info?client=ig&q=NSE:PYPL",
    "http://finance.google.com/finance/info?client=ig&q=NSE:EBAY",
    "http://finance.google.com/finance/info?client=ig&q=NSE:PP"
  ];
  
  urls.forEach(function(url, index) {
    it('response should contain l ' + url, function (done) {
      http.get(url, function (res) {
        assert.equal(200, res.statusCode);
        var data = '';

        res.on('data', function (chunk) {
          data += chunk;
        });

        res.on('end', function () {
          var parsedData = JSON.parse(data.replace("//", ""));
          assert.property(parsedData[0], 'l');
          done();
        });
      });
    });
  });
  
  var sumurls = [
    "http://finance.google.com/finance/info?client=ig&q=NSE:PYPL",
    "http://finance.google.com/finance/info?client=ig&q=NSE:EBAY"
  ];
  var sum = 0;
  var expectedSum = 77.26;
  
  sumurls.forEach(function(url, index) {
    http.get(url, function (res) {
      assert.equal(200, res.statusCode);
      var data = '';

      res.on('data', function (chunk) {
          data += chunk;
      });

      res.on('end', function () {
        var parsedData = JSON.parse(data.replace("//", ""));
        sum += Number(parsedData[0].l);
      });
    });
  });
    
  it('response sum should match ' + expectedSum, function (done) {
    assert.equal(expectedSum, sum);
    done();
  });

});
