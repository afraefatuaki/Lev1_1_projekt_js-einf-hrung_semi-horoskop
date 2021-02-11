let yourMonth = document.getElementById('month')
let image = document.getElementById('Img')
let title = document.getElementById('zodiacSign')
let description = document.getElementById('text')
let aries = "Today your patience might be tested when one or more of your projects gets put on hold by someone… "
let tauro = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
let gemini = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
let cancer = "Too many different elements in your life are overlapping with each other right now—and it's your…"
let leo = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
let virgo = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
let libra = "Pick a cultural event that's coming up and get some tickets for it today."
let scorpio = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
let sagittarius = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
let copricorn = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
let aquarius = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
let pisces = "Communication is very important today—written, spoken, and even nonverbal body language will all…"


function myZodiacSign() {
    if (yourMonth.value === "March" || yourMonth.value === "March".toLocaleLowerCase() || yourMonth.value === "March".toLocaleUpperCase()) {
        image.src = "assets/img/icon_aries.png"
        title.innerHTML = "Your horoscope is Aries"
        description.innerHTML = aries
    } else if (yourMonth.value === "April" || yourMonth.value === "April".toLocaleLowerCase() || yourMonth.value === "April".toLocaleUpperCase()) {
        image.src = "assets/img/icon_taurus.png"
        title.innerHTML = "Your horoscope is Taurus"
        description.innerHTML = tauro
    } else if (yourMonth.value === "May" || yourMonth.value === "May".toLocaleLowerCase() || yourMonth.value === "May".toLocaleUpperCase()) {
        image.src = "assets/img/icon_gemini.png"
        title.innerHTML = "Your horoscope is Gemini"
        description.innerHTML = gemini
    } else if (yourMonth.value === "Jun" || yourMonth.value === "Jun".toLocaleLowerCase() || yourMonth.value === "Jun".toLocaleUpperCase()) {
        image.src = "assets/img/icon_cancer.png"
        title.innerHTML = "Your horoscope is Cancer"
        description.innerHTML = cancer
    } else if (yourMonth.value === "July" || yourMonth.value === "July".toLocaleLowerCase() || yourMonth.value === "July".toLocaleUpperCase()) {
        image.src = "assets/img/icon_leo.png"
        title.innerHTML = "Your horoscope is Leo"
        description.innerHTML = leo
    } else if (yourMonth.value === "August" || yourMonth.value === "August".toLocaleLowerCase() || yourMonth.value === "August".toLocaleUpperCase()) {
        image.src = "assets/img/icon_virgo.png"
        title.innerHTML = "Your horoscope is Virgo"
        description.innerHTML = virgo
    } else if (yourMonth.value === "September" || yourMonth.value === "September".toLocaleLowerCase() || yourMonth.value === "September".toLocaleUpperCase()) {
        image.src = "assets/img/icon_libra.png"
        title.innerHTML = "Your horoscope is Libra"
        description.innerHTML = libra
    } else if (yourMonth.value === "October" || yourMonth.value === "October".toLocaleLowerCase() || yourMonth.value === "October".toLocaleUpperCase()) {
        image.src = "assets/img/icon_scorpio.png"
        title.innerHTML = "Your horoscope is Scorpio"
        description.innerHTML = scorpio
    } else if (yourMonth.value === "November" || yourMonth.value === "November".toLocaleLowerCase() || yourMonth.value === "November".toLocaleUpperCase()) {
        image.src = "assets/img/icon_sagittarius.png"
        title.innerHTML = "Your horoscope is Sagittarius"
        description.innerHTML = sagittarius
    } else if (yourMonth.value === "December" || yourMonth.value === "December".toLocaleLowerCase() || yourMonth.value === "December".toLocaleUpperCase()) {
        image.src = "assets/img/icon_copricorn.png"
        title.innerHTML = "Your horoscope is Copricorn"
        description.innerHTML = copricorn
    } else if (yourMonth.value === "January" || yourMonth.value === "January".toLocaleLowerCase() || yourMonth.value === "January".toLocaleUpperCase()) {
        image.src = "assets/img/icon_aquarius.png"
        title.innerHTML = "Your horoscope is Aquarius"
        description.innerHTML = aquarius
    } else if (yourMonth.value === "February" || yourMonth.value === "February".toLocaleLowerCase() || yourMonth.value === "February".toLocaleUpperCase()) {
        image.src = "assets/img/icon_pisces.png"
        title.innerHTML = "Your horoscope is Pisces"
        description.innerHTML = pisces
    } else {
        image.src = ""
        title.innerHTML = "Please write your month"
        description.innerHTML = ""
    }
}
