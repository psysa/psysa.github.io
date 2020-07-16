function setTopMargin() {
    imageContainer = document.getElementById('imageContainerOuter')
    cardsContainer = document.getElementById('cardsContainer')
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

Array.prototype.getIndexOf = function (el) {
    var arr = this;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == el) {
            return i;
        }
    }
    return -1;
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
        buttons.addEventListener("click", function () {
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
            image.setAttribute("src", "./assets/images/display_pictures/" + (studentFirstNames.indexOf(name) + 1) + ".jpg")
            imageCircle.appendChild(image)
            document.getElementById('name').textContent = studentNames[studentFirstNames.indexOf(name)]
            document.getElementById('aka').textContent = nicknames[studentFirstNames.indexOf(name)]
            document.getElementById('dob').innerHTML = '<svg id="Capa_1" enable-background="new 0 0 512 512" height="15" viewBox="0 0 512 512" width="15" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_2219_"><g id="XMLID_879_"><path id="XMLID_913_" d="m502 440h-10v-180.722c0-28.275-23.003-51.278-51.278-51.278h-16.722c-5.522 0-10 4.477-10 10s4.478 10 10 10h16.722c17.247 0 31.278 14.031 31.278 31.278v11.34h-14.01c-17.854 0-32.379 14.524-32.379 32.378v37.122c0 9.759-7.933 17.848-17.683 18.033-4.74.067-9.202-1.743-12.682-5.158-3.627-3.56-5.708-8.483-5.708-13.507v-22.552c0-18.568-15.107-33.675-33.675-33.675s-33.675 15.106-33.675 33.675v31.106c0 3.431-1.36 6.633-3.83 9.017-2.469 2.382-5.726 3.637-9.165 3.504-6.651-.236-12.063-6.096-12.063-13.06v-17.736c0-9.832-3.896-19.009-10.973-25.837-7.073-6.827-16.396-10.38-26.23-10.045-19.404.69-34.605 16.724-34.605 36.502v7.78c0 9.759-7.933 17.848-17.684 18.032-4.681.098-9.2-1.742-12.68-5.157-3.628-3.56-5.709-8.482-5.709-13.507v-26.183c0-19.072-15.516-34.588-34.588-34.588s-34.588 15.516-34.588 34.588v50.61c0 8.503-6.918 15.421-15.421 15.421-8.504 0-15.422-6.918-15.422-15.421v-58.813c0-17.937-14.593-32.529-32.529-32.529h-16.701v-11.34c0-17.247 14.031-31.278 31.278-31.278h262.722c5.522 0 10-4.477 10-10s-4.478-10-10-10h-32.596v-119.851c0-12.219-6.853-22.866-16.917-28.304 7.623-12.748 5.955-29.544-5.014-40.514l-16.402-16.402c-3.906-3.904-10.236-3.904-14.143 0l-16.402 16.402c-10.969 10.97-12.637 27.767-5.014 40.514-10.064 5.438-16.917 16.085-16.917 28.304 0 15.804 11.462 28.981 26.511 31.653v88.198h-165.828c-28.275 0-51.278 23.003-51.278 51.278v180.722h-10c-5.523 0-10 4.478-10 10 0 34.186 27.813 62 62 62h388c34.186 0 62-27.814 62-62 0-5.522-4.478-10-10-10zm-255.331-406.526 9.331-9.331 9.331 9.331c5.146 5.145 5.146 13.517 0 18.661-2.492 2.492-5.806 3.865-9.331 3.865s-6.839-1.373-9.331-3.865c-5.146-5.145-5.146-13.517 0-18.661zm.437 66.824h-4.361c-6.699 0-12.149-5.45-12.149-12.148 0-6.699 5.45-12.149 12.149-12.149h26.511c6.698 0 12.148 5.45 12.148 12.149v119.85h-24.298v-97.702c0-5.523-4.477-10-10-10zm-207.106 190.32h16.703c6.909 0 12.529 5.62 12.529 12.529v58.813c0 19.531 15.891 35.421 35.422 35.421s35.421-15.89 35.421-35.421v-50.61c0-8.044 6.544-14.588 14.588-14.588s14.588 6.544 14.588 14.588v26.183c0 10.359 4.265 20.485 11.701 27.782 7.344 7.207 16.927 11.056 27.066 10.878 20.569-.389 37.305-17.448 37.305-38.028v-7.78c0-8.806 6.87-16.214 15.314-16.514 4.371-.171 8.499 1.423 11.632 4.447 3.135 3.025 4.861 7.091 4.861 11.446v17.736c0 17.906 13.771 32.423 31.354 33.049 8.909.297 17.355-2.916 23.764-9.102 6.411-6.187 9.942-14.5 9.942-23.407v-31.106c0-7.54 6.135-13.675 13.675-13.675s13.675 6.135 13.675 13.675v22.552c0 10.359 4.265 20.485 11.7 27.782 7.345 7.206 16.925 11.082 27.067 10.879 20.57-.39 37.305-17.45 37.305-38.029v-37.122c0-6.825 5.553-12.378 12.379-12.378h14.009v149.382h-432zm410 201.382h-388c-19.714 0-36.3-13.652-40.797-32h469.594c-4.497 18.348-21.083 32-40.797 32z"/><path id="XMLID_917_" d="m128 108c5.523 0 10-4.478 10-10v-13.333c0-5.522-4.477-10-10-10-5.522 0-10 4.478-10 10v13.333c0 5.522 4.478 10 10 10z"/><path id="XMLID_918_" d="m128 174.667c5.523 0 10-4.478 10-10v-13.334c0-5.522-4.477-10-10-10-5.522 0-10 4.478-10 10v13.334c0 5.522 4.478 10 10 10z"/><path id="XMLID_948_" d="m154.667 134.667h13.333c5.523 0 10-4.478 10-10s-4.477-10-10-10h-13.333c-5.523 0-10 4.478-10 10s4.478 10 10 10z"/><path id="XMLID_950_" d="m88 134.667h13.333c5.522 0 10-4.478 10-10s-4.478-10-10-10h-13.333c-5.522 0-10 4.478-10 10s4.478 10 10 10z"/><path id="XMLID_958_" d="m384 33.333c5.522 0 10-4.478 10-10v-13.333c0-5.523-4.478-10-10-10s-10 4.477-10 10v13.333c0 5.522 4.478 10 10 10z"/><path id="XMLID_960_" d="m384 100c5.522 0 10-4.478 10-10v-13.333c0-5.522-4.478-10-10-10s-10 4.478-10 10v13.333c0 5.522 4.478 10 10 10z"/><path id="XMLID_991_" d="m410.667 60h13.333c5.522 0 10-4.478 10-10s-4.478-10-10-10h-13.333c-5.522 0-10 4.478-10 10s4.478 10 10 10z"/><path id="XMLID_1017_" d="m344 60h13.333c5.522 0 10-4.478 10-10s-4.478-10-10-10h-13.333c-5.522 0-10 4.478-10 10s4.478 10 10 10z"/><path id="XMLID_1031_" d="m379 228c2.63 0 5.21-1.07 7.069-2.931 1.861-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21 1.069-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.069c1.86 1.861 4.44 2.931 7.07 2.931z"/></g></g></svg>' + dob[studentFirstNames.indexOf(name)]
            cardColumns = document.getElementById('cardsColumns')
            index = quotes.getIndexOf(name)
            for (i = 0; i < quotes[index]['quotes'].length; i++) {
                card = document.createElement('div')
                card.className = "card p-3"
                blockQuote = document.createElement('blockquote')
                blockQuote.className = "blockquote mb-0 card-body"
                quote = document.createElement('p')
                quote.style.color = "white"
                quote.textContent = quotes[index]['quotes'][i]['quote']
                footer = document.createElement('footer')
                footer.style.color = "white"
                footer.className = "blockquote-footer mb-0 text-right"
                small = document.createElement('small')
                small.className = "text-muted bold"
                cite = document.createElement('cite')
                cite.setAttribute("title", "Source Title")
                cite.style.color = "white"
                cite.textContent = quotes[index]['quotes'][i]['name']
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

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}