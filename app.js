const heading= React.createElement("h1",{},"Hello React 2nd day");
const root=ReactDOM.createRoot(document.getElementById("root"));

//now to do nested div and further operations
const Parent= React.createElement("div",{id:"Parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello i am nested h1"),
        React.createElement("h2",{},"Nested H2 Tag"),]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h3",{},"A nESTED Take on heading 3"),
            React.createElement("h4",{},"A nESTED Take on heading 4"),
        ]),
//THE [] TAGS ARE USED AS THE ABOVE CODE BECOMES AN ARRAY
);
        console.log(Parent);
        root.render(Parent);