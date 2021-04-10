const apiKey = 'nCHpQ5S7pXD9YYOf53Xj4C9pdR952ubR';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

httpCall
    .then(resp => resp.json() )
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(err => console.log(err));