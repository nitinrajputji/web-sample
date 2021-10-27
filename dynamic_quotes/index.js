let apidata = "";

const text = document.getElementById("text");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const img = document.getElementById("img");

const getRandom = () => {
  let rnum = Math.floor(Math.random() * 20);
  let textdata = apidata[rnum].text;
  let authordata = apidata[rnum].author;

  text.innerHTML = `${textdata}`;

  if (authordata == null) {
    author.innerHTML = "unknown";
  } else {
    author.innerHTML = `${authordata}`;
  }
};

const getQuotes = async () => {
  try {
    const api = "https://type.fit/api/quotes";

    let data = await fetch(api);
    apidata = await data.json();
    getRandom();
  } catch (error) {
    console.log(error);
  }
};
getQuotes();

const nextbtn = () => {
  getRandom();
};

const tweet = () => {
  let tweetdata = " https://twitter.com/intent/tweet";
  window.open(tweetdata);
};

btn.addEventListener("click", nextbtn);
img.addEventListener("click", tweet);
