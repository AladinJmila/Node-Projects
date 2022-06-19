export default function featuresActions(state) {
  const featureBtns = document.querySelectorAll('.feature-btn');
  const addFeatureBtn = document.getElementById('add-feature-btn');
  const featureName = document.getElementById('feature-name');
  const note = document.getElementById('add-feature-note');

  addFeatureBtn.addEventListener('click', async () => {
    const featuresState = document.getElementById('features-state');
    const { selectedGroupId } = featuresState.dataset;
    if (!selectedGroupId) note.classList.add('show');

    if (selectedGroupId) {
      const res = await fetch('/features', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: featureName.value,
          groupId: selectedGroupId,
        }),
      });

      if (res) location.reload();
    }
  });

  featureBtns.forEach(btn => {
    btn.addEventListener('click', async function () {
      this.classList.toggle('active');
      const featureId = this.getAttribute('id');

      const res = await fetch(`/features/${featureId}`);
      const data = await res.json();
      state.slides = data;
      console.log(state.slides);
    });
  });
}
