export interface Company {
    id: number,
    companyName: string,
    headquarter: {
        address: string,
        city: string,
        phone: number,
        postal: number
    }
}