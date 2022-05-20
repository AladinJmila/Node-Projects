export default function UIActions() {
  const dropDownBtns = document.querySelectorAll('.dropdown-btn');
  const featureBtn = document.querySelectorAll('.feature-btn');

  dropDownBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const dropdownContent = this.nextElementSibling;

      dropdownContent.style.display === 'block'
        ? (dropdownContent.style.display = 'none')
        : (dropdownContent.style.display = 'block');
    });
  });

  featureBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
}
