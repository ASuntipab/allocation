export interface FullCost {
    _id: string;
    year: number;
    productValue: string;
    product: string;
    unit: string;
    source: string;
    demand: string;
    deliveryPoint: string;
    M1: number;
    M2: number;
    M3: number;
    M4: number;
    M5: number;
    M6: number;
    M7: number;
    M8: number;
    M9: number;
    M10: number;
    M11: number;
    M12: number;
    calculateM1: number;
    calculateM2: number;
    calculateM3: number;
    calculateM4: number;
    calculateM5: number;
    calculateM6: number;
    calculateM7: number;
    calculateM8: number;
    calculateM9: number;
    calculateM10: number;
    calculateM11: number;
    calculateM12: number;
    isManualM1: boolean;
    isManualM2: boolean;
    isManualM3: boolean;
    isManualM4: boolean;
    isManualM5: boolean;
    isManualM6: boolean;
    isManualM7: boolean;
    isManualM8: boolean;
    isManualM9: boolean;
    isManualM10: boolean;
    isManualM11: boolean;
    isManualM12: boolean;
    formulaM1: string;
    formulaM2: string;
    formulaM3: string;
    formulaM4: string;
    formulaM5: string;
    formulaM6: string;
    formulaM7: string;
    formulaM8: string;
    formulaM9: string;
    formulaM10: string;
    formulaM11: string;
    formulaM12: string;
    costVersion: number;
    priceVersion: number;
    priceOldVersion: number;
    version: number;
    filePath: string;
    rowOrder: number;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate: Date;
}