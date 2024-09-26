
//THIS IS HOW THE RECT WORKS IN THE BACKEND

//ITS A REACT RENDERING FUNCTION
function customRender(reactElement, container) {

  const domElement = document.createElement(reactElement.type);    //CREATE AND TAKE TYPE OF ELEMENT

  domElement.innerHTML = reactElement.children;
  domElement.setAttribute(reactElement.props.href);                //ADDING ATTRIBUTES 
  domElement.setAttribute(reactElement.props.target);

  container.appendChild(domElement);                               //ADD CHILDREN CONTENT 
}

//ITS LIKE A HTML ELEMENT (a TAG)
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google!!",
};

const mainContainer = document.querySelector("#root");

//RENDER
customRender(reactElement, mainContainer);
