const base_url = await  'https://api.jikan.moe/v3/anime/';
let imgAnime = document.getElementById('imgAnime');
let bgImg = document.getElementById('bg_img');
let title = document.getElementById('title');
let number = Math.floor(Math.random()*15+200);





async function pageLoaded (){

    // Take Anime
    fetch (`${base_url}${number}`)
    .then(res=>res.json())
    .then(data=>data.image_url)
    .then(res=> imgAnime = imgAnime.setAttribute("src", res))
    .catch(err=>console.warn(err.message));

    // Take image for background
    fetch(`${base_url}${number}`)
    .then(res=>res.json())
    .then(data=>data.image_url)
    .then(res=> bgImg = bgImg.setAttribute("src", res))
    .catch(err=>console.warn(err.message));

    // Take name anime
    fetch(`${base_url}${number}`)
    .then(res=>res.json())
    .then(data=>data.title)
    .then(res=> title = title.innerText = (res))
    .catch(err=>console.warn(err.message));
}
 window.addEventListener("load", pageLoaded);



