(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{713:function(e,t,a){"use strict";a.r(t);var c=a(0),o=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"store-field-record-the-game-winner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-field-record-the-game-winner"}},[e._v("#")]),e._v(" Store Field - Record the Game Winner")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Have Go installed.")]),e._v(" "),a("li",[e._v("The checkers blockchain codebase with the deadline field and its handling. You can get there by following the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-deadline.html"}},[e._v("previous steps")]),e._v(" or checking out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/game-deadline",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("p",[e._v("To be able to terminate games you need to identify games that have already been terminated. A good field to add is one for the "),a("strong",[e._v("winner")]),e._v(". It needs to contain:")]),e._v(" "),a("ul",[a("li",[e._v("The rightful winner of a game that reaches completion.")]),e._v(" "),a("li",[e._v("Or, the winner by forfeit, when a game is expired.")]),e._v(" "),a("li",[e._v("Or a neutral value when the game is active.")])]),e._v(" "),a("p",[e._v("In this exercise a draw is not handled and it would require yet another value to save in "),a("em",[e._v("winner")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("StoredGame")]),e._v(" Protobuf definition file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIHdpbm5lciA9IDExOwp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/proto/checkers/stored_game.proto#L19"}}),e._v(" "),a("p",[e._v("To have Ignite CLI and Protobuf recompile this file use:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}}),e._v(" "),a("p",[e._v("Add a helper function to get the winner's address, if it exists. A good place for it is in "),a("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0UGxheWVyQWRkcmVzcyhjb2xvciBzdHJpbmcpIChhZGRyZXNzIHNkay5BY2NBZGRyZXNzLCBmb3VuZCBib29sLCBlcnIgZXJyb3IpIHsKICAgIHJlZCwgZXJyIDo9IHN0b3JlZEdhbWUuR2V0UmVkQWRkcmVzcygpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBmYWxzZSwgZXJyCiAgICB9CiAgICBibGFjaywgZXJyIDo9IHN0b3JlZEdhbWUuR2V0QmxhY2tBZGRyZXNzKCkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBuaWwsIGZhbHNlLCBlcnIKICAgIH0KICAgIGFkZHJlc3MsIGZvdW5kID0gbWFwW3N0cmluZ11zZGsuQWNjQWRkcmVzc3sKICAgICAgICBydWxlcy5SRURfUExBWUVSLkNvbG9yOiAgIHJlZCwKICAgICAgICBydWxlcy5CTEFDS19QTEFZRVIuQ29sb3I6IGJsYWNrLAogICAgfVtjb2xvcl0KICAgIHJldHVybiBhZGRyZXNzLCBmb3VuZCwgbmlsCn0KCiBmdW5jIChzdG9yZWRHYW1lICpTdG9yZWRHYW1lKSBHZXRXaW5uZXJBZGRyZXNzKCkgKGFkZHJlc3Mgc2RrLkFjY0FkZHJlc3MsIGZvdW5kIGJvb2wsIGVyciBlcnJvcikgewogICAgYWRkcmVzcywgZm91bmQsIGVyciA9IHN0b3JlZEdhbWUuR2V0UGxheWVyQWRkcmVzcyhzdG9yZWRHYW1lLldpbm5lcikKICAgIHJldHVybiBhZGRyZXNzLCBmb3VuZCwgZXJyCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/types/full_game.go#L50-L69"}}),e._v(" "),a("h2",{attrs:{id:"update-and-check-for-the-winner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-and-check-for-the-winner"}},[e._v("#")]),e._v(" Update and check for the winner")]),e._v(" "),a("p",[e._v("This is a two-part update. You set the winner where relevant but you also introduce new checks, so that a game with a winner cannot be acted upon.")]),e._v(" "),a("p",[e._v("Start with a new error that you define as a constant:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"RXJyR2FtZUZpbmlzaGVkID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMTEsICZxdW90O2dhbWUgaXMgYWxyZWFkeSBmaW5pc2hlZCZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/types/errors.go#L22"}}),e._v(" "),a("p",[e._v("Then at creation, in the "),a("em",[e._v("create game")]),e._v(" message handler, you start with a neutral value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCnN0b3JlZEdhbWUgOj0gdHlwZXMuU3RvcmVkR2FtZXsKICAgIC4uLgogICAgV2lubmVyOiAgICBydWxlcy5OT19QTEFZRVIuQ29sb3IsCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/keeper/msg_server_create_game.go#L28"}}),e._v(" "),a("p",[e._v("With further checks when handling a play in the handler:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Check that the game has not finished yet:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgc3RvcmVkR2FtZS5XaW5uZXIgIT0gcnVsZXMuTk9fUExBWUVSLkNvbG9yIHsKICAgIHJldHVybiBuaWwsIHR5cGVzLkVyckdhbWVGaW5pc2hlZAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/keeper/msg_server_play_move.go#L23-L25"}})],1),e._v(" "),a("li",[a("p",[e._v("Update the winner field, which "),a("a",{attrs:{href:"https://github.com/batkinson/checkers-go/blob/a09daeb/checkers/checkers.go#L165",target:"_blank",rel:"noopener noreferrer"}},[e._v("remains neutral"),a("OutboundLink")],1),e._v(" if there is no winner yet:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZS5XaW5uZXIgPSBnYW1lLldpbm5lcigpLkNvbG9yCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/keeper/msg_server_play_move.go#L62"}})],1),e._v(" "),a("li",[a("p",[e._v("Handle the FIFO differently depending on whether the game is finished or not:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgc3RvcmVkR2FtZS5XaW5uZXIgPT0gcnVsZXMuTk9fUExBWUVSLkNvbG9yIHsKICAgIGsuS2VlcGVyLlNlbmRUb0ZpZm9UYWlsKGN0eCwgJmFtcDtzdG9yZWRHYW1lLCAmYW1wO25leHRHYW1lKQp9IGVsc2UgewogICAgay5LZWVwZXIuUmVtb3ZlRnJvbUZpZm8oY3R4LCAmYW1wO3N0b3JlZEdhbWUsICZhbXA7bmV4dEdhbWUpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/keeper/msg_server_play_move.go#L69-L73"}})],1)]),e._v(" "),a("p",[e._v("Just in case, when rejecting a game, in its handler:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgc3RvcmVkR2FtZS5XaW5uZXIgIT0gcnVsZXMuTk9fUExBWUVSLkNvbG9yIHsKICAgIHJldHVybiBuaWwsIHR5cGVzLkVyckdhbWVGaW5pc2hlZAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/e50ceaedb52cbbb2e802a1c887657cdc8f52f25b/x/checkers/keeper/msg_server_reject_game.go#L21-L23"}}),e._v(" "),a("p",[e._v("Confirm the code compiles and you are ready to handle the expiration of games.")]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("You have introduced a "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-fifo.html"}},[e._v("game FIFO")]),e._v(", a "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-deadline.html"}},[e._v("game deadline")]),e._v(", and a game winner. Time to turn your attention to the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-forfeit.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);