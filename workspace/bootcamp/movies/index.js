const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey: 'a476f990',
            s: searchTerm
        }
    });

    if(response.data.Error){
        return [];
    }
    
    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
    const movies = await fetchData(event.target.value);

    movies.forEach(movie => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `;
        document.querySelector(('#target')).appendChild((div));
    });


};

input.addEventListener('input', debounce(onInput, 500));