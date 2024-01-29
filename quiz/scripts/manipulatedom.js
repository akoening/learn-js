window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function editText(node) {
    let newNode = document.createElement("input");
    newNode.type = 'text';
    newNode.placeholder = "Enter Cell (x,y) ...";
    node.replaceChild(newNode, node.childNodes[0])
}

function createButtonNode(text, e, l) {
    let buttonNode = document.createElement("button");
    let buttonNodeTxt = createTxtNode(text);
    buttonNode.appendChild(buttonNodeTxt);
    buttonNode.addEventListener(e, l);
    return buttonNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButtonNode("Edit text", "click", function() {
        editText(col1);
        }));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
