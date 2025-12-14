// СКРИПТ 1: Вывести текущую дату в pop up, нажав на кнопку
function showDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateString = now.toLocaleDateString('ru-RU', options);
    alert(`Текущая дата и время:\n${dateString}`);
}

// СКРИПТ 2: Изменение цвета фона при нажатии на кнопки
function changeBackground() {
    const colors = [
        '#1a1a2e', '#16213e', '#0f3460', 
        '#1b4332', '#2d6a4f', '#081c15',
        '#3d405b', '#e07a5f', '#3d348b'
    ];
    const currentColor = document.body.style.backgroundColor || '#1a1a2e';
    let newColor;
    
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    
    document.body.style.backgroundColor = newColor;
}

// СКРИПТ 3: Автоматическое прокручивание текста через 5 секунд
window.onload = function() {
    setTimeout(function() {
        const textElement = document.getElementById('textToScroll');
        if (textElement) {
            textElement.style.border = '2px solid #4361ee';
            textElement.style.padding = '15px';
            textElement.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
            
            // Прокрутка вниз
            let scrollPos = 0;
            const scrollDown = setInterval(() => {
                textElement.scrollTop = scrollPos;
                scrollPos += 2;
                if (scrollPos >= textElement.scrollHeight - textElement.clientHeight) {
                    clearInterval(scrollDown);
                    
                    // Прокрутка обратно
                    setTimeout(() => {
                        const scrollUp = setInterval(() => {
                            textElement.scrollTop = scrollPos;
                            scrollPos -= 2;
                            if (scrollPos <= 0) {
                                clearInterval(scrollUp);
                            }
                        }, 20);
                    }, 500);
                }
            }, 20);
        }
    }, 5000); // 5 секунд
};

// СКРИПТ 4: Удалить все слова длиннее 7 букв (для кнопки на главной)
function removeLongWords() {
    const sentence = "Геральт из Ривии — ведьмак, профессиональный охотник на чудовищ";
    const words = sentence.split(' ');
    const shortWords = words.filter(word => {
        // Убираем знаки препинания для подсчета букв
        const cleanWord = word.replace(/[.,!?—]/g, '');
        return cleanWord.length <= 7;
    });
    
    alert(`Исходный текст:\n"${sentence}"\n\nПосле удаления слов длиннее 7 букв:\n"${shortWords.join(' ')}"`);
}

// СКРИПТ 5: Найти наиболее часто встречающуюся букву (для страницы books.html)
function findMostFrequentLetter() {
    const text = "Геральт из Ривии охотится на чудовищ".toLowerCase();
    const letters = text.replace(/[^а-яё]/g, '').split('');
    
    if (letters.length === 0) {
        alert("Нет букв для анализа!");
        return;
    }
    
    const frequency = {};
    letters.forEach(letter => {
        frequency[letter] = (frequency[letter] || 0) + 1;
    });
    
    let maxLetter = '';
    let maxCount = 0;
    
    for (const [letter, count] of Object.entries(frequency)) {
        if (count > maxCount) {
            maxCount = count;
            maxLetter = letter;
        }
    }
    
    alert(`В тексте: "${text}"\nСамая частая буква: "${maxLetter}"\nВстречается ${maxCount} раз(а)`);
}

// СКРИПТ 6: Удалить все цифры из текста (для страницы games.html)
function removeNumbers() {
    const element = document.getElementById('textWithNumbers');
    if (element) {
        const textWithNumbers = element.textContent;
        const textWithoutNumbers = textWithNumbers.replace(/\d+/g, '');
        
        // Открываем новое окно с результатом
        const newWindow = window.open('', '_blank', 'width=400,height=200');
        newWindow.document.write(`
            <html>
            <head><title>Результат удаления цифр</title></head>
            <body style="font-family: Arial; padding: 20px;">
                <h2>Исходный текст:</h2>
                <p>${textWithNumbers}</p>
                <h2>Без цифр:</h2>
                <p style="color: red; font-weight: bold;">${textWithoutNumbers}</p>
                <button onclick="window.close()">Закрыть</button>
            </body>
            </html>
        `);
    }
}

// СКРИПТ 7: Часы в заголовке (title) - работает на всех страницах
function updateTitleClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.title = `Ведьмак • ${timeString}`;
    
    setTimeout(updateTitleClock, 1000);
}

// Запускаем часы при загрузке страницы
updateTitleClock();