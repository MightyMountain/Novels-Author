function showNovelChapters(novelId) {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block'; // Show sidebar when novel button is clicked
    
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = ''; // Clear existing chapters

    let chapters = [];
    if (novelId === 'arita') {
        chapters = [
            { title: 'Chapter 1', path: 'novel/Novel/Arita/arita1.md' },
            { title: 'Chapter 2', path: 'novel/Novel/Arita/arita2.md' },
            { title: 'Chapter 3', path: 'novel/Novel/Arita/arita3.md' }
        ];
    } else if (novelId === 'villain') {
        chapters = [
            { title: 'Chapter 1', path: 'novel/Novel/Villain/villain1.md' },
            { title: 'Chapter 2', path: 'novel/Novel/Villain/villain2.md' },
            { title: 'Chapter 3', path: 'novel/Novel/Villain/villain3.md' }
        ];
    } else if (novelId === 'anotherworld') {
        chapters = [
            { title: 'Chapter 1', path: 'novel/Novel/AnotherSide/chapter1.md' },
            { title: 'Chapter 2', path: 'novel/Novel/AnotherSide/chapter2.md' },
            { title: 'Chapter 3', path: 'novel/Novel/AnotherSide/chapter3.md' }
        ];
    }

    chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="loadNovelContent('${novelId}', '${chapter.path}');">${chapter.title}</button>`;
        chapterList.appendChild(li);
    });
}

function showChapter(chapterId) {
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => {
        chapter.classList.add('hidden');
    });
    const chapter = document.getElementById(chapterId);
    chapter.classList.remove('hidden');
    chapter.scrollIntoView({ behavior: 'smooth' }); // Scroll to the chapter title
}

function loadAnotherSideContent() {
    fetch('Novel/AnotherSide.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('another-side-content').innerHTML = data;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function loadVillainContent() {
    fetch('Novel/Villain.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('villainContent').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleAnotherSideContent() {
    const anotherSideSection = document.getElementById('another-side-section');
    const villainSection = document.getElementById('villain-section');
    villainSection.style.display = "none";
    if (anotherSideSection.style.display === "none") {
        anotherSideSection.style.display = "flex";
        showChapter('prologue'); // Show prologue by default
    } else {
        anotherSideSection.style.display = "none";
    }
}


function toggleVillainContent() {
    const villainSection = document.getElementById('villain-section');
    const anotherSideSection = document.getElementById('another-side-section');
    anotherSideSection.style.display = "none";

    if (villainSection.style.display === "none") {
        villainSection.style.display = "flex";
        loadVillainContent();
        showVillainChapter('villain-prologue');
    } else {
        villainSection.style.display = "none";
    }
}



function showVillainChapter(chapterId) {
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => chapter.classList.add('hidden'));
    document.getElementById(chapterId).classList.remove('hidden');
}

function toggleNovelContent() {
    const novelContent = document.getElementById('novelContent');
    novelContent.classList.toggle('hidden');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Fungsi untuk menutup semua Cerpen
function closeAllCerpenContent() {
    document.getElementById('kisah-section').style.display = "none";
    document.getElementById('bunga-section').style.display = "none";
}

function toggleKisahContent() {
    const kisahSection = document.getElementById('kisah-section');
    if (kisahSection.style.display === "none") {
        closeAllCerpenContent();
        kisahSection.style.display = "flex";
        showChapter('kisah-chapter1');
    } else {
        kisahSection.style.display = "none";
    }
}

function toggleBungaContent() {
    const bungaSection = document.getElementById('bunga-section');
    if (bungaSection.style.display === "none") {
        closeAllCerpenContent();
        bungaSection.style.display = "flex";
        showChapter('bunga-chapter1');
    } else {
        bungaSection.style.display = "none";
    }
}
