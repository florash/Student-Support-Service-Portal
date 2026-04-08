export function normalizeText(value) {
  return value.trim().toLowerCase();
}

export function searchServices(services, query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  return services.filter((service) => {
    const searchableText = [
      service.name,
      service.category,
      service.summary,
      service.eligibility,
      ...(service.requiredDocuments || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function searchResources(resources, query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  return resources.filter((resource) => {
    const searchableText = [
      resource.title,
      resource.type,
      resource.category,
      resource.audience,
      resource.description,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
