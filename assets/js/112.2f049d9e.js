(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{714:function(e,a,t){"use strict";t.r(a);var s=t(0),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"gas-incentivize-players"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gas-incentivize-players"}},[e._v("#")]),e._v(" Gas - Incentivize Players")]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),t("ul",[t("li",[e._v("You understand the concept of gas.")]),e._v(" "),t("li",[e._v("Have Go installed.")]),e._v(" "),t("li",[e._v("The checkers blockchain codebase with the game wager and its handling. You can get there by following the "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-wager.html"}},[e._v("previous steps")]),e._v(" or checking out the "),t("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/game-wager",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),t("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),t("p",[e._v("Players can start playing checkers with your Cosmos blockchain. Transaction fees are paid by players themselves, at least the fee related to transporting the serialized bytes and the other gas-metered parts like "),t("code",[e._v("bank")]),e._v(".")]),e._v(" "),t("p",[e._v("Next add your own gas metering to reflect the costs that different transactions impose or you can add costs to discourage spam.")]),e._v(" "),t("h2",{attrs:{id:"new-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-data"}},[e._v("#")]),e._v(" New data")]),e._v(" "),t("p",[e._v("These values are an inspiration but you can set your own. Save them as new constants:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgQ3JlYXRlR2FtZUdhcyA9IDEwCiAgICBQbGF5TW92ZUdhcyAgID0gMTAKICAgIFJlamVjdEdhbWVHYXMgPSAwCikK"}}),e._v(" "),t("h2",{attrs:{id:"add-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-handling"}},[e._v("#")]),e._v(" Add handling")]),e._v(" "),t("p",[e._v("Add a line that consumes the designated amount of gas in each relevant handler:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("When handling a game creation:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5DcmVhdGVHYW1lR2FzLCAmcXVvdDtDcmVhdGUgZ2FtZSZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/76abedcf3ad3f4e5186435e153e6ed0d18630a73/x/checkers/keeper/msg_server_create_game.go#L41"}})],1),e._v(" "),t("li",[t("p",[e._v("When handling a move:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5QbGF5TW92ZUdhcywgJnF1b3Q7UGxheSBhIG1vdmUmcXVvdDspCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/76abedcf3ad3f4e5186435e153e6ed0d18630a73/x/checkers/keeper/msg_server_play_move.go#L90"}})],1),e._v(" "),t("li",[t("p",[e._v("When handling a game rejection:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5SZWplY3RHYW1lR2FzLCAmcXVvdDtSZWplY3QgZ2FtZSZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/76abedcf3ad3f4e5186435e153e6ed0d18630a73/x/checkers/keeper/msg_server_reject_game.go#L52"}})],1)]),e._v(" "),t("p",[e._v("You don't meter gas in your "),t("code",[e._v("EndBlock")]),e._v(" handler because it is called by a player sending a transaction. It is instead a service rendered by the network. If you want to account for the gas cost of an expiration, you have to devise a way to pre-collect it as part of the other messages.")]),e._v(" "),t("HighlightBox",{attrs:{type:"tip"}},[t("p",[e._v("Avoid calling "),t("code",[e._v("ConsumeGas")]),e._v(" from within a loop. If you know the number of times your code loops, consume all the gas ahead of the loop. With this trick the transaction may run out of gas as if you had run the steps if the signer had not sent enough gas. This strategy saves computations on your node.")])]),e._v(" "),t("h2",{attrs:{id:"next-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),t("p",[e._v("Make your checkers blockchain more user-friendly by helping players avoid bad transactions via a query that tests a move. Just follow the exercise in the "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/can-play.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);