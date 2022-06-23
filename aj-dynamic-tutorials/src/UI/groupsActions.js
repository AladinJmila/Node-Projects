export default function groupsActions(state) {
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  const groupsNames = Array.from(document.querySelectorAll('.group-name'));
  const addGroupBtns = Array.from(document.querySelectorAll('.add-group-btn'));
  const selectedGroupNameEl = document.getElementById('selected-group-name');
  const featuresColletctions = document.querySelectorAll(
    '.features-collection'
  );

  function renderDropdown() {
    dropdownContainers.forEach((el, i) => {
      console.log(el.children);
      if (el.children.length) {
        dropdownBtns[i].classList.add('dropdown');
      } else {
        dropdownBtns[i].classList.remove('dropdown');
      }
    });
  }
  renderDropdown();

  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      dropdownBtns.forEach(button => {
        button === this
          ? this.classList.toggle('active')
          : button.classList.remove('active');
      });

      const featuresState = document.getElementById('features-state');
      const { selectedGroupId } = featuresState.dataset;
      if (
        selectedGroupId === this.dataset.groupId ||
        !this.classList.contains('active')
      ) {
        state.selectedGroup = null;
        selectedGroupNameEl.innerText = 'select a group';
      } else {
        state.selectedGroup = this.dataset.groupId;
        selectedGroupNameEl.innerText = this.dataset.groupName;
      }

      featuresColletctions.forEach(fc => {
        fc.dataset.groupId === state.selectedGroup
          ? (fc.style.display = 'flex')
          : (fc.style.display = 'none');
      });

      const note = document.getElementById('add-feature-note');
      note.classList.remove('show');
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.style.display === 'block'
          ? (dropdownContent.style.display = 'none')
          : (dropdownContent.style.display = 'block');
      }
    });
  });

  addGroupBtns.forEach((btn, i) => {
    btn.addEventListener('click', async () => {
      const name = groupsNames[i].value;
      const appId = groupsNames[i].dataset.appId;
      const parentGroupId = groupsNames[i].dataset.groupId;
      if (name) {
        const res = await fetch('/groups', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            application: appId,
            parentGroupId,
          }),
        });

        if (res) location.reload();
      }
    });
  });
}
