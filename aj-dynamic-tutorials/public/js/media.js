const mediaEl = document.getElementById('media');

async function injectDbData() {
  const res = await fetch('media/');
  const data = await res.json();

  const media = `

  `;

  // mediaEl.innerHTML = data;
}

injectDbData();
