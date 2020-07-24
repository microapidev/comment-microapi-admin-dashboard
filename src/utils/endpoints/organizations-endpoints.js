import getOrganizationsData from "../../utils/data/organizations-data";
import {
  GET_LIST,
  GET_ONE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/organizations`,
        getData: getOrganizationsData,
      };
    case GET_ONE:
      return {
        url: `${apiUrl}/msadmins/organizations/${params.id}`,
        getData: getOrganizationsData,
      };
    case GET_MANY:
      return {
        url: `${apiUrl}/msadmins/organizations`,
        getData: getOrganizationsData,
      };
    case GET_MANY_REFERENCE:
      return {
        url: `${apiUrl}/msadmins/organizations`,
        getData: getOrganizationsData,
      };
    case DELETE:
      return {
        url: `${apiUrl}/msadmins/organizations/${params.id}`,
        options: { method: "DELETE" },
        getData: getOrganizationsData,
      };
    default:
      throw new Error(
        `Unsupported Organization Data Provider request type ${type}`
      );
  }
};
