
const BASE = "https://test.osouly.com/public/api";

export const API_URLS = {
  BASE,
  HOME : BASE + '/home',
  DATA : BASE + '/data',
  SEARCH : BASE + '/area?id=1',
  SERVICES : BASE + '/services',
  HEADER : {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}
