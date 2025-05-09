import api from '@/services/api.js'
import { COLLECTION_API_ENDPOINTS } from '@/constants/api-urls.js'

const getNCollections = async (nbOfCollections, resultPage=0) => {
  return api.get(COLLECTION_API_ENDPOINTS.GET_COLLECTIONS(nbOfCollections, resultPage))
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error fetching collections:', error)
      throw error
    })
}

const getCollectionDetails = async (id) => {
  return api.get(COLLECTION_API_ENDPOINTS.GET_COLLECTION(id))
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error fetching collection details:', error)
      throw error
    })
}

const getCollectionTiles = async (id) => {
  return api.get(COLLECTION_API_ENDPOINTS.GET_COLLECTION_TILES(id))
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error fetching collection tiles:', error)
      throw error
    })
}

export { getNCollections, getCollectionDetails, getCollectionTiles }
