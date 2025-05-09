import api from '@/services/api.js'
import { SEARCH_API_ENDPOINTS } from '@/constants/api-urls.js'

const searchWithQuery = async (query, resultPage= 1) => {
  return api.get(SEARCH_API_ENDPOINTS.GET_SEARCH(query, resultPage))
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error fetching search results:', error)
      throw error
    })
}

export {searchWithQuery}
