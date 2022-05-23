export default function homeDashboard() {
  const addTutoBtn = document.getElementById('tutorial-add-btn');
  const tutoContainer = document.querySelector('.tutorials-container');

  addTutoBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('tutorial-progress');
    div.innerHTML += `
      <div class='tutorial'>
        <div class='title-container'>
          <textarea
            placeholder='enter name'
            type='text'
            style='overflow:auto'
          ></textarea>
        </div>
      </div>
    `;

    tutoContainer.insertBefore(
      div,
      tutoContainer.children[tutoContainer.children.length - 1]
    );

    const tutoNameInput = document.querySelector('.title-container textarea');
    tutoNameInput.addEventListener('blur', () => {
      console.log(tutoNameInput.value);
    });
  });
}
