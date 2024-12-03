import "./style.css";

const imageMapping = {
    'Amber': 'images/amber.webp',
    'Barbara': 'images/barbara.webp',
    'Beidou': 'images/beidou.avif',
    'Bennett': 'images/bennet.jpg',
    'Chongyun': 'images/chongyun.webp',
    'Fischl': 'images/fischl.jpg',
    'Kaeya': 'images/kaeya.webp',
    'Lisa': 'images/lisa.webp',
    'Ningguang': 'images/ninguang.jpg',
    'Noelle': 'images/noelle.webp',
    'Razor': 'images/razor.webp',
    'Sucrose': 'images/sucrose.webp',
    'Xiangling': 'images/xiangling.webp',
    'Xingqiu': 'images/xingqiu.webp',
    'Diluc': 'images/diluc.webp',
    'Jean': 'images/jean.jpg',
    'Mona': 'images/mona.jfif',
    'Keqing': 'images/keqing.webp',
    'Qiqi': 'images/qiqi.webp',
    'Traveller (male)': 'images/traveller (male).jfif',
    'Traveller (female)': 'images/traveller (female).jpg',
    'Venti': 'images/venti.webp',
    'Klee': 'images/klee.jpg',
    'Xinyan': 'images/xinyan.webp',
    'Zhongli': 'images/zhongli.webp',
    'Diona': 'images/diona.webp',
    'Tartaglia': 'images/tartaglia.jfif',
    'Ganyu': 'images/ganyu.webp',
    'Albedo': 'images/albedo.webp',
    'Hu Tao': 'images/hu tao.webp',
    'Xiao': 'images/xiao.webp',
    'Rosaria': 'images/rosaria.webp',
    'Eula': 'images/eula.webp',
    'Yanfei': 'images/yanfei.webp',
    'Kazuha': 'images/kazuha.jpeg',
    'Ayaka': 'images/ayaka.webp',
    'Sayu': 'images/sayu.webp',
    'Yoimiya': 'images/yoimiya.jfif',
    'Sara': 'images/sara.jpg',
    'Raiden Shogun': 'images/raiden.jpg',
    'Kokomi': 'images/kokomi.jpg',
    'Thoma': 'images/thoma.jpg',
    'Gorou': 'images/gorou.jpg',
    'Itto': 'images/itto.jpg',
    'Yun Jin': 'images/yun jin.webp',
    'Shenhe': 'images/shenhe.jpg',
    'Yae': 'images/yae.webp',
    'Ayato': 'images/ayato.jfif',
    'Yelan': 'images/yelan.jpg',
    'Aloy': 'images/aloy.avif',
    'Kuki': 'images/kuki.webp',
};

async function getData() {
    try {
        const response = await fetch('https://gsi.fly.dev/characters?limit=51');
        
        if (response.status != 200) {
            alert("Failed to load characters.");
            return;
        } else {
            const data = await response.json();
            console.log(data.results);

            data.results.forEach((result) => {
                const imageUrl = imageMapping[result.name];
                document.querySelector("div.container").insertAdjacentHTML("beforeend", `
                    <div class="card h-2/4 w-1/6 border-4 rounded-3xl flex flex-col mx-4 items-center bg-cover bg-white p-7" data-name="${result.name}">
                        <h1 style= "font-family: Urbanist">${result.name}</h1>
                        <img src="${imageUrl}" alt="${result.name}" class ="w-11/12 h-5/6 rounded-2xl object-cover">
                    </div>
                `);
                const card = document.querySelector(`.card[data-name="${result.name}"]`);

                card.addEventListener('click', function() {
                    clearBodyAndShowStats(result);
                });
            });
        }
    } catch (error) {
        alert("hey i couldnt find that character");
    }
}
getData();

function clearBodyAndShowStats(result) {
    const body = document.querySelector('body');
    body.innerHTML = '';
    body.insertAdjacentHTML("beforeend", `
        <div class="stats-card border-4 rounded-3xl w-1/2 mx-auto p-5 bg-white flex flex-col items-center">
            <h1 style= "font-family: Urbanist" class="text-xl font-bold">${result.name}</h1>
            <img src="${imageMapping[result.name]}" alt="${result.name}" class="w-1/2 rounded-2xl object-cover mb-4">
            <p style= "font-family: Urbanist" style= "font-family: Edu Australia VIC WA NT Hand Precursive;"><strong>Rarity:</strong> ${result.rarity}</p>
            <p style= "font-family: Urbanist" ><strong>Weapon:</strong> ${result.weapon}</p>
            <p style= "font-family: Urbanist" ><strong>Vision:</strong> ${result.vision}</p>
        </div>
    `);
};
function backgroundImages() {
    if (result.vision === 'Pyro') {
        data.results.forEach((result) => result.style.backgroundImage === '')
    }
}