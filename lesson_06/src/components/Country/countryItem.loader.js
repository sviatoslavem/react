import service from "../../services/country.service";
import { API } from "../../constants/constants";
const countryItemLoader = async ({ params }) => {
  try {
    return await service.get(API.SEARCH_BY_CODE, params.id);
  } catch {
    throw new Error(err);
  }
};

export default countryItemLoader;
