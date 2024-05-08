export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  // Setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper) {
          // Picture is only content in column
          picWrapper.classList.add('columns-img-col');
          // Now replace the div.columns-img-col with a ul while keeping the class
          const ul = document.createElement('ul');
          ul.classList.add('columns-img-col'); // Transfer the class to the ul
          [...picWrapper.children].forEach((child) => {
            const li = document.createElement('li');
            li.appendChild(child.cloneNode(true)); // Clone and append to li
            ul.appendChild(li); // Append li to ul
          });

          // Replace div with ul
          picWrapper.parentNode.replaceChild(ul, picWrapper);
        }
      }
    });
  });
}
