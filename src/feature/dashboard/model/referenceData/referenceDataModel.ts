export interface ReferenceData {
  id: number;
  code: string;
  disabled: boolean;
}
const REFERENCE_DATA_CACHE_TTL = 0 // 14400000 // 4 hours
export const getReferenceDataCacheTTL = (): number => REFERENCE_DATA_CACHE_TTL

export const fromReferenceDataList = (r: ReferenceData) => ({
  id: r.id,
  code: r.code,
  label: r.code,
  isDeleted: r.disabled,
});
