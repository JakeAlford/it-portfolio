(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const search = document.querySelector('#project-search');
  const empty = document.querySelector('#empty-state');
  let active = 'All';
  function apply() {
    const q = (search?.value || '').toLocaleLowerCase().trim();
    let visible = 0;
    for (const card of cards) {
      const matchType = active === 'All' || card.dataset.category === active;
      const matchText = !q || card.textContent.toLocaleLowerCase().includes(q);
      card.hidden = !(matchType && matchText);
      if (!card.hidden) visible++;
    }
    if (empty) empty.classList.toggle('show', visible === 0);
    buttons.forEach(b => { const selected = b.dataset.filter === active; b.classList.toggle('is-active', selected); b.setAttribute('aria-pressed', String(selected)); });
  }
  buttons.forEach(b => b.addEventListener('click', () => { active = b.dataset.filter; apply(); }));
  search?.addEventListener('input', apply);
})();
