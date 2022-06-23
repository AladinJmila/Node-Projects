export default function slidesModeToggle(state) {
  const expandBtn = document.getElementById('expand-btn');
  const showNotesBtn = document.getElementById('slide-show-notes-btn');
  const notesContent = document.getElementById('notes-content');
  const controlsEl = document.querySelector('.slide-controls');
  const editPanel = document.getElementById('edit-panel');
  const incanvasSlideName = document.getElementById('incanvas-slide-name');
  const incanvasSlideId = document.getElementById('incanvas-slide-id');
  const addSlideEl = document.querySelector('.add-slide');
  const addExistingFeaure = document.querySelector('.add-existing-feature');
  const placeHolder = document.getElementById('place-holder-btn');
  const slideSubmitBtn = document.getElementById('slide-submit-btn');
  const notesTextarea = document.getElementById('notes-textarea');
  const addGroupFeature = document.querySelectorAll('.add-group-feature');
  const fileInputEl = document.querySelector('.file-input');
  const recordBtn = document.getElementById('record-btn');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  const hideInEditor = [
    expandBtn,
    showNotesBtn,
    notesContent,
    nextBtn,
    prevBtn,
  ];
  const showInEditorFlex = [
    addSlideEl,
    addExistingFeaure,
    fileInputEl,
    editPanel,
  ];
  const showInEditorBlock = [
    incanvasSlideName,
    incanvasSlideId,
    placeHolder,
    slideSubmitBtn,
    notesTextarea,
    recordBtn,
  ];

  if (state.mode === 'viewer') {
    controlsEl.classList.remove('show');
    hideInEditor.forEach(el => el.classList.remove('hide'));
    showInEditorBlock.forEach(el => el.classList.remove('show-block'));
    showInEditorFlex.forEach(el => el.classList.remove('show-flex'));
    addGroupFeature.forEach(el => {
      el.classList.remove('show-flex');
    });
  } else {
    controlsEl.classList.add('show');
    hideInEditor.forEach(el => el.classList.add('hide'));
    showInEditorBlock.forEach(el => el.classList.add('show-block'));
    showInEditorFlex.forEach(el => el.classList.add('show-flex'));
    addGroupFeature.forEach(el => {
      el.classList.add('show-flex');
    });
  }
}
