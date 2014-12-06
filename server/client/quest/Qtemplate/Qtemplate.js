//11/27/2014 7:48 PM
/*jslint node: true, undef:true, sub:true, asi:true, funcscope:true, forin:true, unused:false*//*global True, False, loadAPI*/
/*Go to http://jshint.com/ and copy paste your code to spot syntax errors.*/

'use strict';
var s = loadAPI('v1.0','Qtemplate',{
	name:"Quest Template",
	author:"rc"
});
var m = s.map; var b = s.boss;

/* COMMENT:
This is the default quest template.
*/

s.newVariable({
});

s.newEvent('talkRingo',function(key){ //triggered by talking to ringo. teleport to main
	if(!s.startQuest(key)) return;
	s.teleport(key,'main','t1','solo');
});

s.newMap('main',{
	name:"Super Map",
	lvl:0,
	grid:["0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000"],
	tileset:'v1.2'
},{
	spot:{t3:{x:432,y:432},e1:{x:656,y:432},t2:{x:848,y:432},e4:{x:400,y:688},t1:{x:656,y:688},e2:{x:880,y:688},t4:{x:432,y:880},e3:{x:656,y:880},t5:{x:880,y:880}},
	load:function(spot){
		m.spawnActor(spot.e1,'bat');
	}
});
s.newMapAddon('QfirstTown-main',{
	spot:{t1:{x:1648,y:48},t6:{x:3472,y:48},t2:{x:3472,y:336},s1:{x:1872,y:592},n8:{x:2640,y:560},c:{x:2224,y:624},t3:{x:3472,y:656},n7:{x:1680,y:688},t7:{x:368,y:784},t8:{x:1200,y:816},s5:{x:2480,y:976},s6:{x:3152,y:1136},n2:{x:1168,y:1200},s3:{x:592,y:1360},n1:{x:2096,y:1488},e:{x:1584,y:1520},b2:{x:224,y:1600},q1:{x:1168,y:1648},q4:{x:3056,y:1680},f:{x:1616,y:1744},t5:{x:48,y:1776},n5:{x:464,y:1808},g1:{x:2320,y:1872},b1:{x:2912,y:1920},q2:{x:1072,y:1968},n3:{x:2224,y:2256},n4:{x:1264,y:2288},a:{x:656,y:2416},b:{x:1840,y:2448},q3:{x:1040,y:2480},s2:{x:2096,y:2640},n6:{x:1488,y:2640},s4:{x:1200,y:2928},b3:{x:1216,y:2880},t4:{x:1456,y:3152}},
	load:function(spot){
		m.spawnActor(spot.q1,'npc',{
			name:'Ringo',
			dialogue:'talkRingo',
			sprite:s.newNpc.sprite('skeleton',1),
		});
	}
});

s.exports(exports);
