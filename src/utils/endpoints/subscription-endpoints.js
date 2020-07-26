import getData from "../../utils/data/subscriptions-data";
import { GET_ONE, GET_LIST, GET_MANY, GET_MANY_REFERENCE } from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_MANY:
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/applications/subscriptions`,
        getData: getData,
      };
    case GET_MANY_REFERENCE:
      return {
        url: `${apiUrl}/msadmins/applications/subscriptions`,
        getData: (data) => {
          return getData(data, params.target, params.id);
        },
      };
    case GET_ONE:
      return {
        url: `${apiUrl}/msadmins/applications/subscriptions/${params.id}`,
        getData: getData,
      };
    default:
      throw new Error(
        `Unsupported Subscription Data Provider request type ${type}`
      );
  }
};
