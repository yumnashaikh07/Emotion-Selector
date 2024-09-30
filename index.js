document.addEventListener(`DOMContentLoaded`,()=>{
var verses = {
    happy: [
        "Allah does not burden a soul beyond that it can bear.(Surah Al-Baqarah 2:286) -"],

    sad: [
        "And remember when you were few and oppressed in the land.(Surah Al-Anfal 8:26) - "],
   
    angry: [
        "So do not weaken and do not grieve.(Surah Al-Imran 3:139)"],
   
    love:[
        "Say, [O Muhammad], If you should love Allah, then follow me, [so] Allah will love you and forgive you your sins. And Allah is Forgiving and Merciful.” (Surah Al-Imran 3:31)"],

    gratitude:[
        "If you give thanks, I will surely increase your favor upon you. (Surah Ibrahim 14:7)"],
    
    disappointment:[
        "And We will surely test you with something of fear and hunger. (Surah Al-Baqarah 2:155)"],
      
    contentment:[
        "Indeed, in the remembrance of Allah do hearts find rest. (Surah Al-Ra'd 13:28)"
    ]};
var emotionButton = document.getElementById("emotionButton");
var emotionList = document.getElementById("emotionList");
var versesDisplay = document.getElementById("versesDisplay");
emotionButton.addEventListener("click", function () {
    emotionList.classList.toggle("hidden");
});
document.querySelectorAll(".emotion").forEach(function (button) {
    button.addEventListener("click", function (event) {
        var emotion = event.currentTarget.dataset.emotion;
        displayVerses(emotion);
    });
});
function displayVerses(emotion) {
    versesDisplay.innerHTML = "";
    if (emotion && verses[emotion]) {
        verses[emotion].forEach(function (verse) {
            var p = document.createElement("p");
            p.textContent = verse;
            versesDisplay.appendChild(p);
        });
        emotionList.classList.add("hidden");
    }
}})
