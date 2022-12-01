export const shallow_merge = (obj1, obj2) => {
    const acc = obj1;
    Object.entries(obj2).forEach(([k, v], i) => {
        acc[k] =
            Array.isArray(v) && Array.isArray(obj1[k])
                ? [...obj1[k], ...v]
                : typeof v === "object" && typeof obj1[k] === "object"
                    ? Object.assign(Object.assign({}, obj1[k]), v) : v;
    });
    return acc;
};
