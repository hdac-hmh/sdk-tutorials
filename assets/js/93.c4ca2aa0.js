(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{695:function(e,a,t){"use strict";t.r(a);var o=t(0),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"migrations-on-chain-upgrades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrations-on-chain-upgrades"}},[e._v("#")]),e._v(" Migrations: on-chain upgrades")]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("Have you ever wondered how an upgrade is done in the Cosmos SDK? Take time to find out how Cosmos SDK migrations are conducted.")]),e._v(" "),t("p",[e._v("The process is orderly; blockchains can be upgraded through a predictable process that reliably avoids forks. Discover the Cosmos comprehensive process that includes governance, data migrations, node upgrades, and more to ensure upgrades proceed smoothly and without service disruption.")]),e._v(" "),t("p",[e._v("To better understand this section, look at the following sections :")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")])],1)])]),e._v(" "),t("p",[e._v("A Cosmos SDK application running on a Cosmos blockchain can be upgraded in an orderly, on-chain fashion.")]),e._v(" "),t("p",[e._v("Upgrading blockchains and blockchain applications is notoriously difficult and risky. The Cosmos SDK solves the common risks and challenges.")]),e._v(" "),t("p",[e._v('Generally, when a blockchain is upgraded it is vital that all nodes upgrade simultaneously and at the same block height. This is difficult to achieve in a disorderly setting. If the nodes do not do so then the blockchain will "fork" into two blockchains with common history: one chain that observes the new rules and one chain that observes the old rules. It is generally not possible for the two chains to reach a common consensus or merge in the future.')]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("Upgrading a live chain without software support for upgrades is risky because all the validators need to pause their state machines at the same block height and apply the upgrade before resuming. If this is not done correctly, there can be state inconsistencies, which are hard to recover from.")])]),e._v(" "),t("p",[e._v("Smart contracts on EVM chains such as Ethereum are immutable software. They are difficult or impossible to change by definition. Various strategies based on modularity can simulate the effects of upgrading the smart contracts but all known methods have inherent limitations. Chief among the limitations are the difficulties, impossibility, or prohibitive costs of re-organizing data at rest. This places a significant limitation on the types of upgrades that are feasible.")]),e._v(" "),t("p",[e._v("A Cosmos SDK blockchain built for a specific application can be upgraded without forks. In the case that a new version of the blockchain application uses a different data layout than exists on the chain, the existing data can be reorganized before the new version of the application comes online. The data migration is defined by the developer and runs in each node quickly and cost-effectively before the node returns to service.")]),e._v(" "),t("h2",{attrs:{id:"process-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process-overview"}},[e._v("#")]),e._v(" Process overview")]),e._v(" "),t("h3",{attrs:{id:"plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plan"}},[e._v("#")]),e._v(" Plan")]),e._v(" "),t("p",[e._v('A "plan" is an upgrade process to take place at a specific block height in the future. It includes a '),t("code",[e._v("SideCar")]),e._v(' (see below) that executes when the upgrade process commences, there is a name of the plan and a block height at which to execute. Acceptance or rejection of the plan is managed through the normal governance process. A "cancel proposal" can be submitted and adopted preventing the plan from executing. Cancellation is contingent on knowing that a given plan is a poor idea before the upgrade happens.')]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Info")]),e._v(" in a plan kicks off the "),t("code",[e._v("SideCar")]),e._v(" process:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"dHlwZSBQbGFuIHN0cnVjdCB7CiAgTmFtZSAgIHN0cmluZwogIEhlaWdodCBpbnQ2NAogIEluZm8gICBzdHJpbmcKfQo="}}),e._v(" "),t("h3",{attrs:{id:"sidecar-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sidecar-process"}},[e._v("#")]),e._v(" "),t("code",[e._v("Sidecar")]),e._v(" process")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("SideCar")]),e._v(" is a binary the nodes can run to attend to processes outside of Cosmos binaries. This can include steps such as downloading and compiling software from a certain commit in a repo.")]),e._v(" "),t("h3",{attrs:{id:"upgradehandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgradehandler"}},[e._v("#")]),e._v(" "),t("code",[e._v("UpgradeHandler")])]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("UpgradeHandler")]),e._v(" may be executed after the "),t("code",[e._v("SideCar")]),e._v(" process is finished and the binary has been upgraded. An upgrade handler attends to on-chain activities that may be necessary before normal processing resumes. An upgrade handler may trigger a "),t("code",[e._v("StoreLoader")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"storeloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storeloader"}},[e._v("#")]),e._v(" "),t("code",[e._v("StoreLoader")])]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("StoreLoader")]),e._v(" prepares the on-chain state for use by the new binary. This can include reorganizing existing data. The node does not resume normal operation until the store loader has returned and the handler has completed its work.")]),e._v(" "),t("h3",{attrs:{id:"proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),t("p",[e._v("Governance uses proposals that are voted on, adopted, or rejected. An upgrade proposal takes the form of accepting or rejecting a plan that is prepared and submitted through governance. Proposals can be withdrawn before execution with cancellation proposals.")]),e._v(" "),t("h2",{attrs:{id:"advantages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages")]),e._v(" "),t("p",[e._v("Coordinated upgrades attend to the challenging process of upgrading blockchain applications and blockchain platforms.")]),e._v(" "),t("p",[e._v("The main advantages of this form of coordinated upgrades are:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Avoidance of forks:")]),e._v(" all validators move together at a pre-determined block height.")]),e._v(" "),t("li",[t("strong",[e._v("Smooth upgrade of binaries:")]),e._v(" the new software is adopted in an automated fashion.")]),e._v(" "),t("li",[t("strong",[e._v("Reorganizing data stores:")]),e._v(" data at rest can be reorganized as needed by processes that are not limited by factors such as a block gas limit.")])]),e._v(" "),t("h2",{attrs:{id:"effect-of-upgrades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#effect-of-upgrades"}},[e._v("#")]),e._v(" Effect of upgrades")]),e._v(" "),t("p",[e._v("Blockchains are paused at the block height of an adopted plan. This initiates the upgrade process. The upgrade process itself may include switching to a new binary that is relatively small to download and install, or it may include an extensive data reorganization process. The validator stops processing blocks until it completes the process in either case. The validator resumes processing blocks when the handler is satisfied with the completeness degree of the upgrade. From a user perspective, this appears as a pause and resumes with the new version.")]),e._v(" "),t("h2",{attrs:{id:"application-specific"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-specific"}},[e._v("#")]),e._v(" Application-specific")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("SideCar")]),e._v(", handler, and store loader are application-specific. At each block, the Cosmos SDK checks for a plan that should be executed before processing block transactions. If none exists, then processing continues as usual. If a plan is scheduled to run, then the Cosmos SDK pauses normal processing and loads the "),t("code",[e._v("SideCar")]),e._v(". When the SideCar is finished it loads the handler and optionally the store loader.")]),e._v(" "),t("p",[e._v("Application developers build implementations of those components that are tailored to their application and use case.")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("For a more detailed explanation of the upgrade process, refer to the "),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor"}},[e._v("#")]),e._v(" Cosmovisor")]),e._v(" "),t("p",[e._v("Cosmovisor is a tool that node operators can use to automate the on-chain processes described above.")]),e._v(" "),t("ul",[t("li",[e._v("Cosmovisor runs as a small wrapper around the Cosmos SDK application binaries.")]),e._v(" "),t("li",[e._v("Cosmovisor watches out for any approved upgrade proposals.")]),e._v(" "),t("li",[e._v("Cosmovisor can download and run the new binary if wanted.")]),e._v(" "),t("li",[e._v("When the chain reaches the upgrade block, Cosmovisor also handles the storage upgrade.")])]),e._v(" "),t("HighlightBox",{attrs:{type:"tip"}},[t("p",[e._v("Take a look at the "),t("a",{attrs:{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation on Cosmovisor"),t("OutboundLink")],1),e._v(" to learn more about this process manager for Cosmos SDK applications.")])]),e._v(" "),t("h2",{attrs:{id:"next-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),t("p",[e._v("You are all caught up on migrations. Have a look at the code samples below or head to the "),t("RouterLink",{attrs:{to:"/academy/2-main-concepts/ibc.html"}},[e._v("next section")]),e._v(" to learn about the Inter-Blockchain Communication Protocol.")],1),e._v(" "),t("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[t("p",[e._v("The code samples you have seen until now were meant to build your checkers blockchain from the ground up. Imagine you have built it from scratch. It has been running in production for some time with games created, played on, won, and lost. Given its success and following player feedback, you decide to introduce leaderboards. In particular:")]),e._v(" "),t("ul",[t("li",[e._v("Any player who has "),t("strong",[e._v("ever")]),e._v(" played should have a tally of games won, lost, drawn, and forfeited.")]),e._v(" "),t("li",[e._v("There should be a leaderboard that lists the players with the most wins, but in limited numbers. For instance only with the top 100 scores.")]),e._v(" "),t("li",[e._v("To increase engagement, the player with the most recent score takes precedence over an "),t("em",[e._v("older")]),e._v(" contender with equal score.")])]),e._v(" "),t("p",[e._v("It is not good enough to introduce a leaderboard for players winning and losing. You want to start with all those that played in the past. You are in luck because all past games and their outcomes have been kept in the chain state. What you now need to do is go through them and update the players with their tallies and add the leaderboard.")]),e._v(" "),t("p",[e._v("Call your existing version v1 and your new one, v2, with the leaderboard to disambiguate.")]),e._v(" "),t("h2",{attrs:{id:"new-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),t("p",[e._v("Of course, you need new data structures for your v2. With Ignite CLI you have:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("A way to store each player's information:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBQbGF5ZXJJbmZvIHsKICAgIHN0cmluZyBpbmRleCA9IDE7IC8vIFRoZSBzdHJpbmdpZmllZCBhZGRyZXNzCiAgICB1aW50NjQgd29uQ291bnQgPSAyOwogICAgdWludDY0IGxvc3RDb3VudCA9IDM7CiAgICB1aW50NjQgZm9yZmVpdGVkQ291bnQgPSA0Owp9Cg=="}})],1),e._v(" "),t("li",[t("p",[e._v("A way to identify a winning player's information in the leaderboard:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBXaW5uaW5nUGxheWVyIHsKICAgIHN0cmluZyBwbGF5ZXJBZGRyZXNzID0gMTsKICAgIHVpbnQ2NCB3b25Db3VudCA9IDI7CiAgICBzdHJpbmcgZGF0ZUFkZGVkID0gMzsKfQo="}}),e._v(" "),t("p",[e._v("Where "),t("code",[e._v("wonCount")]),e._v(" decides the position on the leaderboard and "),t("code",[e._v("dateAdded")]),e._v(" resolves ties for equal "),t("code",[e._v("wonCount")]),e._v(" with the most recent ranking higher.")])],1),e._v(" "),t("li",[t("p",[e._v("Of course a leaderboard as an array of winner information:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"aW1wb3J0ICZxdW90O2NoZWNrZXJzL3dpbm5pbmdfcGxheWVyLnByb3RvJnF1b3Q7OwoKbWVzc2FnZSBMZWFkZXJib2FyZCB7CiAgICByZXBlYXRlZCBXaW5uaW5nUGxheWVyIHdpbm5lcnMgPSAxOwp9Cg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Not to forget that this player information and this leaderboard are stored somewhere in storage and as such you introduce them in the new genesis:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBHZW5lc2lzU3RhdGUgewogICAgLi4uCiAgICByZXBlYXRlZCBQbGF5ZXJJbmZvIHBsYXllckluZm9MaXN0ID0gMzsKICAgIExlYWRlcmJvYXJkIGxlYWRlcmJvYXJkID0gNDsKfQo="}}),e._v(" "),t("p",[e._v("Conceptually, it is the "),t("em",[e._v("new")]),e._v(" genesis because your actual genesis file did not contain any leaderboard.")])],1),e._v(" "),t("li",[t("p",[e._v("And a hard-coded leaderboard length:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgTGVhZGVyYm9hcmRXaW5uZXJMZW5ndGggPSAxMDAKKQo="}})],1)]),e._v(" "),t("h2",{attrs:{id:"leaderboard-on-the-go-updating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leaderboard-on-the-go-updating"}},[e._v("#")]),e._v(" Leaderboard on-the-go updating")]),e._v(" "),t("p",[e._v("You also need to add code to your v2 to update the leaderboard after a game has been determined. It is a lot of array sorting and information adjustment on the previous code.")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("If you want more details on how to update the leaderboard, take a look at "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/"}},[e._v("Run my own chain")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"genesis-migration-preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-migration-preparation"}},[e._v("#")]),e._v(" Genesis migration preparation")]),e._v(" "),t("p",[e._v("With the v2 on-the-go updating of the leaderboard taken care of, attend to past players and place them on the leaderboard. You have to create a new v2 genesis where the leaderboard has been added. First, create a new folder "),t("code",[e._v("x/checkers/migrations/v1tov2")]),e._v(" to handle this part.")]),e._v(" "),t("p",[e._v("Create a new type to make it easier to handle your v1 genesis:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzU3RhdGVWMSBzdHJ1Y3QgewogICAgU3RvcmVkR2FtZUxpc3QgW10qdHlwZXMuU3RvcmVkR2FtZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMixyZXAsbmFtZT1zdG9yZWRHYW1lTGlzdCxwcm90bzMmcXVvdDsganNvbjomcXVvdDtzdG9yZWRHYW1lTGlzdCxvbWl0ZW1wdHkmcXVvdDtgCiAgICBOZXh0R2FtZSAgICAgICAqdHlwZXMuTmV4dEdhbWUgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPW5leHRHYW1lLHByb3RvMyZxdW90OyBqc29uOiZxdW90O25leHRHYW1lLG9taXRlbXB0eSZxdW90O2AKfQo="}}),e._v(" "),t("p",[e._v("It is easy to create as you only need to copy and paste the values of your genesis from a previous commit.")]),e._v(" "),t("h2",{attrs:{id:"past-player-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#past-player-handling"}},[e._v("#")]),e._v(" Past player handling")]),e._v(" "),t("p",[e._v("Now you prepare functions to progressively build the player information given a list of games:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBQb3B1bGF0ZVBsYXllckluZm9zV2l0aChpbmZvU29GYXIgKm1hcFtzdHJpbmddKnR5cGVzLlBsYXllckluZm8sIGdhbWVzICpbXSp0eXBlcy5TdG9yZWRHYW1lKSAoZXJyIGVycm9yKSB7CiAgICBmb3IgXywgZ2FtZSA6PSByYW5nZSAqZ2FtZXMgewogICAgICAgIC8vIEV4dHJhY3Qgd2lubmVyCiAgICAgICAgd2lubmVyQWRkcmVzcywgZXJyID0gZ2FtZS5HZXRSZWRBZGRyZXNzKCkKICAgICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgcmV0dXJuIGVycgogICAgICAgIH0KICAgICAgICBsb3NlckFkZHJlc3MsIGVyciA9IGdhbWUuR2V0QmxhY2tBZGRyZXNzKCkKICAgICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgcmV0dXJuIGVycgogICAgICAgIH0KICAgICAgICBpZiBnYW1lLldpbm5lciA9PSBydWxlcy5SRURfUExBWUVSLkNvbG9yIHsKICAgICAgICAgICAgLy8gQWxyZWFkeSBjb3JyZWN0CiAgICAgICAgfSBlbHNlIGlmIGdhbWUuV2lubmVyID09IHJ1bGVzLkJMQUNLX1BMQVlFUi5Db2xvciB7CiAgICAgICAgICAgIC8vIFN3YXAKICAgICAgICAgICAgd2lubmVyQWRkcmVzcywgbG9zZXJBZGRyZXNzID0gbG9zZXJBZGRyZXNzLCB3aW5uZXJBZGRyZXNzCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gR2FtZSBpcyBzdGlsbCB1bnJlc29sdmVkLgogICAgICAgICAgICBjb250aW51ZQogICAgICAgIH0KICAgICAgICB3aW5uZXJJbmRleCA9IHdpbm5lckFkZHJlc3MuU3RyaW5nKCkKICAgICAgICBsb3NlckluZGV4ID0gbG9zZXJBZGRyZXNzLlN0cmluZygpCiAgICAgICAgd2lubmVySW5mbyA9IGdldE9yTmV3UGxheWVySW5mbyhpbmZvU29GYXIsIHdpbm5lckluZGV4KQogICAgICAgIGxvc2VySW5mbyA9IGdldE9yTmV3UGxheWVySW5mbyhpbmZvU29GYXIsIGxvc2VySW5kZXgpCiAgICAgICAgd2lubmVySW5mby5Xb25Db3VudCArPSAxCiAgICAgICAgbG9zZXJJbmZvLkxvc3RDb3VudCArPSAxCiAgICAgICAgKCppbmZvU29GYXIpW3dpbm5lckluZGV4XSA9IHdpbm5lckluZm8KICAgICAgICAoKmluZm9Tb0ZhcilbbG9zZXJJbmRleF0gPSBsb3NlckluZm8KICAgIH0KfQo="}}),e._v(" "),t("h2",{attrs:{id:"past-leaderboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#past-leaderboard"}},[e._v("#")]),e._v(" Past leaderboard")]),e._v(" "),t("p",[e._v("At some point, the player information is complete and it is possible to create the leaderboard for these past players. It may have to involve the sorting of a very large array. Perhaps it could be done in tranches:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgLy8gQWRqdXN0IHRoaXMgbGVuZ3RoIHRvIG9idGFpbiB0aGUgYmVzdCBwZXJmb3JtYW5jZSBvdmVyIGEgbGFyZ2UgbWFwLgogICAgSW50ZXJtZWRpYXJ5UGxheWVyTGVuZ3RoID0gdHlwZXMuTGVhZGVyYm9hcmRXaW5uZXJMZW5ndGggKiAyCikK"}}),e._v(" "),t("p",[e._v("Then you run through the player information:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBQb3B1bGF0ZUxlYWRlcmJvYXJkV2l0aChsZWFkZXJib2FyZCAqdHlwZXMuTGVhZGVyYm9hcmQsIGFkZGl0aW9uYWxQbGF5ZXJzICptYXBbc3RyaW5nXSp0eXBlcy5QbGF5ZXJJbmZvLCBub3cgdGltZS5UaW1lKSAoZXJyIGVycm9yKSB7CiAgICBwYXJ0aWFsUGxheWVycyA6PSBtYWtlKFtdKnR5cGVzLlBsYXllckluZm8sIEludGVybWVkaWFyeVBsYXllckxlbmd0aCkKICAgIGZvciBfLCBwbGF5ZXJJbmZvIDo9IHJhbmdlICphZGRpdGlvbmFsUGxheWVycyB7CiAgICAgICAgcGFydGlhbFBsYXllcnMgPSBhcHBlbmQocGFydGlhbFBsYXllcnMsIHBsYXllckluZm8pCiAgICAgICAgaWYgbGVuKHBhcnRpYWxQbGF5ZXJzKSAmZ3Q7PSBjYXAocGFydGlhbFBsYXllcnMpIHsKICAgICAgICAgICAgbGVhZGVyYm9hcmQuQWRkQ2FuZGlkYXRlc0FuZFNvcnRBdE5vdyhub3csIHBhcnRpYWxQbGF5ZXJzKQogICAgICAgICAgICBwYXJ0aWFsUGxheWVycyA9IHBhcnRpYWxQbGF5ZXJzWzowXQogICAgICAgIH0KICAgIH0KICAgIGxlYWRlcmJvYXJkLkFkZENhbmRpZGF0ZXNBbmRTb3J0QXROb3cobm93LCBwYXJ0aWFsUGxheWVycykKICAgIHJldHVybiBuaWwKfQo="}}),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("If you want to see more details about the number of helper functions like "),t("code",[e._v("AddCandidatesAndSortAtNow")]),e._v(", head to "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/"}},[e._v("Run my own chain")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"genesis-migration-proper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-migration-proper"}},[e._v("#")]),e._v(" Genesis migration proper")]),e._v(" "),t("p",[e._v("Now that you have all in place migrate the v1 genesis:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZ2VuZXNpc1YxIEdlbmVzaXNTdGF0ZVYxKSBDb252ZXJ0KG5vdyB0aW1lLlRpbWUpIChnZW5lc2lzICp0eXBlcy5HZW5lc2lzU3RhdGUsIGVyciBlcnJvcikgewogICAgcGxheWVySW5mb3MgOj0gbWFrZShtYXBbc3RyaW5nXSp0eXBlcy5QbGF5ZXJJbmZvLCAxMDAwKQogICAgZXJyID0gUG9wdWxhdGVQbGF5ZXJJbmZvc1dpdGgoJmFtcDtwbGF5ZXJJbmZvcywgJmFtcDtnZW5lc2lzVjEuU3RvcmVkR2FtZUxpc3QpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgIH0KICAgIGxlYWRlcmJvYXJkIDo9IENyZWF0ZUxlYWRlcmJvYXJkRm9yR2VuZXNpcygpCiAgICBlcnIgPSBQb3B1bGF0ZUxlYWRlcmJvYXJkV2l0aChsZWFkZXJib2FyZCwgJmFtcDtwbGF5ZXJJbmZvcywgbm93KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIG5pbCwgZXJyCiAgICB9CiAgICByZXR1cm4gJmFtcDt0eXBlcy5HZW5lc2lzU3RhdGV7CiAgICAgICAgTGVhZGVyYm9hcmQ6ICAgIGxlYWRlcmJvYXJkLAogICAgICAgIFBsYXllckluZm9MaXN0OiBQbGF5ZXJJbmZvTWFwVG9MaXN0KCZhbXA7cGxheWVySW5mb3MpLAogICAgICAgIFN0b3JlZEdhbWVMaXN0OiBnZW5lc2lzVjEuU3RvcmVkR2FtZUxpc3QsCiAgICAgICAgTmV4dEdhbWU6ICAgICAgIGdlbmVzaXNWMS5OZXh0R2FtZSwKICAgIH0sIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("Note how "),t("code",[e._v("StoredGameList")]),e._v(" and "),t("code",[e._v("NextGame")]),e._v(" are copied from v1 to v2. Also note that all past players are saved as at "),t("code",[e._v("now")]),e._v(" since the time was not saved in the game when winning. If you decide to use the "),t("code",[e._v("Deadline")]),e._v(", make sure that there are no times in the future.")]),e._v(" "),t("p",[e._v("The migration mechanism helps identify how you can upgrade your blockchain to introduce new features.")])],1)],1)}),[],!1,null,null,null);a.default=s.exports}}]);