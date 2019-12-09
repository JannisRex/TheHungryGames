import { zipUrl } from '../../config/constants'

export const FetchGermanCitiesList: any = async (): Promise<Response> => {
  return fetch(zipUrl)
    .then(async (response: Response) => response.json())
}
