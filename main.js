function typeWriterEffect(element, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            // Handle newlines and spaces correctly
            if (text.charAt(index) === '\n') {
                element.innerHTML += '<br>'; // Newline for '\n'
            } else if (text.charAt(index) === ' ') {
                element.innerHTML += '&nbsp;'; // Non-breaking space for ' '
            } else {
                element.innerHTML += text.charAt(index); // Regular characters
            }

            index++;
            setTimeout(type, speed);
        }
    }

    type();
}


const textBox = document.getElementById('prompt');
const chatArea = document.getElementById('chat-area');

const credits = document.getElementById('credits');

let input = '';
const aiMessage1 = document.createElement('div');
aiMessage1.id = 'left';
// aiMessage1.innerText = 'Hi! To start creating a simple PowerPoint presentation with the theme "My Lifestyle," follow these steps:\n1. Press "Create a Design" in Canva.'


const aiMessage2 = document.createElement('div');
aiMessage2.id = 'left';
// aiMessage2.innerText = '2. Choose "Presentation (16:9)" from the dropdown menu.'

const aiMessage3 = document.createElement('div');
aiMessage3.id = 'left';
// aiMessage3.innerText = '3. Select one of the pre-designed templates available, or if you want a blank canvas, select a simple layout.'

const aiMessage4 = document.createElement('div');
aiMessage4.id = 'left';
// aiMessage4.innerText = '4. Click "Apply on all pages" to use the same design across your entire presentation.'

const aiMessage5 = document.createElement('div');
aiMessage5.id = 'left';
// aiMessage5.innerText = "5. Below the main slide, you'll see a list of slides. Click the second slide (or any other) to start editing.\nNow, you can start customizing each slide with text, images, and other elements that reflect your lifestyle."

const goodbye = document.createElement('div');
goodbye.id = 'left';
// goodbye.innerText = 'Thanks for chatting with me! If you have any other questions or need further guidance, feel free to ask.'

const highlight = document.querySelector('.ld-ripple');

const highlight2 = document.querySelector('.ld-ripple2');

const highlight3 = document.querySelector('.ld-ripple3');

const highlight4 = document.querySelector('.ld-ripple4');



function userBox(input) {
    const rightBox = document.createElement('div');
    rightBox.id = 'right';
    rightBox.innerText = input;
    chatArea.appendChild(rightBox);
}

textBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
            event.preventDefault();
            input = textBox.value;
            textBox.value = '';
    
            userBox(input);
            chatArea.appendChild(aiMessage1);

            typeWriterEffect(aiMessage1, 'Hi! To start creating a simple PowerPoint presentation \nwith the theme "My Lifestyle," follow these steps:\n1. Press "Create a Design" in Canva.', 25);

            highlight.style.display = 'block';

            credits.innerText = 'Credits: 4'

            document.addEventListener('click', () => {
                highlight.style.display = 'none';
                chatArea.appendChild(aiMessage2);
                document.body.style.backgroundImage = "url('media/image2.png')";

                typeWriterEffect(aiMessage2, '2. Choose "Presentation (16:9)" from the dropdown \nmenu.', 25);


                highlight2.style.display = 'block';

                document.addEventListener('keydown', (event) => {
                    if (event.key === 'q') {

                    highlight2.style.display = 'none';
                    chatArea.appendChild(aiMessage3);

                    typeWriterEffect(aiMessage3, '3. Select one of the pre-designed templates available, \nor if you want a blank canvas, select a simple layout.', 25);

                    document.body.style.backgroundImage = "url('media/image3.png')";
                    highlight3.style.display = 'block';

                    document.addEventListener('keydown', (event) => {
                        if (event.key === 'w') {

                        highlight3.style.display = 'none';
                        chatArea.appendChild(aiMessage4);

                        typeWriterEffect(aiMessage4, '4. Click "Apply on all pages" to use the same design \nacross your entire presentation.', 25);


                        document.body.style.backgroundImage = "url('media/image4.png')";
                        highlight4.style.display = 'block';

                        document.addEventListener('keydown', (event) => {
                            if (event.key === 'e') {

                                highlight4.style.display = 'none';
                                chatArea.appendChild(aiMessage5);

                                typeWriterEffect(aiMessage5, "5. Below the main slide, you'll see a list of slides. Click \nthe second slide (or any other) to start editing.\nNow, you can start customizing each slide with text, \nimages, and other elements that reflect your lifestyle.", 25);


                                document.body.style.backgroundImage = "url('media/image5.png')";
                                // chatArea.appendChild(goodbye);

                                document.addEventListener('keydown', (event) => {
                                    if (event.key === 'r') {
                                        typeWriterEffect(goodbye, "Thanks for chatting with me! If you have any other \nquestions or need further guidance, feel free to ask.", 25);
                                        chatArea.appendChild(goodbye);

                                    }

                                })
                        }
                        });
                    }
                    });
                }
                });

            });

        }
});