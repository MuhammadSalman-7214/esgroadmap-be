type BaseFilter = Record<string, any>;

/**
 * @param baseFilter - Any predefined filters like { isActive: true }
 * @param search - The search string input by the user
 * @param searchableFields - Array of field names you want to search in
 */
export const safeSearch = (
  baseFilter: BaseFilter,
  search: string,
  searchableFields: string[]
) => {
  const trimmedSearch = search?.trim() || "";

  const whereClause: any = {
    ...baseFilter,
  };

  if (trimmedSearch && searchableFields.length > 0) {
    whereClause.OR = searchableFields.map((field) => ({
      [field]: { contains: trimmedSearch },
    }));
  }

  return whereClause;
};
