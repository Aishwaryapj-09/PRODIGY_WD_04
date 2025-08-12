 document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let targetId = this.getAttribute('data-target');
                document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');
            });
        });

       
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                let category = this.getAttribute('data-category');
                document.querySelectorAll('.projects-container .card').forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });