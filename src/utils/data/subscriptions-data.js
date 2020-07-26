const getSubscriptionsData = (data, target, id) => {
  let mappedData = data;

  if (Array.isArray(data.records) && data.records[0].subscriptionId) {
    mappedData = data.records.map(mapSubscriptionIdToId);

    if (target && id) {
      mappedData = mappedData.filter((item) => {
        return item[target]._id === id;
      });
    }
  }

  return mappedData;
};

const mapSubscriptionIdToId = (subscription) => {
  if (subscription.subscriptionId) {
    return {
      id: subscription.subscriptionId,
      ...subscription,
    };
  }
  return {
    id: subscription.subscriptionId,
    ...subscription,
  };
};

export default getSubscriptionsData;
