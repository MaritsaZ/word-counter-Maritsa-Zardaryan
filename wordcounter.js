const textarea = document.getElementById('textInput');// Get the textarea element
        const lettersSpan = document.getElementById('letters');// Get the span element for letters
        const wordsSpan = document.getElementById('words');// Get the span element for words
        const sentencesSpan = document.getElementById('sentences');// Get the span element for sentences
        const button = document.getElementById('countButton');// Get the button element

         // Remove any spaces(\s) and punctuation
        button.addEventListener('click', () => {
        let newText = textarea.value.trim();
        const cleanText = newText.replace(/[\s.,!?]/g, '');// Remove spaces and punctuation from the text, g-flag is used to replace all occurrences
        lettersSpan.textContent = cleanText.length;
        if (newText === ''){
            wordsSpan.textContent = 0;
            sentencesSpan.textContent = 0;
           
        }
        else{
            wordsSpan.textContent = newText.split(/\s+/).length;// Split the text by whitespace and count the number of words, if the trimmed text is empty, return 0
            sentencesSpan.textContent = newText.split(/[.!?]+/).filter(s => s.trim() !== '').length;// Split the text by sentence-ending punctuation and count the number of sentences, filtering out any empty sentences
        }

    });

    function changeBg() {
     const colors = ["red", "green", "blue", "yellow", "pink", "orange"];
     const randomIndex = Math.floor(Math.random() * colors.length);
     document.body.style.backgroundColor = colors[randomIndex];
}
