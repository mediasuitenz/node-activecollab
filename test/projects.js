var mocha = require('mocha'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect;

var ac = require('../activecollab').init();

describe('projects', function(){
    describe('#projects()', function(){
        it('should return a list of projects', function(done){
            ac.projects(function (projects) {
                projects.length.should.be.above(1);
                done();
            });
        });
        it('should return non archived projects', function(done){
            ac.projects(function (projects) {
                projects[0].state.should.equal(3);
                done();
            });
        });
    });
    describe('#projects.archived()', function(){
        it('should return a list of projects', function(done){
            ac.projects.archived(function (projects) {
                projects.length.should.be.above(1);
                done();
            });
        });
        it('should return archived projects', function(done){
            ac.projects.archived(function (projects) {
                projects[0].state.should.equal(2);
                done();
            });
        });
    });
    describe('#project(:id)', function(){
        it('should return a single project by id', function(done){
            ac.project(114, function (project) {
                project.class.should.equal('Project');
                done();
            });
        });
    });
    describe('#project(:id).hourlyRates()', function(){
        it('should return a list of hourly rates for a project', function(done){
            ac.project(114).hourlyRates(function (rates) {
                rates[0].name.should.be.a('string');
                rates[0].default_hourly_rate.should.be.a('number');
                done();
            });
        });
    });
    describe('#project(:id).edit()', function(){
        it('should exist and be a function', function(done){
            ac.project(114).edit.should.be.a('function');
            done();
        });
    });
});