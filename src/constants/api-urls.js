export const API_BASE_URL = 'https://www.rijksmuseum.nl/api/nl';

const apiKey = import.meta.env.VITE_APP_API_KEY;

export const COLLECTION_API_ENDPOINTS = {
  GET_COLLECTIONS: (resultsPerPage = 10, resultPage) => `/collection?key=${apiKey}&ps=${resultsPerPage}&p=${resultPage}`,
  GET_COLLECTION: (id) => `/collections/${id}?key=${apiKey}`,
  GET_COLLECTION_TILES: (id) => `/collections/${id}/tiles?key=${apiKey}`,
}

export const SEARCH_API_ENDPOINTS = {
  GET_SEARCH: (query, resultPage) => `/collection?key=${apiKey}&q=${query}&ps=20&p=${resultPage}`,
}
