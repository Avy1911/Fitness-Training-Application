export const exerciseOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '055bc57180msh1493254e0902a44p116eb2jsncd9a9b900af1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  console.log(url);
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
