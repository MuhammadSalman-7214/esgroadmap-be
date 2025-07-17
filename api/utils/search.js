/**
 * @param baseFilter - Any predefined filters like { isActive: true }
 * @param search - The search string input by the user
 * @param searchableFields - Array of field names you want to search in
 */
export const safeSearch = (baseFilter, search, searchableFields) => {
    const trimmedSearch = search?.trim() || "";
    const whereClause = {
        ...baseFilter,
    };
    if (trimmedSearch && searchableFields.length > 0) {
        whereClause.OR = searchableFields.map((field) => ({
            [field]: { contains: trimmedSearch },
        }));
    }
    return whereClause;
};
