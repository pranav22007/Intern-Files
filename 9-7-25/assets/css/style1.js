const mapFields = [
  ['name','pv-name'],
  ['title','pv-title'],
  ['summary','pv-summary'],
  ['experience','pv-experience']
];

mapFields.forEach(([inputId, targetId]) => {
  document.getElementById(inputId).addEventListener('input', e => {
    const val = e.target.value.trim() || document.getElementById(inputId).placeholder;
    document.getElementById(targetId).textContent = val;
  });
});

function downloadPDF() {
  const preview = document.querySelector('.resume-preview');
  html2pdf()
    .from(preview)
    .set({ margin: 0.5, filename: 'resume.pdf', html2canvas: { scale: 2 } })
    .save();
}