<script>
  const tabs = document.querySelectorAll('.tab');
  const cases = document.querySelectorAll('.case');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // активная кнопка
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      // показываем нужные кейсы
      cases.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
</script>