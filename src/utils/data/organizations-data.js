const getOrganizationsData = (data) => {
  let mappedData = data;

  if (data instanceof Array && data[0].organizationId) {
    mappedData = data.map(mapOrganizationIdToId);
  }

  if (data instanceof Object && data.organizationId) {
    mappedData = mapOrganizationIdToId(data);
  }

  return mappedData;
};

const mapOrganizationIdToId = (organization) => {
  return { id: organization.organizationId, ...organization };
};

export default getOrganizationsData;
