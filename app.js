let departments = document.querySelectorAll('.department');
departments.forEach(dep => {
    dep.addEventListener('mouseenter', () => {
        const arrow = dep.querySelector('.helper').querySelector('p');
        arrow.classList.add('active');
    });

    dep.addEventListener('mouseleave', () => {
        const arrow = dep.querySelector('.helper').querySelector('p');
        arrow.classList.remove('active');
    })
})