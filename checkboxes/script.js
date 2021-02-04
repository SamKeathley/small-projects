const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
);

function doTheTrick(theChosenOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theChosenOne) {
      fast.checked = false;
    }

    if (cheap === theChosenOne) {
      good.checked = false;
    }

    if (fast === theChosenOne) {
      cheap.checked = false;
    }
  }
}
