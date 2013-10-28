var mocha = require('mocha'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

var ac = require('../index').init();

describe('apiUrl', function(){
    describe('#check()', function(){
        it('should return true for a correct apiUrl', function(done){
            ac.apiUrl.check(function (state) {
                state.should.equal(true);
                done();
            });
        });
        it('should return false for a made up apiUrl', function(done){
            process.env['API_URL'] = 'http://wrongurl.com';
            ac.apiUrl.check(function (state) {
                state.should.equal(false);
                done();
            });
        });
        it('should return false for an incorrect apiUrl', function(done){
            process.env['API_URL'] = 'http://google.com';
            ac.apiUrl.check(function (state) {
                state.should.equal(false);
                done();
            });
        });
    });
});