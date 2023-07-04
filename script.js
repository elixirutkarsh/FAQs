document.addEventListener('DOMContentLoaded', function() {
    const faqList = document.getElementById('faq-list');
    const showAnswerButtons = document.getElementsByClassName('show-answer');
  
    // Sample data - replace with your own questions and answers
    const faqs = [
      {
        question: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliq',
        
      },
      {
        question: 'Question 2 ipsum dolor sit amet, consectetur adipiscing el',
        
      },
      {
        question: 'Question 3 Lorem ipsum dolor sit amet, consectetur adipisci',
        
      }
      // Add more questions and answers as needed
    ];
  
    // Generate the FAQs list
    faqs.forEach(function(faq) {
      const listItem = document.createElement('li');
      const questionHeading = document.createElement('h2');
      questionHeading.textContent = faq.question;
      const answerParagraph = document.createElement('p');
      answerParagraph.textContent = faq.answer;
      const showAnswerButton = document.createElement('button');
      showAnswerButton.classList.add('show-answer');
      showAnswerButton.textContent = '+ Show Answer';
      listItem.appendChild(questionHeading);
      listItem.appendChild(showAnswerButton);
      listItem.appendChild(answerParagraph);
      faqList.appendChild(listItem);
    });
  
    // Add event listeners to show answer buttons
    Array.from(showAnswerButtons).forEach(function(button) {
      button.addEventListener('click', function() {
        const answer = button.nextElementSibling;
        answer.classList.toggle('show');
        button.textContent = button.textContent.includes('+') ? '- Hide Answer' : '+ Show Answer';
      });
    });
    
  });
  