const textarea = document.getElementById('textInput');// Get the textarea element
const lettersSpan = document.getElementById('letters');// Get the span element for letters
const wordsSpan = document.getElementById('words');// Get the span element for words
const sentencesSpan = document.getElementById('sentences');// Get the span element for sentences
const button = document.getElementById('countButton');// Get the button element
const paragraphsSpan = document.getElementById('paragraphs');// Get the span element for paragraphs
paragraphsSpan.textContent = 0;// Initialize the paragraphs count to 0         
// Remove any spaces(\s) and punctuation
        textarea.addEventListener('input', () => {
        let newText = textarea.value.trim();
        const cleanText = newText.replace(/[\s.,!?]/g, '');// Remove spaces and punctuation from the text, g-flag is used to replace all occurrences
        lettersSpan.textContent = cleanText.length;
        if (newText === ''){// If the trimmed text is empty, set words and sentences count to 0
            wordsSpan.textContent = 0;
            sentencesSpan.textContent = 0;
           
        }
        else{
            wordsSpan.textContent = newText.split(/\s+/).length;// Split the text by whitespace and count the number of words, if the trimmed text is empty, return 0
            sentencesSpan.textContent = newText.split(/[.!?]+/).filter(s => s.trim() !== '').length;// Split the text by sentence-ending punctuation and count the number of sentences, filtering out any empty sentences
            paragraphsSpan.textContent = newText.split(/\n{2,}/).filter(p => p.trim() !== '').length;// Split the text by newlines and count the number of paragraphs, filtering out any empty paragraphs
        }

    });

    function changeBg() {
     const colors = ["red", "green", "blue", "yellow", "pink", "orange"];
     const randomIndex = Math.floor(Math.random() * colors.length);
     document.body.style.backgroundColor = colors[randomIndex];
}
