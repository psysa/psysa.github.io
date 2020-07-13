function setTopMargin() {
    imageContainer = document.getElementById('imageContainerOuter')
    cardsContainer = document.getElementById('cardsContainer')
    console.log(cardsContainer.offsetHeight)
}

function closeModal() {
    document.getElementById('modalprintarea').style.display = 'none'
    cardColumns = document.getElementById('cardsColumns')
    imageCircle = document.getElementById('imageCircleDiv')
    if (cardColumns.hasChildNodes()) {
        cardColumns.innerHTML = ""
    }
    if (imageCircle.hasChildNodes()) {
        imageCircle.innerHTML = ""
    }
    document.getElementById('name').innerText = ""
    document.getElementById('aka').innerText = ""
}

function buttonPrint() {
    buttonPrintArea = document.getElementById('buttonprintarea');
    studentNames = ['Abhishek C Nair', 'Adarsh R', 'Adarsh S', 'Adheep George Paul', 'Adithya Nair', 'Adrian Gabriel Mathew', 'Akshay Ashok', 'Akshay Prasannakumar', 'Allen Iype Sibi', 'Amruth Chand T', 'Ancy Sebastian', 'Anusree S', 'Aparna P Menon', 'Aravind R Nair', 'Arshaad Muhsin', 'Ashik Ameer', 'Ashwin B Nair', 'Asish Pulacherry', 'Betty Mary Thomas', 'Bhairavi Sameer Shah', 'Bindya Bhaskaran', 'Devasish Verma', 'Diya Liza Varghese', 'Don Alex', 'Francis Aldrick C V', 'Gayathri R Nair', 'Hariraj K', 'Jisha Varghese', 'Jithin James', 'Joel Vilanilam Zachariah', 'Jos Paul Shajan', 'Krishnaprasad K', 'Kuriakose Eldho', 'Kurian Benoy', 'L Bharath Kumar', 'Leon Joe Koithara', 'Marzooq Jamal', 'Michelle Elizabeth', 'Midhun Madhusoodhanan', 'Midu Mohan', 'Nihal Usman', 'Nikita Davies', 'Nithin Suresh', 'Noel Sebastian', 'Parvathy A N', 'Pooja C S', 'Renjith R Kartha', 'Sarah Jacob', 'Satyalekha Akula', 'Shahul ES', 'Shawn Mathew', 'Shruti Krishnan', 'Silpa T M', 'S Meenakshi', 'Sneha Achamma Cherian', 'Sophus Stein George', 'Sreelakshmi T D', 'Steve Premjith Chacko', 'Theres Mary Jose', 'Thomas Joseph', 'Tino Max Thayil', 'Vishnu V', 'Akhil Seshan', 'Jimmy Jose', 'Navya C R', 'Sreekumar T H']
    studentFirstNames = ['Abhishek', 'Adarsh R', 'Adarsh S', 'Adheep', 'Adithya', 'Adrian', 'Akshay A', 'Akshay P', 'Allen', 'Amruth', 'Ancy', 'Anusree', 'Aparna', 'Aravind', 'Arshaad', 'Ashik', 'Ashwin', 'Asish', 'Betty', 'Bhairavi', 'Bindya', 'Devasish', 'Diya', 'Don', 'Francis', 'Gayathri', 'Hariraj', 'Jisha', 'Jithin', 'Joel', 'Jos', 'Krishnaprasad', 'Kuriakose', 'Kurian', 'Bharath', 'Leon', 'Marzooq', 'Michelle', 'Midhun', 'Midu', 'Nihal', 'Nikita', 'Nithin', 'Noel', 'Parvathy', 'Pooja', 'Renjith', 'Sarah', 'Satyalekha', 'Shahul', 'Shawn', 'Shruti', 'Silpa', 'Meenakshi', 'Sneha', 'Sophus', 'Sreelakshmi', 'Steve', 'Theres', 'Thomas', 'Tino', 'Vishnu', 'Akhil', 'Jimmy', 'Navya', 'Sreekumar']
    buttonColors = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info']
    gradientColors = [
        ['#c31432', '#240b36'],
        ['#00a777', '#003f68'],
        ['#f27121', '#e94057', '#8a2387'],
        ['#ef4136', '#2e3192', '#00aeef']
    ]
    studentFirstNames.forEach(name => {
        buttons = document.createElement('button')
        buttons.className = ("btn ").concat(buttonColors[Math.floor(Math.random() * 5)])
        buttons.textContent = name
        buttonPrintArea.appendChild(buttons)
        buttons.addEventListener("click", function() {
            document.documentElement.scrollTop = 0
            modals = document.getElementById('modalprintarea')
            gradientColor = "linear-gradient(-45deg, "
            gradient = gradientColors[Math.floor(Math.random() * 4)]
            gradient.forEach(g => {
                gradientColor = gradientColor.concat(g).concat(", ")
            });
            gradientColor = gradientColor.slice(0, -2)
            gradientColor = gradientColor.concat(" )")
            modals.style.background = gradientColor
            modals.style.display = 'block'
            imageCircle = document.getElementById('imageCircleDiv')
            image = document.createElement('img')
            image.setAttribute("id", "imageCircle")
            image.setAttribute("src", "./assets/images/display_pictures/"+ (studentFirstNames.indexOf(name)+1) + ".jpg")
            imageCircle.appendChild(image)
            document.getElementById('name').textContent = studentNames[studentFirstNames.indexOf(name)]
            document.getElementById('aka').textContent = "some name"
            cardColumns = document.getElementById('cardsColumns')
            for (i = 0; i < quotes[0]["quotes"].length; i++) {
                card = document.createElement('div')
                card.className = "card p-3"
                blockQuote = document.createElement('blockquote')
                blockQuote.className = "blockquote mb-0 card-body"
                quote = document.createElement('p')
                quote.style.color = "white"
                quote.textContent = quotes[0]["quotes"][i]["quote"]
                footer = document.createElement('footer')
                footer.style.color = "white"
                footer.className = "blockquote-footer mb-0 text-right"
                small = document.createElement('small')
                small.className = "text-muted bold"
                cite = document.createElement('cite')
                cite.setAttribute("title", "Source Title")
                cite.style.color = "white"
                cite.textContent = quotes[0]["quotes"][i]["name"]
                small.appendChild(cite)
                footer.appendChild(small)
                blockQuote.appendChild(quote)
                blockQuote.appendChild(footer)
                card.appendChild(blockQuote)
                cardColumns.appendChild(card)
            }
        })
    });
}