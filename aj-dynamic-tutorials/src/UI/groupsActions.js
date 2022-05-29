export default function UIActions() {
  const dropDownBtns = document.querySelectorAll('.dropdown-btn');
  const featureBtn = document.querySelectorAll('.feature-btn');
  const groupsNames = Array.from(document.querySelectorAll('.group-name'));
  const addGroupBtns = Array.from(document.querySelectorAll('.add-group-btn'));

  dropDownBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.style.display === 'block'
          ? (dropdownContent.style.display = 'none')
          : (dropdownContent.style.display = 'block');
      }
    });
  });

  // transfer to featuresActions
  featureBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });

  addGroupBtns.forEach((btn, i) => {
    btn.addEventListener('click', async () => {
      const name = groupsNames[i].value;
      const appId = groupsNames[i].dataset.appId;
      const parentGroupId = groupsNames[i].dataset.groupId;

      const res = await fetch('/groups', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          application: appId,
          parentGroupId,
        }),
      });
      if (res) {
        location.reload();
      }
    });
  });
}
