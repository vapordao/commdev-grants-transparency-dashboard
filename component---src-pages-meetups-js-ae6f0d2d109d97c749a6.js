(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{tXjE:function(e,t,a){"use strict";a.r(t);var n,r=a("vOnD"),o=a("q1tI"),l=a.n(o),u=a("1zJl"),s=a("53LN"),m=(a("rGqo"),a("yt8O"),a("Btvt"),a("hhXQ"),a("GwoJ")),i=a("f199"),c=a("k/Sf"),p=a("Al62"),d=i.meetups[0],b={datasets:[{data:[d.totalNumberMeetups,d.applicationsSubmitted],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},h={datasets:[{data:[d.averageNumberMeetupsPerMonthThisYear,d.averageNumberAttendeesPerMonthThisYear],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},g={datasets:[{data:[d.totalNumberUniqueHosts,d.totalNumberRepeatHosts],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},E={totalMoneyDispersed:Object(p.b)(d.totalMoneyDispersed),totalNumberMeetups:d.totalNumberMeetups,totalNumberUniqueHosts:d.totalNumberUniqueHosts,totalNumberRepeatHosts:d.totalNumberRepeatHosts,totalNumberCountries:d.totalNumberCountries,totalNumberPresentations:d.totalNumberPresentations,totalNumberReportedAttendees:Object(p.b)(d.totalNumberReportedAttendees),averageNumberAttendeesPerMonthThisYear:d.averageNumberAttendeesPerMonthThisYear,averageNumberMeetupsPerMonthThisYear:d.averageNumberMeetupsPerMonthThisYear,applicationsSubmitted:d.applicationsSubmitted,nMeetupsByRegion:(n={},Object.values(c.region).map((function(e){n[e]=d.regionMeetupsCount[e]})),n),roiPerAttendee:Object(p.b)(d.totalMoneyDispersed/d.totalNumberReportedAttendees),totalMeetupsAppsSubmittedDoughnut:b,avgMeetupsAttendeesDoughnut:h,uniqueHostsRepeatHostsDoughnut:g};function f(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n            flex-direction: row;\n          "]);return f=function(){return e},e}console.log(E.nMeetupsByRegion);var M=Object(r.c)(s.a.Country).withConfig({displayName:"MeetupCountries__MeetupCountry",componentId:"sc-1vwrrzk-0"})(["&&{margin:0rem 2rem 0rem 2rem;}"]),k=function(){return l.a.createElement(s.a.Row.Overflow,{gridColumn:"2 / -1"},Object.values(m.region).filter((function(e){return E.nMeetupsByRegion[e]>0})).map((function(e){return l.a.createElement(A,{key:e,country:e,bottomSpaced:!0,number:E.nMeetupsByRegion[e]})})))},A=Object(r.c)(M)(f()),v=a("e8ea"),N=a("lc0z"),w=a("xBMw");function C(){var e=D(["\n              transform: rotate(-235deg);\n            "]);return C=function(){return e},e}function B(){var e=D(["\n              transform: rotate(-165deg);\n            "]);return B=function(){return e},e}function y(){var e=D(["\n              transform: rotate(-95deg);\n            "]);return y=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),e.raw=t,e}var R=E.totalMeetupsAppsSubmittedDoughnut,O=E.avgMeetupsAttendeesDoughnut,H=E.uniqueHostsRepeatHostsDoughnut,j=Object(r.c)(s.a.Section).withConfig({displayName:"meetups__MeetupsSection",componentId:"ktk5tq-0"})(["&&{padding-top:3rem;}"]),P=(t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Title,null,"MakerDAO Community - Development Grants"),l.a.createElement(v.e,null,"We've brought together"," ",l.a.createElement(v.f,null,E.totalNumberReportedAttendees)," ","people in"," ",l.a.createElement(v.f,null,E.totalNumberCountries)," ","countries since February 2018."),l.a.createElement(v.d,null,"MakerDAO’s Core Community Development Initiative supports virtual and physical meetups to help anyone interested learn about Ethereum, DeFi, and MakerDAO."),l.a.createElement(j,null,l.a.createElement(s.a.Row,{singleColumn:!0},l.a.createElement(s.a,{number:E.totalNumberCountries,description:"Total Countries With Meetups"}),l.a.createElement(k,null)),l.a.createElement(s.a.Row,null,l.a.createElement(s.a,{number:E.totalMoneyDispersed,description:"Total Dai Dispersed"}),l.a.createElement(s.a,{number:E.totalNumberReportedAttendees,description:"Total Attendees"}),l.a.createElement(s.a,{number:E.roiPerAttendee,description:"Dai Spent Per Attendee"})),l.a.createElement(s.a.Row,null,l.a.createElement(s.a,{number:E.averageNumberMeetupsPerMonthThisYear,description:"Avg. Meetups per Month"}),l.a.createElement(P,{data:O,width:200,height:200,options:{maintainAspectRatio:!0,responsive:!0}}),l.a.createElement(s.a,{number:E.averageNumberAttendeesPerMonthThisYear,colorOrange:!0,description:"Avg. Attendees per Month"})),l.a.createElement(s.a.Row,null,l.a.createElement(s.a,{number:E.totalNumberMeetups,description:"Total Meetups"}),l.a.createElement(S,{data:R,width:200,height:200,options:{maintainAspectRatio:!0,responsive:!0}}),l.a.createElement(s.a,{colorOrange:!0,number:E.applicationsSubmitted,description:"Meetup Applications Submitted"})),l.a.createElement(s.a.Row,{justifyContent:"center"},l.a.createElement(s.a,{number:E.totalNumberUniqueHosts,description:"Number of Unique Hosts"}),l.a.createElement(T,{data:H,width:200,height:200,options:{maintainAspectRatio:!0,responsive:!0}}),l.a.createElement(s.a,{number:E.totalNumberRepeatHosts,colorOrange:!0,description:"Number of Repeat Hosts"}))),l.a.createElement(w.l,{name:"Footer"},l.a.createElement(w.a,null),l.a.createElement(w.j,{columnLeft:!0},l.a.createElement(w.b,null,l.a.createElement(w.d,{noBackground:!0},l.a.createElement(w.k,{href:"https://community-development.makerdao.com/meetups",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.h,{noBackground:!0},l.a.createElement(N.a,{colorMakerBlue:"true",labelContent:"How can I get a meetup grant?"}),"Get up to speed on how to host a meetup and receive funding to help cover the costs.")),l.a.createElement(w.k,{href:"https://community-development.makerdao.com/meetups/faq",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.h,{noBackground:!0},l.a.createElement(N.a,{colorMakerBlue:"true",labelContent:"Questions about the meetup grants program?"}),"Visit the Meetup Grants FAQ")),l.a.createElement(w.k,{href:"https://awesome.makerdao.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.h,{noBackground:!0},l.a.createElement(N.a,{colorMakerBlue:"true",labelContent:"New to Maker?"}),"View a list of educational resources.")),l.a.createElement(w.k,{href:"https://forum.makerdao.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.h,{noBackground:!0},l.a.createElement(N.a,{colorMakerBlue:"true",labelContent:"Meet the community"}),"Join the official Maker forum.")),l.a.createElement(w.k,{href:"https://community-development.makerdao.com/meetups/getting-started-guide",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.h,{noBackground:!0},l.a.createElement(N.a,{colorMakerBlue:"true",labelContent:"Looking for guidance?"}),"View our meetup guides."))))),l.a.createElement(w.j,null,l.a.createElement(w.b,{hero:!0},l.a.createElement(w.f,null,l.a.createElement(w.i,null,"APPLY"),l.a.createElement(w.c,null,"Complete the Maker Meetup application form."),l.a.createElement(w.c,null,"Some questions we'll ask you are:")),l.a.createElement(w.g,null,"→ Your goals for the event"),l.a.createElement(w.g,null,"→ How does it align with the MakerDAO principles?"),l.a.createElement(w.g,null,"→ What's your meetup agenda"),l.a.createElement(w.g,null,"→ Do you plan to monetize the event?"),l.a.createElement(w.e,{applyCardFooter:!0},"↗ Complete the Maker Meetups",l.a.createElement(w.k,{inlineLink:!0,href:"https://airtable.com/shr4HOtcZ8o3VZmek",target:"_blank"},"application form."))),l.a.createElement(w.b,null,l.a.createElement(w.d,null,l.a.createElement(w.g,{noBackground:!0},l.a.createElement(N.a,{labelContent:"Due to the large number of submissions, please expect a response within 2-3 weeks."})))))))},Object(r.c)(s.a.DoughnutChart)(y())),S=Object(r.c)(s.a.DoughnutChart)(B()),T=Object(r.c)(s.a.DoughnutChart)(C())}}]);
//# sourceMappingURL=component---src-pages-meetups-js-ae6f0d2d109d97c749a6.js.map