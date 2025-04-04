const API_URL = 'https://dapi.kakao.com/v3/search/book?';
const API_KEY = 'your-kakaoAPI';

const api = async params =>{
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(API_URL + queryString,{
    headers : {Authorization : API_KEY}
  });

  return response.json();
}

export default api;
