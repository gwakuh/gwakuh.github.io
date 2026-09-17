let detailStates = [];

window.addEventListener('beforeprint', () => {
  detailStates = [...document.querySelectorAll('details.project-details')]
    .map((detail) => [detail, detail.open]);
  for (const [detail] of detailStates) detail.open = true;
});

window.addEventListener('afterprint', () => {
  for (const [detail, wasOpen] of detailStates) detail.open = wasOpen;
  detailStates = [];
});
