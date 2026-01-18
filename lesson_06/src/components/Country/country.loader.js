import service from "../../services/country.service";
import { API } from "../../constants/constants";
const countryLoader = async () => {
  try {
    return await service.get(API.ALL_COUNTRIES);
  } catch {
    throw new Error(err);
  }
};

export default countryLoader;
