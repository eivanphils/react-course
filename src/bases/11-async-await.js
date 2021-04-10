const getImagen = async() => {
    try {
        const apiKey = 'nCHpQ5S7pXD9YYOf53Xj4C9pdR952ubR';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const {data} = await resp.json();
        
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.error(error)
    }
}

getImagen();