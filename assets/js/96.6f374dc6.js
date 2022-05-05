(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{698:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"protobuf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("Protobuf is a data serialization method. Developers use it to describe message formats. There is a lot of internal communication within a Cosmos application and Protobuf is central to how communication is done.")]),e._v(" "),o("p",[e._v("Before diving into the section a look at the following sections is recommended:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/modules.html"}},[e._v("Modules")])],1)]),e._v(" "),o("p",[e._v("You can find a code example for your checkers blockchain at the end of the section to dive further into Protobuf and message creation.")])]),e._v(" "),o("p",[e._v("Protocol Buffers (Protobuf) is an open-source, extensible, cross-platform, and language-agnostic method of serializing object data primarily for network communication and storage. Libraries for multiple languages parse a common interface description language to generate source code for encoding and decoding streams of bytes representing structured data.")]),e._v(" "),o("p",[e._v("Originally designed and developed by Google, Protobuf has been an open-source project since 2008. It serves as a basis for Remote Procedure Call (RPC) systems.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Google provides the "),o("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC project"),o("OutboundLink")],1),e._v(". This universal RPC framework supports Protobuf directly. For more information on the process, take a look at the section entitled "),o("code",[e._v("Compiler Invocation")]),e._v(".")])]),e._v(" "),o("p",[o("code",[e._v(".proto")]),e._v(" files contain data structures called messages. The compiler "),o("code",[e._v("protoc")]),e._v(" interprets the "),o("code",[e._v(".proto")]),e._v(" file and generates source code in supported languages - C++, C#, Dart, Go, Java, and Python.")]),e._v(" "),o("h3",{attrs:{id:"working-with-protocol-buffers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-protocol-buffers"}},[e._v("#")]),e._v(" Working with Protocol Buffers")]),e._v(" "),o("p",[e._v("Define a data structure in a "),o("code",[e._v(".proto")]),e._v(" file. This is a normal text file with descriptive syntax. Data is represented as a message containing name-value pairs called fields.")]),e._v(" "),o("p",[e._v("Then, compile your Protobuf schema. "),o("code",[e._v(".protoc")]),e._v(" generates data access classes with accessors for each field in your preferred language according to the command-line options. Accessors include serializing, deserializing, and parsing.")]),e._v(" "),o("h2",{attrs:{id:"protobuf-basics-for-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-basics-for-go"}},[e._v("#")]),e._v(" Protobuf basics for Go")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://golang.org/pkg/encoding/gob/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gobs"),o("OutboundLink")],1),e._v(" package for Go is a comprehensive package for the Go environment. It does not work well if you need to share information with applications written in other languages. How to contend with fields that may themselves contain information needing to be parsed or encoded is another challenge.")]),e._v(" "),o("p",[e._v("For example, a JSON or XML object may contain discrete fields that are stored in a string field. In another example, a time may be stored as two integers representing hours and minutes. Protobuf encapsulates the necessary conversions in both directions. The generated classes provide getters and setters for the fields and take care of the details for reading and writing the message as a unit.")]),e._v(" "),o("p",[e._v("The Protobuf format supports extending the format over time in a way that code can still read data encoded in the old format.")]),e._v(" "),o("p",[e._v("Go developers access the setters and getters in the generated source code through the Go Protobuf API.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("For more on encoding in Cosmos, take a peek at "),o("a",{attrs:{href:"https://docs.cosmos.network/main/core/encoding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Cosmos SDK documentation on encoding"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Here you can find the "),o("a",{attrs:{href:"https://docs.cosmos.network/main/core/proto-docs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf documentation overview"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),o("p",[e._v("gRPC can use Protobuf as both its interface definition language and as its underlying message interchange format. A client can directly call a method on a server application on a different machine with gRPC as if it were a local object.")]),e._v(" "),o("p",[e._v("gRPC is based on the idea of defining a service and specifying the methods that can be called remotely with their parameters and return types. Keep the following in mind regarding the gRPC clients and server sides:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Server side.")]),e._v(" The server implements this interface and runs a gRPC server to handle client calls.")]),e._v(" "),o("li",[o("strong",[e._v("Client side.")]),e._v(" The client has a stub referred to as just a client in some languages that provides the same methods as the server.")])]),e._v(" "),o("p",[e._v("gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own desktop - and can be written in any of the gRPC’s supported languages. For example, you can easily create a gRPC server in Java with clients in Go, Python, or Ruby.")]),e._v(" "),o("p",[e._v("The latest Google APIs will have gRPC versions of their interfaces, letting you easily build Google functionality into your applications.")]),e._v(" "),o("h2",{attrs:{id:"types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),o("p",[e._v("The core of a Cosmos SDK application mainly consists of type definitions and constructor functions. Defined in "),o("code",[e._v("app.go")]),e._v(", the type definition of a custom application is simply a "),o("code",[e._v("struct")]),e._v(" comprised of the following:")]),e._v(" "),o("ul",[o("li",[e._v("Reference to "),o("strong",[o("code",[e._v("BaseApp")])]),e._v(": a reference to the "),o("code",[e._v("BaseApp")]),e._v(" defines a custom application type embedding "),o("code",[e._v("BaseApp")]),e._v(" for your application. The reference to "),o("code",[e._v("BaseApp")]),e._v(" allows the custom application to inherit most of "),o("code",[e._v("BaseApp")]),e._v("'s core logic such as ABCI methods and the routing logic.")]),e._v(" "),o("li",[e._v("List of "),o("strong",[e._v("store keys")]),e._v(": each module in the Cosmos SDK uses a multistore to persist their part of the state. Access to such stores requires a list of keys that are declared in the type definition of the app.")]),e._v(" "),o("li",[e._v("List of each module's "),o("strong",[e._v("keepers")]),e._v(": a keeper is an abstract piece in each module to handle the module's interaction with stores, specify references to other modules' keepers, and implement other core functionalities of the module. For cross-module interactions to work, all modules in the Cosmos SDK need to have their keepers declared in the application's type definition and exported as interfaces to other modules so that the keeper's methods of one module can be called and accessed in other modules when authorized.")]),e._v(" "),o("li",[e._v("Reference to "),o("strong",[e._v("codec")]),e._v(": defaulted to go-amino, the codec in your Cosmos SDK application can be substituted with other suitable encoding frameworks as long as they persist data stores in byte slices and are deterministic.")]),e._v(" "),o("li",[e._v("Reference to the "),o("strong",[e._v("module manager")]),e._v(": a reference to an object containing a list of the applications modules known as the module manager.")])]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Show me some code for my checkers' blockchain"}},[o("p",[e._v("In the previous code samples, you saw something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdG9yZWRHYW1lIHN0cnVjdCB7CiAgICBDcmVhdG9yIHN0cmluZwogICAgSW5kZXggc3RyaW5nIC8vIFRoZSB1bmlxdWUgaWQgdGhhdCBpZGVudGlmaWVzIHRoaXMgZ2FtZS4KICAgIEdhbWUgc3RyaW5nIC8vIFRoZSBzZXJpYWxpemVkIGJvYXJkLgogICAgVHVybiBzdHJpbmcgLy8gJnF1b3Q7cmVkJnF1b3Q7IG9yICZxdW90O2JsYWNrJnF1b3Q7CiAgICBSZWQgc3RyaW5nCiAgICBCbGFjayBzdHJpbmcKICAgIFdhZ2VyIHVpbnQ2NAp9Cg=="}}),e._v(" "),o("p",[e._v("With a "),o("em",[e._v("helpful")]),e._v(" note telling you that you still need to add serialization information like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdG9yZWRHYW1lIHN0cnVjdCB7CiAgICBDcmVhdG9yIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1jcmVhdG9yLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2NyZWF0b3Isb21pdGVtcHR5JnF1b3Q7YAogICAgLi4uCn0K"}}),e._v(" "),o("h2",{attrs:{id:"move-upstream"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-upstream"}},[e._v("#")]),e._v(" Move upstream")]),e._v(" "),o("p",[e._v("This is where Protobuf comes in to simplify your life even more. The same "),o("code",[e._v("StoredGame")]),e._v(" can in fact be declared as:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICBzdHJpbmcgY3JlYXRvciA9IDE7CiAgc3RyaW5nIGluZGV4ID0gMjsKICBzdHJpbmcgZ2FtZSA9IDM7CiAgc3RyaW5nIHR1cm4gPSA0OwogIHN0cmluZyByZWQgPSA1OwogIHN0cmluZyBibGFjayA9IDY7CiAgdWludDY0IHdhZ2VyID0gNzsKfQo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("= 1")]),e._v(" parts indicate how each field is identified in the serialized output and provide backward compatibility. As your application upgrades to newer versions make sure to not reuse numbers for new fields but to keep increasing the "),o("code",[e._v("= x")]),e._v(" value to preserve backward compatibility.")]),e._v(" "),o("p",[e._v("When "),o("em",[e._v("compiling")]),e._v(", Protobuf will add the "),o("code",[e._v('protobuf:"bytes..."')]),e._v(" elements. The messages to create a game can be declared in Protobuf similarly as:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVHYW1lIHsKICBzdHJpbmcgY3JlYXRvciA9IDE7CiAgc3RyaW5nIHJlZCA9IDI7CiAgc3RyaW5nIGJsYWNrID0gMzsKICB1aW50NjQgd2FnZXIgPSA0Owp9CgptZXNzYWdlIE1zZ0NyZWF0ZUdhbWVSZXNwb25zZSB7CiAgc3RyaW5nIGlkVmFsdWUgPSAxOwp9Cg=="}}),e._v(" "),o("h2",{attrs:{id:"enter-ignite-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enter-ignite-cli"}},[e._v("#")]),e._v(" Enter Ignite CLI")]),e._v(" "),o("p",[e._v("When Ignite CLI creates a message for you, it also creates the gRPC definitions and Go handling code. Using commands like the ones below makes it relatively easy to introduce Protobuf elements into your chain:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWFwIHN0b3JlZEdhbWUgZ2FtZSB0dXJuIHJlZCBibGFjayB3YWdlcjp1aW50IC0tbW9kdWxlIGNoZWNrZXJzIC0tbm8tbWVzc2FnZQokIGlnbml0ZSBzY2FmZm9sZCBtZXNzYWdlIGNyZWF0ZUdhbWUgcmVkIGJsYWNrIHdhZ2VyOnVpbnQgLS1tb2R1bGUgY2hlY2tlcnMgLS1yZXNwb25zZSBpZFZhbHVlCg=="}}),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you want to dive straight into coding your chain, head to "),o("RouterLink",{attrs:{to:"/academy/4-my-own-chain/"}},[e._v("My Own Chain")]),e._v(" for more details on using Ignite CLI.")],1)])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);