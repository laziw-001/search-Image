const apiKey = 'XCv4Gkt3GXHk7aIv8lkSxxb0T26nK6HNcJ9LbkC211Uo01JiCd0Z8pEo';

async function fetchImages(name='animal', number=10) {
  const url = `https://api.pexels.com/v1/search?query=${name}&per_page=${number}`;
  const response = await fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  });

  const data = await response.json();
  console.log(data.photos);

    const list = document.querySelector(".list");
    list.innerHTML = ''

  data.photos.forEach((element) => {
    console.log(element.src.medium);

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src=${element.src.medium} alt='logo' />
      `;

    list.appendChild(card)
  });
    
}


document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('search-input').value;
    const number = document.getElementById('number').value;
    fetchImages(input, number);
})