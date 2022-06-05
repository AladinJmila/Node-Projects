export default function featuresActions() {
  const addFeatureBtn = document.getElementById('add-feature-btn');

  addFeatureBtn.addEventListener('click', () => {
    const featuresState = document.getElementById('features-state');
    const { selectedGroupId } = featuresState.dataset;
    const note = document.getElementById('add-feature-note');
    if (!selectedGroupId) note.classList.add('show');
  });
}
