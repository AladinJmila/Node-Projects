export default function groupsActions() {
  const dropDownBtns = document.querySelectorAll('.dropdown-btn');
  const groupsNames = Array.from(document.querySelectorAll('.group-name'));
  const addGroupBtns = Array.from(document.querySelectorAll('.add-group-btn'));
  const selectedGroupNameEl = document.getElementById('selected-group-name');
  const featuresColletctions = document.querySelectorAll(
    '.features-collection'
  );

  dropDownBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const featuresState = document.getElementById('features-state');
      const { selectedGroupId } = featuresState.dataset;
      if (
        selectedGroupId === this.dataset.groupId ||
        !this.classList.contains('active')
      ) {
        featuresState.setAttribute('data-selected-group-id', '');
        featuresState.setAttribute('data-selected-group-name', '');
        selectedGroupNameEl.innerText = 'select a group';
      } else {
        featuresState.setAttribute(
          'data-selected-group-id',
          this.dataset.groupId
        );
        featuresState.setAttribute(
          'data-selected-group-name',
          this.dataset.groupName
        );
        selectedGroupNameEl.innerText = featuresState.dataset.selectedGroupName;
      }

      featuresColletctions.forEach(fc => {
        fc.dataset.groupId === featuresState.dataset.selectedGroupId
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
