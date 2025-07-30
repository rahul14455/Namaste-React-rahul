 const head = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React !")

const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(head);

    const parent = React.createElement("h1",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is H1 Tag"),React.createElement("h2",{},"This is H2 tag")])],React.createElement("div",{id:"child2"},[React.createElement("h1",{},"This is H1 Tag"),React.createElement("h2",{},"This is H2 tag")]));

    console.log(parent)
    root.render(parent)