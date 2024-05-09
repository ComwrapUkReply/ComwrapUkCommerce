/* Hero core block */
export default function decorate(block) {
  [...block.children].forEach((heroItem) => {
    heroItem.classList.add("hero-item");

    // Replace 'p' with 'h1'
    const secondParagraph = heroItem.querySelector("p:nth-child(2)");
    if (secondParagraph) {
      const newHeading = document.createElement("h1");
      newHeading.innerHTML = secondParagraph.innerHTML;
      secondParagraph.parentNode.replaceChild(newHeading, secondParagraph);
      newHeading.classList.add("hero-title");
    }
    // Replace 'p' with 'div' and add a new class to the container
    const pictureContainer = heroItem.querySelector("picture");
    if (pictureContainer) {
      const imageParent = pictureContainer.parentNode; // picture parent

      const newDiv = document.createElement("div");
      newDiv.innerHTML = imageParent.innerHTML;
      newDiv.classList.add("hero-image");
      imageParent.replaceWith(newDiv);
    }
  });

  // Select the h1 element with the class 'hero-title'
  const heroTitle = document.querySelector(".hero-title");

  // Create a new span element with the class 'span-title'
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("span-title");

  if (block === pageHome && block === animation) {
    // Check if the h1 element contains text nodes
    if (heroTitle.childNodes.length > 0) {
      // Iterate over the child nodes of the h1 element
      heroTitle.childNodes.forEach((node) => {
        // Check if the node is a text node and not empty or whitespace
        if (
          node.nodeType === Node.TEXT_NODE &&
          node.textContent.trim() !== ""
        ) {
          // Wrap the text content of the node in the new span element
          node.replaceWith(titleSpan);
          titleSpan.textContent = node.textContent;
          const textContentArray = titleSpan.innerText.split(" ");
          if (window.innerWidth <= 900) {
            titleSpan.innerHTML = `<br>${textContentArray[0]} ${textContentArray
              .slice(1)
              .join(" ")}`;
          } else {
            titleSpan.innerHTML = ` ${
              textContentArray[1]
            } <br>${textContentArray.slice(2).join(" ")}`;
          }
        }
      });
    }
  }

  // Initializing generator
  const gen = generator();

  // Start the animation
  if (block === pageHome && block === animation) {
    printChar(words[gen.next().value]);
  }
}
