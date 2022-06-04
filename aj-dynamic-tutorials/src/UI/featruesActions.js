export default function featuresActions() {
  const addFeatureBtn = document.getElementById('add-feature-btn');

  addFeatureBtn.addEventListener('click', () => {
    const selectedGroupIdEl = document.getElementById('selected-group-id');
    const { selectedGroupId } = selectedGroupIdEl.dataset;
    const note = document.getElementById('add-feature-note');
    if (!selectedGroupId) note.classList.add('show');
  });
}
