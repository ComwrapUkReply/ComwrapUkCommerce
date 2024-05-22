// /* eslint-disable max-len */
// export default function decorate(block) {
//   const cols = [...block.firstElementChild.children];
//   block.classList.add(`columns-${cols.length}-cols`, 'product-container');
//   // block.classList.add('product-container');
//   // Setup image columns
//   [...block.children].forEach((row) => {
//     [...row.children].forEach((col) => {
//       row.classList.add('product-media');
//       const pics = col.querySelectorAll('picture');
//       if (pics.length > 0) {
//         const mainImgContainer = document.createElement('div');
//         mainImgContainer.className = 'product-img'; // Create main-img container

//         pics.forEach((pic) => {
//           const clonedPic = pic.cloneNode(true);
//           mainImgContainer.appendChild(clonedPic); // Copy all pictures to the main-img container
//         });

//         const picWrapper = pics[0].closest('div');
//         if (picWrapper) {
//           picWrapper.parentNode.insertBefore(mainImgContainer, picWrapper); // Insert main-img above columns-img-col

//           // Picture is only content in column
//           // picWrapper.classList.add('columns-img-col');
//           // Now replace the div.columns-img-col with a ul while keeping the class
//           const ul = document.createElement('ul');
//           ul.classList.add('product-thumb'); // Transfer the class to the ul
//           [...picWrapper.children].forEach((child) => {
//             const li = document.createElement('li');
//             if (child.tagName === 'P' && child.contains(pics[0])) {
//               // Specifically handle <p> tags wrapping a <picture>
//               li.appendChild(child.querySelector('picture').cloneNode(true)); // Clone the picture and append directly to li
//             } else {
//               li.appendChild(child.cloneNode(true)); // Clone and append other children to li
//             }
//             ul.appendChild(li); // Append li to ul
//           });

//           // Replace div with ul
//           picWrapper.parentNode.replaceChild(ul, picWrapper);
//         }
//         const divDesc = row.querySelectorAll('div');
//         const lastDiv = divDesc[divDesc.length - 1];
//         lastDiv.classList.add('product-desc');
//         const productDesc = row.querySelector('.product-desc');
//         // eslint-disable-next-line no-console
//         console.log(productDesc);
//         block.appendChild(productDesc);
//         // console.log(lastDiv)
//       }
//     });
//   });
// }
