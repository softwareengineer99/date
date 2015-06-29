#!/usr/bin/env node
function date(){
	c=console.log
	day={0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}
	month={0:'January',1:'February',2:'March',3:'April',4:'May',5:'June',6:'July',7:'August',8:'September',9:'October',10:'November',11:'December'}
	d = new Date()
	n=new Object();
	n.date=d.getDate();
	n.month_number=d.getUTCMonth()+1;
	n.month=month[d.getUTCMonth()];
	n.year=d.getFullYear();
	n.day_number=d.getDay();
	n.day=day[d.getDay()];
	n.seconds=d.getSeconds();
	n.milliseconds=d.getMilliseconds();
	n.json=d.toJSON(),
	n.string=d.toDateString(),
	n.gmt=d.toGMTString(),
	n.utc=d.toUTCString(),
	n.locale=d.toLocaleDateString(),
	n.now=Date.now()
	return n //c(n)
}
module.exports=date;
c(date())