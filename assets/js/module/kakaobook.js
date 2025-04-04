const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'KakaoAK 15b424586ad13dc13b6793e37f9a4190';

const api = async params =>{
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL + queryString,{
    headers : {Authorization : API_KEY}
  });

  return response.json();
}

export default api;