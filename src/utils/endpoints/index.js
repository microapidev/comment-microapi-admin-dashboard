import adminEndpoints from "./admin-endpoints";
import settingsEndpoints from "./settings-endpoints";
import organizationsEndpoints from "./organizations-endpoints";
import applicationEndpoints from "./application-endpoints";
import subscriptionEndpoints from "./subscription-endpoints";
import plansEndpoints from "./plans-endpoints";

export default (type, resource, params) => {
  switch (resource) {
    case "admins":
      return adminEndpoints(type, params);
    case "settings":
      return settingsEndpoints(type, params);
    case "organizations":
      return organizationsEndpoints(type, params);
    case "applications":
      return applicationEndpoints(type, params);
    case "subscriptions":
      return subscriptionEndpoints(type, params);
    case "plans":
      return plansEndpoints(type, params);
    default:
      return "";
  }
};
