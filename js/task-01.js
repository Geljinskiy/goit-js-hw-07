const categories = document.querySelector("#categories").children;
console.log(`Number of categories: ${categories.length}`);

const categArr = [...categories]; //

categArr.forEach((el) => {
    console.log(`\nCategory: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});
